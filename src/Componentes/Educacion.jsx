import React from "react";
//function
function Educacion() {
 
  const formacion = [
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
  ];

  return (
    <div className="container">
      <section className="educacion">
        <h3 className="titulo_Educacion">
          <i className="fas fa-graduation-cap"></i> Formación Académica
        </h3>

        {/* Renderizado de listas */}
        {formacion.map((item, index) => (
          <div key={index} className="educacion_item">
            <h4>{item.curso}</h4>
            <div className="Nombre_institucion">{item.institucion}</div>
            <div className="anio_curso">{item.anio}</div>
            <br />
          </div>
        ))}
      </section>
    </div>
  );
}

export default Educacion;
