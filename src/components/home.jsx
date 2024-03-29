import './home.css'

export default function home(){
    return (
        <>
            <div className="home">
                <h1 className='home__title' >Hey, I'm Cristian!</h1>
                <div className="home__links">
                    <a className="link" href='./projects' >see my <strong>PROJECTS</strong> </a>
                    <a className="link" href='./about' >more <strong>ABOUT ME</strong></a>
                </div>
            </div>
        </>
    )
}