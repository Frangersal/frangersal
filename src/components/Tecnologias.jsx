import React from 'react';
import earthIcon from '../assets/icons/fontawesome-free-6.4.0-web/svgs/solid/earth-americas.svg'
import githubIcon from '../assets/icons/fontawesome-free-6.4.0-web/svgs/brands/github.svg'

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
import vitelogo from '../assets/img/tec/vite.webp'

import './style/Body.css'
import tecnologias from '../json/tecnologias.json';

const Tecnologias = ({ items = []}) => {
    const data = items.length ? items : tecnologias;
    const urlTecnologiasImg = "/src/assets/img/tec/";

    return (
        <>
            <div className="container-limitado">
                <div className="row seccion-f">
                    <div className="col-12">
                        <hr />
                        <h1 className="titulo-tecnologias i-tilde">Tecnologias</h1>
                        <p className="monologo-tecnologias">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam officiis a delectus, possimus exercitationem est quos numquam! Laudantium minus magni deserunt nisi a quis repellendus tempora non, ipsa temporibus placeat.</p>
                        <div className="tecnologias-container">
                            {/* Iterar tecnologias.json y mostrar solo img y title */}
                            {data.map((tec, idx) => (
                                <div className="caja-tecnologia button-box shadow-green" key={idx}>
                                    <img className="img-tec" src={urlTecnologiasImg + tec.img} alt={tec.title + " logo"} />
                                    <span>{tec.title}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Tecnologias;