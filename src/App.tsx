import React from 'react';
import Home from './pages/Home'
import Legal from './pages/Legal'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={ <Home />} />
        <Route path='/legal' element={ <Legal />} />
      </Routes>
    </>
  );
}

export default App;
