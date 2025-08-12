import React from 'react';
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
                        <p className="monologo-tecnologias">
                            Estas son algunas de las tecnologías y herramientas que domino y utilizo en mis proyectos de desarrollo web. Explora el listado para conocer las bases y frameworks con los que trabajo habitualmente.
                        </p>
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