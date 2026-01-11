// src/components/PageLayout.jsx
import { motion } from "framer-motion";
import GlassContainer from "./GlassContainer";
import TransitionWrapper from "./TransitionWrapper";

export default function PageLayout({ 
  children, 
  title, 
  subtitle, 
  className = "",
  containerVariant = "default"
}) {
  return (
    <TransitionWrapper>
      <section className="min-h-screen bg-gradient-to-br from-plantgreen-900 via-plantgreen-800 to-plantgreen-700 flex items-center justify-center p-6">
        {/* Background effects */}
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.06),_transparent_70%)]" />
        <div className="absolute inset-0 z-0 opacity-15 bg-[linear-gradient(#0ea5e9_1px,_transparent_1px),linear-gradient(90deg,#0ea5e9_1px,_transparent_1px)] bg-[size:20px_20px]" />
        
        <div className="relative z-10 w-full max-w-6xl mx-auto">
          <GlassContainer 
            variant={containerVariant}
            className={`p-8 md:p-12 ${className}`}
          >
            {title && (
              <motion.div
                className="text-center mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <h1 className="text-4xl md:text-6xl font-bold text-white font-[var(--font-grotesk)] bg-gradient-to-r from-white via-plantgreen-200 to-white bg-clip-text text-transparent mb-4">
                  {title}
                </h1>
                {subtitle && (
                  <p className="text-lg md:text-xl text-white/80 font-[var(--font-inter)]">
                    {subtitle}
                  </p>
                )}
              </motion.div>
            )}
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              {children}
            </motion.div>
          </GlassContainer>
        </div>
      </section>
    </TransitionWrapper>
  );
}