import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FallingStarsOrHearts from "./FallingStarsOrHearts";

function Outro({ onComplete }) {
  const [chats, setChats] = useState(
    `I don't know if I'm a good poet or not.`
  );

  const messages = [
    "I don't know if I'm a good poet or not.",
    "But I know I'm a good lover.",
    "And beyond these poems,",
    "I want to say something from my heart.",
    "I've told you why I love you, when I fell in love with you,",
    "But today, I want to tell you why I can't stop loving you.",
    "Honestly, even I don't know.",
    "I guess there's something inside me,",
    "That’s always drawn to you,",
    "That can't stop thinking about you,",
    "That can't stop loving you.",
    "And that feeling holds me back.",
    "It's not like I haven't tried,",
    "But my love overrules my will,",
    "And I'm perfectly fine with that.",
    "I guess that's a lot of talking…",
    "If I keep going like this,",
    "The slides will never end.",
    "With that said, it's time to say goodbye...",
    "I hope you liked it.",
    "And I hope I didn’t make you cry.",
    "Once again,",
    "Happy Birthday, Hazel.",
    "Wait… there's one more thing…",
  ];

  const [showHearts, setShowHearts] = useState(true);

  const handleNextMessage = () => {
    const nextIndex = messages.indexOf(chats) + 1;
    if (nextIndex < messages.length) {
      setChats(messages[nextIndex]);
    } else {
      onComplete();
    }
  };

  return (
    <>
      <FallingStarsOrHearts showHearts={showHearts} />

      <div className="relative flex justify-center items-center h-170 overflow-hidden bg-[#ffddc0]">
        <div className="container bg-[#ffddc0] p-4 m-4 max-w-2xl mx-auto rounded-2xl">
          <AnimatePresence mode="wait">
            <motion.p
              key={chats}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className={`text-[#590016] text-3xl font-bold text-center`}
              style={{ fontFamily: "Dancing Script, cursive" }}
            >
              {chats}
            </motion.p>
          </AnimatePresence>

          <div className="flex justify-center gap-4 mt-4">
            <button
              onClick={handleNextMessage}
              className="px-4 py-2 bg-[#590016] text-[#ffddc0] rounded-md hover:bg-[#4c0013] hover:scale-105 transition cursor-pointer"
            >
              Next Message
            </button>

            <button
              onClick={() => setShowHearts(!showHearts)}
              className="px-4 py-2 bg-[#590016] text-[#ffddc0] rounded-md hover:bg-[#4c0013] hover:scale-105 transition cursor-pointer"
            >
              {showHearts ? "Switch to Stars" : "Switch to Hearts"}
            </button>
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 w-[100vw] h-12 bg-[#4c0013] z-10"></div>
    </>
  );
}

export default Outro;
