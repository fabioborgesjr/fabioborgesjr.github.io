import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import * as pages from "../../modules/constants/PageConstants";
import { useDispatch, useSelector } from "react-redux";
import { setActivePage, getActivePage } from "../../reducers/main";

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
  };

  const getLink = (link, text) => {
    return (
      <li key={link}>
        <Link
          className={getClassName(text)}
          to={`/${link}`}
          onClick={handleClick}
        >
          {text}
        </Link>
      </li>
    );
  };

  return activePage && activePage !== pages.home ? (
    <header className="header"></header>
  ) : null;
}

Header.propTypes = {};

export default Header;
