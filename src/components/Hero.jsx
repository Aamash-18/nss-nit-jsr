import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Hero() {
  // Enhanced motto array with richer gradient definitions
  const mottos = [
    { 
      text: "Not Me But You", 
      gradient: "from-rose-500 via-pink-500 to-orange-400" 
    },
    { 
      text: "Serve the Community", 
      gradient: "from-emerald-400 via-green-500 to-teal-400" 
    },
    { 
      text: "Build a Greener Tomorrow", 
      gradient: "from-emerald-400 via-green-500 to-lime-400" 
    },
    { 
      text: "Transform Lives", 
      gradient: "from-purple-400 via-violet-500 to-fuchsia-400" 
    }
  ];
  
  const [currentMottoIndex, setCurrentMottoIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [typingComplete, setTypingComplete] = useState(false);
  
  // Typing animation effect
  useEffect(() => {
    const currentMotto = mottos[currentMottoIndex].text;
    
    // Typing animation (left to right)
    if (isTyping) {
      if (displayText.length < currentMotto.length) {
        const timer = setTimeout(() => {
          setDisplayText(currentMotto.slice(0, displayText.length + 1));
        }, 100); // Adjust speed of typing
        return () => clearTimeout(timer);
      } else {
        setTypingComplete(true);
        const pauseTimer = setTimeout(() => {
          setIsTyping(false);
        }, 1000); // Pause after typing completes
        return () => clearTimeout(pauseTimer);
      }
    }
    
    // Deleting animation (right to left)
    if (!isTyping && typingComplete) {
      if (displayText.length > 0) {
        const timer = setTimeout(() => {
          setDisplayText(displayText.slice(0, displayText.length - 1));
        }, 70); // Slightly faster deletion
        return () => clearTimeout(timer);
      } else {
        // Move to next motto
        const nextTimer = setTimeout(() => {
          setCurrentMottoIndex((prevIndex) => (prevIndex + 1) % mottos.length);
          setIsTyping(true);
          setTypingComplete(false);
        }, 500); // Pause before starting next motto
        return () => clearTimeout(nextTimer);
      }
    }
  }, [displayText, isTyping, typingComplete, currentMottoIndex, mottos]);
  
  // Main animations
  const pageVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        when: "beforeChildren",
        staggerChildren: 0.25,
        delayChildren: 0.25,
        duration: 0.8
      }
    }
  };
  
  const childrenVariants = {
    hidden: { y: -70, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring",
        damping: 12,
        stiffness: 100
      }
    }
  };
  
  // Button animation
  const buttonVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
        delay: 1
      }
    },
    hover: { 
      scale: 1.05,
      boxShadow: "0 15px 30px -5px rgba(0, 0, 0, 0.3)",
      backgroundPosition: "right center",
      transition: { duration: 0.4 }
    },
    tap: { 
      scale: 0.95,
      boxShadow: "0 5px 15px -5px rgba(0, 0, 0, 0.3)",
      transition: { duration: 0.2 }
    }
  };

  // Social media icon animations
  const socialIconVariants = {
    hidden: { x: 70, opacity: 0 },
    visible: index => ({ 
      x: 0, 
      opacity: 1,
      transition: { 
        delay: 1.2 + (index * 0.15),
        type: "spring",
        stiffness: 200,
        damping: 20
      }
    }),
    hover: { 
      scale: 1.3,
      rotate: [0, 10, -10, 5, 0],
      boxShadow: "0 10px 20px rgba(0, 0, 0, 0.25)",
      transition: { duration: 0.4 }
    }
  };

  // Cursor blinking animation
  const cursorVariants = {
    blink: {
      opacity: [1, 0, 1],
      transition: {
        duration: 0.8,
        repeat: Infinity,
        repeatType: "loop"
      }
    }
  };

  // Background gradient animation
  const backgroundRef = useRef(null);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gray-900">
      {/* Enhanced Video Background with Advanced Overlay */}
      <div className="absolute inset-0 z-0">
        <video
          className="absolute top-0 left-0 min-w-full min-h-full w-auto h-auto object-cover"
          autoPlay
          loop
          muted
          playsInline
          poster="/NSSPoster.jpg"
          preload="auto"
        >
          <source src="/NSSWeb.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Animated gradient background */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: 0.88,
            transition: { duration: 1.5 }
          }}
          className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900/70 to-cyan-900/50"
          ref={backgroundRef}
        />
        
        {/* Additional gradient overlay */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: [0, 0.3, 0.2, 0.3],
            transition: { 
              duration: 15, 
              repeat: Infinity, 
              repeatType: "reverse" 
            }
          }}
          className="absolute inset-0 bg-gradient-to-tr from-rose-900/30 via-transparent to-blue-900/30"
        />
      </div>
      
      {/* Main Content with Enhanced Styling */}
      <motion.div 
        variants={pageVariants}
        initial="hidden"
        animate="visible"
        className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4 sm:px-6 md:px-8"
      >
        {/* Top Badge */}
        <motion.div
          variants={childrenVariants}
          className="mb-6 md:mb-8 bg-gradient-to-r from-rose-900/40 to-blue-900/40 backdrop-blur-sm px-4 py-2 rounded-full inline-flex items-center border border-white/10"
        >
          <span className="flex h-2 w-2 relative mr-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-600"></span>
          </span>
          <span className="text-white/90 font-medium text-sm tracking-widest uppercase">
            Since 1969
          </span>
        </motion.div>
        
        {/* Main Heading with Multi-Layered Styling */}
        <motion.div variants={childrenVariants} className="relative">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-1 tracking-wider">
            <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-600 to-cyan-500 drop-shadow-2xl">
              Welcome to 
            </span>
            <span className="inline-block ml-2 md:ml-4 text-white drop-shadow-2xl relative">
              NSS
              <span className="absolute -inset-1 bg-gradient-to-r from-rose-600/20 to-blue-600/20 blur-xl -z-10 rounded-lg"></span>
            </span>
          </h1>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-1 mb-6 tracking-wide text-white drop-shadow-2xl">
            NIT Jamshedpur
            <motion.span 
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 1.2, duration: 1.5, ease: "easeInOut" }}
              className="block h-1 mt-2 mx-auto bg-gradient-to-r from-transparent via-rose-500 to-transparent"
            />
          </h2>
        </motion.div>
        
        {/* NSS Text with improved gradient */}
        <motion.div
          variants={childrenVariants} 
          className="mb-8"
        >
          <span className="text-lg sm:text-xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 font-semibold tracking-wide drop-shadow-lg">
            National Service Scheme
          </span>
        </motion.div>
        
        {/* Typing Animation for Motto */}
        <motion.div 
          variants={childrenVariants}
          className="h-16 flex items-center justify-center mb-10 relative"
        >
      
          <div className="font-bold text-xl md:text-3xl px-4 py-2 rounded-lg  min-w-64 flex items-center justify-center">
            <span className={`text-transparent bg-clip-text bg-gradient-to-r ${mottos[currentMottoIndex].gradient} drop-shadow-xl`}>
              {displayText}
            </span>
            <motion.span
              variants={cursorVariants}
              animate="blink"
              className="inline-block w-1 h-8 ml-1 bg-white/80"
            ></motion.span>
          </div>
        </motion.div>
        
        {/* Enhanced CTA Button with Animated Gradient */}
        <motion.div 
          variants={childrenVariants} 
          className="mt-4"
        >
          <motion.button 
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            className="relative overflow-hidden bg-gradient-to-r from-violet-500 via-cyan-500 to-teal-300 bg-size-200 bg-pos-0 text-white font-bold py-4 px-10 rounded-full shadow-lg border border-white/10"
          >
            <motion.span
              initial={{ left: "-100%" }}
              whileHover={{ left: "100%" }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute top-0 bottom-0 w-1/2 -inset-y-full bg-gradient-to-r from-transparent via-white/10 to-transparent"
            />
            Join The Movement
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Social Media Icons with Glass Morphism Effect */}
      <div className="absolute z-30 flex md:flex-col gap-6 md:left-8 md:top-1/2 md:transform md:-translate-y-1/2 bottom-16 left-1/2 transform -translate-x-1/2 md:translate-x-0 ">
        {/* Facebook */}
        <motion.a 
          custom={0}
          variants={socialIconVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
          href="#" 
          className="bg-gradient-to-br from-blue-900/40 to-blue-800/20 backdrop-blur-md p-3 rounded-full text-blue-300 shadow-lg border border-white/10 relative overflow-hidden group"
          aria-label="Facebook"
        >
          <motion.span 
            initial={{ y: "100%" }}
            whileHover={{ y: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-500 opacity-0 group-hover:opacity-20"
          />
          <svg className="w-6 h-6 relative z-10" fill="currentColor" viewBox="0 0 24 24">
            <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.14h-3v4h3v12h5v-12h3.85l.42-4z"/>
          </svg>
        </motion.a>
        
        {/* Instagram */}
        <motion.a 
          custom={1}
          variants={socialIconVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
          href="#" 
          className="bg-gradient-to-br from-rose-900/40 to-rose-800/20 backdrop-blur-md p-3 rounded-full text-rose-300 shadow-lg border border-white/10 relative overflow-hidden group"
          aria-label="Instagram"
        >
          <motion.span 
            initial={{ y: "100%" }}
            whileHover={{ y: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-gradient-to-r from-rose-600 to-pink-500 opacity-0 group-hover:opacity-20"
          />
          <svg className="w-6 h-6 relative z-10" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
          </svg>
        </motion.a>
        
        {/* Twitter */}
        <motion.a 
          custom={2}
          variants={socialIconVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
          href="#" 
          className="bg-gradient-to-br from-cyan-900/40 to-cyan-800/20 backdrop-blur-md p-3 rounded-full text-cyan-300 shadow-lg border border-white/10 relative overflow-hidden group"
          aria-label="Twitter"
        >
          <motion.span 
            initial={{ y: "100%" }}
            whileHover={{ y: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-cyan-500 opacity-0 group-hover:opacity-20"
          />
          <svg className="w-6 h-6 relative z-10" fill="currentColor" viewBox="0 0 24 24">
            <path d="M23.954 4.569a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 9.99 9.99 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482A13.93 13.93 0 011.64 3.161a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.061a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z"/>
          </svg>
        </motion.a>
        
        {/* LinkedIn */}
        <motion.a 
          custom={3}
          variants={socialIconVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
          href="#" 
          className="bg-gradient-to-br from-green-900/40 to-green-800/20 backdrop-blur-md p-3 rounded-full text-green-300 shadow-lg border border-white/10 relative overflow-hidden group"
          aria-label="LinkedIn"
        >
          <motion.span 
            initial={{ y: "100%" }}
            whileHover={{ y: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-500 opacity-0 group-hover:opacity-20"
          /> 
          <svg className="w-6 h-6 relative z-10" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        </motion.a>
      </div>

      {/* Enhanced Scroll Indicator with Subtle Animation */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: 1,
          transition: { delay: 2.5, duration: 1 }
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 hidden md:block"
      >
        <div className="w-8 h-14 border border-white/50 bg-gradient-to-b from-white/10 to-white/5 rounded-full flex items-start justify-center overflow-hidden backdrop-blur-sm shadow-lg">
          <motion.div 
            animate={{ 
              y: [4, 24, 4],
              boxShadow: [
                "0 0 0 0 rgba(244, 63, 94, 0.3)",
                "0 0 20px 5px rgba(244, 63, 94, 0.5)",
                "0 0 0 0 rgba(244, 63, 94, 0.1)"
              ],
              transition: {
                repeat: Infinity,
                duration: 2,
                ease: "easeInOut"
              }
            }}
            className="w-2 h-2 bg-gradient-to-br from-rose-500 to-rose-400 rounded-full mt-1 shadow-md" 
          />
        </div>
      </motion.div>
    </div>
  );
}