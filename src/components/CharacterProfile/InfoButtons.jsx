export default function InfoButtons({ onOpen }) {
    return (
      <div className="info-buttons">
        <button onClick={() => onOpen("skills")}>스킬</button>
        <button onClick={() => onOpen("desc")}>설명</button>
        <button onClick={() => onOpen("detail")}>상세보기</button>
      </div>
    );
  }