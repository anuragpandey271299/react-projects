import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css';
import Registration from './components/Registration';
import Genre from './components/Genre';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='registration' Component={Registration}/>
        <Route path='genre' Component={Genre}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
