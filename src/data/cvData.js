import React from "react";
// src/data/cvData.js

export const CabeceraData = {
  nombre: "Liliana Sofia Panesso Mendez",
  rol: "Desarrolladora Front-End Jr.",
  contacto: [
    { icono: "fas fa-envelope", texto: "panessoliliana785@gmail.com" },
    { icono: "fas fa-phone", texto: "3007649182" },
    { icono: "fas fa-map-marker-alt", texto: "Medellín, Colombia" }
  ]
};

export const PerfilData = {
  texto: `Soy aprendiz en análisis y desarrollo de software, con interés en crear soluciones digitales claras,
funcionales y bien documentadas. Durante mi formación he trabajado en la elaboración de bitácoras
técnicas, organizando procesos y registrando aprendizajes. También he fortalecido mis conocimientos
en React, especialmente en el renderizado de componentes y el uso de destructuring.`
};


export const EducacionData = {
    educacion:  [
    {
      curso: "Análisis y Desarrollo de Software",
      institucion: "Instituto Tecnológico Censa",
      anio: "2020–2024",
    },
    {
      curso: "Diplomado en Diseño UX/UI",
      institucion: "Platzi",
      anio: "2023",
    },
    {
      curso: "Curso de Fundamentos de Programación",
      institucion: "Google Activate",
      anio: "2022",
    },
    {
      curso: "Taller de Bases de Datos SQL",
      institucion: "SENA",
      anio: "2021",
    },
    {
      curso: "Seminario de Seguridad Informática",
      institucion: "Cisco Networking Academy",
      anio: "2021",
    },
    {
      curso: "Curso Complementario de HTML y CSS",
      institucion: "FreeCodeCamp",
      anio: "2022",
    },
  ]

};

export const ExperienciaData = {
    experiencias: [
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
  ]
};

export const StackTecnologiasData = {
    tecnologias:  [
    { id: 1, nombre: "React", tipo: "frontend" },
    { id: 2, nombre: "Node.js", tipo: "backend" },
    { id: 3, nombre: "JavaScript", tipo: "frontend" },
    { id: 4, nombre: "PostgreSQL", tipo: "base de datos" }
  ]   
};

export const ProyectosData = {
  proyectos: [
    {
      titulo: "Página de Recomendaciones",
      anio: "2024",
      descripcion:
        "Sitio web desarrollado con HTML, CSS y JavaScript, con login y control de contenido según la edad del usuario.",
      tecnologias: ["HTML", "CSS", "JavaScript"],
    },
    {
      titulo: "CRUD Python + SQL Server",
      anio: "2024",
      descripcion:
        "Aplicación CRUD con triggers para registrar historial. Implementado con Python, pyodbc y SQL Server.",
      tecnologias: ["Python", "SQL Server", "pyodbc"],
    },
    {
      titulo: "Portafolio Personal en React",
      anio: "2023",
      descripcion:
        "Portafolio desarrollado con React, utilizando componentes reutilizables y diseño modular.",
      tecnologias: ["React", "CSS Modules"],
    },
    {
      titulo: "Sistema de Inventarios",
      anio: "2022",
      descripcion:
        "Mini sistema de inventarios con HTML, CSS y JavaScript utilizando localStorage.",
      tecnologias: ["HTML", "CSS", "JavaScript"],
    },
  ],
};


export const HabilidadesData = {
  habilidades: [
    { habilidad: "HTML", nivel: "Avanzado" },
    { habilidad: "CSS", nivel: "Intermedio" },
    { habilidad: "JavaScript", nivel: "Intermedio" },
    { habilidad: "React", nivel: "Intermedio" },
    { habilidad: "SQL Server", nivel: "Intermedio" },
    { habilidad: "Figma", nivel: "Intermedio" },
    { habilidad: "Git y GitHub", nivel: "Básico" },
    { habilidad: "Diseño UX/UI", nivel: "Intermedio" },
  ],
};
