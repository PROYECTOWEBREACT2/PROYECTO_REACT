
import React from "react";

import {
  CabeceraData,
  PerfilData,
  EducacionData,
  ExperienciaData,
  StackTecnologiasData,
} from "./data/cvData";


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
      <CabeceraCV
       nombre={CabeceraData.nombre}
       rol={CabeceraData.rol}
       contacto={CabeceraData.contacto} />
      <Perfil texto={PerfilData.texto} />
      <Educacion educacion={EducacionData.educacion}  />
      <StackTecnologias tecnologias={StackTecnologiasData.tecnologias}  />
      <Experiencia experiencias={ExperienciaData.experiencias}   />     
    
    </div>
  );
}

export default App;
