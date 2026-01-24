import { useEffect, useState } from "react";
import "./intro.css";

function Intro() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const maxScroll = 500;
      const value = Math.min(window.scrollY / maxScroll, 1);
      setProgress(value);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      id="intro"
      className={`intro-neon ${progress >= 1 ? "intro--off" : ""}`}
      style={{
        transform: `translate(-50%, -50%) scale(${1 - progress * 0.6})`,
        opacity: 1 - progress,
      }}
    >
      <span className="neon-line">SYSTEM BOOTING</span>
      <br />
      <span className="neon-line neon-delay">360LAB INITIALIZED</span>
    </div>
  );
}

export default Intro;
