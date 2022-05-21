import React from "react";
import style from "./index.scss";

const Calc = ({}) => {
  return (
    <div className={style}>
      <main className="App-body container">
        <form className="App-body__form">
          <input className="App-body__form__input" type="text" value={0} />
          <button className="App-body__form__button">7</button>
          <button className="App-body__form__button">8</button>
          <button className="App-body__form__button">9</button>
          <button className="App-body__form__button">x</button>
          <button className="App-body__form__button">4</button>
          <button className="App-body__form__button">5</button>
          <button className="App-body__form__button">6</button>
          <button className="App-body__form__button">-</button>
          <button className="App-body__form__button">1</button>
          <button className="App-body__form__button">2</button>
          <button className="App-body__form__button">3</button>
          <button className="App-body__form__button">+</button>
        </form>
      </main>
    </div>
  );
};

Calc.propTypes = {};

export default Calc;
