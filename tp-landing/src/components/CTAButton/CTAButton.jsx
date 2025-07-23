import { motion } from 'framer-motion';

export default function CTAButton({ text }) {
  return (
    <motion.button
      whileHover={{ scale: 1.5 }}
      whileTap={{ scale: 0.95 }}
      style={{
        marginTop: '2rem',
        padding: '0.75rem 1.5rem',
        backgroundColor: '#009E5C',
        color: '#FFF',
        border: 'none',
        borderRadius: '12px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        fontWeight: '600',
        fontSize: '1rem',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease'
      }}
    >
      {text}
    </motion.button>
  );
}
