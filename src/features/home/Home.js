import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { headersObject } from "../../helpers/Constants";
import { setActivePage } from "../../reducers/main";
import "./Home.scss";

const page = headersObject.home;

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setActivePage(page));
  }, [dispatch]);

  return (
    <section className="home">
      <img
        className="home__photo"
        src="https://avatars.githubusercontent.com/salazenas"
        alt="Homepage"
      />
      <div className="home__intro">
        <h1>Hi, I'm Fábio and be welcome!</h1>
        <article>
          <span>
            {
              "I'm a brazilian developer with 3+ years of experience, working" +
              " at the most of time in web applications development " +
              "with ReactJS and NodeJS. "
            }
            <strong>
               I'm going to do the same with mobile development!
            </strong>
          </span>
        </article>
      </div>
    </section>
  );
}
