import logo from './app.png';
import './App.css';

const vVolume = 100;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>REACT SERVER INVENTORY</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {vVolume}
        </p>
        <p>
          I want to add React to <br></br>
          <a
          className="App-link"
          href="https://ernestac.github.io/serv.inventory/"
          target="_blank"
          rel="noopener noreferrer"
        >
          this.
        </a>
        </p>
      </header>
    </div>
  );
}

export default App;
