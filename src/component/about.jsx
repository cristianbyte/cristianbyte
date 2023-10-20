import './about.css'
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

export default function About() {
    const descriptions = [
        "Hello, I'm Cristian, a passionate front-end developer with expertise in HTML, CSS, and JavaScript, including frameworks like React.",
        "ImagePlaceholder",
        "My focus is on delivering engaging and dynamic web experiences. Currently, I'm extending my skills to backend development."
    ];

    const descriptionRefs = descriptions.map(() => {
        return useInView({
            threshold: 1,
        });
    });

    useEffect(() => {
        descriptionRefs.forEach((descriptionRef, index) => {
            const { ref, inView, entry } = descriptionRef;
            if (inView) {
                entry.target.style.opacity = 1;
            }
        });
    }, [descriptionRefs]);

    return (
        <div className="about">
            <div className="about__description">
                {descriptions.map((text, index) => {
                    if (index === 1) { // Render the image placeholder
                        return (
                            <img key={index} className='about__description--img' src="https://avatars.githubusercontent.com/u/61919822?v=4" alt="avatar from GitHub" />
                        );
                    } else { // Render text descriptions
                        return (
                            <div key={index} ref={descriptionRefs[index].ref} className="about__description--aside">
                                {text}
                            </div>
                        );
                    }
                })}
            </div>
        </div>
    )   
}
