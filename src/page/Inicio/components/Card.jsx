import React from 'react';
import '../style.css';

const Card = ({ number, text }) => {
  return (
    <div className="card col-12 col-md-3 d-flex text">
      <h1 className="card-number">{number}</h1>
      <p className="card-text">{text}</p>
    </div>
  );
};

export default Card;
