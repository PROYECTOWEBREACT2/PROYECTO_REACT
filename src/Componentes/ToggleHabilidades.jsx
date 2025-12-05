// src/Componentes/ToggleHabilidades.jsx
import React, { useState } from "react";
import Habilidades from "./Habilidades";

export default function ToggleHabilidades({ habilidades }) {
  const [mostrar, setMostrar] = useState(true);

  const toggle = () => {
    setMostrar(!mostrar);
  };

  return (
    <section className="container">
      <button onClick={toggle} className="btn_toggle">
        {mostrar ? "Ocultar Habilidades" : "Mostrar Habilidades"}
      </button>

      {mostrar && <Habilidades habilidades={habilidades} />}
    </section>
  );
}
