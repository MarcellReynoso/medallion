import Navbar from "./BarraNavegacion";
import Servicios from "../components/Servicios";
import serviciosData from "../data/serviciosData";

export default function ServiciosSection() {
  return (
    <section>
      <div className="servicios">
        <h1 className="servicios__titulo">Nuestros Servicios</h1>
        <div className="servicios__row">
          {serviciosData.map((servicio, index) => (
            <Servicios
              key={index}
              titulo={servicio.titulo}
              imagen={servicio.imagen}
              lista={servicio.lista}
            />
          ))}
        </div>
        <div id="btn__cotizar">
          <a className="menu__nav__boton" href="/">
            Cotizar
          </a>
        </div>
      </div>
    </section>
  );
}
