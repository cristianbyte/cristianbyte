import './skils.css'
import { IoLogoCss3 , IoLogoHtml5 } from 'react-icons/io';
import { SiJavascript, SiReact } from 'react-icons/si';


function Skils() {
    return (
        <>
        <div className="skils">
            <h3>Habilidades</h3>
            <div className="skils__section">
                <IoLogoHtml5 className='logo html'/>
                <IoLogoCss3 className='logo css'/>
                <SiJavascript className='logo javascript'/>
                <SiReact className='logo react' />
            </div>
        </div>
        </>
    )
}

export default Skils