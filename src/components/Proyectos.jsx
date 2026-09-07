import ProyectoCard from './ProyectoCard';

import portafolio from '../assets/img/proyectos/portafolio.webp'
import viandamarket from '../assets/img/proyectos/viandamarket.webp'
import tecnmtutorias from '../assets/img/proyectos/tecnmtutorias.webp'
import giosperfumes from '../assets/img/proyectos/giosperfumes.webp'
import royaltyflights from '../assets/img/proyectos/royaltyflights.webp'
import micheladasfranks from '../assets/img/proyectos/micheladasfranks.webp'
import guitarla from '../assets/img/proyectos/guitarla.webp'
import myfilmsearch from '../assets/img/proyectos/myfilmsearch.webp'
import myblog from '../assets/img/proyectos/myblog.webp'
import interescompuesto from '../assets/img/proyectos/interescompuesto.webp'
import crossyroad from '../assets/img/proyectos/crossyroad.webp'
import calcpc from '../assets/img/proyectos/calcpc.webp'
import alitalia from '../assets/img/proyectos/alitalia.webp'
import grocultural from '../assets/img/proyectos/grocultural.webp'
import dulceriasalinas from '../assets/img/proyectos/dulceriasalinas.webp'
import listacompras from '../assets/img/proyectos/listacompras.webp'
import mytodo from '../assets/img/proyectos/mytodo.webp'
import mycalculator from '../assets/img/proyectos/mycalculator.webp'

import './style/Body.css'
import projects from '../json/projects.json';

// Mapa: nombre en JSON (sin .webp) -> import correspondiente
const imageSrcMap = {
  portafolio, 
  viandamarket, 
  tecnmtutorias, 
  giosperfumes,
  // royaltyflights, 
  micheladasfranks, 
  guitarla, 
  myfilmsearch,
  // myblog, 
  interescompuesto, 
  crossyroad,
  calcpc, 
  alitalia,
  grocultural,
  dulceriasalinas,
  listacompras, 
  mytodo, 
  mycalculator
};

const Proyectos = ({ items = [], darkMode }) => {
  const data = (items.length ? items : projects)
    .slice()
    .sort((a, b) => (a.relevance ?? 999) - (b.relevance ?? 999));

  return (
    <div className="container-limitado">
      <div className="row seccion-f">
        <div className="col-12">
          <hr />
          <h2 className="titulo-tecnologias">Proyectos</h2>
          <p className="monologo-tecnologias">
            A continuación puedes ver algunos de los proyectos en los que he trabajado, donde aplico mis conocimientos en desarrollo web, frameworks modernos y buenas prácticas. Cada proyecto incluye una breve descripción, tecnologías utilizadas y enlaces para ver el demo o el código fuente.
          </p>
          <div className="tecnologias-container">
            <div className="proyectos-bento">
              {data.map((project, idx) => {
                const src = imageSrcMap[project.img];
                if (!src) return null;
                return (
                  <ProyectoCard key={idx} project={project} src={src} darkMode={darkMode} />
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