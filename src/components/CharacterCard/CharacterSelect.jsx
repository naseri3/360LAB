import { useEffect, useRef, useState } from "react";
import CharacterCard from "./CharacterCard";
import "./characterSelect.css";

const characters = [
  { id: 1, name: "NEON", role: "SYSTEM CORE" },
  { id: 2, name: "PHANTOM", role: "STEALTH" },
  { id: 3, name: "SOLAR", role: "ENERGY" },
  { id: 4, name: "NOVA", role: "CONTROL" },
  { id: 5, name: "VOID", role: "CHAOS" },
  { id: 6, name: "VOID", role: "CHAOS" },
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
      className={`character-select ${visible ? "show" : ""}`}
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
