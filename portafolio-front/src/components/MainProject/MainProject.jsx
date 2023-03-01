import VisibilitySensor from 'react-visibility-sensor';
import React, {useRef} from 'react';
import styles from './MainProject.module.css'
import {useVisibility} from "../../Hooks/useVisibility";


const {
    container,
    header,
    logo,
    logo_text,
    menu,
    foto_container,
    foto,
    circle_front,
    circle_back,
    fullstack_container,
    about_container,
    about_container_title,
    about_container_text,
    about_container_description,
    nav_dot
} = styles

const photo = require("../../assets/foto.png")


function MainProject(props) {
    const {visibility, setVisibility, efecto} = useVisibility()

    return (
        <VisibilitySensor onChange={(isVisible) =>{setVisibility(isVisible)}}>
            <div style={efecto(100)} className={container}>
            <div  className={foto_container}>
                <div className={foto}>
                    <img src={photo} alt="foto_perfil"/>
                </div>
                <div className={circle_front}><p>Front</p><p>end<span>.</span></p></div>
                <div className={circle_back}><p>Back</p><p>end<span>.</span></p></div>
                <div className={fullstack_container}><p>Desarrollador</p><p>Fullstack<span>.</span></p></div>
            </div>
            <div className={header}>
                <div className={logo}>
                    <div className={logo_text}>HORUS<span>/</span>SINHUE<span>.</span></div>
                </div>
                <div className={menu}>
                    <nav>
                        <a>Proyectos<span>.</span></a>
                        <a>Certificaciones<span>.</span></a>
                        <a>Contacto<span>.</span></a>
                    </nav>
                </div>
            </div>
            <div className={about_container}>
                <div className={about_container_title}><p><span>//</span> ACERCA DE MÍ</p></div>
                <div className={about_container_text}><p>Diseñador Web fullstack con conocimiento en front-end y back-end.</p></div>
                <div className={about_container_description}><p>Tengo sólidos conocimientos en HTML, CSS y JavaScript, proactivo y responsable además soy abogado pasante. Apasionado del desarrollo web con hambre de seguir aprendiendo y creciendo como programador.</p></div>
            </div>

        </div>
        </VisibilitySensor>

    );
}

export default MainProject;