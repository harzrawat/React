// src/components/TransitionWrapper.jsx
import { motion } from "framer-motion";

const variants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

export default function TransitionWrapper({ children }) {
  return (
    <motion.div
      className="min-h-screen"
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}
