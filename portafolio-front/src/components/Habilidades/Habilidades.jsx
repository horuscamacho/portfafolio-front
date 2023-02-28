import React from 'react';
import styles from './Habilidades.module.css'
import HabilidadesFront from "../HabilidadesFront/HabilidadesFront";
import HabilidadesBack from "../HabilidadesBack/HabilidadesBack";
const {
    container,
    container_img
} = styles
function Habilidades(props) {
    const {buttonSelected} = props
    return (
        <div className={container}>
            <div className={container_img}>
                {buttonSelected === "left" ? <HabilidadesFront /> : <HabilidadesBack />}
            </div>
        </div>
    );
}

export default Habilidades;