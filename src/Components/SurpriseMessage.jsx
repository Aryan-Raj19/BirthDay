import React, { useState } from "react";
import { motion } from "framer-motion";

const messages = [
  "You make my heart race every time I see you.",
  "I wish I could hold you forever.",
  "Every moment with you feels like magic.",
  "You're the reason behind my smile.",
  "I can't stop thinking about you.",
  "You make my world feel complete.",
];

const fixedPositions = [
  { x: 800, y: 50 }, //1
  { x: 250, y: 362 }, //2
  { x: 425, y: 550 }, //3
  { x: 50, y: 50 }, //4
  { x: 600, y: 362 }, //5
  { x: 425, y: 176 }, //6
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
    <div className="relative w-[85vw] h-[85vh] rounded-xl">
      {/* Display all previous messages at their fixed positions */}
      {displayedMessages.map((msg, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: 1,
            scale: 1,
            x: `${msg.position.x}px`,
            y: `${msg.position.y}px`,
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="absolute p-4 rounded-lg text-2xl text-[#ffddc0]"
          style={{
            fontFamily: "Dosis, sans-serif",
            width: "350px",
            height: "150px",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
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
            x: `${fixedPositions[currentMessageIndex].x}px`,
            y: `${fixedPositions[currentMessageIndex].y}px`,
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="absolute p-4 rounded-lg shadow-md border text-2xl bg-[#ffddc0] text-[#590016] border-[#590016]"
          style={{
            fontFamily: "Dosis, sans-serif",
            width: "350px",
            height: "150px",
          }}
        >
          <p>{messages[currentMessageIndex]}</p>
          <motion.button
            onClick={handleNextMessage}
            initial={{ scale: 0.9 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            className="mt-4 bg-[#590016] text-[#ffddc0] px-4 py-2 rounded-md border border-[#ffddc0] hover:bg-[#4c0013] hover:scale-101 transition duration-300"
          >
            Next Message
          </motion.button>
        </motion.div>
      )}
    </div>
  );
};

export default SurpriseMessage;
