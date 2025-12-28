-- PIPEDA Privacy Audit Tool Database Schema

-- Enum for risk ratings
CREATE TYPE public.risk_rating AS ENUM ('Low', 'Medium', 'High');

-- Enum for severity levels
CREATE TYPE public.severity_level AS ENUM ('Critical', 'High', 'Medium', 'Low');

-- Enum for finding status
CREATE TYPE public.finding_status AS ENUM ('Open', 'In Progress', 'Done', 'Deferred');

-- Enum for owner types
CREATE TYPE public.owner_type AS ENUM ('Web', 'Marketing', 'Ops', 'Legal');

-- Enum for effort sizes
CREATE TYPE public.effort_size AS ENUM ('S', 'M', 'L');

-- Enum for consent methods
CREATE TYPE public.consent_method AS ENUM ('checkbox', 'implied', 'opt-in', 'none');

-- Enum for tracker types
CREATE TYPE public.tracker_type AS ENUM ('cookie', 'pixel', 'script', 'SDK');

-- Enum for vendor categories
CREATE TYPE public.vendor_category AS ENUM ('analytics', 'forms', 'booking', 'email', 'hosting', 'payments', 'chat', 'automation', 'other');

-- Enum for contract status
CREATE TYPE public.contract_status AS ENUM ('none', 'in_progress', 'complete');

-- Enum for compliance status
CREATE TYPE public.compliance_status AS ENUM ('Compliant', 'Partially compliant', 'Not compliant', 'Unverified');

-- PIPEDA Principles reference (hardcoded in app, but stored for findings)
CREATE TYPE public.pipeda_principle AS ENUM (
  'Accountability',
  'Identifying Purposes',
  'Consent',
  'Limiting Collection',
  'Limiting Use/Disclosure/Retention',
  'Accuracy',
  'Safeguards',
  'Openness',
  'Individual Access',
  'Challenging Compliance'
);

-- Audit Runs table
CREATE TABLE public.audit_runs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  primary_site_url TEXT NOT NULL,
  included_properties TEXT[] DEFAULT '{}',
  stack_tools JSONB DEFAULT '{}',
  overall_risk_rating public.risk_rating DEFAULT 'Medium',
  summary_top_10_gaps TEXT,
  notes TEXT,
  current_step INTEGER DEFAULT 1,
  is_complete BOOLEAN DEFAULT false,
  last_audit_date TIMESTAMP WITH TIME ZONE
);

-- Pages or Flows table
CREATE TABLE public.pages_or_flows (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  audit_run_id UUID NOT NULL REFERENCES public.audit_runs(id) ON DELETE CASCADE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  name TEXT NOT NULL,
  url TEXT,
  data_collected TEXT[] DEFAULT '{}',
  purpose TEXT,
  consent_method public.consent_method DEFAULT 'none',
  confirmation_behavior TEXT,
  storage_destination TEXT,
  retention TEXT,
  evidence_notes TEXT,
  evidence_files TEXT[] DEFAULT '{}'
);

-- Tracker Cookies table
CREATE TABLE public.tracker_cookies (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  audit_run_id UUID NOT NULL REFERENCES public.audit_runs(id) ON DELETE CASCADE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  name TEXT NOT NULL,
  type public.tracker_type DEFAULT 'cookie',
  vendor TEXT,
  purpose TEXT,
  is_essential BOOLEAN DEFAULT false,
  fires_before_consent public.compliance_status DEFAULT 'Unverified',
  expiry TEXT,
  evidence_paste TEXT,
  evidence_files TEXT[] DEFAULT '{}'
);

-- Third Party Vendors table
CREATE TABLE public.third_party_vendors (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  audit_run_id UUID NOT NULL REFERENCES public.audit_runs(id) ON DELETE CASCADE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  vendor_name TEXT NOT NULL,
  category public.vendor_category DEFAULT 'other',
  data_shared TEXT,
  cross_border_processing public.compliance_status DEFAULT 'Unverified',
  countries TEXT,
  contract_dpa_status public.contract_status DEFAULT 'none',
  evidence_link TEXT,
  evidence_files TEXT[] DEFAULT '{}'
);

-- Findings table
CREATE TABLE public.findings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  audit_run_id UUID NOT NULL REFERENCES public.audit_runs(id) ON DELETE CASCADE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  finding_title TEXT NOT NULL,
  url_or_scope TEXT,
  what_is_happening TEXT,
  personal_info_involved TEXT,
  pipeda_principles public.pipeda_principle[] DEFAULT '{}',
  severity public.severity_level DEFAULT 'Medium',
  why_it_matters TEXT,
  exact_fix TEXT,
  owner public.owner_type DEFAULT 'Web',
  effort public.effort_size DEFAULT 'M',
  status public.finding_status DEFAULT 'Open',
  verification_steps TEXT,
  evidence_links TEXT[] DEFAULT '{}',
  evidence_files TEXT[] DEFAULT '{}'
);

-- Admin password hash storage (simple password gate)
CREATE TABLE public.audit_admin_config (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  password_hash TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.audit_runs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.pages_or_flows ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.tracker_cookies ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.third_party_vendors ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.findings ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.audit_admin_config ENABLE ROW LEVEL SECURITY;

-- RLS Policies: All tables are admin-only (accessed via edge function with service role)
-- Public read/write is disabled; access is controlled through password-protected edge functions

CREATE POLICY "No public access to audit_runs"
ON public.audit_runs
FOR ALL
USING (false);

CREATE POLICY "No public access to pages_or_flows"
ON public.pages_or_flows
FOR ALL
USING (false);

CREATE POLICY "No public access to tracker_cookies"
ON public.tracker_cookies
FOR ALL
USING (false);

CREATE POLICY "No public access to third_party_vendors"
ON public.third_party_vendors
FOR ALL
USING (false);

CREATE POLICY "No public access to findings"
ON public.findings
FOR ALL
USING (false);

CREATE POLICY "No public access to audit_admin_config"
ON public.audit_admin_config
FOR ALL
USING (false);

-- Create indexes for common queries
CREATE INDEX idx_pages_or_flows_audit_run ON public.pages_or_flows(audit_run_id);
CREATE INDEX idx_tracker_cookies_audit_run ON public.tracker_cookies(audit_run_id);
CREATE INDEX idx_third_party_vendors_audit_run ON public.third_party_vendors(audit_run_id);
CREATE INDEX idx_findings_audit_run ON public.findings(audit_run_id);
CREATE INDEX idx_findings_severity ON public.findings(severity);
CREATE INDEX idx_findings_status ON public.findings(status);
CREATE INDEX idx_findings_owner ON public.findings(owner);

-- Trigger for updated_at
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

CREATE TRIGGER update_audit_runs_updated_at
BEFORE UPDATE ON public.audit_runs
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_findings_updated_at
BEFORE UPDATE ON public.findings
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_audit_admin_config_updated_at
BEFORE UPDATE ON public.audit_admin_config
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();