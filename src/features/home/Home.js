import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Option from "../../components/buttons/option/Option";
import Section from "../../components/section/Section";
import { home } from "../../modules/constants/PageConstants";
import { getOptionsArray } from "../../modules/helpers/HomeOptionsHelper";
import { setActivePage } from "../../reducers/main";
import "./Home.scss";

const getOptions = () => {
  return (
    <div className="home__options">
      {getOptionsArray().map((option) => (
        <Option key={option} text={option} to={option.toLowerCase()} />
      ))}
    </div>
  );
};

const getMe = () => {
  return (
    <div className="home__me">
      <img
        className="home__photo"
        src="https://avatars.githubusercontent.com/fabioborgesjr"
        alt="Homepage"
      />
      <div className="home__intro">
        <h3>{"Hi, I'm Fábio and be welcome!"}</h3>
      </div>
    </div>
  );
};

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setActivePage(home));
  }, [dispatch]);

  return (
    <Section fullWidth className="home">
      <div className="content">
        {getMe()}
        {getOptions()}
      </div>
    </Section>
  );
}
