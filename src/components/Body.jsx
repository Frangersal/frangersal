import React, { useRef, useState, useEffect } from 'react'

import foto from '../assets/img/foto/Perfil Frangersal 2025.webp'

import whatsappIcon from '../assets/icons/fontawesome-free-6.4.0-web/svgs/brands/square-whatsapp.svg'
import linkedinIcon from '../assets/icons/fontawesome-free-6.4.0-web/svgs/brands/linkedin.svg'
import sgithubIcon from '../assets/icons/fontawesome-free-6.4.0-web/svgs/brands/square-github.svg'
import envelopeIcon from '../assets/icons/fontawesome-free-6.4.0-web/svgs/solid/square-envelope.svg'


import Header from './Header'
import Tecnologias from './Tecnologias'
import Proyectos from './Proyectos'
import Certificados from './Certificados'

import '../assets/css/style.css'
import './style/Body.css'

const Body = () => {
    // Inicializa darkMode desde localStorage, si existe
    const getInitialMode = () => {
        const stored = localStorage.getItem('fgsm-dark-mode');
        return stored === null ? true : stored === 'true';
    };
    const [darkMode, setDarkMode] = useState(getInitialMode);

    useEffect(() => {
        // Guarda la preferencia en localStorage
        localStorage.setItem('fgsm-dark-mode', darkMode);
        // Cambia el valor de --blanco según el modo
        const root = document.documentElement;
        if (darkMode) {
            root.style.setProperty('--blanco', '#ECEDE7');
            document.body.classList.add('dark-mode');
        } else {
            root.style.setProperty('--blanco', '#000');
            document.body.classList.remove('dark-mode');
        }
    }, [darkMode]);

    const handleLetterEnter = (e) => {
        // Aplicar animación de subida
        e.target.style.animation = 'ola-subida 0.45s ease-out forwards';
    };

    const handleLetterLeave = (e) => {
        // Aplicar animación de bajada
        e.target.style.animation = 'ola-bajada 0.45s ease-out forwards';
    };

    const [showScrollTop, setShowScrollTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 120);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [darkMode]);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            <Header darkMode={darkMode} setDarkMode={setDarkMode} />
            <div className={darkMode ? "body-container-dark" : "body-container"}>
                <div className="container-limitado">
                    <div className="card shadow-green-off text-bg-dark  " >
                        <div className="card-header ">
                            <h1 className="window-title">Perfil y Contacto</h1>
                            {/* <div className="window-controls">
                                <button className="window-btn close"></button>
                                <button className="window-btn minimize"></button>
                                <button className="window-btn maximize"></button>
                            </div> */}
                        </div>
                        <div className={darkMode ? "card-body card-body-dark" : "card-body"}>
                            <div className="row seccion-f">
                                <div className="row ">
                                    <div className="contenido-ventana">
                                        <div className="row">
                                            <div className="col-xs-12 col-sm-12 col-md-5 col-lg-6 seccion-f animar-sec">
                                                <div className="cara animar-pop">
                                                    <img className="img-perfil shadow-green-off" src={foto} alt="Mi Foto" />
                                                    <h1 className="nombre">Francisco Gerardo Salinas Mendoza</h1>
                                                    <h2 className="puesto">Frontend Web <br /> Developer Jr.</h2>
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
                                                        <a href="https://wa.me/527443492221" target="_blank" rel="noopener noreferrer" className="button-box button-box-contact shadow-green center">
                                                            <img className="boton-icono" src={whatsappIcon} alt="WhatsApp" />
                                                        </a>
                                                        <a href="https://www.linkedin.com/in/frangersal/" target="_blank" rel="noopener noreferrer" className="button-box button-box-contact shadow-green center">
                                                            <img className="boton-icono" src={linkedinIcon} alt="LinkedIn" />
                                                        </a>
                                                        <a href="https://github.com/Frangersal" target="_blank" rel="noopener noreferrer" className="button-box button-box-contact shadow-green center">
                                                            <img className="boton-icono" src={sgithubIcon} alt="GitHub" />
                                                        </a>
                                                        <a href="mailto:frangersal@outlook.com" target="_blank" rel="noopener noreferrer" className="button-box button-box-contact shadow-green center">
                                                            <img className="boton-icono" src={envelopeIcon} alt="Email" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={darkMode ? "card-footer card-footer-dark" : "card-footer"}>&lt; @Frangersal /&gt;</div>
                    </div>
                </div>

            <Tecnologias  />
            <Proyectos darkMode={darkMode} />
            <Certificados darkMode={darkMode}  />

            </div>
            {showScrollTop && (
                <button
                    className="scroll-top-btn shadow-green"
                    onClick={scrollToTop}
                    aria-label="Ir arriba"
                >
                    <div className='letter-arrow'>

                        &gt;
                    </div>
                </button>
            )}
        </>
    )
}

export default Body