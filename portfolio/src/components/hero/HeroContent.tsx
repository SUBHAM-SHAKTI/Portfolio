
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";

function HeroContent() {
  return (
    <div className="hero-content">
      <motion.div
        className="hero-eyebrow"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span className="status-dot" />
        AVAILABLE FOR CREATIVE PROJECTS
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        Building Digital
        <br />
        <span>Experiences</span>
        <br />
        Beyond Limits.
      </motion.h1>

      <motion.p
        className="hero-description"
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        I'm Subham Shakti Singh — Full-Stack Developer,
        Strategic Marketer and Motivational Speaker.
        I turn ideas into meaningful digital experiences.
      </motion.p>

      <motion.div
        className="hero-actions"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <a href="#projects" className="hero-primary-btn">
          Explore My Work <ArrowUpRight size={18} />
        </a>

        <a href="#contact" className="hero-secondary-btn">
          Let's Connect
        </a>
      </motion.div>

      <motion.div
        className="hero-scroll"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ArrowDown size={16} />
        SCROLL TO EXPLORE
      </motion.div>
    </div>
  );
}

export default HeroContent;
