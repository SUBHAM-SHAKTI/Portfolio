
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { services } from "../../data/services";

function ServicesSection() {
  return (
    <section className="services-section section-padding" id="services">
      <div className="services-container">
        <motion.div
          className="services-heading"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="section-eyebrow">
            <span className="eyebrow-dot" />
            WHAT I CAN BUILD FOR YOU
          </div>

          <h2 className="section-title">
            Services That Create{" "}
            <span className="gradient-text">Impact.</span>
          </h2>

          <p className="services-intro">
            From a professional website to a complete digital experience,
            let's turn your business ideas into reality.
          </p>
        </motion.div>

        <div className="services-grid">
          {services.map((service, index) => (
            <motion.article
              className="service-card"
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -8 }}
            >
              <div className="service-card-top">
                <span>{service.number}</span>
                <span className="service-icon">{service.icon}</span>
              </div>

              <h3>{service.title}</h3>
              <p>{service.description}</p>

              <div className="service-technologies">
                {service.technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>

              <a
                className="service-link"
                href={`https://wa.me/918249194885?text=${encodeURIComponent(
                  `Hi Subham, I'm interested in your ${service.title} service. Let's discuss my requirements.`
                )}`}
                target="_blank"
                rel="noreferrer"
              >
                DISCUSS THIS SERVICE
                <ArrowUpRight size={17} />
              </a>
            </motion.article>
          ))}
        </div>

        <div className="services-bottom">
          <Sparkles size={19} />
          <p>Have a unique idea? Let's create a custom solution together.</p>
          <a href="#contact">START A PROJECT <ArrowUpRight size={16} /></a>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
