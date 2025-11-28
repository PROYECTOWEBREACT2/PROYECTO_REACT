import React from 'react';

function CabeceraCV() {
  const data = {
    nombre: "Liliana Sofia Panesso Mendez",
    rol: "Desarrolladora Front-End Jr.",
    telefono: "3007649182",
    correo: "panessoliliana785@gmail.com",
    ciudad: "Medellín, Colombia"
  };

  return  (
  <>
    
    <header className="container">
 <div className="cabecera_cv">
  <h1>{data.nombre}</h1>
  <p className="info_contacto">
    <span><i className="fas fa-envelope"></i> {data.correo}</span>
    <span><i className="fas fa-phone"></i> {data.telefono}</span>
    <span><i className="fas fa-map-marker-alt"></i> {data.ciudad}</span>
  </p>
  <h2 className="titulo_rol">{data.rol}</h2>
</div>

</header>


  </>
);

}

export default CabeceraCV;
