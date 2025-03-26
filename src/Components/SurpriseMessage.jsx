import React, { useState } from "react";
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

// Positions adjusted to viewport size for better responsiveness
const fixedPositions = [
  { x: "53vw", y: "5vh" },
  { x: "14vw", y: "45vh" },
  { x: "30vw", y: "65vh" },
  { x: "4vw", y: "5vh" },
  { x: "45vw", y: "45vh" },
  { x: "30vw", y: "25vh" },
];

const SurpriseMessage = () => {
  const [displayedMessages, setDisplayedMessages] = useState([]);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  const handleNextMessage = () => {
    if (currentMessageIndex < messages.length) {
      setDisplayedMessages((prev) => [
        ...prev,
        {
          text: messages[currentMessageIndex],
          position: fixedPositions[currentMessageIndex],
        },
      ]);
      setCurrentMessageIndex((prev) => prev + 1);
    }
  };

  return (
    <div className="relative w-[88vw] h-[88vh] rounded-xl overflow-hidden">
      {/* Display all previous messages */}
      {displayedMessages.map((msg, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: 1,
            scale: 1,
            x: msg.position.x,
            y: msg.position.y,
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="absolute p-4 rounded-lg text-[.8rem] md:text-2xl sm:text-2xl text-[#ffddc0] glow h-[10vh] w-[35vw] md:h-[15vh] md:w-[20vw] sm:h-[12vh] sm:w-[17vw]"
          style={{
            fontFamily: "Pacifico, cursive",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {msg.text}
        </motion.div>
      ))}

      {/* Current message window */}
      {currentMessageIndex < messages.length && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: 1,
            scale: 1,
            x: fixedPositions[currentMessageIndex].x,
            y: fixedPositions[currentMessageIndex].y,
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="absolute p-4 rounded-lg shadow-md border text-[.8rem] md:text-2xl sm:text-2xl bg-[#ffddc0] text-[#590016] border-[#590016] w-[35vw] md:h-[20vh] md:w-[20vw] sm:h-[17vh] sm:w-[17vw]"
          style={{
            fontFamily: "Pacifico, cursive",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p>{messages[currentMessageIndex]}</p>
          <motion.button
            onClick={handleNextMessage}
            initial={{ scale: 0.9 }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
            className="mt-4 bg-[#590016] text-[#ffddc0] px-4 py-2 rounded-md border border-[#ffddc0] hover:bg-[#4c0013] hover:scale-101 transition duration-300"
            style={{
              fontSize: "clamp(0.8rem, 1vw, 1rem)",
              padding: "clamp(0.5rem, 1vw, 0.75rem) clamp(1rem, 2vw, 1.5rem)",
              fontFamily: "Dosis, sans-serif",
            }}
          >
            Next Message
          </motion.button>
        </motion.div>
      )}
    </div>
  );
};

export default SurpriseMessage;
