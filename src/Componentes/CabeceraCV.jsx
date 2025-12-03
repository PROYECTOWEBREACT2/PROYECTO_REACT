import React from 'react';
import mifoto from "../assets/react.svg";

function CabeceraCV({nombre, rol, contacto}) {

  return (
    <header className="container">
      <div className="cabecera_cv">
        <div className="contenedor_foto_perfil">
          <img src={mifoto} alt="Foto de perfil" />
        </div>

        <h1>{nombre}</h1>

        
        <p className="info_contacto">
          {contacto.map((item, index) => (
            <span key={index}>
              <i className={item.icono}></i> {item.texto}
              {index <contacto.length - 1 && " | "}
            </span>
          ))}
        </p>

        <h2 className="titulo_rol">{rol}</h2>
      </div>
    </header>
  );
}

export default CabeceraCV;

//actualizacion de componentes
//actualizacion de componentes

