import React from 'react';
import './App.css';

// COMPONENTS
import NavBar from "./components/NavBar";    
import Header from './components/Header/Header';
 import CardComponent from './components/CardComponent/CardComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <Header
          title='we have brick models'
          subtitle='l.gauge'
        />
        <CardComponent
          name='This would be a model shown in a card. One of many.'
          date='Some day in the future'
          description='Here would be the description of the model'
          image='engine_trm.png'
        />
      </header>
        <div>
      </div>
    </div>
  );
}

export default App;
