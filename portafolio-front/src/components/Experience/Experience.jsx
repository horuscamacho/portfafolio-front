import React, {useState} from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import styles from './Experience.module.css'
import {useVisibility} from "../../Hooks/useVisibility";
const asana = require('../../assets/asana.png')
const slack = require('../../assets/slack.png')
const scrum = require('../../assets/scrum.png')
const webstorm = require('../../assets/webstorm.png')
const vscode = require('../../assets/vscode.png')
const {
    container,
    container_text,
    container_text_title,
    container_text_subtitle,
    container_text_description,
    experience_container,
    experience_container_bg,
    experience_container_years,
    experience_container_certificates,
    tools_container,
    tools_container_logos
} = styles
function Experience(props) {
    const {visibility, setVisibility, efecto} = useVisibility()


    return (
        <VisibilitySensor onChange={(isVisible) =>{setVisibility(isVisible)}}>
            <div style={efecto(500)}
                 className={container}>
                <div className={container_text}>
                    <div className={container_text_title}>
                        <p><span>//</span> HOLA MUNDO</p>
                    </div>
                    <div className={container_text_subtitle}>
                        <p>Disfruto cada momento lo que hago, soy egresado del bootcamp de Henry.</p>
                    </div>
                    <div className={container_text_description}>
                        <p>Como parte de mi formación desarrollé con mis compañeros en el bootcamp una tienda en línea, utilizando metodologías ágiles.</p>
                    </div>
                </div>
                <div className={experience_container}>
                    <div className={experience_container_years}>
                        <p>1+</p>
                        <p>Años de experiencia.</p>
                    </div>
                    <div className={experience_container_bg}>
                        <p>Experiencia</p>
                    </div>
                    <div className={experience_container_certificates}>
                        <p>15+</p>
                        <p>Cursos y certificados.</p>
                    </div>
                </div>
                <div className={tools_container}>
                    <div className={tools_container_logos}>
                        <img alt="asana_logo" src={asana} />
                        <img alt="slack_logo" src={slack} />
                        <img alt="scrum_logo" src={scrum} />
                        <img alt="webstorm_logo" src={webstorm} />
                        <img alt="vscode_logo" src={vscode} />
                    </div>
                </div>
            </div>
        </VisibilitySensor>

    );
}

export default Experience;