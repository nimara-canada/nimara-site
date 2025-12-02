import React, { useState } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import {
  ArrowLeft,
  CheckCircle2,
  Zap,
  Users,
  Link2,
  ArrowRight,
  RefreshCw,
  HelpCircle,
  Info,
  ChevronRight,
  Database,
  Activity,
  Wrench,
  Clock,
  Shield,
} from "lucide-react";
import { Link } from "react-router-dom";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

// --- Type Definitions ---
interface QuizOption {
  text: string;
  value: number;
  description: string;
}

interface QuizQuestion {
  id: string;
  question: string;
  options: QuizOption[];
}

interface Recommendation {
  level: number;
  title: string;
  badge: string;
  color: string;
  bgColor: string;
  icon: React.ElementType;
  description: string;
  reasoning: string[];
  features: string[];
}

// --- Mock Data & Constants ---

const quizQuestions: QuizQuestion[] = [
  {
    id: "criticality",
    question: "How critical is this tool to your daily operations?",
    options: [
      { text: "Mission-critical", value: 3, description: "We can't operate without it" },
      { text: "Important", value: 2, description: "We use it regularly but have workarounds" },
      { text: "Nice to have", value: 1, description: "We use it occasionally" },
    ],
  },
  {
    id: "sync-frequency",
    question: "How often do you need data synced?",
    options: [
      { text: "Real-time or hourly", value: 3, description: "We need instant updates" },
      { text: "Daily or weekly", value: 2, description: "Regular updates are fine" },
      { text: "Monthly or as needed", value: 1, description: "Periodic updates work for us" },
    ],
  },
  {
    id: "data-volume",
    question: "How much data flows through this tool?",
    options: [
      { text: "High volume", value: 3, description: "Hundreds of transactions daily" },
      { text: "Moderate volume", value: 2, description: "Dozens of transactions weekly" },
      { text: "Low volume", value: 1, description: "Occasional transactions" },
    ],
  },
  {
    id: "technical-capacity",
    question: "What's your team's technical capacity?",
    options: [
      { text: "Limited", value: 3, description: "We need it to just work automatically" },
      { text: "Moderate", value: 2, description: "We can handle some setup and maintenance" },
      { text: "Strong", value: 1, description: "We're comfortable with DIY solutions" },
    ],
  },
  {
    id: "setup-time",
    question: "How much time can you invest in initial setup?",
    options: [
      { text: "Minimal", value: 3, description: "We need quick implementation" },
      { text: "Moderate", value: 2, description: "We can dedicate a few hours" },
      { text: "Flexible", value: 1, description: "We can take time to set it up right" },
    ],
  },
];

// --- Sub-components ---

const LevelCard: React.FC<{
  level: number;
  title: string;
  desc: string;
  icon: React.ElementType;
  activeColor: string;
  badge: string;
}> = ({ level, title, desc, icon: Icon, activeColor, badge }) => (
  <div className="group relative bg-white rounded-2xl p-6 shadow-sm border border-slate-200 hover:shadow-md hover:border-indigo-200 transition-all duration-300">
    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${activeColor}`}>
      <Icon className="w-6 h-6" />
    </div>
    <div className="flex items-center justify-between mb-2">
      <h3 className="text-lg font-bold text-slate-900">Level {level}</h3>
      <span className="px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 text-xs font-semibold uppercase tracking-wide">
        {badge}
      </span>
    </div>
    <p className="text-sm text-slate-500 leading-relaxed">{desc}</p>
  </div>
);

const ToolRow: React.FC<{ name: string; category: string; icon?: string }> = ({ name, category, icon }) => (
  <div className="flex items-center gap-4 p-4 rounded-xl border border-slate-100 bg-white hover:border-indigo-100 hover:shadow-sm transition-all group">
    <div className="w-10 h-10 rounded-lg bg-slate-50 flex items-center justify-center text-slate-400 group-hover:text-indigo-600 transition-colors">
      {/* Use a generic icon if no specific image is available */}
      {icon ? (
        <img
          src={icon}
          alt={name}
          className="w-6 h-6 object-contain"
          onError={(e) => (e.currentTarget.style.display = "none")}
        />
      ) : (
        <Zap className="w-5 h-5" />
      )}
    </div>
    <div>
      <div className="font-medium text-slate-900">{name}</div>
      <div className="text-xs text-slate-500">{category}</div>
    </div>
  </div>
);

const ComparisonRow: React.FC<{ label: string; l1: string; l2: string; l3: string }> = ({ label, l1, l2, l3 }) => (
  <div className="grid grid-cols-4 gap-4 py-4 border-b border-slate-100 last:border-0 items-center">
    <div className="font-medium text-slate-700 text-sm">{label}</div>
    <div className="text-sm text-indigo-700 font-medium bg-indigo-50/50 p-2 rounded-lg">{l1}</div>
    <div className="text-sm text-teal-700 font-medium bg-teal-50/50 p-2 rounded-lg">{l2}</div>
    <div className="text-sm text-slate-600 bg-slate-50 p-2 rounded-lg">{l3}</div>
  </div>
);

// --- Main Page Component ---

export default function Integrations() {
  const [quizStep, setQuizStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (questionId: string, value: number) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
    if (quizStep < quizQuestions.length - 1) {
      setTimeout(() => setQuizStep((prev) => prev + 1), 250);
    } else {
      setTimeout(() => setShowResult(true), 250);
    }
  };

  const resetQuiz = () => {
    setQuizStep(0);
    setAnswers({});
    setShowResult(false);
  };

  const calculateRecommendation = (): Recommendation | null => {
    if (!showResult) return null;

    // Calculate total and average
    const total = Object.values(answers).reduce((sum, val) => sum + val, 0);
    const average = total / Object.keys(answers).length;
    
    // Generate personalized reasoning based on actual answers
    const generateReasoningPoints = (): string[] => {
      const points: string[] = [];
      
      if (answers['criticality'] === 3) {
        points.push("This tool is mission-critical to your operations, requiring robust, automated integration.");
      } else if (answers['criticality'] === 2) {
        points.push("This tool plays an important role in your workflow, warranting reliable connectivity.");
      }
      
      if (answers['sync-frequency'] === 3) {
        points.push("Real-time or hourly sync needs demand deep API integration for continuous data flow.");
      } else if (answers['sync-frequency'] === 2) {
        points.push("Daily or weekly sync requirements can be met with scheduled, template-based connections.");
      } else if (answers['sync-frequency'] === 1) {
        points.push("Monthly or as-needed sync works well with simple manual data bridges.");
      }
      
      if (answers['data-volume'] === 3) {
        points.push("High transaction volume requires automated processes to avoid manual bottlenecks.");
      } else if (answers['data-volume'] === 1) {
        points.push("Low data volume makes lightweight, flexible solutions cost-effective.");
      }
      
      if (answers['technical-capacity'] === 3) {
        points.push("Limited technical capacity means a fully managed solution will save significant time and stress.");
      } else if (answers['technical-capacity'] === 1) {
        points.push("Your strong technical capacity allows you to leverage DIY solutions effectively.");
      }
      
      if (answers['setup-time'] === 3) {
        points.push("Quick implementation needs justify investing in pre-built, turnkey integrations.");
      } else if (answers['setup-time'] === 1) {
        points.push("Time flexibility allows for customized setup that exactly fits your needs.");
      }
      
      // Ensure we have at least 3 points
      if (points.length < 3) {
        points.push("Your overall needs profile aligns well with this integration level.");
      }
      
      return points;
    };
    
    const reasoning = generateReasoningPoints();

    if (average >= 2.5) {
      return {
        level: 1,
        title: "Core Integration",
        badge: "Level 1",
        color: "text-indigo-600",
        bgColor: "bg-indigo-50",
        icon: Zap,
        description:
          "We recommend our core integration level with deep API connections, real-time sync, and managed maintenance.",
        reasoning,
        features: ["Real-time sync", "Priority support", "Managed by Nimara", "Deep API access"],
      };
    } else if (average >= 1.8) {
      return {
        level: 2,
        title: "Common Tool Support",
        badge: "Level 2",
        color: "text-teal-600",
        bgColor: "bg-teal-50",
        icon: Users,
        description:
          "Your needs align with our standard support, offering template-based connections with regular sync.",
        reasoning,
        features: ["Daily/Weekly sync", "Standard support", "Shared maintenance", "Template based"],
      };
    } else {
      return {
        level: 3,
        title: "Flexible Connection",
        badge: "Level 3",
        color: "text-slate-600",
        bgColor: "bg-slate-100",
        icon: Link2,
        description: "Your workflow is suited for our flexible data bridge approach using simple imports and exports.",
        reasoning,
        features: ["Monthly updates", "Self-service docs", "Team managed", "Simple imports"],
      };
    }
  };

  const recommendation = calculateRecommendation();

  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-indigo-100 selection:text-indigo-900">
      <Header />

      <main className="pt-28 pb-20">
        {/* --- Hero Section --- */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl text-center mb-24">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight mb-6">
            Tools that work with <span className="text-indigo-600">Nimara</span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto mb-12">
            Nimara fits around the tools you already use. We don't replace your tech stack—we connect to what you have
            to make it work better.
          </p>

          <div className="grid md:grid-cols-3 gap-6 text-left">
            <LevelCard
              level={1}
              badge="Core"
              title="Core Connections"
              desc="Deep API integrations for mission-critical tools requiring real-time data."
              icon={Zap}
              activeColor="bg-indigo-100 text-indigo-600"
            />
            <LevelCard
              level={2}
              badge="Common"
              title="Common Tools"
              desc="Template-based connections for important but less critical regular workflows."
              icon={Users}
              activeColor="bg-teal-100 text-teal-600"
            />
            <LevelCard
              level={3}
              badge="Flexible"
              title="Flexible Links"
              desc="Simple data bridges via exports and forms for occasional needs."
              icon={Link2}
              activeColor="bg-slate-100 text-slate-600"
            />
          </div>
        </div>

        {/* --- Quiz Section (Redesigned) --- */}
        <section className="bg-white border-y border-slate-200 py-20 mb-20 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-20"></div>

          <div className="container mx-auto px-4 sm:px-6 max-w-3xl relative z-10">
            <div className="text-center mb-10">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-4">
                Recommendation Engine
              </span>
              <h2 className="text-3xl font-bold text-slate-900">Find your perfect integration fit</h2>
            </div>

            <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden min-h-[500px] flex flex-col">
              {!showResult ? (
                <div className="p-8 md:p-12 flex flex-col h-full animate-in">
                  {/* Progress */}
                  <div className="w-full bg-slate-100 h-1.5 rounded-full mb-8 overflow-hidden">
                    <div
                      className="bg-indigo-600 h-full transition-all duration-500 ease-out"
                      style={{ width: `${((quizStep + 1) / quizQuestions.length) * 100}%` }}
                    />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-slate-900 mb-8 leading-tight">
                      {quizQuestions[quizStep].question}
                    </h3>

                    <div className="space-y-3">
                      {quizQuestions[quizStep].options.map((option, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleAnswer(quizQuestions[quizStep].id, option.value)}
                          className="w-full text-left p-5 rounded-xl border border-slate-200 hover:border-indigo-600 hover:bg-indigo-50/30 transition-all duration-200 flex items-start gap-4 group"
                        >
                          <div className="w-6 h-6 rounded-full border border-slate-300 group-hover:border-indigo-600 flex items-center justify-center shrink-0 mt-0.5">
                            <div className="w-2.5 h-2.5 rounded-full bg-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </div>
                          <div>
                            <div className="font-semibold text-slate-900 group-hover:text-indigo-700 transition-colors">
                              {option.text}
                            </div>
                            <div className="text-sm text-slate-500 mt-1">{option.description}</div>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 flex justify-between items-center text-sm text-slate-400">
                    <span>
                      Question {quizStep + 1} of {quizQuestions.length}
                    </span>
                    {quizStep > 0 && (
                      <button
                        onClick={resetQuiz}
                        className="flex items-center gap-1 hover:text-slate-600 transition-colors"
                      >
                        <RefreshCw className="w-3 h-3" /> Reset
                      </button>
                    )}
                  </div>
                </div>
              ) : (
                recommendation && (
                  <div className="p-8 md:p-12 h-full flex flex-col items-center justify-center text-center animate-in">
                    <div
                      className={`w-20 h-20 rounded-3xl ${recommendation.bgColor} ${recommendation.color} flex items-center justify-center mb-6`}
                    >
                      <recommendation.icon className="w-10 h-10" />
                    </div>

                    <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-2">We Recommend</h3>
                    <h2 className={`text-4xl font-bold ${recommendation.color} mb-6`}>{recommendation.title}</h2>
                    <p className="text-lg text-slate-600 max-w-lg mb-8">{recommendation.description}</p>

                    <div className="bg-slate-50 rounded-2xl p-6 text-left w-full mb-8 border border-slate-100">
                      <h4 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
                        <CheckCircle2 className={`w-5 h-5 ${recommendation.color}`} />
                        Why this fits you
                      </h4>
                      <ul className="space-y-3">
                        {recommendation.reasoning.map((r, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm text-slate-600">
                            <span
                              className={`mt-1.5 w-1.5 h-1.5 rounded-full ${recommendation.color.replace("text", "bg")}`}
                            />
                            {r}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Score Breakdown - Expandable with animations */}
                    <details className="w-full mb-8 group">
                      <summary className="flex items-center justify-between cursor-pointer list-none p-4 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 transition-all duration-200">
                        <div className="flex items-center gap-3">
                          <div className={`w-10 h-10 rounded-lg ${recommendation.bgColor} ${recommendation.color} flex items-center justify-center`}>
                            <Activity className="w-5 h-5" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-slate-900">Score Breakdown</h4>
                            <p className="text-xs text-slate-500">See how your answers contributed</p>
                          </div>
                        </div>
                        <ChevronRight className="w-5 h-5 text-slate-400 transition-transform duration-300 group-open:rotate-90" />
                      </summary>

                      <div className="overflow-hidden">
                        <div className="pt-6 pb-2 animate-in fade-in slide-in-from-top-2 duration-300">
                          <TooltipProvider>
                            {/* Overall Score Summary */}
                            <div className="mb-6 p-4 rounded-xl bg-gradient-to-br from-slate-50 to-slate-100/50 border border-slate-200">
                              <div className="flex items-start justify-between mb-3">
                                <div>
                                  <h5 className="font-bold text-slate-900 mb-1">Overall Score</h5>
                                  <p className="text-sm text-slate-600">
                                    {Object.values(answers).reduce((sum, val) => sum + val, 0)} out of{" "}
                                    {Object.keys(answers).length * 3} points
                                  </p>
                                </div>
                                <Tooltip>
                                  <TooltipTrigger asChild>
                                    <button className="text-slate-400 hover:text-slate-600 transition-colors">
                                      <HelpCircle className="w-4 h-4" />
                                    </button>
                                  </TooltipTrigger>
                                  <TooltipContent className="max-w-xs">
                                    <p className="text-sm">
                                      Your answers are scored 1-3 per question. Higher scores indicate stronger need for
                                      automated, managed integrations.
                                    </p>
                                  </TooltipContent>
                                </Tooltip>
                              </div>

                              {/* Overall progress bar with gradient and level markers */}
                              <div className="relative">
                                <div className="h-3 bg-slate-200 rounded-full overflow-hidden">
                                  <div
                                    className={`h-full bg-gradient-to-r ${
                                      recommendation.level === 1
                                        ? "from-indigo-500 to-indigo-600"
                                        : recommendation.level === 2
                                        ? "from-teal-500 to-teal-600"
                                        : "from-slate-400 to-slate-500"
                                    } transition-all duration-700 ease-out`}
                                    style={{
                                      width: `${
                                        (Object.values(answers).reduce((sum, val) => sum + val, 0) /
                                          (Object.keys(answers).length * 3)) *
                                        100
                                      }%`,
                                    }}
                                  />
                                </div>
                                {/* Level territory markers */}
                                <div className="flex justify-between mt-2 text-xs">
                                  <Tooltip>
                                    <TooltipTrigger asChild>
                                      <span className="text-slate-500 cursor-help flex items-center gap-1">
                                        <span className="w-2 h-2 rounded-full bg-slate-400" />
                                        Level 3
                                      </span>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                      <p className="text-sm">Average score below 1.8</p>
                                    </TooltipContent>
                                  </Tooltip>
                                  <Tooltip>
                                    <TooltipTrigger asChild>
                                      <span className="text-teal-600 cursor-help flex items-center gap-1">
                                        <span className="w-2 h-2 rounded-full bg-teal-500" />
                                        Level 2
                                      </span>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                      <p className="text-sm">Average score 1.8 - 2.49</p>
                                    </TooltipContent>
                                  </Tooltip>
                                  <Tooltip>
                                    <TooltipTrigger asChild>
                                      <span className="text-indigo-600 cursor-help flex items-center gap-1">
                                        <span className="w-2 h-2 rounded-full bg-indigo-500" />
                                        Level 1
                                      </span>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                      <p className="text-sm">Average score 2.5 or higher</p>
                                    </TooltipContent>
                                  </Tooltip>
                                </div>
                                <div className="mt-2 text-center">
                                  <Tooltip>
                                    <TooltipTrigger asChild>
                                      <span className="text-xs text-slate-500 cursor-help inline-flex items-center gap-1">
                                        Your average: {(Object.values(answers).reduce((sum, val) => sum + val, 0) / Object.keys(answers).length).toFixed(2)}
                                        <Info className="w-3 h-3" />
                                      </span>
                                    </TooltipTrigger>
                                    <TooltipContent className="max-w-xs">
                                      <p className="text-sm font-semibold mb-1">Score thresholds:</p>
                                      <ul className="text-xs space-y-1">
                                        <li>• ≥2.5: Level 1 (Deep automation needed)</li>
                                        <li>• 1.8-2.49: Level 2 (Balanced approach)</li>
                                        <li>• &lt;1.8: Level 3 (Flexible, lightweight)</li>
                                      </ul>
                                    </TooltipContent>
                                  </Tooltip>
                                </div>
                              </div>
                            </div>

                            {/* Individual Question Scores */}
                            <div className="space-y-4">
                              <h5 className="font-semibold text-slate-900 text-sm">Question-by-Question</h5>
                              {quizQuestions.map((q, idx) => {
                                const userAnswer = answers[q.id];
                                const selectedOption = q.options.find((opt) => opt.value === userAnswer);
                                if (!userAnswer || !selectedOption) return null;

                                return (
                                  <div
                                    key={q.id}
                                    className="p-4 rounded-lg border border-slate-100 bg-white hover:border-slate-200 transition-all duration-200 animate-in fade-in slide-in-from-left-4"
                                    style={{ animationDelay: `${idx * 50}ms` }}
                                  >
                                    <div className="flex items-start justify-between mb-3">
                                      <div className="flex-1">
                                        <p className="text-sm font-medium text-slate-700 mb-1">{q.question}</p>
                                        <p className="text-xs text-slate-500">Your answer: {selectedOption.text}</p>
                                      </div>
                                      <Tooltip>
                                        <TooltipTrigger asChild>
                                          <div className="flex items-center gap-2 ml-3">
                                            <span className="text-sm font-bold text-slate-900">{userAnswer}/3</span>
                                            <Info className="w-3.5 h-3.5 text-slate-400 cursor-help" />
                                          </div>
                                        </TooltipTrigger>
                                        <TooltipContent className="max-w-xs">
                                          <p className="text-xs">
                                            {userAnswer === 3 && "High score: Indicates strong need for automation"}
                                            {userAnswer === 2 && "Medium score: Balanced need for support"}
                                            {userAnswer === 1 && "Low score: Can manage with lighter solutions"}
                                          </p>
                                        </TooltipContent>
                                      </Tooltip>
                                    </div>

                                    {/* Progress bar for individual question */}
                                    <div className="relative">
                                      <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                                        <div
                                          className={`h-full transition-all duration-500 ease-out ${
                                            userAnswer === 3
                                              ? "bg-indigo-500"
                                              : userAnswer === 2
                                              ? "bg-teal-500"
                                              : "bg-slate-400"
                                          }`}
                                          style={{
                                            width: `${(userAnswer / 3) * 100}%`,
                                            transitionDelay: `${idx * 50 + 150}ms`,
                                          }}
                                        />
                                      </div>
                                      <div className="flex justify-between mt-1.5 text-xs text-slate-400">
                                        <span>Level 3</span>
                                        <span>Level 2</span>
                                        <span>Level 1</span>
                                      </div>
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                          </TooltipProvider>
                        </div>
                      </div>
                    </details>

                    <div className="flex gap-4 w-full sm:w-auto">
                      <a
                        href="https://calendly.com"
                        target="_blank"
                        rel="noreferrer"
                        className={`flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold text-white transition-transform hover:scale-105 ${recommendation.color.replace("text-", "bg-").replace("600", "600")} hover:${recommendation.color.replace("text-", "bg-").replace("600", "700")}`}
                      >
                        Schedule Consultation
                      </a>
                      <button
                        onClick={resetQuiz}
                        className="px-6 py-3 rounded-lg font-medium text-slate-600 hover:bg-slate-100 transition-colors border border-slate-200"
                      >
                        Retake
                      </button>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </section>

        {/* --- Comparison Table --- */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl mb-24">
          <div className="mb-10 flex items-end justify-between">
            <h2 className="text-2xl font-bold text-slate-900">Feature Comparison</h2>
            <span className="text-sm text-slate-500">At a glance</span>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="grid grid-cols-4 gap-4 p-6 bg-slate-50 border-b border-slate-200">
              <div className="font-semibold text-slate-900">Features</div>
              <div className="font-bold text-indigo-600 flex items-center gap-2">
                <Zap className="w-4 h-4" /> Level 1
              </div>
              <div className="font-bold text-teal-600 flex items-center gap-2">
                <Users className="w-4 h-4" /> Level 2
              </div>
              <div className="font-bold text-slate-600 flex items-center gap-2">
                <Link2 className="w-4 h-4" /> Level 3
              </div>
            </div>
            <div className="p-6">
              <ComparisonRow label="Integration Depth" l1="Deep API" l2="Light API" l3="Manual Bridge" />
              <ComparisonRow label="Setup Time" l1="1-2 Hours" l2="2-4 Hours" l3="30 Mins" />
              <ComparisonRow label="Data Frequency" l1="Real-time" l2="Daily/Weekly" l3="Monthly" />
              <ComparisonRow label="Support" l1="Priority" l2="Standard" l3="Self-service" />
              <ComparisonRow label="Maintenance" l1="Managed" l2="Shared" l3="Your Team" />
            </div>
          </div>
        </section>

        {/* --- Detailed Levels --- */}
        <div className="space-y-24 container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          {/* Level 1 */}
          <section>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center text-white">
                <Zap className="w-5 h-5" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Level 1: Core Connections</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="font-semibold text-slate-900 border-b border-slate-100 pb-2">Finance & Accounting</h3>
                <ToolRow name="QuickBooks Online" category="Accounting" />
                <ToolRow name="Xero" category="Accounting" />
              </div>
              <div className="space-y-4">
                <h3 className="font-semibold text-slate-900 border-b border-slate-100 pb-2">Donor Management</h3>
                <ToolRow name="Salesforce NPSP" category="CRM" />
                <ToolRow name="Keela" category="CRM" />
                <ToolRow name="CanadaHelps" category="Donations" />
              </div>
              <div className="space-y-4">
                <h3 className="font-semibold text-slate-900 border-b border-slate-100 pb-2">Payments</h3>
                <ToolRow name="Stripe" category="Payment Processor" />
                <ToolRow name="PayPal" category="Payment Processor" />
              </div>
              <div className="space-y-4">
                <h3 className="font-semibold text-slate-900 border-b border-slate-100 pb-2">Workspace</h3>
                <ToolRow name="Google Workspace" category="Productivity" />
                <ToolRow name="Microsoft 365" category="Productivity" />
              </div>
            </div>
          </section>

          {/* Level 2 */}
          <section>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-10 bg-teal-500 rounded-lg flex items-center justify-center text-white">
                <Users className="w-5 h-5" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Level 2: Common Tools</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="space-y-4">
                <h3 className="font-semibold text-slate-900 border-b border-slate-100 pb-2">CRM Variants</h3>
                <ToolRow name="Raiser's Edge NXT" category="CRM" />
                <ToolRow name="Bloomerang" category="CRM" />
                <ToolRow name="Neon CRM" category="CRM" />
              </div>
              <div className="space-y-4">
                <h3 className="font-semibold text-slate-900 border-b border-slate-100 pb-2">Communication</h3>
                <ToolRow name="Slack" category="Messaging" />
                <ToolRow name="Zoom" category="Video" />
                <ToolRow name="Mailchimp" category="Marketing" />
              </div>
              <div className="space-y-4">
                <h3 className="font-semibold text-slate-900 border-b border-slate-100 pb-2">Project Mgmt</h3>
                <ToolRow name="Asana" category="Tasks" />
                <ToolRow name="Trello" category="Tasks" />
                <ToolRow name="Monday.com" category="Tasks" />
              </div>
            </div>
          </section>

          {/* Level 3 */}
          <section>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-10 bg-slate-500 rounded-lg flex items-center justify-center text-white">
                <Link2 className="w-5 h-5" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Level 3: Flexible Connections</h2>
            </div>

            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
              <div className="grid sm:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <Database className="w-5 h-5 text-slate-400" />
                    CSV Imports
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    For legacy systems or custom databases, we establish robust CSV import protocols. We clean the data
                    in intermediate sheets before syncing to your main dashboard.
                  </p>
                  <ul className="text-sm text-slate-500 list-disc ml-4 space-y-1">
                    <li>Clean data in Sheets/Excel</li>
                    <li>Standardized mapping templates</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <Activity className="w-5 h-5 text-slate-400" />
                    Email Parsing & Forms
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    We can turn structured emails (receipts, notifications) into data points, or use standardized web
                    forms to capture data cleanly from the start.
                  </p>
                  <ul className="text-sm text-slate-500 list-disc ml-4 space-y-1">
                    <li>Google Forms / Typeform</li>
                    <li>Auto-forwarding rules</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* --- Philosophy Section --- */}
        <section className="bg-white border-t border-slate-200 py-24 mt-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-12">Our Philosophy</h2>
            <div className="grid sm:grid-cols-4 gap-8">
              {[
                { icon: Wrench, title: "Tool Neutral", desc: "We work with what you have. We don't sell software." },
                { icon: Clock, title: "Lightweight", desc: "Simple connections over complex custom builds." },
                { icon: Database, title: "Data First", desc: "Clean, reliable data for decisions and audits." },
                { icon: Shield, title: "Evidence Based", desc: "We prioritize based on your actual usage." },
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-indigo-600 mb-4">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- Call to Action --- */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl mt-24">
          <div className="bg-indigo-900 rounded-3xl p-12 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500 rounded-full blur-3xl opacity-20 -mr-20 -mt-20"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-500 rounded-full blur-3xl opacity-20 -ml-20 -mb-20"></div>

            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-6">Ready to connect your tools?</h2>
              <p className="text-indigo-200 text-lg mb-8 max-w-2xl mx-auto">
                Whether you have a messy stack of legacy tools or a modern setup that just needs tuning, we can help.
              </p>
              <a
                href="https://calendly.com/hello-nimara/30min"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-white text-indigo-900 px-8 py-4 rounded-xl font-bold hover:bg-indigo-50 transition-colors"
              >
                Book a Free Discovery Call <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
