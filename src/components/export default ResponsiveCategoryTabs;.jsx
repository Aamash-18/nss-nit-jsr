import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const ResponsiveCategoryTabs = ({ categories, activeCategory, setActiveCategory }) => {
  // For small screens, we'll display a scrollable container
  const [isMobile, setIsMobile] = useState(false);

  // Check screen size on mount and when window resizes
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkScreenSize();
    
    // Add resize listener
    window.addEventListener('resize', checkScreenSize);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <section className="py-8 relative z-20 mb:mb-8">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          {/* Responsive container - scrollable on mobile */}
          <div className={`
            ${isMobile ? 'w-full overflow-x-auto px-4 pb-4 hide-scrollbar' : 'flex justify-center'}
          `}>
            <div className={`
              flex bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden p-2 
              shadow-2xl shadow-indigo-500/10 border mx-auto border-white/10
              ${isMobile ? 'w-max gap-x-3' : 'w-max'}
            `}>
              {categories.map((category) => {
                const Icon = category.icon;
                const isActive = activeCategory === category.id;
                
                return (
                  <motion.button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`
                      relative flex items-center gap-2 transition-all duration-300 rounded-xl
                      ${isMobile ? 'px-4 py-3 text-sm' : 'px-8 py-4'}
                      ${isActive ? 'text-white font-medium' : 'text-gray-400 hover:text-white'}
                    `}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeTabBg"
                        className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 rounded-xl -z-10"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                    <Icon className={`${isMobile ? 'text-xl' : 'text-xl'} ${isActive ? 'text-white' : 'text-gray-400'}`} />
                    <span className={isMobile ? 'hidden' : ''}>{category.label}</span>
                  </motion.button>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Add this to your global CSS to hide scrollbar but allow scrolling */}
      <style jsx global>{`
        .hide-scrollbar {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;  /* Chrome, Safari and Opera */
        }
      `}</style>
    </section>
  );
};

export default ResponsiveCategoryTabs;