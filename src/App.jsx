import { useState, useEffect, useRef } from "react";
import "./App.css";
import IntroCard from "./Components/IntroCard";
import Poems from "./Components/Poems";
import Outro from "./Components/Outro";
import { Volume2, VolumeX } from "lucide-react"; // For mute/unmute icon

function App() {
  const [showPoems, setShowPoems] = useState(false);
  const [showOutro, setShowOutro] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isStarted, setIsStarted] = useState(false);
  const bgMusic = useRef(new Audio("/videoplayback.m4a")); // Use `useRef` to keep audio instance stable

  useEffect(() => {
    bgMusic.current.loop = true;
    bgMusic.current.volume = 0.5;
    bgMusic.current.muted = isMuted;
  }, [isMuted]);

  const handleToggleMute = () => {
    bgMusic.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleStart = () => {
    bgMusic.current
      .play()
      .then(() => setIsStarted(true))
      .catch((e) => console.log("Autoplay blocked:", e));
  };

  const handleIntroComplete = () => {
    setShowPoems(true);
  };

  const handlePoemComplete = () => {
    setShowOutro(true);
  };

  return (
    <>
      {/* Start Experience Button */}

      {!isStarted && (
        <div className="flex justify-center items-center">
          <div
            className="fixed bg-[#590016]  bg-opacity-70 z-60 text-[#ffddc0] font-bold mt-88 text-6xl animate-birthdayText"
            style={{ fontFamily: "Shadows Into Light, cursive" }}
          >
            <p>BIRTHDAY SURPRISE FOR HAZEL</p>
          </div>

          <div className="fixed inset-0 flex justify-center items-center bg-[#590016]  bg-opacity-70 z-50">
            <button
              onClick={handleStart}
              className="bg-[#590016] text-[#ffddc0] px-6 py-3 rounded-lg font-bold text-lg shadow-lg hover:bg-[#4c0013] transition duration-300 border border-[#ffddc0] cursor-pointer"
            >
              Start Experience
            </button>
          </div>
        </div>
      )}

      {/* Mute/Unmute Button */}

      {isStarted && (
        <button
          onClick={handleToggleMute}
          className="fixed top-4 right-4 z-50 bg-[#590016] text-[#ffddc0] p-2 rounded-full shadow-md hover:bg-[#4c0013] transition border border-[#ffddc0] cursor-pointer"
          aria-label={isMuted ? "Unmute" : "Mute"}
          title={isMuted ? "Unmute" : "Mute"}
        >
          {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
        </button>
      )}

      {/* Components */}

      {!showPoems && !showOutro && (
        <IntroCard onComplete={handleIntroComplete} />
      )}
      {showPoems && !showOutro && <Poems onComplete={handlePoemComplete} />}
      {showOutro && <Outro />}
    </>
  );
}

export default App;
