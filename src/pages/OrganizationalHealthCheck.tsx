import { useState } from "react";
import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { CheckCircle2, ChevronRight, AlertCircle, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Link } from "react-router-dom";

const domains = [
  {
    name: "Board & Governance",
    description: "Board roles, meeting structure, succession planning, conflict policies"
  },
  {
    name: "Money/Books & Compliance",
    description: "Budgeting, reconciliation, spending controls, audit readiness"
  },
  {
    name: "People & HR",
    description: "Job descriptions, hiring processes, HR policies, performance management"
  },
  {
    name: "Fundraising & Donor Standards",
    description: "Gift acceptance, receipting, donor data, stewardship practices"
  },
  {
    name: "Volunteers",
    description: "Recruitment, agreements, training, safety, recognition"
  },
  {
    name: "Systems/Data & Records",
    description: "File storage, CRM setup, data protection, dashboards, record retention"
  }
];

const questions = [
  {
    domain: "Board & Governance",
    question: "How would you rate your board's effectiveness?",
    options: [
      { value: "1", label: "No formal board structure or inactive", tier: 1 },
      { value: "2", label: "Board exists but lacks clear roles or regular meetings", tier: 2 },
      { value: "3", label: "Board meets regularly with defined roles, needs refinement", tier: 3 },
      { value: "4", label: "Strong board with clear governance, documented policies", tier: 4 },
      { value: "5", label: "Strategic, data-driven board with succession planning", tier: 5 }
    ]
  },
  {
    domain: "Money/Books & Compliance",
    question: "How well are your finances and compliance managed?",
    options: [
      { value: "1", label: "No tracking system, behind on compliance", tier: 1 },
      { value: "2", label: "Basic tracking, inconsistent reconciliation", tier: 2 },
      { value: "3", label: "Regular reconciliation, some compliance gaps", tier: 3 },
      { value: "4", label: "Audit-ready books, full compliance tracking", tier: 4 },
      { value: "5", label: "Automated controls, proactive compliance, forecasting", tier: 5 }
    ]
  },
  {
    domain: "People & HR",
    question: "How structured are your HR and people management practices?",
    options: [
      { value: "1", label: "No job descriptions or HR policies", tier: 1 },
      { value: "2", label: "Basic job descriptions, ad-hoc hiring", tier: 2 },
      { value: "3", label: "Standard HR policies, documented processes", tier: 3 },
      { value: "4", label: "Performance management, professional development", tier: 4 },
      { value: "5", label: "Strategic workforce planning, engagement metrics", tier: 5 }
    ]
  },
  {
    domain: "Fundraising & Donor Standards",
    question: "How organized is your fundraising and donor management?",
    options: [
      { value: "1", label: "No donor tracking or receipting system", tier: 1 },
      { value: "2", label: "Manual tracking, inconsistent receipting", tier: 2 },
      { value: "3", label: "CRM in use, standard stewardship practices", tier: 3 },
      { value: "4", label: "Segmented communications, gift acceptance policy", tier: 4 },
      { value: "5", label: "Data-driven strategies, donor journey mapping", tier: 5 }
    ]
  },
  {
    domain: "Volunteers",
    question: "How well do you manage and support volunteers?",
    options: [
      { value: "1", label: "No volunteer structure or tracking", tier: 1 },
      { value: "2", label: "Informal coordination, basic safety measures", tier: 2 },
      { value: "3", label: "Volunteer agreements, orientation, tracking system", tier: 3 },
      { value: "4", label: "Training programs, recognition events, retention focus", tier: 4 },
      { value: "5", label: "Strategic volunteer engagement, impact measurement", tier: 5 }
    ]
  },
  {
    domain: "Systems/Data & Records",
    question: "How organized are your data and record management systems?",
    options: [
      { value: "1", label: "No organized file storage or data protection", tier: 1 },
      { value: "2", label: "Basic cloud storage, minimal organization", tier: 2 },
      { value: "3", label: "Organized files, backup system, retention schedule", tier: 3 },
      { value: "4", label: "Integrated systems, privacy compliance, dashboards", tier: 4 },
      { value: "5", label: "Automated reporting, data strategy, predictive analytics", tier: 5 }
    ]
  }
];

const tierDescriptions = [
  {
    tier: 1,
    name: "Emergent",
    color: "#EF4444",
    description: "Organization is in start-up mode or crisis. Basic structures are missing or non-functional.",
    recommendation: "Path A (Fast Help) recommended for immediate stabilization"
  },
  {
    tier: 2,
    name: "Reactive",
    color: "#F59E0B",
    description: "Organization is operational but responds to issues as they arise. Inconsistent processes.",
    recommendation: "Path A (Fast Help) for urgent fixes, or Path B (System Build) for comprehensive improvement"
  },
  {
    tier: 3,
    name: "Stable",
    color: "#10B981",
    description: "Organization has working systems but they need refinement and documentation.",
    recommendation: "Path B (System Build) recommended for systematic improvement"
  },
  {
    tier: 4,
    name: "Strategic",
    color: "#6945D8",
    description: "Organization has documented systems and uses data to inform decisions.",
    recommendation: "Path B (System Build) for optimization and scaling support"
  },
  {
    tier: 5,
    name: "Optimized",
    color: "#8B5CF6",
    description: "Organization operates with mature, integrated systems and continuous improvement practices.",
    recommendation: "Occasional strategic support or mentor partnership may be appropriate"
  }
];

const OrganizationalHealthCheck = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (questionIndex: number, tier: number) => {
    setAnswers({ ...answers, [questionIndex]: tier });
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const calculateResults = () => {
    const tiers = Object.values(answers);
    const avgTier = Math.round(tiers.reduce((a, b) => a + b, 0) / tiers.length);
    return avgTier;
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const isAnswered = answers[currentQuestion] !== undefined;

  if (showResults) {
    const avgTier = calculateResults();
    const tierInfo = tierDescriptions[avgTier - 1];

    return (
      <div className="min-h-screen bg-background">
        <Helmet>
          <title>Your Results | Organizational Health Check | Nimara</title>
          <meta name="description" content="View your organizational health assessment results and recommended next steps with Nimara." />
        </Helmet>
        
        <Header />
        
        <main id="main" className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-6" style={{ backgroundColor: `${tierInfo.color}20` }}>
                  <TrendingUp className="w-10 h-10" style={{ color: tierInfo.color }} />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                  Your Organization is at Tier {avgTier}
                </h1>
                <p className="text-2xl font-semibold mb-2" style={{ color: tierInfo.color }}>
                  {tierInfo.name}
                </p>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  {tierInfo.description}
                </p>
              </div>

              <div className="bg-card border border-border rounded-2xl p-8 mb-8">
                <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-6 h-6 text-primary" />
                  Your Domain Scores
                </h2>
                <div className="space-y-4">
                  {questions.map((q, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-foreground">{q.domain}</span>
                        <span className="text-sm font-semibold" style={{ color: tierDescriptions[answers[idx] - 1].color }}>
                          Tier {answers[idx]}
                        </span>
                      </div>
                      <Progress value={(answers[idx] / 5) * 100} className="h-2" />
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 mb-8">
                <h2 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <AlertCircle className="w-6 h-6 text-primary" />
                  Recommended Next Step
                </h2>
                <p className="text-foreground/90 mb-6">
                  {tierInfo.recommendation}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/how-nimara-works" className="flex-1">
                    <Button variant="secondary" className="w-full">
                      Learn About Our Paths
                    </Button>
                  </Link>
                  <a 
                    href="https://calendly.com/hello-nimara/30min" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button className="w-full">
                      Schedule A Call
                      <ChevronRight className="w-4 h-4 ml-2" />
                    </Button>
                  </a>
                </div>
              </div>

              <div className="text-center">
                <button
                  onClick={() => {
                    setShowResults(false);
                    setCurrentQuestion(0);
                    setAnswers({});
                  }}
                  className="text-sm text-muted-foreground hover:text-foreground underline underline-offset-2 transition-colors"
                >
                  Retake the assessment
                </button>
              </div>
            </motion.div>
          </div>
        </main>
        
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Organizational Health Check | Nimara — Systems for small nonprofits</title>
        <meta name="description" content="Take our free organizational health assessment to understand your nonprofit's current systems maturity and get personalized recommendations." />
        <meta name="keywords" content="nonprofit assessment, organizational health check, nonprofit systems evaluation, capacity assessment, nonprofit maturity model" />
        
        <link rel="canonical" href="https://nimara.ca/organizational-health-check" />
        
        <meta property="og:site_name" content="Nimara" />
        <meta property="og:title" content="Organizational Health Check | Nimara" />
        <meta property="og:description" content="Take our free organizational health assessment to understand your nonprofit's current systems maturity and get personalized recommendations." />
        <meta property="og:url" content="https://nimara.ca/organizational-health-check" />
        <meta property="og:image" content="https://nimara.ca/og-image.svg" />
        <meta property="og:type" content="website" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Organizational Health Check | Nimara" />
        <meta name="twitter:description" content="Take our free organizational health assessment to understand your nonprofit's current systems maturity and get personalized recommendations." />
        <meta name="twitter:image" content="https://nimara.ca/og-image.svg" />
      </Helmet>
      
      <Header />
      
      <main id="main" className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Organizational Health Check
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A quick 6-question assessment to understand where your organization stands and what support might help.
            </p>
          </div>

          {/* Progress */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-muted-foreground">
                Question {currentQuestion + 1} of {questions.length}
              </span>
              <span className="text-sm font-medium text-primary">
                {Math.round(progress)}% Complete
              </span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          {/* Question Card */}
          <motion.div
            key={currentQuestion}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-card border border-border rounded-2xl p-8 mb-8"
          >
            <div className="mb-6">
              <div className="text-sm font-medium text-primary mb-2">
                {questions[currentQuestion].domain}
              </div>
              <h2 className="text-2xl font-semibold text-foreground">
                {questions[currentQuestion].question}
              </h2>
            </div>

            <RadioGroup
              value={answers[currentQuestion]?.toString()}
              onValueChange={(value) => handleAnswer(currentQuestion, parseInt(questions[currentQuestion].options.find(o => o.value === value)?.tier.toString() || "1"))}
              className="space-y-3"
            >
              {questions[currentQuestion].options.map((option) => (
                <div
                  key={option.value}
                  className={`flex items-start space-x-3 p-4 rounded-lg border-2 transition-all cursor-pointer hover:border-primary/50 ${
                    answers[currentQuestion] === option.tier
                      ? "border-primary bg-primary/5"
                      : "border-border bg-background"
                  }`}
                  onClick={() => handleAnswer(currentQuestion, option.tier)}
                >
                  <RadioGroupItem value={option.value} id={option.value} className="mt-0.5" />
                  <Label
                    htmlFor={option.value}
                    className="flex-1 cursor-pointer text-foreground leading-relaxed"
                  >
                    {option.label}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </motion.div>

          {/* Navigation */}
          <div className="flex justify-between items-center">
            <Button
              variant="outline"
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
            >
              Previous
            </Button>
            <Button
              onClick={handleNext}
              disabled={!isAnswered}
            >
              {currentQuestion === questions.length - 1 ? "See Results" : "Next"}
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          </div>

          {/* Domain Legend */}
          <div className="mt-16 pt-16 border-t border-border">
            <h3 className="text-lg font-semibold text-foreground mb-6 text-center">
              What we assess across all domains
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {domains.map((domain, idx) => (
                <div key={idx} className="bg-muted/30 rounded-lg p-4">
                  <h4 className="font-semibold text-foreground mb-1">{domain.name}</h4>
                  <p className="text-sm text-muted-foreground">{domain.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default OrganizationalHealthCheck;