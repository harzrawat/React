import { useState } from "react";
import { motion } from "framer-motion";

const milestones = [
  {
    year: "2019",
    title: "First Web App",
    description: "Built a college project using Django + Bootstrap, deployed on Heroku.",
    tech: ["Django", "Bootstrap", "Heroku"],
    color: "#8B5CF6",
    icon: "🚀",
    details: "My first step into web development - a college project that taught me the fundamentals of full-stack development and deployment."
  },
  {
    year: "2020",
    title: "Low-level Systems",
    description: "Explored C, OS internals, and built a custom shell as a personal project.",
    tech: ["C", "OS Internals", "Shell Scripting"],
    color: "#EF4444",
    icon: "⚡",
    details: "Dove deep into system programming, understanding how operating systems work under the hood and building custom tools."
  },
  {
    year: "2021",
    title: "Fullstack Work",
    description: "Worked with MERN + Redis + Docker; obsessed with performance.",
    tech: ["React", "Node.js", "MongoDB", "Redis", "Docker"],
    color: "#10B981",
    icon: "🔧",
    details: "Mastered the full development lifecycle with modern technologies, focusing heavily on optimization and scalable architecture."
  },
  {
    year: "2023",
    title: "Realtime Systems",
    description: "Built trading + telemetry dashboards using WebSockets and Python APIs.",
    tech: ["WebSockets", "Python", "Real-time Data"],
    color: "#F59E0B",
    icon: "📊",
    details: "Created high-frequency data systems handling thousands of real-time updates, perfect for financial and monitoring applications."
  },
  {
    year: "2024",
    title: "Builder Mode",
    description: "Started building tools, designing systems, and mentoring developers.",
    tech: ["System Design", "Mentoring", "Architecture"],
    color: "#8B5CF6",
    icon: "🏗️",
    details: "Transitioned into a leadership role, focusing on building robust systems and helping other developers grow their skills."
  },
];

// Individual Timeline Item Component with zigzag positioning
function TimelineItem({ milestone, index, selectedMilestone, setSelectedMilestone }) {
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      className={`flex items-center mb-16 ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}
      initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
      animate={{ 
        opacity: 1, 
        x: 0,
        transition: { 
          duration: 0.8, 
          ease: "easeOut",
          delay: index * 0.2 
        }
      }}
    >
      {/* Content Card */}
      <motion.div 
        className="w-80 bg-black/30 backdrop-blur-md border border-white/20 rounded-xl p-6 shadow-xl"
        whileHover={{ 
          scale: 1.02,
          boxShadow: `0 20px 40px ${milestone.color}20`,
          borderColor: `${milestone.color}40`
        }}
      >
        <div className="flex items-center gap-4 mb-4">
          <motion.div
            className="w-16 h-16 rounded-full flex items-center justify-center text-2xl cursor-pointer shadow-lg border-3 border-white/20 flex-shrink-0"
            style={{ backgroundColor: milestone.color }}
            whileHover={{ 
              scale: 1.1, 
              rotate: 10,
              boxShadow: `0 0 20px ${milestone.color}60`
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedMilestone(selectedMilestone === index ? null : index)}
          >
            <motion.span
              animate={{
                rotate: [0, 5, -5, 0],
                transition: {
                  duration: 3,
                  repeat: Infinity,
                  repeatDelay: 2
                }
              }}
            >
              {milestone.icon}
            </motion.span>
          </motion.div>
          
          <div>
            <motion.div 
              className="bg-black/40 backdrop-blur-md border border-white/30 px-3 py-1 rounded-full text-sm text-white font-bold shadow-lg inline-block mb-2"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                transition: { delay: index * 0.2 + 0.3, duration: 0.5 }
              }}
            >
              {milestone.year}
            </motion.div>
            <h3 className="text-xl font-bold text-white font-[var(--font-grotesk)]">
              {milestone.title}
            </h3>
          </div>
        </div>
        
        <p className="text-white/80 text-sm mb-4 font-[var(--font-inter)] leading-relaxed">
          {milestone.description}
        </p>
        
        {/* Tech tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {milestone.tech.map((tech, techIndex) => (
            <motion.span
              key={techIndex}
              className="px-3 py-1 text-xs rounded-full text-white font-[var(--font-fira)] backdrop-blur-sm border border-white/20"
              style={{ backgroundColor: milestone.color + "30" }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                transition: { delay: index * 0.2 + 0.5 + techIndex * 0.1, duration: 0.3 }
              }}
              whileHover={{ scale: 1.05, backgroundColor: milestone.color + "50" }}
            >
              {tech}
            </motion.span>
          ))}
        </div>
        
        {/* Expandable details */}
        {selectedMilestone === index && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-4 pt-4 border-t border-white/20"
          >
            <p className="text-white/90 text-sm leading-relaxed font-[var(--font-inter)]">
              {milestone.details}
            </p>
          </motion.div>
        )}
        
        <button
          onClick={() => setSelectedMilestone(selectedMilestone === index ? null : index)}
          className="mt-3 text-plantgreen-300 hover:text-plantgreen-200 text-sm font-[var(--font-fira)] transition-colors hover:underline"
        >
          {selectedMilestone === index ? "Show less ↑" : "Learn more ↓"}
        </button>
      </motion.div>

      {/* Timeline connector */}
      <div className="flex-shrink-0 mx-8">
        <motion.div
          className="w-4 h-4 rounded-full border-4 border-white/30 shadow-lg"
          style={{ backgroundColor: milestone.color }}
          initial={{ scale: 0 }}
          animate={{ 
            scale: 1,
            transition: { delay: index * 0.2 + 0.4, duration: 0.5 }
          }}
          whileHover={{ scale: 1.2 }}
        />
      </div>
    </motion.div>
  );
}

export default function Timeline() {
  const [selectedMilestone, setSelectedMilestone] = useState(null);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Page Title */}
      <div className="pt-16 pb-8 px-8">
        <motion.h1 
          className="text-4xl md:text-6xl font-bold text-white font-[var(--font-grotesk)] mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Timeline
        </motion.h1>
        <motion.p 
          className="text-lg text-white/70 font-[var(--font-inter)]"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          My journey through technology and development
        </motion.p>
      </div>

      {/* Timeline Container */}
      <div className="relative max-w-6xl mx-auto px-8 pb-16">
        {/* Vertical Timeline Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-plantgreen-400 via-plantgreen-500 to-plantgreen-600 opacity-30"></div>
        
        {/* Timeline Items */}
        <div className="relative">
          {milestones.map((milestone, index) => (
            <TimelineItem
              key={index}
              milestone={milestone}
              index={index}
              selectedMilestone={selectedMilestone}
              setSelectedMilestone={setSelectedMilestone}
            />
          ))}
        </div>

        {/* Floating particles for ambiance */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-plantgreen-400/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.6, 0.2],
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: 4 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 3,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}