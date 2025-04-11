import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaHome, 
  FaArrowLeft, 
  FaRocket, 
  FaStar, 
  FaExclamationTriangle,
  FaCalendarAlt,
  FaHandHoldingHeart
} from 'react-icons/fa';

export default function NotFoundPage() {
  return (
    <section className="relative z-10 min-h-screen h-auto flex items-center justify-center text-center overflow-hidden py-16">
      {/* Background with 3D layers */}
      <div className="absolute inset-0 bg-black z-0">
        {/* Star field background */}
        <div className="absolute inset-0 opacity-70 bg-black"></div>

        {/* Animated galaxy */}
        <motion.div
          className="absolute inset-0 bg-center bg-cover opacity-40"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 3, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Glowing overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/40 via-purple-900/40 to-rose-900/40"></div>

        {/* Animated aurora effect */}
        <motion.div
          className="absolute inset-x-0 top-0 h-32 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 blur-3xl"
          animate={{
            x: ["-100%", "100%"],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      {/* Floating light particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={`star-${i}`}
            className="absolute rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              backgroundColor:
                i % 3 === 0 ? "#fff" : i % 3 === 1 ? "#a5f3fc" : "#c4b5fd",
              boxShadow:
                i % 3 === 0
                  ? "0 0 10px 2px rgba(255,255,255,0.8)"
                  : i % 3 === 1
                  ? "0 0 10px 2px rgba(165,243,252,0.8)"
                  : "0 0 10px 2px rgba(196,181,253,0.8)",
            }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 2 + Math.random() * 6,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* Floating icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[FaStar, FaRocket, FaHandHoldingHeart].map((Icon, i) => (
          <motion.div
            key={`icon-${i}`}
            className="absolute text-white/30"
            style={{
              left: `${10 + Math.random() * 80}%`,
              top: `${10 + Math.random() * 80}%`,
              fontSize: `${Math.random() * 16 + 24}px`,
            }}
            animate={{
              y: [0, -15, 0],
              rotate: [0, 360],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut",
            }}
          >
            <Icon />
          </motion.div>
        ))}
      </div>

      {/* 404 Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-12">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 1.2,
                ease: [0.6, 0.05, 0.01, 0.9],
              },
            },
          }}
        >
          {/* NSS Badge */}
          <div className="flex justify-center mb-6">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center p-2 bg-white/10 backdrop-blur-xl rounded-full text-rose-300 font-medium text-sm border border-rose-500/40 mx-auto"
            >
              <span className="mr-2 text-rose-300">
                <FaHandHoldingHeart size={16} />
              </span>
              <span className="text-white text-sm font-medium">
                NSS NIT Jamshedpur
              </span>
            </motion.div>
          </div>

          {/* 404 Title with animated gradient */}
          <div className="flex flex-col md:flex-row items-center justify-center md:space-x-4 mb-6">
            <div>
              <motion.h1
                className="text-8xl md:text-9xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{
                  backgroundSize: "200% auto",
                }}
              >
                404
              </motion.h1>
            </div>

            <motion.div
              className="mt-4 md:mt-0 w-16 h-16 bg-gradient-to-r from-rose-500 to-blue-500 rounded-xl flex items-center justify-center shadow-lg"
              animate={{
                boxShadow: [
                  "0 0 15px 2px rgba(219,39,119,0.7)",
                  "0 0 20px 5px rgba(59,130,246,0.7)",
                  "0 0 15px 2px rgba(219,39,119,0.7)",
                ],
                rotate: [0, 360],
              }}
              transition={{
                boxShadow: {
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
                rotate: {
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                },
              }}
            >
              <FaExclamationTriangle className="w-8 h-8 text-white" />
            </motion.div>
          </div>

          {/* Subtitle with animation */}
          <motion.h2
            className="text-2xl md:text-3xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Page Not Found
          </motion.h2>

          <motion.p
            className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            The page you're looking for has ventured too far into space.
            Let's guide you back to familiar territory.
          </motion.p>

          {/* Action buttons with hover effects */}
          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4 mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <motion.button
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full text-white font-semibold flex items-center justify-center gap-2 group"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 15px rgba(59,130,246,0.7)",
              }}
              whileTap={{ scale: 0.98 }}
              onClick={() => window.history.back()}
            >
              <FaArrowLeft className="w-5 h-5 group-hover:animate-bounce" />
              Go Back
            </motion.button>

            <motion.button
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full text-white font-semibold flex items-center justify-center gap-2 group"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 15px rgba(168,85,247,0.7)",
              }}
              whileTap={{ scale: 0.98 }}
              onClick={() => window.location.href = '/'}
            >
              <FaHome className="w-5 h-5 group-hover:animate-pulse" />
              Back to Home
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative orbiting circles */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-64 md:w-96 h-64 md:h-96 opacity-20 pointer-events-none">
        <motion.div
          className="absolute w-full h-full rounded-full border border-blue-300"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute w-[100%] h-[100%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-purple-300"
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute w-[100%] h-[100%] top-1/2 -left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-pink-300"
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Floating rocket animation */}
      <motion.div
        className="absolute bottom-10 right-10 text-white opacity-70 hidden md:block"
        animate={{
          y: [-10, 10, -10],
          rotate: [0, 5, 0, -5, 0],
        }}
        transition={{
          y: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          },
          rotate: {
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
      >
        <FaRocket size={40} />
      </motion.div>
    </section>
  );
}