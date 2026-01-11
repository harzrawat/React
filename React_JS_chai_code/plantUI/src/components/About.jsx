// src/components/About.jsx
import { motion } from "framer-motion";
import PageLayout from "./PageLayout";
import GlassContainer from "./GlassContainer";

const stats = [
  { label: "Years Experience", value: "4+" },
  { label: "Languages", value: "Python, C++, JS" },
  { label: "Side Projects", value: "12+" },
];

const skills = ["Linux", "Docker", "MongoDB", "React", "Nginx", "Git", "Flask", "Django"];

export default function About() {
  return (
    <PageLayout 
      title="About Me" 
      subtitle="Building systems that are fast, secure, and resilient"
    >
      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center mb-12">
        {stats.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.6 }}
          >
            <GlassContainer 
              variant="subtle" 
              className="p-6 text-center hover:scale-105 transition-transform duration-300"
            >
              <div className="text-3xl font-bold font-[var(--font-grotesk)] text-white mb-2">
                {s.value}
              </div>
              <div className="text-sm text-plantgreen-200 font-[var(--font-inter)]">
                {s.label}
              </div>
            </GlassContainer>
          </motion.div>
        ))}
      </div>

      {/* Narrative */}
      <motion.p
        className="text-center text-lg max-w-3xl mx-auto font-[var(--font-inter)] mb-12 text-white/90 leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        I enjoy solving high-leverage problems, automating workflows, and working at the boundary 
        of software + infrastructure. My passion lies in crafting clean architecture, debugging 
        complex behaviors, and scaling performant solutions.
      </motion.p>

      {/* Terminal-style skills */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
      >
        <GlassContainer variant="strong" className="p-8 max-w-4xl mx-auto">
          <div className="bg-black/50 backdrop-blur-sm text-plantgreen-300 font-[var(--font-fira)] p-6 rounded-xl border border-plantgreen-500/20">
            <div className="mb-4 text-plantgreen-400">
              $ <span className="text-white">cat skills.txt</span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {skills.map((skill, i) => (
                <motion.div
                  key={i}
                  className="flex items-center space-x-2 p-2 rounded-lg bg-plantgreen-900/20 border border-plantgreen-500/10"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 + i * 0.1, duration: 0.4 }}
                >
                  <span className="text-plantgreen-400">✔</span>
                  <span className="text-white text-sm">{skill}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </GlassContainer>
      </motion.div>
    </PageLayout>
  );
}
