import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { projects } from "../../modules/constants/PageConstants";
import { setActivePage } from "../../reducers/main";
import ProjectGroup from "./group/ProjectGroup";
import data from "./data";
import "./Projects.scss";

const sectionStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
  overflow: "hidden",
  paddingBottom: "1em",
  height: "100%"
};

const projectTempIntroStyle = {
  width: "50%",
  textAlign: "center",
  paddingBottom: 18,
};

const getGroups = () => {
  return (
    <div className="project__groups">
      {data.map((group, index) => (
        <ProjectGroup key={index} group={group} />
      ))}
    </div>
  );
};

export default function Projects() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setActivePage(projects));
  }, [dispatch]);

  return (
    <section style={sectionStyle}>
      <span style={projectTempIntroStyle}>
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
