import './menu.css'
import React, { useState, useEffect } from 'react';
import Popup from './popup';

export default function Menu() {

  const [isHorizontal, setIsHorizontal] = useState(false);
  const [isPopupOpen, setPopupOpen] = useState(false);


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
          <a href="/projects" className="menu__option-link" >Projects</a>
        </li>
        <li className="menu__option">
          <a href="/about" className="menu__option-link">About</a>
        </li>
        <li className="menu__option" >
          <a href="#" className="menu__option-link"  onClick={()=>{setPopupOpen(!isPopupOpen)}} >Contact</a>
        </li>
      </ul>
      <Popup isOpen={isPopupOpen} onClose={()=>{setPopupOpen(!isPopupOpen)}} />
    </nav>
  )
}

