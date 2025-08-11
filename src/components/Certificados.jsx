import React from 'react';
import earthIcon from '../assets/icons/fontawesome-free-6.4.0-web/svgs/solid/earth-americas.svg'
import './style/Body.css'
import certificados from '../json/certificados.json';

const Certificados = ({ items = [] }) => {
  const data = items.length ? items : certificados;

  return (
    <div className="container-limitado">
      <div className="row seccion-f">
        <div className="col-12">
          <hr />
          <h1 className="titulo-tecnologias">Certificados</h1>
          <p className="monologo-tecnologias">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam officiis a delectus, possimus exercitationem est quos numquam! Laudantium minus magni deserunt nisi a quis repellendus tempora non, ipsa temporibus placeat.</p>
          <div className="tecnologias-container">
            <table className="table table-hover shadow-green-off">
              <thead className="table-dark">
                <tr>
                  <th className='table-th '>Certificado</th>
                  <th className='table-th '>Institución</th>
                  <th className='table-th '>Año</th>
                  <th className='table-th '>Enlace</th>
                </tr>
              </thead>
              <tbody>
                {data.map((c, idx) => (
                  <tr key={idx}>
                    <td>{c.title}</td>
                    <td>{c.org}</td>
                    <td>{c.year}</td>
                    <td className='table-td'>
                      <div className='button-ver-box'>
                        <a href={c.url} target="_blank" rel="noopener noreferrer" className="btn btn-success btn-sm btn-certificado-link">
                          <img src={earthIcon} alt="" className="icon-certificado-link" />
                          Ver
                        </a>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Certificados;