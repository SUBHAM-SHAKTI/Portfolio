
export type Project = {
  id: number;
  number: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  status: string;
  accent: string;
  icon: string;
};

export const projects: Project[] = [
  {
    id: 1,
    number: "01",
    title: "INGINO",
    category: "Education Technology",
    description:
      "A student guidance platform concept for B.Tech, M.Tech, MCA and MBA learners, bringing notes, previous year questions, projects and career resources together.",
    technologies: ["React", "Tailwind CSS", "MongoDB", "Node.js"],
    status: "In Development",
    accent: "wine",
    icon: "🎓",
  },
  {
    id: 2,
    number: "02",
    title: "MR.SSS AI",
    category: "Artificial Intelligence",
    description:
      "A personal AI assistant concept designed around voice interaction, intelligent chat, memory and productivity automation.",
    technologies: ["React", "Node.js", "Express", "AI APIs"],
    status: "Concept / Building",
    accent: "red",
    icon: "🤖",
  },
  {
    id: 3,
    number: "03",
    title: "Client Work Tracker",
    category: "Marketing Dashboard",
    description:
      "A dashboard concept for tracking social media work, client folders, content targets, published posts, reels and advertising activity.",
    technologies: ["React", "JavaScript", "CSS", "Lucide"],
    status: "In Development",
    accent: "orange",
    icon: "📊",
  },
  {
    id: 4,
    number: "04",
    title: "SUBHAM.DEV",
    category: "Personal Portfolio",
    description:
      "A cinematic personal portfolio showcasing full-stack development, strategic marketing, creative work and experiments with modern technology.",
    technologies: ["React", "TypeScript", "Framer Motion", "CSS"],
    status: "Building Now",
    accent: "wine",
    icon: "🚀",
  },
];
