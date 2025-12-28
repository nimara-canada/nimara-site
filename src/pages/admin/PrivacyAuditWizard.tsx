import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { AuditAuthGate } from "@/components/audit/AuditAuthGate";
import { AuditLayout } from "@/components/audit/AuditLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  ChevronLeft, 
  ChevronRight, 
  Plus, 
  Trash2, 
  Loader2,
  Check,
  AlertTriangle,
  FileText,
  Save
} from "lucide-react";
import { 
  createAuditRun, 
  getAuditRun, 
  updateAuditRun,
  getPagesOrFlows,
  createPageOrFlow,
  updatePageOrFlow,
  deletePageOrFlow,
  getTrackerCookies,
  createTrackerCookie,
  updateTrackerCookie,
  deleteTrackerCookie,
  getThirdPartyVendors,
  createThirdPartyVendor,
  updateThirdPartyVendor,
  deleteThirdPartyVendor,
  getFindings,
  createFinding,
  updateFinding,
  deleteFinding,
  type AuditRun,
  type PageOrFlow,
  type TrackerCookie,
  type ThirdPartyVendor,
  type Finding,
  PIPEDA_PRINCIPLES,
  type PipedaPrinciple
} from "@/lib/auditApi";
import { useToast } from "@/hooks/use-toast";

const WIZARD_STEPS = [
  { id: 1, title: "Scope & Properties", description: "Define audit scope" },
  { id: 2, title: "Data Collection", description: "Inventory forms & flows" },
  { id: 3, title: "Cookies & Tracking", description: "Tracking technologies" },
  { id: 4, title: "Third Parties", description: "Vendors & cross-border" },
  { id: 5, title: "Privacy Policy", description: "Policy review" },
  { id: 6, title: "Consent", description: "Meaningful consent" },
  { id: 7, title: "Access Requests", description: "Individual rights" },
  { id: 8, title: "Safeguards", description: "Security measures" },
  { id: 9, title: "Retention", description: "Data lifecycle" },
  { id: 10, title: "Breach Readiness", description: "Incident response" },
  { id: 11, title: "Generate Report", description: "Review & export" },
];

const CHECKLIST_ITEMS: Record<number, { text: string; principle: PipedaPrinciple }[]> = {
  5: [
    { text: "Policy states what personal information is collected", principle: "Openness" },
    { text: "Policy identifies purposes for collection", principle: "Identifying Purposes" },
    { text: "Policy discloses third-party sharing", principle: "Openness" },
    { text: "Policy lists service providers", principle: "Openness" },
    { text: "Policy includes cross-border processing notice", principle: "Openness" },
    { text: "Policy describes retention approach", principle: "Limiting Use/Disclosure/Retention" },
    { text: "Policy summarizes safeguards", principle: "Safeguards" },
    { text: "Policy explains how to withdraw consent", principle: "Consent" },
    { text: "Policy describes access/correction process", principle: "Individual Access" },
    { text: "Policy includes complaint process", principle: "Challenging Compliance" },
    { text: "Policy provides privacy contact information", principle: "Accountability" },
  ],
  6: [
    { text: "Purposes are clearly stated at point of collection", principle: "Consent" },
    { text: "No dark patterns in consent flows", principle: "Consent" },
    { text: "Withdrawal mechanism is accessible", principle: "Consent" },
    { text: "Non-essential trackers blocked before consent", principle: "Consent" },
    { text: "Consent is specific to purposes", principle: "Consent" },
  ],
  7: [
    { text: "Public method exists for access requests (email/form)", principle: "Individual Access" },
    { text: "Response timeframe documented (<30 days)", principle: "Individual Access" },
    { text: "Process exists for corrections", principle: "Accuracy" },
    { text: "Identity verification process defined", principle: "Individual Access" },
  ],
  8: [
    { text: "HTTPS enforced on all pages", principle: "Safeguards" },
    { text: "Access controls implemented", principle: "Safeguards" },
    { text: "Least privilege principle followed", principle: "Safeguards" },
    { text: "Admin accounts secured with MFA", principle: "Safeguards" },
    { text: "No public link leakage risk", principle: "Safeguards" },
    { text: "Encryption in transit", principle: "Safeguards" },
    { text: "Backup procedures in place", principle: "Safeguards" },
    { text: "Logging enabled", principle: "Safeguards" },
  ],
  9: [
    { text: "Retention defined for leads", principle: "Limiting Use/Disclosure/Retention" },
    { text: "Retention defined for clients", principle: "Limiting Use/Disclosure/Retention" },
    { text: "Retention defined for applicants", principle: "Limiting Use/Disclosure/Retention" },
    { text: "Deletion process documented", principle: "Limiting Use/Disclosure/Retention" },
    { text: "Deletion process is actionable", principle: "Limiting Use/Disclosure/Retention" },
  ],
  10: [
    { text: "Ability to assess real risk of significant harm", principle: "Accountability" },
    { text: "Process to notify OPC when required", principle: "Accountability" },
    { text: "Process to notify affected individuals", principle: "Accountability" },
    { text: "Breach records maintained", principle: "Accountability" },
    { text: "Breach response team identified", principle: "Accountability" },
  ],
};

export default function PrivacyAuditWizard() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  
  // Audit data
  const [auditRun, setAuditRun] = useState<AuditRun | null>(null);
  const [pagesOrFlows, setPagesOrFlows] = useState<PageOrFlow[]>([]);
  const [trackerCookies, setTrackerCookies] = useState<TrackerCookie[]>([]);
  const [thirdPartyVendors, setThirdPartyVendors] = useState<ThirdPartyVendor[]>([]);
  const [findings, setFindings] = useState<Finding[]>([]);
  
  // Form states
  const [primaryUrl, setPrimaryUrl] = useState("https://nimara.ca");
  const [includedProperties, setIncludedProperties] = useState<string[]>([]);
  const [newProperty, setNewProperty] = useState("");
  const [stackTools, setStackTools] = useState<Record<string, string>>({
    forms: "",
    scheduling: "",
    analytics: "",
    crm: "",
    hosting: "",
    storage: "",
    payments: "",
  });
  const [notes, setNotes] = useState("");
  const [checklistStates, setChecklistStates] = useState<Record<string, boolean>>({});
  const [evidenceNotes, setEvidenceNotes] = useState<Record<number, string>>({});

  const auditId = searchParams.get("id");

  useEffect(() => {
    async function loadAudit() {
      if (auditId) {
        try {
          const [audit, pages, trackers, vendors, findingsData] = await Promise.all([
            getAuditRun(auditId),
            getPagesOrFlows(auditId),
            getTrackerCookies(auditId),
            getThirdPartyVendors(auditId),
            getFindings(auditId),
          ]);
          
          setAuditRun(audit);
          setPrimaryUrl(audit.primary_site_url);
          setIncludedProperties(audit.included_properties || []);
          setStackTools(audit.stack_tools || {});
          setNotes(audit.notes || "");
          setCurrentStep(audit.current_step || 1);
          
          setPagesOrFlows(pages || []);
          setTrackerCookies(trackers || []);
          setThirdPartyVendors(vendors || []);
          setFindings(findingsData || []);
        } catch (error) {
          toast({
            title: "Error loading audit",
            description: error instanceof Error ? error.message : "Unknown error",
            variant: "destructive",
          });
        }
      }
      setIsLoading(false);
    }
    loadAudit();
  }, [auditId, toast]);

  const saveProgress = async () => {
    setIsSaving(true);
    try {
      const data = {
        primary_site_url: primaryUrl,
        included_properties: includedProperties,
        stack_tools: stackTools,
        notes,
        current_step: currentStep,
      };

      if (auditRun) {
        await updateAuditRun(auditRun.id, data);
      } else {
        const newAudit = await createAuditRun(data);
        setAuditRun(newAudit);
        navigate(`/admin/privacy-audit/wizard?id=${newAudit.id}`, { replace: true });
      }
      
      toast({ title: "Progress saved" });
    } catch (error) {
      toast({
        title: "Error saving",
        description: error instanceof Error ? error.message : "Unknown error",
        variant: "destructive",
      });
    } finally {
      setIsSaving(false);
    }
  };

  const goToStep = async (step: number) => {
    await saveProgress();
    setCurrentStep(step);
  };

  const addProperty = () => {
    if (newProperty && !includedProperties.includes(newProperty)) {
      setIncludedProperties([...includedProperties, newProperty]);
      setNewProperty("");
    }
  };

  const removeProperty = (prop: string) => {
    setIncludedProperties(includedProperties.filter(p => p !== prop));
  };

  // Page/Flow CRUD
  const addPageOrFlow = async () => {
    if (!auditRun) {
      await saveProgress();
    }
    const runId = auditRun?.id;
    if (!runId) return;
    
    try {
      const newPage = await createPageOrFlow({
        audit_run_id: runId,
        name: "New Form/Flow",
        data_collected: [],
        consent_method: "none",
      });
      setPagesOrFlows([...pagesOrFlows, newPage]);
    } catch (error) {
      toast({
        title: "Error adding page",
        description: error instanceof Error ? error.message : "Unknown error",
        variant: "destructive",
      });
    }
  };

  const updatePage = async (id: string, data: Partial<PageOrFlow>) => {
    try {
      const updated = await updatePageOrFlow(id, data);
      setPagesOrFlows(pagesOrFlows.map(p => p.id === id ? updated : p));
    } catch (error) {
      toast({
        title: "Error updating",
        description: error instanceof Error ? error.message : "Unknown error",
        variant: "destructive",
      });
    }
  };

  const removePage = async (id: string) => {
    try {
      await deletePageOrFlow(id);
      setPagesOrFlows(pagesOrFlows.filter(p => p.id !== id));
    } catch (error) {
      toast({
        title: "Error deleting",
        description: error instanceof Error ? error.message : "Unknown error",
        variant: "destructive",
      });
    }
  };

  // Tracker CRUD
  const addTracker = async () => {
    if (!auditRun) {
      await saveProgress();
    }
    const runId = auditRun?.id;
    if (!runId) return;
    
    try {
      const newTracker = await createTrackerCookie({
        audit_run_id: runId,
        name: "New Tracker",
        type: "cookie",
        is_essential: false,
        fires_before_consent: "Unverified",
      });
      setTrackerCookies([...trackerCookies, newTracker]);
    } catch (error) {
      toast({
        title: "Error adding tracker",
        description: error instanceof Error ? error.message : "Unknown error",
        variant: "destructive",
      });
    }
  };

  const updateTracker = async (id: string, data: Partial<TrackerCookie>) => {
    try {
      const updated = await updateTrackerCookie(id, data);
      setTrackerCookies(trackerCookies.map(t => t.id === id ? updated : t));
    } catch (error) {
      toast({
        title: "Error updating",
        description: error instanceof Error ? error.message : "Unknown error",
        variant: "destructive",
      });
    }
  };

  const removeTracker = async (id: string) => {
    try {
      await deleteTrackerCookie(id);
      setTrackerCookies(trackerCookies.filter(t => t.id !== id));
    } catch (error) {
      toast({
        title: "Error deleting",
        description: error instanceof Error ? error.message : "Unknown error",
        variant: "destructive",
      });
    }
  };

  // Vendor CRUD
  const addVendor = async () => {
    if (!auditRun) {
      await saveProgress();
    }
    const runId = auditRun?.id;
    if (!runId) return;
    
    try {
      const newVendor = await createThirdPartyVendor({
        audit_run_id: runId,
        vendor_name: "New Vendor",
        category: "other",
        cross_border_processing: "Unverified",
        contract_dpa_status: "none",
      });
      setThirdPartyVendors([...thirdPartyVendors, newVendor]);
    } catch (error) {
      toast({
        title: "Error adding vendor",
        description: error instanceof Error ? error.message : "Unknown error",
        variant: "destructive",
      });
    }
  };

  const updateVendor = async (id: string, data: Partial<ThirdPartyVendor>) => {
    try {
      const updated = await updateThirdPartyVendor(id, data);
      setThirdPartyVendors(thirdPartyVendors.map(v => v.id === id ? updated : v));
    } catch (error) {
      toast({
        title: "Error updating",
        description: error instanceof Error ? error.message : "Unknown error",
        variant: "destructive",
      });
    }
  };

  const removeVendor = async (id: string) => {
    try {
      await deleteThirdPartyVendor(id);
      setThirdPartyVendors(thirdPartyVendors.filter(v => v.id !== id));
    } catch (error) {
      toast({
        title: "Error deleting",
        description: error instanceof Error ? error.message : "Unknown error",
        variant: "destructive",
      });
    }
  };

  // Finding CRUD
  const addFinding = async (title: string, principle: PipedaPrinciple) => {
    if (!auditRun) return;
    
    try {
      const newFinding = await createFinding({
        audit_run_id: auditRun.id,
        finding_title: title,
        pipeda_principles: [principle],
        severity: "Medium",
        status: "Open",
        owner: "Web",
        effort: "M",
      });
      setFindings([...findings, newFinding]);
      toast({ title: "Finding created" });
    } catch (error) {
      toast({
        title: "Error creating finding",
        description: error instanceof Error ? error.message : "Unknown error",
        variant: "destructive",
      });
    }
  };

  const progress = Math.round((currentStep / WIZARD_STEPS.length) * 100);

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="space-y-2">
              <Label>Primary Site URL</Label>
              <Input 
                value={primaryUrl} 
                onChange={(e) => setPrimaryUrl(e.target.value)}
                placeholder="https://example.com"
              />
            </div>
            
            <div className="space-y-2">
              <Label>Included Properties (subdomains, landing pages, etc.)</Label>
              <div className="flex gap-2">
                <Input 
                  value={newProperty}
                  onChange={(e) => setNewProperty(e.target.value)}
                  placeholder="https://blog.example.com"
                  onKeyDown={(e) => e.key === "Enter" && addProperty()}
                />
                <Button onClick={addProperty} type="button">
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                {includedProperties.map((prop) => (
                  <Badge key={prop} variant="secondary" className="gap-1">
                    {prop}
                    <button onClick={() => removeProperty(prop)} className="ml-1 hover:text-destructive">
                      ×
                    </button>
                  </Badge>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <Label>Stack & Tools</Label>
              <div className="grid gap-4 md:grid-cols-2">
                {Object.entries(stackTools).map(([key, value]) => (
                  <div key={key} className="space-y-1">
                    <Label className="text-xs text-muted-foreground capitalize">{key}</Label>
                    <Input 
                      value={value}
                      onChange={(e) => setStackTools({ ...stackTools, [key]: e.target.value })}
                      placeholder={`e.g., ${key === "forms" ? "Typeform, HubSpot" : key === "analytics" ? "Google Analytics" : "..."}`}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <Label>Notes</Label>
              <Textarea 
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Additional context about this audit..."
                rows={3}
              />
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium">Data Collection Points</h4>
                <p className="text-sm text-muted-foreground">
                  Add all forms, flows, and data collection touchpoints
                </p>
              </div>
              <Button onClick={addPageOrFlow} size="sm">
                <Plus className="h-4 w-4 mr-1" /> Add Page/Flow
              </Button>
            </div>

            {pagesOrFlows.length === 0 ? (
              <Card className="border-dashed">
                <CardContent className="py-8 text-center text-muted-foreground">
                  <FileText className="h-8 w-8 mx-auto mb-2 opacity-50" />
                  <p>No data collection points added yet.</p>
                  <p className="text-sm">Click "Add Page/Flow" to start documenting.</p>
                </CardContent>
              </Card>
            ) : (
              <div className="space-y-4">
                {pagesOrFlows.map((page) => (
                  <Card key={page.id}>
                    <CardContent className="pt-4 space-y-4">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1 grid gap-4 md:grid-cols-2">
                          <div className="space-y-1">
                            <Label className="text-xs">Name</Label>
                            <Input 
                              value={page.name}
                              onChange={(e) => updatePage(page.id, { name: e.target.value })}
                              placeholder="e.g., Contact Form"
                            />
                          </div>
                          <div className="space-y-1">
                            <Label className="text-xs">URL</Label>
                            <Input 
                              value={page.url || ""}
                              onChange={(e) => updatePage(page.id, { url: e.target.value })}
                              placeholder="https://..."
                            />
                          </div>
                          <div className="space-y-1">
                            <Label className="text-xs">Data Collected (comma-separated)</Label>
                            <Input 
                              value={page.data_collected.join(", ")}
                              onChange={(e) => updatePage(page.id, { 
                                data_collected: e.target.value.split(",").map(s => s.trim()).filter(Boolean)
                              })}
                              placeholder="name, email, phone, organization"
                            />
                          </div>
                          <div className="space-y-1">
                            <Label className="text-xs">Consent Method</Label>
                            <Select 
                              value={page.consent_method}
                              onValueChange={(v) => updatePage(page.id, { consent_method: v as any })}
                            >
                              <SelectTrigger>
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="checkbox">Checkbox</SelectItem>
                                <SelectItem value="opt-in">Opt-in</SelectItem>
                                <SelectItem value="implied">Implied</SelectItem>
                                <SelectItem value="none">None</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="space-y-1">
                            <Label className="text-xs">Purpose</Label>
                            <Input 
                              value={page.purpose || ""}
                              onChange={(e) => updatePage(page.id, { purpose: e.target.value })}
                              placeholder="Why is this data collected?"
                            />
                          </div>
                          <div className="space-y-1">
                            <Label className="text-xs">Storage Destination</Label>
                            <Input 
                              value={page.storage_destination || ""}
                              onChange={(e) => updatePage(page.id, { storage_destination: e.target.value })}
                              placeholder="e.g., Typeform, Airtable"
                            />
                          </div>
                        </div>
                        <Button 
                          variant="ghost" 
                          size="icon"
                          onClick={() => removePage(page.id)}
                          className="text-destructive hover:text-destructive"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                      <div className="space-y-1">
                        <Label className="text-xs">Evidence Notes</Label>
                        <Textarea 
                          value={page.evidence_notes || ""}
                          onChange={(e) => updatePage(page.id, { evidence_notes: e.target.value })}
                          placeholder="Document your findings, paste screenshots info, etc."
                          rows={2}
                        />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        );

      case 3:
        return (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium">Cookies & Tracking Inventory</h4>
                <p className="text-sm text-muted-foreground">
                  Document all cookies, pixels, scripts, and SDKs
                </p>
              </div>
              <Button onClick={addTracker} size="sm">
                <Plus className="h-4 w-4 mr-1" /> Add Tracker
              </Button>
            </div>

            <Card className="bg-muted/50">
              <CardContent className="py-3">
                <p className="text-sm">
                  <strong>How to collect:</strong> Open DevTools → Application → Cookies, and Network tab to see what loads.
                  Paste the output in the evidence field.
                </p>
              </CardContent>
            </Card>

            {trackerCookies.length === 0 ? (
              <Card className="border-dashed">
                <CardContent className="py-8 text-center text-muted-foreground">
                  <p>No trackers documented yet.</p>
                </CardContent>
              </Card>
            ) : (
              <div className="space-y-4">
                {trackerCookies.map((tracker) => (
                  <Card key={tracker.id}>
                    <CardContent className="pt-4 space-y-4">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1 grid gap-4 md:grid-cols-3">
                          <div className="space-y-1">
                            <Label className="text-xs">Name</Label>
                            <Input 
                              value={tracker.name}
                              onChange={(e) => updateTracker(tracker.id, { name: e.target.value })}
                            />
                          </div>
                          <div className="space-y-1">
                            <Label className="text-xs">Type</Label>
                            <Select 
                              value={tracker.type}
                              onValueChange={(v) => updateTracker(tracker.id, { type: v as any })}
                            >
                              <SelectTrigger><SelectValue /></SelectTrigger>
                              <SelectContent>
                                <SelectItem value="cookie">Cookie</SelectItem>
                                <SelectItem value="pixel">Pixel</SelectItem>
                                <SelectItem value="script">Script</SelectItem>
                                <SelectItem value="SDK">SDK</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="space-y-1">
                            <Label className="text-xs">Vendor</Label>
                            <Input 
                              value={tracker.vendor || ""}
                              onChange={(e) => updateTracker(tracker.id, { vendor: e.target.value })}
                            />
                          </div>
                          <div className="space-y-1">
                            <Label className="text-xs">Purpose</Label>
                            <Input 
                              value={tracker.purpose || ""}
                              onChange={(e) => updateTracker(tracker.id, { purpose: e.target.value })}
                            />
                          </div>
                          <div className="space-y-1">
                            <Label className="text-xs">Fires Before Consent?</Label>
                            <Select 
                              value={tracker.fires_before_consent}
                              onValueChange={(v) => updateTracker(tracker.id, { fires_before_consent: v as any })}
                            >
                              <SelectTrigger><SelectValue /></SelectTrigger>
                              <SelectContent>
                                <SelectItem value="Compliant">No (Compliant)</SelectItem>
                                <SelectItem value="Not compliant">Yes (Not compliant)</SelectItem>
                                <SelectItem value="Unverified">Unknown</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="flex items-center gap-2 pt-5">
                            <Checkbox 
                              checked={tracker.is_essential}
                              onCheckedChange={(c) => updateTracker(tracker.id, { is_essential: !!c })}
                            />
                            <Label className="text-xs">Essential</Label>
                          </div>
                        </div>
                        <Button 
                          variant="ghost" 
                          size="icon"
                          onClick={() => removeTracker(tracker.id)}
                          className="text-destructive hover:text-destructive"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                      <div className="space-y-1">
                        <Label className="text-xs">Evidence (paste DevTools output)</Label>
                        <Textarea 
                          value={tracker.evidence_paste || ""}
                          onChange={(e) => updateTracker(tracker.id, { evidence_paste: e.target.value })}
                          rows={2}
                          className="font-mono text-xs"
                        />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        );

      case 4:
        return (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium">Third-Party Vendors</h4>
                <p className="text-sm text-muted-foreground">
                  Document vendors, data sharing, and cross-border processing
                </p>
              </div>
              <Button onClick={addVendor} size="sm">
                <Plus className="h-4 w-4 mr-1" /> Add Vendor
              </Button>
            </div>

            {thirdPartyVendors.length === 0 ? (
              <Card className="border-dashed">
                <CardContent className="py-8 text-center text-muted-foreground">
                  <p>No vendors documented yet.</p>
                </CardContent>
              </Card>
            ) : (
              <div className="space-y-4">
                {thirdPartyVendors.map((vendor) => (
                  <Card key={vendor.id}>
                    <CardContent className="pt-4 space-y-4">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1 grid gap-4 md:grid-cols-3">
                          <div className="space-y-1">
                            <Label className="text-xs">Vendor Name</Label>
                            <Input 
                              value={vendor.vendor_name}
                              onChange={(e) => updateVendor(vendor.id, { vendor_name: e.target.value })}
                            />
                          </div>
                          <div className="space-y-1">
                            <Label className="text-xs">Category</Label>
                            <Select 
                              value={vendor.category}
                              onValueChange={(v) => updateVendor(vendor.id, { category: v as any })}
                            >
                              <SelectTrigger><SelectValue /></SelectTrigger>
                              <SelectContent>
                                <SelectItem value="analytics">Analytics</SelectItem>
                                <SelectItem value="forms">Forms</SelectItem>
                                <SelectItem value="booking">Booking</SelectItem>
                                <SelectItem value="email">Email</SelectItem>
                                <SelectItem value="hosting">Hosting/CDN</SelectItem>
                                <SelectItem value="payments">Payments</SelectItem>
                                <SelectItem value="chat">Chat</SelectItem>
                                <SelectItem value="automation">Automation</SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="space-y-1">
                            <Label className="text-xs">Data Shared</Label>
                            <Input 
                              value={vendor.data_shared || ""}
                              onChange={(e) => updateVendor(vendor.id, { data_shared: e.target.value })}
                              placeholder="What data is shared?"
                            />
                          </div>
                          <div className="space-y-1">
                            <Label className="text-xs">Cross-Border Processing</Label>
                            <Select 
                              value={vendor.cross_border_processing}
                              onValueChange={(v) => updateVendor(vendor.id, { cross_border_processing: v as any })}
                            >
                              <SelectTrigger><SelectValue /></SelectTrigger>
                              <SelectContent>
                                <SelectItem value="Compliant">No / Canada only</SelectItem>
                                <SelectItem value="Partially compliant">Yes, with notice</SelectItem>
                                <SelectItem value="Not compliant">Yes, no notice</SelectItem>
                                <SelectItem value="Unverified">Unknown</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="space-y-1">
                            <Label className="text-xs">Countries</Label>
                            <Input 
                              value={vendor.countries || ""}
                              onChange={(e) => updateVendor(vendor.id, { countries: e.target.value })}
                              placeholder="e.g., USA, EU"
                            />
                          </div>
                          <div className="space-y-1">
                            <Label className="text-xs">Contract/DPA Status</Label>
                            <Select 
                              value={vendor.contract_dpa_status}
                              onValueChange={(v) => updateVendor(vendor.id, { contract_dpa_status: v as any })}
                            >
                              <SelectTrigger><SelectValue /></SelectTrigger>
                              <SelectContent>
                                <SelectItem value="none">None</SelectItem>
                                <SelectItem value="in_progress">In Progress</SelectItem>
                                <SelectItem value="complete">Complete</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                        <Button 
                          variant="ghost" 
                          size="icon"
                          onClick={() => removeVendor(vendor.id)}
                          className="text-destructive hover:text-destructive"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        );

      case 5:
      case 6:
      case 7:
      case 8:
      case 9:
      case 10:
        const items = CHECKLIST_ITEMS[currentStep] || [];
        return (
          <div className="space-y-6">
            <div>
              <h4 className="font-medium">{WIZARD_STEPS[currentStep - 1].title}</h4>
              <p className="text-sm text-muted-foreground">
                Review each item and document findings
              </p>
            </div>

            <div className="space-y-3">
              {items.map((item, idx) => {
                const key = `${currentStep}-${idx}`;
                const isChecked = checklistStates[key] || false;
                
                return (
                  <Card key={key} className={isChecked ? "border-green-500/30 bg-green-500/5" : ""}>
                    <CardContent className="py-3">
                      <div className="flex items-start gap-3">
                        <Checkbox 
                          checked={isChecked}
                          onCheckedChange={(c) => setChecklistStates({ ...checklistStates, [key]: !!c })}
                          className="mt-0.5"
                        />
                        <div className="flex-1">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className={isChecked ? "line-through text-muted-foreground" : ""}>
                              {item.text}
                            </span>
                            <Badge variant="outline" className="text-xs">
                              {item.principle}
                            </Badge>
                          </div>
                          {!isChecked && (
                            <Button 
                              variant="link" 
                              size="sm" 
                              className="h-auto p-0 text-xs"
                              onClick={() => addFinding(`Missing: ${item.text}`, item.principle)}
                            >
                              <AlertTriangle className="h-3 w-3 mr-1" />
                              Convert to Finding
                            </Button>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <div className="space-y-2">
              <Label>Evidence Notes for this step</Label>
              <Textarea 
                value={evidenceNotes[currentStep] || ""}
                onChange={(e) => setEvidenceNotes({ ...evidenceNotes, [currentStep]: e.target.value })}
                placeholder="Document your findings, observations, and evidence..."
                rows={4}
              />
            </div>
          </div>
        );

      case 11:
        const criticalCount = findings.filter(f => f.severity === "Critical").length;
        const highCount = findings.filter(f => f.severity === "High").length;
        const mediumCount = findings.filter(f => f.severity === "Medium").length;
        const lowCount = findings.filter(f => f.severity === "Low").length;

        return (
          <div className="space-y-6">
            <div>
              <h4 className="font-medium">Generate Report</h4>
              <p className="text-sm text-muted-foreground">
                Review your audit and generate the final report
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-4">
              <Card>
                <CardContent className="py-4 text-center">
                  <div className="text-2xl font-bold text-red-600">{criticalCount}</div>
                  <div className="text-sm text-muted-foreground">Critical</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="py-4 text-center">
                  <div className="text-2xl font-bold text-orange-600">{highCount}</div>
                  <div className="text-sm text-muted-foreground">High</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="py-4 text-center">
                  <div className="text-2xl font-bold text-yellow-600">{mediumCount}</div>
                  <div className="text-sm text-muted-foreground">Medium</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="py-4 text-center">
                  <div className="text-2xl font-bold text-blue-600">{lowCount}</div>
                  <div className="text-sm text-muted-foreground">Low</div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="text-base">Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Total Findings:</span>
                    <span className="font-medium">{findings.length}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Data Collection Points:</span>
                    <span className="font-medium">{pagesOrFlows.length}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Trackers Documented:</span>
                    <span className="font-medium">{trackerCookies.length}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Third-Party Vendors:</span>
                    <span className="font-medium">{thirdPartyVendors.length}</span>
                  </div>
                </div>

                <div className="pt-4 space-y-2">
                  <Label>Top 10 Gaps Summary</Label>
                  <Textarea 
                    value={auditRun?.summary_top_10_gaps || ""}
                    onChange={(e) => {
                      if (auditRun) {
                        updateAuditRun(auditRun.id, { summary_top_10_gaps: e.target.value });
                      }
                    }}
                    placeholder="Summarize the top gaps identified..."
                    rows={4}
                  />
                </div>

                <div className="flex gap-2 pt-4">
                  <Button 
                    onClick={() => navigate("/admin/privacy-audit/findings")}
                    className="flex-1"
                  >
                    View Findings & Backlog
                  </Button>
                  <Button 
                    variant="outline"
                    onClick={async () => {
                      if (auditRun) {
                        await updateAuditRun(auditRun.id, { is_complete: true, last_audit_date: new Date().toISOString() });
                        toast({ title: "Audit marked as complete" });
                        navigate("/admin/privacy-audit");
                      }
                    }}
                  >
                    <Check className="h-4 w-4 mr-1" />
                    Mark Complete
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        );

      default:
        return null;
    }
  };

  if (isLoading) {
    return (
      <AuditAuthGate>
        <AuditLayout>
          <div className="flex items-center justify-center py-12">
            <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
          </div>
        </AuditLayout>
      </AuditAuthGate>
    );
  }

  return (
    <AuditAuthGate>
      <AuditLayout>
        <div className="space-y-6">
          {/* Progress Header */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold">
                  Step {currentStep}: {WIZARD_STEPS[currentStep - 1].title}
                </h2>
                <p className="text-sm text-muted-foreground">
                  {WIZARD_STEPS[currentStep - 1].description}
                </p>
              </div>
              <Button onClick={saveProgress} variant="outline" size="sm" disabled={isSaving}>
                {isSaving ? <Loader2 className="h-4 w-4 animate-spin" /> : <Save className="h-4 w-4 mr-1" />}
                Save
              </Button>
            </div>
            <Progress value={progress} className="h-2" />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>Step {currentStep} of {WIZARD_STEPS.length}</span>
              <span>{progress}% complete</span>
            </div>
          </div>

          {/* Step Navigation */}
          <div className="flex gap-1 overflow-x-auto pb-2">
            {WIZARD_STEPS.map((step) => (
              <Button
                key={step.id}
                variant={currentStep === step.id ? "default" : "ghost"}
                size="sm"
                className="shrink-0"
                onClick={() => goToStep(step.id)}
              >
                {step.id}
              </Button>
            ))}
          </div>

          {/* Step Content */}
          <Card>
            <CardContent className="pt-6">
              {renderStepContent()}
            </CardContent>
          </Card>

          {/* Navigation Buttons */}
          <div className="flex justify-between">
            <Button 
              variant="outline" 
              onClick={() => goToStep(currentStep - 1)}
              disabled={currentStep === 1}
            >
              <ChevronLeft className="h-4 w-4 mr-1" />
              Previous
            </Button>
            <Button 
              onClick={() => goToStep(currentStep + 1)}
              disabled={currentStep === WIZARD_STEPS.length}
            >
              Next
              <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
          </div>
        </div>
      </AuditLayout>
    </AuditAuthGate>
  );
}
