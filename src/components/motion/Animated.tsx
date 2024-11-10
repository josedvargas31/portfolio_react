import { motion } from "framer-motion";

interface AnimatedProps {
  y: number; // El valor de la propiedad 'y' que se pasará como prop
  className?: string; // Opcional: Para añadir clases CSS personalizadas
  children?: React.ReactNode; // Opcional: Para renderizar contenido dentro del div
}

const Animated = ({ y, children}: AnimatedProps) => {
  return (
    <motion.div
      animate={{
        x: 0,
        y: y, // Usamos el valor de la prop 'y'
        scale: 1,
        rotate: 0,
      }}
    >
      {children}
    </motion.div>
  );
};

export default Animated;