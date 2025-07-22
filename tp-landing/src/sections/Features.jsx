import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

export default function Features() {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <section ref={ref} className="py-20 bg-gray-50 text-center">
      <motion.h2
        className="text-3xl font-semibold"
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        Beneficios de usar nuestra app
      </motion.h2>
    </section>
  );
}