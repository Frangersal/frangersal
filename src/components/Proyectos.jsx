import React from 'react';
import earthIcon from '../assets/icons/fontawesome-free-6.4.0-web/svgs/solid/earth-americas.svg'
import githubIcon from '../assets/icons/fontawesome-free-6.4.0-web/svgs/brands/github.svg'

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
          <p className="monologo-tecnologias">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam officiis a delectus, possimus exercitationem est quos numquam! Laudantium minus magni deserunt nisi a quis repellendus tempora non, ipsa temporibus placeat.</p>
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
                          <img src={earthIcon} alt="" className="icon-proyecto-link" />
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