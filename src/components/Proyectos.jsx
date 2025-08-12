import React from 'react';
import githubIcon from '../assets/icons/github.svg'

import urlUpRightIcon from '../assets/icons/up-right-from-square-solid-full.svg'

import './style/Body.css'
import projects from '../json/projects.json';

const Proyectos = ({ items = [], darkMode }) => {
  const data = items.length ? items : projects;
  const urlProjectsImg= "../src/assets/img/proyectos-ss/"

  return (
    <div className="container-limitado">
      <div className="row seccion-f">
        <div className="col-12">
          <hr />
          <h1 className="titulo-tecnologias">Proyectos</h1>
          <p className="monologo-tecnologias">
            A continuación puedes ver algunos de los proyectos en los que he trabajado, donde aplico mis conocimientos en desarrollo web, frameworks modernos y buenas prácticas. Cada proyecto incluye una breve descripción, tecnologías utilizadas y enlaces para ver el demo o el código fuente.
          </p>
          <div className="tecnologias-container">
            <div className="row row-cols-1 row-cols-md-3 g-4">
              {data.map((project, idx) => (
                <div className="col" key={idx}>
                  <div className="card shadow-green">
                    <h4 className="card-header">
                      {project.title}
                    </h4>
                    <img src={urlProjectsImg+project.img} className="card-img-top" alt={project.title} />
                    <div className={darkMode ? "card-body card-body-dark" : "card-body"}>
                      <p className="card-text">{project.description}</p>
                    </div>
                    <div className={darkMode ? "card-body card-body-dark" : "card-body"}>
                      <div className="button-group">
                        <a href={project.urlDemo} target="_blank" rel="noopener noreferrer" className="btn btn-success btn-proyecto-link">
                          <img src={urlUpRightIcon} alt="" className="icon-proyecto-link" />
                          <span>Demo</span>
                        </a>
                        <a href={project.urlRepo} target="_blank" rel="noopener noreferrer" className="btn btn-dark btn-proyecto-link">
                          <img src={githubIcon} alt="" className="icon-proyecto-link" />
                          <span>Repositorio</span>
                        </a>
                      </div>
                    </div>
                    <div className={darkMode ? "card-footer card-footer-dark" : "card-footer"}>
                      {Array.isArray(project.tools) && project.tools.map((tool, tIdx) => (
                        <span key={tIdx} className="badge m-1 bg-success-subtle border border-success-subtle text-success-emphasis rounded-pill">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Proyectos;