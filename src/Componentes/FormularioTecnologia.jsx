// src/Componentes/FormularioTecnologia.jsx
import React, { useState } from "react";

export default function FormularioTecnologia({ onAgregar }) {
  const [nombre, setNombre] = useState("");
  const [tipo, setTipo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!nombre || !tipo) return;

    const nuevaTec = {
      id: Date.now(),
      nombre,
      tipo,
    };

    onAgregar(nuevaTec);

    setNombre("");
    setTipo("");
  };

  return (
    <div className="container_form_footer">

      <form onSubmit={handleSubmit} className="form_tecnologia container">
        <h3><i className="fas fa-plus-circle"></i> Agregar Tecnología</h3>

        <input
          type="text"
          placeholder="Nombre tecnología"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />

        <select value={tipo} onChange={(e) => setTipo(e.target.value)}>
          <option value="">Seleccione un tipo</option>
          <option value="frontend">Frontend</option>
          <option value="backend">Backend</option>
          <option value="base de datos">Base de datos</option>
        </select>

        <button type="submit">Agregar</button>
      </form>

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
          <a href="mailto:panessoliliana785@gmil.com">
            <i className="fas fa-envelope"></i>
          </a>
        </div>
      </footer>

    </div>
  );
}

