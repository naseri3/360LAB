import "./intro.css";
import { useEffect, useState } from "react";

function Intro() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const maxScroll = 600;
      const scrollY = window.scrollY;
      const value = Math.min(Math.max(scrollY / maxScroll, 0), 1);
      setProgress(value);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      id="intro"
      className={progress >= 1 ? "intro--off" : ""}
      style={{
        transform: `translate(-50%, -50%) scale(${1 - progress * 0.6})`,
        opacity: 1 - progress,
      }}
    >
      SYSTEM BOOTING
      <br />
      360LAB INITIALIZED
    </div>
  );
}

export default Intro;
