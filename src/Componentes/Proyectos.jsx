import React from "react";

function Proyectos({ proyectos }) {
  return (
    <section className="container">
      <h3 className="titulo_proyectos">
        <i className="fas fa-folder-open"></i> Proyectos
      </h3>

      {proyectos.map((proyecto, index) => (
        <div key={index} className="proyecto_item">
          <h4>{proyecto.titulo}</h4>
          <p className="anio_proyecto">{proyecto.anio}</p>

          <p>{proyecto.descripcion}</p>

          <div className="tecnologias_proyecto">
            {proyecto.tecnologias.map((tec, i) => (
              <span key={i} className="tag_tecnologia_proyecto">
                {tec}
              </span>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

export default Proyectos;
