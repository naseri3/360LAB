import { useEffect, useRef, useState } from "react";
import CharacterCard from "./CharacterCard";
import "./characterSelect.css";

// images
import sophia from "../../assets/images/sophia_01.jpg";
import aespa from "../../assets/images/aespa_main_02.jpg";
import vnu from "../../assets/images/vnu-main.jpg";

const characters = [
  { id: "sophia", name: "SOPHIA", role: "SYSTEM CORE", image: sophia },
  { id: "aespa", name: "AESPA", role: "STEALTH", image: aespa },
  { id: "vnu", name: "V&N", role: "ENERGY", image: vnu },
];

export default function CharacterSelect({ onEnterCharacter }) {
  const [visible, setVisible] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [scrollDir, setScrollDir] = useState("down");

  const sectionRef = useRef(null);

  /* ===============================
     1️⃣ 스크롤 방향 감지
  =============================== */
  useEffect(() => {
    let lastY = window.scrollY;

    const handleScroll = () => {
      const currentY = window.scrollY;

      if (currentY > lastY) {
        setScrollDir("down");
      } else {
        setScrollDir("up");
      }

      lastY = currentY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ===============================
     2️⃣ IntersectionObserver
  =============================== */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`character-select ${
        visible ? "show" : "hide"
      } ${scrollDir}`}
      onClick={() => setSelectedId(null)}
    >
      <h2 className="character-title">CHARACTER SELECT</h2>

      <div className="character-stage">
        <div className="character-fan">
          {characters.map((c, i) => {
            const isSelected = selectedId === c.id;

            return (
              <CharacterCard
                key={c.id}
                character={c}
                index={i}
                totalCount={characters.length}
                isSelected={isSelected}
                onClick={() => {
                  if (isSelected) {
                    onEnterCharacter(c.id);
                    return;
                  }
                  setSelectedId(c.id);
                }}
                style={
                  isSelected
                    ? {
                        "--x": "0px",
                        "--rotate": "0deg",
                        "--baseY": "0px",
                      }
                    : {}
                }
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}