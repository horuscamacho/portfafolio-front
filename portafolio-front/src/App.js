import './App.css';
import MainProject from "./components/MainProject/MainProject";
import Experience from "./components/Experience/Experience";
import Habilidades from "./components/Habilidades/Habilidades";
import BotonesFrontBack from "./components/BotonesFrontBack/BotonesFrontBack";
import {useState} from "react";
import {useButtonsFrontBack} from "./Hooks/useButtonsFrontBack";
import Proyectos from "./components/Proyectos/Proyectos";


function App() {
    const{buttonSelected, setBack, setFront} = useButtonsFrontBack()
  return (
      <div className="main_container_app">
          <MainProject />
          <Experience />
          <BotonesFrontBack buttonSelected={buttonSelected} setBack={setBack} setFront={setFront}/>
          <Habilidades buttonSelected={buttonSelected} />
          <Proyectos />
      </div>
  );
}

export default App;
