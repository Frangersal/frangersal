import React, { useState, useEffect } from 'react'
import logo from '../assets/img/FGSM-Primary.webp'
import moonIcon from '../assets/icons/moon.svg'
import sunIcon from '../assets/icons/sun.svg'
import { MX, US } from 'country-flag-icons/react/3x2'
import './style/Header.css'

const Header = ({ darkMode, setDarkMode }) => {
    const [activeSection, setActiveSection] = useState('perfil-section');
    const [lang, setLang] = useState('ES');
    const [showLangModal, setShowLangModal] = useState(false);

    // Solo visual por ahora: elige el idioma desde el modal, sin lógica de traducción
    const handleSelectLang = (value) => {
        setLang(value);
        setShowLangModal(false);
    };

    // Cerrar el modal con Escape
    useEffect(() => {
        if (!showLangModal) return;
        const onKeyDown = (e) => {
            if (e.key === 'Escape') setShowLangModal(false);
        };
        window.addEventListener('keydown', onKeyDown);
        return () => window.removeEventListener('keydown', onKeyDown);
    }, [showLangModal]);

    // Actualiza el modo y guarda en localStorage
    const handleToggle = () => {
        setDarkMode(dm => {
            const newMode = !dm;
            localStorage.setItem('fgsm-dark-mode', newMode);
            return newMode;
        });
    };

    // Scroll suave con offset (altura del navbar + margen extra)
    const getOffset = () => {
        const nav = document.querySelector('.navbar');
        const h = nav ? nav.offsetHeight : 0;
        return h + 16; // margen extra "un poquito más arriba"
    };
    const smoothScrollTo = (id) => {
        const el = document.getElementById(id);
        if (!el) return;
        const y = el.getBoundingClientRect().top + window.pageYOffset - getOffset();
        window.scrollTo({ top: y, behavior: 'smooth' });
    };
    const handleNavClick = (e, id) => {
        e.preventDefault();
        smoothScrollTo(id);
        // opcional: actualizar hash sin salto brusco
        history.replaceState(null, '', `#${id}`);
    };

    useEffect(() => {
        const ids = ['perfil-section','tecnologias-section','proyectos-section','certificados-section','descargas-section'];
        const onScroll = () => {
            const scrollPos = window.scrollY + 120; // offset por navbar
            let current = ids[0];
            ids.forEach(id => {
                const el = document.getElementById(id);
                if (el && el.offsetTop <= scrollPos) current = id;
            });
            setActiveSection(current);
        };
        onScroll();
        window.addEventListener('scroll', onScroll);
        window.addEventListener('resize', onScroll);
        return () => {
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('resize', onScroll);
        };
    }, []);

    // Ajustar scroll inicial si hay hash en la URL
    useEffect(() => {
        if (window.location.hash) {
            const id = window.location.hash.slice(1);
            // Esperar al render para calcular posición correcta
            setTimeout(() => smoothScrollTo(id), 0);
        }
    }, []);

    return (
        <> 
            <nav className={`navbar navbar-expand-lg navbar-dark bg-verde fixed-top`}>
                <div className="container">

                    <a className="navbar-brand" href="#">
                        <img src={logo} alt="Logo" width="60" 
                            className="d-inline-block align-text-top" />
                    </a>
                    
                    {/* Botones de idioma y modo oscuro */}
                    <div className="d-flex align-items-center gap-2 order-lg-last">
                        {/* Botón de idioma (solo visual, sin lógica de traducción todavía) */}
                        <button
                            type="button"
                            className="language-toggle"
                            onClick={() => setShowLangModal(true)}
                            aria-haspopup="dialog"
                            aria-label="Elegir idioma"
                            style={{ color: 'var(--blanco)' }}
                        >
                            {/* Bandera real (country-flag-icons); el emoji de bandera no renderiza a color en Linux */}
                            {lang === 'ES' ? (
                                <MX className="language-flag" title="" aria-hidden="true" />
                            ) : (
                                <US className="language-flag" title="" aria-hidden="true" />
                            )}
                            <span className="language-text" style={{ color: 'var(--blanco)' }}>{lang}</span>
                        </button>

                        {/* Botón de modo oscuro */}
                        <button
                            type="button"
                            className={`theme-toggle${darkMode ? ' is-dark' : ''}`}
                            onClick={handleToggle}
                            role="switch"
                            aria-checked={darkMode}
                            aria-label={darkMode ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
                        >
                            <span className="theme-toggle-track">
                                <span className="theme-toggle-thumb" aria-hidden="true"></span>
                                <span className="theme-toggle-icon theme-toggle-icon-sun">
                                    <img src={sunIcon} alt="" width="12" height="12" />
                                </span>
                                <span className="theme-toggle-icon theme-toggle-icon-moon">
                                    <img src={moonIcon} alt="" width="12" height="12" />
                                </span>
                            </span>
                        </button>
                    </div>
                    
                    <button className="navbar-toggler fs-4 p-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a
                                    className={`nav-link fs-5 fw-bold${activeSection==='perfil-section' ? ' active':''}`}
                                    aria-current="page"
                                    href="#perfil-section"
                                    onClick={(e)=>handleNavClick(e,'perfil-section')}
                                >Perfil</a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className={`nav-link fs-5 fw-bold${activeSection==='tecnologias-section' ? ' active':''}`}
                                    href="#tecnologias-section"
                                    onClick={(e)=>handleNavClick(e,'tecnologias-section')}
                                >Tecnologías</a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className={`nav-link fs-5 fw-bold${activeSection==='proyectos-section' ? ' active':''}`}
                                    href="#proyectos-section"
                                    onClick={(e)=>handleNavClick(e,'proyectos-section')}
                                >Proyectos</a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className={`nav-link fs-5 fw-bold${activeSection==='certificados-section' ? ' active':''}`}
                                    href="#certificados-section"
                                    onClick={(e)=>handleNavClick(e,'certificados-section')}
                                >Certificados</a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className={`nav-link fs-5 fw-bold${activeSection==='descargas-section' ? ' active':''}`}
                                    href="#descargas-section"
                                    onClick={(e)=>handleNavClick(e,'descargas-section')}
                                >Descargas</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* Modal de selección de idioma (solo visual, sin lógica de traducción todavía) */}
            {showLangModal && (
                <div
                    className="lang-modal-backdrop"
                    onClick={() => setShowLangModal(false)}
                >
                    <div
                        className="lang-modal"
                        role="dialog"
                        aria-modal="true"
                        aria-label="Selecciona un idioma"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            type="button"
                            className="lang-modal-close"
                            onClick={() => setShowLangModal(false)}
                            aria-label="Cerrar"
                        >
                            ×
                        </button>
                        <div className="lang-modal-options">
                            <button
                                type="button"
                                className={`lang-modal-option${lang === 'ES' ? ' is-active' : ''}`}
                                onClick={() => handleSelectLang('ES')}
                            >
                                <MX className="lang-modal-flag" title="" aria-hidden="true" />
                                <span>Español</span>
                            </button>
                            <button
                                type="button"
                                className={`lang-modal-option${lang === 'EN' ? ' is-active' : ''}`}
                                onClick={() => handleSelectLang('EN')}
                            >
                                <US className="lang-modal-flag" title="" aria-hidden="true" />
                                <span>English</span>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Header
