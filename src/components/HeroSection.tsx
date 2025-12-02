import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Shield, TrendingUp, Clock, Award, ChevronDown, PlayCircle } from "lucide-react";

const NimaraHero = () => {
  const [selectedSystem, setSelectedSystem] = useState<string | null>(null);
  const [assessmentStarted, setAssessmentStarted] = useState(false);
  const [assessmentAnswers, setAssessmentAnswers] = useState({
    audit: false,
    reporting: false,
    scaling: false,
  });

  // Calculate readiness score
  const readinessScore = Object.values(assessmentAnswers).filter(Boolean).length;
  const readinessLevel = readinessScore === 3 ? "Ready" : readinessScore >= 1 ? "At Risk" : "Critical";

  const systemStatus = {
    board: { label: "Board & Governance", status: "operational", description: "Meeting compliance, clear roles" },
    finance: { label: "Financial Systems", status: "needs-work", description: "Basic tracking, needs automation" },
    fundraising: { label: "Fundraising Data", status: "critical", description: "Scattered data, no CRM" },
    hr: { label: "People & HR", status: "operational", description: "Policies in place, documented" },
    programs: { label: "Program Delivery", status: "needs-work", description: "Informal tracking, no outcomes" },
  };

  const scrollToHealthCheck = () => {
    const element = document.getElementById("health-check");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative bg-[#202654] overflow-hidden">
      {/* Subtle background gradient - just one */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#202654] via-[#202654] to-[#2a2f5f] opacity-50" />

      {/* Single decorative element */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#6945D8]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto">
          {/* Trust indicator bar */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-6 mb-12 text-white/60 text-sm"
          >
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-[#ACFCE3]" />
              <span>Trusted by 200+ nonprofits</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-white/20" />
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-[#ACFCE3]" />
              <span>100% refund guarantee</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-white/20" />
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#ACFCE3]" />
              <span>14-day average to audit-ready</span>
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {/* Eyebrow */}
              <p className="text-[#ACFCE3] font-semibold text-sm mb-4 tracking-wide uppercase">
                For Canadian Nonprofits & Charities
              </p>

              {/* Main headline - clear, no rotation */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Get fundable in
                <span className="block text-[#ACFCE3]">14 days, not months</span>
              </h1>

              {/* Subheading */}
              <p className="text-xl text-white/80 leading-relaxed mb-8 max-w-xl">
                We fix your systems—board, finance, HR, fundraising—so you can focus on your mission. Clear scope. Fixed
                price. Guaranteed results.
              </p>

              {/* Value props - specific numbers */}
              <div className="grid grid-cols-3 gap-4 mb-10">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-3 rounded-lg bg-white/5 border border-white/10"
                >
                  <div className="text-2xl font-bold text-[#ACFCE3]">72hrs</div>
                  <p className="text-xs text-white/60 mt-1">to match support</p>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-3 rounded-lg bg-white/5 border border-white/10"
                >
                  <div className="text-2xl font-bold text-[#ACFCE3]">$3-8k</div>
                  <p className="text-xs text-white/60 mt-1">typical project</p>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-3 rounded-lg bg-white/5 border border-white/10"
                >
                  <div className="text-2xl font-bold text-[#ACFCE3]">100%</div>
                  <p className="text-xs text-white/60 mt-1">fix or refund</p>
                </motion.div>
              </div>

              {/* CTAs - Clear hierarchy */}
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <Button
                  size="lg"
                  className="bg-[#6945D8] hover:bg-[#5a38c7] text-white shadow-xl px-8 py-6 text-base font-semibold"
                  onClick={scrollToHealthCheck}
                >
                  Start Free Assessment
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="lg"
                  className="text-white/80 hover:text-white hover:bg-white/10 px-6 py-6"
                >
                  <PlayCircle className="mr-2 w-4 h-4" />
                  Watch 2-min demo
                </Button>
              </div>

              {/* Trust text */}
              <p className="mt-6 text-sm text-white/50">
                No credit card required · 7-minute assessment · Instant results
              </p>
            </motion.div>

            {/* Right Content - Interactive System Check */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative"
            >
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                {/* Card Header */}
                <div className="bg-gradient-to-r from-[#6945D8] to-[#5a38c7] px-6 py-4">
                  <h3 className="text-white font-semibold">Your Organization Health</h3>
                  <p className="text-white/80 text-sm">See where you need support</p>
                </div>

                {/* Interactive Assessment or Status Display */}
                <div className="p-6">
                  {!assessmentStarted ? (
                    // System Status Display
                    <div className="space-y-3">
                      <p className="text-sm text-gray-600 mb-4">
                        Most nonprofits have gaps in 3+ areas. Click to see details:
                      </p>

                      {Object.entries(systemStatus).map(([key, system]) => (
                        <motion.div
                          key={key}
                          whileHover={{ x: 4 }}
                          onClick={() => setSelectedSystem(selectedSystem === key ? null : key)}
                          className="cursor-pointer"
                        >
                          <div
                            className={`
                            flex items-center justify-between p-4 rounded-lg border-2 transition-all
                            ${selectedSystem === key ? "border-[#6945D8] bg-[#6945D8]/5" : "border-gray-200 hover:border-gray-300"}
                          `}
                          >
                            <div className="flex items-center gap-3">
                              <div
                                className={`
                                w-2 h-2 rounded-full
                                ${
                                  system.status === "operational"
                                    ? "bg-green-500"
                                    : system.status === "needs-work"
                                      ? "bg-yellow-500"
                                      : "bg-red-500"
                                }
                              `}
                              />
                              <span className="font-medium text-gray-900">{system.label}</span>
                            </div>
                            <ChevronDown
                              className={`
                              w-4 h-4 text-gray-400 transition-transform
                              ${selectedSystem === key ? "rotate-180" : ""}
                            `}
                            />
                          </div>

                          <AnimatePresence>
                            {selectedSystem === key && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                className="overflow-hidden"
                              >
                                <p className="px-4 py-2 text-sm text-gray-600">{system.description}</p>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </motion.div>
                      ))}

                      <button
                        onClick={() => setAssessmentStarted(true)}
                        className="w-full mt-4 bg-[#6945D8] hover:bg-[#5a38c7] text-white rounded-lg py-3 font-medium transition-colors"
                      >
                        Check Your Readiness →
                      </button>
                    </div>
                  ) : (
                    // Quick Assessment
                    <div className="space-y-4">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="font-semibold text-gray-900">Quick Readiness Check</h4>
                        <span
                          className={`
                          px-2 py-1 rounded-full text-xs font-medium
                          ${
                            readinessLevel === "Ready"
                              ? "bg-green-100 text-green-700"
                              : readinessLevel === "At Risk"
                                ? "bg-yellow-100 text-yellow-700"
                                : "bg-red-100 text-red-700"
                          }
                        `}
                        >
                          {readinessLevel}
                        </span>
                      </div>

                      <div className="space-y-3">
                        <label className="flex items-start gap-3 cursor-pointer p-3 rounded-lg hover:bg-gray-50">
                          <input
                            type="checkbox"
                            checked={assessmentAnswers.audit}
                            onChange={(e) => setAssessmentAnswers((prev) => ({ ...prev, audit: e.target.checked }))}
                            className="mt-1 w-4 h-4 text-[#6945D8] rounded focus:ring-[#6945D8]"
                          />
                          <div>
                            <p className="font-medium text-gray-900">Can you pass an audit today?</p>
                            <p className="text-sm text-gray-500">
                              Financial records, policies, and governance docs ready
                            </p>
                          </div>
                        </label>

                        <label className="flex items-start gap-3 cursor-pointer p-3 rounded-lg hover:bg-gray-50">
                          <input
                            type="checkbox"
                            checked={assessmentAnswers.reporting}
                            onChange={(e) => setAssessmentAnswers((prev) => ({ ...prev, reporting: e.target.checked }))}
                            className="mt-1 w-4 h-4 text-[#6945D8] rounded focus:ring-[#6945D8]"
                          />
                          <div>
                            <p className="font-medium text-gray-900">Do funders trust your reporting?</p>
                            <p className="text-sm text-gray-500">Clear metrics, outcomes tracking, and impact data</p>
                          </div>
                        </label>

                        <label className="flex items-start gap-3 cursor-pointer p-3 rounded-lg hover:bg-gray-50">
                          <input
                            type="checkbox"
                            checked={assessmentAnswers.scaling}
                            onChange={(e) => setAssessmentAnswers((prev) => ({ ...prev, scaling: e.target.checked }))}
                            className="mt-1 w-4 h-4 text-[#6945D8] rounded focus:ring-[#6945D8]"
                          />
                          <div>
                            <p className="font-medium text-gray-900">Can you scale without breaking?</p>
                            <p className="text-sm text-gray-500">
                              Systems that can handle growth in funding and programs
                            </p>
                          </div>
                        </label>
                      </div>

                      <div className="pt-4 border-t">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-sm text-gray-600">Your readiness score:</span>
                          <span className="text-2xl font-bold text-[#6945D8]">{readinessScore}/3</span>
                        </div>

                        <button
                          onClick={scrollToHealthCheck}
                          className="w-full bg-[#6945D8] hover:bg-[#5a38c7] text-white rounded-lg py-3 font-medium transition-colors"
                        >
                          Get Your Custom Roadmap →
                        </button>

                        <button
                          onClick={() => {
                            setAssessmentStarted(false);
                            setAssessmentAnswers({ audit: false, reporting: false, scaling: false });
                          }}
                          className="w-full mt-2 text-sm text-gray-500 hover:text-gray-700"
                        >
                          ← Back to system overview
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Subtle glow effect */}
              <div className="absolute -inset-4 bg-[#6945D8]/20 rounded-3xl blur-2xl -z-10 opacity-50" />
            </motion.div>
          </div>

          {/* Social proof section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-20 pt-12 border-t border-white/10"
          >
            <p className="text-center text-white/60 text-sm mb-6">Trusted by leading Canadian nonprofits</p>
            <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
              {/* Replace with actual client logos */}
              <div className="text-white/40 font-semibold">United Way</div>
              <div className="text-white/40 font-semibold">Red Cross</div>
              <div className="text-white/40 font-semibold">YMCA</div>
              <div className="text-white/40 font-semibold">Food Banks</div>
              <div className="text-white/40 font-semibold">Habitat</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default NimaraHero;
