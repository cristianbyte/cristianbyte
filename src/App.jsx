import { useState } from 'react'
import About from './components/about';
import Header from './components/header'
import Nav from './components/nav'
import './App.css'

function App() {

  const [display, setDisplay] = useState('Home');

  
  const changeDisplay = (actual) => {
    const window = document.querySelector('.app__window');
    window.classList.add('backwards');
    setTimeout(() => {
      window.classList.remove('backwards');
      setDisplay(actual);
    }, 1100);
  };

  return (
    <>
      <div className="app__scene" >
        <div className="app__window">
          {display === 'Home' ? (
              <Header setDisplays={changeDisplay}  />
            ) : (
              <About setDisplays={changeDisplay} />
            )}
          <Nav setDisplays={changeDisplay} actualDisplay={display}/>
        </div>
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
