import DesplazamientoAnimado from "./Desplazamiento";

export default function MenuPrincipalSection() {
  return (
    <section className="xl:px-20 px-5 flex items-center">
      <div className="w-screen h-100 bg-[url(/fondo-menu.jpg)] flex flex-col lg:flex-row items-center justify-center bg-cover bg-center xl:px-[10%] rounded-2xl xl:rounded-3xl">
        {/* Columna izquierda: visible siempre */}
        <div className="w-full lg:w-1/2 text-white letratitulo font-semibold flex flex-col items-center justify-center">
          <DesplazamientoAnimado direccion="izquierda">
            <div className="text-3xl xl:text-5xl w-full h-full text-center xl:leading-[3rem] leading-10">
              {"Potencia tu negocio con estrategias efectivas y diseño optimizado".toUpperCase()}
            </div>
            <div>
              <p className="text-2xl xl:text-3xl w-full text-center lg:pt-10">
                <a
                  className="cursor-pointer bg-[#344c64] py-2.5 px-5 
                  xl:text-4xl text-2xl font-extralight hover:font-medium text-white align-center
                  focus:outline-none rounded-3xl border-3 
                  border-gray-200 hover:bg-[#577b8d]"
                >
                  Obtener solución
                </a>
              </p>
            </div>
          </DesplazamientoAnimado>
        </div>

        {/* Columna derecha: solo visible en xl+ */}
        <div className="hidden xl:flex w-full lg:w-1/2 h-full justify-center items-center">
          <DesplazamientoAnimado direccion="derecha">
            <img
              src="./persona-inicio.png"
              alt="Ejemplo"
              className="h-full items-center"
            />
          </DesplazamientoAnimado>
        </div>
      </div>
    </section>
  );
}
