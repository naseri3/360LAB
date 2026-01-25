export default function CharacterCard({
  character,
  index,
  totalCount,
  isSelected,
  onClick,
}) {
  const center = (totalCount - 1) / 2;
  const offset = index - center;
  const abs = Math.abs(offset);

  /* 🔧 여기 숫자만 바꾸면 전체 연출 변경 */
  const spreadX = 95;    // 좌우 간격
  const spreadRot = 12;  // 회전 각도
  const spreadY = 30;    // 깊이감(Y)

  const style = {
    "--x": `${offset * spreadX}px`,
    "--rotate": `${offset * spreadRot}deg`,
    "--baseY": `${abs * spreadY}px`,
    zIndex: isSelected ? 20 : 10 - abs,
  };

  return (
    <div
      className={`character-card ${isSelected ? "selected" : ""}`}
      style={style}
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
