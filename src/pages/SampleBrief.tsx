import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Target, ListChecks, CheckCircle2, Zap, Shield } from "lucide-react";

const SampleBrief = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header activeRoute="/sample-brief" />
      
      <main id="main-content">
        {/* Hero */}
        <section className="container mx-auto px-4 pt-24 pb-16">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              See the Nimara brief format
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              The one-page scope we use for 3 free quotes and projects. Clear outcomes. Simple acceptance. Fast starts.
            </p>
            
            <div className="bg-accent/30 border border-accent rounded-2xl p-4">
              <p className="text-sm text-foreground">
                Same format across categories—so proposals are easy to compare.
              </p>
            </div>
          </div>
        </section>

        {/* At a glance */}
        <section className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Outcome first</h3>
              <p className="text-sm text-muted-foreground">One sentence you can say yes to</p>
            </Card>

            <Card className="p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <ListChecks className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Scope that fits</h3>
              <p className="text-sm text-muted-foreground">What's in, what's out, assumptions</p>
            </Card>

            <Card className="p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">"Done" checklist</h3>
              <p className="text-sm text-muted-foreground">Acceptance you can verify</p>
            </Card>
          </div>
        </section>

        {/* The brief (example template) */}
        <section className="container mx-auto px-4 py-16 bg-muted/30">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            The brief (example template)
          </h2>

          <div className="max-w-4xl mx-auto space-y-6">
            {/* Project title */}
            <Card className="p-6">
              <h3 className="font-semibold text-foreground mb-2">Project title</h3>
              <p className="text-sm font-mono text-muted-foreground">
                CRM setup and staff training (starter)
              </p>
            </Card>

            {/* Outcome */}
            <Card className="p-6">
              <h3 className="font-semibold text-foreground mb-2">Outcome (one sentence)</h3>
              <p className="text-xs text-muted-foreground mb-2">What result do you want?</p>
              <p className="text-sm text-foreground">
                Team signs in and uses the CRM for basic tracking within the first month.
              </p>
            </Card>

            {/* Background */}
            <Card className="p-6">
              <h3 className="font-semibold text-foreground mb-2">Background (2–3 lines)</h3>
              <p className="text-xs text-muted-foreground mb-2">Where things stand and why now.</p>
              <p className="text-sm text-muted-foreground">
                Currently tracking contacts in spreadsheets. Growing fast and need one shared system for the program team.
              </p>
            </Card>

            {/* In-scope / Out-of-scope */}
            <Card className="p-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold text-foreground mb-4">In-scope</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      <span>Setup & basic config</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      <span>Import starter contacts (template)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      <span>Two live trainings (+ recordings)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      <span>Basic dashboard for program leads</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-4">Out-of-scope</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-destructive mt-0.5 shrink-0">×</span>
                      <span>Custom code / paid add-ons</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-destructive mt-0.5 shrink-0">×</span>
                      <span>Complex integrations not listed</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-destructive mt-0.5 shrink-0">×</span>
                      <span>Historical cleanup beyond template</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* Deliverables */}
            <Card className="p-6">
              <h3 className="font-semibold text-foreground mb-4">Deliverables</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  <span>Working CRM workspace</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  <span>Import complete from template</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  <span>Two trainings (+ recordings)</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  <span>Quickstart guide (1–2 pages)</span>
                </li>
              </ul>
            </Card>

            {/* Acceptance */}
            <Card className="p-6">
              <h3 className="font-semibold text-foreground mb-4">Acceptance ("what done looks like")</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <div className="w-4 h-4 border-2 border-primary rounded mt-0.5 shrink-0" />
                  <span>Named users can log in</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-4 h-4 border-2 border-primary rounded mt-0.5 shrink-0" />
                  <span>Test tasks completed</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-4 h-4 border-2 border-primary rounded mt-0.5 shrink-0" />
                  <span>Dashboard visible with agreed fields</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-4 h-4 border-2 border-primary rounded mt-0.5 shrink-0" />
                  <span>Quickstart guide in shared folder</span>
                </li>
              </ul>
            </Card>

            {/* Timeline & Evidence */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6">
                <h3 className="font-semibold text-foreground mb-2">Timeline (window)</h3>
                <p className="text-sm text-muted-foreground">
                  Kickoff within 2 weeks; delivery in 3–5 weeks.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="font-semibold text-foreground mb-4">Evidence & files</h3>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Deliverables in shared folder</li>
                  <li>• Short demo clip or screenshots</li>
                  <li>• Simple index file listing parts</li>
                </ul>
              </Card>
            </div>

            {/* Assumptions & Data */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6">
                <h3 className="font-semibold text-foreground mb-4">Assumptions & dependencies</h3>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Nonprofit provides user list + template data</li>
                  <li>• CRM chosen from supported list at kickoff</li>
                </ul>
              </Card>

              <Card className="p-6">
                <h3 className="font-semibold text-foreground mb-2">Data & records</h3>
                <p className="text-sm text-muted-foreground">
                  Stored in Canada; retained 7 years
                </p>
              </Card>
            </div>

            {/* Roles & communication */}
            <Card className="p-6">
              <h3 className="font-semibold text-foreground mb-4">Roles & communication</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p><span className="font-semibold text-foreground">Consultant:</span> delivery</p>
                <p><span className="font-semibold text-foreground">Nimara PM:</span> pace, checklist, acceptance</p>
                <p><span className="font-semibold text-foreground">Nonprofit lead:</span> inputs & sign-off</p>
                <p><span className="font-semibold text-foreground">Cadence:</span> weekly 15–30 min</p>
              </div>
            </Card>
          </div>
        </section>

        {/* How consultants respond */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-center text-foreground mb-8">
            How consultants respond (single template)
          </h2>
          
          <Card className="max-w-4xl mx-auto p-8">
            <p className="text-sm font-semibold text-foreground mb-6">We request:</p>
            
            <div className="grid md:grid-cols-2 gap-x-8 gap-y-3 text-sm text-muted-foreground mb-6">
              <div>• Price</div>
              <div>• Assumptions</div>
              <div>• Timeline (weeks)</div>
              <div>• Earliest start date</div>
              <div>• Approach (3–5 bullets)</div>
              <div>• Team</div>
              <div>• Outcomes & acceptance (confirm/edits)</div>
              <div>• Examples (links)</div>
            </div>

            <p className="text-sm text-primary font-medium">
              Same format → easy side-by-side comparison.
            </p>
          </Card>
        </section>

        {/* Why this works */}
        <section className="container mx-auto px-4 py-16 bg-muted/30">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Why this works
          </h2>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Clarity</h3>
              <p className="text-sm text-muted-foreground">Shared scope and "done"</p>
            </Card>

            <Card className="p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Momentum</h3>
              <p className="text-sm text-muted-foreground">Less time writing, more time delivering</p>
            </Card>

            <Card className="p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Audit-ready</h3>
              <p className="text-sm text-muted-foreground">Acceptance ties to a simple evidence set</p>
            </Card>
          </div>
        </section>

        {/* Final band */}
        <section className="container mx-auto px-4 py-16 text-center">
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SampleBrief;
