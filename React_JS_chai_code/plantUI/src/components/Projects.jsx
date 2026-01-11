// src/components/Projects.jsx
import { motion } from "framer-motion";
import PageLayout from "./PageLayout";
import GlassContainer from "./GlassContainer";

const projects = [
  {
    title: "Realtime Trading Dashboard",
    image: "/images/project-task_monitoring.png",
    description: "A low-latency system to stream market data and analytics.",
    tech: ["Python", "WebSocket", "MongoDB", "React"],
  },
  {
    title: "Portfolio Website",
    image: "/images/project-portfolio.png",
    description: "This site — custom-built with animations and glassmorphism.",
    tech: ["Vite", "TailwindCSS", "Framer Motion"],
  },
  {
    title: "Server Monitoring CLI",
    image: "/images/project-monitor.png",
    description: "Terminal tool for real-time server and network stats.",
    tech: ["Go", "SSH", "Bash"],
  },
];

export default function Projects() {
  return (
    <PageLayout 
      title="Projects" 
      subtitle="Building solutions that solve real-world problems"
    >
      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
          >
            <GlassContainer 
              variant="default" 
              className="overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer group h-full"
            >
              <div className="relative w-full h-48 overflow-hidden rounded-t-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-plantgreen-500/20 to-plantgreen-700/20 z-10" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    e.target.src = `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="200" viewBox="0 0 400 200"><rect width="400" height="200" fill="%23075985"/><text x="200" y="100" text-anchor="middle" dy=".3em" fill="white" font-family="Arial" font-size="16">${project.title}</text></svg>`;
                  }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold font-[var(--font-grotesk)] text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-sm text-white/80 font-[var(--font-inter)] mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <motion.span
                      key={i}
                      className="bg-plantgreen-500/20 backdrop-blur-sm border border-plantgreen-400/30 text-plantgreen-200 px-3 py-1 rounded-full text-xs font-[var(--font-fira)]"
                      whileHover={{ scale: 1.05, backgroundColor: "rgba(14, 165, 233, 0.3)" }}
                      transition={{ delay: i * 0.05 }}
                    >
                      #{tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </GlassContainer>
          </motion.div>
        ))}
      </div>
    </PageLayout>
  );
}
