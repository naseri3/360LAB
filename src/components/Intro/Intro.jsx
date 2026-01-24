import { useEffect, useState } from 'react';
import './intro.css';

function Intro({ onFinish }) {
   const [progress, setProgress] = useState(0);
 
   useEffect(() => {
     const onScroll = () => {
       const max = 500;
       const value = Math.min(window.scrollY / max, 1);
       setProgress(value);
 
       if (value >= 1) {
         setTimeout(onFinish, 300);
       }
     };
 
     window.addEventListener("scroll", onScroll);
     return () => window.removeEventListener("scroll", onScroll);
   }, [onFinish]);
 
   return (
     <div
       className="intro-wrap"
       style={{
         transform: `scale(${1 - progress * 0.4})`,
         opacity: progress >= 0.9 ? 0 : 1, // ⭐ 마지막에만 사라짐
       }}
     >
       <h1 className="intro-title intro-title--primary neon-sign">
         SYSTEM BOOTING
       </h1>
 
       <h2 className="intro-title intro-title--accent neon-sign">
         360LAB INITIALIZED
       </h2>
     </div>
   );
 }
 

export default Intro;
