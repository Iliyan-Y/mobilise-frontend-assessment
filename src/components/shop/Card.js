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
  let [selectedMonth, setSelectedMonth] = useState();

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
      setExpiry(selectedMonth ? selectedMonth : 'MM' + e.target.value);
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
      <h3 className="whiteText">Card type</h3>
      <Cards
        cvc={cvc}
        expiry={expiry}
        focused={focus}
        name={name}
        number={number}
        preview={preview}
        issuer={'visa'}
      />

      <form style={{ marginTop: '1em' }}>
        <h3 className="whiteText">Name on Card</h3>

        <input
          className="cardIn"
          name="name"
          placeholder="Card Holder Name"
          onChange={(e) => setName(e.target.value)}
          onFocus={handleInputFocus}
        />
        <br />
        <h3 className="whiteText">Card Number</h3>
        <input
          className="cardIn"
          type="tel"
          name="number"
          placeholder="Card Number"
          onChange={handleCardNumber}
          onFocus={handleInputFocus}
        />
        <br />
        <span
          style={{
            display: 'flex',
            width: '72%',
            justifyContent: 'space-between',
          }}
        >
          <h4 className="whiteText">Expiry Date </h4>
          <h4 className="whiteText">CVC</h4>
        </span>

        <div
          style={{
            display: 'flex',
            width: '92%',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
          }}
        >
          <span>
            <select
              onFocus={() => setFocus('expiry')}
              style={{ width: '12vh', padding: '0.3em' }}
              onChange={handleDate}
              id="months"
              name="months"
            >
              <option hidden value="MM">
                MM
              </option>
              {months.map((month) => (
                <option value={month}>{month}</option>
              ))}
            </select>
            <select
              onFocus={() => setFocus('expiry')}
              style={{ width: '14vh', padding: '0.3em' }}
              onChange={handleDate}
              id="year"
              name="year"
            >
              <option hidden value="YYYY">
                YYYY
              </option>
              {years.map((year) => (
                <option value={year}>{year}</option>
              ))}
            </select>
          </span>
          <input
            style={{ width: '28%' }}
            type="cvc"
            name="cvc"
            placeholder="CVC"
            onChange={(e) => setCvc(e.target.value)}
            onFocus={handleInputFocus}
          />
        </div>
        <br />
        <input id="check-out-btn" type="submit" value="Check Out" />
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
