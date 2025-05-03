import { motion } from "framer-motion";

export default function DesplazamientoAnimado({ children, direccion = "izquierda" }) {
  const direcciones = {
    izquierda: { x: -200, y: 0 },
    derecha: { x: 200, y: 0 },
    arriba: { x: 0, y: -200 },
    abajo: { x: 0, y: 200 },
  };

  const inicio = direcciones[direccion] || direcciones.izquierda;

  return (
    <motion.div
      className="h-full w-full"
      initial={{ ...inicio, opacity: 0 }}
      animate={{ x: 0, y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 50, damping: 15 }}
    >
      {children}
    </motion.div>
  );
}
