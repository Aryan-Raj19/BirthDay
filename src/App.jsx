import { useState, useEffect, useRef } from "react";
import "./App.css";
import IntroCard from "./Components/IntroCard";
import Poems from "./Components/Poems";
import Outro from "./Components/Outro";
import StartScreen from "./Components/StartScreen";
import RandomWindow from "./Components/RandomWindow";
import SurpriseMessage from "./Components/SurpriseMessage";
import { Volume2, VolumeX } from "lucide-react";

function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [showPoems, setShowPoems] = useState(false);
  const [showOutro, setShowOutro] = useState(false);
  const [showMessages, setShowMessages] = useState(false);
  const [showRandomWindow, setShowRandomWindow] = useState(false);
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
    setShowIntro(false);
    setShowRandomWindow(true);
  };

  const handleRandomWindowComplete = () => {
    setShowRandomWindow(false);
    setShowPoems(true);
  };

  const handlePoemComplete = () => {
    setShowPoems(false);
    setShowOutro(true);
  };

  const handleOutroComplete = () => {
    setShowOutro(false);
    setShowMessages(true);
  };

  return (
    <>
      {/* Mute/Unmute button */}
      {isStarted && (
        <button
          onClick={handleToggleMute}
          className="fixed top-4 right-4 z-50 bg-[#590016] text-[#ffddc0] p-2 rounded-full shadow-md hover:bg-[#4c0013] transition border border-[#ffddc0] cursor-pointer"
        >
          {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
        </button>
      )}

      {/* Components */}
      {!isStarted && <StartScreen onStart={handleStart} />}
      {showIntro && !showPoems && !showOutro && !showRandomWindow && (
        <IntroCard onComplete={handleIntroComplete} />
      )}
      {showRandomWindow && (
        <RandomWindow onComplete={handleRandomWindowComplete} />
      )}
      {showPoems && !showOutro && <Poems onComplete={handlePoemComplete} />}
      {showOutro && <Outro onComplete={handleOutroComplete} />}
      {showMessages && <SurpriseMessage />}
    </>
  );
}

export default App;
