import Header from './components/header'
import Nav from './components/nav'
import './App.css'

function App() {

  return (
    <div className="app__scene" >
      <div className="app__window">
        <Header/>
        <Nav/>
      </div>
    </div>
  );
}

export default App
