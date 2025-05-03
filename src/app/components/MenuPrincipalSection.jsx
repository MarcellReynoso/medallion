import DesplazamientoAnimado from "./Desplazamiento";

export default function MenuPrincipalSection() {
  return (
    <section className="w-screen h-100 bg-[#344c64] flex flex-col xl:flex-row items-center justify-center bg-cover bg-center px-[10%]">
      
      {/* Columna izquierda: visible siempre */}
      <div className="w-full xl:w-1/2 text-white letratitulo font-semibold flex flex-col items-center justify-center px-8 xl:px-20">
        <DesplazamientoAnimado direccion="izquierda">
          <div className="text-4xl xl:text-6xl max-w-2xl pb-10 text-center">
            Potencia tu negocio con estrategias efectivas y diseño optimizado
          </div>
          <div>
            <p className="text-2xl xl:text-3xl max-w-2xl text-center">
              <a
                className="cursor-pointer bg-[#344c64] py-2.5 px-5 
                  xl:text-4xl text-2xl font-medium text-white align-center
                  focus:outline-none rounded-lg border-3 
                  border-gray-200 hover:bg-[#577b8d]"
              >
                Obtener solución
              </a>
            </p>
          </div>
        </DesplazamientoAnimado>
      </div>

      {/* Columna derecha: solo visible en xl+ */}
      <div className="hidden xl:flex w-1/2 h-full justify-center items-center">
        <DesplazamientoAnimado direccion="derecha">
          <img
            src="./persona-inicio.png"
            alt="Ejemplo"
            className="h-full items-center"
          />
        </DesplazamientoAnimado>
      </div>
    </section>
  );
}
