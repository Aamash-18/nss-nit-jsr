import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Rocket, Orbit, Stars, Satellite, Globe } from "lucide-react";

const NSSLoader = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const texts = [
    "National Service Scheme",
    "NIT Jamshedpur",
    "Not Me But You",
    "Serving Humanity",
    "Building The Nation"
  ];

  // Particle positions
  const particles = Array.from({ length: 20 }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    delay: Math.random() * 2
  }));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % texts.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-[#0a0e17] z-50 overflow-hidden">
      {/* Animated cosmic background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.8, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut"
            }}
            className="absolute rounded-full bg-purple-500"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`
            }}
          />
        ))}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 2 }}
          className="absolute top-1/4 left-1/4"
        >
          <Orbit size={80} className="text-indigo-400 rotate-[20deg]" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute bottom-1/4 right-1/4"
        >
          <Globe size={60} className="text-blue-400" />
        </motion.div>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Animated logo with cosmic ring */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20
          }}
          className="relative mb-8"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute -inset-4 border-t-2 border-b-2 border-indigo-500 rounded-full opacity-70"
          />
          <img src="./logo/NSSlogo.webp" width={80} alt="NSS Logo" className="relative z-10" />
        </motion.div>

        {/* Text animation with rocket icon */}
        <div className="h-16 overflow-hidden flex items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTextIndex}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -30, opacity: 0 }}
              transition={{ duration: 0.7 }}
              className="flex items-center gap-3"
            >
              <Rocket className="text-purple-400 animate-pulse" />
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                {texts[currentTextIndex]}
              </span>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Animated progress with stars */}
        <div className="w-64 mt-10 relative">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              repeatDelay: 0.5
            }}
            className="h-1.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
          />
          <Stars className="absolute -top-6 -left-4 text-yellow-300 animate-pulse" size={20} />
          <Satellite className="absolute -top-6 -right-4 text-blue-300" size={20} />
        </div>

        {/* Floating cosmic elements */}
        <motion.div
          animate={{
            y: [0, -15, 0],
            rotate: [0, 5, 0]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -bottom-20 left-10 opacity-60"
        >
          <svg width="60" height="60" viewBox="0 0 100 100">
            <path
              d="M20,50 Q50,20 80,50 Q50,80 20,50 Z"
              fill="none"
              stroke="#7c3aed"
              strokeWidth="2"
            />
          </svg>
        </motion.div>

        <motion.div
          animate={{
            y: [0, 15, 0],
            rotate: [0, -5, 0]
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute -bottom-20 right-10 opacity-60"
        >
          <svg width="60" height="60" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="40" fill="none" stroke="#3b82f6" strokeWidth="2" strokeDasharray="5,5" />
          </svg>
        </motion.div>
      </div>
    </div>
  );
};

export default NSSLoader;