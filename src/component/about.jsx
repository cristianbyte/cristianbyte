import './about.css'
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

export default function About() {

    const { ref, inView, entry} = useInView({
        /* Optional options */
        threshold: 1,
    });

    useEffect(() => {
        if (inView) {
          // Si inView es true, muestra una alerta
          entry.target.style.opacity = 1;
          console.log(entry.target); 
        }
      }, [inView]);

    return (
        <div className="about">
            <div className="about__description">

                <div ref={ref} className="about__description--aside">
                    Hello, I'm Cristian, a passionate front-end developer with expertise in HTML, CSS, and JavaScript, including frameworks like React. 
                </div>
                
                <img  className='about__description--img' src="https://avatars.githubusercontent.com/u/61919822?v=4" alt="avatar from github" />

                <div className="about__description--aside"> 
                    My focus is on delivering engaging and dynamic web experiences, actually I'm extending my skills to backend development. 
                </div>
            </div>
        </div>
    )
    

        
}
