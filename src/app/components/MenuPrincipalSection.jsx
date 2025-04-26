
import BarraNavegacion from "./BarraNavegacion";
export default function MenuPrincipalSection() {
  return (
    <section className="container-fluid w-dvw d-flex mx-auto row fondo">
      <BarraNavegacion />
      <div className="row col-xl-6 col-12 text-white text-7xl letratitulo font-semibold d-flex flex-col text-center py-5">
        <div className="col-xl-6 mx-auto py-5 text-5xl font-semibold">
          Potencia tu negocio con estrategias efectivas y diseño optimizado
        </div>
        <a
        className="no-underline letratexto
        col-xl-3 col-6 mx-auto
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
