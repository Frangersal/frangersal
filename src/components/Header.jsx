import React, { useState, useEffect } from 'react'
import logo from '../assets/img/FGSM-Primary.webp'
import moonIcon from '../assets/icons/moon.svg'
import sunIcon from '../assets/icons/sun.svg'
import './style/Header.css'

const Header = ({ darkMode, setDarkMode }) => {
    const [hover, setHover] = useState(false);
    const [activeSection, setActiveSection] = useState('perfil-section');

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
                        {/* Botón de idioma 
                        
                        <button className="btn btn-outline-light btn-sm d-flex align-items-center justify-content-center gap-1 header-button" type="button">
                            <img src={globeIcon} alt="Language" width="16" height="16" className="header-icon" />
                            <span className="language-text">ES</span>
                        </button>*/}
                        
                        {/* Botón de modo oscuro */}
                        <button
                            className="btn btn-outline-light btn-sm d-flex align-items-center justify-content-center header-button"
                            type="button"
                            onClick={handleToggle}
                            aria-label="Toggle dark mode"
                            onMouseEnter={() => setHover(true)}
                            onMouseLeave={() => setHover(false)}
                        >
                            <img
                                src={darkMode ? sunIcon : moonIcon}
                                alt={darkMode ? "Light Mode" : "Dark Mode"}
                                width="16"
                                height="16"
                                className={
                                    darkMode && hover
                                        ? "header-icon-dark"
                                        : "header-icon"
                                }
                            />
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
        </>
    )
}

export default Header
