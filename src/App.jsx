import { useState } from 'react'
import About from './components/about';
import Header from './components/header'
import Nav from './components/nav'
import './App.css'
import Projects from './components/projects';

function App() {

  const [display, setDisplay] = useState('Home');

  
  const changeDisplay = (actual) => {
    const window = document.querySelector('.app__window');
    const windowProjects = document.querySelector('.app__window--clean');
    const floor = document.querySelector('.app__floor');
    if(actual == 'Home' || actual == 'About'){
      window.classList.add('backwards');
      floor.classList.remove('take-off');
      window.classList.remove('opacity-d');
      windowProjects.classList.add('backwards');
      setTimeout(() => {
        window.classList.remove('backwards');
        windowProjects.classList.add('opacity-d');
        setDisplay(actual);
      }, 500);
    }else{
      window.classList.add('backwards');
      floor.classList.add('take-off');
      windowProjects.classList.add('backwards');
      windowProjects.classList.remove('opacity-d');
      setTimeout(() => {
        window.classList.add('opacity-d');
        setDisplay('Projects');
        windowProjects.classList.remove('backwards');
      }, 1000);
    }
  };

  return (
    <>
      <div className="app__scene" >
        <div className="app__window" >
          {display === 'Home' && <Header changeDisplay={changeDisplay} />}
          {display === 'About' && <About/>}
        </div>
        <div className="app__window--clean opacity-d">
          {display == 'Projects' && <Projects/> }
        </div>
        <Nav setDisplays={changeDisplay} actualDisplay={display}/>
      </div>
      <div className="app__scene">
          <div className="app__floor">
            <div className="horizon"></div>
          </div>
      </div>
    </>
  );
}

export default App
