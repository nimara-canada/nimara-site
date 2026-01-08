import { Check, Shield, Clock, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TYPEFORM_HEALTH_CHECK_URL } from "@/constants/urls";

interface PricingSectionProps {
  onOpenPackagesWaitlist?: () => void;
}

const pricingInclusions = [
  "Full diagnostic of the area",
  "Custom-built templates and trackers",
  "Staff training session",
  "90-day support (3+ areas)",
  "Documentation you can hand off",
];

const bundleData = [
  { areas: 2, regular: 13998, youPay: 13998, savings: null, popular: false },
  { areas: 3, regular: 20997, youPay: 17500, savings: 3497, percent: 17, popular: false },
  { areas: 5, regular: 34995, youPay: 27500, savings: 7495, percent: 21, popular: true },
  { areas: 7, regular: 48993, youPay: 37500, savings: 11493, percent: 23, popular: false },
];

const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('en-CA', {
    style: 'currency',
    currency: 'CAD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
};

export const PricingSection = ({
  onOpenPackagesWaitlist
}: PricingSectionProps) => {
  return (
    <section id="pricing" className="py-20 lg:py-28 bg-[#F8F9FC]" aria-labelledby="pricing-heading">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-[#6945D8] mb-4"
          >
            PRICING
          </motion.span>
          
          <motion.h2 
            id="pricing-heading" 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#202654] mb-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Simple, transparent pricing
          </motion.h2>
          
          <motion.p 
            className="text-lg italic text-[#6945D8]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Pay only for what you need
          </motion.p>
          
          <motion.p 
            className="text-muted-foreground mt-4 text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
          >
            Pick the areas where you need help. We'll build the systems, train your team, and hand everything off.
          </motion.p>
        </div>

        {/* Main content: Pricing card + Bundle table */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          {/* Per-domain pricing card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-xl border border-border/60 shadow-sm p-8"
          >
            <div className="mb-6">
              <div className="flex items-baseline gap-1">
                <span className="text-5xl font-bold text-[#202654]">$6,999</span>
              </div>
              <p className="text-muted-foreground mt-1">CAD per area</p>
            </div>
            
            <ul className="space-y-4 mb-8">
              {pricingInclusions.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#ACFCE3] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-[#202654]" strokeWidth={3} />
                  </div>
                  <span className="text-[#1A1A1A]">{item}</span>
                </li>
              ))}
            </ul>
            
            <Button 
              className="w-full bg-[#6945D8] hover:bg-[#5835C0] text-white font-medium py-6"
              onClick={onOpenPackagesWaitlist}
            >
              Get Started
            </Button>
          </motion.div>

          {/* Bundle discounts table */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-xl border border-border/60 shadow-sm p-8"
          >
            <h3 className="text-xl font-semibold text-[#202654] mb-6">Bundle and save</h3>
            
            <Table>
              <TableHeader>
                <TableRow className="border-border/40 hover:bg-transparent">
                  <TableHead className="text-muted-foreground font-medium">Areas</TableHead>
                  <TableHead className="text-muted-foreground font-medium">Regular</TableHead>
                  <TableHead className="text-muted-foreground font-medium">You Pay</TableHead>
                  <TableHead className="text-muted-foreground font-medium text-right">You Save</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {bundleData.map((row) => (
                  <TableRow 
                    key={row.areas} 
                    className={`border-border/40 ${row.popular ? 'bg-[#ACFCE3]/10' : ''}`}
                  >
                    <TableCell className="font-medium text-[#202654]">
                      <div className="flex items-center gap-2">
                        {row.areas} areas
                        {row.popular && (
                          <span className="text-[10px] font-semibold uppercase tracking-wider bg-[#ACFCE3] text-[#202654] px-2 py-0.5 rounded-full">
                            Most popular
                          </span>
                        )}
                      </div>
                    </TableCell>
                    <TableCell className="text-muted-foreground line-through">
                      {formatCurrency(row.regular)}
                    </TableCell>
                    <TableCell className="font-semibold text-[#202654]">
                      {formatCurrency(row.youPay)}
                    </TableCell>
                    <TableCell className="text-right">
                      {row.savings ? (
                        <span className="text-emerald-600 font-medium">
                          {formatCurrency(row.savings)} ({row.percent}%)
                        </span>
                      ) : (
                        <span className="text-muted-foreground">—</span>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </motion.div>
        </div>

        {/* 90-Day Ops Insurance */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35 }}
          className="max-w-5xl mx-auto mb-6"
        >
          <div className="bg-[#ACFCE3]/10 border border-[#ACFCE3]/30 rounded-xl p-6 flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-[#ACFCE3]/30 flex items-center justify-center flex-shrink-0">
              <Shield className="w-5 h-5 text-[#202654]" />
            </div>
            <div>
              <h4 className="font-semibold text-[#202654] mb-1">90-Day Ops Insurance</h4>
              <p className="text-muted-foreground mb-2">
                Free support for 90 days after we finish. If something breaks or your team has questions, we're still here.
              </p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Included free with 3+ areas</li>
                <li>• Available as $1,500 add-on for 2-area purchases</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Early Bird Offer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="max-w-5xl mx-auto mb-10"
        >
          <div className="bg-white border-l-4 border-[#ACFCE3] rounded-r-xl p-6 flex items-center gap-4">
            <Clock className="w-5 h-5 text-[#6945D8] flex-shrink-0" />
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[10px] font-bold uppercase tracking-wider bg-[#6945D8] text-white px-2 py-0.5 rounded">
                  Limited Time
                </span>
              </div>
              <p className="text-[#202654] font-medium">
                Book before January 31 and get 20% off any package.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Payment Terms + ROI */}
        <div className="max-w-3xl mx-auto text-center space-y-6 mb-12">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.45 }}
            className="text-muted-foreground"
          >
            50% to start. 50% at delivery. Invoiced as capacity building — often covered by grants.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="border-l-2 border-[#6945D8]/30 pl-4 py-2 inline-block text-left"
          >
            <p className="text-[#202654] font-medium text-lg">
              One missing receipt can cost you $20,000 in clawbacks. These systems pay for themselves the first time a funder asks for proof.
            </p>
          </motion.div>
        </div>

        {/* Escape Hatch CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.55 }}
          className="text-center"
        >
          <p className="text-muted-foreground mb-4">Not sure which areas you need?</p>
          <Button 
            variant="outline" 
            className="border-[#6945D8] text-[#6945D8] hover:bg-[#6945D8]/5 font-medium"
            asChild
          >
            <a href={TYPEFORM_HEALTH_CHECK_URL} target="_blank" rel="noopener noreferrer">
              Take the Free Health Check (10 min)
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};