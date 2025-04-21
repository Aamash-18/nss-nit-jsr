import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp } from 'lucide-react';

export default function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  // Control visibility based on scroll position
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed md:bottom-6 bottom-20 right-4 z-50"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
        >
          <motion.button
            onClick={scrollToTop}
            className="group relative flex items-center justify-center md:h-14 md:w-14 h-12 w-12 rounded-full bg-gradient-to-br from-violet-600 via-cyan-500 to-rose-500 text-white shadow-lg shadow-violet-500/20"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 25px -5px rgba(139, 92, 246, 0.4), 0 10px 10px -5px rgba(139, 92, 246, 0.1)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Glowing effect */}
            <span className="absolute inset-0 rounded-full bg-gradient-to-br from-violet-600 via-cyan-500 to-rose-500 opacity-75 blur-md group-hover:opacity-100 transition-opacity duration-300"></span>
            
            {/* Button content */}
            <span className="relative flex items-center justify-center bg-gradient-to-br from-violet-600 via-cyan-500 to-rose-500 rounded-full h-12 w-12">
              <motion.div
                animate={{ y: [0, -3, 0] }}
                transition={{ 
                  duration: 1.2, 
                  repeat: Infinity,
                  ease: "easeInOut" 
                }}
              >
                <ChevronUp size={28} strokeWidth={2.5} className="text-white" />
              </motion.div>
            </span>
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}