import React, { useRef, useState, useEffect } from 'react'

import foto from '../assets/img/foto/Perfil Frangersal 2026.webp'

import whatsappIcon from '../assets/icons/square-whatsapp.svg'
import linkedinIcon from '../assets/icons/linkedin.svg'
import sgithubIcon from '../assets/icons/square-github.svg'
import envelopeIcon from '../assets/icons/square-envelope.svg'

import cv from '../assets/pdf/Currículum Vitae Francisco G Salinas.pdf'


import Header from './Header'
import Tecnologias from './Tecnologias'
import Proyectos from './Proyectos'
import Certificados from './Certificados'
import { useLanguage } from '../context/LanguageContext'

import '../assets/css/style.css'
import './style/Body.css'

const Body = () => {
    const { t } = useLanguage();
    // Inicializa darkMode desde localStorage, si existe
    const getInitialMode = () => {
        const stored = localStorage.getItem('fgsm-dark-mode');
        return stored === null ? true : stored === 'true';
    };
    const [darkMode, setDarkMode] = useState(getInitialMode);

    useEffect(() => {
        // Guarda la preferencia en localStorage
        localStorage.setItem('fgsm-dark-mode', darkMode);
        // --blanco es constante (no depende del modo): navbar, botones y cards usan
        // fondo verde oscuro siempre, así que su texto debe seguir siendo claro en ambos modos.
        // --texto-pagina sí cambia: es para títulos/párrafos que están directamente sobre
        // el fondo de la página (que sí cambia de imagen/color entre modo claro y oscuro).
        const root = document.documentElement;
        if (darkMode) {
            root.style.setProperty('--texto-pagina', '#ECEDE7');
            document.body.classList.add('dark-mode');
        } else {
            root.style.setProperty('--texto-pagina', '#000');
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
            <main className={darkMode ? "body-container-dark" : "body-container"}>
                <div className="container-limitado" id="perfil-section">
                    <div className="card shadow-green-off text-bg-dark  " >
                        <div className="card-header ">
                            <h1 className="window-title">{t.perfil.titulo}</h1>
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
                                                    <h2 className="puesto">{t.perfil.puestoLinea1} <br /> {t.perfil.puestoLinea2}</h2>
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
                                                        {t.perfil.descripcion}
                                                    </p>
                                                    <div className="descripcion_boton">
                                                        <a href="https://wa.me/525637462715" target="_blank" rel="noopener noreferrer" className="button-box button-box-contact shadow-green center">
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

                <div id="tecnologias-section">
                    <Tecnologias />
                </div>
                <div id="proyectos-section">
                    <Proyectos darkMode={darkMode} />
                </div>
                <div id="certificados-section">
                    <Certificados darkMode={darkMode} />
                </div>

                <div className="container-limitado" id="descargas-section">
                    <div className="row seccion-f">
                        <div className="col-12">
                            <hr />
                            <h1 className="titulo-tecnologias">{t.descargas.titulo}</h1>
                            <p className="monologo-tecnologias">
                                {t.descargas.intro}
                            </p>
                            <div className="tecnologias-container">
                                <a
                                    href={cv}
                                    download="Currículum-Francisco-Salinas.pdf"
                                    className="caja-descarga button-box-descarga shadow-green"
                                    style={{ textDecoration: 'none', color: 'inherit' }}
                                >
                                    <span className={darkMode ? 'text-descargar-dark' : 'text-descargar'}>
                                        {t.descargas.botonLinea1} <br />{t.descargas.botonLinea2}
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

            </main>
            {showScrollTop && (
                <button
                    className="scroll-top-btn shadow-green"
                    onClick={scrollToTop}
                    aria-label={t.header.irArriba}
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