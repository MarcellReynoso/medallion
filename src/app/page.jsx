"use client";
import Faq from "./components/Faq";
import IntroduccionSection from "./components/IntroduccionSection";
import MenuPrincipalSection from "./components/MenuPrincipalSection";
import ServiciosSection from "./components/ServiciosSection";

export default function Home() {
  return (
    <main className="">
      <MenuPrincipalSection />
      <IntroduccionSection title={"Introducción"} />
      <ServiciosSection />
      <Faq />
    </main>
  );
}
