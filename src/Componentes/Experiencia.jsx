import React from "react";

export default function Experiencia({experiencias}) {


  return (
    <div className="container">
      <section className="Experiencia">
        <h3 className="titulo_Experiencia">
          <i className="fas fa-briefcase"></i> Experiencia Laboral
        </h3>

        
        {experiencias.map((exp, index) => (
          <div key={index} className="experiencia_item">
            <h4>{exp.cargo}</h4>
            <div className="nombre_empresa">{exp.empresa}</div>
            <div className="anio_puesto">{exp.anio}</div>
            <p className="descripcion_puesto">{exp.descripcion}</p>
          </div>
        ))}
      </section>

    
    </div>
  );
}


