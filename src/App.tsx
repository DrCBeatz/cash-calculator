import React, { useState } from "react";

import { MDBInput, MDBBtn } from "mdb-react-ui-kit";
import Header from "./Components/Header/Header";

const App = () => {
  const [total, setTotal] = useState((0).toFixed(2));
  const [hundredInput, setHundredInput] = useState<number | string>("");
  const [fiftyInput, setFiftyInput] = useState<number | string>("");
  const [twentyInput, setTwentyInput] = useState<number | string>("");
  const [tenInput, setTenInput] = useState<number | string>("");
  const [fiveInput, setFiveInput] = useState<number | string>("");
  const [toonieInput, setToonieInput] = useState<number | string>("");
  const [loonieInput, setLoonieInput] = useState<number | string>("");
  const [quarterInput, setQuarterInput] = useState<number | string>("");
  const [dimeInput, setDimeInput] = useState<number | string>("");
  const [nickelInput, setNickelInput] = useState<number | string>("");

  const setInputsArray = [
    setHundredInput,
    setFiftyInput,
    setTwentyInput,
    setTenInput,
    setFiveInput,
    setToonieInput,
    setLoonieInput,
    setQuarterInput,
    setDimeInput,
    setNickelInput,
  ];

  const resetHandler = () => {
    for (const item of setInputsArray) {
      item(() => "");
    };
    setTotal(() => (0).toFixed(2));
  };

  const handleHundredChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const amount = 100;
    setHundredInput((hundredInput) => +hundredInput * 0 + +event.target.value);
    setTotal((prevTotal) =>
      (
        +prevTotal -
        +hundredInput * amount +
        +event.target.value * amount
      ).toFixed(2)
    );
  };

  const handleFiftyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const amount = 50;
    setFiftyInput((fiftyInput) => +fiftyInput * 0 + +event.target.value);
    setTotal((prevTotal) =>
      (
        +prevTotal -
        +fiftyInput * amount +
        +event.target.value * amount
      ).toFixed(2)
    );
  };

  const handleTwentyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const amount = 20;
    setTwentyInput((twentyInput) => +twentyInput * 0 + +event.target.value);
    setTotal((prevTotal) =>
      (
        +prevTotal -
        +twentyInput * amount +
        +event.target.value * amount
      ).toFixed(2)
    );
  };

  const handleTenChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const amount = 10;
    setTenInput((tenInput) => +tenInput * 0 + +event.target.value);
    setTotal((prevTotal) =>
      (+prevTotal - +tenInput * amount + +event.target.value * amount).toFixed(
        2
      )
    );
  };

  const handleFiveChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const amount = 5;
    setFiveInput((fiveInput) => +fiveInput * 0 + +event.target.value);
    setTotal((prevTotal) =>
      (+prevTotal - +fiveInput * amount + +event.target.value * amount).toFixed(
        2
      )
    );
  };

  const handleToonieChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const amount = 2;
    setToonieInput((toonieInput) => +toonieInput * 0 + +event.target.value);
    setTotal((prevTotal) =>
      (
        +prevTotal -
        +toonieInput * amount +
        +event.target.value * amount
      ).toFixed(2)
    );
  };

  const handleLoonieChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const amount = 1;
    setLoonieInput((loonieInput) => +loonieInput * 0 + +event.target.value);
    setTotal((prevTotal) =>
      (
        +prevTotal -
        +loonieInput * amount +
        +event.target.value * amount
      ).toFixed(2)
    );
  };

  const handleQuarterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const amount = 0.25;
    setQuarterInput((quarterInput) => +quarterInput * 0 + +event.target.value);
    setTotal((prevTotal) =>
      (
        +prevTotal -
        +quarterInput * amount +
        +event.target.value * amount
      ).toFixed(2)
    );
  };

  const handleDimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const amount = 0.1;
    setDimeInput((dimeInput) => +dimeInput * 0 + +event.target.value);
    setTotal((prevTotal) =>
      (+prevTotal - +dimeInput * amount + +event.target.value * amount).toFixed(
        2
      )
    );
  };

  const handleNickelChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const amount = 0.05;
    setNickelInput((nickelInput) => +nickelInput * 0 + +event.target.value);
    setTotal((prevTotal) =>
      (
        +prevTotal -
        +nickelInput * amount +
        +event.target.value * amount
      ).toFixed(2)
    );
  };

  return (
    <div className="container">
      <Header title="Cash Calculator" total={total} />
      <main>
        <form className="mx-4 mx-lg-5">
          <MDBInput
            label="Hundreds"
            className="mb-4"
            id="hundred"
            type="number"
            min="0"
            step="1"
            onChange={handleHundredChange}
            value={hundredInput}
          />
          <MDBInput
            label="Fifties"
            className="mb-4"
            id="fifty"
            type="number"
            min="0"
            step="1"
            onChange={handleFiftyChange}
            value={fiftyInput}
          />
          <MDBInput
            label="Twenties"
            className="mb-4"
            id="twenty"
            type="number"
            min="0"
            step="1"
            onChange={handleTwentyChange}
            value={twentyInput}
          />
          <MDBInput
            label="Tens"
            className="mb-4"
            id="ten"
            type="number"
            min="0"
            step="1"
            onChange={handleTenChange}
            value={tenInput}
          />
          <MDBInput
            label="Fives"
            className="mb-4"
            id="five"
            type="number"
            min="0"
            step="1"
            onChange={handleFiveChange}
            value={fiveInput}
          />
          <MDBInput
            label="Toonies"
            className="mb-4"
            id="toonie"
            type="number"
            min="0"
            step="1"
            onChange={handleToonieChange}
            value={toonieInput}
          />
          <MDBInput
            label="Loonies"
            className="mb-4"
            id="loonie"
            type="number"
            min="0"
            step="1"
            onChange={handleLoonieChange}
            value={loonieInput}
          />
          <MDBInput
            label="Quarters"
            className="mb-4"
            id="quarter"
            type="number"
            min="0"
            step="1"
            onChange={handleQuarterChange}
            value={quarterInput}
          />
          <MDBInput
            label="Dimes"
            className="mb-4"
            id="dime"
            type="number"
            min="0"
            step="1"
            onChange={handleDimeChange}
            value={dimeInput}
          />
          <MDBInput
            label="Nickels"
            className="mb-4"
            id="nickel"
            type="number"
            min="0"
            step="1"
            onChange={handleNickelChange}
            value={nickelInput}
          />
          <MDBBtn
            type="button"
            className="btn btn-dark btn-block mb-4"
            onClick={resetHandler}
          >
            Reset
          </MDBBtn>
        </form>
      </main>
    </div>
  );
};

export default App;
