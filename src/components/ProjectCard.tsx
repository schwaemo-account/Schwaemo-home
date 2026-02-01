import { Link } from "react-router-dom";
import { Project } from "@/data/projects";
import StatusBadge from "./StatusBadge";
import TechChip from "./TechChip";

interface ProjectCardProps {
  project: Project;
}

const colorClasses: Record<Project["color"], string> = {
  cyan: "bg-cyan",
  "electric-blue": "bg-electric-blue",
  yellow: "bg-yellow",
  orange: "bg-orange",
  teal: "bg-teal",
  magenta: "bg-magenta",
};

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Link to={`/projects/${project.slug}`} className="block group">
      <article className="neo-card h-full flex flex-col">
        {/* Color Header */}
        <div className={`h-24 ${colorClasses[project.color]} border-b-[3px] border-foreground relative`}>
          <div className="absolute top-3 right-3">
            <StatusBadge status={project.status} />
          </div>
        </div>

        {/* Content */}
        <div className="p-5 flex flex-col flex-1">
          <h3 className="font-display text-xl font-bold mb-2 group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <p className="text-muted-foreground text-sm mb-4 flex-1">
            {project.description}
          </p>

          {/* Tech Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.slice(0, 3).map((tag) => (
              <TechChip key={tag} label={tag} />
            ))}
          </div>
        </div>
      </article>
    </Link>
  );
};

export default ProjectCard;
