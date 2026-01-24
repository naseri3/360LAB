export default function CharacterCard({
  character,
  isSelected,
  onClick,
}) {
  return (
    <div
      className={`character-card ${isSelected ? "selected" : ""}`}
      onClick={(e) => {
        e.stopPropagation(); // 🔥 배경 클릭 방지
        onClick();
      }}
    >
      <h3 className="character-name">{character.name}</h3>
      <p className="character-role">{character.role}</p>
    </div>
  );
}
