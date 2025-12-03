import React from "react";

export default function  StackTecnologias({tecnologias}) {

  const obtenerColor = (tipo) => {
    switch (tipo) {
      case "frontend": return "#4A90E2";  
      case "backend": return "#27AE60";    
      case "base de datos": return "#F39C12";
      default: return "#7F8C8D";          
    }
  };

  return (
    <section className="container">
      
      <h3 className="Tecnologias">
        <i className="fas fa-code"></i> Stack de Tecnologías
      </h3>

     
      {tecnologias.length == 0 ? (
        <p>No hay tecnologías registradas.</p>
      ) : (
        <ul className="lista_tecnologias">
          {tecnologias.map((tech) => (
            <li
              key={tech.id}
              className="tag_tecnologia"
              style={{
                backgroundColor: obtenerColor(tech.tipo),
                padding: "8px 12px",
                borderRadius: "12px",
                display: "inline-block",
                margin: "6px",
                color: "white",
                fontWeight: "bold",
              }}
            >
              {tech.nombre}  
              <span style={{ fontSize: "0.8em", opacity: 0.8 }}>
                {" "}({tech.tipo})
              </span>

              {}
              {tech.tipo == "frontend" ? "" : ""}
            </li>
          ))}
        </ul>
      )}

    </section>
  );

}

