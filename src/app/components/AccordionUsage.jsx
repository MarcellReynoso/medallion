import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary, {
  accordionSummaryClasses,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import PreguntasFaq from "./PreguntasFaq";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  backgroundColor: "#344c64",
  color: "white",
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&::before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ color: "white", fontSize: "1rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  flexDirection: "row-reverse",
  [`& .${accordionSummaryClasses.expandIconWrapper}.${accordionSummaryClasses.expanded}`]: {
    transform: "rotate(90deg)",
  },
  [`& .${accordionSummaryClasses.content}`]: {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(() => ({
  padding: "1.5rem",
  borderTop: "1px solid rgba(255, 255, 255, 0.2)",
}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (_, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className="xl:px-96 bg-[#344c64] py-10">
      <Accordion expanded={expanded === "panel1"} onChange={handleChange("panel1")}>
        <AccordionSummary aria-controls="panel1-content" id="panel1-header">
          <Typography component="span">
            <PreguntasFaq text="¿Qué es una Landing Page y para qué sirve?" />
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <p className="text-2xl text-white text-justify">
            Una landing page es una página web enfocada en lograr un objetivo
            específico, como conseguir reservas, captar leads o vender un
            servicio. Está optimizada para conversiones y es ideal para campañas
            de publicidad.
          </p>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === "panel2"} onChange={handleChange("panel2")}>
        <AccordionSummary aria-controls="panel2-content" id="panel2-header">
          <Typography component="span">
            <PreguntasFaq text="¿Cuál es la diferencia entre una Landing Page y un sitio web completo?" />
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <p className="text-2xl text-white text-justify">
            Una landing page es una sola página enfocada en una acción concreta (ej.
            agendar una cita), mientras que un sitio web completo tiene varias
            secciones (nosotros, servicios, blog, etc.). Las landing pages
            convierten mejor cuando se usa publicidad.
          </p>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === "panel3"} onChange={handleChange("panel3")}>
        <AccordionSummary aria-controls="panel3-content" id="panel3-header">
          <Typography component="span">
            <PreguntasFaq text="¿Cuánto cuesta una landing page?" />
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <p className="text-2xl text-white text-justify">
            Depende del nivel de personalización, pero nuestros planes empiezan
            desde S/500. Ofrecemos paquetes con funcionalidades como integración con
            WhatsApp, email marketing, hosting, entre otros.
          </p>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === "panel4"} onChange={handleChange("panel4")}>
        <AccordionSummary aria-controls="panel4-content" id="panel4-header">
          <Typography component="span">
            <PreguntasFaq text="¿En cuánto tiempo estará lista mi landing page?" />
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <p className="text-2xl text-white text-justify">
            El tiempo de entrega estándar es de 3 a 7 días hábiles, dependiendo de
            la complejidad y de qué tan rápido nos brindes la información necesaria
            (textos, imágenes, etc.).
          </p>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === "panel5"} onChange={handleChange("panel5")}>
        <AccordionSummary aria-controls="panel5-content" id="panel5-header">
          <Typography component="span">
            <PreguntasFaq text="¿Qué necesito para empezar?" />
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <p className="text-2xl text-white text-justify">
            Solo necesitamos: Información sobre tu negocio y tus servicios. Imágenes
            o logotipo (si no tienes, te ayudamos). Datos de contacto y objetivo de
            la landing (ej. agendar citas, vender un curso, etc.).
          </p>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === "panel6"} onChange={handleChange("panel6")}>
        <AccordionSummary aria-controls="panel6-content" id="panel6-header">
          <Typography component="span">
            <PreguntasFaq text="¿Puedo conectar mi landing page con WhatsApp?" />
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <p className="text-2xl text-white text-justify">
            ¡Claro! Podemos agregar botones de contacto directo, formularios que
            envían mensajes a tu WhatsApp.
          </p>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
