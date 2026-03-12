import shanilPhoto from "../../Shanil photo.jpeg";

export interface Founder {
  slug: string;
  name: string;
  role: string;
  education: string;
  bio: string;
  skills: string[];
  links: {
    github: string;
    linkedin: string;
  };
  accentColor:
    | "electric-blue"
    | "magenta"
    | "yellow"
    | "orange"
    | "teal"
    | "cyan";
  photoSrc?: string;
}

export const founders: Founder[] = [
  {
    slug: "shanil-shah",
    name: "Shanil Shah",
    role: "Co-founder - AI/ML, product development, customer research",
    education:
      "2nd year Natural Sciences student at Queens' College, Cambridge, studying physics.",
    bio: "I focus on quantitative problem solving and learning by doing. I regularly take on problems before I fully know how to solve them, then pick up the concepts and tools needed to get the work over the line.",
    skills: ["AI/ML", "Product Development", "Customer Research"],
    links: {
      github: "https://github.com/s-h-a-n-i-l",
      linkedin: "https://www.linkedin.com/in/shanil-shah-1b4283285/",
    },
    accentColor: "electric-blue",
    photoSrc: shanilPhoto,
  },
  {
    slug: "tejas-gharat",
    name: "Tejas Gharat",
    role: "Co-founder - AI/NLP, embedded systems, software engineering",
    education:
      "Information and embedded systems engineering student with a full-stack systems focus.",
    bio: "I like building full-stack systems that solve real problems. I am comfortable learning unfamiliar tools quickly and working across software, hardware, and AI-heavy workflows when a project needs it.",
    skills: ["AI/NLP", "Embedded Systems", "Software Engineering"],
    links: {
      github: "https://github.com/tng4480",
      linkedin: "https://www.linkedin.com/in/tejas-gharat-359629237",
    },
    accentColor: "magenta",
  },
];
