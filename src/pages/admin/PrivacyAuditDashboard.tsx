import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuditAuthGate } from "@/components/audit/AuditAuthGate";
import { AuditLayout } from "@/components/audit/AuditLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Plus, 
  FileText, 
  Cookie, 
  Building2, 
  Shield, 
  Scale, 
  Clock,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Loader2
} from "lucide-react";
import { getDashboardStats, getAuditRuns, type AuditRun, type Finding, type RiskRating } from "@/lib/auditApi";
import { useToast } from "@/hooks/use-toast";
import { format } from "date-fns";

interface DashboardStats {
  latestAudit: AuditRun | null;
  findings: Finding[];
  pagesCount: number;
  trackersCount: number;
  vendorsCount: number;
}

const riskColors: Record<RiskRating, string> = {
  Low: "bg-green-500/10 text-green-600 border-green-500/30",
  Medium: "bg-yellow-500/10 text-yellow-600 border-yellow-500/30",
  High: "bg-red-500/10 text-red-600 border-red-500/30",
};

const categoryCards = [
  { key: "pages", label: "Data Collection Points", icon: FileText, description: "Forms, flows & touchpoints" },
  { key: "trackers", label: "Cookies & Trackers", icon: Cookie, description: "Tracking technologies" },
  { key: "vendors", label: "Third Parties", icon: Building2, description: "Vendors & data sharing" },
  { key: "policy", label: "Policy & Notices", icon: Scale, description: "Privacy documentation" },
  { key: "consent", label: "Consent", icon: CheckCircle, description: "Meaningful consent checks" },
  { key: "access", label: "Access Requests", icon: FileText, description: "Individual rights handling" },
  { key: "safeguards", label: "Safeguards", icon: Shield, description: "Security measures" },
  { key: "retention", label: "Retention", icon: Clock, description: "Data lifecycle" },
  { key: "breach", label: "Breach Readiness", icon: AlertTriangle, description: "Incident response" },
];

export default function PrivacyAuditDashboard() {
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [audits, setAudits] = useState<AuditRun[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    async function loadData() {
      try {
        const [statsData, auditsData] = await Promise.all([
          getDashboardStats(),
          getAuditRuns(),
        ]);
        setStats(statsData);
        setAudits(auditsData || []);
      } catch (error) {
        toast({
          title: "Error loading dashboard",
          description: error instanceof Error ? error.message : "Unknown error",
          variant: "destructive",
        });
      } finally {
        setIsLoading(false);
      }
    }
    loadData();
  }, [toast]);

  const openFindings = stats?.findings?.filter(f => f.status === 'Open') || [];
  const criticalFindings = openFindings.filter(f => f.severity === 'Critical');
  const highFindings = openFindings.filter(f => f.severity === 'High');
  const completedFindings = stats?.findings?.filter(f => f.status === 'Done') || [];
  const progressPercentage = stats?.findings?.length 
    ? Math.round((completedFindings.length / stats.findings.length) * 100) 
    : 0;

  const getCategoryCount = (key: string) => {
    switch (key) {
      case "pages": return stats?.pagesCount || 0;
      case "trackers": return stats?.trackersCount || 0;
      case "vendors": return stats?.vendorsCount || 0;
      default: return "-";
    }
  };

  return (
    <AuditAuthGate>
      <AuditLayout>
        <div className="space-y-6">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold tracking-tight">Privacy Audit Dashboard</h2>
              <p className="text-muted-foreground">
                PIPEDA compliance overview and gap analysis
              </p>
            </div>
            <Button onClick={() => navigate("/admin/privacy-audit/wizard")}>
              <Plus className="h-4 w-4 mr-2" />
              Start New Audit
            </Button>
          </div>

          {isLoading ? (
            <div className="flex items-center justify-center py-12">
              <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
            </div>
          ) : (
            <>
              {/* Status Overview */}
              <div className="grid gap-4 md:grid-cols-4">
                <Card>
                  <CardHeader className="pb-2">
                    <CardDescription>Audit Status</CardDescription>
                    <CardTitle className="text-lg">
                      {stats?.latestAudit?.is_complete ? "Complete" : "In Progress"}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    {stats?.latestAudit ? (
                      <p className="text-xs text-muted-foreground">
                        Last run: {format(new Date(stats.latestAudit.created_at), "MMM d, yyyy")}
                      </p>
                    ) : (
                      <p className="text-xs text-muted-foreground">No audits yet</p>
                    )}
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardDescription>Risk Rating</CardDescription>
                    <CardTitle className="text-lg flex items-center gap-2">
                      {stats?.latestAudit?.overall_risk_rating || "N/A"}
                      {stats?.latestAudit?.overall_risk_rating && (
                        <Badge 
                          variant="outline" 
                          className={riskColors[stats.latestAudit.overall_risk_rating]}
                        >
                          {stats.latestAudit.overall_risk_rating}
                        </Badge>
                      )}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-xs text-muted-foreground">
                      Based on open findings
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardDescription>Open Findings</CardDescription>
                    <CardTitle className="text-lg flex items-center gap-2">
                      {openFindings.length}
                      {criticalFindings.length > 0 && (
                        <Badge variant="destructive" className="text-xs">
                          {criticalFindings.length} Critical
                        </Badge>
                      )}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-xs text-muted-foreground">
                      {highFindings.length} high priority
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardDescription>Remediation Progress</CardDescription>
                    <CardTitle className="text-lg">{progressPercentage}%</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Progress value={progressPercentage} className="h-2" />
                  </CardContent>
                </Card>
              </div>

              {/* Category Cards */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Audit Categories</h3>
                <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-3">
                  {categoryCards.map((category) => {
                    const Icon = category.icon;
                    const count = getCategoryCount(category.key);
                    const categoryFindings = stats?.findings?.filter(f => 
                      f.status === 'Open'
                    ) || [];
                    
                    return (
                      <Card key={category.key} className="hover:shadow-md transition-shadow">
                        <CardHeader className="pb-2">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <div className="p-2 bg-primary/10 rounded-lg">
                                <Icon className="h-4 w-4 text-primary" />
                              </div>
                              <CardTitle className="text-sm font-medium">
                                {category.label}
                              </CardTitle>
                            </div>
                            {typeof count === "number" && (
                              <Badge variant="secondary">{count}</Badge>
                            )}
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-xs text-muted-foreground">
                            {category.description}
                          </p>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>

              {/* Recent Audits */}
              {audits.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold mb-4">Recent Audits</h3>
                  <Card>
                    <CardContent className="p-0">
                      <div className="divide-y">
                        {audits.slice(0, 5).map((audit) => (
                          <div 
                            key={audit.id}
                            className="flex items-center justify-between p-4 hover:bg-muted/50 transition-colors cursor-pointer"
                            onClick={() => navigate(`/admin/privacy-audit/wizard?id=${audit.id}`)}
                          >
                            <div className="flex items-center gap-4">
                              <div className={`w-2 h-2 rounded-full ${audit.is_complete ? "bg-green-500" : "bg-yellow-500"}`} />
                              <div>
                                <p className="font-medium">{audit.primary_site_url}</p>
                                <p className="text-sm text-muted-foreground">
                                  {format(new Date(audit.created_at), "MMM d, yyyy 'at' h:mm a")}
                                </p>
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              <Badge 
                                variant="outline" 
                                className={riskColors[audit.overall_risk_rating]}
                              >
                                {audit.overall_risk_rating}
                              </Badge>
                              {audit.is_complete ? (
                                <CheckCircle className="h-4 w-4 text-green-500" />
                              ) : (
                                <Clock className="h-4 w-4 text-yellow-500" />
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}
            </>
          )}
        </div>
      </AuditLayout>
    </AuditAuthGate>
  );
}
