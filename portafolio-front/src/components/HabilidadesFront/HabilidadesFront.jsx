import React from 'react';
import styles from './HabilidadesFront.module.css'
const javascript = require('../../assets/front/javascript.png')
const html = require("../../assets/front/html.png")
const css = require('../../assets/front/css.png')
const tailwind = require('../../assets/front/tailwind.png')
const bootstrap = require('../../assets/front/bootstrap.png')
const react = require('../../assets/front/react.png')
const cloudinary = require('../../assets/front/cloudinary.png')
const redux = require('../../assets/front/redux.png')

const {
    container
} = styles
function HabilidadesFront(props) {
    return (
        <div className={container}>
            <img src={javascript}/>
            <img src={html}/>
            <img src={css}/>
            <img src={tailwind}/>
            <img src={bootstrap}/>
            <img src={react}/>
            <img src={cloudinary}/>
            <img src={redux}/>
        </div>
    );
}

export default HabilidadesFront;