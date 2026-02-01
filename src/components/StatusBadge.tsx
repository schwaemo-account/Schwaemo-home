import { ProjectStatus } from "@/data/projects";

interface StatusBadgeProps {
  status: ProjectStatus;
}

const statusConfig: Record<ProjectStatus, { label: string; className: string }> = {
  shipped: { label: "Shipped", className: "status-shipped" },
  "in-progress": { label: "In Progress", className: "status-progress" },
  prototype: { label: "Prototype", className: "status-prototype" },
};

const StatusBadge = ({ status }: StatusBadgeProps) => {
  const config = statusConfig[status];

  return (
    <span
      className={`inline-flex items-center px-3 py-1 text-xs font-display font-bold uppercase tracking-wide border-2 border-foreground ${config.className}`}
    >
      {config.label}
    </span>
  );
};

export default StatusBadge;
