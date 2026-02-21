export default function InfoModal({ type, character, onClose }) {
    return (
      <div className="modal">
        <div className="modal-content">
          <button onClick={onClose}>닫기</button>
  
          {type === "skills" && (
            <ul>
              {character.skills.map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </ul>
          )}
  
          {type === "desc" && <p>{character.description}</p>}
  
          {type === "detail" && <p>상세 이미지 영역</p>}
        </div>
      </div>
    );
  }