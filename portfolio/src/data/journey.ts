
export type JourneyItem = {
  id: number;
  phase: string;
  title: string;
  organization: string;
  description: string;
  highlights: string[];
  icon: string;
  status: "completed" | "ongoing";
};

export const journey: JourneyItem[] = [
  {
    id: 1,
    phase: "EDUCATION",
    title: "Building the Foundation",
    organization: "GIET, Gangapatna · B.Tech in Computer Science",
    description:
      "Developed a foundation in computer science, programming and software development, while exploring how technology can solve practical problems.",
    highlights: ["Computer Science", "Programming", "Problem Solving"],
    icon: "🎓",
    status: "completed",
  },
  {
    id: 2,
    phase: "SKILL DEVELOPMENT",
    title: "Exploring Full-Stack Development",
    organization: "Independent Learning & Practice",
    description:
      "Focused on building modern web applications and strengthening skills across frontend, backend and databases.",
    highlights: ["React", "Node.js", "Java", "Python", "MongoDB"],
    icon: "💻",
    status: "ongoing",
  },
  {
    id: 3,
    phase: "PROFESSIONAL EXPOSURE",
    title: "Learning Through Real-World Work",
    organization: "Qlith Innovation Pvt. Ltd. · Bhubaneswar",
    description:
      "Gaining exposure to web development, digital marketing, client communication and practical project workflows.",
    highlights: [
      "Web Development",
      "Digital Marketing",
      "Client Communication",
    ],
    icon: "⚡",
    status: "ongoing",
  },
  {
    id: 4,
    phase: "PROJECT BUILDING",
    title: "Turning Ideas Into Products",
    organization: "Personal & Practical Projects",
    description:
      "Working on ideas such as INGINO, MR.SSS AI and a digital marketing client tracker to apply technical skills to real-world use cases.",
    highlights: ["INGINO", "MR.SSS AI", "Client Work Tracker"],
    icon: "🚀",
    status: "ongoing",
  },
  {
    id: 5,
    phase: "WHAT'S NEXT",
    title: "Building Beyond Limits",
    organization: "Full-Stack Development · AI · Innovation",
    description:
      "Continuing to explore AI/ML, product development and creative technology while growing as a developer, strategic marketer and motivational speaker.",
    highlights: ["AI & ML", "Product Development", "Innovation"],
    icon: "✨",
    status: "ongoing",
  },
];
