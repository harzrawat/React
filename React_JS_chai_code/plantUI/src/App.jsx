import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";
import Blog from "./components/Blog";
import Timeline from "./components/Timeline";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";


export default function App() {
  const location = useLocation();

  return (
    <>
      <Navigation />
      <main className="pl-20"> {/* Add padding-left to account for vertical navigation */}
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Hero />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/tech-stack" element={<TechStack />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/timeline" element={<Timeline />} />
            <Route path="/footer" element={<Footer />} />
          </Routes>
        </AnimatePresence>
      </main>
    </>
  );
}