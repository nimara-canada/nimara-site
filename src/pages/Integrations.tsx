import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArrowLeft, CheckCircle2, Zap, Users, Link2 } from "lucide-react";
import { Link } from "react-router-dom";
import quickbooksLogo from "@/assets/integrations/quickbooks.svg";
import salesforceLogo from "@/assets/integrations/salesforce.svg";
import googleLogo from "@/assets/integrations/google.jpg";
import microsoftLogo from "@/assets/integrations/microsoft-icon.png";
import slackLogo from "@/assets/integrations/slack.png";
import mondayLogo from "@/assets/integrations/monday.png";
import asanaLogo from "@/assets/integrations/asana.svg";
import zoomLogo from "@/assets/integrations/zoom.svg";
import sage50Logo from "@/assets/integrations/sage50.svg";

export default function Integrations() {
  return (
    <>
      <Helmet>
        <title>Supported Tools Map - Nimara</title>
        <meta 
          name="description" 
          content="Nimara fits around the tools you already use. See how we connect to QuickBooks, Salesforce, Keela, Google Workspace, Microsoft 365, and dozens more nonprofit tools." 
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            {/* Back Link */}
            <Link 
              to="/"
              className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>

            {/* Page Header */}
            <div className="mb-16">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Nimara supported tools map
              </h1>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="text-xl leading-relaxed mb-4">
                  Nimara fits around the tools you already use. We don't force you to rip and replace your whole tech stack.
                </p>
                <p className="text-lg leading-relaxed">
                  This page shows the tools we see most in small and mid-size Canadian nonprofits, and how Nimara connects to them.
                </p>
              </div>
              
              <div className="mt-8 bg-card border border-border rounded-2xl p-6">
                <p className="text-muted-foreground mb-4">
                  We group tools into three levels:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <Zap className="w-5 h-5 text-[#6945D8] mt-0.5 flex-shrink-0" />
                    <span><strong className="text-foreground">Level 1 – Core connections:</strong> focus for our MVP and fastest to support.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-[#ACFCE3] mt-0.5 flex-shrink-0" />
                    <span><strong className="text-foreground">Level 2 – Common add-ons:</strong> we support where there is demand.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Link2 className="w-5 h-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                    <span><strong className="text-foreground">Level 3 – Flexible connections:</strong> anything else via imports, exports, and light automation.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Level 1 - Core Connections */}
            <section className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <Zap className="w-8 h-8 text-[#6945D8]" />
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                  Level 1 – Core connections (our main focus)
                </h2>
              </div>
              <p className="text-lg text-muted-foreground mb-8">
                These are the tools we expect to see in most Nimara clients. We design workplans and templates assuming some mix of these.
              </p>

              <div className="grid gap-6 md:grid-cols-2">
                {/* Accounting & Finance */}
                <div className="bg-card border border-border rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-foreground mb-4">Accounting & finance</h3>
                  <div className="space-y-3">
                    <div className="group flex items-center gap-3 p-3 rounded-xl hover:bg-muted/50 transition-all cursor-pointer hover-scale">
                      <div className="w-10 h-10 flex items-center justify-center flex-shrink-0">
                        <img 
                          src={quickbooksLogo} 
                          alt="QuickBooks logo"
                          className="w-8 h-8 object-contain"
                        />
                      </div>
                      <span className="text-muted-foreground group-hover:text-foreground transition-colors">QuickBooks Online</span>
                    </div>
                  </div>
                </div>

                {/* Donor & Fundraising */}
                <div className="bg-card border border-border rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-foreground mb-4">Donor & fundraising stack</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-muted/50 transition-all">
                      <span className="text-muted-foreground">• Keela (nonprofit CRM)</span>
                    </div>
                    <div className="group flex items-center gap-3 p-3 rounded-xl hover:bg-muted/50 transition-all cursor-pointer hover-scale">
                      <div className="w-10 h-10 flex items-center justify-center flex-shrink-0">
                        <img 
                          src={salesforceLogo} 
                          alt="Salesforce logo"
                          className="w-8 h-8 object-contain"
                        />
                      </div>
                      <span className="text-muted-foreground group-hover:text-foreground transition-colors">Salesforce Nonprofit Cloud / NPSP</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-muted/50 transition-all">
                      <span className="text-muted-foreground">• CanadaHelps (online donations)</span>
                    </div>
                  </div>
                </div>

                {/* Payments */}
                <div className="bg-card border border-border rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-foreground mb-4">Payments</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-muted/50 transition-all">
                      <span className="text-muted-foreground">• Stripe</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-muted/50 transition-all">
                      <span className="text-muted-foreground">• PayPal</span>
                    </div>
                  </div>
                </div>

                {/* Email, files, everyday work */}
                <div className="bg-card border border-border rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-foreground mb-4">Email, files, and everyday work</h3>
                  <div className="space-y-3">
                    <div className="group flex items-center gap-3 p-3 rounded-xl hover:bg-muted/50 transition-all cursor-pointer hover-scale">
                      <div className="w-10 h-10 flex items-center justify-center flex-shrink-0">
                        <img 
                          src={googleLogo} 
                          alt="Google Workspace logo"
                          className="w-8 h-8 object-contain"
                        />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground group-hover:text-[#6945D8] transition-colors">Google Workspace</p>
                        <p className="text-sm text-muted-foreground">Gmail, Drive, Docs, Sheets, Forms</p>
                      </div>
                    </div>
                    <div className="group flex items-center gap-3 p-3 rounded-xl hover:bg-muted/50 transition-all cursor-pointer hover-scale">
                      <div className="w-10 h-10 flex items-center justify-center flex-shrink-0">
                        <img 
                          src={microsoftLogo} 
                          alt="Microsoft 365 logo"
                          className="w-8 h-8 object-contain"
                        />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground group-hover:text-[#6945D8] transition-colors">Microsoft 365</p>
                        <p className="text-sm text-muted-foreground">Outlook, OneDrive, SharePoint, Teams</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Email Marketing */}
                <div className="bg-card border border-border rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-foreground mb-4">Email marketing</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-muted/50 transition-all">
                      <span className="text-muted-foreground">• Mailchimp</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-[#6945D8]/10 border border-[#6945D8]/20 rounded-2xl p-6">
                <p className="text-foreground font-semibold mb-2">In plain language:</p>
                <p className="text-muted-foreground">
                  If your finance lives in QuickBooks and your donations live in Keela, Salesforce, or CanadaHelps, and your team lives in Google or Microsoft, you are in our "happy path" for Nimara.
                </p>
              </div>
            </section>

            {/* Level 2 - Common Add-ons */}
            <section className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <Users className="w-8 h-8 text-[#ACFCE3]" />
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                  Level 2 – Common tools we see and support
                </h2>
              </div>
              <p className="text-lg text-muted-foreground mb-8">
                These are tools we see often in small–mid nonprofits. We support them where it makes sense, using a mix of direct connections, templates, and imports.
              </p>

              <div className="grid gap-6 md:grid-cols-2">
                {/* Accounting & Finance */}
                <div className="bg-card border border-border rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-foreground mb-4">Accounting & finance</h3>
                  <div className="space-y-3">
                    <div className="group flex items-center gap-3 p-3 rounded-xl hover:bg-muted/50 transition-all cursor-pointer hover-scale">
                      <div className="w-10 h-10 flex items-center justify-center flex-shrink-0">
                        <img 
                          src={sage50Logo} 
                          alt="Sage logo"
                          className="w-8 h-8 object-contain"
                        />
                      </div>
                      <span className="text-muted-foreground group-hover:text-foreground transition-colors">Sage 50cloud / Sage 300</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-muted/50 transition-all">
                      <span className="text-muted-foreground">• Xero</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-muted/50 transition-all">
                      <span className="text-muted-foreground">• Aplos</span>
                    </div>
                  </div>
                </div>

                {/* Donor CRM */}
                <div className="bg-card border border-border rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-foreground mb-4">Donor CRM & fundraising</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-muted/50 transition-all">
                      <span className="text-muted-foreground">• Sumac</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-muted/50 transition-all">
                      <span className="text-muted-foreground">• Raiser's Edge NXT</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-muted/50 transition-all">
                      <span className="text-muted-foreground">• Bloomerang</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-muted/50 transition-all">
                      <span className="text-muted-foreground">• DonorPerfect</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-muted/50 transition-all">
                      <span className="text-muted-foreground">• Neon CRM</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-muted/50 transition-all">
                      <span className="text-muted-foreground">• Kindful</span>
                    </div>
                  </div>
                </div>

                {/* Online Donations */}
                <div className="bg-card border border-border rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-foreground mb-4">Online donations & campaigns</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-muted/50 transition-all">
                      <span className="text-muted-foreground">• Zeffy</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-muted/50 transition-all">
                      <span className="text-muted-foreground">• Raisely</span>
                    </div>
                  </div>
                </div>

                {/* Membership */}
                <div className="bg-card border border-border rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-foreground mb-4">Membership, advocacy, and "all-in-one" platforms</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-muted/50 transition-all">
                      <span className="text-muted-foreground">• Wild Apricot</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-muted/50 transition-all">
                      <span className="text-muted-foreground">• NationBuilder</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-muted/50 transition-all">
                      <span className="text-muted-foreground">• Member365</span>
                    </div>
                  </div>
                </div>

                {/* Email Marketing */}
                <div className="bg-card border border-border rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-foreground mb-4">Email marketing and mass communication</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-muted/50 transition-all">
                      <span className="text-muted-foreground">• Constant Contact</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-muted/50 transition-all">
                      <span className="text-muted-foreground">• Campaign Monitor</span>
                    </div>
                  </div>
                </div>

                {/* Project Management */}
                <div className="bg-card border border-border rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-foreground mb-4">Project and work management</h3>
                  <div className="space-y-3">
                    <div className="group flex items-center gap-3 p-3 rounded-xl hover:bg-muted/50 transition-all cursor-pointer hover-scale">
                      <div className="w-10 h-10 flex items-center justify-center flex-shrink-0">
                        <img 
                          src={asanaLogo} 
                          alt="Asana logo"
                          className="w-8 h-8 object-contain"
                        />
                      </div>
                      <span className="text-muted-foreground group-hover:text-foreground transition-colors">Asana</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-muted/50 transition-all">
                      <span className="text-muted-foreground">• Trello</span>
                    </div>
                    <div className="group flex items-center gap-3 p-3 rounded-xl hover:bg-muted/50 transition-all cursor-pointer hover-scale">
                      <div className="w-10 h-10 flex items-center justify-center flex-shrink-0">
                        <img 
                          src={mondayLogo} 
                          alt="Monday.com logo"
                          className="w-8 h-8 object-contain"
                        />
                      </div>
                      <span className="text-muted-foreground group-hover:text-foreground transition-colors">monday.com</span>
                    </div>
                  </div>
                </div>

                {/* Communication */}
                <div className="bg-card border border-border rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-foreground mb-4">Communication and meetings</h3>
                  <div className="space-y-3">
                    <div className="group flex items-center gap-3 p-3 rounded-xl hover:bg-muted/50 transition-all cursor-pointer hover-scale">
                      <div className="w-10 h-10 flex items-center justify-center flex-shrink-0">
                        <img 
                          src={zoomLogo} 
                          alt="Zoom logo"
                          className="w-8 h-8 object-contain"
                        />
                      </div>
                      <span className="text-muted-foreground group-hover:text-foreground transition-colors">Zoom</span>
                    </div>
                    <div className="group flex items-center gap-3 p-3 rounded-xl hover:bg-muted/50 transition-all cursor-pointer hover-scale">
                      <div className="w-10 h-10 flex items-center justify-center flex-shrink-0">
                        <img 
                          src={slackLogo} 
                          alt="Slack logo"
                          className="w-8 h-8 object-contain"
                        />
                      </div>
                      <span className="text-muted-foreground group-hover:text-foreground transition-colors">Slack</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-[#ACFCE3]/10 border border-[#ACFCE3]/30 rounded-2xl p-6">
                <p className="text-foreground font-semibold mb-2">In plain language:</p>
                <p className="text-muted-foreground">
                  If you use any of these tools, Nimara can still plug in. We may use a mix of light integrations, exports/imports, and clear process maps to keep your systems talking to each other.
                </p>
              </div>
            </section>

            {/* Level 3 - Flexible Connections */}
            <section className="mb-16">
              <div className="flex items-center gap-3 mb-6">
                <Link2 className="w-8 h-8 text-muted-foreground" />
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                  Level 3 – Flexible connections (long tail tools)
                </h2>
              </div>
              <p className="text-lg text-muted-foreground mb-8">
                Nonprofits use a long list of "other" tools: smaller CRMs, ticketing tools, custom databases, or legacy systems.
              </p>

              <div className="bg-card border border-border rounded-2xl p-8">
                <p className="text-muted-foreground mb-6">
                  For these, Nimara uses simple ways to connect:
                </p>
                
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="bg-muted/30 rounded-xl p-4">
                    <h4 className="font-semibold text-foreground mb-2">CSV imports and exports</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Clean data in Sheets</li>
                      <li>• Import into your CRM or finance tool</li>
                    </ul>
                  </div>

                  <div className="bg-muted/30 rounded-xl p-4">
                    <h4 className="font-semibold text-foreground mb-2">Standard reports</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Build report templates you can pull every month or quarter</li>
                    </ul>
                  </div>

                  <div className="bg-muted/30 rounded-xl p-4">
                    <h4 className="font-semibold text-foreground mb-2">Online forms</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Use Google Forms or your website to capture data in a clean format</li>
                    </ul>
                  </div>

                  <div className="bg-muted/30 rounded-xl p-4">
                    <h4 className="font-semibold text-foreground mb-2">Email parsing</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Turn common email workflows into tracked tasks and records</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-border">
                  <p className="text-muted-foreground">
                    We treat these as <strong className="text-foreground">"data bridges"</strong>, not big IT projects. The goal is simple: your systems stay updated enough to make decisions and pass audits.
                  </p>
                </div>
              </div>
            </section>

            {/* How Nimara Uses Tools */}
            <section className="mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                How Nimara uses your tools in practice
              </h2>
              
              <div className="space-y-6">
                <div className="bg-card border border-border rounded-2xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-[#6945D8]/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-[#6945D8] font-bold">1</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">Ask what tools you already use</h3>
                      <p className="text-muted-foreground">
                        In our intake and Organizational Health Check, we ask you to tick off tools from the list above and add anything else.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-card border border-border rounded-2xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-[#6945D8]/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-[#6945D8] font-bold">2</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-3">Pick the simplest path that works</h3>
                      <div className="space-y-4">
                        <div>
                          <p className="font-semibold text-foreground mb-2">For Path A (single fix), we usually:</p>
                          <ul className="space-y-1 ml-4 text-muted-foreground">
                            <li>• Pull the data we need from your existing tools</li>
                            <li>• Fix the process or system</li>
                            <li>• Show you how to keep it updated</li>
                          </ul>
                        </div>
                        <div>
                          <p className="font-semibold text-foreground mb-2">For Path B (bundles and bigger packages), we may:</p>
                          <ul className="space-y-1 ml-4 text-muted-foreground">
                            <li>• Set up light automations</li>
                            <li>• Standardize reports across tools</li>
                            <li>• Create playbooks so staff and volunteers know exactly what to do</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-card border border-border rounded-2xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-[#6945D8]/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-[#6945D8] font-bold">3</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">Leave you with clear instructions</h3>
                      <p className="text-muted-foreground">
                        You get simple "how-to" steps in plain language, so your team can run the system without Nimara holding the pen forever.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Integration Philosophy */}
            <section className="mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Our integration philosophy
              </h2>
              
              <div className="bg-card border border-border rounded-2xl p-8">
                <p className="text-muted-foreground mb-6">
                  We design Nimara to be:
                </p>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2">Tool-neutral</h3>
                    <p className="text-muted-foreground">
                      We do not sell software. We work with what you have where possible.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2">Lightweight</h3>
                    <p className="text-muted-foreground">
                      We prefer simple, low-risk connections over heavy custom builds.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2">Data-first</h3>
                    <p className="text-muted-foreground">
                      The main goal is clean, reliable data for decisions, audits, and funders.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2">Evidence-based</h3>
                    <p className="text-muted-foreground mb-2">
                      We decide which tools to integrate deeper with based on:
                    </p>
                    <ul className="space-y-1 ml-4 text-muted-foreground">
                      <li>• How many clients use it</li>
                      <li>• How critical it is to operations</li>
                      <li>• How messy it is today</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section>
              <div className="bg-card border border-border rounded-2xl p-8 text-center">
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                  Don't see your tool here?
                </h2>
                <p className="text-muted-foreground mb-3 max-w-2xl mx-auto">
                  That's okay.
                </p>
                <div className="space-y-4 text-left max-w-2xl mx-auto mb-8">
                  <div>
                    <p className="font-semibold text-foreground mb-2">If you are a nonprofit:</p>
                    <p className="text-muted-foreground">
                      Tell us what you use in your intake form. We will map it to the closest path and tell you what is possible inside your Nimara workplan.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-2">If you are a vendor or partner:</p>
                    <p className="text-muted-foreground">
                      Reach out if you want to explore a deeper connection with Nimara. We are happy to talk if your tool is serving small and mid-size nonprofits in Canada.
                    </p>
                  </div>
                </div>
                <a
                  href="https://calendly.com/hello-nimara/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground hover:bg-[#7A5DE0] font-semibold px-8 py-3 rounded-xl shadow-soft transition-all min-h-[44px]"
                >
                  Schedule A Call
                </a>
                
                <div className="mt-8 pt-8 border-t border-border">
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">Bottom line:</strong> Nimara is built to sit on top of the tools you already have, clean them up, and make them work together so your team can focus on the real work, not the systems.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}
