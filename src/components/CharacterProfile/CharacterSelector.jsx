export default function CharacterSelector({ characters, currentId, onSelect }) {
    return (
      <div className="selector">
        {characters.map(c => (
          <button
            key={c.id}
            className={`selector-btn ${currentId === c.id ? "active" : ""}`}
            onClick={() => onSelect(c.id)}
          >
            {c.name}
          </button>
        ))}
      </div>
    );
  }