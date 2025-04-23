"use client";
import IntroduccionSection from "./components/introduccionSection";
import MenuPrincipalSection from "./components/menuPrincipalSection";
import NavBar from "./components/NavBar";

export default function Home() {
  return (
    <>
      <NavBar />
      <MenuPrincipalSection />
      <IntroduccionSection title={"Introducción"} />
    </>
  );
}