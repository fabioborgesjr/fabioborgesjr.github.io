import React from "react"

const sectionStyle = {
  width: "50%"
};

export default function Section(props) {
  return (
    <section className={props.className} style={sectionStyle}>
      {props.children}
    </section>
  );
}
