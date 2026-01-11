// src/components/Blog.jsx
import { motion } from "framer-motion";
import PageLayout from "./PageLayout";
import GlassContainer from "./GlassContainer";

const posts = [
  {
    title: "Optimizing Python APIs for High-Frequency Trading",
    date: "July 2024",
    excerpt:
      "Learn how to design low-latency Python services using FastAPI, async workers, and performance profiling...",
    link: "#",
  },
  {
    title: "Managing MongoDB at Scale: Indexing & Performance",
    date: "May 2024",
    excerpt:
      "Tips and tools for scaling MongoDB queries efficiently, with a focus on query patterns and write strategies.",
    link: "#",
  },
  {
    title: "Why Every Dev Should Learn NGINX",
    date: "March 2024",
    excerpt:
      "NGINX is more than just a web server. Learn how it powers APIs, load balancing, and reverse proxying in production.",
    link: "#",
  },
];

export default function Blog() {
  return (
    <PageLayout 
      title="Writing & Blog" 
      subtitle="Thoughts on technology, systems, and engineering"
    >
      {/* Blog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {posts.map((post, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15, duration: 0.6 }}
          >
            <GlassContainer 
              variant="default" 
              className="p-6 h-full hover:scale-105 transition-transform duration-300 cursor-pointer group"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-semibold font-[var(--font-grotesk)] text-white group-hover:text-plantgreen-200 transition-colors">
                  {post.title}
                </h3>
                <span className="text-xs text-plantgreen-300 bg-plantgreen-500/20 px-2 py-1 rounded-full whitespace-nowrap ml-4">
                  {post.date}
                </span>
              </div>
              
              <p className="text-sm font-[var(--font-inter)] text-white/80 mb-6 leading-relaxed">
                {post.excerpt}
              </p>
              
              <motion.a
                href={post.link}
                className="inline-flex items-center space-x-2 text-plantgreen-300 hover:text-plantgreen-200 font-[var(--font-fira)] text-sm transition-colors"
                whileHover={{ x: 5 }}
              >
                <span>Read more</span>
                <motion.span
                  animate={{ x: [0, 3, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  →
                </motion.span>
              </motion.a>
            </GlassContainer>
          </motion.div>
        ))}
      </div>
    </PageLayout>
  );
}
