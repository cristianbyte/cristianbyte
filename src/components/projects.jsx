import { setSourceMapsEnabled } from 'process';
import { useRef, useState } from 'react';
import './projects.css'

export default function Projects(){

    const [focusedIndex, setFocusedIndex] = useState(null);
    const listRef = useRef(null);
    const [iframeSrc, setIframeSrc] = useState('https://cristianbyte.github.io/pokedex/');

    const handleClick = (elem) => {
        const newSrc = `https://cristianbyte.github.io/${elem.textContent.toLowerCase()}/`;
        setIframeSrc(newSrc);
        console.log(elem.textContent);
        const listChildren = listRef.current.children;
        let index;
        for (let i = 0; i < listChildren.length; i++) {
            if (listChildren[i] === elem) {
                index = i;
                break;
            }
        }
        if (index !== undefined) {
            const childElement = listChildren[index];
            const scrollStart = listRef.current.scrollTop;
            const scrollEnd = childElement.offsetTop - childElement.offsetHeight + parseInt(window.getComputedStyle(childElement).paddingBottom, 10) + parseInt(window.getComputedStyle(childElement).paddingTop, 10);
            const distance = scrollEnd - scrollStart;
            const duration = 400; 
            const steps = 30; 
            const step = distance / steps; 
            let currentStep = 0;
    
            const scrolling = setInterval(() => {
                listRef.current.scrollTop += step;
                currentStep++;

                if (currentStep >= steps || Math.abs(listRef.current.scrollTop - scrollEnd) < Math.abs(step)) {
                    listRef.current.scrollTop = scrollEnd; 
                    clearInterval(scrolling);
                }
            }, duration / steps ); 
        }
    }
    
    return (
        <div className='project' >
            <div className="project__image">
                <iframe src={iframeSrc} ></iframe>
            </div>
            <div className="project__list" ref={listRef}>
                <div className="project__link" onClick={(e) => handleClick(e.target)} >Mentor</div>
                <div className="project__link" onClick={(e) => handleClick(e.target)} >Pokedex</div>
                <div className="project__link" onClick={(e) => handleClick(e.target)} >Appeli</div>
                <div className="project__link" onClick={(e) => handleClick(e.target)} >Vitalink</div>
                <div className="project__link" onClick={(e) => handleClick(e.target)} >CinemaSync</div>
            </div>
        </div> 
        )
}