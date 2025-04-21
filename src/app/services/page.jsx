import Navbar from "../components/navBar";
import Servicios from "../components/Servicios";
import React from "react";

function page() {
  return (
    <>
      <Navbar />
      <div className="servicios">
        <h1 className="servicios__titulo">Nuestros Servicios</h1>
        <div className="servicios__row">
          <Servicios
            titulo={"Mantenimiento y Hosting Web"}
            imagen={"../services/mantenimiento.png"}
          />
          <Servicios
            titulo={"Desarrollo de Landing Pages"}
            imagen={"../services/mantenimiento.png"}
          />
          <Servicios
            titulo={"Diseño de plantillas para Rubros específicos"}
            imagen={"../services/mantenimiento.png"}
          />
        </div>
      </div>
    </>
  );
}

export default page;
