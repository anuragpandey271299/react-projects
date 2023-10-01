import React, { useState } from 'react';
import './CardDetails.css';

export default function CardDetailApp() {
  const [nameInput, setNameInput] = useState('');
  const [cardInput, setCardInput] = useState('');
  const [monthInput, setMonthInput] = useState('');
  const [yearInput, setYearInput] = useState('');
  const [cvcInput, setCVCInput] = useState('');
  const [errorMessageName, setErrorMessageName] = useState('');
  const [errorMessageCard, setErrorMessageCard] = useState('');
  const [errorMessageMonth, setErrorMessageMonth] = useState('');
  const [errorMessageYear, setErrorMessageYear] = useState('');
  const [errorMessageCVC, setErrorMessageCVC] = useState('');

  const handleConfirm = (e) => {
    e.preventDefault();
    if (validateName()) {
      setErrorMessageName('');
    }
    if (validateCard()) {
      setErrorMessageCard('');
    }
    if (validateMonth()) {
      setErrorMessageMonth('');
    }
    if (validateYear()) {
      setErrorMessageYear('');
    }
    if (validateCVC()) {
      setErrorMessageCVC('');
    }
    if (
      validateName() &&
      validateCard() &&
      validateMonth() &&
      validateYear() &&
      validateCVC()
    ) {
      setNameInput('');
      setCardInput('');
      setMonthInput('');
      setYearInput('');
      setCVCInput('');
    }
  };

  const validateName = () => {
    let isNameValid = true;
    if (nameInput === '') {
      setErrorMessageName('*Name required');
      isNameValid = false;
    } else if (!/^[A-Za-z ]+$/.test(nameInput)) {
      setErrorMessageName('*Only alphabetic characters allowed');
      isNameValid = false;
    }
    return isNameValid;
  };

  const validateCard = () => {
    let isCardValid = true;
    if (cardInput === '') {
      setErrorMessageCard('*Card number required');
      isCardValid = false;
    } else if (cardInput.length !== 16) {
      setErrorMessageCard('*16 digit required');
      isCardValid = false;
    } else if (!/^\d+$/.test(cardInput)) {
      setErrorMessageCard('*Only numeric characters allowed');
      isCardValid = false;
    }
    return isCardValid;
  };

  const validateMonth = () => {
    let isMonthValid = true;
    if (monthInput === '') {
      setErrorMessageMonth('*Month required');
      isMonthValid = false;
    } else if (!(monthInput >= 1 && monthInput <= 12)) {
      setErrorMessageMonth('*Month should be between 01 to 12');
      isMonthValid = false;
    } else if (!/^\d+$/.test(monthInput)) {
      setErrorMessageMonth('*Only numeric characters allowed');
      isMonthValid = false;
    }
    return isMonthValid;
  };

  const validateYear = () => {
    let isYearValid = true;
    if (yearInput === '') {
      setErrorMessageYear('*Year required');
      isYearValid = false;
    } else if (!(yearInput >= 20 && yearInput <= 30)) {
      setErrorMessageYear('*Year should be between 2020 to 2030');
      isYearValid = false;
    } else if (!/^\d+$/.test(yearInput)) {
      setErrorMessageYear('*Only numeric characters allowed');
      isYearValid = false;
    }
    return isYearValid;
  };

  const validateCVC = () => {
    let isCVCValid = true;
    if (cvcInput === '') {
      setErrorMessageCVC('*CVC required');
      isCVCValid = false;
    } else if (cvcInput.length !== 3) {
      setErrorMessageCVC('*3 digit CVC required');
      isCVCValid = false;
    } else if (!/^\d+$/.test(cvcInput)) {
      setErrorMessageCVC('*Only numeric characters allowed');
      isCVCValid = false;
    }
    return isCVCValid;
  };

  return (
    <div className="wrapper">
      <div className="leftBox"></div>
      <div className="rightBox">
        <form onSubmit={handleConfirm}>
          <div className="customerName">
            <label>CARD HOLDERNAME</label>
            <br />
            <input
              value={nameInput}
              formNoValidate
              onChange={(e) => setNameInput(e.target.value)}
              placeholder="e.g. Jane Appleseed"
            />
            <p>{errorMessageName}</p>
          </div>
          <div className="cardNumber">
            <label>CARD NUMBER</label>
            <br />
            <input
              value={cardInput}
              type="text"
              onChange={(e) => {
                const sanitizedValue = e.target.value.replace(/[^0-9]/g, '');
                setCardInput(sanitizedValue);
              }}
              placeholder="e.g. 1234 5678 9123 0000"
            />
            <p>{errorMessageCard}</p>
          </div>
          <div className="btmDiv">
            <div className="expiryDate">
              <label>EXP. DATE (MM/YY)</label>
              <br />
              <input
                value={monthInput}
                onChange={(e) => {
                  const sanitizedValue = e.target.value.replace(/[^0-9]/g, '');
                  setMonthInput(sanitizedValue);
                }}
                placeholder="MM"
                type="text"
              />
              <input
                value={yearInput}
                onChange={(e) => {
                  const sanitizedValue = e.target.value.replace(/[^0-9]/g, '');
                  setYearInput(sanitizedValue);
                }}
                style={{ marginLeft: '30px' }}
                placeholder="YY"
                type="text"
              />
              <p>{errorMessageMonth}</p>
              <p>{errorMessageYear}</p>
            </div>
            <div className="cvc">
              <label>CVC</label>
              <br />
              <input
                value={cvcInput}
                onChange={(e) => {
                  const sanitizedValue = e.target.value.replace(/[^0-9]/g, '');
                  setCVCInput(sanitizedValue);
                }}
                placeholder="e.g. 123"
                type="text"
              />
              <p>{errorMessageCVC}</p>
            </div>
          </div>
          <button>confirm</button>
        </form>
      </div>
    </div>
  );
}
