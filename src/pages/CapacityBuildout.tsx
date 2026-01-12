import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Footer } from '@/components/Footer';
import { ScrollToTop } from '@/components/ScrollToTop';
import { CALENDLY_BOOKING_URL, TYPEFORM_HEALTH_CHECK_URL, CONTACT_EMAIL } from '@/constants/urls';
import { 
  Check, X, ArrowRight, Clipboard, MessageSquare, FileCheck, ChevronDown
} from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Area selection data
const areas = [
  { id: 'board', label: 'Board/Governance' },
  { id: 'money', label: 'Money/Grants' },
  { id: 'people', label: 'People/HR' },
  { id: 'programs', label: 'Programs' },
  { id: 'fundraising', label: 'Fundraising/Donors' },
  { id: 'volunteers', label: 'Volunteers' },
  { id: 'tools', label: 'Tools/Files' },
];

// FAQ data
const faqs = [
  {
    question: "What is an area?",
    answer: "An area is one of seven operational domains we help strengthen: Board/Governance, Money/Grants, People/HR, Programs, Fundraising/Donors, Volunteers, and Tools/Files. Each area includes systems, templates, and training."
  },
  {
    question: "Do I have to pick 2 areas?",
    answer: "Yes, we require a minimum of 2 areas to ensure meaningful impact. Most organizations find that their operational challenges span multiple areas, and addressing them together creates better results."
  },
  {
    question: "Will I get a quote?",
    answer: "Yes. After our call, you'll receive a clear quote with scope, price, and next steps within 48 hours. No hidden fees or surprises."
  },
  {
    question: "Is this Canada-only?",
    answer: "Yes, we exclusively serve Canadian nonprofits and charities. Our systems are designed for Canadian regulatory requirements, funding landscapes, and organizational structures."
  }
];

// Sticky Header
const StickyHeader = () => {
  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-border"
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="group flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-nim-navy flex items-center justify-center">
            <span className="text-sm font-bold text-white">N</span>
          </div>
          <span className="text-nim-navy font-semibold text-lg tracking-tight">
            Nimara
          </span>
        </Link>
        <Button asChild size="default" className="bg-nim-navy hover:bg-nim-navy/90 text-white">
          <a href="#booking">
            Book a call
            <ArrowRight className="w-4 h-4 ml-2" />
          </a>
        </Button>
      </div>
    </motion.header>
  );
};

// 1. Hero Section
const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-white">
      <div className="max-w-3xl mx-auto px-6 text-center">
        {/* H1 */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-nim-navy tracking-tight leading-[1.1] mb-6"
        >
          Book a call for a quote
        </motion.h1>

        {/* Subhead */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-8"
        >
          Tell us what you need help with. We'll give you a clear scope and price.
        </motion.p>

        {/* Pricing Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center px-5 py-2.5 bg-nim-cloud border border-border rounded-full mb-8"
        >
          <span className="text-nim-navy font-semibold">From $6,499 CAD per area</span>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-10"
        >
          {['Canada-only', 'Not an audit firm', 'Not grant writers'].map((badge) => (
            <span 
              key={badge}
              className="px-3 py-1.5 bg-nim-mist text-nim-slate text-sm font-medium rounded-full"
            >
              {badge}
            </span>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col items-center gap-4"
        >
          <Button asChild size="lg" className="bg-nim-navy hover:bg-nim-navy/90 text-white px-10 py-6 text-base">
            <a href="#booking">
              Book a call
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </Button>
          <a
            href={TYPEFORM_HEALTH_CHECK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-nim-navy transition-colors text-sm underline underline-offset-4"
          >
            Try the 6-minute check
          </a>
        </motion.div>
      </div>
    </section>
  );
};

// 2. Interactive Area Selection
const AreaSelectionSection = () => {
  const [selectedAreas, setSelectedAreas] = useState<string[]>([]);

  const toggleArea = (id: string) => {
    setSelectedAreas(prev => 
      prev.includes(id) 
        ? prev.filter(a => a !== id)
        : [...prev, id]
    );
  };

  return (
    <section className="py-20 md:py-28 bg-nim-cloud">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-nim-navy tracking-tight mb-4"
        >
          What areas do you want to strengthen?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-muted-foreground mb-10"
        >
          Pick at least 2. We'll start with what's most urgent.
        </motion.p>

        {/* Area Chips */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3"
        >
          {areas.map((area) => {
            const isSelected = selectedAreas.includes(area.id);
            return (
              <button
                key={area.id}
                onClick={() => toggleArea(area.id)}
                className={`px-5 py-3 rounded-xl font-medium text-sm transition-all duration-200 border-2 ${
                  isSelected
                    ? 'bg-nim-navy text-white border-nim-navy'
                    : 'bg-white text-nim-navy border-border hover:border-nim-slate/50'
                }`}
              >
                {area.label}
              </button>
            );
          })}
        </motion.div>

        {selectedAreas.length >= 2 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mt-8"
          >
            <Button asChild size="lg" className="bg-nim-navy hover:bg-nim-navy/90 text-white">
              <a href="#booking">
                Continue to booking
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

// 3. Process Steps
const ProcessSection = () => {
  const steps = [
    {
      icon: Clipboard,
      title: "Before the call",
      description: "You answer a few short questions. You get: a clear agenda."
    },
    {
      icon: MessageSquare,
      title: "On the call",
      description: "We agree on areas and what 'done' looks like. You get: a clear plan in plain words."
    },
    {
      icon: FileCheck,
      title: "After the call",
      description: "We send a quote based on your choices. You get: scope + price + next steps."
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border-border bg-white hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-nim-cloud flex items-center justify-center mb-5">
                    <step.icon className="w-6 h-6 text-nim-navy" />
                  </div>
                  <h3 className="text-lg font-semibold text-nim-navy mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// 4. Preparation Section
const PreparationSection = () => {
  const items = [
    "What funding or deadline is coming up",
    "What's messy right now (files, tracking, reporting)",
    "Who will use the system day to day"
  ];

  return (
    <section className="py-16 md:py-20 bg-nim-cloud">
      <div className="max-w-2xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl p-8 md:p-10 border border-border"
        >
          <h3 className="text-xl md:text-2xl font-bold text-nim-navy mb-6">
            What we'll ask on the call
          </h3>
          <ul className="space-y-4">
            {items.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-nim-mint flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-nim-navy" />
                </div>
                <span className="text-nim-slate-dark">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

// 5. Pricing Block
const PricingBlock = () => {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-2xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Card className="border-2 border-nim-navy shadow-lg">
            <CardContent className="p-8 md:p-10 text-center">
              <h3 className="text-xl font-semibold text-nim-navy mb-6">
                Pricing
              </h3>
              <div className="mb-4">
                <span className="text-4xl md:text-5xl font-bold text-nim-navy">
                  From $6,499 CAD
                </span>
                <span className="text-muted-foreground ml-2">per area</span>
              </div>
              <p className="text-nim-navy font-medium mb-4">
                Minimum 2 areas (starting at $12,998 CAD)
              </p>
              <p className="text-sm text-muted-foreground">
                Final price depends on what you already have and what's missing.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

// 6. Fit Filter
const FitFilterSection = () => {
  const bestFit = [
    "Less stress at reporting time",
    "Clear tracking your team can keep current",
    "A simple, repeatable way to run the work"
  ];

  const notAFit = [
    "Someone to write grants for you",
    "An audit opinion",
    "A one-time document with no upkeep"
  ];

  return (
    <section className="py-20 md:py-28 bg-nim-cloud">
      <div className="max-w-4xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Best Fit */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="h-full border-border bg-white">
              <CardContent className="p-8">
                <h3 className="text-lg font-semibold text-nim-navy mb-6">
                  Best fit if you want
                </h3>
                <ul className="space-y-4">
                  {bestFit.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-green-600" />
                      </div>
                      <span className="text-nim-slate-dark">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          {/* Not a Fit */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="h-full border-border bg-white">
              <CardContent className="p-8">
                <h3 className="text-lg font-semibold text-nim-navy mb-6">
                  Not a fit if you want
                </h3>
                <ul className="space-y-4">
                  {notAFit.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <X className="w-3 h-3 text-red-400" />
                      </div>
                      <span className="text-nim-slate-dark">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// 7. Booking Section
const BookingSection = () => {
  return (
    <section id="booking" className="py-20 md:py-28 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-nim-navy tracking-tight mb-4">
            Book your call
          </h2>
        </motion.div>

        {/* Calendly Embed Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-8"
        >
          <div className="w-full bg-nim-cloud border border-border rounded-2xl overflow-hidden" style={{ height: '700px' }}>
            <iframe
              src={CALENDLY_BOOKING_URL}
              width="100%"
              height="100%"
              frameBorder="0"
              title="Book a call with Nimara"
              className="w-full h-full"
            />
          </div>
        </motion.div>

        {/* Backup Contact */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center text-muted-foreground mb-12"
        >
          Prefer email?{' '}
          <a 
            href={`mailto:${CONTACT_EMAIL}`}
            className="text-nim-navy underline underline-offset-4 hover:text-nim-purple transition-colors"
          >
            {CONTACT_EMAIL}
          </a>
        </motion.p>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-xl mx-auto"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-border">
                <AccordionTrigger className="text-left text-nim-navy hover:text-nim-purple hover:no-underline py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

// Main Page Component
const CapacityBuildout = () => {
  return (
    <div className="min-h-screen bg-white">
      <ScrollToTop />
      
      <Helmet>
        <title>Book a Call | Capacity Buildout | Nimara</title>
        <meta name="description" content="Book a call to get a clear scope and price for strengthening your nonprofit's operations. From $6,499 CAD per area. Canada-only." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://nimara.ca/capacity-buildout" />
        
        <meta property="og:title" content="Book a Call | Capacity Buildout | Nimara" />
        <meta property="og:description" content="Tell us what you need help with. We'll give you a clear scope and price for your nonprofit." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nimara.ca/capacity-buildout" />
        <meta property="og:image" content="https://nimara.ca/og-image.png" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Book a Call | Capacity Buildout | Nimara" />
        <meta name="twitter:description" content="Tell us what you need help with. We'll give you a clear scope and price." />
      </Helmet>
      
      <StickyHeader />
      
      <main id="main">
        <HeroSection />
        <AreaSelectionSection />
        <ProcessSection />
        <PreparationSection />
        <PricingBlock />
        <FitFilterSection />
        <BookingSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default CapacityBuildout;
