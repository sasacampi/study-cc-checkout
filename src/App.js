import React from "react";
import ReactDOM from "react-dom"
import Hero from "./components/Hero"
import "./style.css"
import Card from "./components/Card"
import Cart from "./components/Cart"

const App = () => {
    return (
      <div className="app">
        <div className="left-container">
          <Hero />
          <Card />
        </div>
        <div className="right-container">
          <Cart />
        </div>
      </div>
    );
  };
  
  export default App;