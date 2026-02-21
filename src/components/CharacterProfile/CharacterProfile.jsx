import { useState, useMemo } from "react";
import { characterGroups } from "../../data/characters";
import CharacterViewer from "./CharacterViewer";
import CharacterStage from "./CharacterStage";
import InfoButtons from "./InfoButtons";
import InfoModal from "./InfoModal";
import "./characterProfile.css";

export default function CharacterProfile({ characterId, onBack }) {

  // 1️⃣ 그룹 찾기
  const group = useMemo(
    () => characterGroups.find(g => g.id === characterId),
    [characterId]
  );

  // 2️⃣ Hook은 항상 위에 선언
  const [currentMemberId, setCurrentMemberId] = useState(null);
  const [modalType, setModalType] = useState(null);

  // 3️⃣ group 변경될 때 첫 멤버 설정
  if (group && !currentMemberId) {
    setCurrentMemberId(group.members[0].id);
  }

  // 4️⃣ group 없으면 렌더만 막음 (Hook 이후!)
  if (!group) {
    return (
      <div style={{ color: "white", padding: "50px" }}>
        Group Not Found
      </div>
    );
  }

  const currentMember = group.members.find(
    m => m.id === currentMemberId
  );

  const handlePrev = () => {
    const index = group.members.findIndex(
      m => m.id === currentMemberId
    );

    const newIndex =
      index === 0 ? group.members.length - 1 : index - 1;

    setCurrentMemberId(group.members[newIndex].id);
  };

  const handleNext = () => {
    const index = group.members.findIndex(
      m => m.id === currentMemberId
    );

    const newIndex =
      index === group.members.length - 1 ? 0 : index + 1;

    setCurrentMemberId(group.members[newIndex].id);
  };

  return (
    <div className="profile-container">

      <button className="back-btn" onClick={onBack}>
        ←
      </button>

      <div className="profile-main">
        <button className="arrow left" onClick={handlePrev}>
          {"<"}
        </button>

        {currentMember && (
          <CharacterStage>
            <CharacterViewer images={currentMember.images} />
          </CharacterStage>
        )}

        <button className="arrow right" onClick={handleNext}>
          {">"}
        </button>
      </div>

      <div className="selector">
        {group.members.map(member => (
          <button
            key={member.id}
            className={`selector-btn ${
              currentMemberId === member.id ? "active" : ""
            }`}
            onClick={() => setCurrentMemberId(member.id)}
          >
            {member.name}
          </button>
        ))}
      </div>

      <InfoButtons onOpen={setModalType} />

      {modalType && currentMember && (
        <InfoModal
          type={modalType}
          character={currentMember}
          onClose={() => setModalType(null)}
        />
      )}
    </div>
  );
}