// import React from 'react'
// import { Link, useLocation } from 'react-router-dom';
// import { FaHome, FaInfoCircle, FaUsers, FaEnvelope, FaCalendarAlt, FaImages } from 'react-icons/fa';

// export default function Navigation(){
//     const location = useLocation();

//     const navItems = [
//       { to: '/', label: 'Home', icon: <FaHome /> },
//       { to: '/about', label: 'About', icon: <FaInfoCircle /> },
//       { to: '/events', label: 'Events', icon: <FaCalendarAlt /> },
//       { to: '/gallery', label: 'Gallery', icon: <FaImages /> },
//       { to: '/team', label: 'Team', icon: <FaUsers /> },
//       { to: '/contact', label: 'Contact', icon: <FaEnvelope /> },
//     ];

//     return (
//       <>
//         <header className="hidden md:block w-full fixed top-0 z-50 bg-white shadow">
//           <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
//             <Link to="/" className="text-2xl font-bold text-gray-800">
//               NSS
//             </Link>
//             <nav className="flex space-x-6 text-gray-700 font-medium">
//               {navItems.map((item) => (
//                 <Link
//                   key={item.to}
//                   to={item.to}
//                   className={`hover:text-black ${
//                     location.pathname === item.to ? 'text-black font-semibold' : ''
//                   }`}
//                 >
//                   {item.label}
//                 </Link>
//               ))}
//             </nav>
//           </div>

//           <svg
//             className="absolute top-full left-0 w-[40px] h-[40px]"
//             viewBox="0 0 100 100"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               d="M 0 100 C 0 40, 20 10, 100 0"
//               stroke="white"
//               strokeWidth="2"
//               fill="none"
//             />
//           </svg>

//           <svg
//             className="absolute top-full right-0 w-[40px] h-[40px] rotate-90"
//             viewBox="0 0 100 100"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               d="M 0 100 C 0 40, 20 10, 100 0"
//               stroke="white"
//               strokeWidth="2"
//               fill="none"
//             />
//           </svg>
//         </header>

// <div className="md:hidden fixed top-0 left-0 w-full bg-transparent px-4 py-3 z-50">
//   <Link to="/" className="text-xl font-bold text-white bg-[rgba(50,50,50,0.2)] px-2">
//     NSS
//   </Link>
// </div>

// <nav className="fixed bottom-0 w-full bg-[rgba(222,212,212,0.1)] backdrop-blur-2xl border-t shadow md:hidden z-50 p-2">
//   <div className="flex justify-around text-sm">
//     {navItems.map((item) => (
//       <Link
//         key={item.to}
//         to={item.to}
//         className={`flex flex-col items-center justify-center py-1 w-full ${
//           location.pathname === item.to ? 'text-gray-100 font-medium' : 'text-gray-400'
//         }`}
//       >
//         <div className="text-[18px] mb-0.5">{item.icon}</div>
//         <span className="text-[12px]">{item.label}</span>
//       </Link>
//     ))}
//   </div>
//         </nav>
//       </>
//   )
// }

import React, { useState, useEffect } from "react";
import { Link,NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaHome,
  FaInfoCircle,
  FaUsers,
  FaEnvelope,
  FaCalendarAlt,
  FaImages,
  FaBars,
  FaTimes,
} from "react-icons/fa";

export default function Navigation() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [stars, setStars] = useState([]);

  // Generate random stars for the background (similar to footer)
  useEffect(() => {
    const generateStars = () => {
      const numberOfStars = 20;
      const newStars = [];

      for (let i = 0; i < numberOfStars; i++) {
        newStars.push({
          id: i,
          top: Math.random() * 100,
          left: Math.random() * 100,
          size: Math.random() * 2 + 1,
          animationDuration: Math.random() * 3 + 2,
        });
      }

      setStars(newStars);
    };

    generateStars();
  }, []);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  const navItems = [
    { to: "/", label: "Home", icon: <FaHome /> },
    { to: "/about", label: "About", icon: <FaInfoCircle /> },
    { to: "/events", label: "Events", icon: <FaCalendarAlt /> },
    { to: "/gallery", label: "Gallery", icon: <FaImages /> },
    { to: "/team", label: "Team", icon: <FaUsers /> },
    { to: "/contact", label: "Contact", icon: <FaEnvelope /> },
  ];

  // Animation variants
  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        delay: custom * 0.1,
      },
    }),
  };

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: {
        type: "tween",
        duration: 0.3,
      },
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        type: "tween",
        duration: 0.4,
      },
    },
  };

  const linkHoverVariants = {
    rest: { scale: 1, x: 0 },
    hover: {
      // scale: 1.05,
      // x: 5,
      color: "#60a5fa",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  };

  const bottomNavVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 0.2,
      },
    },
  };

  return (
    <>
      {/* Desktop Navigation */}
<motion.header
  className={`hidden md:block w-full fixed top-0 z-50 transition-all duration-500`}
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.8 }}
>
  {/* Glass morphism container with improved visual depth */}
  <motion.div 
    className={`relative backdrop-blur-lg transition-all duration-500 ${
      scrolled 
        ? 'bg-black/60 py-3' 
        : 'bg-black/70 py-3.5'
    }`}
  >
    {/* Dynamic cosmic background */}
    <div className="absolute inset-0 overflow-hidden">
      {/* Nebula effect with cyan-violet */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/20 via-violet-800/10 to-indigo-900/20 opacity-60"></div>
      
      {/* Animated cosmic dust */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={`dust-${i}`}
            className="absolute rounded-full bg-white/80"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
            }}
            animate={{
              opacity: [0.1, 0.8, 0.1],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>
      
      {/* Glowing orbs effect - cyan and violet */}
      <div className="absolute inset-0">
        {Array.from({ length: 5 }).map((_, i) => (
          <motion.div
            key={`orb-${i}`}
            className="absolute rounded-full blur-xl"
            style={{
              background: i % 2 === 0 ? 
                'radial-gradient(circle, rgba(139,92,246,0.4) 0%, rgba(76,29,149,0.4) 70%)' : 
                'radial-gradient(circle, rgba(34,211,238,0.4) 0%, rgba(8,145,178,0.4) 70%)',
              top: `${(i * 20) + Math.random() * 10}%`,
              left: `${(i * 20) + Math.random() * 10}%`,
              width: '150px',
              height: '150px',
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
              x: [0, Math.random() * 20 - 10, 0],
              y: [0, Math.random() * 20 - 10, 0],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>
    </div>

    <div className="container mx-auto px-16 flex items-center justify-between h-full relative z-10">
      {/* Logo with orbit animation */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 400, damping: 15 }}
        className="relative"
      >
        <NavLink to="/" className="relative flex items-center group">
          {/* Logo text with glow effect */}
          <div className="font-extrabold text-2xl relative">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-violet-500 relative z-10">
              NSS
            </span>
            <div className="absolute inset-0 blur-sm bg-gradient-to-r from-cyan-400/50 to-violet-500/50 opacity-50 z-0"></div>
          </div>
        </NavLink>
      </motion.div>
      
      {/* Main Navigation with NavLink */}
      <nav className="flex items-center space-x-12">
        {navItems.map((item, index) => (
          <motion.div
            key={item.to}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              delay: 0.1 * index + 0.3,
            }}
            className="relative"
          >
            <NavLink
              to={item.to}
              className={({ isActive }) => `
                group relative px-1 py-2 block font-medium text-base transition-all duration-300
                ${isActive ? 'text-white' : 'text-gray-300 hover:text-white'}
              `}
            >
              {({ isActive }) => (
                <>
                  {/* Text label */}
                  <span className="relative z-10">
                    {item.label}
                  </span>
                  
                  {/* Animated underline with improved transition */}
                  <motion.div
                    layout
                    className={`absolute bottom-0 left-0 h-0.5 rounded-full ${
                      isActive 
                        ? 'bg-gradient-to-r from-cyan-400 to-violet-500' 
                        : 'bg-gradient-to-r from-cyan-400/80 to-violet-500/80'
                    }`}
                    initial={false}
                    animate={{
                      width: isActive ? '100%' : '0%',
                      opacity: isActive ? 1 : 0
                    }}
                    whileHover={{
                      width: '100%',
                      opacity: 1
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 30
                    }}
                  />
                  
                  {/* Subtle glow on active/hover */}
                  <motion.div
                    className="absolute inset-0 -z-10 rounded-lg"
                    initial={false}
                    animate={{
                      background: isActive
                        ? 'radial-gradient(circle, rgba(139,92,246,0.15) 0%, rgba(0,0,0,0.5) 70%)'
                        : 'radial-gradient(circle, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 70%)',
                      opacity: isActive ? 1 : 0
                    }}
                    whileHover={{
                      background: 'radial-gradient(circle, rgba(139,92,246,0.15) 0%, rgba(0,0,0,0) 70%)',
                      opacity: 1
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </>
              )}
            </NavLink>
          </motion.div>
        ))}
      </nav>
    </div>
    
    {/* Enhanced accent line with cyan-violet gradient */}
    <div className="absolute bottom-0 left-0 right-0 h-0.5 overflow-hidden">
      <motion.div 
        className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-violet-500/100 to-cyan-500/0"
        style={{ backgroundSize: "200% 100%" }}
        animate={{
          backgroundPosition: ['0% 0%', '200% 0%'],
          scaleY: [1, 1.5, 1],
        }}
        transition={{ 
          backgroundPosition: {
            duration: 3,
            repeat: Infinity,
            ease: "linear",
          },
          scaleY: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }
        }}
      />
    </div>
  </motion.div>
</motion.header>



    

      {/* Bottom Mobile Navigation */}
      <div className="md:hidden fixed top-0 left-0 w-full bg-transparent px-4 py-3 z-50">
        <Link
          to="/"
          className="text-xl font-bold text-white bg-[rgba(50,50,50,0.2)] px-2"
        >
          NSS
        </Link>
      </div>

      <nav className="fixed bottom-0 w-full bg-[rgba(222,212,212,0.1)] backdrop-blur-2xl border-t shadow md:hidden z-50 p-2">
        <div className="flex justify-around text-sm">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`flex flex-col items-center justify-center py-1 w-full ${
                location.pathname === item.to
                  ? "text-gray-100 font-medium"
                  : "text-gray-400"
              }`}
            >
              <div className="text-[18px] ">{item.icon}</div>
              <span className="text-[12px]">{item.label}</span>
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
}
