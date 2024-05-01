// App.js
import React, { useState } from "react";
import "./App.css";
import Button from "./components/button/Button";

function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    if (value === "=") {
      calculate();
    } else if (value === "C") {
      clear();
    } else {
      if (result !== "") {
        // Si le résultat est déjà calculé, commencez un nouveau calcul
        clear();
      }
      if (num1 === "") {
        // Si num1 est vide, ajoutez la valeur au num1
        setNum1((prevNum1) => prevNum1 + value);
      } else {
        // Sinon, ajoutez la valeur au num2
        setNum2((prevNum2) => prevNum2 + value);
      }
    }
  };

  const calculate = () => {
    try {
      const res = eval(num1 + num2);
      setResult(res.toString());
    } catch (error) {
      setResult("Error");
    }
  };

  const clear = () => {
    setNum1("");
    setNum2("");
    setResult("");
  };

  return (
    <div className="App">
      <div className="calculator">
        <input
          type="number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
        />
        <input
          type="number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
        />
        <input type="text" value={result} readOnly />
        <div className="buttons">
          <Button onClick={() => handleClick("7")} value="7" />
          <Button onClick={() => handleClick("8")} value="8" />
          <Button onClick={() => handleClick("9")} value="9" />
          <Button onClick={() => handleClick("+")} value="+" />
          <Button onClick={() => handleClick("4")} value="4" />
          <Button onClick={() => handleClick("5")} value="5" />
          <Button onClick={() => handleClick("6")} value="6" />
          <Button onClick={() => handleClick("-")} value="-" />
          <Button onClick={() => handleClick("1")} value="1" />
          <Button onClick={() => handleClick("2")} value="2" />
          <Button onClick={() => handleClick("3")} value="3" />
          <Button onClick={() => handleClick("*")} value="*" />
          <Button onClick={() => handleClick("0")} value="0" />
          <Button onClick={() => handleClick(".")} value="." />
          <Button onClick={() => handleClick("C")} value="C" />
          <Button onClick={() => handleClick("=")} value="=" />
          <Button onClick={() => handleClick("/")} value="/" />
        </div>
      </div>
    </div>
  );
}

export default App;
