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
        </div>
    )
}