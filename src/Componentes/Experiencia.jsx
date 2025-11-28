import React from 'react';

function Experiencia() {
  return (
    <div className="container">
      <section className="Experiencia">
        <h3 className="titulo_Experiencia">
          <i className="fas fa-briefcase"></i> Experiencia Laboral
        </h3>

        {/* Primer puesto */}
        <h4>Puesto</h4>
        <div className="nombre_cargo">Desarrolladora Frontend</div>
        <div className="nombre_empresa">Tech Solutions S.A.</div>
        <div className="anio_puesto">2022–2024</div>
        <p className="descripcion_puesto">
          Desarrollo de interfaces web con React, optimización de componentes, manejo de estados y consumo de APIs REST.
        </p>

        {/* Segundo puesto */}
        <h4>Puesto</h4>
        <div className="nombre_cargo">Proyecto Personal – Página de Recomendaciones</div>
        <div className="nombre_empresa">Proyecto Independiente</div>
        <div className="anio_puesto">2024</div>
        <p className="descripcion_puesto">
          Creación de una página HTML con recomendaciones de libros, música y películas. Implementación de login y control por edad.
        </p>

        {/* Tercer puesto */}
        <h4>Puesto</h4>
        <div className="nombre_cargo">Diseñadora UX/UI</div>
        <div className="nombre_empresa">Creativa Studio</div>
        <div className="anio_puesto">2021–2022</div>
        <p className="descripcion_puesto">
          Gestión de documentos, manejo de agendas, atención a clientes y organización de información interna.
        </p>

        {/* Cuarto puesto */}
        <h4>Puesto</h4>
        <div className="nombre_cargo">Proyecto CRUD en Python + SQL Server</div>
        <div className="nombre_empresa">Proyecto Independiente</div>
        <div className="anio_puesto">2024</div>
        <p className="descripcion_puesto">
          Desarrollo de sistema CRUD con Python, pyodbc y SQL Server. Implementación de triggers para registrar historial de cambios.
        </p>
      </section>

      {/* Footer dentro del componente */}
      <footer className="footer_cv">
        <p>© {new Date().getFullYear()} Liliana Panesso. Todos los derechos reservados.</p>
        <div className="footer_links">
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="panessoliliana785@gmail.com">
            <i className="fas fa-envelope"></i>
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Experiencia;
