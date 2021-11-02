import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { CurrentValuteContext } from "../../contexts/CurrentValuteContext";
import "./Header.css";

function Header({ selectOnChange }) {
  const valute = useContext(CurrentValuteContext);

  return (
    <header className="header">
      <NavLink
        exact
        to="/"
        className="header__link"
        activeClassName="header__link_active"
      >
        Конвертер
      </NavLink>
      <NavLink
        to="/currencies"
        className="header__link"
        activeClassName="header__link_active"
      >
        Курс валют
      </NavLink>

      <select
        name="lang"
        id="lang"
        value={valute.userLang}
        onChange={selectOnChange}
        className="header__select"
      >
        <option value="ru">ru</option>
        <option value="en">en</option>
      </select>
    </header>
  );
}

export default Header;
