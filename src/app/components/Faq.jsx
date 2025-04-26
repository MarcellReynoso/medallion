import React from "react";
import PreguntasFaq from "./PreguntasFaq";

function Faq() {
  return (
    <section className="container-fluid w-dvw d-flex mx-auto row fondo" id="">
      <PreguntasFaq text="¿Qué es una Landing Page y para qué sirve?" />
      <p className="mx-auto col-xl-6 col-10 text-2xl text-justify text-white">
        Una landing page es una página web enfocada en lograr un objetivo
        específico, como conseguir reservas, captar leads o vender un servicio.
        Está optimizada para conversiones y es ideal para campañas de publicidad.
      </p>

      <PreguntasFaq text="¿Cuál es la diferencia entre una Landing Page y un sitio web completo?" />
      <p className="mx-auto col-xl-6 col-10 text-2xl text-justify text-white">
        Una landing page es una sola página enfocada en una acción concreta (ej.
        agendar una cita), mientras que un sitio web completo tiene varias
        secciones (nosotros, servicios, blog, etc.). Las landing pages
        convierten mejor cuando se usa publicidad.
      </p>

      <PreguntasFaq text="¿Cuánto cuesta una landing page?" />
      <p className="mx-auto col-xl-6 col-10 text-2xl text-justify text-white">
        Depende del nivel de personalización, pero nuestros planes empiezan
        desde S/500. Ofrecemos paquetes con funcionalidades como integración con
        WhatsApp, email marketing, hosting, entre otros.
      </p>

      <PreguntasFaq text="¿En cuánto tiempo estará lista mi landing page?" />
      <p className="mx-auto col-xl-6 col-10 text-2xl text-justify text-white">
        El tiempo de entrega estándar es de 3 a 7 días hábiles, dependiendo de
        la complejidad y de qué tan rápido nos brindes la información necesaria
        (textos, imágenes, etc.).
      </p>

      <PreguntasFaq text="¿Qué necesito para empezar?" />
      <p className="mx-auto col-xl-6 col-10 text-2xl text-justify text-white">
        Solo necesitamos: Información sobre tu negocio y tus servicios. Imágenes
        o logotipo (si no tienes, te ayudamos). Datos de contacto y objetivo de
        la landing (ej. agendar citas, vender un curso, etc.).
      </p>

      <PreguntasFaq text="¿Puedo conectar mi landing page con WhatsApp?" />
      <p className="mx-auto col-6 text-2xl text-justify text-white">
        ¡Claro! Podemos agregar botones de contacto directo, formularios que
        envían mensajes a tu WhatsApp.
      </p>

      <style global jsx>{`
        .custom-type-animation-cursor::after {
          content: "|";
          animation: cursor 1.1s infinite step-start;
        }

        @keyframes cursor {
          50% {
            opacity: 0;
          }
        }

        .faq__title {
          font-family: var(--letra-titulo);
          font-weight: 700;
          font-size: 50px;
        }
      `}</style>
    </section>
  );
}

export default Faq;
