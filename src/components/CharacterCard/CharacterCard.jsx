export default function CharacterCard({
  character,
  index,
  totalCount,
  isSelected,
  onClick,
  style = {},
}) {
  const spreadX = 95;
  const spreadRot = 12;
  const spreadY = 30;

  const center = (totalCount - 1) / 2;
  const offset = index - center;
  const abs = Math.abs(offset);

  const baseZIndex = character.id * 10;

  const computedStyle = {
    "--x": `${offset * spreadX}px`,
    "--rotate": `${offset * spreadRot}deg`,
    "--baseY": `${abs * spreadY}px`,
    zIndex: isSelected ? 1000 : baseZIndex,

    /* 🔥 background 주입 */
    backgroundImage: `url(${character.image})`,
  };

  return (
    <div
      className={`character-card ${isSelected ? "selected" : ""}`}
      style={{ ...computedStyle, ...style }}
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
    >
      {/* 텍스트 overlay */}
      <div className="character-card__info">
        <h3 className="character-name">
          {character.name}
        </h3>
        <p className="character-role">
          {character.role}
        </p>
      </div>
    </div>
  );
}
