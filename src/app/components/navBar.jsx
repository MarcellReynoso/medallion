import React from "react";

export default function Navbar() {
  return (
    <nav >
        {/* <div>

        </div> */}
      <ul>
        <li>
        <img src="logo-blanco.jpeg" alt="Logo" style={{ width: "300px" }} />
        </li>
        <li className="menu__nav__icon" id="menuToggle">
          &#9776;
        </li>
        <li className="menu__nav__items">
          <a className="menu__nav__links" href="">
            Empresa
          </a>
        </li>
        <li className="menu__nav__items">
          <a className="menu__nav__links" href="">
            Servicio
          </a>
        </li>
        <li className="menu__nav__items">
          <a className="menu__nav__links" href="">
            Portafolio
          </a>
        </li>
        <li className="menu__nav__items">
          <a className="menu__nav__links" href="">
            Contacto
          </a>
        </li>
        <li className="menu__nav__items">
          <a className="menu__nav__boton" href="">
            Obtener solución
          </a>
        </li>
      </ul>
    </nav>
  );
}
