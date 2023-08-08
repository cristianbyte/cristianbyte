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
    <div className="menu">
        <div className="menu__logo">
            cristianbyte
        </div>
        <div className="menu__option">
          <div className="menu__option--i">Projects</div>
          <div className="menu__option--i">About</div>
          <div className="menu__option--i">Contact</div> 
        </div>
    </div>
  )
}

