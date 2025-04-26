
import BarraNavegacion from "./BarraNavegacion";
export default function MenuPrincipalSection() {
  return (
    <section className="container-fluid d-flex mx-auto row menu__principal">
      <BarraNavegacion />
      <div className="row col-6 text-white text-7xl font-semibold d-flex flex-col text-center py-5">
        <div className="col-xl-6 col-12 text-5xl mx-auto font-semibold py-5">
          Potencia tu negocio con estrategias efectivas y diseño optimizado
        </div>
        <a
          className="no-underline
        col-xl-3 col-12 mx-auto
        text-3xl text-white font-semibold py-2 
        border border-gray-400 rounded-lg
        "
          href=""
        >
          Obtener solución
        </a>
      </div>

      <div className=""></div>
    </section>
  );
}
