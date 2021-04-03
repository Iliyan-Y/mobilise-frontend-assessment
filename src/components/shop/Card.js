import { useState } from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';

const Card = () => {
  let [cvc, setCvc] = useState('');
  let [expiry, setExpiry] = useState('');
  let [focus, setFocus] = useState('');
  let [name, setName] = useState('');
  let [number, setNumber] = useState('');
  let [selectedYear, setSelectedYear] = useState('');
  let [selectedMonth, setSelectedMonth] = useState('');

  let [preview, setPreview] = useState(true);

  let handleInputFocus = (e) => {
    setFocus(e.target.name);
  };

  let handleDate = (e) => {
    if (e.target.name === 'months') {
      setSelectedMonth(e.target.value);
      setExpiry(e.target.value + selectedYear);
    }

    if (e.target.name === 'year') {
      setSelectedYear(e.target.value);
      setExpiry(selectedMonth + e.target.value);
    }
  };

  function handleCardNumber(e) {
    if (number.length > 1) {
      setPreview(false);
    } else {
      setPreview(true);
    }
    setNumber(e.target.value);
  }
  return (
    <div id="PaymentForm">
      <Cards
        cvc={cvc}
        expiry={expiry}
        focused={focus}
        name={name}
        number={number}
        preview={preview}
        issuer={'visa'}
      />
      <form>
        <input
          name="name"
          placeholder="Card Holder Name"
          onChange={(e) => setName(e.target.value)}
          onFocus={handleInputFocus}
        />
        <input
          type="tel"
          name="number"
          placeholder="Card Number"
          onChange={handleCardNumber}
          onFocus={handleInputFocus}
        />

        <select onChange={handleDate} id="months" name="months">
          <option hidden value="MM">
            MM
          </option>
          {months.map((month) => (
            <option value={month}>{month}</option>
          ))}
        </select>
        <select onChange={handleDate} id="year" name="year">
          <option hidden value="YYYY">
            YYYY
          </option>
          {years.map((year) => (
            <option value={year}>{year}</option>
          ))}
        </select>
        <input
          type="cvc"
          name="cvc"
          placeholder="CVC"
          onChange={(e) => setCvc(e.target.value)}
          onFocus={handleInputFocus}
        />
      </form>
    </div>
  );
};

export default Card;

let months = [
  '01',
  '02',
  '03',
  '04',
  '05',
  '06',
  '07',
  '08',
  '09',
  '10',
  '11',
  '12',
];
let years = [21, 22, 23, 24, 25, 26, 27];
