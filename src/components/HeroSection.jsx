import React from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaUsers, FaHandHoldingHeart } from 'react-icons/fa';
import { IoMdGlobe } from 'react-icons/io';
import { BsStars, BsArrowDownCircle } from 'react-icons/bs';
import { HiOutlineLightBulb } from 'react-icons/hi';

const HeroSection = () => {
  return (
    <section className="relative min-h-[600px] h-auto flex items-center justify-center text-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-950/30 via-blue-950 to-gray-900 z-0">
        {/* Glowing upper Border - matching the events section */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-rose-600 via-blue-300 to-purple-600 blur-md"></div>
        
        {/* Animated Star Field */}
        <div className="absolute inset-0">
          {Array.from({ length: 30 }).map((_, index) => (
            <motion.div
              key={`star-${index}`}
              className="absolute rounded-full bg-white"
              style={{
                width: Math.random() * 3 + 1,
                height: Math.random() * 3 + 1,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                boxShadow: '0 0 4px 2px rgba(255, 255, 255, 0.3)',
              }}
              animate={{
                opacity: [0.2, 0.8, 0.2],
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: 3 + Math.random() * 5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          ))}
        </div>

        {/* Moving Gradient Overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-purple-700/10 via-blue-600/5 to-transparent"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          style={{
            backgroundSize: '200% 200%',
          }}
        />
        
        {/* Animated Orbits */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none">
          <motion.div
            className="absolute w-full h-full rounded-full border border-purple-500/20"
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute w-[85%] h-[85%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-500/20"
            animate={{ rotate: -360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute w-[70%] h-[70%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-indigo-500/20"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
        </div>
      </div>

      {/* Floating Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[
          { Icon: BsStars, size: 24, color: "text-blue-300" },
          { Icon: HiOutlineLightBulb, size: 28, color: "text-yellow-300" },
          { Icon: FaHandHoldingHeart, size: 26, color: "text-purple-300" },
          { Icon: IoMdGlobe, size: 30, color: "text-cyan-300" }
        ].map((item, index) => (
          <motion.div
            key={`icon-${index}`}
            className={`absolute ${item.color} opacity-60`}
            style={{
              left: `${15 + Math.random() * 70}%`,
              top: `${15 + Math.random() * 70}%`,
              fontSize: item.size,
            }}
            animate={{
              y: [0, -15, 0],
              x: [0, Math.random() > 0.5 ? 15 : -15, 0],
              rotate: [0, 10, 0, -10, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          >
            <item.Icon />
          </motion.div>
        ))}
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 py-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 1,
            ease: [0.6, 0.05, 0.01, 0.9],
          }}
          className="flex flex-col items-center"
        >
          {/* Animated Badge */}
          <motion.div
            className="mb-8 px-6 py-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full backdrop-blur-sm border border-purple-500/30 text-white flex items-center gap-2"
            animate={{
              boxShadow: [
                '0 0 8px rgba(168, 85, 247, 0.4)',
                '0 0 16px rgba(168, 85, 247, 0.6)',
                '0 0 8px rgba(168, 85, 247, 0.4)'
              ],
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <BsStars className="text-purple-300" />
            <span className="text-sm font-medium">NSS NIT Jamshedpur</span>
          </motion.div>
          
          {/* Title with Animated Background */}
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent relative"
            style={{
              backgroundImage: 'linear-gradient(90deg, #4f46e5, #8b5cf6, #3b82f6, #4f46e5)',
              backgroundSize: '300% 100%',
            }}
            animate={{
              backgroundPosition: ['0% 0%', '100% 0%', '0% 0%'],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <span className="block">Empower, Engage</span>
            <span className="block">Make an Impact</span>
          </motion.h1>

          {/* Subtitle with Staggered Animation */}
          <motion.p
            className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Join us in our mission to create positive change through service, 
            volunteering, and community development.
          </motion.p>

          {/* Icon Features */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
          >
            {[
              {
                icon: <FaUsers className="text-4xl text-blue-400" />,
                title: "Community",
                description: "Join a network of passionate volunteers dedicated to service"
              },
              {
                icon: <FaCalendarAlt className="text-4xl text-purple-400" />,
                title: "Events",
                description: "Participate in our impactful service events throughout the year"
              },
              {
                icon: <FaHandHoldingHeart className="text-4xl text-rose-400" />,
                title: "Service",
                description: "Make a difference in the lives of people in our community"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center p-6 rounded-xl backdrop-blur-sm bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                }}
                whileHover={{
                  y: -8,
                  boxShadow: '0 10px 30px -15px rgba(130, 71, 229, 0.5)',
                }}
              >
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-xl font-semibold text-white mt-4 mb-2">{feature.title}</h3>
                <p className="text-gray-300 text-center">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <motion.button
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full text-white font-medium flex items-center justify-center gap-2 group shadow-lg shadow-purple-500/20"
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 0 25px rgba(147, 51, 234, 0.6)'
              }}
              whileTap={{ scale: 0.98 }}
            >
              <FaUsers className="group-hover:animate-bounce" />
              <span>Join NSS Team</span>
            </motion.button>
            
            <motion.button
              className="px-8 py-3 bg-transparent border-2 border-blue-500 rounded-full text-white font-medium flex items-center justify-center gap-2 group hover:bg-blue-500/10 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <FaCalendarAlt className="group-hover:rotate-12 transition-transform duration-300" />
              <span>View Events</span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        animate={{ 
          y: [0, 10, 0],
          opacity: [0.6, 1, 0.6]
        }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        onClick={() => window.scrollTo({
          top: window.innerHeight,
          behavior: 'smooth'
        })}
      >
        <BsArrowDownCircle className="text-white text-3xl hover:text-purple-400 transition-colors duration-300" />
      </motion.div>
    </section>
  );
};

export default HeroSection;