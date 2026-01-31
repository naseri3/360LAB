import { useParams, useNavigate } from "react-router-dom";

const characters = [
  { id: 1, name: "NEON", role: "SYSTEM CORE" },
  { id: 2, name: "PHANTOM", role: "STEALTH" },
  { id: 3, name: "SOLAR", role: "ENERGY" },
  { id: 4, name: "NOVA", role: "CONTROL" },
  { id: 5, name: "VOID", role: "CHAOS" },
  { id: 6, name: "VOID", role: "CHAOS" },
];

export default function CharacterProfile() {
  const { id } = useParams();
  const navigate = useNavigate();

  const character = characters.find(
    (c) => c.id === Number(id)
  );

  if (!character) {
    return <div>Character not found</div>;
  }

  return (
    <section className="character-profile">
      <button onClick={() => navigate(-1)}>← Back</button>

      <h1>{character.name}</h1>
      <p>{character.role}</p>

      {/* 나중에 여기 스탯 / 설명 / 이미지 */}
    </section>
  );
}
