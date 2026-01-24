import { useEffect, useRef, useState } from "react";
import CharacterCard from "./CharacterCard";
import "./characterSelect.css";

const characters = [
  { id: 1, name: "NEON", role: "SYSTEM CORE" },
  { id: 2, name: "PHANTOM", role: "STEALTH" },
  { id: 3, name: "SOLAR", role: "ENERGY" },
  { id: 4, name: "NOVA", role: "CONTROL" },
  { id: 5, name: "VOID", role: "CHAOS" },
];

export default function CharacterSelect() {
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

      {/* 🔥 배경 클릭 시 선택 해제 */}
      <div
        className="character-stage"
        onClick={() => setSelectedId(null)}
      >
        <div className="character-fan">
          {characters.map((c) => (
            <CharacterCard
              key={c.id}
              character={c}
              isSelected={selectedId === c.id}
              onClick={() =>
                setSelectedId((prev) =>
                  prev === c.id ? null : c.id
                )
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}
