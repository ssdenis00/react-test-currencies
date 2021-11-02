import { useState, useContext } from "react";
import { CurrentValuteContext } from "../../contexts/CurrentValuteContext";
import "./Converter.css";

function Converter() {
  const valute = useContext(CurrentValuteContext);
  const [result, setResult] = useState(0);
  const [resultValute, setResultValute] = useState("");
  const [inputValue, setInputValue] = useState("");

  function handleInputOnChange(evt) {
    setInputValue(evt.target.value);
  }

  function transformInputData(data) {
    const arr = data.split(" ");
    let [value, forValute, separator, inValute] = arr;

    value = parseInt(value);
    forValute = forValute.toLowerCase();
    separator = separator.toLowerCase();
    inValute = inValute.toLowerCase();

    return { value, forValute, separator, inValute };
  }

  function calculateCurrenties(value) {
    const key = `${value.forValute.toLowerCase()}${
      value.inValute[0].toUpperCase() + value.inValute.slice(1)
    }`;

    return value.value * valute[key].Value;
  }

  function checkValidityInputValue(value) {
    const whiteList = ["usd", "eur", "rub"];
    if (value.separator !== "in") {
      return false;
    } else if (!whiteList.includes(value.inValute)) {
      return false;
    } else if (!whiteList.includes(value.forValute)) {
      return false;
    } else {
      return true;
    }
  }

  function handleSubmitForm(evt) {
    evt.preventDefault();
    const transformData = transformInputData(inputValue);

    if (checkValidityInputValue(transformData)) {
      const result = calculateCurrenties(transformData);

      setResultValute(transformData.inValute.toUpperCase());
      setResult(result);
    } else {
      alert("Введены некорректные данные. Введите текст в виде 15 usd in rub");
    }
  }

  return (
    <main className="main">
      <form onSubmit={handleSubmitForm} action="/" className="form">
        <input
          type="text"
          className="form__input"
          placeholder="Введите текст в виде 15 usd in rub"
          value={inputValue}
          onChange={handleInputOnChange}
          required
        />
        <button type="submit" className="form__btn">
          Рассчитать
        </button>
      </form>
      <p className="result">
        {result === 0 ? "" : result.toFixed(2) + " " + resultValute}
      </p>
    </main>
  );
}

export default Converter;
