import { Lightbulb, Shield, Users } from "lucide-react";

const reasons = [
  {
    icon: Lightbulb,
    title: "Clarity & pace",
    description: "Many teams don't need a giant system. They need clarity and pace.",
  },
  {
    icon: Shield,
    title: "Defensible evidence",
    description: "Funders need evidence they can stand behind.",
  },
  {
    icon: Users,
    title: "Clean consultants",
    description: "Consultants want clean scopes and on-time pay.",
  },
];

export const WhyNow = () => {
  return (
    <section className="py-16 bg-[#202654] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Why Now
          </h2>
          <p className="text-center text-white/80 mb-12">
            The gap we're closing in Canada's nonprofit ecosystem.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <div
                  key={index}
                  className="p-6 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm"
                >
                  <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-white/70 text-sm">
                    {reason.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="text-center p-6 bg-white/5 rounded-2xl border border-white/10">
            <p className="text-lg font-medium">
              Nimara gives them a single way to work together.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
