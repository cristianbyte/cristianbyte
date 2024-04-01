import Header from './components/header'
import Nav from './components/nav'
import About from './components/about';
import './App.css'
import { useState } from 'react';

function App() {

  const [showHeader, setShowHeader] = useState(false);
  const [addAnimationClass, setAddAnimationClass] = useState(false);

  const toggleAnimationClass = () => {
    setAddAnimationClass(!addAnimationClass);
    console.log(addAnimationClass)
  };

  const showAbout = () => {
    toggleAnimationClass();
  };

  const showDefault = () => {
    setShowHeader(false);
  };

  return (
    <>
      {showHeader ? <About /> : <Header showAbout={showAbout} showDefault={showDefault} addAnimationClass={addAnimationClass} />}
      <Nav showAbout={showAbout} showDefault={showDefault} />
    </>
  );
}

export default App
