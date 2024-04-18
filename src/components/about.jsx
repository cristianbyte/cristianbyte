import './about.css'
import profile from '../assets/profile2.png'

export default function About(){
    return (
        <div className="about">
            <div className="about__me">
                <h2 className='about__title'>
                    ABOUT
                </h2 >
                <p className='about__description'>
                    Hello! I'm Cristian Martinez, a passionate frontend developer and aspiring full stack developer, with a special interest in React and Java (Spring Boot). My journey began as a self-taught developer and now I'm furthering my skills under the guidance of <a className='underlining' href="https://riwi.io/" target="_blank" >Riwi</a>. I love pushing my CSS skills to the limit, and one of the most fascinating aspects for me is the ability to find creative solutions to challenges and then turn them into effective implementations, driving my passion for web development.
                </p>
            </div>
            <div className="about__photo">
                <div className="photo--filter">
                    <img src={profile} alt="" />
                </div>
            </div>
            <div className="technologies">
                <div className="technologies__e filter">
                    <svg className="percentage" viewBox="-24.5 -24.5 245 245" version="1.1" style={{ transform: 'rotate(-90deg)' }} xmlns="http://www.w3.org/2000/svg">
                        <circle r="88" cx="98" cy="98" stroke-dashoffset="100px" fill="transparent" ></circle>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" className='filter'  fill='var(--greeNeon)' viewBox="0 0 24 24"><path d="M4.136 3.012h15.729l-1.431 16.15-6.451 1.826-6.414-1.826-1.433-16.15zm5.266 7.302-.173-2.035 7.533.002.173-1.963-9.87-.002.522 5.998h6.835l-.243 2.566-2.179.602-2.214-.605-.141-1.58H7.691l.247 3.123L12 17.506l4.028-1.08.558-6.111H9.402v-.001z"/></svg>
                </div>
                <div className="technologies__e filter">

                </div>
                <div className="technologies__e filter">

                </div>
                <div className="technologies__e filter">

                </div>
                <div className="technologies__e filter">
                    
                </div>
                <div className="technologies__e filter">

                </div>
            </div>

        </div>
    )
}