import React, { useState } from 'react';
import './Caluculator.css';
import { Link } from 'react-router-dom';
const Calculator = () => {
  const [displayValue, setDisplayValue] = useState('');
  const [result, setResult] = useState('');

  const handleButtonClick = (value) => {
    setDisplayValue(displayValue + value);
  };

  const handleClear = () => {
    setDisplayValue('');
    setResult('');
  };

  const handleCalculate = () => {
    try {
      // eslint-disable-next-line no-eval
      const calculatedResult = eval(displayValue);
      setResult(calculatedResult);
    } catch (error) {
      setResult('Error');
    }
  };

  return (
    <div className='whole'>
    <div className="calculator-container">
      <div className="display-container">
        <input
          type="text"
          className="display"
          value={displayValue}
          readOnly
        />
        {result && <div className="result">{result}</div>}
      </div>
      <div className="buttons-container">
        <div className="row">
          <button onClick={() => handleButtonClick('7')}>7</button>
          <button onClick={() => handleButtonClick('8')}>8</button>
          <button onClick={() => handleButtonClick('9')}>9</button>
          <button onClick={() => handleButtonClick('+')}>+</button>
        </div>
        <div className="row">
          <button onClick={() => handleButtonClick('4')}>4</button>
          <button onClick={() => handleButtonClick('5')}>5</button>
          <button onClick={() => handleButtonClick('6')}>6</button>
          <button onClick={() => handleButtonClick('-')}>-</button>
        </div>
        <div className="row">
          <button onClick={() => handleButtonClick('1')}>1</button>
          <button onClick={() => handleButtonClick('2')}>2</button>
          <button onClick={() => handleButtonClick('3')}>3</button>
          <button onClick={() => handleButtonClick('*')}>*</button>
        </div>
        <div className="row">
          <button onClick={() => handleButtonClick('0')}>0</button>
          <button onClick={() => handleButtonClick('.')}>.</button>
          <button onClick={handleCalculate}>=</button>
          <button onClick={() => handleButtonClick('/')}>/</button>
        </div>
        <div className="row">
          <button onClick={handleClear} className="clear-button">
            Clear
          </button>
        </div>
      </div>
      <button><Link to='/'>Back</Link></button>
    </div>
    
    </div>
  );
};

export default Calculator;


