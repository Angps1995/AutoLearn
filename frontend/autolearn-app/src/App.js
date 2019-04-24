import React from 'react';
import logo from './logo.svg';
import './App.css';

import Home from './pages/Home';
import Courses from './pages/Courses';
import Path from './pages/Path';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        {/* <Home />

        <Courses />

        <Path /> */}

      </header>
    </div>
  );
}

export default App;
