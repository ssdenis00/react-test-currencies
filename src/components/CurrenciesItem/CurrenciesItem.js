import "./CurrenciesItem.css";

function CurrenciesItem({ charCode, value, baseLang }) {
  let baseValute;

  if (baseLang === "ru") {
    baseValute = "RUB";
  } else if (baseLang === "en") {
    baseValute = "USD";
  }

  return (
    <li className="currencies__item">
      <h2 className="currencies__default">1 {charCode}:</h2>
      <p className="currencies__value">
        {value} {baseValute}
      </p>
    </li>
  );
}

export default CurrenciesItem;
