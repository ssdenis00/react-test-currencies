import { useEffect, useState } from "react";
import { Route, Switch } from "react-router";
import { CurrentValuteContext } from "../../contexts/CurrentValuteContext";
import Converter from "../Converter/Converter";
import Currencies from "../Currencies/Currencies";
import Header from "../Header/Header";
import api from "../../utils/api";
import "./App.css";

function App() {
  const [valute, setValute] = useState({});

  useEffect(() => {
    const userLang = navigator.language || navigator.userLanguage;
    api
      .getInitialValute()
      .then((res) => {
        const eurRub = res.Valute.EUR;
        const usdRub = res.Valute.USD;
        const eurUsd = {
          ID: "EU22222",
          CharCode: "EUR",
          Value: eurRub.Value / usdRub.Value,
        };
        const usdEur = {
          ID: "UE33333",
          CharCode: "USD",
          Value: usdRub.Value / eurRub.Value,
        };
        const rubEur = {
          ID: "RE44444",
          CharCode: "RUB",
          Value: 1 / eurRub.Value,
        };
        const rubUsd = {
          ID: "RU55555",
          CharCode: "RUB",
          Value: 1 / usdRub.Value,
        };

        setValute({ eurRub, usdRub, eurUsd, usdEur, rubEur, rubUsd, userLang });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function handleSelectOnChange(evt) {
    let data = { ...valute };
    data.userLang = evt.target.value;
    setValute(data);
  }

  return (
    <CurrentValuteContext.Provider value={valute}>
      <Header selectOnChange={handleSelectOnChange} />
      <Switch>
        <Route exact path="/">
          <Converter />
        </Route>
        <Route path="/currencies">
          <Currencies />
        </Route>
      </Switch>
    </CurrentValuteContext.Provider>
  );
}

export default App;
