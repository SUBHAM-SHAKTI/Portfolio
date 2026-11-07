
import { useState } from "react";

import Navbar from "./components/layout/Navbar";
import HeroSection from "./components/hero/HeroSection";

import AboutSection from "./components/sections/AboutSection";
import SkillsSection from "./components/sections/SkillsSection";
import ProjectsSection from "./components/sections/ProjectsSection";
import JourneySection from "./components/sections/JourneySection";
import MarketingSection from "./components/sections/MarketingSection";
import AILabSection from "./components/sections/AILabSection";
import ContactSection from "./components/sections/ContactSection";

import ChatbotButton from "./components/chatbot/ChatbotButton";
import ChatbotWindow from "./components/chatbot/ChatbotWindow";


function App() {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  return (
    <>
      <Navbar />

      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <JourneySection />
        <MarketingSection />
        <AILabSection />
        <ContactSection />
      </main>

      <ChatbotWindow
        isOpen={isChatbotOpen}
        onClose={() => setIsChatbotOpen(false)}
      />

      <ChatbotButton
        isOpen={isChatbotOpen}
        onClick={() => setIsChatbotOpen((previous) => !previous)}
      />
    </>
  );
}

export default App;
