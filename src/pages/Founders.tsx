import { Github, Linkedin, Mail } from "lucide-react";
import Layout from "@/components/Layout";
import TechChip from "@/components/TechChip";

const Founders = () => {
  const founders = [
    {
      name: "Your Name Here",
      role: "Builder & Experimenter",
      bio: "Full-stack developer with a passion for shipping products that solve real problems. I believe in fast iteration, clean code, and learning by doing. When I'm not coding, I'm probably reading about systems design or exploring new frameworks.",
      skills: ["Python", "TypeScript", "React", "ML/AI", "Systems", "DevOps"],
      links: {
        github: "https://github.com",
        linkedin: "https://linkedin.com",
        email: "mailto:hello@schwaemo.com",
      },
      color: "bg-electric-blue" as const,
    },
    {
      name: "Founder 2",
      role: "Co-Founder",
      bio: "The partner in crime. Bringing a fresh perspective and complementary skills to the table. Focused on scaling operations and driving strategic growth.",
      skills: ["Strategy", "Product", "Operations", "Marketing"],
      links: {
        github: "https://github.com",
        linkedin: "https://linkedin.com",
        email: "mailto:hello@schwaemo.com",
      },
      color: "bg-magenta" as const,
    },
  ];

  const principles = [
    { text: "BUILD FAST. BREAK THINGS.", color: "bg-yellow" },
    { text: "USER-CENTRIC DESIGN", color: "bg-cyan" },
    { text: "OPEN SOURCE FIRST", color: "bg-teal" },
    { text: "ITERATE ENDLESSLY", color: "bg-orange" },
    { text: "SHIP > PERFECT", color: "bg-magenta" },
    { text: "LEARN IN PUBLIC", color: "bg-electric-blue" },
  ];

  return (
    <Layout>
      {/* Header */}
      <section className="border-b-[3px] border-foreground">
        <div className="container mx-auto px-4 py-12">
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-4">
            FOUNDER(S)
          </h1>
          <p className="text-xl text-muted-foreground">
            The people behind the projects. Currently a team of one.
          </p>
        </div>
      </section>

      {/* Founders Grid */}
      <section className="border-b-[3px] border-foreground">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {founders.map((founder) => (
              <article key={founder.name} className="neo-card">
                {/* Color Header */}
                <div
                  className={`h-32 ${founder.color} border-b-[3px] border-foreground flex items-end p-6`}
                >
                  <div className="w-20 h-20 bg-card border-brutal flex items-center justify-center font-display text-3xl font-bold">
                    {founder.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h2 className="font-display text-2xl font-bold mb-1">
                    {founder.name}
                  </h2>
                  <p className="text-muted-foreground font-semibold mb-4">
                    {founder.role}
                  </p>
                  <p className="text-foreground mb-6 leading-relaxed">
                    {founder.bio}
                  </p>

                  {/* Skills */}
                  <div className="mb-6">
                    <h3 className="font-display font-bold text-sm uppercase tracking-wide mb-3">
                      Skills
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {founder.skills.map((skill) => (
                        <TechChip key={skill} label={skill} />
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex gap-3">
                    <a
                      href={founder.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="neo-btn-primary flex-1 justify-center"
                    >
                      <Github size={18} className="mr-2" />
                      GitHub
                    </a>
                    <a
                      href={founder.links.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="neo-btn-secondary flex-1 justify-center"
                    >
                      <Linkedin size={18} className="mr-2" />
                      LinkedIn
                    </a>
                    <a
                      href={founder.links.email}
                      className="neo-btn-accent flex-1 justify-center"
                    >
                      <Mail size={18} className="mr-2" />
                      Email
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Principles Section */}
      <section>
        <div className="container mx-auto px-4 py-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-10">
            Principles
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {principles.map((principle, index) => (
              <div
                key={index}
                className={`neo-card ${principle.color} p-8 text-center group`}
              >
                <p className="font-display text-xl md:text-2xl font-bold text-foreground leading-tight">
                  {principle.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Founders;
