import './header.css'

export default function Header(){

    function revert(e){
        e.target.childNodes.forEach(el => {
            el.classList.add('reverse-appear-animation');
        })
        setTimeout(()=>{
            e.target.classList.add('reverse-appear-animation');
        },1500)
    }

    return (
        <>
            <div className="header"  >
                <div className="header__board "  onClick={revert} >
                    <h1 className="header__title" >Hi!, I'm Cristian!</h1>
                    <div className="header__options">
                        <a href="https://github.com/cristianbyte/" target="_blank" >
                            <span>see my</span>
                            <h3>PROJECTS</h3> 
                        </a>
                        <a href="#">
                            <span>more</span>
                            <h3>ABOUT</h3>
                            <span>me</span>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}