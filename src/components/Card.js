import React, { useState } from 'react';
import cardIcon from "../img/mastercard.png"

export default function Card() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(JSON.stringify(inputs));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="cardholder--name">
        <label>
          <p>Cardholder’s Name:</p>
          <input
            type="text"
            name="username"
            value={inputs.username || ''}
            onChange={handleChange}
            className="styled-input"
            placeholder="PAULINA CHIMAROKE"
            maxLength={36}
            onKeyPress={(event) => {
                const keyCode = event.keyCode || event.which;
                const keyValue = String.fromCharCode(keyCode);
                const pattern = /[a-zA-Z\s]/;
                if (!pattern.test(keyValue)) {
                  event.preventDefault();
                }
              }}
          />
        </label>
      </div>

      <div className="card--number">
        <label>
          <p>Card Number</p>
          <input
            type="text"
            name="number"
            value={inputs.number || ''}
            onChange={handleChange}
            className="styled--input--card--input"
            placeholder="9870 3456 7890 6473"
            maxLength={16}
            onKeyPress={(event) => {
                const keyCode = event.keyCode || event.which;
                const keyValue = String.fromCharCode(keyCode);
                const pattern = /[0-9]/;
                if (!pattern.test(keyValue)) {
                  event.preventDefault();
                }
              }}
          />
        </label>
      </div>

      <div className="card--expiry--cvv">
  <div className="card--expiry--date">
    <label>
      <p>Expiry</p>
      <input
        type="text"
        name="expiry"
        value={inputs.expiry || ''}
        onChange={handleChange}
        className="styled-input"
        placeholder="03/25"
        maxLength={4}
        onKeyPress={(event) => {
      const keyCode = event.keyCode || event.which;
      const keyValue = String.fromCharCode(keyCode);
      const pattern = /[0-9]/;
      if (!pattern.test(keyValue)) {
        event.preventDefault();
      }
    }}
      />
    </label>
  </div>

  <div className="card--cvv--number">
    <label>
      <p>CVV</p>
      <input
        type="text"
        name="cvv"
        value={inputs.cvv || ''}
        onChange={handleChange}
        className="styled-input"
        placeholder="654"
        maxLength={3}
        onKeyPress={(event) => {
            const keyCode = event.keyCode || event.which;
            const keyValue = String.fromCharCode(keyCode);
            const pattern = /[0-9]/;
            if (!pattern.test(keyValue)) {
              event.preventDefault();
            }
          }}
      />
    </label>
  </div>
</div>

<div className="purchase--discount--code">
  <label>
    <p>Discount Code</p>
    <div className="input-container">
      <input
        type="text"
        name="discount"
        value={inputs.discount || ''}
        onChange={handleChange}
        className="styled-input"
        placeholder="CHIKAMSO-20-OFF"
        maxLength={10}
        onKeyPress={(event) => {
            const keyCode = event.keyCode || event.which;
            const keyValue = String.fromCharCode(keyCode);
            const pattern = /^[a-zA-Z0-9-]+$/;
            if (!pattern.test(keyValue)) {
              event.preventDefault();
            }
          }}
      />
      <button type="button" className="apply-button">Apply</button>
    </div>
  </label>
</div>


      <div className="payment--button">
  <button type="submit" className="btn" value="Add">Pay</button>
</div>

    </form>
  );
}
