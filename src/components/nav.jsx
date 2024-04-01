import './nav.css'

export default function Nav(){

    return (
        <div className="nav">
            <div className="nav__info">
                <a href="#">cristianbyte</a>
                <span>Full Stack Developer</span>
                <a href="mailto:charlsmaritz@gmail.com">Contact</a>
            </div>
            <div className="nav__links">
                <ul>
                    <li>about</li>
                    <li>projects</li>
                    <li>GitHub</li>
                    <li>LinkedIn</li>
                </ul>
            </div>
        </div>    
        )
}