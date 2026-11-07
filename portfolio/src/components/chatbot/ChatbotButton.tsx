
import { motion } from "framer-motion";
import { MessageCircle, X, Sparkles } from "lucide-react";

interface ChatbotButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

function ChatbotButton({ isOpen, onClick }: ChatbotButtonProps) {
  return (
    <motion.button
      type="button"
      className={`chatbot-floating-button ${isOpen ? "active" : ""}`}
      onClick={onClick}
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.92 }}
      aria-label={isOpen ? "Close MR.SSS chatbot" : "Open MR.SSS chatbot"}
      aria-expanded={isOpen}
    >
      <span className="chatbot-button-glow" />

      <span className="chatbot-button-icon">
        {isOpen ? <X size={25} /> : <MessageCircle size={25} />}
      </span>

      {!isOpen && (
        <>
          <span className="chatbot-online-dot" />
          <span className="chatbot-sparkle">
            <Sparkles size={14} />
          </span>
          <span className="chatbot-tooltip">Chat with MR.SSS</span>
        </>
      )}
    </motion.button>
  );
}

export default ChatbotButton;
