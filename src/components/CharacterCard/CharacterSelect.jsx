import { useEffect, useRef, useState } from "react";
import CharacterCard from "./CharacterCard";
import "./characterSelect.css";
// images
import sophia from "../../assets/images/sophia_01.jpg";
import aespa from "../../assets/images/aespa_main_02.jpg";
import vnu from "../../assets/images/vnu-main.jpg";

const characters = [
  {
    id: 1,
    name: "SOPHIA",
    role: "SYSTEM CORE",
    image: sophia,
  },
  {
    id: 2,
    name: "AESPA",
    role: "STEALTH",
    image: aespa,
  },
  {
    id: 3,
    name: "V&N",
    role: "ENERGY",
    image: vnu,
  },
  // {
  //   id: 4,
  //   name: "NOVA",
  //   role: "CONTROL",
  //   image: "/assets/characters/nova.png",
  // },
  // {
  //   id: 5,
  //   name: "VOID",
  //   role: "CHAOS",
  //   image: "/assets/characters/void.png",
  // },
  // {
  //   id: 6,
  //   name: "VOID",
  //   role: "CHAOS",
  //   image: "/assets/characters/void.png",
  // },
];


export default function CharacterSelect({ onEnterCharacter }) {
  const [visible, setVisible] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
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
      className={`character-select ${visible ? "show" : ""}`} onClick={() => setSelectedId(null)}
    >
      <h2 className="character-title">CHARACTER SELECT</h2>

      {/* 배경 클릭 → 선택 해제 */}
      <div
        className="character-stage"
        onClick={() => setSelectedId(null)}
      >
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
                  // 🔥 이미 선택된 카드 → 프로필 진입
                  if (isSelected) {
                    onEnterCharacter(c.id);
                    return;
                  }

                  // 🔥 선택 안 된 카드 → 선택만
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
