import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const nextSteps = [
  {
    heading: "I run or support a nonprofit",
    description: "I want to see if Nimara is a good fit for our team.",
    buttonText: "Start the Health Check",
    link: "/health-score"
  },
  {
    heading: "I'm a consultant or operator",
    description: "I want to learn more about Nimara Practice Partner roles.",
    buttonText: "See consultant roles",
    link: "/for-consultants"
  },
  {
    heading: "I'm a funder or ecosystem partner",
    description: "I want to stay in the loop as you build for funders.",
    buttonText: "Join the funder waitlist",
    link: "#funder-waitlist"
  }
];

export const ReadyToWork = () => {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-muted/30">
      <div className="container max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-center mb-12 md:mb-16"
        >
          Choose your next step
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {nextSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="h-full"
            >
              <Card className="h-full flex flex-col transition-shadow hover:shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl md:text-2xl">
                    {step.heading}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col justify-between gap-6">
                  <p className="text-muted-foreground">
                    {step.description}
                  </p>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      size="lg"
                      asChild
                      className="w-full"
                    >
                      <a href={step.link}>
                        {step.buttonText}
                      </a>
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};