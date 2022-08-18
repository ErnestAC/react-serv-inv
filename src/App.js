import logo from './app.png';
import './App.css';

// COMPONENTS
import NavBar from "./components/NavBar";    

//RANDOM CONSTANT
const vVolume = 100;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>LMODELS ECOMMERCE</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <NavBar />
          Some text and a the value of a constant: {vVolume}
        </p>
        <p>
        </p>
      </header>
    </div>
  );
}

export default App;
