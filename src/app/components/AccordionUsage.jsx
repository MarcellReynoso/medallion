import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import PreguntasFaq from "./PreguntasFaq";

export default function AccordionUsage() {
  return (
    <div className="bg-[#344c64]">
      <Accordion className="">
        <div className="xl:px-96 bg-[#344c64] text-white w-full flex justify-center items-center">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon color="secondary"/>}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span">
            <PreguntasFaq text="¿Qué es una Landing Page y para qué sirve?" />
          </Typography>
        </AccordionSummary>
        </div>
        <AccordionDetails className="bg-[#344c64] ">
          <p className="xl:px-96 mx-auto col-xl-6 col-10 text-2xl text-justify text-white">
            Una landing page es una página web enfocada en lograr un objetivo
            específico, como conseguir reservas, captar leads o vender un
            servicio. Está optimizada para conversiones y es ideal para campañas
            de publicidad.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <div className="xl:px-96 bg-[#344c64] text-white w-full flex justify-center items-center">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon color="secondary" />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span">
            <PreguntasFaq text="¿Cuál es la diferencia entre una Landing Page y un sitio web completo?" />
          </Typography>
        </AccordionSummary>
        </div>
        <AccordionDetails className="bg-[#344c64] ">
          <p className="xl:px-96 mx-auto col-xl-6 col-10 text-2xl text-justify text-white">
          Una landing page es una sola página enfocada en una acción concreta (ej.
        agendar una cita), mientras que un sitio web completo tiene varias
        secciones (nosotros, servicios, blog, etc.). Las landing pages
        convierten mejor cuando se usa publicidad.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <div className="xl:px-96 bg-[#344c64] text-white w-full flex justify-center items-center">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon color="secondary" />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span">
            <PreguntasFaq text="¿Cuánto cuesta una landing page?" />
          </Typography>
        </AccordionSummary>
        </div>
        <AccordionDetails className="bg-[#344c64] ">
          <p className="xl:px-96 mx-auto col-xl-6 col-10 text-2xl text-justify text-white">
          Depende del nivel de personalización, pero nuestros planes empiezan
        desde S/500. Ofrecemos paquetes con funcionalidades como integración con
        WhatsApp, email marketing, hosting, entre otros.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <div className="xl:px-96 bg-[#344c64] text-white w-full flex justify-center items-center">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon color="secondary" />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span">
            <PreguntasFaq text="¿En cuánto tiempo estará lista mi landing page?" />
          </Typography>
        </AccordionSummary>
        </div>
        <AccordionDetails className="bg-[#344c64] ">
          <p className="xl:px-96 mx-auto col-xl-6 col-10 text-2xl text-justify text-white">
          El tiempo de entrega estándar es de 3 a 7 días hábiles, dependiendo de
        la complejidad y de qué tan rápido nos brindes la información necesaria
        (textos, imágenes, etc.).
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <div className="xl:px-96 bg-[#344c64] text-white w-full flex justify-center items-center">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon color="secondary" />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span">
            <PreguntasFaq text="¿Qué necesito para empezar?" />
          </Typography>
        </AccordionSummary>
        </div>
        <AccordionDetails className="bg-[#344c64] ">
          <p className="xl:px-96 mx-auto col-xl-6 col-10 text-2xl text-justify text-white">
          Solo necesitamos: Información sobre tu negocio y tus servicios. Imágenes
        o logotipo (si no tienes, te ayudamos). Datos de contacto y objetivo de
        la landing (ej. agendar citas, vender un curso, etc.).
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <div className="xl:px-96 bg-[#344c64] text-white w-full flex justify-center items-center">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon color="secondary" />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span">
            <PreguntasFaq text="¿Puedo conectar mi landing page con WhatsApp?" />
          </Typography>
        </AccordionSummary>
        </div>
        <AccordionDetails className="bg-[#344c64] ">
          <p className="xl:px-96 mx-auto col-xl-6 col-10 text-2xl text-justify text-white">
          ¡Claro! Podemos agregar botones de contacto directo, formularios que
          envían mensajes a tu WhatsApp.
          </p>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
