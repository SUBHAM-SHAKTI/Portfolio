
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Menu,
  X,
  Code2,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

const navLinks = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Projects", id: "projects" },
  { name: "Journey", id: "journey" },
  { name: "Marketing", id: "marketing" },
  { name: "AI Lab", id: "ai-lab" },
  { name: "Contact", id: "contact" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      let current = "home";

      navLinks.forEach((link) => {
        const section = document.getElementById(link.id);

        if (section && window.scrollY >= section.offsetTop - 180) {
          current = link.id;
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Mobile menu open hone par background scroll lock
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Escape key se menu close
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleNavigation = (id: string) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      setActiveSection(id);
    }

    setIsOpen(false);
  };

  return (
    <motion.header
      className={`navbar-wrapper ${scrolled ? "navbar-scrolled" : ""}`}
      initial={{ opacity: 0, y: -35 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.7,
        ease: "easeOut",
      }}
    >
      <nav className="navbar-container">

        {/* LOGO */}
        <motion.button
          className="navbar-logo"
          onClick={() => handleNavigation("home")}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          aria-label="Go to home"
        >
          <span className="navbar-logo-icon">
            <Code2 size={21} />
          </span>

          <span className="navbar-logo-text">
            SUBHAM<span>.</span>DEV
          </span>
        </motion.button>

        {/* DESKTOP NAVIGATION */}
        <div className="navbar-links">
          {navLinks.map((link) => (
            <button
              key={link.id}
              className={`navbar-link ${
                activeSection === link.id ? "active" : ""
              }`}
              onClick={() => handleNavigation(link.id)}
            >
              {link.name}

              {activeSection === link.id && (
                <motion.span
                  className="navbar-active-indicator"
                  layoutId="navbar-active-indicator"
                  transition={{
                    type: "spring",
                    stiffness: 350,
                    damping: 30,
                  }}
                />
              )}
            </button>
          ))}
        </div>

        {/* RIGHT SIDE */}
        <div className="navbar-right">

          <div className="navbar-availability">
            <span className="navbar-status-dot" />
            <span>AVAILABLE FOR FREELANCE</span>
          </div>

          <motion.button
            className="navbar-hire-button"
            onClick={() => handleNavigation("contact")}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
          >
            Let's Talk
            <ArrowUpRight size={16} />
          </motion.button>

        </div>

        {/* MOBILE MENU BUTTON */}
        <motion.button
          className="navbar-menu-button"
          onClick={() => setIsOpen((previous) => !previous)}
          whileTap={{ scale: 0.9 }}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={isOpen ? "close" : "menu"}
              initial={{ opacity: 0, rotate: -90, scale: 0.7 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: 90, scale: 0.7 }}
              transition={{ duration: 0.18 }}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.span>
          </AnimatePresence>
        </motion.button>

      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="navbar-mobile-menu"
            initial={{ opacity: 0, y: -15, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -15, scale: 0.97 }}
            transition={{ duration: 0.25 }}
          >

            <div className="navbar-mobile-top">
              <span>EXPLORE THE PORTFOLIO</span>

              <div>
                <Sparkles size={14} />
                <span>SUBHAM.DEV</span>
              </div>
            </div>

            <div className="navbar-mobile-links">
              {navLinks.map((link, index) => (
                <motion.button
                  key={link.id}
                  className={`navbar-mobile-link ${
                    activeSection === link.id ? "active" : ""
                  }`}
                  onClick={() => handleNavigation(link.id)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: index * 0.045,
                    duration: 0.25,
                  }}
                >
                  <span className="navbar-mobile-number">
                    0{index + 1}
                  </span>

                  <span className="navbar-mobile-name">
                    {link.name}
                  </span>

                  <ArrowUpRight size={18} />
                </motion.button>
              ))}
            </div>

            <div className="navbar-mobile-bottom">

              <div className="navbar-mobile-status">
                <span className="navbar-status-dot" />
                AVAILABLE FOR FREELANCE PROJECTS
              </div>

              <button
                className="navbar-mobile-cta"
                onClick={() => handleNavigation("contact")}
              >
                <span>START A PROJECT</span>
                <ArrowUpRight size={19} />
              </button>

              <p>LET'S BUILD SOMETHING AMAZING.</p>

            </div>

          </motion.div>
        )}
      </AnimatePresence>

    </motion.header>
  );
}

export default Navbar;
