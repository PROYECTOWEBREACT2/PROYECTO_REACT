import React from 'react';
import mifoto from "../assets/react.svg";

function CabeceraCV() {
  const data = {
    nombre: "Liliana Sofia Panesso Mendez",
    rol: "Desarrolladora Front-End Jr.",
    contacto: [
      { icono: "fas fa-envelope", texto: "panessoliliana785@gmail.com" },
      { icono: "fas fa-phone", texto: "3007649182" },
      { icono: "fas fa-map-marker-alt", texto: "Medellín, Colombia" }
    ]
  };

  return (
    <header className="container">
      <div className="cabecera_cv">
        <div className="contenedor_foto_perfil">
          <img src={mifoto} alt="Foto de perfil" />
        </div>

        <h1>{data.nombre}</h1>

        {/* Renderizado de lista de datos de contacto */}
        <p className="info_contacto">
          {data.contacto.map((item, index) => (
            <span key={index}>
              <i className={item.icono}></i> {item.texto}
              {index < data.contacto.length - 1 && " | "}
            </span>
          ))}
        </p>

        <h2 className="titulo_rol">{data.rol}</h2>
      </div>
    </header>
  );
}

export default CabeceraCV;
