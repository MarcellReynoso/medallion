"use client";
import Faq from "./components/Faq";
import BarraNavegacion from "./components/BarraNavegacion";
import IntroduccionSection from "./components/IntroduccionSection";
import MenuPrincipalSection from "./components/MenuPrincipalSection";
import ServiciosSection from "./components/ServiciosSection";
import AccordionUsage from "./components/AccordionUsage";

export default function Home() {
  return (
    <main className="">
      <BarraNavegacion />
      <MenuPrincipalSection />
      <AccordionUsage />
      {/* <IntroduccionSection title={"Introducción"} /> */}
      {/* <ServiciosSection /> */}
      {/* <Faq /> */}
    </main>
  );
}
