
import React from "react";
import CabeceraCV from "./Componentes/CabeceraCV";
import Perfil from "./Componentes/Perfil";
import Educacion from "./Componentes/Educacion";
import Experiencia from "./Componentes/Experiencia";
import StackTecnologias from "./Componentes/StackTecnologias";
import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
  return (
    <div >
      <CabeceraCV />
      <Perfil />
      <Educacion />
      <StackTecnologias />
      <Experiencia />     
    
    </div>
  );
}

export default App;
