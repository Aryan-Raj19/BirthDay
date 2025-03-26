import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Confetti from "react-confetti";

function IntroCard({ onComplete }) {
  const [chats, setChats] = useState(
    `As I'm not good in handcrafts and making diy gifts,`
  );
  const [showConfetti, setShowConfetti] = useState(false);

  const messages = [
    `As I'm not good in handcrafts and making diy gifts,`,
    `I thought of making something special for you.`,
    `Hi... Jaag rhi h?`,
    `Kya kar rahi h?`,
    `Probably these are the messages that\nI've sent you the most...`,
    `But today, I want to say something different.`,
    `I love you.`,
    `Haha, just kidding… or maybe not 🙃`,
    `Anyway, if you're seeing this message...`,
    `That means it's your birthday!`,
    `And I want to wish you a very, very happy birthday,`,
    `I hope you have a beautiful day ahead, filled with joy and love.`,
    `I hope your day is as beautiful and special as you are.`,
    `I hope you get everything you wish for, and more.`,
    `Okay, so enough of the birthday wishes. 🙃`,
    `And this boring template.`,
    `Let's make this a bit more interesting.`,
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
    <div className="flex justify-center items-center h-100 px-4">
      {showConfetti && <Confetti />}
      <div className="flex flex-col justify-center gap-6 bg-[#ffddc0] p-6 md:p-8 max-w-2xl w-full rounded-2xl shadow-lg">
        <AnimatePresence mode="wait">
          <motion.p
            key={chats}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-[#590016] text-xl sm:text-2xl md:text-3xl font-bold text-center leading-relaxed"
            style={{ fontFamily: "Dancing Script, cursive" }}
          >
            {chats}
          </motion.p>
        </AnimatePresence>

        <button
          onClick={handleNextMessage}
          className="mt-4 mx-auto px-5 py-2 bg-[#590016] text-[#ffddc0] rounded-md hover:bg-[#4c0013] hover:scale-105 transition duration-300 text-sm sm:text-base md:text-lg"
        >
          Next Message
        </button>
      </div>
    </div>
  );
}

export default IntroCard;
