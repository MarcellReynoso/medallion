import React from "react";

export default function IntroduccionSection() {
  return (
    <section id="introduccion" className="flex flex-col xl:flex-row md:flex-row w-full bg-white xl:px-50">
      <div className="xl:w-1/2 md:w-1/2 flex justify-center items-center">
        <img src="/img/25.png" alt="Imagen" />
      </div>
      <div className="xl:w-1/2 md:w-1/2 flex flex-col justify-center items-center xl:p-30">
        <p className="w-full flex px-12 pb-4 xl:p-12 text-[#57a6a1] text-2xl font-bold  ">
          INTRODUCCIÓN
        </p>
        <h2 className="text-4xl xl:text-5xl text-[#344c64] text-center font-semibold letratitulo">
          {"¿Qué es Medalion?".toUpperCase()}
        </h2>
        <p
          className="
        flex px-12 py-6 xl:p-12
        letratexto text-base xl:text-2xl 
        text-justify text-[#344c64] font-semibold"
        >
          Nos especializamos en la creación de landing pages optimizadas para
          clientes en línea. Combinamos estrategia digital, diseño atractivo y
          optimización SEO para garantizar que cada página no solo luzca
          increíble, sino que también genere resultados reales.
          <br />
        </p>
        <div className="xl:py-2 py-7 flex justify-center items-center">
          <a
            className="bg-[#57a6a1] text-white font-semibold text-2xl xl:text-4xl py-3 xl:py-4 px-10 rounded-full hover:bg-[#344c64] hover:font-bold transition duration-300 ease-in-out"
            href="#"
          >
            Contáctanos
          </a>
        </div>
      </div>
    </section>
  );
}
