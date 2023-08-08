import './header.css'
import { BsInstagram , BsGithub, BsLinkedin } from 'react-icons/bs'
import { Button } from './button.jsx'
import './button.css';

export default function Header(){
    return(
        <div className='header'>
            <div className="me">
                <div className="me__photo">
                    <img src="https://avatars.githubusercontent.com/u/61919822?v=4" alt="avatar from www" />
                </div>
                <p className="me__greeting">
                    Hi, I'm Cristian 👋  
                </p>
                <h1 className="me__call">    
                    Being <span className='me__different'> different </span> and <span className='me__different'> memorable </span> on the internet.
                </h1>
                <div >
                    <Button type={'button secondary-button'} text='Contact' action={()=>alert('You click the button')}/>
                    <Button type={'button primary-button'} text='Projects' action={()=>alert('You click the button')}/>
                </div>
            </div>
            <div className="social">
                <a className='social__icon' href="https://www.instagram.com/cristianbyte" target="_blank" title="Sígueme en Instagram" rel="noopener">
                    <BsInstagram />
                </a>
                <a className='social__icon' href="https://www.github.com/cristianbyte" target="_blank" title="Visitame en github" rel="noopener">
                    <BsGithub/>
                </a>
                <a className='social__icon' href="https://www.linkedin.com/in/cristianbyte" target="_blank" title="Sígueme en LinkeIn" rel="noopener">
                    <BsLinkedin/>
                </a>
                <a className='social__icon' href="https://www.twitter.com/cristianbyte" target="_blank" title="Sígueme en X" rel="noopener">
                    <svg viewBox="0 0 300 300" version="1.1" fill='#fff' xmlns="http://www.w3.org/2000/svg">
                        <path d="M178.57 127.15 290.27 0h-26.46l-97.03 110.38L89.34 0H0l117.13 166.93L0 300.25h26.46l102.4-116.59 81.8 116.59h89.34M36.01 19.54H76.66l187.13 262.13h-40.66"/>
                    </svg>
                </a>
            </div>
        </div>
    )
}