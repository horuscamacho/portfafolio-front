import React from 'react';
import styles from './Proyectos.module.css'
const diploma = require('../../assets/prov_diplomas/css_grid_layout.png')
const {
    container,
    img_container,
    title_container,
    title_course,
    plataforma_container,
    container_description
} = styles
function Proyectos(props) {
    return (
        <div className={container}>
            <div className={title_container}>
                <p><span>//</span> Cursos y Certificaciones.</p>
            </div>
            <div className={img_container}>
                <img src={diploma} />
            </div>
            <div className={title_course}>
                <p>Css Grid Layout</p>
            </div>
            <div className={plataforma_container}>
                <a>Platzi</a>
            </div>
            <div className={container_description}>
                <p>Usar Grid Layout para maquetar sitios web complejos de forma estilizada y sencilla. Analizar los diseños, dividir la aplicación en cuadrículas y convertirlas en estilos CSS. Integrar CSS Grid con Flexbox y el modelo de caja para alinear los elementos exactamente donde deben estar. </p>
            </div>
        </div>
    );
}

export default Proyectos;