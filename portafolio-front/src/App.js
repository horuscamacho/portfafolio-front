import './App.css';
import MainProject from "./components/MainProject/MainProject";
import Experience from "./components/Experience/Experience";
import Habilidades from "./components/Habilidades/Habilidades";
import BotonesFrontBack from "./components/BotonesFrontBack/BotonesFrontBack";


function App() {
  return (
      <div className="main_container_app">
          <MainProject />
          <Experience />
          <BotonesFrontBack />
          <Habilidades />
      </div>
  );
}

export default App;
