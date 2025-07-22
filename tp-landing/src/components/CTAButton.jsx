import { motion } from 'framer-motion'

export default function CTAButton({ text }) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="mt-8 px-6 py-3 bg-gradient-to-r from-teal-400 to-cyan-600 text-white rounded-xl shadow-lg font-semibold"
    >
      {text}
    </motion.button>
  );
}
