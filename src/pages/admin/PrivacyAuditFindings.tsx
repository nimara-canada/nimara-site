import { useEffect, useState } from "react";
import { AuditAuthGate } from "@/components/audit/AuditAuthGate";
import { AuditLayout } from "@/components/audit/AuditLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { 
  Download, 
  Plus, 
  Filter, 
  Loader2,
  ChevronDown,
  ChevronUp,
  Edit2,
  Trash2,
  CheckCircle,
  Clock,
  AlertTriangle,
  XCircle
} from "lucide-react";
import { 
  getAllFindings, 
  getAuditRuns,
  createFinding,
  updateFinding,
  deleteFinding,
  type Finding,
  type AuditRun,
  type SeverityLevel,
  type FindingStatus,
  type OwnerType,
  type EffortSize,
  PIPEDA_PRINCIPLES,
  type PipedaPrinciple
} from "@/lib/auditApi";
import { useToast } from "@/hooks/use-toast";
import { format } from "date-fns";

const severityColors: Record<SeverityLevel, string> = {
  Critical: "bg-red-500/10 text-red-600 border-red-500/30",
  High: "bg-orange-500/10 text-orange-600 border-orange-500/30",
  Medium: "bg-yellow-500/10 text-yellow-600 border-yellow-500/30",
  Low: "bg-blue-500/10 text-blue-600 border-blue-500/30",
};

const statusIcons: Record<FindingStatus, React.ReactNode> = {
  Open: <AlertTriangle className="h-4 w-4 text-red-500" />,
  "In Progress": <Clock className="h-4 w-4 text-yellow-500" />,
  Done: <CheckCircle className="h-4 w-4 text-green-500" />,
  Deferred: <XCircle className="h-4 w-4 text-gray-500" />,
};

const severityOrder: Record<SeverityLevel, number> = {
  Critical: 0,
  High: 1,
  Medium: 2,
  Low: 3,
};

export default function PrivacyAuditFindings() {
  const [findings, setFindings] = useState<Finding[]>([]);
  const [audits, setAudits] = useState<AuditRun[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filterSeverity, setFilterSeverity] = useState<string>("all");
  const [filterStatus, setFilterStatus] = useState<string>("all");
  const [filterOwner, setFilterOwner] = useState<string>("all");
  const [sortField, setSortField] = useState<"severity" | "status" | "owner">("severity");
  const [sortAsc, setSortAsc] = useState(true);
  const [editingFinding, setEditingFinding] = useState<Finding | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    async function loadData() {
      try {
        const [findingsData, auditsData] = await Promise.all([
          getAllFindings(),
          getAuditRuns(),
        ]);
        setFindings(findingsData || []);
        setAudits(auditsData || []);
      } catch (error) {
        toast({
          title: "Error loading findings",
          description: error instanceof Error ? error.message : "Unknown error",
          variant: "destructive",
        });
      } finally {
        setIsLoading(false);
      }
    }
    loadData();
  }, [toast]);

  const filteredFindings = findings
    .filter(f => filterSeverity === "all" || f.severity === filterSeverity)
    .filter(f => filterStatus === "all" || f.status === filterStatus)
    .filter(f => filterOwner === "all" || f.owner === filterOwner)
    .sort((a, b) => {
      let comparison = 0;
      if (sortField === "severity") {
        comparison = severityOrder[a.severity] - severityOrder[b.severity];
      } else if (sortField === "status") {
        comparison = a.status.localeCompare(b.status);
      } else if (sortField === "owner") {
        comparison = a.owner.localeCompare(b.owner);
      }
      return sortAsc ? comparison : -comparison;
    });

  const handleSort = (field: "severity" | "status" | "owner") => {
    if (sortField === field) {
      setSortAsc(!sortAsc);
    } else {
      setSortField(field);
      setSortAsc(true);
    }
  };

  const handleUpdateFinding = async (id: string, data: Partial<Finding>) => {
    try {
      const updated = await updateFinding(id, data);
      setFindings(findings.map(f => f.id === id ? updated : f));
      toast({ title: "Finding updated" });
    } catch (error) {
      toast({
        title: "Error updating",
        description: error instanceof Error ? error.message : "Unknown error",
        variant: "destructive",
      });
    }
  };

  const handleDeleteFinding = async (id: string) => {
    try {
      await deleteFinding(id);
      setFindings(findings.filter(f => f.id !== id));
      toast({ title: "Finding deleted" });
    } catch (error) {
      toast({
        title: "Error deleting",
        description: error instanceof Error ? error.message : "Unknown error",
        variant: "destructive",
      });
    }
  };

  const exportCSV = () => {
    const headers = [
      "ID", "Title", "URL/Scope", "What's Happening", "Personal Info",
      "PIPEDA Principles", "Severity", "Why It Matters", "Exact Fix",
      "Owner", "Effort", "Status", "Verification Steps"
    ];
    
    const rows = filteredFindings.map(f => [
      f.id,
      f.finding_title,
      f.url_or_scope || "",
      f.what_is_happening || "",
      f.personal_info_involved || "",
      f.pipeda_principles.join("; "),
      f.severity,
      f.why_it_matters || "",
      f.exact_fix || "",
      f.owner,
      f.effort,
      f.status,
      f.verification_steps || ""
    ]);

    const csv = [headers, ...rows].map(row => 
      row.map(cell => `"${String(cell).replace(/"/g, '""')}"`).join(",")
    ).join("\n");

    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `pipeda-findings-${format(new Date(), "yyyy-MM-dd")}.csv`;
    a.click();
  };

  const groupedByOwner = filteredFindings.reduce((acc, f) => {
    if (!acc[f.owner]) acc[f.owner] = [];
    acc[f.owner].push(f);
    return acc;
  }, {} as Record<OwnerType, Finding[]>);

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
          {/* Header */}
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold tracking-tight">Findings & Remediation</h2>
              <p className="text-muted-foreground">
                {filteredFindings.length} findings • {filteredFindings.filter(f => f.status === "Open").length} open
              </p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" onClick={exportCSV}>
                <Download className="h-4 w-4 mr-2" />
                Export CSV
              </Button>
            </div>
          </div>

          {/* Filters */}
          <Card>
            <CardContent className="py-4">
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <Filter className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm font-medium">Filters:</span>
                </div>
                <Select value={filterSeverity} onValueChange={setFilterSeverity}>
                  <SelectTrigger className="w-[140px]">
                    <SelectValue placeholder="Severity" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Severity</SelectItem>
                    <SelectItem value="Critical">Critical</SelectItem>
                    <SelectItem value="High">High</SelectItem>
                    <SelectItem value="Medium">Medium</SelectItem>
                    <SelectItem value="Low">Low</SelectItem>
                  </SelectContent>
                </Select>
                <Select value={filterStatus} onValueChange={setFilterStatus}>
                  <SelectTrigger className="w-[140px]">
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="Open">Open</SelectItem>
                    <SelectItem value="In Progress">In Progress</SelectItem>
                    <SelectItem value="Done">Done</SelectItem>
                    <SelectItem value="Deferred">Deferred</SelectItem>
                  </SelectContent>
                </Select>
                <Select value={filterOwner} onValueChange={setFilterOwner}>
                  <SelectTrigger className="w-[140px]">
                    <SelectValue placeholder="Owner" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Owners</SelectItem>
                    <SelectItem value="Web">Web</SelectItem>
                    <SelectItem value="Marketing">Marketing</SelectItem>
                    <SelectItem value="Ops">Ops</SelectItem>
                    <SelectItem value="Legal">Legal</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          <Tabs defaultValue="table">
            <TabsList>
              <TabsTrigger value="table">Table View</TabsTrigger>
              <TabsTrigger value="owner">By Owner</TabsTrigger>
            </TabsList>

            <TabsContent value="table" className="mt-4">
              <Card>
                <CardContent className="p-0">
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead 
                            className="cursor-pointer hover:bg-muted/50"
                            onClick={() => handleSort("severity")}
                          >
                            <div className="flex items-center gap-1">
                              Severity
                              {sortField === "severity" && (
                                sortAsc ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />
                              )}
                            </div>
                          </TableHead>
                          <TableHead>Finding</TableHead>
                          <TableHead>PIPEDA Principle(s)</TableHead>
                          <TableHead 
                            className="cursor-pointer hover:bg-muted/50"
                            onClick={() => handleSort("owner")}
                          >
                            <div className="flex items-center gap-1">
                              Owner
                              {sortField === "owner" && (
                                sortAsc ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />
                              )}
                            </div>
                          </TableHead>
                          <TableHead>Effort</TableHead>
                          <TableHead 
                            className="cursor-pointer hover:bg-muted/50"
                            onClick={() => handleSort("status")}
                          >
                            <div className="flex items-center gap-1">
                              Status
                              {sortField === "status" && (
                                sortAsc ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />
                              )}
                            </div>
                          </TableHead>
                          <TableHead className="w-[100px]">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {filteredFindings.length === 0 ? (
                          <TableRow>
                            <TableCell colSpan={7} className="text-center py-8 text-muted-foreground">
                              No findings match your filters
                            </TableCell>
                          </TableRow>
                        ) : (
                          filteredFindings.map((finding) => (
                            <TableRow key={finding.id}>
                              <TableCell>
                                <Badge variant="outline" className={severityColors[finding.severity]}>
                                  {finding.severity}
                                </Badge>
                              </TableCell>
                              <TableCell>
                                <div className="max-w-md">
                                  <p className="font-medium">{finding.finding_title}</p>
                                  {finding.url_or_scope && (
                                    <p className="text-xs text-muted-foreground truncate">
                                      {finding.url_or_scope}
                                    </p>
                                  )}
                                </div>
                              </TableCell>
                              <TableCell>
                                <div className="flex flex-wrap gap-1">
                                  {finding.pipeda_principles.slice(0, 2).map((p) => (
                                    <Badge key={p} variant="secondary" className="text-xs">
                                      {p}
                                    </Badge>
                                  ))}
                                  {finding.pipeda_principles.length > 2 && (
                                    <Badge variant="secondary" className="text-xs">
                                      +{finding.pipeda_principles.length - 2}
                                    </Badge>
                                  )}
                                </div>
                              </TableCell>
                              <TableCell>
                                <Select 
                                  value={finding.owner}
                                  onValueChange={(v) => handleUpdateFinding(finding.id, { owner: v as OwnerType })}
                                >
                                  <SelectTrigger className="h-8 w-[100px]">
                                    <SelectValue />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="Web">Web</SelectItem>
                                    <SelectItem value="Marketing">Marketing</SelectItem>
                                    <SelectItem value="Ops">Ops</SelectItem>
                                    <SelectItem value="Legal">Legal</SelectItem>
                                  </SelectContent>
                                </Select>
                              </TableCell>
                              <TableCell>
                                <Badge variant="outline">{finding.effort}</Badge>
                              </TableCell>
                              <TableCell>
                                <Select 
                                  value={finding.status}
                                  onValueChange={(v) => handleUpdateFinding(finding.id, { status: v as FindingStatus })}
                                >
                                  <SelectTrigger className="h-8 w-[130px]">
                                    <div className="flex items-center gap-2">
                                      {statusIcons[finding.status]}
                                      <SelectValue />
                                    </div>
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="Open">Open</SelectItem>
                                    <SelectItem value="In Progress">In Progress</SelectItem>
                                    <SelectItem value="Done">Done</SelectItem>
                                    <SelectItem value="Deferred">Deferred</SelectItem>
                                  </SelectContent>
                                </Select>
                              </TableCell>
                              <TableCell>
                                <div className="flex gap-1">
                                  <Dialog open={editingFinding?.id === finding.id} onOpenChange={(open) => {
                                    if (!open) setEditingFinding(null);
                                  }}>
                                    <DialogTrigger asChild>
                                      <Button 
                                        variant="ghost" 
                                        size="icon"
                                        onClick={() => setEditingFinding(finding)}
                                      >
                                        <Edit2 className="h-4 w-4" />
                                      </Button>
                                    </DialogTrigger>
                                    <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                                      <DialogHeader>
                                        <DialogTitle>Edit Finding</DialogTitle>
                                      </DialogHeader>
                                      {editingFinding && (
                                        <FindingEditor 
                                          finding={editingFinding}
                                          onSave={async (data) => {
                                            await handleUpdateFinding(editingFinding.id, data);
                                            setEditingFinding(null);
                                          }}
                                          onCancel={() => setEditingFinding(null)}
                                        />
                                      )}
                                    </DialogContent>
                                  </Dialog>
                                  <Button 
                                    variant="ghost" 
                                    size="icon"
                                    onClick={() => handleDeleteFinding(finding.id)}
                                    className="text-destructive hover:text-destructive"
                                  >
                                    <Trash2 className="h-4 w-4" />
                                  </Button>
                                </div>
                              </TableCell>
                            </TableRow>
                          ))
                        )}
                      </TableBody>
                    </Table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="owner" className="mt-4 space-y-6">
              {(["Web", "Marketing", "Ops", "Legal"] as OwnerType[]).map((owner) => {
                const ownerFindings = groupedByOwner[owner] || [];
                if (ownerFindings.length === 0) return null;
                
                return (
                  <Card key={owner}>
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center justify-between">
                        {owner}
                        <Badge variant="secondary">{ownerFindings.length} items</Badge>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {ownerFindings.map((finding) => (
                          <div 
                            key={finding.id}
                            className="flex items-start justify-between p-3 rounded-lg border bg-card"
                          >
                            <div className="flex items-start gap-3">
                              {statusIcons[finding.status]}
                              <div>
                                <div className="flex items-center gap-2">
                                  <span className="font-medium">{finding.finding_title}</span>
                                  <Badge variant="outline" className={severityColors[finding.severity]}>
                                    {finding.severity}
                                  </Badge>
                                  <Badge variant="outline">{finding.effort}</Badge>
                                </div>
                                {finding.exact_fix && (
                                  <p className="text-sm text-muted-foreground mt-1">
                                    {finding.exact_fix}
                                  </p>
                                )}
                              </div>
                            </div>
                            <Select 
                              value={finding.status}
                              onValueChange={(v) => handleUpdateFinding(finding.id, { status: v as FindingStatus })}
                            >
                              <SelectTrigger className="h-8 w-[120px]">
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="Open">Open</SelectItem>
                                <SelectItem value="In Progress">In Progress</SelectItem>
                                <SelectItem value="Done">Done</SelectItem>
                                <SelectItem value="Deferred">Deferred</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </TabsContent>
          </Tabs>
        </div>
      </AuditLayout>
    </AuditAuthGate>
  );
}

interface FindingEditorProps {
  finding: Finding;
  onSave: (data: Partial<Finding>) => Promise<void>;
  onCancel: () => void;
}

function FindingEditor({ finding, onSave, onCancel }: FindingEditorProps) {
  const [formData, setFormData] = useState({
    finding_title: finding.finding_title,
    url_or_scope: finding.url_or_scope || "",
    what_is_happening: finding.what_is_happening || "",
    personal_info_involved: finding.personal_info_involved || "",
    pipeda_principles: finding.pipeda_principles,
    severity: finding.severity,
    why_it_matters: finding.why_it_matters || "",
    exact_fix: finding.exact_fix || "",
    owner: finding.owner,
    effort: finding.effort,
    verification_steps: finding.verification_steps || "",
  });
  const [isSaving, setIsSaving] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    await onSave(formData);
    setIsSaving(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2 md:col-span-2">
          <Label>Finding Title</Label>
          <Input 
            value={formData.finding_title}
            onChange={(e) => setFormData({ ...formData, finding_title: e.target.value })}
            required
          />
        </div>
        
        <div className="space-y-2">
          <Label>URL/Scope</Label>
          <Input 
            value={formData.url_or_scope}
            onChange={(e) => setFormData({ ...formData, url_or_scope: e.target.value })}
          />
        </div>

        <div className="space-y-2">
          <Label>Personal Info Involved</Label>
          <Input 
            value={formData.personal_info_involved}
            onChange={(e) => setFormData({ ...formData, personal_info_involved: e.target.value })}
            placeholder="e.g., email, name, phone"
          />
        </div>

        <div className="space-y-2">
          <Label>Severity</Label>
          <Select 
            value={formData.severity}
            onValueChange={(v) => setFormData({ ...formData, severity: v as SeverityLevel })}
          >
            <SelectTrigger><SelectValue /></SelectTrigger>
            <SelectContent>
              <SelectItem value="Critical">Critical</SelectItem>
              <SelectItem value="High">High</SelectItem>
              <SelectItem value="Medium">Medium</SelectItem>
              <SelectItem value="Low">Low</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label>Owner</Label>
          <Select 
            value={formData.owner}
            onValueChange={(v) => setFormData({ ...formData, owner: v as OwnerType })}
          >
            <SelectTrigger><SelectValue /></SelectTrigger>
            <SelectContent>
              <SelectItem value="Web">Web</SelectItem>
              <SelectItem value="Marketing">Marketing</SelectItem>
              <SelectItem value="Ops">Ops</SelectItem>
              <SelectItem value="Legal">Legal</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label>Effort</Label>
          <Select 
            value={formData.effort}
            onValueChange={(v) => setFormData({ ...formData, effort: v as EffortSize })}
          >
            <SelectTrigger><SelectValue /></SelectTrigger>
            <SelectContent>
              <SelectItem value="S">Small</SelectItem>
              <SelectItem value="M">Medium</SelectItem>
              <SelectItem value="L">Large</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2 md:col-span-2">
          <Label>PIPEDA Principles</Label>
          <div className="flex flex-wrap gap-2">
            {PIPEDA_PRINCIPLES.map((principle) => (
              <Badge 
                key={principle}
                variant={formData.pipeda_principles.includes(principle) ? "default" : "outline"}
                className="cursor-pointer"
                onClick={() => {
                  const current = formData.pipeda_principles;
                  const updated = current.includes(principle)
                    ? current.filter(p => p !== principle)
                    : [...current, principle];
                  setFormData({ ...formData, pipeda_principles: updated });
                }}
              >
                {principle}
              </Badge>
            ))}
          </div>
        </div>

        <div className="space-y-2 md:col-span-2">
          <Label>What is Happening (Evidence-based)</Label>
          <Textarea 
            value={formData.what_is_happening}
            onChange={(e) => setFormData({ ...formData, what_is_happening: e.target.value })}
            rows={2}
          />
        </div>

        <div className="space-y-2 md:col-span-2">
          <Label>Why It Matters</Label>
          <Textarea 
            value={formData.why_it_matters}
            onChange={(e) => setFormData({ ...formData, why_it_matters: e.target.value })}
            rows={2}
          />
        </div>

        <div className="space-y-2 md:col-span-2">
          <Label>Exact Fix (Implementation-ready)</Label>
          <Textarea 
            value={formData.exact_fix}
            onChange={(e) => setFormData({ ...formData, exact_fix: e.target.value })}
            rows={2}
          />
        </div>

        <div className="space-y-2 md:col-span-2">
          <Label>Verification Steps</Label>
          <Textarea 
            value={formData.verification_steps}
            onChange={(e) => setFormData({ ...formData, verification_steps: e.target.value })}
            rows={2}
          />
        </div>
      </div>

      <div className="flex justify-end gap-2">
        <Button type="button" variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit" disabled={isSaving}>
          {isSaving ? <Loader2 className="h-4 w-4 animate-spin" /> : "Save Changes"}
        </Button>
      </div>
    </form>
  );
}
