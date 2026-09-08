import React, { useRef } from 'react';
import certificateIcon from '../assets/icons/certificate-solid-full.svg'
import './style/Body.css'
import certificados from '../json/certificados.json';
import { useLanguage } from '../context/LanguageContext';

const Certificados = ({ items = [], darkMode }) => {
  const data = items.length ? items : certificados;
  const { lang, t } = useLanguage();
  const rafId = useRef(null);

  // Mismo patrón que ProyectoCard: rAF evita el artefacto de blur al repintar seguido
  const handlePointerMove = (event) => {
    const target = event.currentTarget;
    const clientX = event.clientX;
    const clientY = event.clientY;
    if (rafId.current) return;
    rafId.current = requestAnimationFrame(() => {
      const bounds = target.getBoundingClientRect();
      target.style.setProperty('--pointer-x', `${clientX - bounds.left}px`);
      target.style.setProperty('--pointer-y', `${clientY - bounds.top}px`);
      rafId.current = null;
    });
  };

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
          <h1 className="titulo-tecnologias">{t.certificados.titulo}</h1>
          <p className="monologo-tecnologias">
            {t.certificados.intro}
          </p>
          <div className="tecnologias-container">
            <div className={`certificados-tabla-outer${darkMode ? ' is-dark' : ''}`} onMouseMove={handlePointerMove}>
              <div className="certificados-tabla-inner">
                <table className="certificados-tabla">
                  <thead>
                    <tr>
                      <th>{t.certificados.colCertificado}</th>
                      <th>{t.certificados.colInstitucion}</th>
                      <th>{t.certificados.colAnio}</th>
                      <th>{t.certificados.colEnlace}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((c, idx) => {
                      const hasPdf = typeof c.pdf === 'string' && c.pdf.trim() !== '';
                      return (
                        <tr key={idx}>
                          <td>{lang === 'EN' ? (c.titleEn ?? c.title) : c.title}</td>
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
                                  {t.certificados.ver}
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
      </div>
    </div>
  );
};
export default Certificados;