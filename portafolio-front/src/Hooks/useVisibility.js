import {useState} from "react";

export const useVisibility = () => {
    const [visibility, setVisibility] = useState(false);
    const efecto = (time) => {
        return {
            opacity: visibility ? 1 : 0.15,
            transition: `opacity ${time}ms linear`
        }
    }
    return {
        setVisibility,
        visibility,
        efecto
    }
}