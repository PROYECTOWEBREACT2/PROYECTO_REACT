import React from "react";
//function
export default function  Educacion({educacion}) {

  return (
    <div className="container">
      <section className="educacion">
        <h3 className="titulo_Educacion">
          <i className="fas fa-graduation-cap"></i> Formación Académica
        </h3>

     
        {educacion.map((item, index) => (
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



