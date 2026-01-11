import { useState } from 'react';
import Intro from './components/Intro/Intro';

function App() {
  const [introDone, setIntroDone] = useState(false);

  return (
    <>
      {!introDone && <Intro onFinish={() => setIntroDone(true)} />}
      {introDone && <div>MAIN CONTENT</div>}
    </>
  );
}

export default App;
