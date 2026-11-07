
import { motion } from "framer-motion";
import { ArrowUpRight, TrendingUp } from "lucide-react";
import { marketingServices } from "../../data/marketing";

function MarketingSection() {
  return (
    <section className="marketing-section section-padding" id="marketing">
      <div className="marketing-container">
        <motion.div
          className="marketing-heading"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-eyebrow">
            <span className="eyebrow-dot" />
            STRATEGY MEETS CREATIVITY
          </div>

          <h2 className="section-title">
            Beyond Code. <span className="gradient-text">Into Growth.</span>
          </h2>

          <p className="marketing-intro">
            Technology builds the product. Strategy helps it reach people.
            I explore the connection between digital experiences, creative
            communication and brand growth.
          </p>
        </motion.div>

        <div className="marketing-feature">
          <div className="marketing-feature-icon">
            <TrendingUp size={30} />
          </div>

          <div>
            <span className="marketing-feature-label">
              STRATEGIC MARKETING
            </span>
            <h3>Ideas deserve the right audience.</h3>
            <p>
              From digital presence to content strategy, I focus on
              purposeful communication and consistent execution.
            </p>
          </div>

          <span className="marketing-feature-watermark">GROWTH</span>
        </div>

        <div className="marketing-grid">
          {marketingServices.map((service, index) => (
            <motion.article
              className="marketing-card"
              key={service.number}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -7 }}
            >
              <div className="marketing-card-top">
                <span>{service.number}</span>
                <span className="marketing-card-icon">{service.icon}</span>
              </div>

              <h3>{service.title}</h3>
              <p>{service.description}</p>

              <div className="marketing-tags">
                {service.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>

        <a href="#contact" className="marketing-cta">
          LET'S GROW AN IDEA
          <ArrowUpRight size={18} />
        </a>
      </div>
    </section>
  );
}

export default MarketingSection;
