import React from 'react';
import './Counter.css'; 

const Counter = ({ cnt, plus, minus, reset }) => {
  return (
    <div className="counter-container">
      <h1 className="counter-title">Counter App</h1>
      <h2 className="counter-value">Count : {cnt}</h2>
      <div className="button-group">
        <button className="btn plus" onClick={plus}>+</button>
        <button className="btn minus" disabled={cnt === 0} onClick={minus}>-</button>
        <button className="btn reset" onClick={reset}>Reset</button>

      </div>
    </div>
  );
};

export default Counter;
