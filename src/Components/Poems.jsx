import React, { useState } from "react";
import { motion } from "framer-motion";
import Rose from "./Rose";

const Poems = ({ onComplete }) => {
  const poems_texts = [
    `I desire to love you so fierce and raw,
    For you, I'd break my every law.
    
    From trailing kisses along your nape,
    Till I make your body shake.
    
    I will start where your soft toes meet,
    Until you ride me to your favorite beat.
    
    Is it too much to ask for a kiss so wet,
    A moment of passion I'll never forget?
    
    I long to linger between your thighs,
    To see the desires burn in your eyes.
    
    It is a fantasy to taste your kitty,
    And leave a red bite mark on your titty.
    
    I need to sniff every inch of yours,
    So that I can be your stallion, of course. 
    
    And don't you worry about future, my love,
    In the end we'll dance like two white doves.`,

    `I've dreamed of feeling your touch,
    But only if you want it as much.
     
    I'll look deeper in your eyes, before kissing,
    To lock that moment, forever glistening. 
    
    I wanna play with your soft, wild hair,
    While you melt in my arm like we're the perfect pair.
    
    I would love to sleep on your shoulder,
    And hide in your arms whenever it gets colder.
    
    I'll kneel down to kiss your hands,
    And sing the songs of your favorite bands.
    
    I really don't know how to cook,
    So to entertain you, I'll read your favorite book.
    
    I'll talk nonsense while resting in your lap,
    And in your triumphs, I'll be the first to clap.
    
    I just want to cuddle you whenever I'm alone,
    To soothe my fear and calm the unknown.`,

    `I really tried my best.
    Best to let things slip away.
    Away from my hands and imagination.
    Imagination of you and me, forever.
    Forever, the dream I chase.
    Chase of you and me, together.
    Together, to create memories.
    Memories to cherish in the future.
    Future, now a fading dream.
    Dream impossible to make "we."
    We are just you and I.
    I know my eyes are not hazel but.
    But all they want is you, HAZEL.`,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () =>
    setCurrentIndex((prevIndex) =>
      prevIndex === poems_texts.length - 1 ? 0 : prevIndex + 1
    );

  const handlePrev = () =>
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? poems_texts.length - 1 : prevIndex - 1
    );

  const handleNextMessage = () => {
    onComplete();
  };

  return (
    <>
      <div
        className="poemheading mb-5 font-bold text-2xl md:text-3xl text-[#ffddc0] text-center"
        style={{ fontFamily: "Shadows Into Light, cursive" }}
      >
        SOME LOVELY POEMS FOR YOU
      </div>

      <div className="relative flex justify-center items-center">
        {/* Left Rose */}
        <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2">
          <Rose />
        </div>

        <div className="relative w-[85%] md:w-[50%] sm:w-[40%] bg-[#ffddc0] bg-opacity-30 backdrop-blur-lg rounded-2xl shadow-xl overflow-hidden">
          <motion.div
            className="flex"
            initial={{ x: `${-currentIndex * 100}%` }}
            animate={{ x: `${-currentIndex * 100}%` }}
            transition={{
              duration: 0.6,
              ease: "easeInOut",
            }}
          >
            {poems_texts.map((poem, index) => (
              <motion.div
                key={index}
                className="min-w-full flex justify-center items-center px-6 md:px-16 py-6"
              >
                <motion.div
                  className="group w-full p-6 bg-[#fedec3e3] rounded-xl shadow-lg border border-[#4c0013]"
                  whileHover={{
                    rotate: [-3, 3, 0],
                    scale: 1.009,
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <p
                    className="text-[#590016] text-[.55rem] md:text-xl sm:text-xl font-semibold leading-relaxed text-center whitespace-pre-wrap"
                    style={{ fontFamily: "Dosis, sans-serif" }}
                  >
                    {poem}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-[#ffffff33] text-[#590016] p-3 md:p-4 rounded-full shadow-md border border-[#590016] backdrop-blur-md hover:bg-[#590016] hover:text-[#ffddc0] transition duration-300"
          >
            ❮
          </button>

          <button
            onClick={handleNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#ffffff33] text-[#590016] p-3 md:p-4 rounded-full shadow-md border border-[#590016] backdrop-blur-md hover:bg-[#590016] hover:text-[#ffddc0] transition duration-300"
          >
            ❯
          </button>
        </div>

        {/* Right Rose */}
        <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2">
          <Rose />
        </div>
      </div>

      {/* Next Tab Button */}
      {currentIndex === poems_texts.length - 1 && (
        <button
          onClick={handleNextMessage}
          className="mt-6 px-6 py-2 bg-[#590016] text-[#ffddc0] rounded-md hover:bg-[#4c0013] transition cursor-pointer border border-[#ffddc0]"
        >
          Next Tab
        </button>
      )}
    </>
  );
};

export default Poems;
