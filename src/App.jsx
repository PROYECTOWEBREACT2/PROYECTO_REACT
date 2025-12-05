// src/App.jsx
import React, { useState } from "react";

import {
  CabeceraData,
  PerfilData,
  EducacionData,
  ExperienciaData,
  StackTecnologiasData,
  ProyectosData,
  HabilidadesData,
} from "./data/cvData";

import CabeceraCV from "./Componentes/CabeceraCV";
import Perfil from "./Componentes/Perfil";
import Educacion from "./Componentes/Educacion";
import Experiencia from "./Componentes/Experiencia";
import StackTecnologias from "./Componentes/StackTecnologias";
import ToggleHabilidades from "./Componentes/ToggleHabilidades";
import FormularioTecnologia from "./Componentes/FormularioTecnologia";
import Proyectos from "./Componentes/Proyectos";

import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {

  const [tecnologias, setTecnologias] = useState(
    StackTecnologiasData.tecnologias
  );


  const agregarTecnologia = (nuevaTec) => {
    setTecnologias(prev => [...prev, nuevaTec]);
  };

  return (
    <div>
      <CabeceraCV
        nombre={CabeceraData.nombre}
        rol={CabeceraData.rol}
        contacto={CabeceraData.contacto}
      />

      <Perfil texto={PerfilData.texto} />

      <Educacion educacion={EducacionData.educacion} />
      <ToggleHabilidades habilidades={HabilidadesData.habilidades} />

      <Proyectos proyectos={ProyectosData.proyectos} />

      <Experiencia experiencias={ExperienciaData.experiencias} />
       <StackTecnologias tecnologias={tecnologias} />
      <FormularioTecnologia onAgregar={agregarTecnologia} />
    </div>
  );
}

export default App;


//app.jsx totalmente actualizada
