import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Confetti from "react-confetti";

function IntroCard({ onComplete }) {
  const [chats, setChats] = useState(`Hi... Jaag rhi h?`);
  const [showConfetti, setShowConfetti] = useState(false);

  const messages = [
    `Hi... Jaag rhi h?`,
    `Kya kar rahi h?`,
    `Probably these are the messages that\nI've sent you the most...`,
    `But today, I want to say something different.`,
    `I love you.`,
    `Haha, just kidding… or maybe not 🙃`,
    `Anyway, if you're seeing this message...`,
    `That means it's your birthday!`,
    `And I want to wish you a very, very happy birthday,`,
    `My love. ❤️`,
    `I hope you have a beautiful day ahead,\nfilled with joy and love.`,
    `By the way... I've written some poems for you.`,
    `A little sensual, a little romantic… and very special.`,
    `I hope they make you smile.`,
  ];

  const handleNextMessage = () => {
    const nextIndex = (messages.indexOf(chats) + 1) % messages.length;

    if (messages[nextIndex] === `That means it's your birthday!`) {
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 17000); 
    }

    if (nextIndex === 0) {
      onComplete(); 
    } else {
      setChats(messages[nextIndex]);
    }
  };

  return (
    <div className="box flex justify-center items-center h-100">
      {showConfetti && <Confetti />}
      <div className="container flex justify-center gap-10 bg-[#ffddc0] p-6 m-4 max-w-2xl h-50 mx-auto rounded-2xl">
        <AnimatePresence mode="wait">
          <motion.p
            key={chats}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-[#590016] text-3xl font-bold"
            style={{ fontFamily: "Dancing Script, cursive" }}
          >
            {chats}
          </motion.p>
        </AnimatePresence>

        <button
          onClick={handleNextMessage}
          className="fixed mt-20 px-4 py-2 bg-[#590016] text-[#ffddc0] rounded-md hover:bg-[#4c0013] hover:scale-101 transition cursor-pointer"
        >
          Next Message
        </button>
      </div>
    </div>
  );
}

export default IntroCard;
