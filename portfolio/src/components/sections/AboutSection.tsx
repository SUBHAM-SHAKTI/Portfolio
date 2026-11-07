
import { motion } from "framer-motion";
import {
  Code2,
  Megaphone,
  Mic2,
  MapPin,
  ArrowDownRight,
} from "lucide-react";

const roles = [
  {
    icon: Code2,
    title: "Full-Stack Developer",
    description: "Building modern web applications and digital products.",
  },
  {
    icon: Megaphone,
    title: "Strategic Marketer",
    description: "Connecting brands with people through digital strategy.",
  },
  {
    icon: Mic2,
    title: "Motivational Speaker",
    description: "Sharing ideas, confidence and positive perspectives.",
  },
];

function AboutSection() {
  return (
    <section className="about-section section-padding" id="about">
      <div className="section-container">
        <motion.div
          className="section-eyebrow"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="eyebrow-dot" />
          GET TO KNOW ME
        </motion.div>

        <div className="about-grid">
          <motion.div
            className="about-visual"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            <div className="about-image-frame">
              <div className="about-image-placeholder">
                <span>SSS</span>
                <small>YOUR STORY. YOUR IMPACT.</small>
              </div>

              <img
                src="/images/subham-profile.jpg"
                alt="Subham Shakti Singh"
                onError={(event) => {
                  event.currentTarget.style.display = "none";
                }}
              />

              <div className="about-image-overlay" />
            </div>

            <div className="about-floating-label">
              <span className="about-label-dot" />
              <span>CREATING WITH PURPOSE</span>
            </div>

            <div className="about-visual-glow" />
          </motion.div>

          <motion.div
            className="about-content"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            <p className="about-kicker">HELLO, I'M SUBHAM SHAKTI SINGH</p>

            <h2 className="section-title">
              Turning Ideas Into{" "}
              <span className="gradient-text">Digital Impact.</span>
            </h2>

            <p className="about-description">
              I'm a creative technology enthusiast passionate about building
              meaningful digital experiences. I work across full-stack
              development, strategic marketing and creative communication.
            </p>

            <p className="about-description">
              I enjoy exploring modern technologies, solving real-world
              problems and turning ambitious ideas into practical projects.
              My journey is driven by curiosity, continuous learning and
              innovation.
            </p>

            <div className="about-location">
              <MapPin size={17} />
              <span>Bhubaneswar, Odisha, India</span>
            </div>

            <a href="#skills" className="about-explore-link">
              EXPLORE MY SKILLS
              <ArrowDownRight size={18} />
            </a>
          </motion.div>
        </div>

        <div className="about-roles">
          {roles.map((role, index) => {
            const Icon = role.icon;

            return (
              <motion.div
                className="about-role-card"
                key={role.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <div className="about-role-icon">
                  <Icon size={23} />
                </div>

                <h3>{role.title}</h3>
                <p>{role.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
