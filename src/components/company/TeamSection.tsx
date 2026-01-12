import { Card } from "@/components/ui/card";
import teamBenard from "@/assets/team-benard-new.png";
import teamThabani from "@/assets/team-thabani-new.jpg";
import teamDarryl from "@/assets/team-darryl-new.jpg";
import teamDavid from "@/assets/team-david.jpg";

const teamMembers = [
  {
    name: "Benard Serunyigo",
    role: "Founder & CEO",
    description: "Builds the rails and keeps Nimara's ecosystem fast, secure, and quietly reliable.",
    image: teamBenard,
    alt: "Portrait of Benard Serunyigo, Founder of Nimara"
  },
  {
    name: "Thabani Conrad Bhala",
    role: "Head of Delivery",
    description: "Owns execution. Turns big promises into finished work — tight scopes, real results, zero chaos.",
    image: teamThabani,
    alt: "Portrait of Thabani Conrad Bhala, Head of Delivery at Nimara"
  },
  {
    name: "Darryl De Dios",
    role: "Impact & Research Lead",
    description: "Turns program data into proof of impact that moves funders and strengthens partners.",
    image: teamDarryl,
    alt: "Portrait of Darryl De Dios, Impact & Research Lead at Nimara"
  },
  {
    name: "David Ton-Lai",
    role: "Technology Lead",
    description: "Leads technical architecture and ensures our platform scales with reliability and security.",
    image: teamDavid,
    alt: "Portrait of David Ton-Lai, Technology Lead at Nimara"
  }
];

export const TeamSection = () => {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
          The team (lean on purpose)
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <Card 
              key={member.name}
              className="group overflow-hidden hover:shadow-lg transition-all duration-300 bg-card border-border"
            >
              <div className="relative aspect-square overflow-hidden rounded-t-2xl">
                <img
                  src={member.image}
                  alt={member.alt}
                  className="w-full h-full object-cover transition-all duration-300 group-hover:scale-105"
                  style={{ filter: 'grayscale(100%)' }}
                />
                <div className="absolute inset-0 bg-[#F0F4FF] opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-sm font-semibold text-primary mb-3">
                  {member.role}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {member.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
