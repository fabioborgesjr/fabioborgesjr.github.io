import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import * as pages from "../../modules/constants/PageConstants";
import { getBreadcrumbItems } from "../../modules/helpers/BreadcrumbHelper";
import { useDispatch, useSelector } from "react-redux";
import { setActivePage, getActivePage } from "../../reducers/main";

let activePage, dispatch;

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

const getBreadcrumb = () => {
  const items = getBreadcrumbItems(activePage);

  return (
    <ul className="breadcrumb">
      {
        items.map((item, index) => (
          <li key={index}>
            {index !== items.length - 1 ? (
              <Link
                className={getClassName(item)}
                to={`/${item.toLowerCase()}`}
                onClick={handleClick}
              >
                {item}
              </Link>
            ) : (
              item
            )}
          </li>
        ))
      }
    </ul>
  );
};

const shouldShowHeader = (activePage) => {
  return activePage && activePage !== pages.home;
};

const Header = (props) => {
  activePage = useSelector(getActivePage);
  dispatch = useDispatch();

  return shouldShowHeader(activePage) ? (
    <header className="header">{getBreadcrumb()}</header>
  ) : null;
};

Header.propTypes = {};

export default Header;
