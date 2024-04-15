import './nav.css'

export default function Nav({setDisplays , actualDisplay}){


    function toggleDisplay(){
        if(actualDisplay == 'Home'){
            return 'About'
        }else{
            return 'Home'
        }
    }
    function toggleDisplay2(){
        if(actualDisplay == 'Projects'){
            return 'About'
        }else{
            return 'Projects'
        }
    }

    return (
        <div className="nav">
            <div className="nav__info">
                <a data-delay='1' href="#">cristianbyte</a>
                <span data-delay='2'>Full Stack Developer</span>
                <a data-delay='3' href="mailto:charlsmaritz@gmail.com">Contact</a>
            </div>
            <div className="nav__links">
                <a href='#' data-delay='1' onClick={()=>{setDisplays(toggleDisplay())}} >{toggleDisplay()}</a>
                <a href='#' data-delay='2' onClick={()=>{setDisplays(toggleDisplay2())}}>{toggleDisplay2()}</a>
                <a href='#' data-delay='3' >GitHub</a>
                <a href='#' data-delay='4' >LinkedIn</a>
            </div>
        </div>    
        )
}