"use client";
import IntroduccionSection from "./components/introduccionSection";
import MenuPrincipalSection from "./components/menuPrincipalSection";
import Navbar from "./components/NavBar";

export default function Home() {
  return (
    <>
      <Navbar />
      <MenuPrincipalSection />
      <IntroduccionSection title={"Introducción"} />
    </>
  );
}