import './nav.css'

export default function Nav({ showAbout, showDefault }){

    return (
        <div className="nav">
            <div className="nav__info">
                <a href="#">cristianbyte</a>
                <span>Full Stack Developer</span>
                <a href="mailto:charlsmaritz@gmail.com">Contact</a>
            </div>
            <div className="nav__links">
                <ul>
                    <li><a onClick={showAbout}>about</a></li>
                    <li><a href="#">projects</a></li>
                    <li><a href="#">GitHub</a></li>
                    <li><a href="#">LinkedIn</a></li>
                </ul>
            </div>
        </div>    
        )
}