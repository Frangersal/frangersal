import React from 'react';
import githubIcon from '../assets/icons/github.svg'


import portafolio from '../assets/img/proyectos/portafolio.webp'
import viandamarket from '../assets/img/proyectos/viandamarket.webp'
import tecnmtutorias from '../assets/img/proyectos/tecnmtutorias.webp'
import royaltyflights from '../assets/img/proyectos/royaltyflights.webp'
import micheladastoys from '../assets/img/proyectos/micheladastoys.webp'
import guitarla from '../assets/img/proyectos/guitarla.webp'
import myfilmsearch from '../assets/img/proyectos/myfilmsearch.webp'
import myblog from '../assets/img/proyectos/myblog.webp'
import interescompuesto from '../assets/img/proyectos/interescompuesto.webp'
import crossyroad from '../assets/img/proyectos/crossyroad.webp'
import calcpc from '../assets/img/proyectos/calcpc.webp'
import listacompras from '../assets/img/proyectos/listacompras.webp'
import mytodo from '../assets/img/proyectos/mytodo.webp'
import mycalculator from '../assets/img/proyectos/mycalculator.webp'

import urlUpRightIcon from '../assets/icons/up-right-from-square-solid-full.svg'

import './style/Body.css'
import projects from '../json/projects.json';

// Mapa: nombre en JSON (sin .webp) -> import correspondiente
const imageSrcMap = {
  portafolio, 
  // viandamarket, 
  // tecnmtutorias, 
  // royaltyflights, 
  // micheladastoys, 
  guitarla, 
  myfilmsearch,
  // myblog, 
  interescompuesto, 
  crossyroad,
  calcpc, 
  listacompras, 
  mytodo, 
  mycalculator
};

const Proyectos = ({ items = [], darkMode }) => {
  const data = items.length ? items : projects;

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
              {data.map((project, idx) => {
                const src = imageSrcMap[project.img];
                if (!src) return null;
                return (
                  <div className="col" key={idx}>
                    <div className="card shadow-green">
                      <h4 className="card-header">
                        {project.title}
                      </h4>
                      <img src={src} className="card-img-top" alt={project.title} />
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
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Proyectos;