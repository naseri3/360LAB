import "./intro.css";
import { useEffect, useState } from "react";

function Intro() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const maxScroll = 600; // 스크롤 감도
      const scrollY = window.scrollY;

      const value = Math.min(Math.max(scrollY / maxScroll, 0), 1);
      setProgress(value);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        id="intro"
        className="flicker"
        style={{ transform: `translate(-50%, -50%) scale(${1 - progress * 0.6})`,
          opacity: 1 - progress,
        }}>
        SYSTEM BOOTING
        <br />
        360LAB INITIALIZED
      </div>

      {/* 스크롤 공간 */}
      <div style={{ height: "200vh" }} />
    </>
  );
}

export default Intro;
