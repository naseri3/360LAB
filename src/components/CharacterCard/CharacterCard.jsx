import { useState } from "react";
import CharacterCard from "./CharacterCard";
import "./characterSelect.css";

const characters = [
  { id: 1, name: "NEON", role: "SYSTEM CORE" },
  { id: 2, name: "PHANTOM", role: "STEALTH" },
  { id: 3, name: "SOLAR", role: "ENERGY" },
  { id: 4, name: "NOVA", role: "CONTROL" },
  { id: 5, name: "VOID", role: "CHAOS" },
];

function CharacterSelect() {
  const [hovered, setHovered] = useState(null);
  const [selected, setSelected] = useState(null);

  return (
    <section className="character-select">
      <h2 className="character-title">CHARACTER SELECT</h2>

      <div className="character-stage">
        <div className="character-fan">
          {characters.map((c, index) => (
            <CharacterCard
              key={c.id}
              character={c}
              index={index}
              isHovered={hovered === index}
              isSelected={selected === index}
              isDimmed={selected !== null && selected !== index}
              onHover={() => setHovered(index)}
              onLeave={() => setHovered(null)}
              onSelect={() => setSelected(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default CharacterSelect;
