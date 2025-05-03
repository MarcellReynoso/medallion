import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = ["Nosotros", "Servicios", "Contáctanos", "FAQ", "Obtener solución"];

export default function BarraNavegacion() {
  return (
    <Disclosure as="nav" className="bg-white">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          {/* Botón menú mobile */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <DisclosureButton className="group inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-200 hover:text-black focus:ring-2 focus:ring-inset focus:ring-black">
              <Bars3Icon
                className="block size-6 group-data-open:hidden"
                aria-hidden="true"
              />
              <XMarkIcon
                className="hidden size-6 group-data-open:block"
                aria-hidden="true"
              />
            </DisclosureButton>
          </div>

          <div className="hidden sm:flex flex-1 items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              {/* <img
                alt="Logo"
                src="/logo-blanco.jpeg"
                className="h-8 w-auto"
              /> */}
              Logo Medallion
            </div>

            {/* Botones del navbar */}
            <div className="flex space-x-6 gap-7">
              {navigation.map((item) => (
                <button
                  key={item}
                  className="text-gray-700 rounded-md px-3 py-2 text-lg font-medium"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Menú mobile */}
      <DisclosurePanel className="sm:hidden">
        <div className="space-y-4 px-4 pt-4 pb-6">
          {navigation.map((item) => (
            <DisclosureButton
              key={item}
              className="flex w-full items-center justify-start rounded-md text-base font-medium text-gray-700 hover:bg-gray-100"
            >
              {item}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>

    </Disclosure>
  );
}
