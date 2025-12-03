import React from "react";

function Habilidades({ habilidades }) {
  return (
    <section className="container">
      <h3 className="titulo_habilidades">
        <i className="fas fa-lightbulb"></i> Habilidades
      </h3>

      <ul className="lista_habilidades">
        {habilidades.map((item, index) => (
          <li key={index} className="habilidad_item">
            <strong>{item.habilidad}</strong> — {item.nivel}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Habilidades;
