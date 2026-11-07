
import { motion } from "framer-motion";
import { ArrowUpRight, Code2 } from "lucide-react";
import type { Project } from "../../data/projects";

type ProjectCardProps = {
  project: Project;
  index: number;
};

function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.article
      className={`project-card project-card--${project.accent}`}
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      whileHover={{ y: -10, rotateX: 2, rotateY: -2 }}
      style={{ transformStyle: "preserve-3d" }}
    >
      <div className="project-card-top">
        <span className="project-number">{project.number} / 04</span>
        <span className="project-status">
          <span />
          {project.status}
        </span>
      </div>

      <div className="project-visual">
        <div className="project-visual-glow" />
        <span className="project-visual-icon" aria-hidden="true">
          {project.icon}
        </span>
        <span className="project-visual-code">
          <Code2 size={18} />
          PROJECT_{project.number}
        </span>
      </div>

      <div className="project-card-content">
        <span className="project-category">{project.category}</span>

        <h3>{project.title}</h3>

        <p>{project.description}</p>

        <div className="project-tech-list">
          {project.technologies.map((technology) => (
            <span key={technology}>{technology}</span>
          ))}
        </div>

        <a className="project-details-link" href="#contact">
          <span>DISCUSS A SIMILAR PROJECT</span>
          <ArrowUpRight size={18} />
        </a>
      </div>
    </motion.article>
  );
}

export default ProjectCard;
