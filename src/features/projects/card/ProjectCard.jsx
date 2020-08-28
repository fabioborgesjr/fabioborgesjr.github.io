import React from "react";
import "./ProjectCard.scss";

const cardStyle = {
  display: "flex",
  backgroundColor: "white",
  borderRadius: "1em",
  marginBottom: "1rem",
  flexDirection: "row",
  flexWrap: "wrap",
  width: 450
};

const screenshotStyle = {
  margin: "1rem",
  height: "104px",
  width: "168px"
}

const infoStyle = {
  display: "flex",
  flexDirection: "column",
  margin: "1rem"
}

export default function ProjectCard(project) {
  return (
    <section style={cardStyle}>
      <img style={screenshotStyle} src={project.image} alt={`${project.name} project snapshot`} />
      <div style={infoStyle} className="project__info">
        <h3>{project.name}</h3>
        <a href={project.url} target="_blank" rel="noopener noreferrer">Clique aqui para visualizar</a>
      </div>
    </section>
  );
}
