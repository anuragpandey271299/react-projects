import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css';
import Registration from './components/Registration';
import Genre from './components/Genre';
import Info from './components/Info'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='registration' Component={Registration}/>
        <Route path='genre' Component={Genre}/>
        <Route path='info' Component={Info}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
