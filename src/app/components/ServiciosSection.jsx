export default function ServiciosSection() {
  return (
    <section id="servicios" className="py-12 px-4 bg-white">
      {/* Título común para ambos tamaños */}
      <h1 className="text-center font-bold text-3xl lg:text-6xl text-[#344c64] mb-12 letratitulo">
        Nuestros servicios
      </h1>

      {/* Versión MOBILE (menor a lg) */}
      <div className="flex flex-col items-center gap-12 lg:hidden">
        {[
          {
            img: "/img/19.png",
            title: "Entrega en 3 - 7 días",
            desc: "Tu landing estará lista en tiempo récord.",
          },
          {
            img: "/img/20.png",
            title: "Diseño móvil",
            desc: "100% adaptable a cualquier pantalla.",
          },
          {
            img: "/img/21.png",
            title: "SEO Local",
            desc: "Aparece en Google y Google Maps",
          },
          {
            img: "/img/22.png",
            title: "WhatsApp Directo",
            desc: "Tus clientes te contactan al instante.",
          },
          {
            img: "/img/23.png",
            title: "Enfocados en resultados",
            desc: "Diseños que convierten visitas en clientes.",
          },
          {
            img: "/img/24.png",
            title: "Mantenimiento",
            desc: "Nos encargamos de todo por ti.",
          },
        ].map((servicio, index) => (
          <div
            key={index}
            className="relative w-full max-w-sm bg-gray-200 rounded-3xl pt-20 pb-8 px-6 text-center"
          >
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
              <img src={servicio.img} alt={servicio.title} className="w-30 h-30" />
            </div>
            <h2 className="font-bold text-2xl text-[#344c64] letratitulo mb-2">
              {servicio.title}
            </h2>
            <p className="letratexto text-base font-semibold">{servicio.desc}</p>
          </div>
        ))}
      </div>

      {/* Versión DESKTOP (lg en adelante) */}
      <div className="hidden lg:block">
        {/* Fila 1 */}
        <div className="flex flex-row justify-center items-center gap-10 mb-10">
          {/* Servicio */}
          <div className="flex flex-col w-1/4">
            <div className="flex justify-center relative h-24">
              <img className="h-40 absolute" src="/img/19.png" alt="Imagen rayo" />
            </div>
            <div className="bg-gray-200 rounded-4xl h-48 flex flex-col pt-16 px-5">
              <h2 className="font-bold text-3xl text-[#344c64] letratitulo">
                Entrega en 3 - 7 días
              </h2>
              <p className="letratexto text-lg font-semibold">
                Tu landing estará lista en tiempo récord.
              </p>
            </div>
          </div>
          <div className="flex flex-col w-1/4">
            <div className="flex justify-center relative h-24">
              <img className="h-40 absolute" src="/img/20.png" alt="Imagen móvil" />
            </div>
            <div className="bg-gray-200 rounded-4xl h-48 flex flex-col pt-16 px-5">
              <h2 className="font-bold text-3xl text-[#344c64] letratitulo">
                Diseño móvil
              </h2>
              <p className="letratexto text-lg font-semibold">
                100% adaptable a cualquier pantalla.
              </p>
            </div>
          </div>
          <div className="flex flex-col w-1/4">
            <div className="flex justify-center relative h-24">
              <img className="h-40 absolute" src="/img/21.png" alt="Imagen SEO" />
            </div>
            <div className="bg-gray-200 rounded-4xl h-48 flex flex-col pt-16 px-5">
              <h2 className="font-bold text-3xl text-[#344c64] letratitulo">
                SEO Local
              </h2>
              <p className="letratexto text-lg font-semibold">
                Aparece en Google y Google Maps
              </p>
            </div>
          </div>
        </div>

        {/* Fila 2 */}
        <div className="flex flex-row justify-center items-center gap-10">
          <div className="flex flex-col w-1/4">
            <div className="flex justify-center relative h-24">
              <img className="h-40 absolute" src="/img/22.png" alt="Imagen WhatsApp" />
            </div>
            <div className="bg-gray-200 rounded-4xl h-48 flex flex-col pt-16 px-5">
              <h2 className="font-bold text-3xl text-[#344c64] letratitulo">
                WhatsApp Directo
              </h2>
              <p className="letratexto text-lg font-semibold">
                Tus clientes te contactan al instante.
              </p>
            </div>
          </div>
          <div className="flex flex-col w-1/4">
            <div className="flex justify-center relative h-24">
              <img className="h-40 absolute" src="/img/23.png" alt="Imagen Resultados" />
            </div>
            <div className="bg-gray-200 rounded-4xl h-48 flex flex-col pt-16 px-5">
              <h2 className="font-bold text-3xl text-[#344c64] letratitulo">
                Enfocados en resultados
              </h2>
              <p className="letratexto text-lg font-semibold">
                Diseños que convierten visitas en clientes.
              </p>
            </div>
          </div>
          <div className="flex flex-col w-1/4">
            <div className="flex justify-center relative h-24">
              <img className="h-40 absolute" src="/img/24.png" alt="Imagen Mantenimiento" />
            </div>
            <div className="bg-gray-200 rounded-4xl h-48 flex flex-col pt-16 px-5">
              <h2 className="font-bold text-3xl text-[#344c64] letratitulo">
                Mantenimiento
              </h2>
              <p className="letratexto text-lg font-semibold">
                Nos encargamos de todo por ti.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
