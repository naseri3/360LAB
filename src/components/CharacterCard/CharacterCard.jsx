import "./characterCard.css";

function CharacterCard({
  character,
  offset,
  isHovered,
  isSelected,
  isDimmed,
  onHover,
  onLeave,
  onSelect,
}) {
  /**
   * 기본 부채꼴 위치 계산
   */
  const baseX = offset * 100;               // 좌우 퍼짐
  const baseY = Math.abs(offset) * 20;      // 바깥 카드 아래로
  const baseRotate = offset * 10;           // 부채꼴 각도
  const baseScale = offset === 0 ? 1.05 : 1;

  /**
   * hover 연출
   */
  const hoverLift = isHovered ? -50 : 0;     // 위로 들림
  const hoverScale = isHovered ? 1.15 : 1;

  /**
   * 선택 상태 (나중에 click 확장용)
   */
  const selectedScale = isSelected ? 1.5 : 1;
  const selectedX = isSelected ? 0 : baseX;
  const selectedY = isSelected ? -40 : baseY;
  const selectedRotate = isSelected ? 0 : baseRotate;

  /**
   * 최종 스타일
   */
  const style = {
    transform: `
      translateX(${selectedX}px)
      translateY(${selectedY + hoverLift}px)
      rotate(${selectedRotate}deg)
      scale(${baseScale * hoverScale * selectedScale})
    `,
    opacity: isDimmed ? 0.2 : 1,
    zIndex: isHovered
      ? 30
      : isSelected
      ? 20
      : 10 - Math.abs(offset),
  };

  return (
    <button
      type="button"
      className="character-card"
      style={style}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      onClick={onSelect}
    >
      <div className="character-card__inner">
        <h3 className="character-card__name">{character.name}</h3>
        <p className="character-card__role">{character.role}</p>
      </div>
    </button>
  );
}

export default CharacterCard;
