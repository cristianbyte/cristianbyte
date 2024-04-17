import './header.css'

export default function Header({changeDisplay}){


    return (
        <>
            <div className="header"  >
                <div className="header__board" >
                    <h1 className="header__title" >Hi!, I'm Cristian!</h1>
                    <div className="header__options">
                        <a href="#" >
                            <span>see my</span>
                            <h3 onClick={()=>{changeDisplay('Projects')}} >PROJECTS</h3> 
                        </a>
                        <a href="#">
                            <span>more</span>
                            <h3 onClick={()=>{changeDisplay('About')}} >ABOUT</h3>
                            <span>me</span>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}