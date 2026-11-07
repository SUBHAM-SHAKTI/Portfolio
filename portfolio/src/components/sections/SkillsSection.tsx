
import { motion } from "framer-motion";
import {
  Code2,
  Globe,
  Database,
  Server,
  Coffee,
  BrainCircuit,
  Palette,
  Cloud,
  Smartphone,
  Terminal,
  Layers,
  Megaphone,
} from "lucide-react";

const skillGroups = [
  {
    title: "Frontend Development",
    subtitle: "DESIGN & INTERACTION",
    skills: [
      { name: "React.js", icon: Code2 },
      { name: "JavaScript", icon: Terminal },
      { name: "TypeScript", icon: Code2 },
      { name: "HTML & CSS", icon: Globe },
      { name: "Tailwind CSS", icon: Palette },
      { name: "Next.js", icon: Layers },
    ],
  },
  {
    title: "Backend & Database",
    subtitle: "LOGIC & INFRASTRUCTURE",
    skills: [
      { name: "Node.js", icon: Server },
      { name: "Express.js", icon: Server },
      { name: "Java", icon: Coffee },
      { name: "Python", icon: Terminal },
      { name: "MongoDB", icon: Database },
      { name: "SQL", icon: Database },
      { name: "Firebase", icon: Cloud },
    ],
  },
  {
    title: "Emerging Technology",
    subtitle: "WHAT I'M EXPLORING",
    skills: [
      { name: "AI & Machine Learning", icon: BrainCircuit },
      { name: "Cloud Computing", icon: Cloud },
      { name: "API Development", icon: Globe },
      { name: "Mobile App Development", icon: Smartphone },
      { name: "UI/UX Design", icon: Palette },
      { name: "Digital Marketing", icon: Megaphone },
    ],
  },
];

function SkillsSection() {
  return (
    <section className="skills-section section-padding" id="skills">
      <div className="section-container">
        <motion.div
          className="skills-heading"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-eyebrow">
            <span className="eyebrow-dot" />
            MY TECHNICAL TOOLKIT
          </div>

          <h2 className="section-title">
            Skills That Build{" "}
            <span className="gradient-text">The Future.</span>
          </h2>

          <p className="skills-intro">
            Technologies and creative tools I use, work with and continuously
            explore to turn ideas into real-world experiences.
          </p>
        </motion.div>

        <div className="skills-groups">
          {skillGroups.map((group, groupIndex) => (
            <motion.div
              className="skill-group-card"
              key={group.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: groupIndex * 0.12 }}
            >
              <div className="skill-group-heading">
                <div>
                  <span>{group.subtitle}</span>
                  <h3>{group.title}</h3>
                </div>

                <span className="skill-group-number">
                  0{groupIndex + 1}
                </span>
              </div>

              <div className="skill-badges">
                {group.skills.map((skill) => {
                  const Icon = skill.icon;

                  return (
                    <motion.div
                      className="skill-badge"
                      key={skill.name}
                      whileHover={{ y: -5, scale: 1.03 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Icon size={18} />
                      <span>{skill.name}</span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="skills-bottom-note"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <span className="skills-note-line" />
          <p>ALWAYS LEARNING. ALWAYS BUILDING. ALWAYS EVOLVING.</p>
          <span className="skills-note-line" />
        </motion.div>
      </div>
    </section>
  );
}

export default SkillsSection;
