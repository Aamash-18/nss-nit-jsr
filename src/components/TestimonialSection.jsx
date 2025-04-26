import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Quote, 
  User, 
  Star, 
  ChevronLeft, 
  ChevronRight, 
  Calendar,
  UserSquare2,
  GraduationCap,
  Building,
  Heart
} from 'lucide-react';
import { testimonials } from '../utils/data';

// Icon mapper
const IconMapper = ({ name }) => {
  const icons = {
    "user-tie": <UserSquare2 size={18} />,
    "graduation-cap": <GraduationCap size={18} />,
    "landmark": <Building size={18} />,
    "heartbeat": <Heart size={18} />
  };
  return icons[name] || <User size={18} />;
};

// Mock data for testimonials


export default function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 6000);
    
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
    setIsAutoPlaying(false);
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => 
      (prevIndex + 1) % testimonials.length
    );
    setIsAutoPlaying(false);
  };

  const goToSlide = (index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  // Variants for framer-motion animations
  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1] // Custom easing
      }
    },
    exit: (direction) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1] // Custom easing
      }
    })
  };

  // Floating animation for images
  const floatingAnimation = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="bg-gradient-to-b from-gray-900 via-blue-950/90 to-purple-950/10 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section - Based on the provided example */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-block mb-3 px-4 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-300 text-sm font-medium"
            whileHover={{ scale: 1.05 }}
          >
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-flex items-center"
            >
              <Quote className="mr-2" size={16} />
              Distinguished Voices
            </motion.span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What Our{" "}
            <motion.span 
              className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"
              animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              style={{ backgroundSize: "200% auto" }}
            >
              Leaders
            </motion.span>{" "}
            Say
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Insights from our distinguished guests, past presidents, and notable personalities who have been part of our NSS journey at NIT JSR.
          </p>
        </motion.div>

        {/* Testimonial Carousel - Enhanced Design */}
        <div className="relative">
          {/* Decorative Elements */}
          <motion.div 
            className="absolute -top-16 -left-16 w-64 h-64 rounded-full bg-blue-600/10 blur-3xl"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.3, 0.2]
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div 
            className="absolute -bottom-16 -right-16 w-64 h-64 rounded-full bg-purple-600/10 blur-3xl"
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.3, 0.2]
            }}
            transition={{ duration: 8, repeat: Infinity, delay: 2 }}
          />

          {/* Main Carousel */}
          <div className="relative overflow-hidden">
            {/* Previous Button */}
            <motion.button 
              className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 z-10 bg-purple-800/50 hover:bg-purple-700 text-white w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center backdrop-blur-sm border border-purple-700/50 shadow-lg shadow-purple-900/30"
              whileHover={{ scale: 1.1, backgroundColor: "rgba(126, 34, 206, 0.7)" }}
              whileTap={{ scale: 0.95 }}
              onClick={handlePrev}
            >
              <ChevronLeft size={20} />
            </motion.button>

            {/* Testimonial Display */}
            <div className="relative w-full overflow-hidden px-4 py-10">
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="bg-gradient-to-br from-gray-900/80 to-blue-950/80 backdrop-blur-lg rounded-3xl shadow-2xl p-8 md:p-12 border border-blue-600/20 overflow-hidden"
                >
                  {/* Decorative Elements */}
                  <div className="absolute top-0 left-0 w-full h-full">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600/0 via-blue-600/50 to-purple-600/0"></div>
                    <div className="absolute -top-32 -right-32 w-64 h-64 rounded-full bg-blue-600/10 blur-3xl"></div>
                    <div className="absolute -bottom-32 -left-32 w-64 h-64 rounded-full bg-purple-600/10 blur-3xl"></div>
                  </div>

                  <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
                    {/* Image */}
                    <div className="text-center flex flex-col items-center">
                      <motion.div 
                        className="relative mb-4"
                        variants={floatingAnimation}
                        animate="animate"
                      >
                        <div className="relative">
                          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 blur-sm"></div>
                          <div className="w-40 h-40 lg:w-48 lg:h-48 rounded-full overflow-hidden border-4 border-white/10 relative z-10">
                            <img 
                              src={testimonials[currentIndex].image} 
                              alt={testimonials[currentIndex].name} 
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                        <motion.div 
                          className="absolute -bottom-2 -right-2 bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg shadow-purple-900/30"
                          whileHover={{ scale: 1.1, rotate: 10 }}
                        >
                          <IconMapper name={testimonials[currentIndex].icon} />
                        </motion.div>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                      >
                        <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
                          {testimonials[currentIndex].name}
                        </h3>
                        <p className="text-blue-300 flex items-center justify-center gap-2 mt-1 text-sm">
                          <IconMapper name={testimonials[currentIndex].icon} />
                          {testimonials[currentIndex].position}
                        </p>
                      </motion.div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 flex flex-col">
                      <motion.div 
                        className="mb-6 flex"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                      >
                        <motion.div
                          className="text-blue-600 opacity-50"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
                        >
                          <Quote size={40} />
                        </motion.div>
                      </motion.div>

                      <motion.div 
                        className="text-xl text-gray-200 font-light leading-relaxed mb-6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                      >
                        {testimonials[currentIndex].quote}
                      </motion.div>
                      
                      <motion.div 
                        className="mt-auto pt-4 flex justify-between items-center border-t border-blue-500/20"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                      >
                        <span className="text-blue-300 text-sm flex items-center gap-2">
                          <Calendar size={16} />
                          {testimonials[currentIndex].date}
                        </span>
                        <div className="text-yellow-400 flex gap-1">
                          <motion.span 
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 1.5, repeat: Infinity, delay: 0 }}
                          >
                            <Star size={16} fill="currentColor" />
                          </motion.span>
                          <motion.span 
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
                          >
                            <Star size={16} fill="currentColor" />
                          </motion.span>
                          <motion.span 
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 1.5, repeat: Infinity, delay: 0.6 }}
                          >
                            <Star size={16} fill="currentColor" />
                          </motion.span>
                          <motion.span 
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 1.5, repeat: Infinity, delay: 0.9 }}
                          >
                            <Star size={16} fill="currentColor" />
                          </motion.span>
                          <motion.span 
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 1.5, repeat: Infinity, delay: 1.2 }}
                          >
                            <Star size={16} fill="currentColor" />
                          </motion.span>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Next Button */}
            <motion.button 
              className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 z-10 bg-purple-800/50 hover:bg-purple-700 text-white w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center backdrop-blur-sm border border-purple-700/50 shadow-lg shadow-purple-900/30"
              whileHover={{ scale: 1.1, backgroundColor: "rgba(126, 34, 206, 0.7)" }}
              whileTap={{ scale: 0.95 }}
              onClick={handleNext}
            >
              <ChevronRight size={20} />
            </motion.button>
          </div>

          {/* Indicators */}
          <div className="flex justify-center mt-8 gap-3">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                className={`relative h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "w-10 bg-gradient-to-r from-blue-500 to-purple-500" : "w-3 bg-gray-700 hover:bg-gray-600"
                }`}
                onClick={() => goToSlide(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
              >
                {index === currentIndex && (
                  <motion.span 
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 blur-sm"
                    animate={{ opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                )}
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}