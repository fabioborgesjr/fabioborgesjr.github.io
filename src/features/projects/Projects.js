import React, { useEffect, Fragment } from "react";
import { useDispatch } from "react-redux";
import { projects } from "../../modules/constants/PageConstants";
import { setActivePage } from "../../reducers/main";
import ProjectCard from "./card/ProjectCard";
import data from "./data";

const sectionStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "50%"
};


const getProjects = (projects) => {
  return projects.map((project) => (
    <ProjectCard key={project.name} {...project} />
  ));
};

const getGroups = () => {
  return data.map((group) => (
    <Fragment>
      <h1>{group.name}</h1>
      {getProjects(group.projects)}
    </Fragment>
  ));
};

export default function Projects() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setActivePage(projects));
  }, [dispatch]);

  return (
    <section style={sectionStyle}>
      <span>
        {
          "Essa seção ainda está em desenvolvimento, veja todos os meus projetos no meu "
        }
        <a
          href="https://github.com/fabioborgesjr"
          target="_blank"
          rel="noopener noreferrer"
        >
          {"Github"}
        </a>
      </span>
      {getGroups()}
    </section>
  );
}
