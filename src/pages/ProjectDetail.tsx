import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, Github, ExternalLink, Image } from "lucide-react";
import Layout from "@/components/Layout";
import StatusBadge from "@/components/StatusBadge";
import TechChip from "@/components/TechChip";
import { projects, getProjectBySlug, Project } from "@/data/projects";

const colorClasses: Record<Project["color"], string> = {
  cyan: "bg-cyan",
  "electric-blue": "bg-electric-blue",
  yellow: "bg-yellow",
  orange: "bg-orange",
  teal: "bg-teal",
  magenta: "bg-magenta",
};

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const project = getProjectBySlug(slug || "");

  if (!project) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-24 text-center">
          <div className="w-24 h-24 bg-muted border-brutal mx-auto mb-6 flex items-center justify-center">
            <span className="text-4xl">?</span>
          </div>
          <h1 className="font-display text-4xl font-bold mb-4">
            Project Not Found
          </h1>
          <p className="text-muted-foreground mb-8">
            The project you're looking for doesn't exist.
          </p>
          <Link to="/showcase" className="neo-btn-primary">
            <ArrowLeft size={20} className="mr-2" />
            Back to Showcase
          </Link>
        </div>
      </Layout>
    );
  }

  // Find prev/next projects
  const currentIndex = projects.findIndex((p) => p.slug === project.slug);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject =
    currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  return (
    <Layout>
      {/* Hero Section */}
      <section className={`${colorClasses[project.color]} border-b-[3px] border-foreground`}>
        <div className="container mx-auto px-4 py-12">
          <Link
            to="/showcase"
            className="inline-flex items-center font-display font-semibold mb-6 hover:underline"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Showcase
          </Link>

          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
            <div className="max-w-2xl">
              <div className="mb-4">
                <StatusBadge status={project.status} />
              </div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                {project.title}
              </h1>
              <p className="text-xl md:text-2xl leading-relaxed">
                {project.pitch}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="neo-btn bg-card text-foreground"
                >
                  <Github size={20} className="mr-2" />
                  GitHub
                </a>
              )}
              {project.links.demo && (
                <a
                  href={project.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="neo-btn bg-foreground text-card"
                >
                  <ExternalLink size={20} className="mr-2" />
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section>
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-10">
              {/* Problem */}
              <div className="neo-card p-6 md:p-8">
                <h2 className="font-display text-2xl font-bold mb-4">
                  Problem
                </h2>
                <p className="text-foreground leading-relaxed">
                  {project.problem}
                </p>
              </div>

              {/* Approach */}
              <div className="neo-card p-6 md:p-8">
                <h2 className="font-display text-2xl font-bold mb-4">
                  Approach
                </h2>
                <ul className="space-y-3">
                  {project.approach.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="w-6 h-6 bg-yellow border-2 border-foreground flex items-center justify-center font-display font-bold text-sm flex-shrink-0 mt-0.5">
                        {index + 1}
                      </span>
                      <span className="text-foreground leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* What I Learned */}
              <div className="neo-card p-6 md:p-8">
                <h2 className="font-display text-2xl font-bold mb-4">
                  What I Learned
                </h2>
                <p className="text-foreground leading-relaxed">
                  {project.learned}
                </p>
              </div>

              {/* Next Steps */}
              <div className="neo-card p-6 md:p-8">
                <h2 className="font-display text-2xl font-bold mb-4">
                  Next Steps
                </h2>
                <ul className="space-y-2">
                  {project.nextSteps.map((step, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-teal font-bold">→</span>
                      <span className="text-foreground">{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Tech Stack */}
              <div className="neo-card p-6">
                <h3 className="font-display text-lg font-bold mb-4">
                  Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <TechChip key={tech} label={tech} />
                  ))}
                </div>
              </div>

              {/* Image Placeholder */}
              <div className="neo-card aspect-video flex items-center justify-center bg-muted">
                <div className="text-center text-muted-foreground">
                  <Image size={48} className="mx-auto mb-2" />
                  <p className="font-display font-semibold">
                    Image/Gallery Placeholder
                  </p>
                </div>
              </div>

              {/* Tags */}
              <div className="neo-card p-6">
                <h3 className="font-display text-lg font-bold mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <TechChip key={tag} label={tag} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="border-t-[3px] border-foreground">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col sm:flex-row justify-between gap-4">
            <Link to="/showcase" className="neo-btn-secondary">
              <ArrowLeft size={20} className="mr-2" />
              Back to Showcase
            </Link>

            <div className="flex gap-4">
              {prevProject && (
                <Link
                  to={`/projects/${prevProject.slug}`}
                  className="neo-btn-accent"
                >
                  <ArrowLeft size={20} className="mr-2" />
                  {prevProject.title}
                </Link>
              )}
              {nextProject && (
                <Link
                  to={`/projects/${nextProject.slug}`}
                  className="neo-btn-primary"
                >
                  {nextProject.title}
                  <ArrowRight size={20} className="ml-2" />
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProjectDetail;
