import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Shield, FileCheck, HeartHandshake, BarChart3, Scale } from 'lucide-react';

const tiers = [
  {
    label: 'Tier 0',
    title: 'Too early / DIY support',
    description: 'Very early or fragile. We share tools and light support instead of deep installs.'
  },
  {
    label: 'Tier 1',
    title: 'Basic stability',
    description: 'The basics are in place, but systems are still informal and fragile.'
  },
  {
    label: 'Tier 2',
    title: 'Audit-ready',
    description: 'Core systems like finance, HR, and governance are strong enough to pass checks.'
  },
  {
    label: 'Tier 3',
    title: 'Growth-ready',
    description: 'The org can handle more funding, more staff, and more programs without breaking.'
  },
  {
    label: 'Tier 4',
    title: 'Complex or multi-site',
    description: 'Larger, more complex orgs with many programs, sites, or partners.'
  }
];

const guardrails = [
  {
    icon: Shield,
    label: 'Standardized packages',
    description: 'Clear scope, timelines, and deliverables. No mystery projects or endless change requests.'
  },
  {
    icon: FileCheck,
    label: 'Refund and fix loops',
    description: 'If a deliverable misses the mark, we fix it. If we cannot fix it, we do not keep the money for that piece of work.'
  },
  {
    icon: HeartHandshake,
    label: '3-month support',
    description: 'Each install includes light follow-up support for about three months so systems do not die on day one.'
  },
  {
    icon: BarChart3,
    label: 'Embedded evaluation',
    description: 'Every engagement feeds data back into the Nimara model so we can learn what works and stop repeating the same mistakes.'
  },
  {
    icon: Scale,
    label: 'Ethics and conflict rules',
    description: 'We use clear rules to protect communities, staff, and partners from conflicts of interest and harmful practices.'
  }
];

const paths = [
  {
    label: 'Path A',
    title: 'Fast fixes',
    description: 'Fast, clearly scoped modules for one main problem, like cash flow, board basics, or simple HR setup. When possible, we match organizations into these modules within about 72 hours so they can get quick relief.'
  },
  {
    label: 'Path B',
    title: 'Tiered packages',
    description: 'Deeper, pre-built bundles for organizations that need a full install across more than one area. For example, a package that covers finance + HR + governance for a Tier 2 or Tier 3 team.'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1] as const
    }
  }
};

export const TheNimaraModel = () => {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-background">
      {/* Five tiers section */}
      <div className="px-4 sm:px-6 lg:px-8 mb-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          {/* Section header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight">
              The Nimara model
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              One shared system. Five tiers and two paths to match each organization with the right kind of support.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="text-center mb-10">
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
              Five tiers of organizational health
            </h3>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              We sort organizations into five tiers, from "too early" to "ready for complex work." This helps us pick the right kind of help, at the right time.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid gap-4 sm:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          >
            {tiers.map((tier) => (
              <motion.div
                key={tier.label}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.2, ease: [0.4, 0, 0.2, 1] }
                }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <Badge variant="secondary" className="w-fit mb-2">
                      {tier.label}
                    </Badge>
                    <CardTitle className="text-lg">{tier.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm leading-relaxed">
                      {tier.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Protection section */}
      <div className="py-16 bg-secondary/5">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-10">
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
              How we protect missions, money, and people
            </h3>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              We design Nimara so that support is clear, fair, and safe for organizations, funders, and consultants.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          >
            {guardrails.map((guardrail) => {
              const Icon = guardrail.icon;
              return (
                <motion.div
                  key={guardrail.label}
                  variants={itemVariants}
                  whileHover={{ 
                    y: -4,
                    transition: { duration: 0.2, ease: [0.4, 0, 0.2, 1] }
                  }}
                >
                  <Card className="h-full hover:shadow-md transition-shadow duration-300">
                    <CardHeader>
                      <div className="flex items-start gap-3">
                        <div className="p-2 rounded-lg bg-primary/10 text-primary shrink-0">
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <CardTitle className="text-base font-semibold">
                            {guardrail.label}
                          </CardTitle>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-sm leading-relaxed">
                        {guardrail.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>

      {/* Two paths section */}
      <div className="px-4 sm:px-6 lg:px-8 mt-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-10">
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
              Two ways to work with Nimara
            </h3>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              We run support through two main paths, depending on how deep the work needs to go.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid gap-6 md:grid-cols-2"
          >
            {paths.map((path) => (
              <motion.div
                key={path.label}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.2, ease: [0.4, 0, 0.2, 1] }
                }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-xl">
                      <Badge variant={path.label === 'Path A' ? 'mint' : 'default'}>
                        {path.label}
                      </Badge>
                      <span>{path.title}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      {path.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
