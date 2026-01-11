// src/components/TechStack.jsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageLayout from "./PageLayout";
import GlassContainer from "./GlassContainer";

const stack = [
  {
    name: "React",
    icon: "/logos/react.svg",
    domain: "Frontend",
    reason: "For its component model, speed, and large ecosystem.",
    color: "#61DAFB"
  },
  {
    name: "Python",
    icon: "/logos/python.svg",
    domain: "Backend",
    reason: "Great for scripting, APIs, and rapid prototyping.",
    color: "#3776AB"
  },
  {
    name: "Docker",
    icon: "/logos/docker.svg",
    domain: "DevOps",
    reason: "To isolate environments and streamline deployment.",
    color: "#2496ED"
  },
  {
    name: "MongoDB",
    icon: "/logos/mongodb.svg",
    domain: "Database",
    reason: "Flexible schema, fast iteration for MVPs.",
    color: "#47A248"
  },
  {
    name: "Tailwind",
    icon: "/logos/tailwind.svg",
    domain: "Frontend",
    reason: "Clean utility classes and responsive design made easy.",
    color: "#06B6D4"
  },
  {
    name: "NGINX",
    icon: "/logos/nginx.svg",
    domain: "DevOps",
    reason: "Fast reverse proxy, perfect for microservices.",
    color: "#009639"
  },
];

export default function TechStack() {
  const [selected, setSelected] = useState(null);

  return (
    <PageLayout 
      title="Tech Stack" 
      subtitle="Tools and technologies I work with"
    >
      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-8">
        {stack.map((tech, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
          >
            <GlassContainer
              variant="subtle"
              className={`flex flex-col items-center p-6 cursor-pointer transition-all duration-300 ${
                selected?.name === tech.name 
                  ? "ring-2 ring-plantgreen-400 bg-gradient-to-br from-white/25 via-white/15 to-white/10" 
                  : "hover:scale-105"
              }`}
              onClick={() => setSelected(selected?.name === tech.name ? null : tech)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-16 h-16 mb-3 flex items-center justify-center rounded-xl bg-white/10 backdrop-blur-sm">
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="w-10 h-10 object-contain"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div 
                  className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold text-sm hidden"
                  style={{ backgroundColor: tech.color }}
                >
                  {tech.name.charAt(0)}
                </div>
              </div>
              <span className="text-sm font-[var(--font-fira)] text-white text-center">
                {tech.name}
              </span>
              <span className="text-xs text-plantgreen-300 mt-1">
                {tech.domain}
              </span>
            </GlassContainer>
          </motion.div>
        ))}
      </div>

      {/* Expanded View */}
      <AnimatePresence>
        {selected && (
          <motion.div
            key="details"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <GlassContainer variant="strong" className="p-8 max-w-2xl mx-auto">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/10 backdrop-blur-sm">
                  <img
                    src={selected.icon}
                    alt={selected.name}
                    className="w-8 h-8 object-contain"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div 
                    className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-xs hidden"
                    style={{ backgroundColor: selected.color }}
                  >
                    {selected.name.charAt(0)}
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold font-[var(--font-grotesk)] text-white">
                    {selected.name}
                  </h3>
                  <span className="text-plantgreen-300 text-sm">{selected.domain}</span>
                </div>
              </div>
              <p className="text-white/90 font-[var(--font-inter)] leading-relaxed">
                {selected.reason}
              </p>
            </GlassContainer>
          </motion.div>
        )}
      </AnimatePresence>
    </PageLayout>
  );
}
