interface TechChipProps {
  label: string;
  onClick?: () => void;
  active?: boolean;
}

const TechChip = ({ label, onClick, active }: TechChipProps) => {
  const baseClasses = "tech-chip transition-all";
  const interactiveClasses = onClick
    ? "cursor-pointer hover:bg-yellow hover:-translate-y-0.5"
    : "";
  const activeClasses = active ? "bg-yellow" : "";

  return (
    <span
      className={`${baseClasses} ${interactiveClasses} ${activeClasses}`}
      onClick={onClick}
      role={onClick ? "button" : undefined}
    >
      {label}
    </span>
  );
};

export default TechChip;
