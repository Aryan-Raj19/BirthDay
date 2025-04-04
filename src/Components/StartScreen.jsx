import React from "react";
import "../Style/StartScreen.css";

const StartScreen = ({ onStart }) => {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gradient-to-br from-[#590016] to-[#4c0013] z-50 transition duration-500">
      {/* Title */}
      <div
        className="absolute top-24 md:top-32 text-center bg-[#590016] bg-opacity-70 z-60 text-[#ffddc0] font-bold text-4xl md:text-6xl animate-birthdayText p-2 md:p-4"
        style={{ fontFamily: "Shadows Into Light, cursive" }}
      >
        <p>BIRTHDAY SURPRISE FOR HAZEL</p>
      </div>

      {/* Start Button */}
      <div className="fixed inset-0 flex justify-center items-center bg-[#590016] bg-opacity-70 z-50">
        <button
          onClick={onStart}
          className="bg-[#590016] text-[#ffddc0] px-4 md:px-6 py-2 md:py-3 rounded-lg font-bold text-base md:text-lg shadow-lg hover:bg-[#4c0013] transition duration-300 border border-[#ffddc0] cursor-pointer hover:shadow-[0_0_12px_#ffddc0] pulse"
        >
          Start Experience
        </button>
      </div>
    </div>
  );
};

export default StartScreen;
