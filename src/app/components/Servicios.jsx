import React from "react";

export default function Servicios({ titulo, imagen, lista}) {
  return (
    <div className="servicios__container">
      <img
        style={{ padding: "20px 0 20px 0", width: "43%", height: "40%" }}
        src={imagen}
        alt="Imagen de servicio"
      />
      <h1 className="servicios__subtitulo">{titulo}</h1>
      <ul className="servicios__ul">
        {lista.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
