import React, { useRef } from 'react'
import foto from '../assets/img/Perfil Frangersal 2025.jpg'
import whatsappIcon from '../assets/icons/fontawesome-free-6.4.0-web/svgs/brands/square-whatsapp.svg'
import linkedinIcon from '../assets/icons/fontawesome-free-6.4.0-web/svgs/brands/linkedin.svg'
import githubIcon from '../assets/icons/fontawesome-free-6.4.0-web/svgs/brands/square-github.svg'
import envelopeIcon from '../assets/icons/fontawesome-free-6.4.0-web/svgs/solid/square-envelope.svg'
import '../assets/css/style.css'
import './style/Body.css'

const Body = () => {
    const handleLetterEnter = (e) => {
        // Aplicar animación de subida
        e.target.style.animation = 'ola-subida 0.45s ease-out forwards';
    };

    const handleLetterLeave = (e) => {
        // Aplicar animación de bajada
        e.target.style.animation = 'ola-bajada 0.45s ease-out forwards';
    };

    return (
        <>
            <div className="body-container">
                <div className="container-limitado">
                    <div className="row seccion-f">
                        <div className="row seccion-verde">
                            <div className="window-header">
                                <div className="window-title">Perfil y Contacto</div>
                                <div className="window-controls">
                                    <button className="window-btn close"></button>
                                    <button className="window-btn minimize"></button>
                                    <button className="window-btn maximize"></button>
                                </div>
                            </div>
                            <div className="contenido-ventana">
                                <div className="row">
                                    <div className="col-xs-12 col-sm-12 col-md-5 col-lg-6 seccion-f animar-sec">
                                        <div className="cara animar-pop">
                                            <img className="img-perfil" src={foto} alt="Mi Foto" />
                                            <h1 className="nombre">Francisco Gerardo Salinas Mendoza</h1>
                                            <h2 className="puesto">Web Developer Jr.</h2>
                                        </div>
                                    </div>

                                    <div className="col-xs-12 col-sm-12 col-md-7  col-lg-6 seccion-f animar-sec">
                                        <div className="descripcion animar-pop">
                                            <div className="caja-fgsm">
                                                <span className="letra" onMouseEnter={handleLetterEnter} onMouseLeave={handleLetterLeave}>&lt;</span>
                                                <span className="letra" onMouseEnter={handleLetterEnter} onMouseLeave={handleLetterLeave}>F</span>
                                                <span className="letra" onMouseEnter={handleLetterEnter} onMouseLeave={handleLetterLeave}>G</span>
                                                <span className="letra" onMouseEnter={handleLetterEnter} onMouseLeave={handleLetterLeave}>S</span>
                                                <span className="letra" onMouseEnter={handleLetterEnter} onMouseLeave={handleLetterLeave}>M</span>
                                                <span className="letra" onMouseEnter={handleLetterEnter} onMouseLeave={handleLetterLeave}>/</span>
                                                <span className="letra" onMouseEnter={handleLetterEnter} onMouseLeave={handleLetterLeave}>&gt;</span>
                                            </div>
                                            <p className="perfil-pro">
                                                Soy un desarrollador Full Stack Java Jr. y Web
                                                Developer Jr. con habilidades en Java, PHP, MySQL,
                                                Spring, Laravel y Bootstrap. Me apasiona el desarrollo
                                                web sobre todo la parte del Backend, estoy siempre
                                                buscando mejorar y estar actualizado en las últimas
                                                tecnologías. Estoy emocionado por enfrentar nuevos
                                                desafíos y ser parte de su equipo.
                                            </p>
                                            <div className="descripcion_boton">
                                                <a href="https://wa.me/527443492221" target="_blank" rel="noopener noreferrer" className="boton-cuadrado center">
                                                    <img className="boton-icono" src={whatsappIcon} alt="WhatsApp" />
                                                </a>
                                                <a href="https://www.linkedin.com/in/frangersal/" target="_blank" rel="noopener noreferrer" className="boton-cuadrado center">
                                                    <img className="boton-icono" src={linkedinIcon} alt="LinkedIn" />
                                                </a>
                                                <a href="https://github.com/Frangersal" target="_blank" rel="noopener noreferrer" className="boton-cuadrado center">
                                                    <img className="boton-icono" src={githubIcon} alt="GitHub" />
                                                </a>
                                                <a href="mailto:frangersal@outlook.com" target="_blank" rel="noopener noreferrer" className="boton-cuadrado center">
                                                    <img className="boton-icono" src={envelopeIcon} alt="Email" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                <div className="col-xs-12 col-sm-12 col-md-12 animar-sec">
                                    <p className="pie-frangersal animar-pop mt-4">&lt;FGSM/&gt;</p>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Body