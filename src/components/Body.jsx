import React, { useRef, useState } from 'react'
import foto from '../assets/img/Perfil Frangersal 2025.jpg'

import apachelogo from '../assets/img/tec/apache.webp'
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
import mysqllogo from '../assets/img/tec/mysql.webp'
import nodelogo from '../assets/img/tec/node.webp'
import npmlogo from '../assets/img/tec/npm.webp'
import photopealogo from '../assets/img/tec/photopea.webp'
import phplogo from '../assets/img/tec/php.webp'
import postmanlogo from '../assets/img/tec/postman.webp'
import springbootlogo from '../assets/img/tec/springboot.webp'
import trellologo from '../assets/img/tec/trello.webp'
import twcsslogo from '../assets/img/tec/twcss.webp'

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
            <div className=  "body-container-dark">
                <div className="container-limitado">
                    <div className="row seccion-f">
                        <div className="row seccion-verde">
                            <div className="window-header">
                                <h1 className="window-title">Perfil y Contacto</h1>
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


                <div className="container-limitado">
                    <div className="row seccion-f">
                        <div className="col-12">
                            <h1 className="titulo-tecnologias i-tilde">Tecnologias</h1>
                            <div className="tecnologias-container">
                                <div className="caja-tecnologia boton-cuadrado">
                                    <img className="img-tec" src={htmllogo} alt="html logo" />
                                    <span>HTML</span>
                                </div>
                                <div className="caja-tecnologia boton-cuadrado">
                                    <img className="img-tec" src={csslogo} alt="html logo" />
                                    <span>CSS</span>
                                </div>
                                <div className="caja-tecnologia boton-cuadrado">
                                    <img className="img-tec" src={jslogo} alt="html logo" />
                                    <span>JS</span>
                                </div>
                                <div className="caja-tecnologia boton-cuadrado">
                                    <img className="img-tec" src={javalogo} alt="html logo" />
                                    <span>Java</span>
                                </div>
                                <div className="caja-tecnologia boton-cuadrado">
                                    <img className="img-tec" src={phplogo} alt="html logo" />
                                    <span>PHP</span>
                                </div>
                                <div className="caja-tecnologia boton-cuadrado">
                                    <img className="img-tec" src={springbootlogo} alt="html logo" />
                                    <span>SpringBoot</span>
                                </div>
                                <div className="caja-tecnologia boton-cuadrado">
                                    <img className="img-tec" src={laravellogo} alt="html logo" />
                                    <span>Laravel</span>
                                </div>
                                <div className="caja-tecnologia boton-cuadrado">
                                    <img className="img-tec" src={mysqllogo} alt="html logo" />
                                    <span>MySQL</span>
                                </div>
                                <div className="caja-tecnologia boton-cuadrado">
                                    <img className="img-tec" src={gitlogo} alt="html logo" />
                                    <span>Git</span>
                                </div>
                                <div className="caja-tecnologia boton-cuadrado">
                                    <img className="img-tec" src={githublogo} alt="html logo" />
                                    <span>GitHub</span>
                                </div>
                                <div className="caja-tecnologia boton-cuadrado">
                                    <img className="img-tec" src={bootstraplogo} alt="html logo" />
                                    <span>Bootstrap</span>
                                </div>
                                <div className="caja-tecnologia boton-cuadrado">
                                    <img className="img-tec" src={twcsslogo} alt="html logo" />
                                    <span>Tailwind</span>
                                </div>
                                <div className="caja-tecnologia boton-cuadrado">
                                    <img className="img-tec" src={apachelogo} alt="html logo" />
                                    <span>Apache</span>
                                </div>
                                <div className="caja-tecnologia boton-cuadrado">
                                    <img className="img-tec" src={postmanlogo} alt="html logo" />
                                    <span>Postman</span>
                                </div>
                                <div className="caja-tecnologia boton-cuadrado">
                                    <img className="img-tec" src={npmlogo} alt="html logo" />
                                    <span>npm</span>
                                </div>
                                <div className="caja-tecnologia boton-cuadrado">
                                    <img className="img-tec" src={nodelogo} alt="html logo" />
                                    <span>Node.js</span>
                                </div>
                                <div className="caja-tecnologia boton-cuadrado">
                                    <img className="img-tec" src={linuxlogo} alt="html logo" />
                                    <span>Linux</span>
                                </div>
                                <div className="caja-tecnologia boton-cuadrado">
                                    <img className="img-tec" src={figmalogo} alt="html logo" />
                                    <span>Figma</span>
                                </div>
                                <div className="caja-tecnologia boton-cuadrado">
                                    <img className="img-tec" src={blenderlogo} alt="html logo" />
                                    <span>Blender</span>
                                </div>
                                <div className="caja-tecnologia boton-cuadrado">
                                    <img className="img-tec" src={photopealogo} alt="html logo" />
                                    <span>Photopea</span>
                                </div>
                                <div className="caja-tecnologia boton-cuadrado">
                                    <img className="img-tec" src={canvaslogo} alt="html logo" />
                                    <span>Canvas</span>
                                </div>
                                <div className="caja-tecnologia boton-cuadrado">
                                    <img className="img-tec" src={trellologo} alt="html logo" />
                                    <span>Trello</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-xs-12 col-sm-12 col-md-12 animar-sec">
                            <p className="pie-frangersal animar-pop mt-4">&lt;FGSM/&gt;</p>
                        </div>
                    </div>
                </div>


            </div>
        </>
    )
}

export default Body