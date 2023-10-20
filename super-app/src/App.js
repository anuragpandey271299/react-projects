import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css';
import Registration from './components/Registration';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='registration' Component={Registration}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
