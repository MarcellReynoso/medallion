"use client";
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
      <IntroduccionSection/>
      <AccordionUsage />
      <ServiciosSection />
    </main>
  );
}
