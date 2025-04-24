"use client";
import Faq from "./components/Faq";
import IntroduccionSection from "./components/IntroduccionSection";
import MenuPrincipalSection from "./components/MenuPrincipalSection";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <MenuPrincipalSection />
      <IntroduccionSection title={"Introducción"} />
      <Faq />
    </>
  );
}
