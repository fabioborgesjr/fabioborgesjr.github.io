import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import { headersObject } from "../../helpers/Constants";
import { useDispatch, useSelector } from "react-redux";
import {
  setActivePage,
  getActivePage
} from '../../reducers/main';

function Header(props) {
  const activePage = useSelector(getActivePage);
  const dispatch = useDispatch();

  const getClassName = (text) => {
    return text === activePage ? "active" : "";
  };

  const handleClick = (event) => {
    const headerClicked = event.target.text;

    if (headerClicked === activePage) {
      event.preventDefault();
    } else {
      dispatch(setActivePage(headerClicked));
    }
  }

  const getLink = (link, text) => {
    return (
      <li key={link}>
        <Link className={getClassName(text)} to={`/${link}`} onClick={handleClick}>
          {text}
        </Link>
      </li>
    );
  };

  return (
    <header className="header">
      <ul>
        {Object.keys(headersObject).map((index) => getLink(index, headersObject[index]))}
      </ul>
    </header>
  );
}

Header.propTypes = {};

export default Header;
