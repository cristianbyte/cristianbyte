import './menu.css'
import React, { useState, useEffect } from 'react';

export default function Menu() {

  const [isHorizontal, setIsHorizontal] = useState(false);

  useEffect(() => {
    const handleOrientationChange = () => {
      setIsHorizontal(window.matchMedia("(orientation: landscape)").matches);
    };
    window.addEventListener("orientationchange", handleOrientationChange);
    handleOrientationChange();
    return () => {
      window.removeEventListener("orientationchange", handleOrientationChange);
    };
  }, []);

  return (
    <nav className="menu">
      <a href="/" className="menu__logo-link">cristianbyte</a>
      <ul className="menu__options">
        <li className="menu__option">
          <a href="/projects" className="menu__option-link" unselectable='true'>Projects</a>
        </li>
        <li className="menu__option">
          <a href="/about" className="menu__option-link">About</a>
        </li>
        <li className="menu__option">
          <a href="/contact" className="menu__option-link">Contact</a>
        </li>
      </ul>
    </nav>
  )
}

