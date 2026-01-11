// src/components/GlassContainer.jsx
import { motion } from "framer-motion";

export default function GlassContainer({ 
  children, 
  className = "", 
  variant = "default",
  ...props 
}) {
  const variants = {
    default: "backdrop-blur-2xl bg-gradient-to-br from-white/15 via-white/10 to-white/5 border border-white/20 shadow-2xl",
    strong: "backdrop-blur-3xl bg-gradient-to-br from-white/20 via-white/15 to-white/10 border border-white/30 shadow-2xl",
    subtle: "backdrop-blur-xl bg-gradient-to-br from-white/10 via-white/5 to-white/5 border border-white/10 shadow-xl"
  };

  return (
    <motion.div
      className={`
        relative overflow-hidden rounded-2xl
        ${variants[variant]}
        ${className}
      `}
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
      {...props}
    >
      {/* Inner glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-plantgreen-400/5 via-transparent to-plantgreen-600/5 rounded-2xl" />
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            style={{
              left: `${20 + Math.random() * 60}%`,
              top: `${20 + Math.random() * 60}%`,
            }}
            animate={{
              y: [0, -15, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
}