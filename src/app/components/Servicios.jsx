import React from "react";

export default function Servicios({ titulo, imagen }) {
  return (
    <div className="servicios__container">
      <img
        style={{ padding: "50px 0 0 0" , width: "50%", height: "200px" }}
        src={imagen}
        alt="Imagen de servicio"
      />
      <h1 className="servicios__subtitulo">{titulo}</h1>
      <ul>
        <li>Alojamiento</li>
        <li>Mantenimiento mensual</li>
        <li>Certificado SSL</li>
      </ul>
    </div>
  );
}
