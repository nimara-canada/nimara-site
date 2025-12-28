import { supabase } from "@/integrations/supabase/client";

const STORAGE_KEY = 'audit_admin_password';

export const getStoredPassword = (): string | null => {
  return sessionStorage.getItem(STORAGE_KEY);
};

export const setStoredPassword = (password: string): void => {
  sessionStorage.setItem(STORAGE_KEY, password);
};

export const clearStoredPassword = (): void => {
  sessionStorage.removeItem(STORAGE_KEY);
};

export const isAuthenticated = (): boolean => {
  return !!getStoredPassword();
};

async function callAuditApi(action: string, data?: any, id?: string) {
  const password = getStoredPassword();
  if (!password) {
    throw new Error('Not authenticated');
  }

  const { data: result, error } = await supabase.functions.invoke('privacy-audit', {
    body: { action, password, data, id },
  });

  if (error) {
    throw new Error(error.message);
  }

  if (result.error) {
    throw new Error(result.error);
  }

  return result.data;
}

// Auth
export async function verifyPassword(password: string): Promise<boolean> {
  try {
    const { data, error } = await supabase.functions.invoke('privacy-audit', {
      body: { action: 'getDashboardStats', password },
    });
    
    if (error || data?.error) {
      return false;
    }
    
    setStoredPassword(password);
    return true;
  } catch {
    return false;
  }
}

// Dashboard
export async function getDashboardStats() {
  return callAuditApi('getDashboardStats');
}

// Audit Runs
export async function getAuditRuns() {
  return callAuditApi('getAuditRuns');
}

export async function getAuditRun(id: string) {
  return callAuditApi('getAuditRun', undefined, id);
}

export async function createAuditRun(data: any) {
  return callAuditApi('createAuditRun', data);
}

export async function updateAuditRun(id: string, data: any) {
  return callAuditApi('updateAuditRun', data, id);
}

export async function deleteAuditRun(id: string) {
  return callAuditApi('deleteAuditRun', undefined, id);
}

// Pages or Flows
export async function getPagesOrFlows(auditRunId: string) {
  return callAuditApi('getPagesOrFlows', undefined, auditRunId);
}

export async function createPageOrFlow(data: any) {
  return callAuditApi('createPageOrFlow', data);
}

export async function updatePageOrFlow(id: string, data: any) {
  return callAuditApi('updatePageOrFlow', data, id);
}

export async function deletePageOrFlow(id: string) {
  return callAuditApi('deletePageOrFlow', undefined, id);
}

// Tracker Cookies
export async function getTrackerCookies(auditRunId: string) {
  return callAuditApi('getTrackerCookies', undefined, auditRunId);
}

export async function createTrackerCookie(data: any) {
  return callAuditApi('createTrackerCookie', data);
}

export async function updateTrackerCookie(id: string, data: any) {
  return callAuditApi('updateTrackerCookie', data, id);
}

export async function deleteTrackerCookie(id: string) {
  return callAuditApi('deleteTrackerCookie', undefined, id);
}

// Third Party Vendors
export async function getThirdPartyVendors(auditRunId: string) {
  return callAuditApi('getThirdPartyVendors', undefined, auditRunId);
}

export async function createThirdPartyVendor(data: any) {
  return callAuditApi('createThirdPartyVendor', data);
}

export async function updateThirdPartyVendor(id: string, data: any) {
  return callAuditApi('updateThirdPartyVendor', data, id);
}

export async function deleteThirdPartyVendor(id: string) {
  return callAuditApi('deleteThirdPartyVendor', undefined, id);
}

// Findings
export async function getFindings(auditRunId: string) {
  return callAuditApi('getFindings', undefined, auditRunId);
}

export async function getAllFindings() {
  return callAuditApi('getAllFindings');
}

export async function createFinding(data: any) {
  return callAuditApi('createFinding', data);
}

export async function updateFinding(id: string, data: any) {
  return callAuditApi('updateFinding', data, id);
}

export async function deleteFinding(id: string) {
  return callAuditApi('deleteFinding', undefined, id);
}

// Full audit data
export async function getFullAuditData(auditRunId: string) {
  return callAuditApi('getFullAuditData', undefined, auditRunId);
}

// Types
export type RiskRating = 'Low' | 'Medium' | 'High';
export type SeverityLevel = 'Critical' | 'High' | 'Medium' | 'Low';
export type FindingStatus = 'Open' | 'In Progress' | 'Done' | 'Deferred';
export type OwnerType = 'Web' | 'Marketing' | 'Ops' | 'Legal';
export type EffortSize = 'S' | 'M' | 'L';
export type ConsentMethod = 'checkbox' | 'implied' | 'opt-in' | 'none';
export type TrackerType = 'cookie' | 'pixel' | 'script' | 'SDK';
export type VendorCategory = 'analytics' | 'forms' | 'booking' | 'email' | 'hosting' | 'payments' | 'chat' | 'automation' | 'other';
export type ContractStatus = 'none' | 'in_progress' | 'complete';
export type ComplianceStatus = 'Compliant' | 'Partially compliant' | 'Not compliant' | 'Unverified';

export type PipedaPrinciple = 
  | 'Accountability'
  | 'Identifying Purposes'
  | 'Consent'
  | 'Limiting Collection'
  | 'Limiting Use/Disclosure/Retention'
  | 'Accuracy'
  | 'Safeguards'
  | 'Openness'
  | 'Individual Access'
  | 'Challenging Compliance';

export const PIPEDA_PRINCIPLES: PipedaPrinciple[] = [
  'Accountability',
  'Identifying Purposes',
  'Consent',
  'Limiting Collection',
  'Limiting Use/Disclosure/Retention',
  'Accuracy',
  'Safeguards',
  'Openness',
  'Individual Access',
  'Challenging Compliance',
];

export interface AuditRun {
  id: string;
  created_at: string;
  updated_at: string;
  primary_site_url: string;
  included_properties: string[];
  stack_tools: Record<string, any>;
  overall_risk_rating: RiskRating;
  summary_top_10_gaps: string | null;
  notes: string | null;
  current_step: number;
  is_complete: boolean;
  last_audit_date: string | null;
}

export interface PageOrFlow {
  id: string;
  audit_run_id: string;
  created_at: string;
  name: string;
  url: string | null;
  data_collected: string[];
  purpose: string | null;
  consent_method: ConsentMethod;
  confirmation_behavior: string | null;
  storage_destination: string | null;
  retention: string | null;
  evidence_notes: string | null;
  evidence_files: string[];
}

export interface TrackerCookie {
  id: string;
  audit_run_id: string;
  created_at: string;
  name: string;
  type: TrackerType;
  vendor: string | null;
  purpose: string | null;
  is_essential: boolean;
  fires_before_consent: ComplianceStatus;
  expiry: string | null;
  evidence_paste: string | null;
  evidence_files: string[];
}

export interface ThirdPartyVendor {
  id: string;
  audit_run_id: string;
  created_at: string;
  vendor_name: string;
  category: VendorCategory;
  data_shared: string | null;
  cross_border_processing: ComplianceStatus;
  countries: string | null;
  contract_dpa_status: ContractStatus;
  evidence_link: string | null;
  evidence_files: string[];
}

export interface Finding {
  id: string;
  audit_run_id: string;
  created_at: string;
  updated_at: string;
  finding_title: string;
  url_or_scope: string | null;
  what_is_happening: string | null;
  personal_info_involved: string | null;
  pipeda_principles: PipedaPrinciple[];
  severity: SeverityLevel;
  why_it_matters: string | null;
  exact_fix: string | null;
  owner: OwnerType;
  effort: EffortSize;
  status: FindingStatus;
  verification_steps: string | null;
  evidence_links: string[];
  evidence_files: string[];
}
