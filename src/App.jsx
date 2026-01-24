import Intro from "./components/Intro/Intro";
import CharacterSelect from "./components/CharacterCard/CharacterSelect";

function App() {
  return (
    <>
      {/* 인트로는 항상 렌더 (fixed overlay) */}
      <Intro />

      {/* 실제 페이지 콘텐츠 */}
      <main>
        <CharacterSelect />
      </main>
    </>
  );
}

export default App;
