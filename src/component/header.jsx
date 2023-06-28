import './header.css'
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
        </div>
    )
}