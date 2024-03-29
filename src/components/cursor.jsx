import React, { useEffect, useRef } from 'react';
import './cursor.css';

export default function Cursor() {
  const cursorRef = useRef(null);

  useEffect(() => {
    function handleMouseMove(e) {
      const cursor = cursorRef.current;
      if (cursor) {
        cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
        console.log(e.clientX, e.clientY);
      }
    }

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div id='cursor' ref={cursorRef}></div>
  );
}
