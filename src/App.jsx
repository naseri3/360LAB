import { useEffect, useState } from "react";
import Intro from "./components/Intro/Intro";
import CharacterSelect from "./components/CharacterCard/CharacterSelect";

function App() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // 이 값은 연출에 따라 조절 가능
      if (window.scrollY < 150) {
        setShowIntro(true);
      } else {
        setShowIntro(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Intro는 항상 존재 */}
      <Intro isVisible={showIntro} />

      {/* 스크롤 영역 */}
      <div style={{ height: "110vh" }} />

      {/* Character Select는 항상 존재 */}
      <CharacterSelect />
    </>
  );
}

export default App;
