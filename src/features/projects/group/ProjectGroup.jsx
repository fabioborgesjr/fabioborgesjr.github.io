import React, { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProjectCard from "../card/ProjectCard";
import "./ProjectGroup.scss";
import { useState } from "react";

const getProjects = (projects, isOpen) => {
  return (
    <div
      style={
        isOpen
          ? { display: "flex", flexDirection: "column", height: "auto" }
          : { display: "none", height: 0 }
      }
    >
      {projects.map((project) => (
        <ProjectCard key={project.name} {...project} />
      ))}
    </div>
  );
};

export default function ProjectGroup({ group }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Fragment>
      <div className="project__group-name">
        <h1>{group.name}</h1>
        <button onClick={() => setIsOpen(!isOpen)}>
          <FontAwesomeIcon icon={["fas", isOpen ? "sort-down" : "sort-up"]} />
        </button>
      </div>
      {getProjects(group.projects, isOpen)}
    </Fragment>
  );
}
