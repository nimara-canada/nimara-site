import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';
import { 
  timingSafeEqual, 
  checkRateLimit, 
  resetRateLimit, 
  getClientIp,
  generateSessionToken
} from '../_shared/security.ts';

const allowedOrigins = ['https://nimara.ca', 'https://www.nimara.ca'];

// In-memory session store (for edge function scope)
// In production, consider using a database or KV store for persistence
const sessionStore = new Map<string, { createdAt: number; expiresAt: number }>();
const SESSION_DURATION_MS = 60 * 60 * 1000; // 1 hour

const getCorsHeaders = (req: Request) => {
  const origin = req.headers.get('origin') || '';
  return {
    'Access-Control-Allow-Origin': allowedOrigins.includes(origin) ? origin : allowedOrigins[0],
    'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  };
};

interface AuditRequest {
  action: string;
  password?: string;
  sessionToken?: string;
  data?: any;
  id?: string;
}

/**
 * Validate session token
 */
function validateSession(token: string): boolean {
  const session = sessionStore.get(token);
  if (!session) return false;
  
  const now = Date.now();
  if (now > session.expiresAt) {
    sessionStore.delete(token);
    return false;
  }
  
  return true;
}

/**
 * Clean up expired sessions
 */
function cleanupSessions(): void {
  const now = Date.now();
  for (const [token, session] of sessionStore.entries()) {
    if (now > session.expiresAt) {
      sessionStore.delete(token);
    }
  }
}

Deno.serve(async (req) => {
  const corsHeaders = getCorsHeaders(req);
  
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const adminPassword = Deno.env.get('AUDIT_ADMIN_PASSWORD')!;

    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    const body: AuditRequest = await req.json();
    const { action, password, sessionToken, data, id } = body;

    const clientIp = getClientIp(req);

    // Handle login action with rate limiting
    if (action === 'login') {
      // Check rate limit
      const rateLimit = checkRateLimit(clientIp, {
        maxAttempts: 5,
        windowMs: 60 * 60 * 1000,     // 1 hour
        lockoutMs: 15 * 60 * 1000,    // 15 minutes
      });

      if (!rateLimit.allowed) {
        console.log(`Rate limited IP: ${clientIp}`);
        return new Response(
          JSON.stringify({ 
            error: 'Too many failed attempts. Please try again later.',
            retryAfter: rateLimit.retryAfter 
          }),
          { 
            status: 429, 
            headers: { 
              ...corsHeaders, 
              'Content-Type': 'application/json',
              'Retry-After': String(rateLimit.retryAfter || 900)
            } 
          }
        );
      }

      // Use constant-time comparison for password
      if (!password || !timingSafeEqual(password, adminPassword)) {
        console.log(`Invalid password attempt from IP: ${clientIp}`);
        return new Response(
          JSON.stringify({ error: 'Invalid password' }),
          { status: 401, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      // Password correct - reset rate limit and create session
      resetRateLimit(clientIp);
      cleanupSessions();
      
      const token = await generateSessionToken();
      const now = Date.now();
      sessionStore.set(token, {
        createdAt: now,
        expiresAt: now + SESSION_DURATION_MS,
      });

      console.log(`Successful login from IP: ${clientIp}`);
      return new Response(
        JSON.stringify({ 
          data: { 
            sessionToken: token,
            expiresIn: SESSION_DURATION_MS 
          } 
        }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Handle logout action
    if (action === 'logout') {
      if (sessionToken) {
        sessionStore.delete(sessionToken);
      }
      return new Response(
        JSON.stringify({ data: { success: true } }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // For all other actions, validate session token
    if (!sessionToken || !validateSession(sessionToken)) {
      console.log('Invalid or expired session token');
      return new Response(
        JSON.stringify({ error: 'Invalid or expired session' }),
        { status: 401, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    console.log(`Authenticated request: ${action}`);

    let result;

    switch (action) {
      // Audit Runs
      case 'getAuditRuns':
        result = await supabase
          .from('audit_runs')
          .select('*')
          .order('created_at', { ascending: false });
        break;

      case 'getAuditRun':
        result = await supabase
          .from('audit_runs')
          .select('*')
          .eq('id', id)
          .single();
        break;

      case 'createAuditRun':
        result = await supabase
          .from('audit_runs')
          .insert(data)
          .select()
          .single();
        break;

      case 'updateAuditRun':
        result = await supabase
          .from('audit_runs')
          .update(data)
          .eq('id', id)
          .select()
          .single();
        break;

      case 'deleteAuditRun':
        result = await supabase
          .from('audit_runs')
          .delete()
          .eq('id', id);
        break;

      // Pages or Flows
      case 'getPagesOrFlows':
        result = await supabase
          .from('pages_or_flows')
          .select('*')
          .eq('audit_run_id', id)
          .order('created_at', { ascending: true });
        break;

      case 'createPageOrFlow':
        result = await supabase
          .from('pages_or_flows')
          .insert(data)
          .select()
          .single();
        break;

      case 'updatePageOrFlow':
        result = await supabase
          .from('pages_or_flows')
          .update(data)
          .eq('id', id)
          .select()
          .single();
        break;

      case 'deletePageOrFlow':
        result = await supabase
          .from('pages_or_flows')
          .delete()
          .eq('id', id);
        break;

      // Tracker Cookies
      case 'getTrackerCookies':
        result = await supabase
          .from('tracker_cookies')
          .select('*')
          .eq('audit_run_id', id)
          .order('created_at', { ascending: true });
        break;

      case 'createTrackerCookie':
        result = await supabase
          .from('tracker_cookies')
          .insert(data)
          .select()
          .single();
        break;

      case 'updateTrackerCookie':
        result = await supabase
          .from('tracker_cookies')
          .update(data)
          .eq('id', id)
          .select()
          .single();
        break;

      case 'deleteTrackerCookie':
        result = await supabase
          .from('tracker_cookies')
          .delete()
          .eq('id', id);
        break;

      // Third Party Vendors
      case 'getThirdPartyVendors':
        result = await supabase
          .from('third_party_vendors')
          .select('*')
          .eq('audit_run_id', id)
          .order('created_at', { ascending: true });
        break;

      case 'createThirdPartyVendor':
        result = await supabase
          .from('third_party_vendors')
          .insert(data)
          .select()
          .single();
        break;

      case 'updateThirdPartyVendor':
        result = await supabase
          .from('third_party_vendors')
          .update(data)
          .eq('id', id)
          .select()
          .single();
        break;

      case 'deleteThirdPartyVendor':
        result = await supabase
          .from('third_party_vendors')
          .delete()
          .eq('id', id);
        break;

      // Findings
      case 'getFindings':
        result = await supabase
          .from('findings')
          .select('*')
          .eq('audit_run_id', id)
          .order('severity', { ascending: true })
          .order('created_at', { ascending: true });
        break;

      case 'getAllFindings':
        result = await supabase
          .from('findings')
          .select('*, audit_runs(primary_site_url)')
          .order('severity', { ascending: true })
          .order('created_at', { ascending: true });
        break;

      case 'createFinding':
        result = await supabase
          .from('findings')
          .insert(data)
          .select()
          .single();
        break;

      case 'updateFinding':
        result = await supabase
          .from('findings')
          .update(data)
          .eq('id', id)
          .select()
          .single();
        break;

      case 'deleteFinding':
        result = await supabase
          .from('findings')
          .delete()
          .eq('id', id);
        break;

      // Get full audit data for report
      case 'getFullAuditData':
        const auditRun = await supabase
          .from('audit_runs')
          .select('*')
          .eq('id', id)
          .single();

        const pagesOrFlows = await supabase
          .from('pages_or_flows')
          .select('*')
          .eq('audit_run_id', id);

        const trackerCookies = await supabase
          .from('tracker_cookies')
          .select('*')
          .eq('audit_run_id', id);

        const thirdPartyVendors = await supabase
          .from('third_party_vendors')
          .select('*')
          .eq('audit_run_id', id);

        const findings = await supabase
          .from('findings')
          .select('*')
          .eq('audit_run_id', id)
          .order('severity', { ascending: true });

        result = {
          data: {
            auditRun: auditRun.data,
            pagesOrFlows: pagesOrFlows.data,
            trackerCookies: trackerCookies.data,
            thirdPartyVendors: thirdPartyVendors.data,
            findings: findings.data,
          },
          error: auditRun.error || pagesOrFlows.error || trackerCookies.error || thirdPartyVendors.error || findings.error,
        };
        break;

      // Dashboard stats
      case 'getDashboardStats':
        const runs = await supabase
          .from('audit_runs')
          .select('id, overall_risk_rating, is_complete, created_at')
          .order('created_at', { ascending: false })
          .limit(1);

        const totalFindings = await supabase
          .from('findings')
          .select('id, severity, status, owner, pipeda_principles');

        const totalPages = await supabase
          .from('pages_or_flows')
          .select('id');

        const totalTrackers = await supabase
          .from('tracker_cookies')
          .select('id');

        const totalVendors = await supabase
          .from('third_party_vendors')
          .select('id');

        result = {
          data: {
            latestAudit: runs.data?.[0] || null,
            findings: totalFindings.data || [],
            pagesCount: totalPages.data?.length || 0,
            trackersCount: totalTrackers.data?.length || 0,
            vendorsCount: totalVendors.data?.length || 0,
          },
          error: null,
        };
        break;

      default:
        return new Response(
          JSON.stringify({ error: 'Unknown action' }),
          { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
    }

    if (result.error) {
      console.error(`Error in ${action}:`, result.error);
      return new Response(
        JSON.stringify({ error: result.error.message }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    return new Response(
      JSON.stringify({ data: result.data }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Unhandled error:', error);
    const message = error instanceof Error ? error.message : 'Unknown error';
    return new Response(
      JSON.stringify({ error: message }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
