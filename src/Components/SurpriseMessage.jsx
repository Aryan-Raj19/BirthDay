import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "../Style/SurpriseMessage.css";

const messages = [
  "You make my heart race every time I see you.",
  "I wish I could hold you forever.",
  "Every moment with you feels like magic.",
  "You're the reason behind my smile.",
  "I can't stop thinking about you.",
  "You make my world feel complete.",
];

const getRandomPosition = () => {
  const x = Math.random() * 70 + 10; 
  const y = Math.random() * 60 + 10; 
  return { x, y };
};

const SurpriseMessage = () => {
  const [displayedMessages, setDisplayedMessages] = useState([]);
  const [showButton, setShowButton] = useState(true);

  useEffect(() => {
    const shuffledMessages = messages
      .sort(() => 0.5 - Math.random())
      .slice(0, 6);
    const newMessages = shuffledMessages.map((msg) => ({
      text: msg,
      position: getRandomPosition(),
    }));
    setDisplayedMessages(newMessages);
  }, []);

  const handleNextMessage = () => {
    setShowButton(false);
  };

  return (
    <div className="relative w-full h-[500px] bg-[#ffddc0] rounded-xl shadow-md overflow-hidden">
      {displayedMessages.map((msg, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: 1,
            scale: 1,
            x: `${msg.position.x}%`,
            y: `${msg.position.y}%`,
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className={`absolute p-4 rounded-lg shadow-md border ${
            showButton
              ? "bg-[#ffddc0] text-[#590016] border-[#590016]"
              : "bg-transparent text-[#ffddc0] border-[#ffddc0]"
          } animate-beat`}
          style={{ fontFamily: "Dosis, sans-serif", maxWidth: "200px" }}
        >
          {msg.text}
        </motion.div>
      ))}

      {showButton && (
        <motion.button
          onClick={handleNextMessage}
          initial={{ scale: 0.9 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-[#590016] text-[#ffddc0] px-4 py-2 rounded-md border border-[#ffddc0] hover:bg-[#4c0013] hover:scale-101 transition duration-300"
        >
          Next Message
        </motion.button>
      )}
    </div>
  );
};

export default SurpriseMessage;
