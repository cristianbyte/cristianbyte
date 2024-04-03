import './nav.css'

export default function Nav(){

    return (
        <div className="nav">
            <div className="nav__info">
                <a data-delay='1' href="#">cristianbyte</a>
                <span data-delay='2'>Full Stack Developer</span>
                <a data-delay='3' href="mailto:charlsmaritz@gmail.com">Contact</a>
            </div>
            <div className="nav__links">
                <a href='#' data-delay='1' >about</a>
                <a href='#' data-delay='2' >projects</a>
                <a href='#' data-delay='3' >GitHub</a>
                <a href='#' data-delay='4' >LinkedIn</a>
            </div>
        </div>    
        )
}