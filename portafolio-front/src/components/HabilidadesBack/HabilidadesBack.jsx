import React from 'react';
import styles from './HabilidadesBack.module.css'
const express = require('../../assets/back/express.png')
const node = require('../../assets/back/node.png')
const passport = require('../../assets/back/passportjs.png')
const javascript = require('../../assets/back/js_back.png')
const postgresql = require('../../assets/back/postgresql.png')
const sequelize = require('../../assets/back/sequelize.png')
const {
    container
} = styles
function HabilidadesBack(props) {
    return (
        <div className={container}>
            <img src={javascript}/>
            <img src={node}/>
            <img src={express}/>
            <img src={passport}/>
            <img src={postgresql}/>
            <img src={sequelize}/>
        </div>
    );
}

export default HabilidadesBack;