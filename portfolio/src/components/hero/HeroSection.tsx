
import HeroVideo from "./HeroVideo";
import HeroContent from "./HeroContent";
import ParticleBackground from "./ParticleBackground";
import FloatingSkillCards from "./FloatingSkillCards";
import Hero3DVisual from "./Hero3DVisual";
import CursorGlow from "../effects/CursorGlow";

function HeroSection() {
  return (
    <section className="hero-section" id="home">
      {/* Personal portrait video */}
      <HeroVideo />

      {/* Compact interactive 3D scene */}
      <Hero3DVisual />

      {/* Existing effects */}
      <ParticleBackground />
      <CursorGlow />

      {/* Existing hero content */}
      <div className="hero-container">
        <HeroContent />
        <FloatingSkillCards />
      </div>

      <div className="hero-bottom-line">
        <span>SUBHAM.DEV</span>
        <span>DESIGN • DEVELOPMENT • INNOVATION</span>
      </div>
    </section>
  );
}

export default HeroSection;
