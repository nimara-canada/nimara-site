import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const HowItWorksHero: React.FC = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0
    }
  };

  const visualVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1
    }
  };

  return (
    <section className="relative w-full bg-white overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50/50 via-white to-slate-50/30" />
      
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="py-20 sm:py-24 lg:py-28 pb-12 sm:pb-16 lg:pb-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Text Content */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="order-2 lg:order-1"
            >
              {/* Eyebrow */}
              <motion.div 
                variants={itemVariants}
                className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 mb-4"
              >
                <span className="block w-8 h-[1px] bg-slate-300" />
                How Nimara works in practice
              </motion.div>
              
              {/* Heading */}
              <motion.h1 
                variants={itemVariants}
                className="text-4xl sm:text-5xl lg:text-5xl font-bold text-slate-900 leading-tight mb-6"
              >
                A clear system for getting from{' '}
                <span className="text-[#6945D8]">'we need help'</span>{' '}
                to{' '}
                <span className="text-[#6945D8]">'this actually works now.'</span>
              </motion.h1>
              
              {/* Subheading */}
              <motion.p 
                variants={itemVariants}
                className="text-lg text-slate-600 leading-relaxed mb-8 max-w-xl"
              >
                This page walks through the Nimara model, the steps in a typical project, 
                and how we manage quality, risk, and refunds.
              </motion.p>
              
              {/* Buttons */}
              <motion.div 
                variants={itemVariants}
                className="flex flex-col gap-4 mb-6"
              >
                <Link
                  to="/organizational-health-check"
                  className="group inline-flex items-center justify-center gap-2 bg-[#6945D8] text-white px-6 py-3.5 rounded-lg font-medium transition-all hover:bg-[#5a38c7] hover:scale-[1.02] hover:shadow-lg"
                >
                  Start the Organizational Health Check
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
                
                <Link
                  to="/refund-policy"
                  className="group inline-flex items-center justify-center gap-2 bg-white text-slate-700 px-6 py-3.5 rounded-lg font-medium border border-slate-200 transition-all hover:bg-slate-50 hover:border-slate-300 hover:scale-[1.02] hover:shadow-md"
                >
                  See refund & fix policy
                  <ExternalLink className="w-4 h-4 opacity-60" />
                </Link>
              </motion.div>
              
              {/* Helper text */}
              <motion.p 
                variants={itemVariants}
                className="text-sm text-slate-500"
              >
                New to Nimara? You can learn who we are on the{' '}
                <Link 
                  to="/about" 
                  className="text-[#6945D8] hover:text-[#5a38c7] underline underline-offset-2 transition-colors"
                >
                  About page
                </Link>
                .
              </motion.p>
            </motion.div>
            
            {/* Visual - Abstract Process Diagram */}
            <motion.div
              variants={visualVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="order-1 lg:order-2"
            >
              <div className="relative w-full h-full min-h-[400px] flex items-center justify-center">
                {/* Background circle */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-80 h-80 rounded-full bg-gradient-to-br from-[#6945D8]/5 to-[#ACFCE3]/10" />
                </div>
                
                {/* Process Flow Visual */}
                <svg 
                  viewBox="0 0 400 400" 
                  className="w-full h-full max-w-md relative z-10"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Animated path */}
                  <motion.path
                    d="M 100 100 Q 200 80, 300 100 T 300 300"
                    stroke="#6945D8"
                    strokeWidth="2"
                    fill="none"
                    strokeDasharray="5 5"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.3 }}
                    transition={{ 
                      duration: 2, 
                      ease: "easeInOut",
                      delay: 0.5,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                  />
                  
                  {/* Step 1 - Assessment */}
                  <motion.g
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                  >
                    <circle cx="100" cy="100" r="40" fill="#6945D8" opacity="0.1" />
                    <circle cx="100" cy="100" r="30" fill="#fff" stroke="#6945D8" strokeWidth="2" />
                    <text x="100" y="105" textAnchor="middle" className="fill-[#6945D8] text-sm font-medium">
                      1
                    </text>
                    <text x="100" y="155" textAnchor="middle" className="fill-slate-600 text-xs">
                      Assess
                    </text>
                  </motion.g>
                  
                  {/* Step 2 - Match */}
                  <motion.g
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                  >
                    <circle cx="200" cy="200" r="40" fill="#ACFCE3" opacity="0.3" />
                    <circle cx="200" cy="200" r="30" fill="#fff" stroke="#4CBFA6" strokeWidth="2" />
                    <text x="200" y="205" textAnchor="middle" className="fill-[#4CBFA6] text-sm font-medium">
                      2
                    </text>
                    <text x="200" y="255" textAnchor="middle" className="fill-slate-600 text-xs">
                      Match
                    </text>
                  </motion.g>
                  
                  {/* Step 3 - Execute */}
                  <motion.g
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7, duration: 0.5 }}
                  >
                    <circle cx="300" cy="300" r="40" fill="#6945D8" opacity="0.1" />
                    <circle cx="300" cy="300" r="30" fill="#fff" stroke="#6945D8" strokeWidth="2" />
                    <text x="300" y="305" textAnchor="middle" className="fill-[#6945D8] text-sm font-medium">
                      3
                    </text>
                    <text x="300" y="355" textAnchor="middle" className="fill-slate-600 text-xs">
                      Execute
                    </text>
                  </motion.g>
                  
                  {/* Connecting lines */}
                  <motion.line
                    x1="130" y1="100" x2="170" y2="200"
                    stroke="#6945D8"
                    strokeWidth="1"
                    opacity="0.3"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: 0.4, duration: 0.3 }}
                  />
                  
                  <motion.line
                    x1="230" y1="200" x2="270" y2="300"
                    stroke="#4CBFA6"
                    strokeWidth="1"
                    opacity="0.3"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: 0.6, duration: 0.3 }}
                  />
                  
                  {/* Floating elements for visual interest */}
                  <motion.circle
                    cx="150"
                    cy="150"
                    r="4"
                    fill="#6945D8"
                    opacity="0.2"
                    animate={{
                      y: [-5, 5, -5],
                      opacity: [0.2, 0.4, 0.2]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  
                  <motion.circle
                    cx="250"
                    cy="250"
                    r="3"
                    fill="#ACFCE3"
                    opacity="0.4"
                    animate={{
                      y: [5, -5, 5],
                      opacity: [0.4, 0.6, 0.4]
                    }}
                    transition={{
                      duration: 3.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.5
                    }}
                  />
                  
                  <motion.rect
                    x="320"
                    y="180"
                    width="6"
                    height="6"
                    fill="#6945D8"
                    opacity="0.15"
                    rx="1"
                    animate={{
                      rotate: [0, 90, 0],
                      opacity: [0.15, 0.3, 0.15]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1
                    }}
                  />
                  
                  <motion.rect
                    x="80"
                    y="220"
                    width="5"
                    height="5"
                    fill="#ACFCE3"
                    opacity="0.3"
                    rx="1"
                    animate={{
                      rotate: [0, -90, 0],
                      opacity: [0.3, 0.5, 0.3]
                    }}
                    transition={{
                      duration: 3.8,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.3
                    }}
                  />
                </svg>
              </div>
            </motion.div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksHero;