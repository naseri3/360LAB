import { useMemo } from "react";
import CharacterCard from "./CharacterCard";
import "./characterSelect.css";

function CharacterSelect() {
  const characters = useMemo(
    () => [
      { id: "c1", name: "NEON", role: "SYSTEM CORE" },
      { id: "c2", name: "PHANTOM", role: "STEALTH" },
      { id: "c3", name: "SOLAR", role: "ENERGY" },
      { id: "c4", name: "NOVA", role: "CONTROL" },
      { id: "c5", name: "VOID", role: "CHAOS" },
    ],
    []
  );

  const center = (characters.length - 1) / 2;

  return (
    <section className="character-select">
      <h1>CHARACTER SELECT</h1>

      <div className="character-select__fan">
        {characters.map((character, index) => {
          const offset = index - center;

          return (
            <CharacterCard
              key={character.id}
              character={character}
              offset={offset}
            />
          );
        })}
      </div>
    </section>
  );
}

export default CharacterSelect;
