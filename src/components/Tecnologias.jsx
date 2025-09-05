import React from 'react';
import './style/Body.css'

import html from '../assets/img/tec/html.webp'
import css from '../assets/img/tec/css.webp'
import js from '../assets/img/tec/js.webp'
import java from '../assets/img/tec/java.webp'
import php from '../assets/img/tec/php.webp'
import springboot from '../assets/img/tec/springboot.webp'
import laravel from '../assets/img/tec/laravel.webp'
import react from '../assets/img/tec/react.webp'
import vite from '../assets/img/tec/vite.webp'
import mysqlb from '../assets/img/tec/mysqlb.webp'
import git from '../assets/img/tec/git.webp'
import github from '../assets/img/tec/github.webp'
import bootstrap from '../assets/img/tec/bootstrap.webp'
import twcss from '../assets/img/tec/twcss.webp'
import apacheb from '../assets/img/tec/apacheb.webp'
import postman from '../assets/img/tec/postman.webp'
import npm from '../assets/img/tec/npm.webp'
import node from '../assets/img/tec/node.webp'
import chart from '../assets/img/tec/chart.webp'
import linux from '../assets/img/tec/linux.webp'
import json from '../assets/img/tec/json.webp'
import figma from '../assets/img/tec/figma.webp'
import blender from '../assets/img/tec/blender.webp'
import photopea from '../assets/img/tec/photopea.webp'
import canvas from '../assets/img/tec/canvas.webp'
import trello from '../assets/img/tec/trello.webp'

import tecnologias from '../json/tecnologias.json';

// Mapa: nombre en JSON (sin .webp) -> import correspondiente
//twcss,json,
const imageSrcMap = {
  html, css, js, java, php, springboot, laravel, react, vite, mysqlb,
  git, github, bootstrap, apacheb, postman, npm, node, chart,
  linux, figma, blender, photopea, canvas, trello
};

const Tecnologias = ({ items = []}) => {
    const data = items.length ? items : tecnologias;

    return (
        <>
            <div className="container-limitado">
                <div className="row seccion-f">
                    <div className="col-12">
                        <hr />
                        <h1 className="titulo-tecnologias i-tilde">Tecnologias</h1>
                        <p className="monologo-tecnologias">
                            Estas son algunas de las tecnologías y herramientas que domino y utilizo en mis proyectos de desarrollo web. Explora el listado para conocer las bases y frameworks con los que trabajo habitualmente.
                        </p>
                        <div className="tecnologias-container">
                            {/* Iterar tecnologias.json y mostrar solo img y title */}
                            {data.map((tec, idx) => {
                                const src = imageSrcMap[tec.img]; // usar solo imports
                                if (!src) return null; // si no hay coincidencia, no renderizar
                                return (
                                    <div className="caja-tecnologia button-box shadow-green" key={idx}>
                                        <img className="img-tec" src={src} alt={tec.title + " logo"} />
                                        <span>{tec.title}</span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Tecnologias;