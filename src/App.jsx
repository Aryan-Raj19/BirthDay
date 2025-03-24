import { useState, useEffect, useRef } from "react";
import "./App.css";
import IntroCard from "./Components/IntroCard";
import Poems from "./Components/Poems";
import Outro from "./Components/Outro";
import { Volume2, VolumeX } from "lucide-react";
import StartScreen from "./Components/StartScreen"; // ✅ New component

function App() {
  const [showPoems, setShowPoems] = useState(false);
  const [showOutro, setShowOutro] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isStarted, setIsStarted] = useState(false);
  const bgMusic = useRef(new Audio("/videoplayback.m4a"));

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
      {/* Start Screen */}
      {!isStarted && <StartScreen onStart={handleStart} />}

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
