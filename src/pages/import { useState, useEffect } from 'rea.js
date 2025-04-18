import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const EnhancedHeader = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  // Listen for scroll events
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);
  
  // Generate random stars with improved configuration
  const generateStars = (count) => {
    return Array.from({ length: count }, (_, i) => ({
      id: `star-${i}`,
      top: Math.random() * 100,
      left: Math.random() * 100,
      size: Math.random() * 2 + 1,
      animationDuration: Math.random() * 3 + 2,
      delay: Math.random() * 2
    }));
  };
  
  const stars = generateStars(50);
  
  const navItems = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Events", to: "/events" },
    { label: "Team", to: "/team" },
    { label: "Contact", to: "/contact" }
  ];
  
  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };
  
  const linkHoverVariants = {
    rest: { scale: 1 },
    hover: { 
      scale: 1.05,
      transition: { duration: 0.2, ease: "easeOut" }
    }
  };

  return (
    <motion.header
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? 'bg-gradient-to-r from-[#0b1325]/95 to-[#0f172a]/95 backdrop-blur-md shadow-lg py-3'
          : 'bg-gradient-to-r from-[#0b1325]/80 to-[#0f172a]/80 backdrop-blur-sm py-5'
      }`}
      initial="hidden"
      animate="visible"
      variants={navVariants}
    >
      {/* Animated Stars Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {stars.map((star) => (
          <motion.div
            key={star.id}
            className="absolute rounded-full bg-white"
            style={{
              top: `${star.top}%`,
              left: `${star.left}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
            }}
            animate={{
              opacity: [0.1, 0.7, 0.1],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: star.animationDuration,
              delay: star.delay,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-6 flex items-center justify-between relative z-10">
        {/* Logo */}
        <Link to="/" className="group">
          <div className="flex items-center space-x-2">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
              className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg flex items-center justify-center"
            >
              <span className="text-white font-bold text-lg">N</span>
            </motion.div>
            
            <span className="text-2xl font-bold">
              <motion.span
                className="text-[#60a5fa]"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                NSS
              </motion.span>{" "}
              <motion.span
                className="bg-gradient-to-r from-[#c084fc] to-[#a855f7] bg-clip-text text-transparent"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                NIT-JSR
              </motion.span>
            </span>
          </div>
        </Link>
        
        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item, index) => (
            <motion.div
              key={item.to}
              custom={index}
              initial="hidden"
              animate="visible"
              variants={itemVariants}
              className="relative"
            >
              <motion.div
                initial="rest"
                whileHover="hover"
                variants={linkHoverVariants}
              >
                <Link
                  to={item.to}
                  className={`font-medium relative px-2 py-1 transition-colors duration-300 ${
                    location.pathname === item.to
                      ? 'text-white'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {item.label}
                  {location.pathname === item.to && (
                    <motion.div
                      className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-[#60a5fa] to-[#c084fc] rounded-full"
                      layoutId="activeNavIndicator"
                      initial={{ opacity: 0, width: '0%' }}
                      animate={{ opacity: 1, width: '100%' }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </Link>
              </motion.div>
            </motion.div>
          ))}
          
          {/* CTA Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg font-medium shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 transition-all duration-300"
          >
            Join Us
          </motion.button>
        </nav>
        
        {/* Mobile Menu Button */}
        <motion.div 
          className="md:hidden"
          whileTap={{ scale: 0.9 }}
        >
          <button className="text-white focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </motion.div>
      </div>
      
      {/* Accent line with animated gradient */}
      <motion.div 
        className="h-0.5 w-full absolute bottom-0 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <motion.div
          className="h-full bg-gradient-to-r from-blue-400 via-purple-500 to-blue-400"
          animate={{
            x: ["0%", "100%"],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "linear"
          }}
          style={{ width: "200%" }}
        />
      </motion.div>
    </motion.header>
  );
};

export default EnhancedHeader;