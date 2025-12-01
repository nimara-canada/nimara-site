import { motion } from 'framer-motion';

export const TheGap = () => {
  const problems = [
    "Many orgs are asked to be audit-ready while running on volunteer systems.",
    "Funders pay for short pilots and reports, not lasting backbone.",
    "Consultants do great one-off work, but there is no shared install-and-maintain system.",
    "Leaders are burning out trying to manage finance, HR, fundraising, and tech late at night."
  ];

  return (
    <section className="bg-background px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-32">
      <div className="container mx-auto max-w-3xl text-center">
        
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-8"
        >
          The gap no one is paid to fix
        </motion.h2>

        {/* Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10"
        >
          Small and mid-size nonprofits are asked to do big work with weak systems. Most leaders are trying to keep the mission alive while their basic operations are shaky.
        </motion.p>

        {/* Bullets */}
        <motion.ul
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="space-y-4 mb-10 text-left max-w-2xl mx-auto"
        >
          {problems.map((problem, index) => (
            <li key={index} className="flex items-start gap-3">
              <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary mt-2.5" />
              <span className="text-base md:text-lg text-foreground leading-relaxed">
                {problem}
              </span>
            </li>
          ))}
        </motion.ul>

        {/* Closing line */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-xl md:text-2xl font-semibold text-foreground"
        >
          Nimara exists to own this gap as our whole job.
        </motion.p>

      </div>
    </section>
  );
};
