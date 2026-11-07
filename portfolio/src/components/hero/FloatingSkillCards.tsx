
import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Coffee,
  BrainCircuit,
} from "lucide-react";

const skills = [
  {
    name: "React JS",
    detail: "Frontend Development",
    icon: Code2,
    className: "skill-card--react",
  },
  {
    name: "Node.js",
    detail: "Backend Development",
    icon: Database,
    className: "skill-card--node",
  },
  {
    name: "Java",
    detail: "Programming",
    icon: Coffee,
    className: "skill-card--java",
  },
  {
    name: "AI / ML",
    detail: "Artificial Intelligence",
    icon: BrainCircuit,
    className: "skill-card--ai",
  },
];

function FloatingSkillCards() {
  return (
    <div className="floating-skills" aria-label="Technology skills">
      {skills.map((skill, index) => {
        const Icon = skill.icon;

        return (
          <motion.div
            key={skill.name}
            className={`skill-glass-card ${skill.className}`}
            initial={{ opacity: 0, scale: 0.8, y: 30 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: [0, -12, 0],
            }}
            transition={{
              opacity: { duration: 0.8, delay: 0.3 + index * 0.15 },
              scale: { duration: 0.8, delay: 0.3 + index * 0.15 },
              y: {
                duration: 4 + index,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.2,
              },
            }}
          >
            <div className="skill-card-icon">
              <Icon size={23} />
            </div>

            <div className="skill-card-text">
              <strong>{skill.name}</strong>
              <span>{skill.detail}</span>
            </div>

            <span className="skill-card-indicator" />
          </motion.div>
        );
      })}
    </div>
  );
}

export default FloatingSkillCards;
