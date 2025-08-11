import React, { useRef, useState, useEffect } from 'react'
import foto from '../assets/img/foto/Perfil Frangersal 2025.webp'

import whatsappIcon from '../assets/icons/fontawesome-free-6.4.0-web/svgs/brands/square-whatsapp.svg'
import linkedinIcon from '../assets/icons/fontawesome-free-6.4.0-web/svgs/brands/linkedin.svg'
import githubIcon from '../assets/icons/fontawesome-free-6.4.0-web/svgs/brands/square-github.svg'
import envelopeIcon from '../assets/icons/fontawesome-free-6.4.0-web/svgs/solid/square-envelope.svg'

import apachelogo from '../assets/img/tec/apacheb.webp'
import blenderlogo from '../assets/img/tec/blender.webp'
import bootstraplogo from '../assets/img/tec/bootstrap.webp'
import canvaslogo from '../assets/img/tec/canvas.webp'
import csslogo from '../assets/img/tec/css.webp'
import figmalogo from '../assets/img/tec/figma.webp'
import gitlogo from '../assets/img/tec/git.webp'
import githublogo from '../assets/img/tec/github.webp'
import htmllogo from '../assets/img/tec/html.webp'
import javalogo from '../assets/img/tec/java.webp'
import jslogo from '../assets/img/tec/js.webp'
import laravellogo from '../assets/img/tec/laravel.webp'
import linuxlogo from '../assets/img/tec/linux.webp'
import mysqllogo from '../assets/img/tec/mysqlb.webp'
import nodelogo from '../assets/img/tec/node.webp'
import npmlogo from '../assets/img/tec/npm.webp'
import photopealogo from '../assets/img/tec/photopea.webp'
import phplogo from '../assets/img/tec/php.webp'
import postmanlogo from '../assets/img/tec/postman.webp'
import springbootlogo from '../assets/img/tec/springboot.webp'
import trellologo from '../assets/img/tec/trello.webp'
import twcsslogo from '../assets/img/tec/twcss.webp'

import calcpc from '../assets/img/proyectos-ss/calcpc.webp'
import guitarla from '../assets/img/proyectos-ss/guitarla.webp'
import listacompras from '../assets/img/proyectos-ss/listacompras.webp'
import micheladastoys from '../assets/img/proyectos-ss/micheladastoys.webp'
import mycalculator from '../assets/img/proyectos-ss/mycalculator.webp'
import mytodo from '../assets/img/proyectos-ss/mytodo.webp'
import royaltyflights from '../assets/img/proyectos-ss/royaltyflights.webp'
import tecnmtutorias from '../assets/img/proyectos-ss/tecnmtutorias.webp'
import viandamarket from '../assets/img/proyectos-ss/viandamarket.webp'

import '../assets/css/style.css'
import './style/Body.css'
import Header from './Header'

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
        } else {
            root.style.setProperty('--blanco', '#000');
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
                                                            <img className="boton-icono" src={githubIcon} alt="GitHub" />
                                                        </a>
                                                        <a href="mailto:frangersal@outlook.com" target="_blank" rel="noopener noreferrer" className="button-box button-box-contact shadow-green center">
                                                            <img className="boton-icono" src={envelopeIcon} alt="Email" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <div className="col-xs-12 col-sm-12 col-md-12 animar-sec">
                                                <p className="pie-frangersal animar-pop mt-4">&lt;FGSM/&gt;</p>
                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={darkMode ? "card-footer card-footer-dark" : "card-footer"}>&lt; @Frangersal /&gt;</div>
                    </div>
                </div>


                <div className="container-limitado">
                    <div className="row seccion-f">
                        <div className="col-12">
                            <hr />
                            <h1 className="titulo-tecnologias i-tilde">Tecnologias</h1>
                            <p className="monologo-tecnologias">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam officiis a delectus, possimus exercitationem est quos numquam! Laudantium minus magni deserunt nisi a quis repellendus tempora non, ipsa temporibus placeat.</p>
                            <div className="tecnologias-container">
                                <div className="caja-tecnologia button-box shadow-green">
                                    <img className="img-tec" src={htmllogo} alt="html logo" />
                                    <span>HTML</span>
                                </div>
                                <div className="caja-tecnologia button-box shadow-green">
                                    <img className="img-tec" src={csslogo} alt="html logo" />
                                    <span>CSS</span>
                                </div>
                                <div className="caja-tecnologia button-box shadow-green">
                                    <img className="img-tec" src={jslogo} alt="html logo" />
                                    <span>JavaScript</span>
                                </div>
                                <div className="caja-tecnologia button-box shadow-green">
                                    <img className="img-tec" src={javalogo} alt="html logo" />
                                    <span>Java</span>
                                </div>
                                <div className="caja-tecnologia button-box shadow-green">
                                    <img className="img-tec" src={phplogo} alt="html logo" />
                                    <span>PHP</span>
                                </div>
                                <div className="caja-tecnologia button-box shadow-green">
                                    <img className="img-tec" src={springbootlogo} alt="html logo" />
                                    <span>SpringBoot</span>
                                </div>
                                <div className="caja-tecnologia button-box shadow-green">
                                    <img className="img-tec" src={laravellogo} alt="html logo" />
                                    <span>Laravel</span>
                                </div>
                                <div className="caja-tecnologia button-box shadow-green">
                                    <img className="img-tec" src={mysqllogo} alt="html logo" />
                                    <span>MySQL</span>
                                </div>
                                <div className="caja-tecnologia button-box shadow-green">
                                    <img className="img-tec" src={gitlogo} alt="html logo" />
                                    <span>Git</span>
                                </div>
                                <div className="caja-tecnologia button-box shadow-green">
                                    <img className="img-tec" src={githublogo} alt="html logo" />
                                    <span>GitHub</span>
                                </div>
                                <div className="caja-tecnologia button-box shadow-green">
                                    <img className="img-tec" src={bootstraplogo} alt="html logo" />
                                    <span>Bootstrap</span>
                                </div>
                                <div className="caja-tecnologia button-box shadow-green">
                                    <img className="img-tec" src={twcsslogo} alt="html logo" />
                                    <span>Tailwind</span>
                                </div>
                                <div className="caja-tecnologia button-box shadow-green">
                                    <img className="img-tec" src={apachelogo} alt="html logo" />
                                    <span>Apache</span>
                                </div>
                                <div className="caja-tecnologia button-box shadow-green">
                                    <img className="img-tec" src={postmanlogo} alt="html logo" />
                                    <span>Postman</span>
                                </div>
                                <div className="caja-tecnologia button-box shadow-green">
                                    <img className="img-tec" src={npmlogo} alt="html logo" />
                                    <span>npm</span>
                                </div>
                                <div className="caja-tecnologia button-box shadow-green">
                                    <img className="img-tec" src={nodelogo} alt="html logo" />
                                    <span>Node.js</span>
                                </div>
                                <div className="caja-tecnologia button-box shadow-green">
                                    <img className="img-tec" src={linuxlogo} alt="html logo" />
                                    <span>Linux/WSL</span>
                                </div>
                                <div className="caja-tecnologia button-box shadow-green">
                                    <img className="img-tec" src={figmalogo} alt="html logo" />
                                    <span>Figma</span>
                                </div>
                                <div className="caja-tecnologia button-box shadow-green">
                                    <img className="img-tec" src={blenderlogo} alt="html logo" />
                                    <span>Blender</span>
                                </div>
                                <div className="caja-tecnologia button-box shadow-green">
                                    <img className="img-tec" src={photopealogo} alt="html logo" />
                                    <span>Photopea</span>
                                </div>
                                <div className="caja-tecnologia button-box shadow-green">
                                    <img className="img-tec" src={canvaslogo} alt="html logo" />
                                    <span>Canvas</span>
                                </div>
                                <div className="caja-tecnologia button-box shadow-green">
                                    <img className="img-tec" src={trellologo} alt="html logo" />
                                    <span>Trello</span>
                                </div>
                            </div>
                        </div>

                        {/* <div className="col-xs-12 col-sm-12 col-md-12 animar-sec">
                            <p className="pie-frangersal animar-pop mt-4">&lt;FGSM/&gt;</p>
                        </div> */}
                    </div>
                </div>


                <div className="container-limitado">
                    <div className="row seccion-f">
                        <div className="col-12">
                            <hr />
                            <h1 className="titulo-tecnologias">Proyectos</h1>

                            <p className="monologo-tecnologias">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam officiis a delectus, possimus exercitationem est quos numquam! Laudantium minus magni deserunt nisi a quis repellendus tempora non, ipsa temporibus placeat.</p>
                            <div className="tecnologias-container">


                                <div className="row row-cols-1 row-cols-md-3 g-4">
                                    <div className="col">
                                        <div className="card shadow-green">
                                            <h4 className="card-header">
                                                Vianda Market
                                            </h4>
                                            <img src={viandamarket} className="card-img-top " alt="..." />
                                            <div className={darkMode ? "card-body card-body-dark" : "card-body"}>
                                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                            </div>
                                            <div className={darkMode ? "card-footer card-footer-dark" : "card-footer"}>&lt; @Frangersal /&gt;</div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="card shadow-green">
                                            <h4 className="card-header">
                                                TecNM Tutorias
                                            </h4>
                                            <img src={tecnmtutorias} className="card-img-top" alt="..." />
                                            <div className={darkMode ? "card-body card-body-dark" : "card-body"}>
                                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                            </div>
                                            <div className={darkMode ? "card-footer card-footer-dark" : "card-footer"}>&lt; @Frangersal /&gt;</div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="card shadow-green">
                                            <h4 className="card-header">
                                                Royal Flights
                                            </h4>
                                            <img src={royaltyflights} className="card-img-top" alt="..." />
                                            <div className={darkMode ? "card-body card-body-dark" : "card-body"}>
                                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                                            </div>
                                            <div className={darkMode ? "card-footer-dark" : "card-footer"}>&lt; @Frangersal /&gt;</div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="card shadow-green">
                                            <h4 className="card-header">
                                                Micheladas Toys
                                            </h4>
                                            <img src={micheladastoys} className="card-img-top" alt="..." />
                                            <div className={darkMode ? "card-body card-body-dark" : "card-body"}>
                                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                            </div>
                                            <div className={darkMode ? "card-footer card-footer-dark" : "card-footer"}>&lt; @Frangersal /&gt;</div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="card shadow-green">
                                            <h4 className="card-header">
                                                GuitarLA
                                            </h4>
                                            <img src={guitarla} className="card-img-top" alt="..." />
                                            <div className={darkMode ? "card-body card-body-dark" : "card-body"}>
                                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                            </div>
                                            <div className={darkMode ? "card-footer card-footer-dark" : "card-footer"}>&lt; @Frangersal /&gt;</div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="card shadow-green">
                                            <h4 className="card-header">
                                                Propinas y Consumo
                                            </h4>
                                            <img src={calcpc} className="card-img-top" alt="..." />
                                            <div className={darkMode ? "card-body card-body-dark" : "card-body"}>
                                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                            </div>
                                            <div className={darkMode ? "card-footer card-footer-dark" : "card-footer"}>&lt; @Frangersal /&gt;</div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="card shadow-green">
                                            <h4 className="card-header">
                                                Lista de compras
                                            </h4>
                                            <img src={listacompras} className="card-img-top" alt="..." />
                                            <div className={darkMode ? "card-body card-body-dark" : "card-body"}>
                                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                            </div>
                                            <div className={darkMode ? "card-footer card-footer-dark" : "card-footer"}>&lt; @Frangersal /&gt;</div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="card shadow-green">
                                            <h4 className="card-header">
                                                To do list
                                            </h4>
                                            <img src={mytodo} className="card-img-top" alt="..." />
                                            <div className={darkMode ? "card-body card-body-dark" : "card-body"}>
                                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                            </div>
                                            <div className={darkMode ? "card-footer card-footer-dark" : "card-footer"}>&lt; @Frangersal /&gt;</div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="card shadow-green">
                                            <h4 className="card-header">
                                                Calculadora
                                            </h4>
                                            <img src={mycalculator} className="card-img-top" alt="..." />
                                            <div className={darkMode ? "card-body card-body-dark" : "card-body"}>
                                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                            </div>
                                            <div className={darkMode ? "card-footer card-footer-dark" : "card-footer"}>&lt; @Frangersal /&gt;</div>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>

                        {/* <div className="col-xs-12 col-sm-12 col-md-12 animar-sec">
                            <p className="pie-frangersal animar-pop mt-4">&lt;FGSM/&gt;</p>
                        </div> */}
                    </div>
                </div>

            </div>
        </>
    )
}

export default Body