import React, {useState} from 'react';
import styles from './BotonesFrontBack.module.css'
const {
    botones_habilidades_container,
    habilidades_container_box,
    button_left,
    button_right,
    button_left_selected,
    button_right_selected

} = styles
function BotonesFrontBack(props) {
    const {buttonSelected, setFront, setBack} = props

    return (
        <div className={botones_habilidades_container}>
            <div className={habilidades_container_box}>
                <div onClick={setFront}  className={buttonSelected === "left" ? button_left_selected : button_left }><p>Front-end<span>.</span></p></div>
                <div onClick={setBack}  className={buttonSelected === "right" ? button_right_selected : button_right }><p>Back-end<span>.</span></p></div>
            </div>
        </div>
    );
}

export default BotonesFrontBack;