import React from 'react';
import './Card.css';

export default function CardApp(props) {
  const {
    confirmedName,
    confirmedCard,
    confirmedMonth,
    confirmedYear,
    confirmedCVC,
  } = props;

  return (
    <div className="creditCard">
      <div className="frontSide">
        <div className="twoDivs">
          <div className="div1"></div>
          <div className="div2"></div>
        </div>
        <div className="nameCardExp">
          <h1>{confirmedCard.replace(/(\d{4})/g, '$1 ')}</h1>
          <div className="nameExp">
            <h3>{confirmedName}</h3>
            <div>
              <h3>{`${confirmedMonth}/${confirmedYear}`}</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="backSide">
        <div className="box1"></div>
        <input value={confirmedCVC} readOnly />
        <div className="box3">
          _________ __ __ _ <br />
          __ _____ ___ __ <br />_ __ __ ___________
        </div>
      </div>
    </div>
  );
}
