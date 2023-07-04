import React from "react";
import ReactDOM from 'react-dom';

export default function Cart() {
    return (
        <section className="cart">
            <h1 className="cart-title">You’re paying,</h1>
            <h2 className="cart--price">$450.00</h2><ul className="cart--products">
  <li>
    <div>
      <h3>Custom Gucci Shoes</h3>
      <p className="cart--subtitle">Size: M Color: Red</p>
    </div>
    <span className="cart--value">$ 400.00</span>
  </li>
  <li>
    <div>
      <h3>Nivea Cream 400ml</h3>
      <p className="cart--subtitle">Size: M Color: Blue</p>
    </div>
    <span className="cart--value">$ 50.00</span>
  </li>
  <li>Discounts & Offers <span className="cart--value">$ 0.00</span></li>
  
  <div className="line-divider"></div>
  
  <li>Tax <span className="cart--value">$ 0.00</span></li>
  <li>Total <span className="cart--value">$ 450.00</span></li>
</ul>

        </section>
    )
}
