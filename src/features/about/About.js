import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { about } from "../../modules/constants/PageConstants";
import { setActivePage } from "../../reducers/main";
import Section from "../../components/section/Section";

export default function About() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setActivePage(about));
  }, [dispatch]);

  return (
    <Section>
      <article>
        <span>
          {"I'm a brazilian developer with 3+ years of experience, working" +
            " at the most of time in web applications development " +
            "with ReactJS and NodeJS. "}
          <strong>I'm going to do the same with mobile development!</strong>
        </span>
      </article>
    </Section>
  );
}
