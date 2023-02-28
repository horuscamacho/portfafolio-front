import {useState} from "react";

export const useButtonsFrontBack = () => {
    const [buttonSelected, setButtonSelected] = useState('left');
    const setBack = () => {
        setButtonSelected("right")
    }
    const setFront = () => {
        setButtonSelected('left')
    }
    return {
        buttonSelected,
        setFront,
        setBack
    }
}


