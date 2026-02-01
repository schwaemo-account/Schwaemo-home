export type ProjectStatus = "shipped" | "in-progress" | "prototype";

export interface Project {
  slug: string;
  title: string;
  description: string;
  pitch: string;
  tags: string[];
  status: ProjectStatus;
  featured: boolean;
  color: "cyan" | "electric-blue" | "yellow" | "orange" | "teal" | "magenta";
  links: {
    github?: string;
    demo?: string;
  };
  problem: string;
  approach: string[];
  techStack: string[];
  learned: string;
  nextSteps: string[];
  createdAt: string;
}

export const projects: Project[] = [
  {
    slug: "tldr",
    title: "Tldr",
    description: "A reading assistant chrome extension",
    pitch: "Read smart, not hard. Summarize and query web pages instantly.",
    tags: ["Productivity", "Chrome Extension", "AI"],
    status: "in-progress",
    featured: true,
    color: "yellow",
    links: {
      github: "https://github.com",
    },
    problem: "The web is full of long articles, and our attention spans are shrinking. Consuming information efficiently is a challenge.",
    approach: [
      "Developed a Chrome extension that extracts page content",
      "Integrated LLM APIs to provide summarization and Q&A",
      "Built a non-intrusive sidebar UI for seamless reading",
    ],
    techStack: ["TypeScript", "Chrome API", "React", "OpenAI API"],
    learned: "Managing browser extension state across tabs is tricky. Context isolation requires careful handling.",
    nextSteps: ["Add PDF support", "Implement 'Save to Read Later'"],
    createdAt: "2024-01-20",
  },
  {
    slug: "trust-me-bro",
    title: "Trust me Bro",
    description: "Google search that trusts you",
    pitch: "Search without the surveillance. Results you can verify.",
    tags: ["Search", "Privacy", "Web"],
    status: "prototype",
    featured: true,
    color: "electric-blue",
    links: {
      github: "https://github.com",
    },
    problem: "Modern search engines prioritize ads and tracking over user intent. Trust in search results is eroding.",
    approach: [
      "Created a privacy-preserving search wrapper",
      " implemented a 'trust score' for domains based on user feedback",
      "Removed tracking parameters from all outgoing links",
    ],
    techStack: ["Next.js", "SearxNG", "Redis"],
    learned: "Building a search index from scratch is hard; aggregating and filtering existing sources is a better MVP strategy.",
    nextSteps: ["Launch public beta", "Add community blocklists"],
    createdAt: "2024-02-01",
  },
  {
    slug: "let-there-be-light",
    title: "Let there be light",
    description: "Colouring in comics",
    pitch: "Breathe color into black & white worlds. Automatic comic coloring.",
    tags: ["AI/ML", "Art", "Comics"],
    status: "prototype",
    featured: true,
    color: "magenta",
    links: {
      github: "https://github.com",
    },
    problem: "Many classic manga and comics are only available in black and white. Fans often want to see them in full color.",
    approach: [
      "Trained a conditional GAN on colored comic datasets",
      "Built a web interface for uploading and processing pages",
      "Added manual color hint tools for guiding the AI",
    ],
    techStack: ["Python", "PyTorch", "React", "FastAPI"],
    learned: "Line art consistency is key. Handling different drawing styles requires diverse training data.",
    nextSteps: ["Improve edge detection", "Batch processing for full chapters"],
    createdAt: "2024-02-10",
  },
];

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find((p) => p.slug === slug);
};

export const getFeaturedProjects = (): Project[] => {
  return projects.filter((p) => p.featured);
};

export const getAllTags = (): string[] => {
  const tags = new Set<string>();
  projects.forEach((p) => p.tags.forEach((t) => tags.add(t)));
  return Array.from(tags).sort();
};
