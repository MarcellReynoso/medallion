import React from "react";

export default function IntroduccionSection() {
  return (
    <section className="flex flex-col xl:flex-row w-full h-screen bg-white">
      <div className="xl:w-1/2 flex justify-center items-center">
        <img src="/img/25.png" alt="Imagen" />
      </div>
      <div className="xl:w-1/2 flex flex-col justify-center items-center xl:p-30">
        {/* <h2 className="">{title}</h2> */}
        <p className="w-full flex px-12 pb-4 xl:p-12 text-[#57a6a1] text-2xl font-bold  ">INTRODUCCIÓN</p>
        <h2 className="text-4xl xl:text-7xl text-[#344c64] text-center font-semibold letratitulo">{"¿Qué es Medalion?".toUpperCase()}</h2>
        <p className="
        flex px-12 py-6 xl:p-12
        letratexto text-xl xl:text-3xl 
        text-justify text-[#344c64] font-semibold">
          Nos especializamos en la creación de landing pages optimizadas para
          clientes en línea. Combinamos estrategia digital, diseño atractivo y
          optimización SEO para garantizar que cada página no solo luzca
          increíble, sino que también genere resultados reales.
          <br />
          {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
          laboriosam doloremque delectus ea explicabo quidem ad, illum odit
          accusantium fuga optio dicta! Dolore obcaecati sit animi itaque ad
          officia quas. Lorem ipsum dolor sit amet consectetur, adipisicing
          elit. Illum error accusantium fugiat atque qui sapiente vel dolore
          harum corporis, nesciunt incidunt odio, mollitia illo a optio unde?
          Possimus, cum voluptatem! */}
        </p>
        <div className="">
          <a 
          className="bg-[#57a6a1] text-white font-semibold text-2xl xl:text-4xl py-3 xl:py-4 px-10 rounded-full hover:bg-[#344c64] hover:font-bold transition duration-300 ease-in-out" 
          href="#">
            Contáctanos
          </a>
        </div>
      </div>
    </section>
  );
}
