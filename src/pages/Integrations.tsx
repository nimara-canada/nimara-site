import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArrowLeft, Zap, Users, Link2, ArrowRight, RefreshCw, ChevronDown, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import quickbooksLogo from "@/assets/integrations/quickbooks.svg";
import salesforceLogo from "@/assets/integrations/salesforce.svg";
import googleLogo from "@/assets/integrations/google.jpg";
import microsoftLogo from "@/assets/integrations/microsoft-icon.png";
import slackLogo from "@/assets/integrations/slack.png";
import mondayLogo from "@/assets/integrations/monday.png";
import asanaLogo from "@/assets/integrations/asana.svg";
import zoomLogo from "@/assets/integrations/zoom.svg";
import sage50Logo from "@/assets/integrations/sage50.svg";

interface QuizQuestion {
  id: string;
  question: string;
  options: {
    text: string;
    value: number;
  }[];
}

const quizQuestions: QuizQuestion[] = [
  {
    id: "criticality",
    question: "How critical is this tool to your daily operations?",
    options: [
      { text: "Mission-critical", value: 3 },
      { text: "Important but flexible", value: 2 },
      { text: "Nice to have", value: 1 },
    ],
  },
  {
    id: "sync-frequency",
    question: "How often do you need data synced?",
    options: [
      { text: "Real-time", value: 3 },
      { text: "Daily", value: 2 },
      { text: "Weekly or less", value: 1 },
    ],
  },
  {
    id: "data-volume",
    question: "How much data flows through this tool?",
    options: [
      { text: "High volume", value: 3 },
      { text: "Moderate", value: 2 },
      { text: "Low volume", value: 1 },
    ],
  },
  {
    id: "technical-capacity",
    question: "What's your team's technical capacity?",
    options: [
      { text: "Limited", value: 3 },
      { text: "Some technical skills", value: 2 },
      { text: "Strong technical team", value: 1 },
    ],
  },
  {
    id: "setup-time",
    question: "How quickly do you need this implemented?",
    options: [
      { text: "ASAP", value: 3 },
      { text: "Within a month", value: 2 },
      { text: "No rush", value: 1 },
    ],
  },
];

const integrationLevels = [
  {
    level: 1,
    name: "Core",
    icon: Zap,
    color: "primary",
    description: "Deep API integration with real-time sync",
    features: ["Real-time sync", "Fully managed", "Priority support"],
  },
  {
    level: 2,
    name: "Common",
    icon: Users,
    color: "secondary",
    description: "Template-based connections with regular sync",
    features: ["Daily sync", "Shared maintenance", "Standard support"],
  },
  {
    level: 3,
    name: "Flexible",
    icon: Link2,
    color: "muted",
    description: "Simple data bridges for occasional needs",
    features: ["Manual sync", "Self-managed", "Documentation"],
  },
];

export default function Integrations() {
  const [quizStep, setQuizStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [showResult, setShowResult] = useState(false);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const handleAnswer = (questionId: string, value: number) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));

    if (quizStep < quizQuestions.length - 1) {
      setTimeout(() => setQuizStep((prev) => prev + 1), 200);
    } else {
      setTimeout(() => setShowResult(true), 200);
    }
  };

  const resetQuiz = () => {
    setQuizStep(0);
    setAnswers({});
    setShowResult(false);
  };

  const calculateRecommendation = () => {
    const total = Object.values(answers).reduce((sum, val) => sum + val, 0);
    const average = total / Object.keys(answers).length;

    if (average >= 2.5) return integrationLevels[0];
    if (average >= 1.8) return integrationLevels[1];
    return integrationLevels[2];
  };

  const toggleSection = (sectionId: string) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId);
  };

  const recommendation = showResult ? calculateRecommendation() : null;

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

        <main className="pt-24 pb-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            {/* Back Link */}
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-12"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>

            {/* Page Header */}
            <div className="mb-16">
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">Tools that work with Nimara</h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
                We connect to your existing tools. No rip and replace needed—we make what you have work better.
              </p>
            </div>

            {/* Integration Levels Overview */}
            <section className="mb-20">
              <div className="grid sm:grid-cols-3 gap-6">
                {integrationLevels.map((level) => (
                  <div
                    key={level.level}
                    className="bg-card border border-border rounded-xl p-6 hover:shadow-sm transition-all"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div
                        className={`w-10 h-10 rounded-lg flex items-center justify-center
                        ${
                          level.level === 1
                            ? "bg-[#6945D8] text-white"
                            : level.level === 2
                              ? "bg-[#ACFCE3] text-[#202654]"
                              : "bg-muted text-foreground"
                        }`}
                      >
                        <level.icon className="w-5 h-5" />
                      </div>
                      <span className="text-sm font-medium text-muted-foreground">Level {level.level}</span>
                    </div>

                    <h3 className="text-lg font-semibold text-foreground mb-2">{level.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{level.description}</p>

                    <div className="space-y-2">
                      {level.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <Check className="w-3.5 h-3.5 text-muted-foreground" />
                          <span className="text-xs text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Interactive Quiz - Simplified */}
            <section className="mb-20">
              <div className="bg-card border border-border rounded-xl p-8">
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-foreground mb-3">Find your integration level</h2>
                  <p className="text-muted-foreground">Answer a few questions to get a personalized recommendation</p>
                </div>

                {!showResult ? (
                  <div className="space-y-6">
                    {/* Progress */}
                    <div className="flex items-center gap-2">
                      {quizQuestions.map((_, idx) => (
                        <div
                          key={idx}
                          className={`h-1 flex-1 rounded-full transition-colors ${
                            idx <= quizStep ? "bg-[#6945D8]" : "bg-muted"
                          }`}
                        />
                      ))}
                    </div>

                    {/* Current Question */}
                    <div>
                      <h3 className="text-lg font-medium text-foreground mb-4">{quizQuestions[quizStep].question}</h3>

                      <div className="grid gap-3">
                        {quizQuestions[quizStep].options.map((option) => (
                          <button
                            key={option.value}
                            onClick={() => handleAnswer(quizQuestions[quizStep].id, option.value)}
                            className="text-left p-4 bg-background border border-border rounded-lg hover:border-[#6945D8]/50 hover:bg-muted/50 transition-all"
                          >
                            <span className="text-foreground">{option.text}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    {quizStep > 0 && (
                      <button
                        onClick={resetQuiz}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-2"
                      >
                        <RefreshCw className="w-3.5 h-3.5" />
                        Start over
                      </button>
                    )}
                  </div>
                ) : (
                  recommendation && (
                    <div className="space-y-6 animate-fade-in">
                      <div className="text-center py-8">
                        <div
                          className={`w-16 h-16 mx-auto mb-4 rounded-xl flex items-center justify-center
                        ${
                          recommendation.level === 1
                            ? "bg-[#6945D8] text-white"
                            : recommendation.level === 2
                              ? "bg-[#ACFCE3] text-[#202654]"
                              : "bg-muted text-foreground"
                        }`}
                        >
                          <recommendation.icon className="w-8 h-8" />
                        </div>

                        <h3 className="text-xl font-semibold text-foreground mb-2">
                          We recommend Level {recommendation.level}: {recommendation.name}
                        </h3>
                        <p className="text-muted-foreground max-w-xl mx-auto mb-8">{recommendation.description}</p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                          <a
                            href="https://calendly.com/hello-nimara/30min"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 bg-[#6945D8] text-white hover:bg-[#6945D8]/90 font-medium px-6 py-3 rounded-lg transition-colors"
                          >
                            Schedule a Call
                            <ArrowRight className="w-4 h-4" />
                          </a>
                          <Button variant="outline" onClick={resetQuiz} className="px-6 py-3">
                            <RefreshCw className="w-4 h-4 mr-2" />
                            Retake Quiz
                          </Button>
                        </div>
                      </div>
                    </div>
                  )
                )}
              </div>
            </section>

            {/* Comparison Table - Simplified */}
            <section className="mb-20">
              <h2 className="text-2xl font-bold text-foreground mb-8">Compare levels</h2>

              <div className="bg-card border border-border rounded-xl overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left p-4 font-medium text-muted-foreground">Feature</th>
                        <th className="text-left p-4 font-medium text-foreground">Level 1</th>
                        <th className="text-left p-4 font-medium text-foreground">Level 2</th>
                        <th className="text-left p-4 font-medium text-foreground">Level 3</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      <tr>
                        <td className="p-4 text-muted-foreground">Integration depth</td>
                        <td className="p-4">Deep API</td>
                        <td className="p-4">Templates</td>
                        <td className="p-4">Manual</td>
                      </tr>
                      <tr>
                        <td className="p-4 text-muted-foreground">Setup time</td>
                        <td className="p-4">1-2 hours</td>
                        <td className="p-4">2-4 hours</td>
                        <td className="p-4">30 min</td>
                      </tr>
                      <tr>
                        <td className="p-4 text-muted-foreground">Data sync</td>
                        <td className="p-4">Real-time</td>
                        <td className="p-4">Daily</td>
                        <td className="p-4">As needed</td>
                      </tr>
                      <tr>
                        <td className="p-4 text-muted-foreground">Support</td>
                        <td className="p-4">Priority</td>
                        <td className="p-4">Standard</td>
                        <td className="p-4">Self-service</td>
                      </tr>
                      <tr>
                        <td className="p-4 text-muted-foreground">Maintenance</td>
                        <td className="p-4">Nimara managed</td>
                        <td className="p-4">Shared</td>
                        <td className="p-4">Self-managed</td>
                      </tr>
                      <tr>
                        <td className="p-4 text-muted-foreground">Best for</td>
                        <td className="p-4">Critical operations</td>
                        <td className="p-4">Regular workflows</td>
                        <td className="p-4">Occasional needs</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* Tools Lists - Simplified with Collapsible Sections */}
            <section className="space-y-8 mb-20">
              {/* Level 1 - Core */}
              <div className="bg-card border border-border rounded-xl overflow-hidden">
                <button
                  onClick={() => toggleSection("level1")}
                  className="w-full p-6 flex items-center justify-between hover:bg-muted/50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-[#6945D8] rounded-lg flex items-center justify-center">
                      <Zap className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-left">
                      <h3 className="font-semibold text-foreground">Level 1 – Core connections</h3>
                      <p className="text-sm text-muted-foreground">Our main focus with deep integrations</p>
                    </div>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-muted-foreground transition-transform ${
                      expandedSection === "level1" ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {expandedSection === "level1" && (
                  <div className="border-t border-border p-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium text-foreground mb-4">Accounting & Finance</h4>
                        <ul className="space-y-3">
                          <li className="flex items-center gap-3">
                            <img src={quickbooksLogo} alt="QuickBooks" className="w-6 h-6" />
                            <span className="text-muted-foreground">QuickBooks Online</span>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-medium text-foreground mb-4">Donor & Fundraising</h4>
                        <ul className="space-y-3">
                          <li className="flex items-center gap-3">
                            <div className="w-6 h-6 bg-[#6945D8]/10 rounded flex items-center justify-center">
                              <span className="text-xs font-bold text-[#6945D8]">K</span>
                            </div>
                            <span className="text-muted-foreground">Keela</span>
                          </li>
                          <li className="flex items-center gap-3">
                            <img src={salesforceLogo} alt="Salesforce" className="w-6 h-6" />
                            <span className="text-muted-foreground">Salesforce Nonprofit Cloud</span>
                          </li>
                          <li className="flex items-center gap-3">
                            <div className="w-6 h-6 bg-[#6945D8]/10 rounded flex items-center justify-center">
                              <span className="text-xs font-bold text-[#6945D8]">CH</span>
                            </div>
                            <span className="text-muted-foreground">CanadaHelps</span>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-medium text-foreground mb-4">Workspace</h4>
                        <ul className="space-y-3">
                          <li className="flex items-center gap-3">
                            <img src={googleLogo} alt="Google" className="w-6 h-6 rounded" />
                            <span className="text-muted-foreground">Google Workspace</span>
                          </li>
                          <li className="flex items-center gap-3">
                            <img src={microsoftLogo} alt="Microsoft" className="w-6 h-6" />
                            <span className="text-muted-foreground">Microsoft 365</span>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-medium text-foreground mb-4">Payments</h4>
                        <ul className="space-y-3">
                          <li className="flex items-center gap-3">
                            <div className="w-6 h-6 bg-[#635BFF]/10 rounded flex items-center justify-center">
                              <span className="text-xs font-bold text-[#635BFF]">S</span>
                            </div>
                            <span className="text-muted-foreground">Stripe</span>
                          </li>
                          <li className="flex items-center gap-3">
                            <div className="w-6 h-6 bg-[#00457C]/10 rounded flex items-center justify-center">
                              <span className="text-xs font-bold text-[#00457C]">PP</span>
                            </div>
                            <span className="text-muted-foreground">PayPal</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="mt-6 p-4 bg-muted/30 rounded-lg">
                      <p className="text-sm text-muted-foreground">
                        <span className="font-medium text-foreground">Happy path:</span> If your finance lives in
                        QuickBooks, donations in Keela/Salesforce, and team in Google/Microsoft, you're all set.
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Level 2 - Common */}
              <div className="bg-card border border-border rounded-xl overflow-hidden">
                <button
                  onClick={() => toggleSection("level2")}
                  className="w-full p-6 flex items-center justify-between hover:bg-muted/50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-[#ACFCE3] rounded-lg flex items-center justify-center">
                      <Users className="w-5 h-5 text-[#202654]" />
                    </div>
                    <div className="text-left">
                      <h3 className="font-semibold text-foreground">Level 2 – Common tools</h3>
                      <p className="text-sm text-muted-foreground">Supported through templates and imports</p>
                    </div>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-muted-foreground transition-transform ${
                      expandedSection === "level2" ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {expandedSection === "level2" && (
                  <div className="border-t border-border p-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium text-foreground mb-4">Accounting</h4>
                        <ul className="space-y-3">
                          <li className="flex items-center gap-3">
                            <img src={sage50Logo} alt="Sage" className="w-6 h-6" />
                            <span className="text-muted-foreground">Sage 50/300</span>
                          </li>
                          <li className="flex items-center gap-3">
                            <div className="w-6 h-6 bg-muted rounded flex items-center justify-center">
                              <span className="text-xs font-bold">X</span>
                            </div>
                            <span className="text-muted-foreground">Xero</span>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-medium text-foreground mb-4">CRM & Fundraising</h4>
                        <ul className="space-y-3">
                          <li className="text-muted-foreground">Sumac, Raiser's Edge, Bloomerang</li>
                          <li className="text-muted-foreground">DonorPerfect, Neon CRM, Kindful</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-medium text-foreground mb-4">Project Management</h4>
                        <ul className="space-y-3">
                          <li className="flex items-center gap-3">
                            <img src={asanaLogo} alt="Asana" className="w-6 h-6" />
                            <span className="text-muted-foreground">Asana</span>
                          </li>
                          <li className="flex items-center gap-3">
                            <img src={mondayLogo} alt="Monday" className="w-6 h-6" />
                            <span className="text-muted-foreground">monday.com</span>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-medium text-foreground mb-4">Communication</h4>
                        <ul className="space-y-3">
                          <li className="flex items-center gap-3">
                            <img src={zoomLogo} alt="Zoom" className="w-6 h-6" />
                            <span className="text-muted-foreground">Zoom</span>
                          </li>
                          <li className="flex items-center gap-3">
                            <img src={slackLogo} alt="Slack" className="w-6 h-6" />
                            <span className="text-muted-foreground">Slack</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Level 3 - Flexible */}
              <div className="bg-card border border-border rounded-xl overflow-hidden">
                <button
                  onClick={() => toggleSection("level3")}
                  className="w-full p-6 flex items-center justify-between hover:bg-muted/50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center">
                      <Link2 className="w-5 h-5" />
                    </div>
                    <div className="text-left">
                      <h3 className="font-semibold text-foreground">Level 3 – Flexible connections</h3>
                      <p className="text-sm text-muted-foreground">Simple data bridges for any tool</p>
                    </div>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-muted-foreground transition-transform ${
                      expandedSection === "level3" ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {expandedSection === "level3" && (
                  <div className="border-t border-border p-6">
                    <p className="text-muted-foreground mb-6">
                      For smaller CRMs, ticketing tools, custom databases, or legacy systems, we use:
                    </p>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="p-4 bg-muted/30 rounded-lg">
                        <h4 className="font-medium text-foreground mb-2">CSV exports/imports</h4>
                        <p className="text-sm text-muted-foreground">Clean data in spreadsheets, import where needed</p>
                      </div>
                      <div className="p-4 bg-muted/30 rounded-lg">
                        <h4 className="font-medium text-foreground mb-2">Standard reports</h4>
                        <p className="text-sm text-muted-foreground">Template reports you can run monthly/quarterly</p>
                      </div>
                      <div className="p-4 bg-muted/30 rounded-lg">
                        <h4 className="font-medium text-foreground mb-2">Online forms</h4>
                        <p className="text-sm text-muted-foreground">Capture data in clean, structured format</p>
                      </div>
                      <div className="p-4 bg-muted/30 rounded-lg">
                        <h4 className="font-medium text-foreground mb-2">Email workflows</h4>
                        <p className="text-sm text-muted-foreground">Turn common emails into tracked tasks</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </section>

            {/* How It Works */}
            <section className="mb-20">
              <h2 className="text-2xl font-bold text-foreground mb-8">How we implement</h2>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 rounded-lg bg-[#6945D8] text-white flex items-center justify-center mx-auto mb-4">
                    <span className="font-bold">1</span>
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Assess your tools</h3>
                  <p className="text-sm text-muted-foreground">We map out what you currently use and how data flows</p>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 rounded-lg bg-[#6945D8] text-white flex items-center justify-center mx-auto mb-4">
                    <span className="font-bold">2</span>
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Choose the simplest path</h3>
                  <p className="text-sm text-muted-foreground">
                    We pick the lightest integration that meets your needs
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 rounded-lg bg-[#6945D8] text-white flex items-center justify-center mx-auto mb-4">
                    <span className="font-bold">3</span>
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Document everything</h3>
                  <p className="text-sm text-muted-foreground">
                    You get clear instructions so your team can maintain it
                  </p>
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section>
              <div className="bg-[#202654] rounded-xl p-12 text-center text-white">
                <h2 className="text-3xl font-bold mb-4">Don't see your tool?</h2>
                <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
                  That's okay. We work with what you have. Tell us about your tools and we'll find a way to connect
                  them.
                </p>

                <a
                  href="https://calendly.com/hello-nimara/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#ACFCE3] text-[#202654] hover:bg-[#9EEBD4] font-semibold px-8 py-3 rounded-lg transition-colors"
                >
                  Schedule a Call
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </section>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}
