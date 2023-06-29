import React from 'react';
import Home from './pages/Home'
import Legal from './pages/Legal'
import './App.css';
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={ <Home />} />
        <Route path='/legal' element={ <Legal />} />
      </Routes>
    </div>
  );
}

export default App;
