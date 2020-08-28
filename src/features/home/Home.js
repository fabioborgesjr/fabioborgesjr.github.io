import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Option from "../../components/buttons/option/Option";
import Section from "../../components/section/Section";
import { home } from "../../modules/constants/PageConstants";
import { getOptionsArray } from "../../modules/helpers/HomeOptionsHelper";
import { setActivePage } from "../../reducers/main";
import "./Home.scss";

const getOptions = () => {
  return getOptionsArray().map((option) => (
    <Option key={option} text={option} to={option.toLowerCase()} />
  ));
};

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setActivePage(home));
  }, [dispatch]);

  return (
    <Section className="home">
      <div className="content">
        <img
          className="home__photo"
          src="https://avatars.githubusercontent.com/fabioborgesjr"
          alt="Homepage"
        />
        <div className="home__intro">
          <h2>Hi, I'm Fábio and be welcome!</h2>
        </div>
        {getOptions()}
      </div>
    </Section>
  );
}
