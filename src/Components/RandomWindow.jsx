import { useState } from "react";

const RandomWindow = ({ onComplete }) => {
  const [chats, setChats] = useState(
    `Ok, So from intresting I meant just to move this window around.`
  );
  const messages = [
    `Ok, So from intresting I meant just to move this window around.`,
    `But hey even this was not that easy.`,
    `I had to write bunch of codes to make this work.`,
    `But I'm happy that it worked.`,
    `And I hope you liked it.`,
    `By the way... I've written some poems for you.`,
    `A little sensual, a little romantic… and very special.`,
    `I hope they make you smile.`,
  ];

  const [position, setPosition] = useState({
    top: Math.random() * window.innerHeight * 0.65,
    left: Math.random() * window.innerWidth * 0.65,
  });

  const handleNext = () => {
    const nextIndex = (messages.indexOf(chats) + 1) % messages.length;

    if (nextIndex === 0) {
      onComplete();
    } else {
      setChats(messages[nextIndex]);
    }

    setPosition({
      top: Math.random() * window.innerHeight * 0.65,
      left: Math.random() * window.innerWidth * 0.65,
    });
  };

  return (
    <div>
      <div
        className="absolute bg-[#ffddc0] text-[#590016] p-6 rounded-lg shadow-lg border border-[#590016] transition-transform duration-300"
        style={{
          top: `${position.top}px`,
          left: `${position.left}px`,
          position: "absolute",
          width: "450px",
          height: "220px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          gap: "16px",
        }}
      >
        <p
          className="text-3xl font-bold"
          style={{ fontFamily: "Dancing Script, cursive" }}
        >
          {chats}
        </p>

        <button
          onClick={handleNext}
          className="bg-[#590016] text-[#ffddc0] px-6 py-3 rounded-lg font-bold text-lg shadow-lg hover:bg-[#4c0013] transition duration-300 border border-[#ffddc0] cursor-pointer"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default RandomWindow;
