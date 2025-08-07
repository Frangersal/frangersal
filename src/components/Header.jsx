import React from 'react'
import logo from '../assets/img/FGSM-Primary.png'
import globeIcon from '../assets/icons/fontawesome-free-6.4.0-web/svgs/solid/globe.svg'
import moonIcon from '../assets/icons/fontawesome-free-6.4.0-web/svgs/solid/moon.svg'
import './style/Header.css'

const Header = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark  bg-verde">
                <div className="container">

                    <a className="navbar-brand" href="#">
                        <img src={logo} alt="Logo" width="60" 
                            className="d-inline-block align-text-top" />
                    </a>
                    
                    {/* Botones de idioma y modo oscuro */}
                    <div className="d-flex align-items-center gap-2 order-lg-last">
                        {/* Botón de idioma */}
                        <button className="btn btn-outline-light btn-sm d-flex align-items-center justify-content-center gap-1 header-button" type="button">
                            <img src={globeIcon} alt="Language" width="16" height="16" className="header-icon" />
                            <span className="language-text">ES</span>
                        </button>
                        
                        {/* Botón de modo oscuro */}
                        <button className="btn btn-outline-light btn-sm d-flex align-items-center justify-content-center header-button" type="button">
                            <img src={moonIcon} alt="Dark Mode" width="16" height="16" className="header-icon" />
                        </button>
                    </div>
                    
                    <button className="navbar-toggler fs-4 p-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active fs-5 fw-bold" aria-current="page" href="#perfil-section">Perfil</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link fs-5 fw-bold" href="#proyectos-section">Proyectos</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link fs-5 fw-bold" href="#tecnologias-section">Tecnologías</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link fs-5 fw-bold" href="#descargas-section">Descargas</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav> 
        </>
    )
}

export default Header
