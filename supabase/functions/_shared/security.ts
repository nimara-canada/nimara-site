/**
 * Shared security utilities for edge functions
 */

/**
 * HTML escapes a string to prevent XSS attacks in email templates
 */
export function escapeHtml(text: string): string {
  if (!text || typeof text !== 'string') return '';
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}

/**
 * Constant-time string comparison to prevent timing attacks
 */
export function timingSafeEqual(a: string, b: string): boolean {
  if (typeof a !== 'string' || typeof b !== 'string') {
    return false;
  }
  
  const aBytes = new TextEncoder().encode(a);
  const bBytes = new TextEncoder().encode(b);
  
  if (aBytes.length !== bBytes.length) {
    // Still do comparison to maintain constant time
    let result = 0;
    for (let i = 0; i < aBytes.length; i++) {
      result |= aBytes[i] ^ (bBytes[i % bBytes.length] || 0);
    }
    return false;
  }
  
  let result = 0;
  for (let i = 0; i < aBytes.length; i++) {
    result |= aBytes[i] ^ bBytes[i];
  }
  return result === 0;
}

/**
 * Simple in-memory rate limiter for edge functions
 * Uses IP address as key, tracks attempts within time window
 */
interface RateLimitEntry {
  attempts: number;
  firstAttempt: number;
  lockedUntil?: number;
}

const rateLimitStore = new Map<string, RateLimitEntry>();

export interface RateLimitConfig {
  maxAttempts: number;      // Max attempts before lockout
  windowMs: number;         // Time window in milliseconds
  lockoutMs: number;        // Lockout duration in milliseconds
}

const DEFAULT_CONFIG: RateLimitConfig = {
  maxAttempts: 5,
  windowMs: 60 * 60 * 1000,     // 1 hour window
  lockoutMs: 15 * 60 * 1000,    // 15 minute lockout
};

/**
 * Check if a request should be rate limited
 * @returns { allowed: boolean, retryAfter?: number }
 */
export function checkRateLimit(
  ip: string,
  config: RateLimitConfig = DEFAULT_CONFIG
): { allowed: boolean; retryAfter?: number } {
  const now = Date.now();
  const entry = rateLimitStore.get(ip);
  
  // Clean up old entries periodically
  if (rateLimitStore.size > 10000) {
    for (const [key, val] of rateLimitStore.entries()) {
      if (now - val.firstAttempt > config.windowMs * 2) {
        rateLimitStore.delete(key);
      }
    }
  }
  
  if (!entry) {
    rateLimitStore.set(ip, { attempts: 1, firstAttempt: now });
    return { allowed: true };
  }
  
  // Check if currently locked out
  if (entry.lockedUntil && now < entry.lockedUntil) {
    return { 
      allowed: false, 
      retryAfter: Math.ceil((entry.lockedUntil - now) / 1000) 
    };
  }
  
  // Check if window has expired
  if (now - entry.firstAttempt > config.windowMs) {
    rateLimitStore.set(ip, { attempts: 1, firstAttempt: now });
    return { allowed: true };
  }
  
  // Increment attempts
  entry.attempts++;
  
  // Check if exceeded max attempts
  if (entry.attempts > config.maxAttempts) {
    entry.lockedUntil = now + config.lockoutMs;
    return { 
      allowed: false, 
      retryAfter: Math.ceil(config.lockoutMs / 1000) 
    };
  }
  
  return { allowed: true };
}

/**
 * Reset rate limit for an IP (call on successful auth)
 */
export function resetRateLimit(ip: string): void {
  rateLimitStore.delete(ip);
}

/**
 * Get client IP from request headers
 */
export function getClientIp(req: Request): string {
  return (
    req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    req.headers.get('x-real-ip') ||
    req.headers.get('cf-connecting-ip') ||
    'unknown'
  );
}

/**
 * Generate a secure session token
 */
export async function generateSessionToken(): Promise<string> {
  const array = new Uint8Array(32);
  crypto.getRandomValues(array);
  return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
}
