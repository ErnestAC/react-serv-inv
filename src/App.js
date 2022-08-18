import React from 'react';
import './App.css';

// COMPONENTS
import NavBar from "./components/NavBar";    
import Header from './components/Header/Header';
import CardComponent from './components/CardComponent/CardComponent';

//RANDOM CONSTANT
const vVolume = 100;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header
          title='l.gauge'
          subtitle='We sell LEGO models'
        />
      </header>
        <NavBar />
      <div>
        <CardComponent
          name='Test'
          date='This should be a date!'
          description='This is some description. This is not real. This is a figment of your imagination.'
          image='../assets/images/engine_trm.png'
        />
      </div>
    </div>
  );
}

export default App;
