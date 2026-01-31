import { useEffect, useState } from "react";
import Intro from "./components/Intro/Intro";
import CharacterSelect from "./components/CharacterCard/CharacterSelect";
import CharacterProfile from "./components/CharacterProfile/CharacterProfile";

function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [selectedCharacterId, setSelectedCharacterId] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setShowIntro(window.scrollY < 150);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Intro는 항상 존재 */}
      <Intro isVisible={showIntro} />

      {/* Intro용 스크롤 영역 */}
      <div style={{ height: "110vh" }} />

      {/* 👇 여기서 화면 분기 */}
      {selectedCharacterId === null ? (
        <CharacterSelect
          onEnterCharacter={(id) => setSelectedCharacterId(id)}
        />
      ) : (
        <CharacterProfile
          characterId={selectedCharacterId}
          onBack={() => setSelectedCharacterId(null)}
        />
      )}
    </>
  );
}

export default App;
