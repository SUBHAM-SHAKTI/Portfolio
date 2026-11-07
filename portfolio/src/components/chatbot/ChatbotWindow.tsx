
import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Send,
  Bot,
  User,
  Sparkles,
  Minimize2,
} from "lucide-react";

interface ChatbotWindowProps {
  isOpen: boolean;
  onClose: () => void;
}

interface ChatMessage {
  id: number;
  sender: "bot" | "user";
  text: string;
}

const quickQuestions = [
  "Who is Subham?",
  "What are your skills?",
  "Show me your projects",
  "What services do you offer?",
  "How can I contact you?",
];

const getBotReply = (message: string) => {
  const query = message.toLowerCase();

  if (query.includes("who") || query.includes("about") || query.includes("subham")) {
    return "I'm MR.SSS, the personal assistant of Subham Shakti Singh. Subham is a Full-Stack Developer, Strategic Marketer and Motivational Speaker based in Bhubaneswar, Odisha.";
  }

  if (query.includes("skill") || query.includes("technology")) {
    return "Subham works with React, JavaScript, TypeScript, Node.js, Express.js, MongoDB, Java, Python, Tailwind CSS and explores AI/ML technologies.";
  }

  if (query.includes("project")) {
    return "Subham has worked on projects including INGINO, an AI-powered personal assistant concept, and a digital marketing client management tracker. Explore the Projects section to know more.";
  }

  if (query.includes("service") || query.includes("website") || query.includes("app") || query.includes("marketing")) {
    return "Subham offers website development, website redesign, e-commerce development, app development and digital marketing services.";
  }

  if (query.includes("contact") || query.includes("email") || query.includes("phone")) {
    return "You can contact Subham at subhamshaktisingh@gmail.com or call +91 8249194885. Visit the Contact section to send a project inquiry.";
  }

  return "That's an interesting question! I can tell you about Subham, his skills, projects, services and contact details. Try one of the quick questions below.";
};

function ChatbotWindow({ isOpen, onClose }: ChatbotWindowProps) {
  const [input, setInput] = useState("");

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 1,
      sender: "bot",
      text: "Hey there! 👋 I'm MR.SSS, Subham's personal AI assistant. Ask me anything about Subham, his work, projects or services!",
    },
  ]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const question = input.trim();
    if (!question) return;

    const userMessage: ChatMessage = {
      id: Date.now(),
      sender: "user",
      text: question,
    };

    const botMessage: ChatMessage = {
      id: Date.now() + 1,
      sender: "bot",
      text: getBotReply(question),
    };

    setMessages((previous) => [...previous, userMessage, botMessage]);
    setInput("");
  };

  const handleQuickQuestion = (question: string) => {
    const userMessage: ChatMessage = {
      id: Date.now(),
      sender: "user",
      text: question,
    };

    const botMessage: ChatMessage = {
      id: Date.now() + 1,
      sender: "bot",
      text: getBotReply(question),
    };

    setMessages((previous) => [...previous, userMessage, botMessage]);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="chatbot-window"
          initial={{ opacity: 0, y: 30, scale: 0.92 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30, scale: 0.92 }}
          transition={{ duration: 0.25 }}
        >
          <div className="chatbot-header">
            <div className="chatbot-profile">
              <div className="chatbot-avatar">
                <Bot size={23} />
                <span />
              </div>

              <div>
                <h3>MR.SSS</h3>
                <p>
                  <span /> AI PERSONAL ASSISTANT
                </p>
              </div>
            </div>

            <button
              type="button"
              className="chatbot-minimize"
              onClick={onClose}
              aria-label="Minimize chatbot"
            >
              <Minimize2 size={19} />
            </button>
          </div>

          <div className="chatbot-welcome">
            <Sparkles size={15} />
            <span>WELCOME TO SUBHAM.DEV</span>
          </div>

          <div className="chatbot-messages">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`chatbot-message ${message.sender}`}
              >
                <div className="chatbot-message-avatar">
                  {message.sender === "bot" ? (
                    <Bot size={16} />
                  ) : (
                    <User size={16} />
                  )}
                </div>

                <div className="chatbot-message-content">
                  <span>
                    {message.sender === "bot" ? "MR.SSS" : "YOU"}
                  </span>
                  <p>{message.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="chatbot-quick-questions">
            <span>QUICK QUESTIONS</span>

            <div>
              {quickQuestions.map((question) => (
                <button
                  type="button"
                  key={question}
                  onClick={() => handleQuickQuestion(question)}
                >
                  {question}
                </button>
              ))}
            </div>
          </div>

          <form className="chatbot-input-area" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Ask MR.SSS anything..."
              value={input}
              onChange={(event) => setInput(event.target.value)}
              aria-label="Message MR.SSS"
            />

            <button
              type="submit"
              disabled={!input.trim()}
              aria-label="Send message"
            >
              <Send size={18} />
            </button>
          </form>

          <div className="chatbot-footer">
            <Sparkles size={12} />
            POWERED BY SUBHAM.DEV
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default ChatbotWindow;
