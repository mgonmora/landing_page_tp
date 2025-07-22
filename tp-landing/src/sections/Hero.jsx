import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="h-screen flex flex-col items-center justify-center text-center px-4">
      <motion.h1
        className="text-5xl font-bold mb-4"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Tu dinero, simple y seguro
      </motion.h1>
      <motion.p
        className="text-lg text-gray-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        Conoce la nueva forma de manejar tus finanzas con confianza.
      </motion.p>
    </section>
  );
}