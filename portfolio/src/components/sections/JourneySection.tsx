
import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2, CircleDot } from "lucide-react";
import { journey } from "../../data/journey";

function JourneySection() {
  return (
    <section className="journey-section section-padding" id="journey">
      <div className="journey-container">
        <motion.div
          className="journey-heading"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-eyebrow">
            <span className="eyebrow-dot" />
            THE ROAD SO FAR
          </div>

          <h2 className="section-title">
            My Journey. <span className="gradient-text">My Evolution.</span>
          </h2>

          <p className="journey-intro">
            Every skill, every experiment and every challenge is part of
            the journey. I'm learning, building and moving forward.
          </p>
        </motion.div>

        <div className="journey-timeline">
          <div className="journey-timeline-line" />

          {journey.map((item, index) => (
            <motion.article
              className={`journey-item ${
                index % 2 === 0 ? "journey-item--left" : "journey-item--right"
              }`}
              key={item.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
            >
              <div className="journey-marker">
                <span>{item.icon}</span>
              </div>

              <div className="journey-card">
                <div className="journey-card-top">
                  <span className="journey-phase">{item.phase}</span>

                  <span className={`journey-status journey-status--${item.status}`}>
                    {item.status === "completed" ? (
                      <CheckCircle2 size={13} />
                    ) : (
                      <CircleDot size={13} />
                    )}
                    {item.status === "completed" ? "COMPLETED" : "ONGOING"}
                  </span>
                </div>

                <h3>{item.title}</h3>

                <span className="journey-organization">
                  {item.organization}
                </span>

                <p>{item.description}</p>

                <div className="journey-highlights">
                  {item.highlights.map((highlight) => (
                    <span key={highlight}>{highlight}</span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          className="journey-bottom"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div>
            <span className="journey-bottom-label">THE JOURNEY CONTINUES</span>
            <h3>Still learning. Still building. Still growing.</h3>
          </div>

          <a href="#contact" className="journey-contact-link">
            CONNECT WITH ME
            <ArrowUpRight size={17} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default JourneySection;
