
// import { useLayoutEffect, useRef, useState } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const milestones = [
//   {
//     year: "2019",
//     title: "First Web App",
//     description: "Built a college project using Django + Bootstrap, deployed on Heroku.",
//     tech: ["Django", "Bootstrap", "Heroku"],
//     color: "#8B5CF6",
//     icon: "🚀",
//     details: "My first step into web development - a college project that taught me the fundamentals of full-stack development and deployment."
//   },
//   {
//     year: "2020",
//     title: "Low-level Systems",
//     description: "Explored C, OS internals, and built a custom shell as a personal project.",
//     tech: ["C", "OS Internals", "Shell Scripting"],
//     color: "#EF4444",
//     icon: "⚡",
//     details: "Dove deep into system programming, understanding how operating systems work under the hood and building custom tools."
//   },
//   {
//     year: "2021",
//     title: "Fullstack Work",
//     description: "Worked with MERN + Redis + Docker; obsessed with performance.",
//     tech: ["React", "Node.js", "MongoDB", "Redis", "Docker"],
//     color: "#10B981",
//     icon: "🔧",
//     details: "Mastered the full development lifecycle with modern technologies, focusing heavily on optimization and scalable architecture."
//   },
//   {
//     year: "2023",
//     title: "Realtime Systems",
//     description: "Built trading + telemetry dashboards using WebSockets and Python APIs.",
//     tech: ["WebSockets", "Python", "Real-time Data"],
//     color: "#F59E0B",
//     icon: "📊",
//     details: "Created high-frequency data systems handling thousands of real-time updates, perfect for financial and monitoring applications."
//   },
//   {
//     year: "2024",
//     title: "Builder Mode",
//     description: "Started building tools, designing systems, and mentoring developers.",
//     tech: ["System Design", "Mentoring", "Architecture"],
//     color: "#8B5CF6",
//     icon: "🏗️",
//     details: "Transitioned into a leadership role, focusing on building robust systems and helping other developers grow their skills."
//   },
//   {
//     year: "2023",
//     title: "Realtime Systems",
//     description: "Built trading + telemetry dashboards using WebSockets and Python APIs.",
//     tech: ["WebSockets", "Python", "Real-time Data"],
//     color: "#F59E0B",
//     icon: "📊",
//     details: "Created high-frequency data systems handling thousands of real-time updates, perfect for financial and monitoring applications."
//   },
//   {
//     year: "2024",
//     title: "Builder Mode",
//     description: "Started building tools, designing systems, and mentoring developers.",
//     tech: ["System Design", "Mentoring", "Architecture"],
//     color: "#8B5CF6",
//     icon: "🏗️",
//     details: "Transitioned into a leadership role, focusing on building robust systems and helping other developers grow their skills."
//   },

// ];

// export default function Timeline() {
//   const timelineRef = useRef(null);
//   const [hoveredItem, setHoveredItem] = useState(null);
//   const [previewPosition, setPreviewPosition] = useState({ x: 0, y: 0 });
// //   const scrollContainerRef = useRef(null);
// //   const svgLineRef = useRef(null);
// //   const [showCodeEditor, setShowCodeEditor] = useState(null);

//   useLayoutEffect(() => {
//     const ctx = gsap.context(() => {
//       // Animate the main timeline line
//       gsap.fromTo(
//         ".timeline-line",
//         { scaleX: 0 },
//         {
//           scaleX: 1,
//           duration: 1.5,
//           ease: "power2.out",
//           scrollTrigger: {
//             trigger: ".timeline-container",
//             start: "top 80%",
//             end: "bottom 20%",
//           },
//         }
//       );

//       // Animate timeline items
//       gsap.utils.toArray(".timeline-node").forEach((el, i) => {
//         gsap.fromTo(
//           el,
//           { scale: 0, opacity: 0 },
//           {
//             scale: 1,
//             opacity: 1,
//             duration: 0.6,
//             delay: 0.2 + i * 0.2,
//             ease: "back.out(1.7)",
//             scrollTrigger: {
//               trigger: ".timeline-container",
//               start: "top 80%",
//             },
//           }
//         );
//       });

//       // Animate content cards
//       gsap.utils.toArray(".timeline-card").forEach((el, i) => {
//         gsap.fromTo(
//           el,
//           { y: 50, opacity: 0 },
//           {
//             y: 0,
//             opacity: 1,
//             duration: 0.8,
//             delay: 0.4 + i * 0.15,
//             ease: "power2.out",
//             scrollTrigger: {
//               trigger: ".timeline-container",
//               start: "top 70%",
//             },
//           }
//         );
//       });
//     }, timelineRef);

//     return () => ctx.revert();
//   }, []);

//   const handleMouseEnter = (index, event) => {
//     setHoveredItem(index);
//     const rect = event.currentTarget.getBoundingClientRect();
//     setPreviewPosition({
//       x: rect.left + rect.width / 2,
//       y: rect.top - 20
//     });
//   };

//   const handleMouseLeave = () => {
//     setHoveredItem(null);
//   };

// //   const handleNodeClick = (index) => {
// //     setShowCodeEditor(showCodeEditor === index ? null : index);
// //   };

// //   const handleMouseEnter = (index) => {
// //     setHoveredItem(index);
// //   };

// //   const handleMouseLeave = () => {
// //     setHoveredItem(null);
// //   };

//   return (
//     <section
//       ref={timelineRef}
//       className="bg-gradient-to-br from-slate-50 to-blue-50 py-20 px-6 sm:px-16 text-slate-800 relative overflow-hidden"
//     >
//       {/* Background decorations */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute top-20 left-10 w-32 h-32 bg-purple-200 rounded-full opacity-20 animate-pulse"></div>
//         <div className="absolute bottom-20 right-10 w-48 h-48 bg-blue-200 rounded-full opacity-20 animate-pulse delay-1000"></div>
//       </div>

//       <div className="max-w-7xl mx-auto relative z-10">
//         <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
//           My Development Journey
//         </h2>
//         <p className="text-center text-slate-600 mb-16 text-lg">
//           Hover over any milestone to explore the details
//         </p>

//         {/* <div 
//           ref={scrollContainerRef}
//           className="timeline-scroll-container overflow-x-auto pb-8 px-6"
//           style={{
//             scrollSnapType: 'x mandatory',
//             scrollBehavior: 'smooth'
//           }}
//         > */}
//         <div className="timeline-container relative">
//           {/* Main timeline line */}
//           <div className="timeline-line absolute top-8 left-0 w-full h-1 bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 rounded-full origin-left"></div>

//           {/* Timeline nodes and cards */}
//           <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-4">
//             {milestones.map((milestone, index) => (
//               <div key={index} className="flex flex-col items-center flex-1 relative">
//                 {/* Timeline node */}
//                 <div
//                   className="timeline-node relative z-20 w-16 h-16 rounded-full cursor-pointer transition-all duration-300 transform hover:scale-125 hover:rotate-12 flex items-center justify-center text-2xl shadow-lg hover:shadow-xl"
//                   style={{ backgroundColor: milestone.color }}
//                   onMouseEnter={(e) => handleMouseEnter(index, e)}
//                   onMouseLeave={handleMouseLeave}
//                 >
//                   <span className="filter drop-shadow-sm">{milestone.icon}</span>
                  
//                   {/* Pulsing ring animation */}
//                   <div 
//                     className="absolute inset-0 rounded-full animate-ping opacity-30"
//                     style={{ backgroundColor: milestone.color }}
//                   ></div>
//                 </div>

//                 {/* Year label */}
//                 <div className="mt-4 text-xl font-bold text-slate-700 bg-white px-3 py-1 rounded-full shadow-sm">
//                   {milestone.year}
//                 </div>

//                 {/* Content card */}
//                 <div className="timeline-card mt-6 bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 max-w-xs">
//                   <h3 className="text-xl font-bold mb-2 text-slate-800">
//                     {milestone.title}
//                   </h3>
//                   <p className="text-sm text-slate-600 mb-4 leading-relaxed">
//                     {milestone.description}
//                   </p>
                  
//                   {/* Tech stack tags */}
//                   <div className="flex flex-wrap gap-2">
//                     {milestone.tech.map((tech, techIndex) => (
//                       <span
//                         key={techIndex}
//                         className="px-2 py-1 text-xs rounded-full text-white font-medium"
//                         style={{ backgroundColor: milestone.color + "CC" }}
//                       >
//                         {tech}
//                       </span>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Hover preview tooltip */}
//         {hoveredItem !== null && (
//           <div
//             className="fixed z-50 pointer-events-none transition-all duration-200"
//             style={{
//               left: previewPosition.x,
//               top: previewPosition.y,
//               transform: 'translate(-50%, -100%)'
//             }}
//           >
//             <div className="bg-slate-900 text-white p-4 rounded-lg shadow-2xl max-w-sm border border-slate-700">
//               <div className="flex items-center gap-3 mb-2">
//                 <span className="text-2xl">{milestones[hoveredItem].icon}</span>
//                 <div>
//                   <h4 className="font-bold text-lg">{milestones[hoveredItem].title}</h4>
//                   <p className="text-slate-300 text-sm">{milestones[hoveredItem].year}</p>
//                 </div>
//               </div>
//               <p className="text-sm text-slate-200 leading-relaxed">
//                 {milestones[hoveredItem].details}
//               </p>
              
//               {/* Preview visualization */}
//               <div className="mt-3 p-3 bg-slate-800 rounded-lg">
//                 <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
//                   <span>Tech Stack</span>
//                   <span>{milestones[hoveredItem].tech.length} technologies</span>
//                 </div>
//                 <div className="w-full bg-slate-700 rounded-full h-2">
//                   <div
//                     className="h-2 rounded-full transition-all duration-1000"
//                     style={{
//                       width: `${(hoveredItem + 1) * 20}%`,
//                       backgroundColor: milestones[hoveredItem].color
//                     }}
//                   ></div>
//                 </div>
//               </div>
//             </div>
            
//             {/* Tooltip arrow */}
//             <div
//               className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-slate-900"
//             ></div>
//           </div>
//         )}

//         {/* </div> */}
//       </div>
//     </section>
//   );
// }

import { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const milestones = [
  {
    year: "2019",
    title: "First Web App",
    description: "Built a college project using Django + Bootstrap, deployed on Heroku.",
    tech: ["Django", "Bootstrap", "Heroku"],
    color: "#8B5CF6",
    icon: "🚀",
    details: "My first step into web development - a college project that taught me the fundamentals of full-stack development and deployment.",
    code: `# Django Views
from django.shortcuts import render
from django.http import JsonResponse

def project_view(request):
    context = {
        'projects': Project.objects.all(),
        'user': request.user
    }
    return render(request, 'projects.html', context)`
  },
  {
    year: "2020",
    title: "Low-level Systems",
    description: "Explored C, OS internals, and built a custom shell as a personal project.",
    tech: ["C", "OS Internals", "Shell Scripting"],
    color: "#EF4444",
    icon: "⚡",
    details: "Dove deep into system programming, understanding how operating systems work under the hood and building custom tools.",
    code: `// Custom Shell Implementation
#include <stdio.h>
#include <unistd.h>
#include <sys/wait.h>

int main() {
    char *args[64];
    char input[256];
    
    while (1) {
        printf("myshell> ");
        fgets(input, 256, stdin);
        
        // Parse and execute command
        if (fork() == 0) {
            execvp(args[0], args);
        } else {
            wait(NULL);
        }
    }
}`
  },
  {
    year: "2021",
    title: "Fullstack Work",
    description: "Worked with MERN + Redis + Docker; obsessed with performance.",
    tech: ["React", "Node.js", "MongoDB", "Redis", "Docker"],
    color: "#10B981",
    icon: "🔧",
    details: "Mastered the full development lifecycle with modern technologies, focusing heavily on optimization and scalable architecture.",
    code: `// Redis Cache Optimization
const redis = require('redis');
const client = redis.createClient();

app.get('/api/data/:id', async (req, res) => {
    const cacheKey = \`data:\${req.params.id}\`;
    
    // Check cache first
    const cached = await client.get(cacheKey);
    if (cached) {
        return res.json(JSON.parse(cached));
    }
    
    // Fetch from DB and cache
    const data = await DataModel.findById(req.params.id);
    await client.setex(cacheKey, 3600, JSON.stringify(data));
    
    res.json(data);
});`
  },
  {
    year: "2023",
    title: "Realtime Systems",
    description: "Built trading + telemetry dashboards using WebSockets and Python APIs.",
    tech: ["WebSockets", "Python", "Real-time Data"],
    color: "#F59E0B",
    icon: "📊",
    details: "Created high-frequency data systems handling thousands of real-time updates, perfect for financial and monitoring applications.",
    code: `# WebSocket Real-time Data Handler
import asyncio
import websockets
import json

class TradingWebSocket:
    def __init__(self):
        self.clients = set()
    
    async def register(self, websocket):
        self.clients.add(websocket)
        
    async def broadcast_price_update(self, data):
        if self.clients:
            await asyncio.gather(
                *[client.send(json.dumps(data)) 
                  for client in self.clients],
                return_exceptions=True
            )`
  },
  {
    year: "2024",
    title: "Builder Mode",
    description: "Started building tools, designing systems, and mentoring developers.",
    tech: ["System Design", "Mentoring", "Architecture"],
    color: "#8B5CF6",
    icon: "🏗️",
    details: "Transitioned into a leadership role, focusing on building robust systems and helping other developers grow their skills.",
    code: `// Microservices Architecture Pattern
class ServiceMesh {
    constructor() {
        this.services = new Map();
        this.loadBalancer = new LoadBalancer();
    }
    
    registerService(name, instances) {
        this.services.set(name, instances);
        this.loadBalancer.addPool(name, instances);
    }
    
    async routeRequest(serviceName, request) {
        const instance = this.loadBalancer.getHealthyInstance(serviceName);
        return await instance.handleRequest(request);
    }
}`
  },
];

export default function Timeline() {
  const timelineRef = useRef(null);
  const scrollContainerRef = useRef(null);
  const svgLineRef = useRef(null);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [showCodeEditor, setShowCodeEditor] = useState(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Animate the SVG line drawing
      const path = svgLineRef.current?.querySelector('path');
      if (path) {
        const pathLength = path.getTotalLength();
        gsap.set(path, {
          strokeDasharray: pathLength,
          strokeDashoffset: pathLength
        });
        
        gsap.to(path, {
          strokeDashoffset: 0,
          duration: 2,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: ".timeline-scroll-container",
            start: "top 80%",
            end: "bottom 20%",
          },
        });
      }

      // Animate timeline items
      gsap.utils.toArray(".timeline-milestone").forEach((el, i) => {
        gsap.fromTo(
          el,
          { scale: 0, opacity: 0, rotateY: 90 },
          {
            scale: 1,
            opacity: 1,
            rotateY: 0,
            duration: 0.8,
            delay: 0.3 + i * 0.2,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: ".timeline-scroll-container",
              start: "top 80%",
            },
          }
        );
      });
    }, timelineRef);

    return () => ctx.revert();
  }, []);

  const handleNodeClick = (index) => {
    setShowCodeEditor(showCodeEditor === index ? null : index);
  };

  const handleMouseEnter = (index) => {
    setHoveredItem(index);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  return (
    <section
      ref={timelineRef}
      className="bg-gradient-to-br from-slate-50 to-blue-50 py-20 text-slate-800 relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-purple-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-blue-200 rounded-full opacity-20 animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-full relative z-10">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent px-6">
          My Development Journey
        </h2>
        <p className="text-center text-slate-600 mb-16 text-lg px-6">
          Scroll horizontally and click nodes to see code examples
        </p>

        {/* Horizontal Scroll Container with Snap */}
        <div 
          ref={scrollContainerRef}
          className="timeline-scroll-container overflow-x-auto pb-8 px-6"
          style={{
            scrollSnapType: 'x mandatory',
            scrollBehavior: 'smooth'
          }}
        >
          <div className="relative flex items-center min-w-max py-12" style={{ width: `${milestones.length * 350}px` }}>
            
            {/* Animated SVG Line */}
            <svg 
              ref={svgLineRef}
              className="absolute top-1/2 left-0 w-full h-2 -translate-y-1/2 pointer-events-none"
              style={{ zIndex: 1 }}
            >
              <defs>
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#8B5CF6" />
                  <stop offset="25%" stopColor="#EF4444" />
                  <stop offset="50%" stopColor="#10B981" />
                  <stop offset="75%" stopColor="#F59E0B" />
                  <stop offset="100%" stopColor="#8B5CF6" />
                </linearGradient>
              </defs>
              <path
                d={`M 175 4 L ${milestones.length * 350 - 175} 4`}
                stroke="url(#lineGradient)"
                strokeWidth="4"
                fill="none"
                strokeLinecap="round"
              />
            </svg>

            {/* Timeline Milestones */}
            {milestones.map((milestone, index) => (
              <div 
                key={index} 
                className="timeline-milestone flex flex-col items-center relative"
                style={{ 
                  scrollSnapAlign: 'center',
                  minWidth: '350px',
                  zIndex: 10
                }}
              >
                {/* Timeline Node */}
                <div
                  className="relative cursor-pointer group"
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => handleNodeClick(index)}
                >
                  {/* Main Node */}
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center text-3xl shadow-lg transition-all duration-300 transform hover:scale-110 hover:rotate-12 border-4 border-white"
                    style={{ backgroundColor: milestone.color }}
                  >
                    <span className="filter drop-shadow-sm">{milestone.icon}</span>
                  </div>
                  
                  {/* Pulsing Ring */}
                  <div 
                    className="absolute inset-0 rounded-full animate-ping opacity-30"
                    style={{ backgroundColor: milestone.color }}
                  ></div>
                  
                  {/* Hover Glow */}
                  {hoveredItem === index && (
                    <div 
                      className="absolute inset-0 rounded-full opacity-50 animate-pulse"
                      style={{ 
                        backgroundColor: milestone.color,
                        boxShadow: `0 0 30px ${milestone.color}80`
                      }}
                    ></div>
                  )}
                </div>

                {/* Year Label */}
                <div 
                  className="mt-6 text-xl font-bold text-white px-4 py-2 rounded-full shadow-md"
                  style={{ backgroundColor: milestone.color }}
                >
                  {milestone.year}
                </div>

                {/* Content Card */}
                <div className="mt-6 bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 max-w-xs">
                  <h3 className="text-xl font-bold mb-2 text-slate-800">
                    {milestone.title}
                  </h3>
                  <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                    {milestone.description}
                  </p>
                  
                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {milestone.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-xs rounded-full text-white font-medium"
                        style={{ backgroundColor: milestone.color + "CC" }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Click for Code Button */}
                  <button
                    onClick={() => handleNodeClick(index)}
                    className="w-full py-2 px-4 rounded-lg text-white font-medium transition-all duration-200 hover:opacity-90"
                    style={{ backgroundColor: milestone.color }}
                  >
                    {showCodeEditor === index ? "Hide Code" : "View Code"}
                  </button>
                </div>

                {/* Code Editor Popup */}
                {showCodeEditor === index && (
                  <div className="absolute top-full mt-4 left-1/2 transform -translate-x-1/2 z-50">
                    <div className="bg-slate-900 rounded-xl shadow-2xl border border-slate-700 overflow-hidden" style={{ width: '480px' }}>
                      {/* Editor Header */}
                      <div className="bg-slate-800 px-4 py-3 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="flex gap-2">
                            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                          </div>
                          <span className="text-slate-300 text-sm ml-3">{milestone.title} - Code Example</span>
                        </div>
                        <button
                          onClick={() => setShowCodeEditor(null)}
                          className="text-slate-400 hover:text-white transition-colors"
                        >
                          ✕
                        </button>
                      </div>
                      
                      {/* Code Content */}
                      <div className="p-4 max-h-80 overflow-y-auto">
                        <pre className="text-sm">
                          <code className="text-slate-200 font-mono leading-relaxed whitespace-pre-wrap">
                            {milestone.code}
                          </code>
                        </pre>
                      </div>
                      
                      {/* Copy Button */}
                      <div className="bg-slate-800 px-4 py-2 border-t border-slate-700">
                        <button
                          onClick={() => navigator.clipboard.writeText(milestone.code)}
                          className="text-xs text-slate-400 hover:text-white transition-colors"
                        >
                          📋 Copy to clipboard
                        </button>
                      </div>
                    </div>
                    
                    {/* Popup Arrow */}
                    <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-b-8 border-transparent border-b-slate-900"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-8 px-6">
          <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-md">
            <span className="text-sm text-slate-600">Scroll horizontally</span>
            <div className="flex gap-1">
              {milestones.map((_, index) => (
                <div
                  key={index}
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: milestones[index].color + "80" }}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}