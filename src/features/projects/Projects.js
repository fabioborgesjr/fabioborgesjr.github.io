import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { projects } from "../../modules/constants/PageConstants";
import {
  setActivePage
} from "../../reducers/main";
import ProjectCard from "./card/ProjectCard";

const sectionStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "50%"
};

const reactProjects = [
  {
    name: "E-commerce de moda",
    image: "https://353a23c500dde3b2ad58-c49fe7e7355d384845270f4a7a0a7aa1.ssl.cf2.rackcdn.com/5ee8c9a126aa500008a1cf4f/screenshot.png",
    url: "https://fabio-fashionista.netlify.app/"
  },
  {
    name: "Lista de contatos",
    image: "https://353a23c500dde3b2ad58-c49fe7e7355d384845270f4a7a0a7aa1.ssl.cf2.rackcdn.com/5f111eb08254ed00075c6a8d/screenshot.png",
    url: "https://fabioborgesjr-contactlist.netlify.app/"
  },
  {
    name: "Calculadora",
    image: "https://353a23c500dde3b2ad58-c49fe7e7355d384845270f4a7a0a7aa1.ssl.cf2.rackcdn.com/5f112101206b010007a23b15/screenshot.png",
    url: "https://fabioborgesjr-calculadora.netlify.app/"
  }
];

const htmlCssProjects = [
  {
    name: "IMDB",
    image: "https://353a23c500dde3b2ad58-c49fe7e7355d384845270f4a7a0a7aa1.ssl.cf2.rackcdn.com/5e964ba417198d0007745d0b/screenshot.png",
    url: "https://blissful-stonebraker-fec716.netlify.app/"
  },
  {
    name: "Instagram Mobile First",
    image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAagAAAEsCAMAAAChTdc8AAABAlBMVEUYGBgfHx9ra2umpqa9vb3IyMjT09PY2NghISE3NzelpaXT09M5OTmYmJjT09PU1NSZmZkhISG/v7/AwMBQUFDNzc3Nzc1SUlLAwMDLy8ufn5+JiYmEhISnp6dsbGzIyMj////l5eXFxcWtra2ampqOjo6Hh4fy8vK+vr6SkpL29va3t7fV1dX+/v6Kioqurq7Ozs719fX9/f37+/uoqKiWlpbPz8+IiIjHx8eVlZXp6emcnJyvr6/5+fns7Ozr6+ve3t7BwcHCwsJ8fHx7e3v4+PjCwsI+Pj76+vo9PT2ysrKysrIjIyPi4uLi4uLx8fHx8fFcXFxbW1vh4eH5+fn4+PgebTuEAAAAVnRSTlOAgqLJ3+v4/4KLyveLv/n5wIPi45Xw8Zbi/////8qj7P//////////////////////////////////////+Ozr38rJo6L4yov5i8C/g+Pi8fCWleL5975u1e4AAAPbSURBVHgB7NY1ohxBDEDBXppeZub7X9IfbYcTa1SVKX5qKOQBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC9/mA4amrHNaPhoD8ucU2ms5pGM52XmMaLZU1ltd6EPE7bms4u4KHaH2pCx1O483SoKR2DnanNuf51ud5u10v71BG7TYlk8b/T7f7pdmmfOmJdApms6l/X+7dr+9QRq3mJY1r/ud2/3dqnrniUMHpN5lDNuETRrzXt1ffpGenmS/uZ+DQtUQzrp6Tf80/DEsWrpvYqUTQ1taZEUZMTSiihhEqoRPFOTiihhBIqCaGEEkqohIQSSiihEhJKKKGESkgooYQSKiGhhBJKqISEEkoooRISSiihhEpIKKGEEiohoYQSSqh8hApAqA/2yBo9gxiIYhdRYJnR9mLuf61Q87NbL8yUo/ep0een5wdhFMdRGPjeM74Fv4RK0oyry9LkCm7FL6HyIubu4iL/RxvyS6gy4slF5R/bjF9CVQUA1E3rdX3feW1TA0BR/fFt+CWU0gCYQV39BgOAVp8b8UuoSgOMU3/77qcRQFcb8UuoAmBeHsEyAxTb8EuoEmDtnqFuBSi34JdQeQTM3XPYzUCUb8AvoQpgXF7RZQQK934JlcTA9JpPQJw490uoFDD9a94bIHXul1AZMNgGA5C59ksoD6iVbaFqwHPsl1A+8GWfNIDv2C+hAmCwT1ogcOyXUCHg2SceEDr2S6gI6OyTDogc+yVUDPT2SQ/EW/X/sHfHRAACMBAEXVHhXxcmDuCHPQtb57MP9aNAgQIFChQoUKBAgQIFChQoUKBAgQIFChQoUKBAgQIFChQoUKBAgQIFChQoUKBAgQIFChQoUKBAgQIFqj9M6wNVn3rmgXr/eBpUXz9HAKqvH/gA1ddP5oDq60eoQPX1s26g+vqhRFB9/fRoH6h+zLcPVD+P3QeqH5zvA9W/cOgDlT9FCQIVvBk6j/7NEKiu+x+DgRp4hQdq5LkkqJF3raD2AgUKFChQoECBAgUKFChQoECBAgUKFChQoECBAgUKFChQoECBAgUKFChQoECBAgUKFChQoECBAgUKFChQoECBAgUKFChQoECBAgUKFChQoEANdJEHXwUMxQAIAMlfZCDk7b13/FupDspdTms5VBS0VkJFRWsVVNS01kBFS2sdVMSexvoAGQON1dAxTrQ1zRCy0NYKJdtOU8cGKeNJS9cMMfdJQ9cDOeNOO+8MQdsy0cq3Rmgah542UjNDV+yaqsj55/KyarqAX3twIAAAAAAgyN96kKsNAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgWwklBtekcYYAAAAASUVORK5CYII=",
    url: "https://awesome-kirch-ee2073.netlify.app/"
  }
];

const getProjects = (source) => {
  return source.map(project => <ProjectCard key={project.name} {...project} />)
}

export default function Projects() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setActivePage(projects));
  }, [dispatch]);

  return (
    <section style={sectionStyle}>
      <span>
        {"Essa seção ainda está em desenvolvimento, veja todos os meus projetos no meu "}
        <a href="https://github.com/fabioborgesjr" target="_blank" rel="noopener noreferrer">
          {"Github"}
        </a>
      </span>
      <h1>React</h1>
      {getProjects(reactProjects)}
      <h1>HTML/CSS</h1>
      {getProjects(htmlCssProjects)}
    </section>
  );
}
