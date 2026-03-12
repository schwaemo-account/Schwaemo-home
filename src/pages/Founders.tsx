import { Github, Linkedin } from "lucide-react";
import Layout from "@/components/Layout";
import TechChip from "@/components/TechChip";
import { founders, Founder } from "@/data/founders";

const colorClasses: Record<Founder["accentColor"], string> = {
  cyan: "bg-cyan",
  "electric-blue": "bg-electric-blue",
  yellow: "bg-yellow",
  orange: "bg-orange",
  teal: "bg-teal",
  magenta: "bg-magenta",
};

const Founders = () => {
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
            FOUNDERS
          </h1>
          <p className="text-xl text-muted-foreground">
            Two builders shaping Schwaemo across AI, systems, and product experiments.
          </p>
        </div>
      </section>

      {/* Founders Grid */}
      <section className="border-b-[3px] border-foreground">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {founders.map((founder) => (
              <article key={founder.name} className="neo-card overflow-hidden">
                <div
                  className={`h-5 ${colorClasses[founder.accentColor]} border-b-[3px] border-foreground`}
                />

                <div className="p-6 md:p-8">
                  <div className="grid gap-6 sm:grid-cols-[180px_minmax(0,1fr)]">
                    <div
                      className={`aspect-[4/5] ${colorClasses[founder.accentColor]} border-brutal p-3 shadow-brutal-sm`}
                    >
                      {founder.photoSrc ? (
                        <img
                          src={founder.photoSrc}
                          alt={`${founder.name} portrait`}
                          className="h-full w-full border-brutal object-cover"
                        />
                      ) : (
                        <div className="flex h-full flex-col justify-between border-brutal bg-card p-4">
                          <p className="text-xs font-display font-bold uppercase tracking-[0.18em] text-muted-foreground">
                            Photo coming soon
                          </p>
                          <div className="flex items-end justify-between gap-3">
                            <div>
                              <p className="font-display text-5xl font-bold leading-none">
                                {founder.name
                                  .split(" ")
                                  .map((name) => name[0])
                                  .join("")}
                              </p>
                              <p className="mt-2 text-sm text-muted-foreground">
                                Founder placeholder
                              </p>
                            </div>
                            <div
                              className={`h-8 w-8 border-brutal ${colorClasses[founder.accentColor]}`}
                            />
                          </div>
                        </div>
                      )}
                    </div>

                    <div>
                      <h2 className="font-display text-2xl font-bold mb-1">
                        {founder.name}
                      </h2>
                      <p className="text-foreground font-semibold mb-3">
                        {founder.role}
                      </p>
                      <p className="text-sm uppercase tracking-[0.14em] text-muted-foreground mb-4">
                        {founder.education}
                      </p>
                      <p className="text-foreground mb-6 leading-relaxed">
                        {founder.bio}
                      </p>

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

                      <div className="flex flex-col sm:flex-row gap-3">
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
                      </div>
                    </div>
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
