import { Link } from "react-router-dom";
import { ArrowRight, Zap, Target, Lightbulb } from "lucide-react";
import Layout from "@/components/Layout";
import ProjectCard from "@/components/ProjectCard";
import { getFeaturedProjects } from "@/data/projects";

const Index = () => {
  const featuredProjects = getFeaturedProjects();

  const buildPrinciples = [
    {
      icon: Zap,
      title: "Knowledge Velocity",
      description: "We build tools that shorten the gap between finding information and actually understanding it.",
      color: "bg-yellow",
    },
    {
      icon: Target,
      title: "Trust-Based Navigation",
      description: "We prefer products that help people verify what they are seeing instead of asking for blind trust.",
      color: "bg-electric-blue",
    },
    {
      icon: Lightbulb,
      title: "Chromatic Sorcery",
      description: "We like expressive interfaces with personality, especially when they make technical workflows easier to read.",
      color: "bg-magenta",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="border-b-[3px] border-foreground">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-4xl">
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] mb-6">
              A marketplace of
              <br />
              things we've built.
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl">
              Schwaemo is a two-founder studio building AI tools, search experiments,
              and product bets that make information easier to use.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/showcase" className="neo-btn-primary text-lg">
                Browse Showcase
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link to="/founders" className="neo-btn-secondary text-lg">
                Meet the Founders
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="border-b-[3px] border-foreground">
        <div className="container mx-auto px-4 py-16">
          <div className="flex items-center justify-between mb-10">
            <h2 className="font-display text-3xl md:text-4xl font-bold">
              Featured Projects
            </h2>
            <Link
              to="/showcase"
              className="hidden sm:flex items-center font-display font-semibold text-sm hover:text-primary transition-colors"
            >
              View all
              <ArrowRight className="ml-1" size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>

          <Link
            to="/showcase"
            className="sm:hidden neo-btn-accent w-full text-center mt-8"
          >
            View all projects
            <ArrowRight className="ml-2" size={16} />
          </Link>
        </div>
      </section>

      {/* How I Build Section */}
      <section>
        <div className="container mx-auto px-4 py-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-10">
            How We Build
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {buildPrinciples.map((principle) => (
              <div
                key={principle.title}
                className="neo-card p-5 group cursor-default"
              >
                <div
                  className={`w-12 h-12 ${principle.color} border-brutal flex items-center justify-center mb-4 group-hover:animate-float`}
                >
                  <principle.icon size={24} className="text-foreground" />
                </div>
                <h3 className="font-display font-bold text-lg mb-2">
                  {principle.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
