import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import TextPlugin from 'gsap/TextPlugin';

gsap.registerPlugin(TextPlugin);

function App() {
  const [count, setCount] = useState(0);
  const headingRef = useRef(null); // Reference to the h1 element

  useEffect(() => {
    // Ensure the element is available
    if (headingRef.current) {
      gsap.to(headingRef.current, {
        duration: 2,
        scale: 2,
        yoyo: true,
        repeat: -1,
        ease: "power1.inOut"
      });
    }
  }, []); // Empty dependency array means this runs once on mount

  return (
    <>
      <h1 ref={headingRef} className="text-6xl font-bold underline">
        No!
      </h1>
      <button onClick={() => setCount(c => c + 1)}>
        Click me
      </button>
      <p>{count}</p>
    </>
  );
}

export default App;
