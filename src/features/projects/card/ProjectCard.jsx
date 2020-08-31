import React from "react";
import "./ProjectCard.scss";

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
    <section className="project__card">
      <img style={screenshotStyle} src={project.image} alt={`${project.name} project snapshot`} />
      <div style={infoStyle} className="project__info">
        <h3>{project.name}</h3>
        <a href={project.url} target="_blank" rel="noopener noreferrer">Clique aqui para visualizar</a>
      </div>
    </section>
  );
}
