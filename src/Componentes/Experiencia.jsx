import React from "react";

function Experiencia() {
  const experiencias = [
    {
      cargo: "Desarrolladora Frontend",
      empresa: "Tech Solutions S.A.",
      anio: "2022–2024",
      descripcion:
        "Desarrollo de interfaces web con React, optimización de componentes, manejo de estados y consumo de APIs REST.",
    },
    {
      cargo: "Proyecto Personal – Página de Recomendaciones",
      empresa: "Proyecto Independiente",
      anio: "2024",
      descripcion:
        "Creación de una página HTML con recomendaciones de libros, música y películas. Implementación de login y control por edad.",
    },
    {
      cargo: "Diseñadora UX/UI",
      empresa: "Creativa Studio",
      anio: "2021–2022",
      descripcion:
        "Diseño de prototipos en Figma, estructuración de flujos de usuario y pruebas de usabilidad para productos digitales.",
    },
    {
      cargo: "Auxiliar Administrativa",
      empresa: "Servicios Globales LTDA",
      anio: "2018–2021",
      descripcion:
        "Gestión de documentos, manejo de agendas, atención a clientes y organización de información interna.",
    },
    {
      cargo: "Proyecto CRUD en Python + SQL Server",
      empresa: "Proyecto Independiente",
      anio: "2024",
      descripcion:
        "Desarrollo de sistema CRUD con Python, pyodbc y SQL Server. Implementación de triggers para registrar historial de cambios.",
    },
    {
      cargo: "Desarrolladora Junior",
      empresa: "Digital Web Group",
      anio: "2017–2018",
      descripcion:
        "Mantenimiento de páginas web, actualización de estilos, corrección de errores y apoyo en proyectos de diseño responsivo.",
    },
    {
      cargo: "Proyecto: Portafolio Personal",
      empresa: "Freelance",
      anio: "2023",
      descripcion:
        "Desarrollo de portafolio con React, incluyendo componentes reutilizables, diseño modular y animaciones básicas.",
    },
    {
      cargo: "Asistente de Soporte Técnico",
      empresa: "CompuRed SAS",
      anio: "2016–2017",
      descripcion:
        "Soporte técnico a usuarios, instalación de software, formateo de equipos y solución de problemas de conectividad.",
    },
    {
      cargo: "Proyecto: Sistema de Inventarios",
      empresa: "Proyecto Académico",
      anio: "2022",
      descripcion:
        "Creación de sistema de inventario básico usando HTML, CSS, JavaScript y almacenamiento local.",
    },
    {
      cargo: "Practicante Auxiliar Administrativa",
      empresa: "Colegio San Martín",
      anio: "2015–2016",
      descripcion:
        "Organización de archivos, redacción de documentos, gestión de llamadas y apoyo en tareas administrativas.",
    },
  ];

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
          <a href="mailto:tucorreo@email.com">
            <i className="fas fa-envelope"></i>
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Experiencia;
