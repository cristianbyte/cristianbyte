import { useState } from 'react'
import About from './components/about';
import Header from './components/header'
import Nav from './components/nav'
import './App.css'
import Projects from './components/projects';

function App() {

  const [display, setDisplay] = useState('Home');

  
  const changeDisplay = (actual) => {
    if(actual == 'Home' || actual == 'About'){
      const window = document.querySelector('.app__window');
      const floor = document.querySelector('.app__floor');
      window.classList.add('backwards');
      floor.classList.remove('take-off');
      setTimeout(() => {
        window.classList.remove('backwards');
        window.classList.remove('app__window--clean')
        setDisplay(actual);
      }, 1100);
    }else{
      window.classList.add('backwards')
      floor.classList.add('take-off');
      setTimeout(() => {
        window.classList.remove('backwards');
        setDisplay('Projects');
      }, 1000);
    }
  };

  return (
    <>
      <div className="app__scene" >
        <div className={display=='Projects'?'app__window--clean':'app__window'}>
          {display === 'Home' ?
            <Header setDisplays={changeDisplay} />
            :
            display === 'About' ?
              <About/>
              :
              <Projects/>
          }
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
