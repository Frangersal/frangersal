import React from 'react';
import certificateIcon from '../assets/icons/certificate-solid-full.svg'
import './style/Body.css'
import certificados from '../json/certificados.json';

const Certificados = ({ items = [], darkMode }) => {
  const data = items.length ? items : certificados;
  const tableClass = `table table-hover shadow-green-off${darkMode ? ' table-dark' : ''}`;

  // Mapa de PDFs dentro de src/assets/pdf/** -> URL finales servibles por Vite
  const pdfMap = import.meta.glob('../assets/pdf/**/*.pdf', { eager: true, as: 'url' });
  const resolvePdfUrl = (relativePdfPath) => {
    // relativePdfPath viene del JSON, ejemplo: "pdf/platzi/archivo.pdf"
    const key = `../assets/${relativePdfPath}`;
    return pdfMap[key] || '#';
  };

  return (
    <div className="container-limitado">
      <div className="row seccion-f">
        <div className="col-12">
          <hr />
          <h1 className="titulo-tecnologias">Certificados</h1>
          <p className="monologo-tecnologias">
            Aquí puedes consultar una lista de mis certificados obtenidos en distintas plataformas y cursos. Estos avalan mis conocimientos y habilidades en desarrollo web, programación y tecnologías relacionadas.
          </p>
          <div className="tecnologias-container">
            <table className={tableClass}>
              <thead className="table-dark">
                <tr>
                  <th className='table-th '>Certificado</th>
                  <th className='table-th '>Institución</th>
                  <th className='table-th '>Año</th>
                  <th className='table-th '>Enlace</th>
                </tr>
              </thead>
              <tbody>
                {data.map((c, idx) => {
                  const hasPdf = typeof c.pdf === 'string' && c.pdf.trim() !== '';
                  return (
                    <tr key={idx}>
                      <td>{c.title}</td>
                      <td>{c.org}</td>
                      <td>{c.year}</td>
                      <td className='table-td'>
                        <div className='button-ver-box'>
                          {hasPdf && (
                            <a
                              href={resolvePdfUrl(c.pdf)}
                              download
                              className="btn btn-success btn-sm btn-certificado-link"
                            >
                              <img src={certificateIcon} alt="" className="icon-certificado-link" />
                              Ver
                            </a>
                          )}
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Certificados;