import { useContext, useEffect, useState } from "react";
import "./Currencies.css";
import { CurrentValuteContext } from "../../contexts/CurrentValuteContext";
import CurrenciesItem from "../CurrenciesItem/CurrenciesItem";

function Currencies() {
  const [valutes, setValutes] = useState([]);
  const valute = useContext(CurrentValuteContext);

  useEffect(() => {
    if (valute.userLang === "ru") {
      setValutes([valute.usdRub, valute.eurRub]);
    } else if (valute.userLang === "en") {
      setValutes([valute.rubUsd, valute.eurUsd]);
    }
  }, [valute]);

  return (
    <main className="main">
      <section className="currencies">
        <ul className="currencies__list">
          {valutes.map((item) => (
            <CurrenciesItem
              charCode={item.CharCode}
              value={item.Value.toFixed(2)}
              baseLang={valute.userLang}
              key={item.ID}
            />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Currencies;
