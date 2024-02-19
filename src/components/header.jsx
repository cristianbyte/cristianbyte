import './header.css'
import './_global.css'
import image from '../assets/profile.png'

export default function AnimeHeader() {
  return (<>
  
  <nav className="anime__nav">
    <a href="#about" >about</a>
    <a href="#projects" >projects</a>
    <a href="#contact" >contact</a>
</nav>
    <header id="about" >
      <div className="anime__image">
        <h3>
          frontend<br />
          developer
        </h3>
        <img src={image} alt="profile image" />
        <h3>
          frontend<br />
          developer
        </h3>
      </div>
    </header>
  
  </>

  )
}