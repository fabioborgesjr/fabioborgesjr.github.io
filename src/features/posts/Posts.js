import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { posts } from "../../modules/constants/PageConstants";
import { setActivePage } from "../../reducers/main";
import Section from "../../components/section/Section";
import "./Posts.scss";

export default function Posts() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setActivePage(posts));
  }, [dispatch]);

  return <Section className="posts">{"Em breve!"}</Section>;
}
