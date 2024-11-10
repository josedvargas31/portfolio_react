import { motion } from "framer-motion";

// Definir el tipo de las props del componente
interface FadeInProps {
  children: React.ReactNode;
  duration: number; 
  delay: number;  
}

const FadeIn = ({ children, duration = 1, delay = 0 }: FadeInProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}        // Comienza con opacidad 0
      animate={{ opacity: 1 }}        // Alcanza opacidad 1
      exit={{ opacity: 0 }}           // Al salir, vuelve a opacidad 0
      transition={{ duration, delay }}  // Duración y retraso de la animación
    >
      {children} 
    </motion.div>
  );
};

export default FadeIn;
