
export type Service = {
  id: number;
  number: string;
  title: string;
  description: string;
  technologies: string[];
  icon: string;
};

export const services: Service[] = [
  {
    id: 1,
    number: "01",
    title: "Website Development",
    description:
      "Modern, responsive and professional business websites designed to build your online presence and attract customers.",
    technologies: ["React", "Next.js", "Node.js", "MongoDB"],
    icon: "🌐",
  },
  {
    id: 2,
    number: "02",
    title: "Web Application Development",
    description:
      "Custom web applications, dashboards, admin panels and business management systems built around your requirements.",
    technologies: ["React", "TypeScript", "Node.js", "Express"],
    icon: "💻",
  },
  {
    id: 3,
    number: "03",
    title: "E-commerce Development",
    description:
      "Online shopping experiences with product catalogues, cart, checkout and order management functionality.",
    technologies: ["React", "MongoDB", "Node.js", "Payment APIs"],
    icon: "🛒",
  },
  {
    id: 4,
    number: "04",
    title: "App Development",
    description:
      "Planning and development of useful mobile application experiences for modern businesses and ideas.",
    technologies: ["React Native", "JavaScript", "API Development"],
    icon: "📱",
  },
  {
    id: 5,
    number: "05",
    title: "Digital Marketing",
    description:
      "Digital presence, social media management, content planning and campaign support to help brands grow.",
    technologies: ["Social Media", "Content", "Meta Ads", "Analytics"],
    icon: "📈",
  },
  {
    id: 6,
    number: "06",
    title: "UI/UX & Custom Solutions",
    description:
      "User-focused interface design, website redesign and custom digital solutions based on business needs.",
    technologies: ["UI/UX", "Responsive Design", "Figma", "Prototyping"],
    icon: "🎨",
  },
];
