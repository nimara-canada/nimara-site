import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const teamMembers = [
  {
    name: "Founder & Technology",
    role: "Infrastructure",
    bio: "I design the rails. I care about reliable tools, clean data, and simple handoffs. Before Nimara, I built internal systems for nonprofits and program teams.",
    initials: "FT",
    image: null,
  },
  {
    name: "Evaluation & Learning Lead",
    role: "",
    bio: "I help teams pick outcomes that make sense, then gather the proof. I turn results into clear notes people can use.",
    initials: "EL",
    image: null,
  },
  {
    name: "Delivery Lead",
    role: "PM",
    bio: "I keep projects moving. I run checklists, chase blockers, and make sure \"done\" is truly done. Files are ready when you need them.",
    initials: "DL",
    image: null,
  },
];

export const TheTeam = () => {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
          The Team
        </h2>
        <p className="text-center text-muted-foreground mb-12">
          Lean, focused, growing. We've all worked on the front lines of Canadian nonprofits.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="p-6 bg-background rounded-2xl shadow-sm border border-border text-center"
            >
              <Avatar className="w-24 h-24 mx-auto mb-4">
                <AvatarImage src={member.image || undefined} alt={member.name} />
                <AvatarFallback className="bg-primary/10 text-primary text-xl">
                  {member.initials}
                </AvatarFallback>
              </Avatar>
              
              <h3 className="text-lg font-semibold text-foreground mb-1">
                {member.name}
              </h3>
              {member.role && (
                <p className="text-sm text-muted-foreground mb-4">
                  {member.role}
                </p>
              )}
              
              <p className="text-sm text-muted-foreground leading-relaxed">
                {member.bio}
              </p>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground">
          We're a lean team and hiring carefully. If this work matters to you, say hello →{" "}
          <a href="mailto:hello@nimara.ca" className="text-primary hover:underline">
            hello@nimara.ca
          </a>
        </p>
      </div>
    </section>
  );
};
