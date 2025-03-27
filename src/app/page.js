"use client";
import IntroduccionSection from "./components/introduccionSection";
import MenuPrincipalSection from "./components/menuPrincipalSection";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <nav className="menu__nav">
        <div>
          <img src="logo-blanco.jpeg" alt="Logo" style={{ width: "192px" }} />
        </div>
        <div className="menu__nav__icon" id="menuToggle">
          &#9776;
        </div>
        <div className="menu__nav__items">
          <a className="menu__nav__links" href="">
            Empresa
          </a>
          <a className="menu__nav__links" href="">
            Servicio
          </a>
          <a className="menu__nav__links" href="">
            Portafolio
          </a>
          <a className="menu__nav__links" href="">
            Contacto
          </a>
          <a className="menu__nav__boton" href="">
            Obtener solución
          </a>
          <a className="menu__nav__links" href="">
            <img
              className="menu__nav__links"
              style={{ height: "20px" }}
              src="lupa.png"
              alt=""
            />
          </a>
          <a className="menu__nav__links" href="">
            &#9776;
          </a>
        </div>
      </nav>
      <MenuPrincipalSection />
      <IntroduccionSection title={"Hola"} />
      <MenuPrincipalSection />
      <IntroduccionSection title={"Mundo"} />
    </main>
  );
}
