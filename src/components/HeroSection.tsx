import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/button';
import {
  Check,
  AlertTriangle,
  XCircle,
  Loader2,
  FileSearch,
  ArrowRight
} from 'lucide-react';

// Rotating words for the H1
const rotatingWords = ["fundable", "compliant", "scalable"];

// Animation Steps (Right Side)
// 0: Analyze (Scanning)
// 1: Identify (Show Good vs Bad)
// 2: Fix (Nimara Logic Applied)
// 3: Result (All Good)

const SYSTEM_ROWS = [
  { id: 'gov', label: 'Board & Governance', type: 'strong' },
  { id: 'fin', label: 'Financial Systems', type: 'weak' },
  { id: 'fund', label: 'Fundraising Data', type: 'critical' },
  { id: 'hr', label: 'People & HR', type: 'strong' },
];

export const HeroSection = () => {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [isDeleting, setIsDeleting] = useState(false);
  const [step, setStep] = useState(0);
  const prefersReduced = useReducedMotion();

  // Parallax Scroll Effect
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -100]);

  // Typing animation with backspace effect
  useEffect(() => {
    if (prefersReduced) {
      setDisplayedText(rotatingWords[wordIndex]);
      return;
    }

    const currentWord = rotatingWords[wordIndex];
    let currentIndex = isDeleting ? currentWord.length : 0;

    const interval = setInterval(() => {
      if (!isDeleting) {
        // Typing forward
        if (currentIndex <= currentWord.length) {
          setDisplayedText(currentWord.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(interval);
          setIsTyping(false);
          
          // Wait before starting to delete
          setTimeout(() => {
            setIsDeleting(true);
          }, 1500);
        }
      } else {
        // Deleting backward
        if (currentIndex >= 0) {
          setDisplayedText(currentWord.slice(0, currentIndex));
          currentIndex--;
        } else {
          clearInterval(interval);
          setIsDeleting(false);
          setIsTyping(true);
          
          // Move to next word
          setWordIndex((prev) => (prev + 1) % rotatingWords.length);
        }
      }
    }, isDeleting ? 80 : 80);

    return () => clearInterval(interval);
  }, [wordIndex, isDeleting, prefersReduced]);

  // Animation Loop (Right Side)
  useEffect(() => {
    if (prefersReduced) {
      setStep(3);
      return;
    }

    const runSequence = async () => {
      // 0. Analyze
      setStep(0);
      await new Promise(r => setTimeout(r, 2000));

      // 1. Identify Problems
      setStep(1);
      await new Promise(r => setTimeout(r, 2500));

      // 2. Fix / Match Offering
      setStep(2);
      await new Promise(r => setTimeout(r, 2500));

      // 3. Result
      setStep(3);
      await new Promise(r => setTimeout(r, 4000));
    };

    runSequence();
    // Loop
    const interval = setInterval(runSequence, 11000);
    return () => clearInterval(interval);
  }, [prefersReduced]);

  const scrollToHealthCheck = () => {
    const healthCheckSection = document.getElementById('health-check');
    if (healthCheckSection) {
      healthCheckSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Fallback to form if health-check doesn't exist
      const form = document.getElementById('form_3quotes');
      form?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Fallback to form
      const form = document.getElementById('form_3quotes');
      form?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-secondary-background pt-16 pb-16 md:pt-24 md:pb-24 lg:pt-32 lg:pb-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background gradients for depth */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/5 to-transparent pointer-events-none" aria-hidden="true" />

      {/* Parallax Background Elements */}
      <motion.div
        style={{ y: prefersReduced ? 0 : y1 }}
        className="absolute -top-24 -right-24 w-96 h-96 bg-[hsl(var(--nimara-purple))]/20 rounded-full blur-3xl mix-blend-screen opacity-50"
        aria-hidden="true"
      />
      <motion.div
        style={{ y: prefersReduced ? 0 : y2 }}
        className="absolute bottom-0 left-0 w-96 h-96 bg-[hsl(var(--nimara-mint))]/10 rounded-full blur-3xl mix-blend-screen opacity-30"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">

        {/* Left Content */}
        <div className="lg:col-span-6 flex flex-col justify-center">
          <div className="mb-8">
            <div className="inline-block px-3 py-1 rounded-full bg-white/10 border border-white/10 backdrop-blur-sm text-xs font-bold tracking-wider text-[hsl(var(--nimara-mint))] uppercase shadow-sm">
              For Nonprofits and Charities
            </div>
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight text-white tracking-tight mb-8">
            Finish the work that keeps you{' '}
            <br className="sm:hidden" />
            <span className="text-accent inline-block relative align-baseline" style={{ width: '8.5ch', minHeight: '1.2em' }}>
              <span className="absolute left-0 top-0 whitespace-nowrap">
                {displayedText}
                {(isTyping || isDeleting) && (
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
                    className="inline-block w-0.5 h-[0.9em] bg-accent ml-1 align-middle"
                  />
                )}
              </span>
            </span>
          </h1>

          <div className="mb-10 lg:mb-12">
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed font-normal">
              Nimara installs simple systems for your board, money, people, fundraising, volunteers, and tools. This helps your nonprofit stay audit-ready, safe for funders, and ready to grow.
            </p>
          </div>

          {/* Updated CTA block */}
          <div className="flex flex-col items-start gap-3">
            <Button
              size="lg"
              className="shadow-xl shadow-indigo-900/30 text-base px-8"
              onClick={scrollToHealthCheck}
            >
              Start your free Health Check
            </Button>
            <p className="text-sm text-gray-200">
              Takes about 7 minutes. We'll send you a simple plan for what to fix first.
            </p>
            <a
              href="https://calendly.com/hello-nimara/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[hsl(var(--nimara-mint))] hover:text-white transition-colors underline decoration-1 underline-offset-4 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--nimara-mint))] rounded px-1"
            >
              Prefer to talk? Book a quick call.
            </a>
          </div>
        </div>

        {/* Right Content - Work Plan Animation */}
        <div className="lg:col-span-6 flex items-center justify-center relative mt-8 lg:mt-0">

          {/* Main Card Container */}
          <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden relative">

            {/* Header */}
            <div className="bg-[hsl(var(--nimara-navy))] px-6 py-5 flex items-center justify-between border-b border-gray-800">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-[hsl(var(--nimara-mint))]">
                  <FileSearch size={18} />
                </div>
                <div>
                  <h3 className="font-bold text-white text-sm">Organization Health</h3>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--nimara-mint))] animate-pulse" />
                    <p className="text-xs text-gray-400">
                      {step === 0 && "Analyzing systems..."}
                      {step === 1 && "Issues identified"}
                      {step === 2 && "Building solutions..."}
                      {step === 3 && "All systems operational"}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* List Content */}
            <div className="p-6 bg-slate-50 space-y-4">
              {SYSTEM_ROWS.map((row) => {
                // Determine state for this row
                let statusIcon;
                let statusText;
                let statusColor;
                let bgColor = 'bg-white';

                // Logic for what to show at each step
                if (step === 0) {
                  // Analyzing
                  statusIcon = <Loader2 size={16} className="animate-spin text-slate-400" />;
                  statusText = "Scanning...";
                  statusColor = "text-slate-400";
                } else if (step === 1) {
                  // Identify
                  if (row.type === 'strong') {
                    statusIcon = <Check size={16} className="text-emerald-500" />;
                    statusText = "Functioning";
                    statusColor = "text-emerald-600";
                  } else if (row.type === 'weak') {
                    statusIcon = <AlertTriangle size={16} className="text-amber-500" />;
                    statusText = "Needs Update";
                    statusColor = "text-amber-600";
                    bgColor = "bg-amber-50 border-amber-100";
                  } else {
                    statusIcon = <XCircle size={16} className="text-rose-500" />;
                    statusText = "Missing Data";
                    statusColor = "text-rose-600";
                    bgColor = "bg-rose-50 border-rose-100";
                  }
                } else if (step === 2) {
                  // Fixing
                  if (row.type !== 'strong') {
                    statusIcon = <Loader2 size={16} className="animate-spin text-[hsl(var(--nimara-purple))]" />;
                    statusText = "Fixing...";
                    statusColor = "text-[hsl(var(--nimara-purple))]";
                    bgColor = "bg-purple-50 border-purple-100";
                  } else {
                    statusIcon = <Check size={16} className="text-emerald-500" />;
                    statusText = "Functioning";
                    statusColor = "text-emerald-600";
                  }
                } else {
                  // Result
                  statusIcon = <Check size={16} className="text-emerald-500" />;
                  statusText = "Optimized";
                  statusColor = "text-emerald-600";
                  bgColor = "bg-white"; // Back to clean
                }

                return (
                  <motion.div
                    key={row.id}
                    layout
                    className={`flex items-center justify-between p-4 rounded-xl border border-gray-100 shadow-sm transition-colors duration-500 ${bgColor}`}
                  >
                    <span className="font-semibold text-[hsl(var(--nimara-navy))] text-sm">{row.label}</span>
                    <div className={`flex items-center gap-2 text-xs font-medium ${statusColor}`}>
                      {statusText}
                      {statusIcon}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Nimara Overlay / Workplan Badge */}
            <AnimatePresence>
              {step === 2 && (
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 20, opacity: 0 }}
                  className="absolute bottom-6 left-6 right-6 bg-[hsl(var(--nimara-navy))] p-4 rounded-xl shadow-xl z-10 flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[hsl(var(--nimara-purple))] flex items-center justify-center text-white font-bold text-xs">N</div>
                    <div className="flex flex-col">
                      <span className="text-white text-sm font-bold">Nimara System</span>
                      <span className="text-xs text-gray-300">Applying Path B...</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-[hsl(var(--nimara-mint))] text-xs font-bold uppercase tracking-wider">
                    Working <Loader2 size={12} className="animate-spin" />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Success Overlay */}
            <AnimatePresence>
              {step === 3 && (
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 bg-white/90 backdrop-blur-sm flex flex-col items-center justify-center z-20 text-center p-8"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4">
                    <Check size={32} strokeWidth={3} />
                  </div>
                  <h3 className="text-2xl font-bold text-[hsl(var(--nimara-navy))] mb-2">Ready to Grow</h3>
                  <p className="text-slate-500 mb-6">Your systems are fundable, audit-ready, and safe.</p>
                  <div className="flex items-center gap-2 text-[hsl(var(--nimara-purple))] font-semibold text-sm">
                    View Workplan <ArrowRight size={16} />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Decorative Glows */}
          <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-[hsl(var(--nimara-purple))]/5 blur-3xl rounded-full pointer-events-none" />
        </div>
      </div>
    </section>
  );
};
