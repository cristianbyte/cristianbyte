import './about.css'
import profile from '../assets/profile2.png'

export default function About(){
    return (
        <div className="about">
        <div className="about__me">
            <h2 className='about__title'>
                ABOUT ME
            </h2>
        </div>
        <div className="about__photo">
            <div className="photo--filter">
                <img src={profile} alt="" srcset="" />
            </div>
        </div>
        </div>
    )
}