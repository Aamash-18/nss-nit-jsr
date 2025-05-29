
import React, { useState, useEffect } from 'react';
import { 
  Heart, Users, Calendar, Award, Leaf, 
  GraduationCap, Globe, Zap, Trophy
} from "lucide-react";

// Simplified dashboard data
const dashboardData = {
  stats: [
    { 
      id: 1,
      title: "Volunteers",
      value: 500,
      icon: Users,
      gradient: "from-indigo-500 to-purple-600",
      increase: 23
    },
    { 
      id: 2,
      title: "Hours Donated", 
      value: 18600,
      icon: Calendar,
      gradient: "from-cyan-500 to-blue-600",
      increase: 18
    },
    { 
      id: 3,
      title: "People Helped",
      value: 4320,
      icon: Heart,
      gradient: "from-pink-500 to-rose-600",
      increase: 31
    },
    { 
      id: 4,
      title: "Communities",
      value: 34,
      icon: Globe,
      gradient: "from-emerald-500 to-teal-600",
      increase: 12
    }
  ],
  categories: [
    {
      name: "Environment",
      icon: Leaf,
      color: "emerald",
      progress: 78,
      impact: "Protected 12,000+ acres of wildlife habitat",
      projects: 23
    },
    {
      name: "Healthcare",
      icon: Heart,
      color: "rose",
      progress: 85,
      impact: "Provided medical services to 28,500+ patients",
      projects: 31
    },
    {
      name: "Education",
      icon: GraduationCap,
      color: "blue",
      progress: 62,
      impact: "Sponsored education for 5,200+ students",
      projects: 18
    },
    {
      name: "Community",
      icon: Users,
      color: "indigo",
      progress: 91,
      impact: "Built 76 community centers and public spaces",
      projects: 27
    }
  ],
  achievements: [
    {
      icon: Trophy,
      title: "Community Excellence Award",
      description: "Recognized for outstanding community service"
    },
    {
      icon: Award,
      title: "Environmental Champion",
      description: "Top-rated charity for ecological initiatives"
    },
    {
      icon: Zap,
      title: "Impact Leader",
      description: "Highest volunteer engagement rate nationally"
    }
  ]
};

// Animated counter component with optimized performance
const AnimatedCounter = ({ value, duration = 2 }) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    let start = 0;
    const end = parseInt(value);
    // Calculate total time and steps for smooth animation with better performance
    const totalTime = duration * 1000;
    const step = Math.max(Math.floor(end / 50), 1);
    const stepTime = totalTime / (end / step);
    
    const timer = setInterval(() => {
      start += step;
      if (start > end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, stepTime);
    
    return () => clearInterval(timer);
  }, [value, duration]);
  
  return <span>{count.toLocaleString()}</span>;
};

// Progress bar with animation
const AnimatedProgressBar = ({ value, color, height = 2, duration = 1.5 }) => {
  const [width, setWidth] = useState(0);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setWidth(value);
    }, 200);
    
    return () => clearTimeout(timer);
  }, [value]);
  
  const colorMap = {
    emerald: "bg-emerald-500",
    rose: "bg-rose-500",
    blue: "bg-blue-500",
    indigo: "bg-indigo-500"
  };
  
  return (
    <div className={`w-full bg-gray-700/30 rounded-full h-${height}`}>
      <div 
        className={`${colorMap[color]} h-${height} rounded-full transition-all duration-1000 ease-out`}
        style={{ width: `${width}%` }}
      ></div>
    </div>
  );
};

// Circle Progress Indicator
const CircleProgress = ({ percentage, size = 120, strokeWidth = 8, color }) => {
  const [progress, setProgress] = useState(0);
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (progress / 100) * circumference;
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(percentage);
    }, 300);
    
    return () => clearTimeout(timer);
  }, [percentage]);
  
  const colorMap = {
    emerald: "stroke-emerald-500",
    rose: "stroke-rose-500",
    blue: "stroke-blue-500",
    indigo: "stroke-indigo-500"
  };
  
  return (
    <div className="relative inline-flex items-center justify-center">
      <svg width={size} height={size} className="transform -rotate-90">
        {/* Background circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
          stroke="rgba(255,255,255,0.1)"
          fill="transparent"
        />
        {/* Progress circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
          stroke="currentColor"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          fill="transparent"
          className={`transition-all duration-1000 ease-out ${colorMap[color]}`}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-2xl font-bold">{progress}%</span>
      </div>
    </div>
  );
};

// Main Dashboard Component
const CharityImpactDashboard = () => {
  const [animateStats, setAnimateStats] = useState(false);
  const [animateCategories, setAnimateCategories] = useState(false);
  const [animateAchievements, setAnimateAchievements] = useState(false);
  
  useEffect(() => {
    // Set up intersection observers for each section
    const observerOptions = { threshold: 0.15 };
    
    const createAndObserve = (elementId, setAnimateFunction) => {
      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          setAnimateFunction(true);
          observer.disconnect();
        }
      }, observerOptions);
      
      const element = document.getElementById(elementId);
      if (element) observer.observe(element);
      return observer;
    };
    
    const statsObserver = createAndObserve("stats-section", setAnimateStats);
    const categoriesObserver = createAndObserve("categories-section", setAnimateCategories);
    const achievementsObserver = createAndObserve("achievements-section", setAnimateAchievements);
    
    return () => {
      statsObserver.disconnect();
      categoriesObserver.disconnect();
      achievementsObserver.disconnect();
    };
  }, []);
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-950 to-gray-900 text-white relative">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Glowing orbs */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-800/25 rounded-full blur-3xl"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-purple-700/25 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-emerald-700/25 rounded-full blur-3xl"></div>
        
        {/* Grid overlay */}
        <div className="absolute inset-0" style={{ 
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.04) 1px, transparent 1px), 
                            linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)`,
          backgroundSize: '60px 60px' 
        }}></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 py-16 relative z-10">
        {/* Animated Header */}
        <header className="text-center mb-20 relative">
          {/* Decorative dots pattern */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-6 flex justify-center gap-2">
            {[0, 1, 2].map((i) => (
              <div 
                key={i} 
                className="w-2 h-2 rounded-full bg-cyan-500"
                style={{
                  animation: 'pulse 2s infinite',
                  animationDelay: `${i * 0.3}s`
                }}
              ></div>
            ))}
          </div>
          
          <div className="inline-block mb-3 mt-8">
            <span className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white text-xs py-1 px-3 rounded-full uppercase tracking-wide font-semibold">Impact Dashboard</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-white via-cyan-200 to-blue-200 text-transparent bg-clip-text">
            Making a Difference
          </h1>
          
          <p className="mt-6 text-cyan-100/80 max-w-2xl mx-auto text-lg">
            Visualizing our collective impact on communities worldwide through service, dedication, and your generous support.
          </p>
          
          {/* Animated underline */}
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mt-8 rounded-full"></div>
        </header>
        
        {/* Stats Section with Animated Cards */}
        <section id="stats-section" className="mb-24">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {dashboardData.stats.map((stat, index) => {
              const Icon = stat.icon;
              
              return (
                <div 
                  key={stat.id}
                  className={`
                    relative overflow-hidden bg-slate-800/30 backdrop-blur-sm 
                    border border-slate-700/30 rounded-2xl p-6
                    transform transition-all duration-700 hover:shadow-lg hover:shadow-cyan-900/20
                    group
                    ${animateStats ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
                  `}
                  style={{ 
                    transitionDelay: `${index * 150}ms`,
                  }}
                >
                  {/* Background glow effect */}
                  <div className={`
                    absolute -top-10 -right-10 w-32 h-32 rounded-full 
                    bg-gradient-to-br ${stat.gradient} opacity-10
                    blur-xl group-hover:opacity-20 transition-opacity duration-500
                  `}></div>
                  
                  <div className={`
                    w-14 h-14 mb-6 rounded-xl flex items-center justify-center
                    bg-gradient-to-br ${stat.gradient} shadow-lg
                    group-hover:scale-105 transition-transform duration-500
                  `}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  
                  <div className="flex items-baseline gap-2 mb-1">
                    <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                      {animateStats ? <AnimatedCounter value={stat.value} /> : '0'}
                    </h3>
                    
                    <div className="flex items-center text-emerald-500 text-sm font-medium">
                      <svg className="w-3 h-3 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="18 15 12 9 6 15"></polyline>
                      </svg>
                      {stat.increase}%
                    </div>
                  </div>
                  
                  <p className="text-lg text-cyan-100/70 font-medium">
                    {stat.title}
                  </p>
                </div>
              );
            })}
          </div>
        </section>
        
        {/* Categories Section with Circle Progress */}
        <section id="categories-section" className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 text-transparent bg-clip-text mb-4">Impact Categories</h2>
            <p className="text-cyan-100/70 max-w-2xl mx-auto">
              Our work spans across key focus areas, each contributing to sustainable development and community well-being.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {dashboardData.categories.map((category, index) => {
              const Icon = category.icon;
              
              return (
                <div 
                  key={category.name}
                  className={`
                    relative overflow-hidden bg-slate-800/30 backdrop-blur-sm
                    border border-slate-700/30 rounded-2xl p-6
                    transform transition-all duration-700 text-center
                    hover:border-${category.color}-500/30 group
                    ${animateCategories ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}
                  `}
                  style={{ 
                    transitionDelay: `${index * 150}ms`,
                  }}
                >
                  {/* Subtle gradient background */}
                  <div className={`
                    absolute inset-0 bg-gradient-to-br from-${category.color}-900/10 to-transparent
                    opacity-0 group-hover:opacity-100 transition-opacity duration-500
                  `}></div>
                  
                  <div className="flex flex-col items-center justify-center relative z-10">
                    <CircleProgress 
                      percentage={animateCategories ? category.progress : 0}
                      color={category.color}
                    />
                    
                    <div className={`
                      w-16 h-16 mt-10 rounded-full flex items-center justify-center
                      bg-${category.color}-500/20 text-${category.color}-400
                      border-4 border-slate-900
                    `}>
                      <Icon className="w-8 h-8" />
                    </div>
                    
                    <h3 className="text-xl font-bold mt-3">{category.name}</h3>
                    <p className="text-sm text-cyan-100/60 mb-4">{category.projects} active initiatives</p>
                    
                    <div className={`
                      text-sm text-${category.color}-300 p-3 rounded-lg
                      bg-${category.color}-900/20 border border-${category.color}-800/30
                    `}>
                      {category.impact}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
        
        {/* Achievements Section */}
        <section id="achievements-section" className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-rose-400 to-purple-400 text-transparent bg-clip-text mb-4">Recognition & Achievements</h2>
            <p className="text-cyan-100/70 max-w-2xl mx-auto">
              Our commitment to excellence has been recognized by leading organizations and institutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {dashboardData.achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              
              return (
                <div 
                  key={index}
                  className={`
                    relative overflow-hidden bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-sm
                    border border-slate-700/30 rounded-2xl p-6
                    transform transition-all duration-700
                    hover:shadow-lg hover:border-yellow-500/30 group
                    ${animateAchievements ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}
                  `}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  {/* Gold shimmer effect */}
                  <div className="absolute -top-20 -right-20 w-40 h-40 bg-yellow-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  
                  <div className="w-16 h-16 mb-5 mx-auto rounded-full flex items-center justify-center bg-yellow-900/30 border border-yellow-700/30 text-yellow-500 group-hover:scale-110 transition-transform duration-500">
                    <Icon className="w-8 h-8" />
                  </div>
                  
                  <h3 className="text-center text-xl font-bold mb-2 text-yellow-100">{achievement.title}</h3>
                  <p className="text-center text-yellow-100/70">{achievement.description}</p>
                  
                  {/* Decorative elements */}
                  <div className="absolute bottom-3 left-3 w-8 h-8">
                    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-yellow-700/30">
                      <path d="M0,0 L100,0 L100,100" stroke="currentColor" strokeWidth="6"/>
                    </svg>
                  </div>
                  <div className="absolute top-3 right-3 w-8 h-8 transform rotate-180">
                    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-yellow-700/30">
                      <path d="M0,0 L100,0 L100,100" stroke="currentColor" strokeWidth="6"/>
                    </svg>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
        
     
      </div>
    </div>
  );
};

export default CharityImpactDashboard;