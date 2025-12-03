import React from 'react';

export default function Perfil({texto}) {
  return (
    <div className="container">
      <>
        <div className="contenido_cv">
          <section className="habilidades">
            <h3 className="titulo_perfil"><i className="fas fa-user-circle"></i> Perfil Profesional</h3>
           
            <br />

            <p className="carta_de_presentacion">
             {texto}
            </p>

            <br />
           
          </section>
        </div>
      </>
    </div>
  );
}


