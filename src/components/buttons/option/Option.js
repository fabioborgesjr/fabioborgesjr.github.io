import React from "react";
import { Link } from "react-router-dom";
import "./Option.scss";

export default function Option({ text, to }) {
  return (
    <Link className="option" to={to} >
      {text}
    </Link>
  );
}
