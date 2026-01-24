import Intro from "./components/Intro/Intro";
import CharacterSelect from "./components/CharacterCard/CharacterSelect";

function App() {
  return (
    <>
      <Intro />
      {/* 인트로 아래로 내려가기 위한 스크롤 공간 */}
      <div style={{ height: "140vh" }} />
      <CharacterSelect />
    </>
  );
}

export default App;
