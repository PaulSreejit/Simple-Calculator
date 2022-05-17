import { useState } from "react";

const App = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  let [res, setRes] = useState("");
  const [isActive, setIsActive] = useState(false);

  const num1ChangeHandler = (event) => {
    console.log(event.target.value);
    setNum1(event.target.value);
  };

  const num2ChangeHandler = (event) => {
    console.log(event.target.value);
    setNum2(event.target.value);
  };

  const addBtnHandler = () => {
    console.log("Add button has been clicked");
    console.log(num1, num2);
    res = parseInt(num1) + parseInt(num2);
    setRes(res);
    setIsActive(!isActive);
    console.log(res);
  };
  const subBtnHandler = () => {
    console.log("Subtract button has been clicked");
    console.log(num1, num2);
    res = parseInt(num1) - parseInt(num2);
    setRes(res);
    setIsActive(!isActive);
    console.log(res);
  };
  const mulBtnHandler = () => {
    console.log("Multiply button has been clicked");
    console.log(num1, num2);
    res = parseInt(num1) * parseInt(num2);
    setRes(res);
    setIsActive(!isActive);
    console.log(res);
  };
  const divBtnHandler = () => {
    console.log("Divide button has been clicked");
    console.log(num1, num2);
    res = parseInt(num1) / parseInt(num2);
    setRes(res);
    setIsActive(!isActive);
    console.log(res);
  };

  const Results = () => {
    return <div>Result:{res}</div>;
  };

  const clearBtnHandler = () => {
    console.log("Clear Button has been clicked");
    console.log(num1, num2);
    setNum1("");
    setNum2("");
    setRes("");
    setIsActive(false);
  };

  return (
    <div>
      <h1>Basic Calculator</h1>
      <label>
        <input
          type="number"
          name="num1"
          value={num1}
          onChange={num1ChangeHandler}
        ></input>
      </label>
      <label>
        <input
          type="number"
          name="num2"
          value={num2}
          onChange={num2ChangeHandler}
        ></input>
      </label>
      <div>
        <button className="operation-btn" onClick={addBtnHandler}>
          +
        </button>
        <button className="operation-btn" onClick={subBtnHandler}>
          -
        </button>
        <button className="operation-btn" onClick={mulBtnHandler}>
          *
        </button>
        <button className="operation-btn" onClick={divBtnHandler}>
          /
        </button>
      </div>
      <div>{isActive ? <Results /> : null}</div>
      <button onClick={clearBtnHandler}>Clear</button>
    </div>
  );
};

export default App;
