import React from "react";

export default function Experiencia({experiencias}) {


  return (
    <div className="container">
      <section className="Experiencia">
        <h3 className="titulo_Experiencia">
          <i className="fas fa-briefcase"></i> Experiencia Laboral
        </h3>

        {/* Renderizado de la lista de experiencias */}
        {experiencias.map((exp, index) => (
          <div key={index} className="experiencia_item">
            <h4>{exp.cargo}</h4>
            <div className="nombre_empresa">{exp.empresa}</div>
            <div className="anio_puesto">{exp.anio}</div>
            <p className="descripcion_puesto">{exp.descripcion}</p>
          </div>
        ))}
      </section>

      <footer className="footer_cv">
        <p>
          © {new Date().getFullYear()} Liliana Panesso. Todos los derechos
          reservados.
        </p>
        <div className="footer_links">
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="panessoliliana785@gmil.com">
            <i className="fas fa-envelope"></i>
          </a>
        </div>
      </footer>
    </div>
  );
}


