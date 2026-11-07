
export type AILabItem = {
  number: string;
  name: string;
  type: string;
  description: string;
  technologies: string[];
  icon: string;
  status: string;
};

export const aiLabProjects: AILabItem[] = [
  {
    number: "01",
    name: "MR.SSS AI Assistant",
    type: "Personal AI Assistant",
    description:
      "An AI assistant concept exploring intelligent conversations, voice interaction, memory and productivity automation.",
    technologies: ["React", "Node.js", "LLM APIs"],
    icon: "🤖",
    status: "Building",
  },
  {
    number: "02",
    name: "AI-Powered Student Companion",
    type: "EdTech Experiment",
    description:
      "A student companion concept focused on AI-powered guidance, learning support and a more organised student experience.",
    technologies: ["React", "AI APIs", "MongoDB"],
    icon: "🧠",
    status: "Exploring",
  },
  {
    number: "03",
    name: "Intelligent Web Experiences",
    type: "AI + Web Development",
    description:
      "Exploring ways to combine modern web applications with AI-powered features and useful automations.",
    technologies: ["TypeScript", "React", "Python"],
    icon: "⚡",
    status: "Experimenting",
  },
];
