import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FaFacebookF, 
  FaTwitter, 
  FaInstagram, 
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaChevronRight,
  FaYoutube,
  FaGithub,
  FaDiscord
} from 'react-icons/fa';
import { useEffect, useState } from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [stars, setStars] = useState([]);
  
  // Generate random stars for the background
  useEffect(() => {
    const generateStars = () => {
      const numberOfStars = 50;
      const newStars = [];
      
      for (let i = 0; i < numberOfStars; i++) {
        newStars.push({
          id: i,
          top: Math.random() * 100,
          left: Math.random() * 100,
          size: Math.random() * 2 + 1,
          animationDuration: Math.random() * 3 + 2
        });
      }
      
      setStars(newStars);
    };
    
    generateStars();
  }, []);
  
  // Enhanced animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (custom) => ({ 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.7,
        delay: custom * 0.1,
        ease: "easeOut"
      }
    })
  };

  const socialHover = {
    rest: { scale: 1 },
    hover: { 
      scale: 1.15, 
      rotate: 5,
      transition: { 
        type: "spring", 
        stiffness: 400, 
        damping: 10 
      }
    }
  };

  const linkHover = {
    rest: { x: 0 },
    hover: { 
      x: 6,
      color: "#60a5fa",
      transition: { type: "tween", duration: 0.2 }
    }
  };

  return (
    <footer className="bg-gradient-to-b from-[#0b1325] to-[#0f172a] text-white relative overflow-hidden">
      {/* Animated Stars Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {stars.map((star) => (
          <motion.div
            key={star.id}
            className="absolute rounded-full bg-white z-0"
            style={{
              top: `${star.top}%`,
              left: `${star.left}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
            }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: star.animationDuration,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-6 pt-24 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Brand section with enhanced animation */}
          <motion.div 
            className="col-span-1 md:col-span-4"
            initial="hidden"
            whileInView="visible"
            custom={0}
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
          >
            <Link to="/" className="inline-block mb-6 group">
              <span className="text-3xl font-bold">
                <motion.span 
                  className="text-[#60a5fa]"
                  whileHover={{ scale: 1.05 }}
                >
                  NSS
                </motion.span>{" "}
                <motion.span 
                  className="bg-gradient-to-r from-[#c084fc] to-[#a855f7] bg-clip-text text-transparent"
                  whileHover={{ scale: 1.05 }}
                >
                  NIT-JSR
                </motion.span>
              </span>
            </Link>
            <p className="text-gray-300 mb-8 leading-relaxed">
              National Service Scheme at NIT Jamshedpur - Empowering students through community service, 
              fostering leadership skills, and creating positive social impact through meaningful volunteer initiatives.
            </p>
      
          </motion.div>

          {/* Quick Links with hover animations */}
          <motion.div 
            className="col-span-1 md:col-span-2"
            initial="hidden"
            whileInView="visible"
            custom={1}
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
          >
            <h3 className="text-lg font-semibold mb-6 relative inline-block">
              <span className="bg-gradient-to-r from-[#60a5fa] to-[#93c5fd] bg-clip-text text-transparent">Quick Links</span>
              <span className="block h-1 w-1/2 bg-gradient-to-r from-[#60a5fa] to-[#93c5fd] mt-1 rounded-full"></span>
            </h3>
            <ul className="space-y-3">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about' },
                { name: 'Events', path: '/events' },
                { name: 'Gallery', path: '/gallery' },
                { name: 'Our Team', path: '/team' },
                { name: 'Contact', path: '/contact' }
              ].map((link, index) => (
                <motion.li key={index} className="group">
                  <Link to={link.path} className="text-gray-300 transition-colors duration-300 inline-flex items-center">
                    <motion.div
                      initial="rest"
                      whileHover="hover"
                      variants={linkHover}
                      className="flex items-center"
                    >
                      <FaChevronRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span>{link.name}</span>
                    </motion.div>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info with hover effects */}
          <motion.div 
            className="col-span-1 md:col-span-3"
            initial="hidden"
            whileInView="visible"
            custom={2}
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
          >
            <h3 className="text-lg font-semibold mb-6 relative inline-block">
              <span className="bg-gradient-to-r from-[#60a5fa] to-[#c084fc] bg-clip-text text-transparent">Contact Us</span>
              <span className="block h-1 w-1/2 bg-gradient-to-r from-[#60a5fa] to-[#c084fc] mt-1 rounded-full"></span>
            </h3>
            <ul className="space-y-5">
              <motion.li 
                className="flex items-start"
                whileHover={{ x: 3 }}
              >
                <div className="w-9 h-9 rounded-full bg-[#1e293b] flex items-center justify-center mr-3 flex-shrink-0 shadow-lg">
                  <FaMapMarkerAlt className="w-4 h-4 text-[#60a5fa]" />
                </div>
                <span className="text-gray-300 mt-1">
                  NIT Jamshedpur, Adityapur, Jamshedpur, Jharkhand - 831014
                </span>
              </motion.li>
              <motion.li 
                className="flex items-center"
                whileHover={{ x: 3 }}
              >
                <div className="w-9 h-9 rounded-full bg-[#1e293b] flex items-center justify-center mr-3 flex-shrink-0 shadow-lg">
                  <FaEnvelope className="w-4 h-4 text-[#c084fc]" />
                </div>
                <a href="mailto:nss@nitjsr.ac.in" className="text-gray-300 hover:text-[#60a5fa] transition-colors duration-300">
                  nss@nitjsr.ac.in
                </a>
              </motion.li>
              <motion.li 
                className="flex items-center"
                whileHover={{ x: 3 }}
              >
                <div className="w-9 h-9 rounded-full bg-[#1e293b] flex items-center justify-center mr-3 flex-shrink-0 shadow-lg">
                  <FaPhone className="w-4 h-4 text-[#60a5fa]" />
                </div>
                <a href="tel:+919876543210" className="text-gray-300 hover:text-[#60a5fa] transition-colors duration-300">
                  +91 98765 43210
                </a>
              </motion.li>
            </ul>
          </motion.div>

          {/* Enhanced Social Media Section with Animated Background */}
          <motion.div 
            className="col-span-1 md:col-span-3"
            initial="hidden"
            whileInView="visible"
            custom={3}
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
          >
            <h3 className="text-lg font-semibold mb-6 relative inline-block">
              <span className="bg-gradient-to-r from-[#c084fc] to-[#60a5fa] bg-clip-text text-transparent">Connect With Us</span>
              <span className="block h-1 w-1/2 bg-gradient-to-r from-[#c084fc] to-[#60a5fa] mt-1 rounded-full"></span>
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Follow us on social media and stay connected with all our initiatives and impact stories.
            </p>
            
            <div className="flex space-x-4 mb-8">
              {[
                { icon: FaFacebookF, color: "#4267B2", link: "https://facebook.com" },
                { icon: FaTwitter, color: "#1DA1F2", link: "https://twitter.com" },
                { icon: FaInstagram, color: "#E1306C", link: "https://instagram.com" },
                { icon: FaLinkedinIn, color: "#0077B5", link: "https://linkedin.com" }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 text-gray-300 hover:text-white shadow-md"
                  initial="rest"
                  whileHover="hover"
                  variants={socialHover}
                  style={{ boxShadow: `0 0 15px rgba(${social.color === '#4267B2' ? '66, 103, 178' : social.color === '#1DA1F2' ? '29, 161, 242' : social.color === '#E1306C' ? '225, 48, 108' : '0, 119, 181'}, 0.15)` }}
                >
                  <motion.div
                    whileHover={{
                      backgroundColor: social.color,
                      transition: { duration: 0.3 }
                    }}
                    className="w-full h-full rounded-full flex items-center justify-center"
                  >
                    <social.icon className="w-4 h-4" />
                  </motion.div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Copyright with subtle animation */}
        <motion.div
          className="border-t border-gray-800 mt-16 pt-8 text-center md:text-left md:flex md:justify-between md:items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { duration: 1, delay: 0.3 } }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400">
            © {currentYear} NSS NIT Jamshedpur. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex justify-center md:justify-end space-x-6 text-sm">
            <Link to="/privacy" className="text-gray-400 hover:text-[#60a5fa] transition-colors duration-300">Privacy Policy</Link>
            <span className="text-gray-600">•</span>
            <Link to="/terms" className="text-gray-400 hover:text-[#60a5fa] transition-colors duration-300">Terms of Service</Link>
          </div>
        </motion.div>
      </div>
      
      {/* Accent gradient line at bottom */}
      <div className="h-1 bg-gradient-to-r from-[#60a5fa]/30 via-[#c084fc]/20 to-[#60a5fa]/20"></div>
    </footer>
  );
};

export default Footer;