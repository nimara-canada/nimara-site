import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArrowLeft, CheckCircle2, Zap, Users, Link2, FileSpreadsheet, FileText, FormInput, Mail } from "lucide-react";
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
            <div className="mb-20">
              <div className="inline-flex items-center gap-2 bg-[#6945D8]/10 text-[#6945D8] px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <CheckCircle2 className="w-4 h-4" />
                Integration Guide
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                Tools that work with Nimara
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mb-8">
                Nimara fits around the tools you already use. We don't force you to rip and replace your whole tech stack—we connect to what you have and make it work better.
              </p>
              
              {/* Three Level Cards */}
              <div className="grid sm:grid-cols-3 gap-4 mt-10">
                <div className="group bg-gradient-to-br from-[#6945D8]/10 to-[#6945D8]/5 border-2 border-[#6945D8]/20 rounded-2xl p-6 hover:border-[#6945D8]/40 transition-all hover:-translate-y-1">
                  <div className="w-12 h-12 bg-[#6945D8] rounded-xl flex items-center justify-center mb-4">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">Level 1 – Core</h3>
                  <p className="text-sm text-muted-foreground">Our main focus. Fastest to support with deep integrations.</p>
                </div>

                <div className="group bg-gradient-to-br from-[#ACFCE3]/10 to-[#ACFCE3]/5 border-2 border-[#ACFCE3]/30 rounded-2xl p-6 hover:border-[#ACFCE3]/50 transition-all hover:-translate-y-1">
                  <div className="w-12 h-12 bg-[#ACFCE3] rounded-xl flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-[#202654]" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">Level 2 – Common</h3>
                  <p className="text-sm text-muted-foreground">We support where there's demand using templates and imports.</p>
                </div>

                <div className="group bg-gradient-to-br from-muted/50 to-muted/20 border-2 border-border rounded-2xl p-6 hover:border-border/60 transition-all hover:-translate-y-1">
                  <div className="w-12 h-12 bg-muted rounded-xl flex items-center justify-center mb-4">
                    <Link2 className="w-6 h-6 text-foreground" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">Level 3 – Flexible</h3>
                  <p className="text-sm text-muted-foreground">Simple data bridges via exports, imports, and forms.</p>
                </div>
              </div>
            </div>

            {/* Comparison Table */}
            <section className="mb-24">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 bg-[#6945D8]/10 text-[#6945D8] px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  <CheckCircle2 className="w-4 h-4" />
                  Quick Comparison
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                  Compare integration levels
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  See what each level offers and find the right fit for your tools
                </p>
              </div>

              <div className="overflow-x-auto">
                <div className="min-w-[800px]">
                  {/* Header Row */}
                  <div className="grid grid-cols-4 gap-4 mb-4">
                    <div className="p-4"></div>
                    <div className="group bg-gradient-to-br from-[#6945D8]/10 to-[#6945D8]/5 border-2 border-[#6945D8]/30 rounded-2xl p-6 hover:border-[#6945D8]/50 transition-all hover:-translate-y-1">
                      <div className="w-10 h-10 bg-[#6945D8] rounded-xl flex items-center justify-center mb-3">
                        <Zap className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-1">Level 1</h3>
                      <p className="text-sm text-[#6945D8] font-semibold">Core</p>
                    </div>
                    <div className="group bg-gradient-to-br from-[#ACFCE3]/10 to-[#ACFCE3]/5 border-2 border-[#ACFCE3]/30 rounded-2xl p-6 hover:border-[#ACFCE3]/50 transition-all hover:-translate-y-1">
                      <div className="w-10 h-10 bg-[#ACFCE3] rounded-xl flex items-center justify-center mb-3">
                        <Users className="w-5 h-5 text-[#202654]" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-1">Level 2</h3>
                      <p className="text-sm font-semibold" style={{ color: '#4CBFA6' }}>Common</p>
                    </div>
                    <div className="group bg-gradient-to-br from-muted/50 to-muted/20 border-2 border-border rounded-2xl p-6 hover:border-border/60 transition-all hover:-translate-y-1">
                      <div className="w-10 h-10 bg-muted rounded-xl flex items-center justify-center mb-3">
                        <Link2 className="w-5 h-5 text-foreground" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-1">Level 3</h3>
                      <p className="text-sm text-muted-foreground font-semibold">Flexible</p>
                    </div>
                  </div>

                  {/* Feature Rows */}
                  <div className="space-y-2">
                    {/* Integration Depth */}
                    <div className="grid grid-cols-4 gap-4 items-center group hover:bg-muted/30 rounded-2xl p-4 transition-colors">
                      <div className="font-semibold text-foreground">Integration depth</div>
                      <div className="bg-[#6945D8]/5 rounded-xl p-4 border border-[#6945D8]/20 group-hover:border-[#6945D8]/40 transition-colors">
                        <p className="text-sm text-foreground font-medium">Deep API integration</p>
                      </div>
                      <div className="bg-[#ACFCE3]/5 rounded-xl p-4 border border-[#ACFCE3]/20 group-hover:border-[#ACFCE3]/40 transition-colors">
                        <p className="text-sm text-foreground font-medium">Light API + templates</p>
                      </div>
                      <div className="bg-muted/30 rounded-xl p-4 border border-border group-hover:border-border/60 transition-colors">
                        <p className="text-sm text-foreground font-medium">Manual data bridges</p>
                      </div>
                    </div>

                    {/* Setup Time */}
                    <div className="grid grid-cols-4 gap-4 items-center group hover:bg-muted/30 rounded-2xl p-4 transition-colors">
                      <div className="font-semibold text-foreground">Setup time</div>
                      <div className="bg-[#6945D8]/5 rounded-xl p-4 border border-[#6945D8]/20 group-hover:border-[#6945D8]/40 transition-colors">
                        <p className="text-sm text-foreground font-medium">1-2 hours</p>
                        <p className="text-xs text-muted-foreground mt-1">One-time setup</p>
                      </div>
                      <div className="bg-[#ACFCE3]/5 rounded-xl p-4 border border-[#ACFCE3]/20 group-hover:border-[#ACFCE3]/40 transition-colors">
                        <p className="text-sm text-foreground font-medium">2-4 hours</p>
                        <p className="text-xs text-muted-foreground mt-1">Custom mapping</p>
                      </div>
                      <div className="bg-muted/30 rounded-xl p-4 border border-border group-hover:border-border/60 transition-colors">
                        <p className="text-sm text-foreground font-medium">30 min - 1 hour</p>
                        <p className="text-xs text-muted-foreground mt-1">Simple process</p>
                      </div>
                    </div>

                    {/* Data Sync */}
                    <div className="grid grid-cols-4 gap-4 items-center group hover:bg-muted/30 rounded-2xl p-4 transition-colors">
                      <div className="font-semibold text-foreground">Data sync</div>
                      <div className="bg-[#6945D8]/5 rounded-xl p-4 border border-[#6945D8]/20 group-hover:border-[#6945D8]/40 transition-colors">
                        <p className="text-sm text-foreground font-medium">Real-time / Hourly</p>
                        <p className="text-xs text-muted-foreground mt-1">Automatic</p>
                      </div>
                      <div className="bg-[#ACFCE3]/5 rounded-xl p-4 border border-[#ACFCE3]/20 group-hover:border-[#ACFCE3]/40 transition-colors">
                        <p className="text-sm text-foreground font-medium">Daily / Weekly</p>
                        <p className="text-xs text-muted-foreground mt-1">Semi-automatic</p>
                      </div>
                      <div className="bg-muted/30 rounded-xl p-4 border border-border group-hover:border-border/60 transition-colors">
                        <p className="text-sm text-foreground font-medium">Monthly / As needed</p>
                        <p className="text-xs text-muted-foreground mt-1">Manual trigger</p>
                      </div>
                    </div>

                    {/* Support Level */}
                    <div className="grid grid-cols-4 gap-4 items-center group hover:bg-muted/30 rounded-2xl p-4 transition-colors">
                      <div className="font-semibold text-foreground">Support level</div>
                      <div className="bg-[#6945D8]/5 rounded-xl p-4 border border-[#6945D8]/20 group-hover:border-[#6945D8]/40 transition-colors">
                        <p className="text-sm text-foreground font-medium">Priority</p>
                        <p className="text-xs text-muted-foreground mt-1">Dedicated help</p>
                      </div>
                      <div className="bg-[#ACFCE3]/5 rounded-xl p-4 border border-[#ACFCE3]/20 group-hover:border-[#ACFCE3]/40 transition-colors">
                        <p className="text-sm text-foreground font-medium">Standard</p>
                        <p className="text-xs text-muted-foreground mt-1">As-needed</p>
                      </div>
                      <div className="bg-muted/30 rounded-xl p-4 border border-border group-hover:border-border/60 transition-colors">
                        <p className="text-sm text-foreground font-medium">Self-service</p>
                        <p className="text-xs text-muted-foreground mt-1">Documentation</p>
                      </div>
                    </div>

                    {/* Customization */}
                    <div className="grid grid-cols-4 gap-4 items-center group hover:bg-muted/30 rounded-2xl p-4 transition-colors">
                      <div className="font-semibold text-foreground">Customization</div>
                      <div className="bg-[#6945D8]/5 rounded-xl p-4 border border-[#6945D8]/20 group-hover:border-[#6945D8]/40 transition-colors">
                        <p className="text-sm text-foreground font-medium">Fully configurable</p>
                        <p className="text-xs text-muted-foreground mt-1">Field mapping</p>
                      </div>
                      <div className="bg-[#ACFCE3]/5 rounded-xl p-4 border border-[#ACFCE3]/20 group-hover:border-[#ACFCE3]/40 transition-colors">
                        <p className="text-sm text-foreground font-medium">Template-based</p>
                        <p className="text-xs text-muted-foreground mt-1">Preset options</p>
                      </div>
                      <div className="bg-muted/30 rounded-xl p-4 border border-border group-hover:border-border/60 transition-colors">
                        <p className="text-sm text-foreground font-medium">DIY approach</p>
                        <p className="text-xs text-muted-foreground mt-1">Your format</p>
                      </div>
                    </div>

                    {/* Maintenance */}
                    <div className="grid grid-cols-4 gap-4 items-center group hover:bg-muted/30 rounded-2xl p-4 transition-colors">
                      <div className="font-semibold text-foreground">Maintenance</div>
                      <div className="bg-[#6945D8]/5 rounded-xl p-4 border border-[#6945D8]/20 group-hover:border-[#6945D8]/40 transition-colors">
                        <p className="text-sm text-foreground font-medium">Managed by Nimara</p>
                        <p className="text-xs text-muted-foreground mt-1">Auto-updates</p>
                      </div>
                      <div className="bg-[#ACFCE3]/5 rounded-xl p-4 border border-[#ACFCE3]/20 group-hover:border-[#ACFCE3]/40 transition-colors">
                        <p className="text-sm text-foreground font-medium">Shared responsibility</p>
                        <p className="text-xs text-muted-foreground mt-1">Periodic checks</p>
                      </div>
                      <div className="bg-muted/30 rounded-xl p-4 border border-border group-hover:border-border/60 transition-colors">
                        <p className="text-sm text-foreground font-medium">Your team manages</p>
                        <p className="text-xs text-muted-foreground mt-1">Simple processes</p>
                      </div>
                    </div>

                    {/* Best For */}
                    <div className="grid grid-cols-4 gap-4 items-center group hover:bg-muted/30 rounded-2xl p-4 transition-colors">
                      <div className="font-semibold text-foreground">Best for</div>
                      <div className="bg-[#6945D8]/5 rounded-xl p-4 border border-[#6945D8]/20 group-hover:border-[#6945D8]/40 transition-colors">
                        <p className="text-sm text-foreground font-medium">Critical daily operations</p>
                      </div>
                      <div className="bg-[#ACFCE3]/5 rounded-xl p-4 border border-[#ACFCE3]/20 group-hover:border-[#ACFCE3]/40 transition-colors">
                        <p className="text-sm text-foreground font-medium">Important workflows</p>
                      </div>
                      <div className="bg-muted/30 rounded-xl p-4 border border-border group-hover:border-border/60 transition-colors">
                        <p className="text-sm text-foreground font-medium">Occasional data needs</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Level 1 - Core Connections */}
            <section className="mb-24">
              <div className="bg-gradient-to-r from-[#6945D8]/5 to-transparent rounded-3xl p-8 mb-8 border-l-4 border-[#6945D8]">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-[#6945D8] rounded-2xl flex items-center justify-center shadow-lg">
                    <Zap className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                      Level 1 – Core connections
                    </h2>
                    <p className="text-sm text-[#6945D8] font-semibold mt-1">Our main focus</p>
                  </div>
                </div>
                <p className="text-lg text-muted-foreground">
                  These are the tools we expect to see in most Nimara clients. We design workplans and templates assuming some mix of these.
                </p>
              </div>

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
                    <div className="group flex items-center gap-3 p-3 rounded-xl hover:bg-muted/50 transition-all cursor-pointer hover-scale">
                      <div className="w-10 h-10 flex items-center justify-center flex-shrink-0 bg-[#6945D8]/10 rounded-lg">
                        <span className="text-[#6945D8] font-bold text-sm">K</span>
                      </div>
                      <span className="text-muted-foreground group-hover:text-foreground transition-colors">Keela (nonprofit CRM)</span>
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
                    <div className="group flex items-center gap-3 p-3 rounded-xl hover:bg-muted/50 transition-all cursor-pointer hover-scale">
                      <div className="w-10 h-10 flex items-center justify-center flex-shrink-0 bg-[#6945D8]/10 rounded-lg">
                        <span className="text-[#6945D8] font-bold text-sm">CH</span>
                      </div>
                      <span className="text-muted-foreground group-hover:text-foreground transition-colors">CanadaHelps (online donations)</span>
                    </div>
                  </div>
                </div>

                {/* Payments */}
                <div className="bg-card border border-border rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-foreground mb-4">Payments</h3>
                  <div className="space-y-3">
                    <div className="group flex items-center gap-3 p-3 rounded-xl hover:bg-muted/50 transition-all cursor-pointer hover-scale">
                      <div className="w-10 h-10 flex items-center justify-center flex-shrink-0 bg-[#635BFF]/10 rounded-lg">
                        <span className="text-[#635BFF] font-bold text-sm">S</span>
                      </div>
                      <span className="text-muted-foreground group-hover:text-foreground transition-colors">Stripe</span>
                    </div>
                    <div className="group flex items-center gap-3 p-3 rounded-xl hover:bg-muted/50 transition-all cursor-pointer hover-scale">
                      <div className="w-10 h-10 flex items-center justify-center flex-shrink-0 bg-[#00457C]/10 rounded-lg">
                        <span className="text-[#00457C] font-bold text-sm">PP</span>
                      </div>
                      <span className="text-muted-foreground group-hover:text-foreground transition-colors">PayPal</span>
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
                    <div className="group flex items-center gap-3 p-3 rounded-xl hover:bg-muted/50 transition-all cursor-pointer hover-scale">
                      <div className="w-10 h-10 flex items-center justify-center flex-shrink-0 bg-[#FFE01B]/20 rounded-lg">
                        <span className="text-[#241C15] font-bold text-sm">MC</span>
                      </div>
                      <span className="text-muted-foreground group-hover:text-foreground transition-colors">Mailchimp</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-10 relative overflow-hidden bg-gradient-to-br from-[#6945D8]/10 via-[#6945D8]/5 to-transparent border-2 border-[#6945D8]/20 rounded-3xl p-8">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#6945D8]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                <div className="relative">
                  <div className="inline-flex items-center gap-2 bg-[#6945D8] text-white px-3 py-1 rounded-full text-xs font-bold mb-4">
                    <CheckCircle2 className="w-3 h-3" />
                    IN PLAIN LANGUAGE
                  </div>
                  <p className="text-lg text-foreground font-medium leading-relaxed">
                    If your finance lives in QuickBooks and your donations live in Keela, Salesforce, or CanadaHelps, and your team lives in Google or Microsoft, you are in our <span className="text-[#6945D8] font-bold">"happy path"</span> for Nimara.
                  </p>
                </div>
              </div>
            </section>

            {/* Level 2 - Common Add-ons */}
            <section className="mb-24">
              <div className="bg-gradient-to-r from-[#ACFCE3]/10 to-transparent rounded-3xl p-8 mb-8 border-l-4 border-[#ACFCE3]">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-[#ACFCE3] rounded-2xl flex items-center justify-center shadow-lg">
                    <Users className="w-7 h-7 text-[#202654]" />
                  </div>
                  <div>
                    <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                      Level 2 – Common tools
                    </h2>
                    <p className="text-sm text-[#ACFCE3] font-semibold mt-1" style={{ color: '#4CBFA6' }}>We see and support</p>
                  </div>
                </div>
                <p className="text-lg text-muted-foreground">
                  These are tools we see often in small–mid nonprofits. We support them where it makes sense, using a mix of direct connections, templates, and imports.
                </p>
              </div>

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
                    <div className="group flex items-center gap-3 p-3 rounded-xl hover:bg-muted/50 transition-all cursor-pointer hover-scale">
                      <div className="w-10 h-10 flex items-center justify-center flex-shrink-0 bg-[#13B5EA]/10 rounded-lg">
                        <span className="text-[#13B5EA] font-bold text-sm">X</span>
                      </div>
                      <span className="text-muted-foreground group-hover:text-foreground transition-colors">Xero</span>
                    </div>
                    <div className="group flex items-center gap-3 p-3 rounded-xl hover:bg-muted/50 transition-all cursor-pointer hover-scale">
                      <div className="w-10 h-10 flex items-center justify-center flex-shrink-0 bg-[#6945D8]/10 rounded-lg">
                        <span className="text-[#6945D8] font-bold text-sm">A</span>
                      </div>
                      <span className="text-muted-foreground group-hover:text-foreground transition-colors">Aplos</span>
                    </div>
                  </div>
                </div>

                {/* Donor CRM */}
                <div className="bg-card border border-border rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-foreground mb-4">Donor CRM & fundraising</h3>
                  <div className="space-y-3">
                    <div className="group flex items-center gap-3 p-3 rounded-xl hover:bg-muted/50 transition-all cursor-pointer hover-scale">
                      <div className="w-10 h-10 flex items-center justify-center flex-shrink-0 bg-[#6945D8]/10 rounded-lg">
                        <span className="text-[#6945D8] font-bold text-sm">S</span>
                      </div>
                      <span className="text-muted-foreground group-hover:text-foreground transition-colors">Sumac</span>
                    </div>
                    <div className="group flex items-center gap-3 p-3 rounded-xl hover:bg-muted/50 transition-all cursor-pointer hover-scale">
                      <div className="w-10 h-10 flex items-center justify-center flex-shrink-0 bg-[#6945D8]/10 rounded-lg">
                        <span className="text-[#6945D8] font-bold text-sm">RE</span>
                      </div>
                      <span className="text-muted-foreground group-hover:text-foreground transition-colors">Raiser's Edge NXT</span>
                    </div>
                    <div className="group flex items-center gap-3 p-3 rounded-xl hover:bg-muted/50 transition-all cursor-pointer hover-scale">
                      <div className="w-10 h-10 flex items-center justify-center flex-shrink-0 bg-[#6945D8]/10 rounded-lg">
                        <span className="text-[#6945D8] font-bold text-sm">B</span>
                      </div>
                      <span className="text-muted-foreground group-hover:text-foreground transition-colors">Bloomerang</span>
                    </div>
                    <div className="group flex items-center gap-3 p-3 rounded-xl hover:bg-muted/50 transition-all cursor-pointer hover-scale">
                      <div className="w-10 h-10 flex items-center justify-center flex-shrink-0 bg-[#6945D8]/10 rounded-lg">
                        <span className="text-[#6945D8] font-bold text-sm">DP</span>
                      </div>
                      <span className="text-muted-foreground group-hover:text-foreground transition-colors">DonorPerfect</span>
                    </div>
                    <div className="group flex items-center gap-3 p-3 rounded-xl hover:bg-muted/50 transition-all cursor-pointer hover-scale">
                      <div className="w-10 h-10 flex items-center justify-center flex-shrink-0 bg-[#6945D8]/10 rounded-lg">
                        <span className="text-[#6945D8] font-bold text-sm">N</span>
                      </div>
                      <span className="text-muted-foreground group-hover:text-foreground transition-colors">Neon CRM</span>
                    </div>
                    <div className="group flex items-center gap-3 p-3 rounded-xl hover:bg-muted/50 transition-all cursor-pointer hover-scale">
                      <div className="w-10 h-10 flex items-center justify-center flex-shrink-0 bg-[#6945D8]/10 rounded-lg">
                        <span className="text-[#6945D8] font-bold text-sm">K</span>
                      </div>
                      <span className="text-muted-foreground group-hover:text-foreground transition-colors">Kindful</span>
                    </div>
                  </div>
                </div>

                {/* Online Donations */}
                <div className="bg-card border border-border rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-foreground mb-4">Online donations & campaigns</h3>
                  <div className="space-y-3">
                    <div className="group flex items-center gap-3 p-3 rounded-xl hover:bg-muted/50 transition-all cursor-pointer hover-scale">
                      <div className="w-10 h-10 flex items-center justify-center flex-shrink-0 bg-[#6945D8]/10 rounded-lg">
                        <span className="text-[#6945D8] font-bold text-sm">Z</span>
                      </div>
                      <span className="text-muted-foreground group-hover:text-foreground transition-colors">Zeffy</span>
                    </div>
                    <div className="group flex items-center gap-3 p-3 rounded-xl hover:bg-muted/50 transition-all cursor-pointer hover-scale">
                      <div className="w-10 h-10 flex items-center justify-center flex-shrink-0 bg-[#6945D8]/10 rounded-lg">
                        <span className="text-[#6945D8] font-bold text-sm">R</span>
                      </div>
                      <span className="text-muted-foreground group-hover:text-foreground transition-colors">Raisely</span>
                    </div>
                  </div>
                </div>

                {/* Membership */}
                <div className="bg-card border border-border rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-foreground mb-4">Membership, advocacy, and "all-in-one" platforms</h3>
                  <div className="space-y-3">
                    <div className="group flex items-center gap-3 p-3 rounded-xl hover:bg-muted/50 transition-all cursor-pointer hover-scale">
                      <div className="w-10 h-10 flex items-center justify-center flex-shrink-0 bg-[#6945D8]/10 rounded-lg">
                        <span className="text-[#6945D8] font-bold text-sm">WA</span>
                      </div>
                      <span className="text-muted-foreground group-hover:text-foreground transition-colors">Wild Apricot</span>
                    </div>
                    <div className="group flex items-center gap-3 p-3 rounded-xl hover:bg-muted/50 transition-all cursor-pointer hover-scale">
                      <div className="w-10 h-10 flex items-center justify-center flex-shrink-0 bg-[#6945D8]/10 rounded-lg">
                        <span className="text-[#6945D8] font-bold text-sm">NB</span>
                      </div>
                      <span className="text-muted-foreground group-hover:text-foreground transition-colors">NationBuilder</span>
                    </div>
                    <div className="group flex items-center gap-3 p-3 rounded-xl hover:bg-muted/50 transition-all cursor-pointer hover-scale">
                      <div className="w-10 h-10 flex items-center justify-center flex-shrink-0 bg-[#6945D8]/10 rounded-lg">
                        <span className="text-[#6945D8] font-bold text-sm">M365</span>
                      </div>
                      <span className="text-muted-foreground group-hover:text-foreground transition-colors">Member365</span>
                    </div>
                  </div>
                </div>

                {/* Email Marketing */}
                <div className="bg-card border border-border rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-foreground mb-4">Email marketing and mass communication</h3>
                  <div className="space-y-3">
                    <div className="group flex items-center gap-3 p-3 rounded-xl hover:bg-muted/50 transition-all cursor-pointer hover-scale">
                      <div className="w-10 h-10 flex items-center justify-center flex-shrink-0 bg-[#6945D8]/10 rounded-lg">
                        <span className="text-[#6945D8] font-bold text-sm">CC</span>
                      </div>
                      <span className="text-muted-foreground group-hover:text-foreground transition-colors">Constant Contact</span>
                    </div>
                    <div className="group flex items-center gap-3 p-3 rounded-xl hover:bg-muted/50 transition-all cursor-pointer hover-scale">
                      <div className="w-10 h-10 flex items-center justify-center flex-shrink-0 bg-[#6945D8]/10 rounded-lg">
                        <span className="text-[#6945D8] font-bold text-sm">CM</span>
                      </div>
                      <span className="text-muted-foreground group-hover:text-foreground transition-colors">Campaign Monitor</span>
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
                    <div className="group flex items-center gap-3 p-3 rounded-xl hover:bg-muted/50 transition-all cursor-pointer hover-scale">
                      <div className="w-10 h-10 flex items-center justify-center flex-shrink-0 bg-[#0079BF]/10 rounded-lg">
                        <span className="text-[#0079BF] font-bold text-sm">T</span>
                      </div>
                      <span className="text-muted-foreground group-hover:text-foreground transition-colors">Trello</span>
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

              <div className="mt-10 relative overflow-hidden bg-gradient-to-br from-[#ACFCE3]/10 via-[#ACFCE3]/5 to-transparent border-2 border-[#ACFCE3]/30 rounded-3xl p-8">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#ACFCE3]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                <div className="relative">
                  <div className="inline-flex items-center gap-2 bg-[#ACFCE3] text-[#202654] px-3 py-1 rounded-full text-xs font-bold mb-4">
                    <CheckCircle2 className="w-3 h-3" />
                    IN PLAIN LANGUAGE
                  </div>
                  <p className="text-lg text-foreground font-medium leading-relaxed">
                    If you use any of these tools, Nimara can still plug in. We may use a mix of light integrations, exports/imports, and clear process maps to keep your systems talking to each other.
                  </p>
                </div>
              </div>
            </section>

            {/* Level 3 - Flexible Connections */}
            <section className="mb-24">
              <div className="bg-gradient-to-r from-muted/50 to-transparent rounded-3xl p-8 mb-8 border-l-4 border-border">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-muted rounded-2xl flex items-center justify-center shadow-lg">
                    <Link2 className="w-7 h-7 text-foreground" />
                  </div>
                  <div>
                    <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                      Level 3 – Flexible connections
                    </h2>
                    <p className="text-sm text-muted-foreground font-semibold mt-1">Long tail tools</p>
                  </div>
                </div>
                <p className="text-lg text-muted-foreground">
                  Nonprofits use a long list of "other" tools: smaller CRMs, ticketing tools, custom databases, or legacy systems.
                </p>
              </div>

              <div className="bg-card border-2 border-border rounded-3xl p-8 shadow-sm">
                <h3 className="text-xl font-bold text-foreground mb-6">Simple connection methods</h3>
                
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="group bg-muted/30 rounded-xl p-4 hover:bg-muted/50 transition-all cursor-pointer hover-scale">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="w-10 h-10 flex items-center justify-center flex-shrink-0 bg-[#ACFCE3]/20 rounded-lg">
                        <FileSpreadsheet className="w-5 h-5 text-[#6945D8]" />
                      </div>
                      <h4 className="font-semibold text-foreground group-hover:text-[#6945D8] transition-colors">CSV imports and exports</h4>
                    </div>
                    <ul className="space-y-1 text-sm text-muted-foreground ml-13">
                      <li>• Clean data in Sheets</li>
                      <li>• Import into your CRM or finance tool</li>
                    </ul>
                  </div>

                  <div className="group bg-muted/30 rounded-xl p-4 hover:bg-muted/50 transition-all cursor-pointer hover-scale">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="w-10 h-10 flex items-center justify-center flex-shrink-0 bg-[#ACFCE3]/20 rounded-lg">
                        <FileText className="w-5 h-5 text-[#6945D8]" />
                      </div>
                      <h4 className="font-semibold text-foreground group-hover:text-[#6945D8] transition-colors">Standard reports</h4>
                    </div>
                    <ul className="space-y-1 text-sm text-muted-foreground ml-13">
                      <li>• Build report templates you can pull every month or quarter</li>
                    </ul>
                  </div>

                  <div className="group bg-muted/30 rounded-xl p-4 hover:bg-muted/50 transition-all cursor-pointer hover-scale">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="w-10 h-10 flex items-center justify-center flex-shrink-0 bg-[#ACFCE3]/20 rounded-lg">
                        <FormInput className="w-5 h-5 text-[#6945D8]" />
                      </div>
                      <h4 className="font-semibold text-foreground group-hover:text-[#6945D8] transition-colors">Online forms</h4>
                    </div>
                    <ul className="space-y-1 text-sm text-muted-foreground ml-13">
                      <li>• Use Google Forms or your website to capture data in a clean format</li>
                    </ul>
                  </div>

                  <div className="group bg-muted/30 rounded-xl p-4 hover:bg-muted/50 transition-all cursor-pointer hover-scale">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="w-10 h-10 flex items-center justify-center flex-shrink-0 bg-[#ACFCE3]/20 rounded-lg">
                        <Mail className="w-5 h-5 text-[#6945D8]" />
                      </div>
                      <h4 className="font-semibold text-foreground group-hover:text-[#6945D8] transition-colors">Email parsing</h4>
                    </div>
                    <ul className="space-y-1 text-sm text-muted-foreground ml-13">
                      <li>• Turn common email workflows into tracked tasks and records</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-border">
                  <div className="bg-muted/30 rounded-2xl p-6">
                    <p className="text-foreground font-medium text-lg leading-relaxed">
                      We treat these as <span className="text-[#6945D8] font-bold">"data bridges"</span>, not big IT projects. The goal is simple: your systems stay updated enough to make decisions and pass audits.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* How Nimara Uses Tools */}
            <section className="mb-24">
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                  How Nimara uses your tools in practice
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  A simple three-step process to get your tools working together
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="group bg-card border-2 border-border rounded-3xl p-8 hover:border-[#6945D8]/30 hover:shadow-xl transition-all hover:-translate-y-1">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#6945D8] to-[#7A5DE0] flex items-center justify-center flex-shrink-0 mb-6 shadow-lg">
                    <span className="text-white font-bold text-2xl">1</span>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-[#6945D8] transition-colors">Ask what tools you already use</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    In our intake and Organizational Health Check, we ask you to tick off tools from the list above and add anything else.
                  </p>
                </div>

                <div className="group bg-card border-2 border-border rounded-3xl p-8 hover:border-[#6945D8]/30 hover:shadow-xl transition-all hover:-translate-y-1">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#6945D8] to-[#7A5DE0] flex items-center justify-center flex-shrink-0 mb-6 shadow-lg">
                    <span className="text-white font-bold text-2xl">2</span>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-[#6945D8] transition-colors">Pick the simplest path that works</h3>
                  <div className="space-y-4">
                    <div className="bg-muted/30 rounded-xl p-4">
                      <p className="font-semibold text-foreground text-sm mb-2">Path A (single fix)</p>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Pull data from existing tools</li>
                        <li>• Fix the system</li>
                        <li>• Show you how to maintain it</li>
                      </ul>
                    </div>
                    <div className="bg-muted/30 rounded-xl p-4">
                      <p className="font-semibold text-foreground text-sm mb-2">Path B (full packages)</p>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Set up automations</li>
                        <li>• Standardize reports</li>
                        <li>• Create playbooks</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="group bg-card border-2 border-border rounded-3xl p-8 hover:border-[#6945D8]/30 hover:shadow-xl transition-all hover:-translate-y-1">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#6945D8] to-[#7A5DE0] flex items-center justify-center flex-shrink-0 mb-6 shadow-lg">
                    <span className="text-white font-bold text-2xl">3</span>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-[#6945D8] transition-colors">Leave you with clear instructions</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    You get simple "how-to" steps in plain language, so your team can run the system without Nimara holding the pen forever.
                  </p>
                </div>
              </div>
            </section>

            {/* Integration Philosophy */}
            <section className="mb-24">
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                  Our integration philosophy
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  The principles that guide how we connect your tools
                </p>
              </div>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-card border-2 border-border rounded-2xl p-6 hover:border-[#6945D8]/30 hover:shadow-lg transition-all hover:-translate-y-1">
                  <div className="w-12 h-12 bg-[#6945D8]/10 rounded-xl flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-6 h-6 text-[#6945D8]" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">Tool-neutral</h3>
                  <p className="text-sm text-muted-foreground">
                    We do not sell software. We work with what you have where possible.
                  </p>
                </div>

                <div className="bg-card border-2 border-border rounded-2xl p-6 hover:border-[#6945D8]/30 hover:shadow-lg transition-all hover:-translate-y-1">
                  <div className="w-12 h-12 bg-[#6945D8]/10 rounded-xl flex items-center justify-center mb-4">
                    <Zap className="w-6 h-6 text-[#6945D8]" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">Lightweight</h3>
                  <p className="text-sm text-muted-foreground">
                    We prefer simple, low-risk connections over heavy custom builds.
                  </p>
                </div>

                <div className="bg-card border-2 border-border rounded-2xl p-6 hover:border-[#6945D8]/30 hover:shadow-lg transition-all hover:-translate-y-1">
                  <div className="w-12 h-12 bg-[#6945D8]/10 rounded-xl flex items-center justify-center mb-4">
                    <FileSpreadsheet className="w-6 h-6 text-[#6945D8]" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">Data-first</h3>
                  <p className="text-sm text-muted-foreground">
                    The main goal is clean, reliable data for decisions, audits, and funders.
                  </p>
                </div>

                <div className="bg-card border-2 border-border rounded-2xl p-6 hover:border-[#6945D8]/30 hover:shadow-lg transition-all hover:-translate-y-1">
                  <div className="w-12 h-12 bg-[#6945D8]/10 rounded-xl flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-[#6945D8]" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">Evidence-based</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    We decide which tools to integrate deeper with based on:
                  </p>
                  <ul className="space-y-1 text-xs text-muted-foreground">
                    <li>• Client usage</li>
                    <li>• Operational criticality</li>
                    <li>• Current data quality</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section>
              <div className="relative overflow-hidden bg-gradient-to-br from-[#202654] to-[#1a1f45] rounded-3xl p-12 text-center">
                <div className="absolute top-0 right-0 w-96 h-96 bg-[#6945D8]/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#ACFCE3]/10 rounded-full blur-3xl"></div>
                
                <div className="relative z-10">
                  <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                    Don't see your tool here?
                  </h2>
                  <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
                    That's okay. We work with what you have.
                  </p>
                  
                  <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto mb-10">
                    <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-left hover:bg-white/15 transition-all">
                      <div className="w-10 h-10 bg-[#ACFCE3] rounded-lg flex items-center justify-center mb-4">
                        <Users className="w-5 h-5 text-[#202654]" />
                      </div>
                      <p className="font-bold text-white mb-2">If you are a nonprofit</p>
                      <p className="text-white/70 text-sm">
                        Tell us what you use in your intake form. We will map it to the closest path and tell you what is possible inside your Nimara workplan.
                      </p>
                    </div>
                    
                    <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-left hover:bg-white/15 transition-all">
                      <div className="w-10 h-10 bg-[#ACFCE3] rounded-lg flex items-center justify-center mb-4">
                        <Link2 className="w-5 h-5 text-[#202654]" />
                      </div>
                      <p className="font-bold text-white mb-2">If you are a vendor or partner</p>
                      <p className="text-white/70 text-sm">
                        Reach out if you want to explore a deeper connection with Nimara. We are happy to talk if your tool is serving small and mid-size nonprofits in Canada.
                      </p>
                    </div>
                  </div>
                  
                  <a
                    href="https://calendly.com/hello-nimara/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-[#ACFCE3] text-[#202654] hover:bg-[#9EEBD4] font-bold px-10 py-4 rounded-xl shadow-xl transition-all min-h-[44px] hover:scale-105"
                  >
                    Schedule A Call
                  </a>
                  
                  <div className="mt-10 pt-8 border-t border-white/20">
                    <p className="text-white/80 text-lg max-w-3xl mx-auto">
                      <span className="text-white font-bold">Bottom line:</span> Nimara is built to sit on top of the tools you already have, clean them up, and make them work together so your team can focus on the real work, not the systems.
                    </p>
                  </div>
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
