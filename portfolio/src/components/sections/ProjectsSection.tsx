
import { motion } from "framer-motion";
import { ArrowDownRight, Sparkles } from "lucide-react";
import { projects } from "../../data/projects";
import ProjectCard from "../ui/ProjectCard";

function ProjectsSection() {
  return (
    <section className="projects-section section-padding" id="projects">
      <div className="section-container">
        <motion.div
          className="projects-heading"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-eyebrow">
            <span className="eyebrow-dot" />
            SELECTED WORK & EXPERIMENTS
          </div>

          <div className="projects-title-row">
            <div>
              <h2 className="section-title">
                Ideas Into{" "}
                <span className="gradient-text">Reality.</span>
              </h2>

              <p className="projects-intro">
                A collection of projects, experiments and digital ideas
                I'm developing to solve real-world problems.
              </p>
            </div>

            <div className="projects-count">
              <Sparkles size={18} />
              <span>{String(projects.length).padStart(2, "0")} PROJECTS</span>
            </div>
          </div>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>

        <motion.div
          className="projects-footer"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <span>MORE IDEAS ARE IN THE WORKSHOP</span>
          <a href="#contact" aria-label="Contact me">
            LET'S BUILD SOMETHING
            <ArrowDownRight size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default ProjectsSection;
