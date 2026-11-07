
import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Mail,
  Phone,
  MapPin,
  Send,
  Linkedin,
  Instagram,
  Github,
  MessageCircle,
  Sparkles,
} from "lucide-react";

function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "Website Development",
    message: "",
  });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const subject = encodeURIComponent(
      `Project Inquiry - ${formData.service}`
    );

    const body = encodeURIComponent(
      `Hello Subham,

Name: ${formData.name}
Email: ${formData.email}
Service: ${formData.service}

Project Details:
${formData.message}

Looking forward to connecting with you.`
    );

    window.location.href =
      `mailto:subhamshaktisingh@gmail.com?subject=${subject}&body=${body}`;
  };

  const contactDetails = [
    {
      icon: Mail,
      label: "EMAIL ME",
      value: "subhamshaktisingh@gmail.com",
      href: "mailto:subhamshaktisingh@gmail.com",
    },
    {
      icon: Phone,
      label: "CALL ME",
      value: "+91 8249194885",
      href: "tel:+918249194885",
    },
    {
      icon: MapPin,
      label: "LOCATION",
      value: "Bhubaneswar, Odisha, India",
      href: "https://www.google.com/maps/search/?api=1&query=Bhubaneswar+Odisha",
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/subham-shakti-singh-2a4568238/",
    },
    {
      icon: Instagram,
      name: "Instagram",
      href: "https://www.instagram.com/subham_shakti_singh/",
    },
    {
      icon: Github,
      name: "GitHub",
      href: "https://github.com/",
    },
  ];

  return (
    <section className="contact-section section-padding" id="contact">
      <div className="contact-container">

        {/* SECTION HEADING */}
        <motion.div
          className="contact-heading"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-eyebrow">
            <span className="eyebrow-dot" />
            LET'S CREATE SOMETHING AMAZING
          </div>

          <h2 className="section-title">
            Have an Idea?{" "}
            <span className="gradient-text">Let's Build It.</span>
          </h2>

          <p>
            Have a project, business idea or collaboration in mind?
            Let's connect and turn your vision into something meaningful.
          </p>
        </motion.div>

        {/* CONTACT MAIN GRID */}
        <div className="contact-grid">

          {/* LEFT SIDE */}
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="contact-info-top">
              <div className="contact-icon-main">
                <MessageCircle size={30} />
              </div>

              <span className="contact-availability">
                <span />
                AVAILABLE FOR OPPORTUNITIES
              </span>
            </div>

            <h3>
              Let's start a
              <br />
              <span className="gradient-text">conversation.</span>
            </h3>

            <p className="contact-description">
              Whether you need a website, a web application, digital
              marketing support or want to discuss an innovative idea,
              I'm always open to meaningful conversations.
            </p>

            {/* CONTACT DETAILS */}
            <div className="contact-details">
              {contactDetails.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    href={item.href}
                    className="contact-detail-item"
                    key={item.label}
                    target={
                      item.label === "LOCATION" ? "_blank" : undefined
                    }
                    rel="noreferrer"
                  >
                    <div className="contact-detail-icon">
                      <Icon size={19} />
                    </div>

                    <div>
                      <span>{item.label}</span>
                      <strong>{item.value}</strong>
                    </div>

                    <ArrowUpRight size={17} className="contact-arrow" />
                  </a>
                );
              })}
            </div>

            {/* SOCIAL LINKS */}
            <div className="contact-social-area">
              <span>FOLLOW MY JOURNEY</span>

              <div className="contact-social-links">
                {socialLinks.map((social) => {
                  const Icon = social.icon;

                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={social.name}
                      title={social.name}
                    >
                      <Icon size={19} />
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE — CONTACT FORM */}
          <motion.div
            className="contact-form-wrapper"
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="contact-form-heading">
              <div>
                <span>PROJECT INQUIRY</span>
                <h3>Tell me about your idea.</h3>
              </div>

              <Sparkles size={25} />
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="contact-input-group">
                <label htmlFor="contact-name">Your Name</label>

                <input
                  id="contact-name"
                  type="text"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(event) =>
                    setFormData({
                      ...formData,
                      name: event.target.value,
                    })
                  }
                  required
                />
              </div>

              <div className="contact-input-group">
                <label htmlFor="contact-email">Email Address</label>

                <input
                  id="contact-email"
                  type="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={(event) =>
                    setFormData({
                      ...formData,
                      email: event.target.value,
                    })
                  }
                  required
                />
              </div>

              <div className="contact-input-group">
                <label htmlFor="contact-service">What do you need?</label>

                <select
                  id="contact-service"
                  value={formData.service}
                  onChange={(event) =>
                    setFormData({
                      ...formData,
                      service: event.target.value,
                    })
                  }
                >
                  <option>Website Development</option>
                  <option>Website Redesign</option>
                  <option>E-Commerce Development</option>
                  <option>App Development</option>
                  <option>Digital Marketing</option>
                  <option>AI / ML Project</option>
                  <option>Freelance Collaboration</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="contact-input-group">
                <label htmlFor="contact-message">Project Details</label>

                <textarea
                  id="contact-message"
                  rows={5}
                  placeholder="Tell me about your project, goals and requirements..."
                  value={formData.message}
                  onChange={(event) =>
                    setFormData({
                      ...formData,
                      message: event.target.value,
                    })
                  }
                  required
                />
              </div>

              <button type="submit" className="contact-submit-btn">
                SEND PROJECT INQUIRY
                <Send size={17} />
              </button>

              <p className="contact-form-note">
                Your email application will open with your inquiry ready
                to send. No message is stored on this website.
              </p>
            </form>
          </motion.div>
        </div>

        {/* BOTTOM CTA */}
        <motion.div
          className="contact-bottom"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span>SUBHAM.DEV — IDEAS INTO REALITY.</span>
          <a href="mailto:subhamshaktisingh@gmail.com">
            SAY HELLO
            <ArrowUpRight size={17} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default ContactSection;
