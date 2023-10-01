import React, {useState} from 'react';
import './App.css';
import CardDetailApp from './components/CardDetails.js';
import CardApp from './components/Card.js';

function App() {

  const [nameInput, setNameInput] = useState('JANE APPLESEED');
  const [cardInput, setCardInput] = useState('0000 0000 0000 0000');
  const [monthInput, setMonthInput] = useState('00');
  const [yearInput, setYearInput] = useState('00');
  const [cvcInput, setCVCInput] = useState('000');

  return (
    <>
      <CardDetailApp 
        setNameInput={setNameInput}
        setCardInput={setCardInput}
        setMonthInput={setMonthInput}
        setYearInput={setYearInput}
        setCVCInput={setCVCInput}
      />
      <CardApp
        confirmedName={nameInput}
        confirmedCard={cardInput}
        confirmedMonth={monthInput}
        confirmedYear={yearInput}
        confirmedCVC={cvcInput}
      />
    </>
  );
}

export default App;
