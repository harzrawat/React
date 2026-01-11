// src/components/Navigation.jsx
import { motion } from "framer-motion";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Navigation() {
  const location = useLocation();
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);

  const navItems = [
    { path: "/", label: "Home", icon: "🏠" },
    { path: "/about", label: "About", icon: "👨‍💻" },
    { path: "/projects", label: "Projects", icon: "🚀" },
    { path: "/tech-stack", label: "Tech Stack", icon: "⚡" },
    { path: "/timeline", label: "Timeline", icon: "📅" },
    { path: "/blog", label: "Blog", icon: "📝" },
  ];

  // Find current index based on location
  useEffect(() => {
    const index = navItems.findIndex(item => item.path === location.pathname);
    if (index !== -1) {
      setCurrentIndex(index);
    }
  }, [location.pathname]);



  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
        e.preventDefault();
        const nextIndex = (currentIndex + 1) % navItems.length;
        setCurrentIndex(nextIndex);
        navigate(navItems[nextIndex].path);
      } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
        e.preventDefault();
        const prevIndex = currentIndex === 0 ? navItems.length - 1 : currentIndex - 1;
        setCurrentIndex(prevIndex);
        navigate(navItems[prevIndex].path);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, navigate]);

  return (
    <>
      {/* Vertical Navigation Sidebar */}
      <nav className="fixed left-0 top-0 h-full w-20 z-50 flex flex-col items-center justify-center">
        {/* Glassmorphic Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/5 to-white/10 backdrop-blur-xl border-r border-white/20 shadow-2xl" />
        
        {/* Navigation Items */}
        <div className="relative z-10 flex flex-col space-y-6">
          {navItems.map((item, index) => (
            <motion.div
              key={item.path}
              className="relative group"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to={item.path}
                onClick={() => setCurrentIndex(index)}
                className={`flex items-center justify-center w-12 h-12 rounded-xl transition-all duration-300 ${
                  location.pathname === item.path
                    ? "bg-white/20 text-white shadow-lg backdrop-blur-sm border border-white/30"
                    : "text-white/70 hover:text-white hover:bg-white/10 hover:backdrop-blur-sm"
                }`}
              >
                <span className="text-xl">{item.icon}</span>
              </Link>

              {/* Tooltip */}
              <motion.div
                className="absolute left-16 top-1/2 -translate-y-1/2 px-3 py-2 bg-black/80 backdrop-blur-sm text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap"
                initial={{ opacity: 0, x: -10 }}
                whileHover={{ opacity: 1, x: 0 }}
              >
                {item.label}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1 w-2 h-2 bg-black/80 rotate-45" />
              </motion.div>

              {/* Active Indicator */}
              {location.pathname === item.path && (
                <motion.div
                  className="absolute -right-1 top-1/2 -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-plantgreen-400 to-plantgreen-600 rounded-full"
                  layoutId="activeIndicator"
                  initial={false}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
            </motion.div>
          ))}
        </div>

        {/* Progress Indicator */}
        <div className="absolute right-2 top-1/2 -translate-y-1/2 w-1 h-32 bg-white/10 rounded-full overflow-hidden">
          <motion.div
            className="w-full bg-gradient-to-b from-plantgreen-400 to-plantgreen-600 rounded-full"
            initial={{ height: 0 }}
            animate={{ height: `${((currentIndex + 1) / navItems.length) * 100}%` }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />
        </div>
      </nav>

      {/* Navigation Hint */}
      <motion.div
        className="fixed bottom-8 left-8 z-40 text-white/60 text-sm font-[var(--font-inter)]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <div className="flex items-center space-x-2 bg-black/20 backdrop-blur-sm px-3 py-2 rounded-full border border-white/10">
          <span>Use arrows to navigate</span>
          <motion.div
            animate={{ x: [0, 3, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            ↔️
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}