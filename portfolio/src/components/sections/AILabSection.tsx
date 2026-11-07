
import { motion } from "framer-motion";
import { ArrowUpRight, BrainCircuit, Cpu, Sparkles } from "lucide-react";
import { aiLabProjects } from "../../data/aiLab";

function AILabSection() {
  return (
    <section className="ai-lab-section section-padding" id="ai-lab">
      <div className="ai-lab-container">
        <motion.div
          className="ai-lab-heading"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-eyebrow">
            <span className="eyebrow-dot" />
            EXPERIMENTING WITH WHAT'S NEXT
          </div>

          <h2 className="section-title">
            Welcome to My <span className="gradient-text">AI Lab.</span>
          </h2>

          <p className="ai-lab-intro">
            A space for exploring artificial intelligence, intelligent
            applications and the future of human-computer interaction.
          </p>
        </motion.div>

        <div className="ai-lab-banner">
          <div className="ai-lab-orbit ai-lab-orbit--one" />
          <div className="ai-lab-orbit ai-lab-orbit--two" />

          <div className="ai-lab-core">
            <BrainCircuit size={43} />
          </div>

          <div className="ai-lab-banner-content">
            <span>RESEARCH · EXPERIMENT · BUILD</span>
            <h3>Curiosity is the beginning of innovation.</h3>
            <p>
              Exploring AI concepts and turning useful ideas into
              practical digital experiences.
            </p>
          </div>

          <div className="ai-lab-banner-decoration">
            <Cpu size={24} />
            <Sparkles size={20} />
          </div>
        </div>

        <div className="ai-lab-grid">
          {aiLabProjects.map((project, index) => (
            <motion.article
              className="ai-lab-card"
              key={project.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              whileHover={{ y: -7 }}
            >
              <div className="ai-lab-card-top">
                <span>{project.number}</span>
                <span className="ai-lab-status">{project.status}</span>
              </div>

              <div className="ai-lab-project-icon">{project.icon}</div>

              <span className="ai-lab-project-type">{project.type}</span>
              <h3>{project.name}</h3>
              <p>{project.description}</p>

              <div className="ai-lab-tech">
                {project.technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>

        <div className="ai-lab-footer">
          <span>THE FUTURE IS BUILT ONE EXPERIMENT AT A TIME.</span>
          <a href="#contact">
            DISCUSS AN AI IDEA
            <ArrowUpRight size={17} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default AILabSection;
