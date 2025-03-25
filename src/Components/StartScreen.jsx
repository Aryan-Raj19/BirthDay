import React from "react";
import "../Style/StartScreen.css";

const StartScreen = ({ onStart }) => {
  return (
    <div className="flex justify-center items-center">
      {/* Title */}
      <div
        className="fixed bg-[#590016] bg-opacity-70 z-60 text-[#ffddc0] font-bold mt-88 text-6xl animate-birthdayText"
        style={{ fontFamily: "Shadows Into Light, cursive" }}
      >
        <p>BIRTHDAY SURPRISE FOR HAZEL</p>
      </div>

      {/* Start Button */}
      <div className="fixed inset-0 flex justify-center items-center bg-[#590016] bg-opacity-70 z-50">
        <button
          onClick={onStart}
          className="bg-[#590016] text-[#ffddc0] px-6 py-3 rounded-lg font-bold text-lg shadow-lg hover:bg-[#4c0013] transition duration-300 border border-[#ffddc0] cursor-pointer"
        >
          Start Experience
        </button>
      </div>
    </div>
  );
};

export default StartScreen;
