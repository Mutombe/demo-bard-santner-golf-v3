import React from 'react';
import { motion } from 'framer-motion';

// Opacity-only fade — no exit animation. Paired with AnimatePresence mode="popLayout".
export default function PageTransition({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}
