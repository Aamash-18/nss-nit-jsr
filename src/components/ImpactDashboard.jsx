import React, { useState, useEffect } from 'react';
import { 
  FaUsers, FaLeaf, FaGraduationCap, FaHeartbeat, 
  FaMapMarkerAlt, FaChartLine, FaCalendarAlt, FaTags 
} from 'react-icons/fa';
import { Leaf, HeartPulse, BookOpenText, ListFilter } from "lucide-react"; // Example icons for categories
import { projectData } from '../utils/data';

// Category styling configuration
const categoryConfig = {
  Environment: {
    icon: <FaLeaf />,
    gradient: "from-emerald-600 to-green-900",
    lightGradient: "from-emerald-400 to-teal-600",
    accent: "emerald-500"
  },
  Health: {
    icon: <FaHeartbeat />,
    gradient: "from-rose-600 to-pink-900",
    lightGradient: "from-rose-400 to-pink-600",
    accent: "rose-500"
  },
  Education: {
    icon: <FaGraduationCap />,
    gradient: "from-sky-600 to-blue-900",
    lightGradient: "from-sky-400 to-blue-600",
    accent: "sky-500"
  }
};

// Animated counter component
const AnimatedCounter = ({ value, duration = 2 }) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    let start = 0;
    const end = parseInt(value);
    const incrementTime = (duration * 1000) / end;
    const timer = setInterval(() => {
      start += Math.ceil(end / 100);
      if (start > end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, incrementTime);
    
    return () => clearInterval(timer);
  }, [value, duration]);
  
  return <span>{count.toLocaleString()}</span>;
};

// Main Dashboard Component
export const CharityImpactDashboard = () => {
  const [yearFilter, setYearFilter] = useState("all");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);
  const [animateCounters, setAnimateCounters] = useState(false);
  
  // Filter data based on year and category selections
  const yearData = projectData[yearFilter];
  const filteredProjects = categoryFilter === "all" 
    ? yearData.projects 
    : yearData.projects.filter(project => project.category === categoryFilter);
  
  useEffect(() => {
    // Initialize counter animations when component is in view
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimateCounters(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    
    const element = document.getElementById("stats-counters");
    if (element) observer.observe(element);
    
    return () => observer.disconnect();
  }, []);
  
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-zinc-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 py-16 relative z-10">
        {/* Dashboard Header */}
        <div className="mb-16 text-center">
        <h2 className="text-5xl font-bold mb-2">
            Impact <span className="text-cyan-600">Dashboard</span>
          </h2>
          <div className="w-24 h-1 bg-cyan-500 mx-auto mt-2 mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-300 text-lg">
            Visualizing the meaningful difference we've made in our communities through dedicated service and collaboration.
          </p>
        </div>
        
        {/* Filter Controls */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex items-center w-fit mx-auto justify-center bg-slate-800/60 backdrop-blur-lg rounded-xl p-2 shadow-lg border border-slate-700">
              <FaCalendarAlt className="text-cyan-500 mx-3" />
              {["all", "2023", "2024"].map((year) => (
                <button
                  key={year}
                  onClick={() => setYearFilter(year)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    yearFilter === year 
                      ? "bg-gradient-to-r from-cyan-600 to-blue-700 text-white shadow-lg" 
                      : "text-gray-300 hover:bg-slate-700"
                  }`}
                >
                  {year === "all" ? "All Years" : year}
                </button>
              ))}
            </div>
            <div className="relative flex items-center bg-slate-800/60 backdrop-blur-lg rounded-xl p-2 shadow-lg border border-slate-700 overflow-x-auto">
  <FaTags className="text-cyan-500 mx-3 min-w-max" />
  {["all", "Environment", "Health", "Education"].map((cat) => {
    const iconMap = {
      all: <ListFilter className="w-5 h-5" />,
      Environment: <Leaf className="w-5 h-5" />,
      Health: <HeartPulse className="w-5 h-5" />,
      Education: <BookOpenText className="w-5 h-5" />,
    };

    return (
      <div key={cat} className="relative group">
        <button
          onClick={() => setCategoryFilter(cat)}
          className={`flex items-center justify-center px-4 py-2 rounded-lg font-medium transition-all duration-300 min-w-max ${
            categoryFilter === cat
              ? cat === "all"
                ? "bg-gradient-to-r from-cyan-600 to-blue-700 text-white shadow-lg"
                : `bg-gradient-to-r ${categoryConfig[cat].gradient} text-white shadow-lg`
              : "text-gray-300 hover:bg-slate-700"
          }`}
        >
          {/* Icon visible on mobile */}
          <span className="sm:hidden">{iconMap[cat]}</span>

          {/* Text visible on desktop */}
          <span className="hidden sm:inline">
            {cat === "all" ? "All Categories" : cat}
          </span>
        </button>

        {/* Tooltip text on hover for mobile */}
        <span className="absolute top-7 mb-1 bg-black/20 text-white text-[10px] px-1 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 sm:hidden z-0  whitespace-nowrap">
          {cat === "all" ? "All Categories" : cat}
        </span>
      </div>
    );
  })}
</div>
          </div>
        </div>
        
        {/* Stats Counters Section */}
        <div 
          id="stats-counters"
          className="grid md:grid-cols-3 gap-6 mb-12"
        >
          {[
            { 
              icon: <FaUsers />, 
              title: "Volunteers Mobilized", 
              value: yearData.volunteers,
              gradient: "from-rose-500 to-pink-700",
              decoration: "radial-gradient(circle at top right, rgba(244,63,94,0.3) 0%, transparent 60%)"
            },
            { 
              icon: <FaChartLine />, 
              title: "Events Organized", 
              value: yearData.events,
              gradient: "from-sky-500 to-blue-700",
              decoration: "radial-gradient(circle at top right, rgba(14,165,233,0.3) 0%, transparent 60%)"
            },
            { 
              icon: <FaCalendarAlt />, 
              title: "Service Hours", 
              value: yearData.hours,
              gradient: "from-emerald-500 to-green-700",
              decoration: "radial-gradient(circle at top right, rgba(16,185,129,0.3) 0%, transparent 60%)"
            }
          ].map((stat, index) => (
            <div
              key={index}
              className="relative overflow-hidden bg-slate-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-slate-700/50 group hover:shadow-2xl hover:shadow-cyan-900/20 transition duration-300"
              style={{
                background: `
                  linear-gradient(to bottom right, rgba(30, 41, 59, 0.8), rgba(15, 23, 42, 0.9)),
                  ${stat.decoration}
                `
              }}
            >
              <div className={`absolute top-0 right-0 w-24 h-24 opacity-20 bg-gradient-to-br ${stat.gradient} rounded-bl-full transition-all duration-500 group-hover:opacity-30`}></div>
              
              <div className={`w-16 h-16 mb-4 rounded-2xl flex items-center justify-center bg-gradient-to-br ${stat.gradient} shadow-lg`}>
                <span className="text-2xl text-white">{stat.icon}</span>
              </div>
              
              <h3 className="text-xl font-semibold mb-1 text-white">{stat.title}</h3>
              <div className="text-4xl font-bold bg-gradient-to-r from-cyan-200 via-cyan-400 to-sky-500 bg-clip-text text-transparent transition-all duration-500">
                {animateCounters ? <AnimatedCounter value={stat.value} /> : "0"}
              </div>
            </div>
          ))}
        </div>
        
        {/* Map Visualization */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 bg-clip-text text-transparent">
            Community Impact Map
          </h3>
          
          <div className="relative h-96 bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 shadow-xl">
            {/* Map Background with Grid */}
            <div className="absolute inset-0" style={{
              background: `
                linear-gradient(to bottom right, #0f172a 0%, #0f172a 100%),
                radial-gradient(circle at 25% 25%, rgba(56, 189, 248, 0.15) 0%, transparent 50%),
                radial-gradient(circle at 75% 75%, rgba(16, 185, 129, 0.1) 0%, transparent 50%)
              `
            }}>
              <svg width="100%" height="100%" className="opacity-20">
                <defs>
                  <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
                    <path d="M 50 0 L 0 0 0 50" fill="none" stroke="rgba(203, 213, 225, 0.1)" strokeWidth="0.5" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>
            </div>
            
            {/* Map Legend */}
            <div className="absolute top-4 right-4 bg-slate-800/90 backdrop-blur-sm rounded-lg p-3 shadow-lg border border-slate-700/50 z-10">
              <div className="text-xs font-semibold text-gray-400 mb-2">Categories</div>
              {Object.entries(categoryConfig).map(([name, config]) => (
                <div key={name} className="flex items-center gap-2 mb-1 last:mb-0">
                  <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${config.lightGradient}`}></div>
                  <span className="text-xs text-gray-300">{name}</span>
                </div>
              ))}
            </div>
            
            {/* Map Markers */}
            {filteredProjects.map((project) => {
              // Convert geographical coordinates to relative positions on the map
              const xPos = ((project.lng - 86.17) / 0.06) * 60 + 20; 
              const yPos = 80 - (((project.lat - 22.77) / 0.06) * 60);
              
              return (
                <div
                  key={project.id}
                  className="absolute cursor-pointer z-20 transition-all duration-300 hover:scale-105"
                  style={{ left: `${xPos}%`, top: `${yPos}%` }}
                  onClick={() => setSelectedProject(project)}
                >
                  <div 
                    className={`w-12 h-12 rounded-full flex items-center justify-center shadow-lg relative group`}
                    style={{
                      background: `radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%)`
                    }}
                  >
                    <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${categoryConfig[project.category].gradient} opacity-70 blur-sm group-hover:opacity-100 group-hover:blur-md transition-all duration-300`}></div>
                    <div className={`w-6 h-6 bg-gradient-to-br ${categoryConfig[project.category].lightGradient} rounded-full flex items-center justify-center relative z-10`}>
                      <FaMapMarkerAlt className="text-white text-xs" />
                    </div>
                    
                    {/* Pulsing Animation */}
                    <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${categoryConfig[project.category].lightGradient} animate-ping opacity-30`} style={{animationDuration: '3s'}}></div>
                  </div>
                </div>
              );
            })}
            
            {/* Selected Project Info Box */}
            {selectedProject && (
              <div 
                className="absolute left-1/2 bottom-8 transform -translate-x-1/2 w-72 bg-slate-800/90 backdrop-blur-md rounded-xl p-4 shadow-2xl border border-slate-700/80 z-30"
              >
                <div className="flex items-start gap-3">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${categoryConfig[selectedProject.category].gradient} flex items-center justify-center mt-1`}>
                    {categoryConfig[selectedProject.category].icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-white text-lg">{selectedProject.title}</h4>
                    <p className="text-sm text-gray-300">{selectedProject.location}</p>
                    
                    <div className="mt-3 grid grid-cols-2 gap-2">
                      <div className="bg-slate-700/50 rounded-lg p-2">
                        <div className="text-xs text-gray-400">People Involved</div>
                        <div className="font-semibold text-cyan-400">{selectedProject.people}</div>
                      </div>
                      <div className="bg-slate-700/50 rounded-lg p-2">
                        <div className="text-xs text-gray-400">Impact</div>
                        <div className="font-semibold text-sky-400">{selectedProject.impact}</div>
                      </div>
                    </div>
                    
                    <div className="mt-3 flex justify-between">
                      <span className={`text-xs px-2 py-1 rounded-lg bg-${categoryConfig[selectedProject.category].accent}/20 text-${categoryConfig[selectedProject.category].accent}`}>
                        {selectedProject.category}
                      </span>
                      <button 
                        className="text-xs px-2 py-1 bg-slate-700/70 hover:bg-slate-600 rounded-lg text-gray-300 transition-colors duration-200"
                        onClick={() => setSelectedProject(null)}
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        
        
      </div>
      
      {/* Bottom Wave Decoration */}
      <div className="absolute bottom-0 left-0 w-full h-20 overflow-hidden z-0 transform rotate-180">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="absolute w-full h-40 text-emerald-900/10">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-current"></path>
        </svg>
      </div>
    </div>
  );
};

export default CharityImpactDashboard;