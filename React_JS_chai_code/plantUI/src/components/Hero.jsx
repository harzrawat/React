// // src/components/Hero.jsx
// import { motion } from "framer-motion";
// import { useEffect } from "react";
// import gsap from "gsap";

// export default function Hero() {
//   useEffect(() => {
//     const chars = document.querySelectorAll(".matrix span");

//     chars.forEach((char, i) => {
//       gsap.fromTo(
//         char,
//         { opacity: 0 },
//         {
//           opacity: 1,
//           repeat: -1,
//           yoyo: true,
//           duration: 0.4,
//           delay: i * 0.05,
//           ease: "power2.inOut",
//         }
//       );
//     });
//   }, []);

//   const matrixString = "0101010110101011001101010".split("");

//   return (
//     <section className="relative w-full h-screen bg-plantgreen-100 flex flex-col justify-center items-center text-center overflow-hidden px-6">
//       {/* Ambient gradient animation (can be improved later with WebGL/Canvas) */}
//       <div className="absolute inset-0 bg-gradient-to-tr from-plantgreen-200 via-white to-plantgreen-300 opacity-20 animate-pulse z-0" />

//       {/* Matrix rain */}
//       <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-10 matrix text-[10px] leading-tight opacity-20 font-[var(--font-jetbrains)] text-plantgreen-800">
//         {matrixString.map((char, i) => (
//           <span key={i}>{char}</span>
//         ))}
//       </div>

//       {/* Main intro */}
//       <motion.div
//         className="z-20"
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1.2 }}
//       >
//         <h1 className="text-4xl sm:text-6xl text-plantgreen-900 font-[var(--font-grotesk)] font-bold">
//           Harsh Rawat
//         </h1>
//         <p className="mt-4 text-xl sm:text-2xl text-plantgreen-700 font-[var(--font-inter)]">
//           Engineer. Systems Thinker. Builder.
//         </p>

//         <motion.button
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//           onClick={() => {
//             const about = document.getElementById("about");
//             about?.scrollIntoView({ behavior: "smooth" });
//           }}
//           className="mt-10 px-6 py-3 rounded-full bg-plantgreen-500 text-white shadow-md hover:bg-plantgreen-600 transition-all"
//         >
//           Explore ↓
//         </motion.button>
//       </motion.div>
//     </section>
//   );
// }

// src/components/Hero.jsx
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import TransitionWrapper from "./TransitionWrapper";


export default function Hero() {
  const navigate = useNavigate();
  
  useEffect(() => {
    const chars = document.querySelectorAll(".matrix span");

    chars.forEach((char, i) => {
      gsap.fromTo(
        char,
        { opacity: 0 },
        {
          opacity: 1,
          repeat: -1,
          yoyo: true,
          duration: 0.4,
          delay: i * 0.05,
          ease: "power2.inOut",
        }
      );
    });
  }, []);

  const matrixString = "0101010110101011001101010".split("");

  return (
    <TransitionWrapper>
    <section className="relative w-full h-screen bg-gradient-to-br from-plantgreen-900 via-plantgreen-800 to-plantgreen-700 flex justify-center items-center text-center overflow-hidden px-6">
      {/* Radial and grid background */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.06),_transparent_70%)]" />
      <div className="absolute inset-0 z-0 opacity-15 bg-[linear-gradient(#0ea5e9_1px,_transparent_1px),linear-gradient(90deg,#0ea5e9_1px,_transparent_1px)] bg-[size:20px_20px]" />

      {/* Matrix rain */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-10 matrix text-[10px] leading-tight opacity-10 font-[var(--font-jetbrains)] text-plantgreen-300">
        {matrixString.map((char, i) => (
          <span key={i}>{char}</span>
        ))}
      </div>

      {/* Enhanced Glass container */}
      <motion.div
        className="z-20 backdrop-blur-2xl bg-gradient-to-br from-white/20 via-white/10 to-white/5 border border-white/30 rounded-2xl shadow-2xl p-12 max-w-3xl mx-auto relative overflow-hidden"
        initial={{ opacity: 0, y: 20, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.2, type: "spring", stiffness: 100 }}
      >
        {/* Inner glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-plantgreen-400/10 via-transparent to-plantgreen-600/10 rounded-2xl" />
        
        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden rounded-2xl">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
        <div className="relative z-10">
          <motion.h1 
            className="text-5xl sm:text-7xl text-white font-[var(--font-grotesk)] font-bold bg-gradient-to-r from-white via-plantgreen-200 to-white bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Harsh Rawat
          </motion.h1>
          <motion.p 
            className="mt-6 text-xl sm:text-2xl text-white/80 font-[var(--font-inter)] backdrop-blur-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Engineer. Systems Thinker. Builder.
          </motion.p>

          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/about')}
            className="mt-12 px-8 py-4 rounded-2xl bg-gradient-to-r from-plantgreen-500/80 to-plantgreen-600/80 backdrop-blur-sm border border-white/20 text-white shadow-2xl hover:shadow-plantgreen-400/25 transition-all duration-300 font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <span className="flex items-center space-x-2">
              <span>Explore</span>
              <motion.span
                animate={{ y: [0, 3, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                ↓
              </motion.span>
            </span>
          </motion.button>
        </div>
      </motion.div>
    </section>
    </TransitionWrapper>
  );
}
