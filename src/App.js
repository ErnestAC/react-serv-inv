import logo from './app.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>REACT SERVER INVENTORY</p>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hi Batman! This is React, <code>./src/App.js</code> is your base file.
        </p>
        <p>
          <b>Edit, save and it reloads.</b>
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
