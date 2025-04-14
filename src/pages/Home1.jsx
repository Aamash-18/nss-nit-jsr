import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaHandHoldingHeart, 
  FaCalendarAlt, 
  FaRocket, 
  FaStar, 
  FaMapMarkerAlt, 
  FaHandsHelping,
  FaQuoteLeft,
  FaQuoteRight,
  FaChevronLeft,
  FaChevronRight
} from 'react-icons/fa';
import { BsPeopleFill } from 'react-icons/bs';
import { MdOutlineVolunteerActivism } from 'react-icons/md';
import { HiOutlineCollection } from 'react-icons/hi';
import { Calendar, MessageSquare, ChevronRight, Heart, Users, Zap, Play } from 'lucide-react';

const Home = () => {
  // State for counters
  const [counters, setCounters] = useState({
    events: 0,
    volunteers: 0,
    lives: 0
  });

  // State for testimonial carousel
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  // Testimonials data
  const testimonials = [
    {
      id: 1,
      content: "Being part of NSS has been a transformative experience. I've learned so much about leadership, teamwork, and most importantly, about giving back to society. The skills I've developed here will stay with me for life.",
      name: "Priya Sharma",
      position: "Computer Science, 3rd Year"
    },
    {
      id: 2,
      content: "The blood donation camps and tree plantation drives we organized have made me realize how small efforts can create big impacts. NSS has helped me become more conscious about my responsibility towards society.",
      name: "Rahul Kumar",
      position: "Mechanical Engineering, 4th Year"
    },
    {
      id: 3,
      content: "Teaching underprivileged children has been the most rewarding experience of my college life. NSS not only gives us opportunities to serve but also provides a platform to develop crucial life skills. I'm proud to be an NSS volunteer.",
      name: "Anjali Patel",
      position: "Electrical Engineering, 2nd Year"
    },
    {
      id: 4,
      content: "Through NSS, I've discovered my passion for social work. The leadership workshops and community service have shaped me into a more empathetic and socially responsible individual.",
      name: "Vikram Singh",
      position: "Civil Engineering, 3rd Year"
    }
  ];

  // Events data with categories
  const events = [
    {
      id: 1,
      title: "Blood Donation Camp",
      description: "Join our annual blood donation drive in collaboration with the local hospital.",
      date: "May 10, 2025",
      location: "College Campus",
      icon: <FaHandsHelping className="w-8 h-8 text-blue-400" />,
      color: "blue",
      category: "Health"
    },
    {
      id: 2,
      title: "Tree Plantation Drive",
      description: "Help us make our planet greener by planting trees in and around our campus.",
      date: "June 5, 2025",
      location: "College Campus & Nearby Areas",
      icon: <MdOutlineVolunteerActivism className="w-8 h-8 text-purple-400" />,
      color: "purple",
      category: "Environment"
    },
    {
      id: 3,
      title: "Leadership Workshop",
      description: "Develop your leadership skills through interactive sessions by industry experts.",
      date: "July 15-16, 2025",
      location: "Conference Hall",
      icon: <BsPeopleFill className="w-8 h-8 text-teal-400" />,
      color: "teal",
      category: "Skill Development"
    }
  ];

  // State for event filter
  const [activeEventCategory, setActiveEventCategory] = useState('All');
  const eventCategories = ['All', 'Health', 'Environment', 'Skill Development', 'Education'];

  // Counter animation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCounters(prev => {
        return {
          events: prev.events < 50 ? prev.events + 1 : 50,
          volunteers: prev.volunteers < 200 ? prev.volunteers + 4 : 200,
          lives: prev.lives < 10000 ? prev.lives + 200 : 10000
        };
      });
    }, 50);

    // Clear interval after counters reach their targets
    if (counters.events === 50 && counters.volunteers === 200 && counters.lives === 10000) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [counters]);

  // Auto-rotate testimonials every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(timer);
  }, [testimonials.length]);

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] },
    },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8 },
    },
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section with 3D parallax effect */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background with 3D layers */}
        <div className="absolute inset-0 bg-black z-0">
          {/* Star field background */}
          <div className="absolute inset-0 bg-[url('/stars-bg.png')] opacity-70"></div>

          {/* Animated galaxy */}
          <motion.div
            className="absolute inset-0 bg-[url('/galaxy-nebula.png')] bg-center bg-cover opacity-40"
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

        {/* Hero Content */}
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
            {/* Animated NSS badge */}
            <div className="flex flex-col md:flex-row items-center justify-center md:space-x-8 mb-6">
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="mb-4 md:mb-0"
              >
                <div className="flex justify-center">
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
                      Not Me But You
                    </span>
                  </motion.div>
                </div>
                <motion.h1
                  className="text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"
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
                  National Service Scheme
                </motion.h1>
                <motion.h2
                  className="text-2xl md:text-3xl font-medium mt-2 text-white"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                >
                  NIT Jamshedpur
                </motion.h2>
              </motion.div>

              <motion.div
                className="w-20 h-20 bg-gradient-to-r from-rose-500 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg transform rotate-12"
                initial={{ rotate: 45, scale: 0 }}
                animate={{ rotate: 0, scale: 1 }}
                transition={{ duration: 0.8, type: "spring" }}
                whileHover={{ rotate: 12, scale: 1.1 }}
              >
                <FaHandsHelping className="w-10 h-10 text-white" />
              </motion.div>
            </div>

            <motion.p
              className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Serving the community and developing leadership skills through meaningful service projects.
              Join us in making a difference in the lives of people around us.
            </motion.p>

            {/* Interactive Typing Effect */}
            <motion.div
              className="flex justify-center mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <div className="text-lg md:text-xl font-medium text-center">
                <span className="text-white">We are </span>
                <span className="relative inline-block">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-400">passionate volunteers</span>
                  <motion.span 
                    className="absolute -right-1 top-0 h-full w-1 bg-blue-400"
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                  />
                </span>
              </div>
            </motion.div>

            {/* Action buttons with hover effects */}
            <motion.div
              className="flex flex-col sm:flex-row justify-center gap-4 mt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <Link to="/about">
                <motion.button
                  className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full text-white font-semibold flex items-center justify-center gap-2 group"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 15px rgba(59,130,246,0.7)",
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <BsPeopleFill className="w-5 h-5 group-hover:animate-bounce" />
                  Learn More
                </motion.button>
              </Link>

              <Link to="/events">
                <motion.button
                  className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full text-white font-semibold flex items-center justify-center gap-2 group"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 15px rgba(168,85,247,0.7)",
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <MdOutlineVolunteerActivism className="w-5 h-5 group-hover:animate-pulse" />
                  Our Events
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Interactive scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 cursor-pointer"
          onClick={() => {
            window.scrollTo({
              top: window.innerHeight,
              behavior: 'smooth'
            });
          }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="flex flex-col items-center"
          >
            <span className="text-white text-sm mb-2">Scroll Down</span>
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.div>
        </motion.div>

        {/* Decorative orbiting circles */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] opacity-20 pointer-events-none">
          <motion.div
            className="absolute w-full h-full rounded-full border border-blue-300"
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute w-full h-full -top-20 -left-20 rounded-full border border-purple-300"
            animate={{ rotate: -360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute w-3/4 h-3/4 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-pink-300"
            animate={{ rotate: 360, scale: [1, 1.2, 1] }}
            transition={{ rotate: { duration: 20, repeat: Infinity, ease: "linear" }, scale: { duration: 8, repeat: Infinity, ease: "easeInOut" } }}
          />
        </div>
      </section>

      {/* Mission Statement with Interactive Cards */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-gray-950 via-blue-950 to-gray-900 bg-clip-border">
        {/* Glowing upper Border */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-rose-600 via-blue-300 to-purple-600 blur-md"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:60px_60px]"></div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Gradient circles */}
          <motion.div
            className="absolute -top-48 -right-48 w-96 h-96 rounded-full bg-purple-600/30 blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0.3, 0.5],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute -bottom-48 -left-48 w-96 h-96 rounded-full bg-blue-600/30 blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 md:px-6">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.div
              className="inline-block mb-3 px-4 py-1 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-300 text-sm font-medium"
              whileHover={{ scale: 1.05 }}
            >
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="inline-flex items-center"
              >
                <HiOutlineCollection className="mr-2" />
                Our Mission & Values
              </motion.span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Empowering{" "}
              <motion.span 
                className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"
                animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                style={{ backgroundSize: "200% auto" }}
              >
                Student Leaders
              </motion.span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"></div>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Enabling students to contribute to society and develop a sense of social responsibility
              through meaningful service opportunities.
            </p>
          </motion.div>

          {/* Interactive Flip Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative group h-72 perspective"
            >
              <div className="absolute inset-0 preserve-3d duration-700 group-hover:my-rotate-y-180">
                {/* Front */}
                <div className="absolute backface-hidden border border-white/10 rounded-2xl overflow-hidden w-full h-full bg-white/5 backdrop-blur-md p-6 flex flex-col items-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-full flex items-center justify-center mb-4">
                    <FaHandsHelping className="w-8 h-8 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-center text-white">Community Service</h3>
                  <p className="text-gray-300 text-center">
                    Engaging in meaningful service projects that address community needs and create positive impact.
                  </p>
                  <div className="mt-auto text-center text-blue-300 text-sm">
                    Click to learn more
                  </div>
                </div>
                
                {/* Back */}
                <div className="absolute my-rotate-y-180 backface-hidden border border-blue-500/50 rounded-2xl overflow-hidden w-full h-full bg-blue-900/20 backdrop-blur-md p-6 flex flex-col">
                  <h3 className="text-xl font-bold mb-4 text-center text-white border-b border-blue-500/30 pb-2">Our Initiatives</h3>
                  <ul className="text-gray-300 space-y-2 mb-4">
                    <li className="flex items-center">
                      <Heart className="w-4 h-4 text-blue-400 mr-2" />
                      Blood Donation Camps
                    </li>
                    <li className="flex items-center">
                      <Users className="w-4 h-4 text-blue-400 mr-2" />
                      Teaching Underprivileged
                    </li>
                    <li className="flex items-center">
                      <Zap className="w-4 h-4 text-blue-400 mr-2" />
                      Disaster Relief Work
                    </li>
                  </ul>
                  <div className="mt-auto text-center">
                    <Link to="/community-service" className="text-blue-400 hover:text-blue-300 transition-colors">
                      Explore Programs →
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative group h-72 perspective"
            >
              <div className="absolute inset-0 preserve-3d duration-700 group-hover:my-rotate-y-180">
                {/* Front */}
                <div className="absolute backface-hidden border border-white/10 rounded-2xl overflow-hidden w-full h-full bg-white/5 backdrop-blur-md p-6 flex flex-col items-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-full flex items-center justify-center mb-4">
                    <FaRocket className="w-8 h-8 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-center text-white">Skill Development</h3>
                  <p className="text-gray-300 text-center">
                    Building leadership, teamwork, and organizational skills through hands-on experience and training.
                  </p>
                  <div className="mt-auto text-center text-blue-300 text-sm">
                    Click to learn more
                  </div>
                </div>
                
                {/* Back */}
                <div className="absolute my-rotate-y-180 backface-hidden border border-purple-500/50 rounded-2xl overflow-hidden w-full h-full bg-purple-900/20 backdrop-blur-md p-6 flex flex-col">
                  <h3 className="text-xl font-bold mb-4 text-center text-white border-b border-purple-500/30 pb-2">Our Workshops</h3>
                  <ul className="text-gray-300 space-y-2 mb-4">
                    <li className="flex items-center">
                      <Zap className="w-4 h-4 text-purple-400 mr-2" />
                      Leadership Training
                    </li>
                    <li className="flex items-center">
                      <Users className="w-4 h-4 text-purple-400 mr-2" />
                      Project Management
                    </li>
                    <li className="flex items-center">
                      <Heart className="w-4 h-4 text-purple-400 mr-2" />
                      Effective Communication
                    </li>
                  </ul>
                  <div className="mt-auto text-center">
                    <Link to="/skill-development" className="text-purple-400 hover:text-purple-300 transition-colors">
                      Join Workshops →
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative group h-72 perspective"
            >
              <div className="absolute inset-0 preserve-3d duration-700 group-hover:my-rotate-y-180">
                {/* Front */}
                <div className="absolute backface-hidden border border-white/10 rounded-2xl overflow-hidden w-full h-full bg-white/5 backdrop-blur-md p-6 flex flex-col items-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-full flex items-center justify-center mb-4">
                    <FaStar className="w-8 h-8 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-center text-white">Social Awareness</h3>
                  <p className="text-gray-300 text-center">
                    Raising awareness about social issues and promoting a sense of responsibility towards society.
                  </p>
                  <div className="mt-auto text-center text-blue-300 text-sm">
                    Click to learn more
                  </div>
                </div>
                
                {/* Back */}
                <div className="absolute my-rotate-y-180 backface-hidden border border-teal-500/50 rounded-2xl overflow-hidden w-full h-full bg-teal-900/20 backdrop-blur-md p-6 flex flex-col">
                  <h3 className="text-xl font-bold mb-4 text-center text-white border-b border-teal-500/30 pb-2">Our Campaigns</h3>
                  <ul className="text-gray-300 space-y-2 mb-4">
                    <li className="flex items-center">
                      <Heart className="w-4 h-4 text-teal-400 mr-2" />
                      Health & Hygiene
                    </li>
                    <li className="flex items-center">
                      <Zap className="w-4 h-4 text-teal-400 mr-2" />
                      Digital Literacy
                    </li>
                    <li className="flex items-center">
                      <Users className="w-4 h-4 text-teal-400 mr-2" />
                      Environmental Protection
                    </li>
                  </ul>
                  <div className="mt-auto text-center">
                    <Link to="/awareness-campaigns" className="text-teal-400 hover:text-teal-300 transition-colors">
                      View Campaigns →
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Impact Statistics with Animated Counters */}
      <section className="relative py-24 bg-gray-950">
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <svg className="absolute left-0 top-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid-pattern" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-pattern)" />
          </svg>
        </div>

        <div className="relative z-10 container mx-auto px-4 md:px-6">
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
                <FaStar className="mr-2" />
                Our Impact
              </motion.span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Making a{" "}
              <motion.span 
                className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-400"
                animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                style={{ backgroundSize: "200% auto" }}
              >
                Difference
              </motion.span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-teal-500 to-blue-500 mx-auto mb-6"></div>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Our impact extends beyond numbers, touching lives and building a better society.
              Here's what we've achieved together.
            </p>
          </motion.div>

          {/* Animated Counter Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Events Counter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-gradient-to-br from-blue-900/40 to-blue-700/10 backdrop-blur-md border border-blue-500/20 rounded-2xl p-6 text-center"
              whileHover={{ y: -5, boxShadow: "0 10px 30px -10px rgba(59, 130, 246, 0.5)" }}
            >
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaCalendarAlt className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Events Organized</h3>
              <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400 mb-2">
                {counters.events}+
              </div>
              <p className="text-gray-300">Community service initiatives and workshops</p>
            </motion.div>

            {/* Volunteers Counter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gradient-to-br from-purple-900/40 to-purple-700/10 backdrop-blur-md border border-purple-500/20 rounded-2xl p-6 text-center"
              whileHover={{ y: -5, boxShadow: "0 10px 30px -10px rgba(168, 85, 247, 0.5)" }}
            >
              <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <BsPeopleFill className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Active Volunteers</h3>
              <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-2">
                {counters.volunteers}+
              </div>
              <p className="text-gray-300">Passionate students dedicated to service</p>
            </motion.div>

            {/* Lives Impacted Counter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-gradient-to-br from-rose-900/40 to-rose-700/10 backdrop-blur-md border border-rose-500/20 rounded-2xl p-6 text-center"
              whileHover={{ y: -5, boxShadow: "0 10px 30px -10px rgba(244, 63, 94, 0.5)" }}
            >
              <div className="w-16 h-16 bg-rose-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaHandsHelping className="w-8 h-8 text-rose-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Lives Impacted</h3>
              <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-orange-400 mb-2">
                {counters.lives}+
              </div>
              <p className="text-gray-300">Beneficiaries of our service initiatives</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section with Filterable Cards */}
      <section className="relative py-24 bg-gradient-to-b from-gray-950 to-gray-900">
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute -top-40 -left-40 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.3, 0.2],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute -bottom-40 -right-40 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.2, 0.3, 0.2],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <motion.div
              className="inline-block mb-3 px-4 py-1 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-300 text-sm font-medium"
              whileHover={{ scale: 1.05 }}
            >
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="inline-flex items-center"
              >
                <FaCalendarAlt className="mr-2" />
                Get Involved
              </motion.span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Upcoming{" "}
              <motion.span 
                className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400"
                animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                style={{ backgroundSize: "200% auto" }}
              >
                Events
              </motion.span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto mb-6"></div>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Join us in our upcoming events and be a part of the change. Find the perfect opportunity
              to contribute and make a difference.
            </p>
          </motion.div>

          {/* Event Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-3 mb-10"
          >
            {eventCategories.map((category, index) => (
              <motion.button
                key={category}
                onClick={() => setActiveEventCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeEventCategory === category
                    ? "bg-purple-600 text-white"
                    : "bg-white/5 text-gray-300 hover:bg-white/10"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>

          {/* Event Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events
              .filter(
                event =>
                  activeEventCategory === "All" ||
                  event.category === activeEventCategory
              )
              .map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className={`bg-gradient-to-br from-${event.color}-900/40 to-${event.color}-700/10 backdrop-blur-md border border-${event.color}-500/20 rounded-2xl overflow-hidden group`}
                  whileHover={{
                    y: -5,
                    boxShadow: `0 10px 30px -10px rgba(120, 120, 255, 0.4)`,
                  }}
                >
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div className={`w-12 h-12 bg-${event.color}-500/20 rounded-xl flex items-center justify-center`}>
                        {event.icon}
                      </div>
                      <span className={`text-${event.color}-400 text-sm font-medium px-3 py-1 bg-${event.color}-500/10 rounded-full`}>
                        {event.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
                    <p className="text-gray-300 mb-4">{event.description}</p>
                    <div className="flex flex-col space-y-2 mb-6">
                      <div className="flex items-center text-sm text-gray-400">
                        <FaCalendarAlt className="mr-2 text-gray-500" />
                        {event.date}
                      </div>
                      <div className="flex items-center text-sm text-gray-400">
                        <FaMapMarkerAlt className="mr-2 text-gray-500" />
                        {event.location}
                      </div>
                    </div>
                    <Link to={`/events/${event.id}`}>
                      <motion.button
                        className={`w-full py-2 bg-${event.color}-600/80 hover:bg-${event.color}-600 text-white rounded-xl flex items-center justify-center gap-2 group`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Register Now
                        <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                      </motion.button>
                    </Link>
                  </div>
                </motion.div>
              ))}
          </div>
          
          <div className="mt-10 text-center">
            <Link to="/events">
              <motion.button
                className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full text-white font-medium flex items-center justify-center gap-2 mx-auto"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 15px rgba(168,85,247,0.7)",
                }}
                whileTap={{ scale: 0.98 }}
              >
                View All Events
                <ChevronRight size={18} />
              </motion.button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="relative py-24 bg-gray-950 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/5 to-transparent"></div>
        
        <div className="relative z-10 container mx-auto px-4 md:px-6">
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
                <FaQuoteLeft className="mr-2" />
                Volunteer Stories
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
                Volunteers
              </motion.span>{" "}
              Say
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"></div>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Hear from our volunteers about their experiences and how NSS has impacted their lives.
            </p>
          </motion.div>

          {/* Testimonial Carousel */}
          <div className="max-w-4xl mx-auto relative">
            {/* Quote marks decoration */}
            <FaQuoteLeft className="absolute top-0 left-0 text-gray-700 opacity-20 w-16 h-16" />
            <FaQuoteRight className="absolute bottom-0 right-0 text-gray-700 opacity-20 w-16 h-16" />

            {/* Testimonial Slides */}
            <div className="py-8 px-4 md:px-12 relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTestimonial}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="min-h-[280px] flex flex-col items-center justify-center"
                >
                  <p className="text-white text-xl italic text-center mb-8">
                    "{testimonials[currentTestimonial].content}"
                  </p>
                  <div className="flex flex-col items-center">
                    <h4 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                      {testimonials[currentTestimonial].name}
                    </h4>
                    <p className="text-gray-400">
                      {testimonials[currentTestimonial].position}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Carousel Controls */}
              <div className="flex justify-center items-center space-x-8 mt-10">
                <motion.button
                  onClick={() => setCurrentTestimonial(prev => (prev - 1 + testimonials.length) % testimonials.length)}
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white bg-white/10 backdrop-blur-md border border-white/20"
                  whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.2)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaChevronLeft className="w-4 h-4" />
                </motion.button>

                {/* Dots indicator */}
                <div className="flex space-x-2">
                  {testimonials.map((_, index) => (
                    <motion.button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className={`w-2.5 h-2.5 rounded-full ${
                        currentTestimonial === index ? "bg-blue-500" : "bg-gray-600"
                      }`}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                    />
                  ))}
                </div>

                <motion.button
                  onClick={() => setCurrentTestimonial(prev => (prev + 1) % testimonials.length)}
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white bg-white/10 backdrop-blur-md border border-white/20"
                  whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.2)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaChevronRight className="w-4 h-4" />
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-900 to-purple-900 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[url('/particles-bg.png')] opacity-20"></div>
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-purple-600/30"
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            backgroundSize: "200% 100%",
          }}
        />
        
        <div className="relative z-10 container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-xl"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Make a Difference?
              </h2>
              <p className="text-blue-100 mb-6">
                Join the NSS community at NIT Jamshedpur and be a part of something bigger than yourself.
                Contribute to society, develop valuable skills, and create memories that last a lifetime.
              </p>
              <motion.div
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Link to="/join">
                  <motion.button
                    className="px-6 py-3 bg-white text-blue-900 font-semibold rounded-full flex items-center gap-2 group"
                    whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255,255,255,0.5)" }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Users className="w-5 h-5" />
                    Become a Volunteer
                  </motion.button>
                </Link>
                <Link to="/contact">
                  <motion.button
                    className="px-6 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-full flex items-center gap-2 group"
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <MessageSquare className="w-5 h-5" />
                    Contact Us
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>
            
            {/* Video Thumbnail */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative w-full max-w-md rounded-2xl overflow-hidden shadow-2xl shadow-blue-900/50"
            >
              <div 
                className="aspect-w-16 aspect-h-9 relative cursor-pointer group"
                onClick={() => setIsVideoModalOpen(true)}
              >
                <img 
                  src="/api/placeholder/640/360" 
                  alt="NSS Activities" 
                  className="w-full h-full object-cover rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    className="w-16 h-16 bg-white rounded-full flex items-center justify-center"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Play className="w-6 h-6 text-blue-900 ml-1" />
                  </motion.div>
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="absolute bottom-4 left-4 right-4"
                >
                  <h3 className="text-lg text-white font-semibold">Watch Our Story</h3>
                  <p className="text-blue-100 text-sm">See how we're making an impact</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      <AnimatePresence>
        {isVideoModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            onClick={() => setIsVideoModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-4xl aspect-w-16 aspect-h-9 bg-black rounded-xl overflow-hidden"
              onClick={e => e.stopPropagation()}
            >
              {/* Video placeholder - in a real app, this would be an iframe or video element */}
              <div className="w-full h-full flex items-center justify-center text-white">
                <div className="text-center">
                  <p className="text-xl font-semibold mb-4">NSS NIT Jamshedpur: Our Journey</p>
                  <p className="text-gray-400">Video would play here in the actual application</p>
                </div>
              </div>
              <button
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 flex items-center justify-center text-white"
                onClick={() => setIsVideoModalOpen(false)}
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Home;

// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   FaHandsHelping,
//   FaQuoteLeft,
//   FaQuoteRight,
//   FaChevronLeft,
//   FaChevronRight,
// } from "react-icons/fa";
// import { BsPeopleFill } from "react-icons/bs";
// import { MdOutlineVolunteerActivism } from "react-icons/md";
// import {
//   Calendar,
//   MessageSquare,
//   ChevronRight,
//   Heart,
//   Users,
//   Zap,
//   Play,
//   Star,
//   MapPin,
//   ArrowDown,
//   Globe,
//   Badge,
//   Sparkle,
//   BookOpen,
// } from "lucide-react";

// const Home = () => {
//   // State for counters
//   const [counters, setCounters] = useState({
//     events: 0,
//     volunteers: 0,
//     lives: 0,
//   });

//   // State for testimonial carousel
//   const [currentTestimonial, setCurrentTestimonial] = useState(0);
//   const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
//   const [scrollProgress, setScrollProgress] = useState(0);

//   // Testimonials data
//   const testimonials = [
//     {
//       id: 1,
//       content:
//         "Being part of NSS has been a transformative experience. I've learned so much about leadership, teamwork, and most importantly, about giving back to society. The skills I've developed here will stay with me for life.",
//       name: "Priya Sharma",
//       position: "Computer Science, 3rd Year",
//       image: "/api/placeholder/80/80",
//     },
//     {
//       id: 2,
//       content:
//         "The blood donation camps and tree plantation drives we organized have made me realize how small efforts can create big impacts. NSS has helped me become more conscious about my responsibility towards society.",
//       name: "Rahul Kumar",
//       position: "Mechanical Engineering, 4th Year",
//       image: "/api/placeholder/80/80",
//     },
//     {
//       id: 3,
//       content:
//         "Teaching underprivileged children has been the most rewarding experience of my college life. NSS not only gives us opportunities to serve but also provides a platform to develop crucial life skills. I'm proud to be an NSS volunteer.",
//       name: "Anjali Patel",
//       position: "Electrical Engineering, 2nd Year",
//       image: "/api/placeholder/80/80",
//     },
//     {
//       id: 4,
//       content:
//         "Through NSS, I've discovered my passion for social work. The leadership workshops and community service have shaped me into a more empathetic and socially responsible individual.",
//       name: "Vikram Singh",
//       position: "Civil Engineering, 3rd Year",
//       image: "/api/placeholder/80/80",
//     },
//   ];

//   // Events data with categories
//   const events = [
//     {
//       id: 1,
//       title: "Blood Donation Camp",
//       description:
//         "Join our annual blood donation drive in collaboration with the local hospital.",
//       date: "May 10, 2025",
//       location: "College Campus",
//       icon: <Heart className="w-8 h-8 text-red-400" />,
//       color: "red",
//       category: "Health",
//       participants: 120,
//     },
//     {
//       id: 2,
//       title: "Tree Plantation Drive",
//       description:
//         "Help us make our planet greener by planting trees in and around our campus.",
//       date: "June 5, 2025",
//       location: "College Campus & Nearby Areas",
//       icon: <Globe className="w-8 h-8 text-emerald-400" />,
//       color: "emerald",
//       category: "Environment",
//       participants: 85,
//     },
//     {
//       id: 3,
//       title: "Leadership Workshop",
//       description:
//         "Develop your leadership skills through interactive sessions by industry experts.",
//       date: "July 15-16, 2025",
//       location: "Conference Hall",
//       icon: <Users className="w-8 h-8 text-indigo-400" />,
//       color: "indigo",
//       category: "Skill Development",
//       participants: 50,
//     },
//     {
//       id: 4,
//       title: "Digital Literacy Program",
//       description:
//         "Help educate people from underprivileged communities about digital technologies.",
//       date: "August 8, 2025",
//       location: "Community Center",
//       icon: <BookOpen className="w-8 h-8 text-cyan-400" />,
//       color: "cyan",
//       category: "Education",
//       participants: 40,
//     },
//   ];

//   // State for event filter
//   const [activeEventCategory, setActiveEventCategory] = useState("All");
//   const eventCategories = [
//     "All",
//     "Health",
//     "Environment",
//     "Skill Development",
//     "Education",
//   ];

//   // Handle scroll for animations
//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollTop = window.scrollY;
//       const docHeight = document.body.offsetHeight - window.innerHeight;
//       const progress = scrollTop / docHeight;
//       setScrollProgress(progress);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Counter animation effect
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCounters((prev) => {
//         return {
//           events: prev.events < 50 ? prev.events + 1 : 50,
//           volunteers: prev.volunteers < 200 ? prev.volunteers + 4 : 200,
//           lives: prev.lives < 10000 ? prev.lives + 200 : 10000,
//         };
//       });
//     }, 50);

//     // Clear interval after counters reach their targets
//     if (
//       counters.events === 50 &&
//       counters.volunteers === 200 &&
//       counters.lives === 10000
//     ) {
//       clearInterval(interval);
//     }

//     return () => clearInterval(interval);
//   }, [counters]);

//   // Auto-rotate testimonials every 5 seconds
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
//     }, 5000);

//     return () => clearInterval(timer);
//   }, [testimonials.length]);

//   // Animation variants
//   const fadeInUp = {
//     hidden: { opacity: 0, y: 50 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] },
//     },
//   };

//   const staggerContainer = {
//     hidden: { opacity: 0 },
//     show: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//       },
//     },
//   };

//   const cardVariant = {
//     hidden: { opacity: 0, y: 20 },
//     show: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         type: "spring",
//         stiffness: 100,
//         damping: 20,
//       },
//     },
//   };

//   return (
//     <div className="overflow-hidden bg-gray-950">
//       {/* Animated Background Cursor Effect */}
//       <div className="fixed inset-0 pointer-events-none z-0">
//         <div
//           className="absolute inset-0 bg-[radial-gradient(circle_at_var(--x,50%)_var(--y,50%),rgba(100,120,255,0.15),transparent_40%)]"
//           style={{
//             "--x": `${Math.random() * 100}%`,
//             "--y": `${Math.random() * 100}%`,
//           }}
//         />
//       </div>

//       {/* Floating Navigation Indicator */}
//       <motion.div
//         className="fixed bottom-8 right-8 z-50 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 p-1 shadow-lg shadow-blue-900/20 hidden md:block"
//         style={{
//           opacity: scrollProgress > 0.05 ? 1 : 0,
//           scale: scrollProgress > 0.05 ? 1 : 0.8,
//         }}
//         transition={{ duration: 0.3 }}
//       >
//         <div className="h-16 w-1 bg-white rounded-full overflow-hidden">
//           <motion.div
//             className="bg-gradient-to-b from-blue-400 to-purple-400"
//             style={{
//               height: `${scrollProgress * 100}%`,
//               width: "100%",
//             }}
//           />
//         </div>
//       </motion.div>

//       {/* Hero Section with 3D parallax effect */}
//       <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
//         {/* Background with 3D layers */}
//         <div className="absolute inset-0 bg-black z-0">
//           {/* Star field background */}
//           <div className="absolute inset-0 bg-[url('/stars-bg.png')] opacity-70"></div>

//           {/* Animated galaxy */}
//           <motion.div
//             className="absolute inset-0 bg-[url('/galaxy-nebula.png')] bg-center bg-cover opacity-40"
//             animate={{
//               scale: [1, 1.1, 1],
//               rotate: [0, 3, 0],
//             }}
//             transition={{
//               duration: 30,
//               repeat: Infinity,
//               ease: "easeInOut",
//             }}
//           />

//           {/* Glowing overlay */}
//           <div className="absolute inset-0 bg-gradient-to-b from-blue-900/40 via-purple-900/40 to-rose-900/40"></div>

//           {/* Animated aurora effect */}
//           <motion.div
//             className="absolute inset-x-0 top-0 h-32 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 blur-3xl"
//             animate={{
//               x: ["-100%", "100%"],
//             }}
//             transition={{
//               duration: 15,
//               repeat: Infinity,
//               ease: "linear",
//             }}
//           />

//           {/* Animated mesh grid */}
//           <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-30"></div>
//         </div>

//         {/* Floating light particles */}
//         <div className="absolute inset-0 overflow-hidden pointer-events-none">
//           {[...Array(60)].map((_, i) => (
//             <motion.div
//               key={`star-${i}`}
//               className="absolute rounded-full"
//               style={{
//                 left: `${Math.random() * 100}%`,
//                 top: `${Math.random() * 100}%`,
//                 width: `${Math.random() * 3 + 1}px`,
//                 height: `${Math.random() * 3 + 1}px`,
//                 backgroundColor:
//                   i % 5 === 0
//                     ? "#fff"
//                     : i % 5 === 1
//                     ? "#a5f3fc"
//                     : i % 5 === 2
//                     ? "#c4b5fd"
//                     : i % 5 === 3
//                     ? "#f9a8d4"
//                     : "#93c5fd",
//                 boxShadow:
//                   i % 5 === 0
//                     ? "0 0 12px 3px rgba(255,255,255,0.8)"
//                     : i % 5 === 1
//                     ? "0 0 12px 3px rgba(165,243,252,0.8)"
//                     : i % 5 === 2
//                     ? "0 0 12px 3px rgba(196,181,253,0.8)"
//                     : i % 5 === 3
//                     ? "0 0 12px 3px rgba(249,168,212,0.8)"
//                     : "0 0 12px 3px rgba(147,197,253,0.8)",
//               }}
//               animate={{
//                 opacity: [0.2, 0.8, 0.2],
//                 scale: [1, 1.5, 1],
//               }}
//               transition={{
//                 duration: 2 + Math.random() * 6,
//                 repeat: Infinity,
//                 delay: Math.random() * 5,
//               }}
//             />
//           ))}
//         </div>

//         {/* 3D elements */}
//         <div className="absolute inset-0 overflow-hidden pointer-events-none">
//           <motion.div
//             className="absolute w-64 h-64 rounded-full bg-blue-500/10 blur-2xl"
//             style={{ top: "20%", left: "15%" }}
//             animate={{
//               scale: [1, 1.2, 1],
//               x: [0, 30, 0],
//               y: [0, -30, 0],
//             }}
//             transition={{
//               duration: 15,
//               repeat: Infinity,
//               ease: "easeInOut",
//             }}
//           />
//           <motion.div
//             className="absolute w-96 h-96 rounded-full bg-purple-500/10 blur-2xl"
//             style={{ top: "40%", right: "10%" }}
//             animate={{
//               scale: [1.2, 1, 1.2],
//               x: [0, -30, 0],
//               y: [0, 30, 0],
//             }}
//             transition={{
//               duration: 20,
//               repeat: Infinity,
//               ease: "easeInOut",
//             }}
//           />
//         </div>

//         {/* Hero Content */}
//         <div className="relative z-10 container mx-auto px-6 md:px-12">
//           <motion.div
//             initial="hidden"
//             animate="visible"
//             variants={{
//               hidden: { opacity: 0 },
//               visible: {
//                 opacity: 1,
//                 transition: {
//                   staggerChildren: 0.2,
//                   delayChildren: 0.3,
//                 },
//               },
//             }}
//             className="flex flex-col items-center"
//           >
//             {/* Badge */}
//             <motion.div variants={fadeInUp} className="mb-8">
//               <motion.div
//                 initial={{ scale: 0, opacity: 0 }}
//                 animate={{ scale: 1, opacity: 1 }}
//                 transition={{
//                   duration: 0.6,
//                   type: "spring",
//                   stiffness: 200,
//                 }}
//                 className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-xl rounded-full border border-blue-500/30 text-blue-300 font-medium text-sm"
//               >
//                 <Badge className="w-4 h-4 mr-2 text-blue-300" />
//                 <span>National Service Scheme</span>
//               </motion.div>
//             </motion.div>

//             {/* Main Title */}
//             <motion.div variants={fadeInUp} className="text-center mb-6">
//               <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
//                 <span className="text-white block mb-2">Not Me</span>
//                 <span className="relative">
//                   <span
//                     className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"
//                     style={{ backgroundSize: "200% 100%" }}
//                   >
//                     But You
//                   </span>
//                   <motion.span
//                     className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
//                     initial={{ width: 0, opacity: 0 }}
//                     animate={{ width: "100%", opacity: 1 }}
//                     transition={{ delay: 1.2, duration: 0.8 }}
//                   />
//                 </span>
//               </h1>
//               <motion.h2
//                 variants={fadeInUp}
//                 className="text-xl md:text-2xl font-medium mt-4 text-gray-300 tracking-wide"
//               >
//                 <span className="text-white">NIT Jamshedpur</span> Chapter
//               </motion.h2>
//             </motion.div>

//             {/* Description */}
//             <motion.p
//               variants={fadeInUp}
//               className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 text-center leading-relaxed"
//             >
//               Empowering students to serve society while developing leadership
//               skills through meaningful community engagement and volunteer
//               opportunities.
//             </motion.p>

//             {/* Animated text */}
//             <motion.div
//               variants={fadeInUp}
//               className="flex justify-center mb-12"
//             >
//               <div className="overflow-hidden h-12">
//                 <motion.div
//                   animate={{ y: [0, -120, -240, -360, 0] }}
//                   transition={{
//                     duration: 10,
//                     repeat: Infinity,
//                     ease: [0.8, 0.0, 0.2, 1.0],
//                     repeatDelay: 1,
//                   }}
//                 >
//                   {[
//                     "passionate volunteers",
//                     "future leaders",
//                     "community builders",
//                     "change makers",
//                   ].map((text, i) => (
//                     <div
//                       key={i}
//                       className="h-12 flex items-center justify-center"
//                     >
//                       <span className="text-xl md:text-2xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-400">
//                         We are {text}
//                       </span>
//                     </div>
//                   ))}
//                 </motion.div>
//               </div>
//             </motion.div>

//             {/* Action buttons with hover effects */}
//             <motion.div
//               variants={fadeInUp}
//               className="flex flex-col sm:flex-row justify-center gap-5 mt-4"
//             >
//               <Link to="/join">
//                 <motion.button
//                   className="group relative px-8 py-4 rounded-full overflow-hidden flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600"
//                   whileHover={{ scale: 1.04 }}
//                   whileTap={{ scale: 0.98 }}
//                 >
//                   <motion.div
//                     className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity"
//                     initial={{ opacity: 0 }}
//                     whileHover={{ opacity: 1 }}
//                   />
//                   <Users className="w-5 h-5 text-white relative z-10" />
//                   <span className="text-white font-medium relative z-10">
//                     Become a Volunteer
//                   </span>
//                 </motion.button>
//               </Link>

//               <Link to="/events">
//                 <motion.button
//                   className="group relative px-8 py-4 rounded-full overflow-hidden flex items-center gap-2 border-2 border-blue-500/30"
//                   whileHover={{ scale: 1.04 }}
//                   whileTap={{ scale: 0.98 }}
//                 >
//                   <motion.div
//                     className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity"
//                     initial={{ opacity: 0 }}
//                     whileHover={{ opacity: 1 }}
//                   />
//                   <Calendar className="w-5 h-5 text-blue-400 relative z-10" />
//                   <span className="text-blue-300 font-medium relative z-10">
//                     Explore Events
//                   </span>
//                 </motion.button>
//               </Link>
//             </motion.div>
//           </motion.div>
//         </div>

//         {/* Scroll indicator */}
//         <motion.div
//           initial={{ opacity: 0, y: 10 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 2, duration: 0.8 }}
//           className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-10 cursor-pointer"
//           onClick={() => {
//             window.scrollTo({
//               top: window.innerHeight,
//               behavior: "smooth",
//             });
//           }}
//         >
//           <motion.div
//             animate={{ y: [0, 10, 0] }}
//             transition={{ repeat: Infinity, duration: 1.5 }}
//             className="flex flex-col items-center"
//           >
//             <span className="text-blue-300 text-sm mb-2 font-medium">
//               Scroll to explore
//             </span>
//             <motion.div
//               className="relative flex items-center justify-center h-12 w-12"
//               animate={{ y: [0, 5, 0] }}
//               transition={{
//                 repeat: Infinity,
//                 duration: 1.5,
//                 ease: "easeInOut",
//               }}
//             >
//               <div className="absolute inset-0 bg-blue-500/20 rounded-full"></div>
//               <ArrowDown className="h-5 w-5 text-blue-400" />
//             </motion.div>
//           </motion.div>
//         </motion.div>

//         {/* Decorative orbiting circles */}
//         <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-30 pointer-events-none">
//           <motion.div
//             className="absolute w-full h-full rounded-full border border-blue-300/30"
//             animate={{ rotate: 360 }}
//             transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
//           />
//           <motion.div
//             className="absolute w-full h-full -top-20 -left-20 rounded-full border border-purple-300/30"
//             animate={{ rotate: -360 }}
//             transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
//           />
//           <motion.div
//             className="absolute w-3/4 h-3/4 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-pink-300/30"
//             animate={{ rotate: 360, scale: [1, 1.2, 1] }}
//             transition={{
//               rotate: { duration: 20, repeat: Infinity, ease: "linear" },
//               scale: { duration: 8, repeat: Infinity, ease: "easeInOut" },
//             }}
//           />
//         </div>
//       </section>

//       {/* Mission Statement with Interactive Cards */}
//       <section className="relative py-24 overflow-hidden">
//         {/* Glowing upper Border */}
//         <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent blur-sm"></div>
//         <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

//         {/* Animated Background Elements */}
//         <div className="absolute inset-0 pointer-events-none overflow-hidden">
//           {/* Gradient circles */}
//           <motion.div
//             className="absolute -top-48 -right-48 w-96 h-96 rounded-full bg-purple-600/20 blur-3xl"
//             animate={{
//               scale: [1, 1.2, 1],
//               opacity: [0.2, 0.15, 0.2],
//             }}
//             transition={{
//               duration: 8,
//               repeat: Infinity,
//               ease: "easeInOut",
//             }}
//           />
//           <motion.div
//             className="absolute -bottom-48 -left-48 w-96 h-96 rounded-full bg-blue-600/20 blur-3xl"
//             animate={{
//               scale: [1.2, 1, 1.2],
//               opacity: [0.15, 0.2, 0.15],
//             }}
//             transition={{
//               duration: 8,
//               repeat: Infinity,
//               ease: "easeInOut",
//             }}
//           />
//         </div>

//         {/* Content */}
//         <div className="relative z-10 container mx-auto px-4 md:px-6">
//           {/* Section Header */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, margin: "-100px" }}
//             transition={{ duration: 0.8 }}
//             className="text-center mb-20"
//           >
//             <motion.div
//               className="inline-block mb-4 px-6 py-2 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 backdrop-blur-sm rounded-full border border-indigo-500/20 text-indigo-300 text-sm font-medium"
//               whileHover={{ scale: 1.05 }}
//             >
//               <motion.span
//                 animate={{ scale: [1, 1.1, 1] }}
//                 transition={{ duration: 2, repeat: Infinity }}
//                 className="inline-flex items-center"
//               >
//                 <Sparkle className="mr-2 h-4 w-4" />
//                 Our Mission & Values
//               </motion.span>
//             </motion.div>

//             <h2 className="text-4xl md:text-6xl font-bold mb-6">
//               <span className="text-white">Empowering </span>
//               <motion.span
//                 className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400"
//                 animate={{
//                   backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
//                 }}
//                 transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
//                 style={{ backgroundSize: "200% auto" }}
//               >
//                 Student Leaders
//               </motion.span>
//             </h2>

//             <motion.div
//               className="w-24 h-1.5 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mb-8 rounded-full"
//               initial={{ width: 0 }}
//               whileInView={{ width: 96 }}
//               viewport={{ once: true }}
//               transition={{ delay: 0.4, duration: 0.8 }}
//             />

//             <p className="text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed">
//               Enabling students to contribute to society and develop a sense of
//               social responsibility through meaningful service opportunities and
//               leadership development.
//             </p>
//           </motion.div>

//           {/* Interactive Cards */}
//           <motion.div
//             className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
//             variants={staggerContainer}
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true, margin: "-100px" }}
//           >
//             {/* Card 1 */}
//             <motion.div variants={cardVariant} className="relative group">
//               <div className="group-hover:shadow-lg group-hover:shadow-blue-900/20 transition-shadow duration-500 rounded-2xl">
//                 <div className="h-full backdrop-blur-sm bg-gradient-to-br from-blue-900/40 to-blue-800/10 border border-blue-500/20 rounded-2xl overflow-hidden">
//                   {/* Card header with hover effect */}
//                   <div className="h-32 relative overflow-hidden">
//                     <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-900"></div>
//                     <motion.div
//                       className="absolute inset-0 bg-[url('/pattern-blue.svg')] bg-center opacity-20"
//                       animate={{ y: [0, -10, 0] }}
//                       transition={{
//                         duration: 6,
//                         repeat: Infinity,
//                         ease: "easeInOut",
//                       }}
//                     />
//                     <div className="absolute inset-0 flex items-center justify-center">
//                       <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center">
//                         <Heart className="w-10 h-10 text-blue-300" />
//                       </div>
//                     </div>
//                   </div>

//                   {/* Card content */}
//                   <div className="p-6">
//                     <h3 className="text-xl font-bold text-white mb-4 text-center">
//                       Community Service
//                     </h3>

//                     <p className="text-gray-300 text-center mb-8">
//                       Engaging in meaningful projects that address community
//                       needs and create lasting positive impact in vulnerable
//                       communities.
//                     </p>

//                     <div className="space-y-3">
//                       <div className="flex items-center p-3 bg-blue-500/10 rounded-lg">
//                         <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center mr-3">
//                           <Heart className="w-4 h-4 text-blue-400" />
//                         </div>
//                         <span className="text-sm text-gray-300">
//                           Blood Donation Camps
//                         </span>
//                       </div>

//                       <div className="flex items-center p-3 bg-blue-500/10 rounded-lg">
//                         <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center mr-3">
//                           <BookOpen className="w-4 h-4 text-blue-400" />
//                         </div>
//                         <span className="text-sm text-gray-300">
//                           Rural Education Initiatives
//                         </span>
//                       </div>

//                       <div className="flex items-center p-3 bg-blue-500/10 rounded-lg">
//                         <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center mr-3">
//                           <Users className="w-4 h-4 text-blue-400" />
//                         </div>
//                         <span className="text-sm text-gray-300">
//                           Health Awareness Programs
//                         </span>
//                       </div>
//                     </div>

//                     <Link
//                       to="/community-service"
//                       className="mt-8 w-full inline-block"
//                     >
//                       <motion.button
//                         className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-600/80 to-blue-700/80 text-white font-medium hover:from-blue-500 hover:to-blue-600 transition-all duration-300 flex items-center justify-center"
//                         whileHover={{ scale: 1.02 }}
//                         whileTap={{ scale: 0.98 }}
//                       >
//                         Learn More <ChevronRight className="ml-2 w-4 h-4" />
//                       </motion.button>
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>

//             {/* Card 2 */}
//             <motion.div variants={cardVariant} className="relative group">
//               <div className="group-hover:shadow-lg group-hover:shadow-purple-900/20 transition-shadow duration-500 rounded-2xl">
//                 <div className="h-full backdrop-blur-sm bg-gradient-to-br from-purple-900/40 to-purple-800/10 border border-purple-500/20 rounded-2xl overflow-hidden">
//                   {/* Card header with hover effect */}
//                   <div className="h-32 relative overflow-hidden">
//                     <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-purple-900"></div>
//                     <motion.div
//                       className="absolute inset-0 bg-[url('/pattern-purple.svg')] bg-center opacity-20"
//                       animate={{ y: [0, -10, 0] }}
//                       transition={{
//                         duration: 6,
//                         repeat: Infinity,
//                         ease: "easeInOut",
//                       }}
//                     />
//                     <div className="absolute inset-0 flex items-center justify-center">
//                       <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center">
//                         <Users className="w-10 h-10 text-purple-300" />
//                       </div>
//                     </div>
//                   </div>

//                   {/* Card content */}
//                   <div className="p-6">
//                     <h3 className="text-xl font-bold text-white mb-4 text-center">
//                       Leadership Development
//                     </h3>

//                     <p className="text-gray-300 text-center mb-8">
//                       Fostering essential leadership skills and personal growth
//                       through workshops, camps, and real-world organizational
//                       experience.
//                     </p>

//                     <div className="space-y-3">
//                       <div className="flex items-center p-3 bg-purple-500/10 rounded-lg">
//                         <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center mr-3">
//                           <Zap className="w-4 h-4 text-purple-400" />
//                         </div>
//                         <span className="text-sm text-gray-300">
//                           Leadership Workshops
//                         </span>
//                       </div>

//                       <div className="flex items-center p-3 bg-purple-500/10 rounded-lg">
//                         <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center mr-3">
//                           <Users className="w-4 h-4 text-purple-400" />
//                         </div>
//                         <span className="text-sm text-gray-300">
//                           Team Building Activities
//                         </span>
//                       </div>

//                       <div className="flex items-center p-3 bg-purple-500/10 rounded-lg">
//                         <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center mr-3">
//                           <MessageSquare className="w-4 h-4 text-purple-400" />
//                         </div>
//                         <span className="text-sm text-gray-300">
//                           Communication Skills Training
//                         </span>
//                       </div>
//                     </div>

//                     <Link to="/leadership" className="mt-8 w-full inline-block">
//                       <motion.button
//                         className="w-full py-3 rounded-lg bg-gradient-to-r from-purple-600/80 to-purple-700/80 text-white font-medium hover:from-purple-500 hover:to-purple-600 transition-all duration-300 flex items-center justify-center"
//                         whileHover={{ scale: 1.02 }}
//                         whileTap={{ scale: 0.98 }}
//                       >
//                         Learn More <ChevronRight className="ml-2 w-4 h-4" />
//                       </motion.button>
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>

//             {/* Card 3 */}
//             <motion.div variants={cardVariant} className="relative group">
//               <div className="group-hover:shadow-lg group-hover:shadow-indigo-900/20 transition-shadow duration-500 rounded-2xl">
//                 <div className="h-full backdrop-blur-sm bg-gradient-to-br from-indigo-900/40 to-indigo-800/10 border border-indigo-500/20 rounded-2xl overflow-hidden">
//                   {/* Card header with hover effect */}
//                   <div className="h-32 relative overflow-hidden">
//                     <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-indigo-900"></div>
//                     <motion.div
//                       className="absolute inset-0 bg-[url('/pattern-indigo.svg')] bg-center opacity-20"
//                       animate={{ y: [0, -10, 0] }}
//                       transition={{
//                         duration: 6,
//                         repeat: Infinity,
//                         ease: "easeInOut",
//                       }}
//                     />
//                     <div className="absolute inset-0 flex items-center justify-center">
//                       <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center">
//                         <Globe className="w-10 h-10 text-indigo-300" />
//                       </div>
//                     </div>
//                   </div>

//                   {/* Card content */}
//                   <div className="p-6">
//                     <h3 className="text-xl font-bold text-white mb-4 text-center">
//                       Environmental Awareness
//                     </h3>

//                     <p className="text-gray-300 text-center mb-8">
//                       Promoting environmental consciousness through conservation
//                       activities, awareness campaigns, and sustainable
//                       practices.
//                     </p>

//                     <div className="space-y-3">
//                       <div className="flex items-center p-3 bg-indigo-500/10 rounded-lg">
//                         <div className="w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center mr-3">
//                           <Globe className="w-4 h-4 text-indigo-400" />
//                         </div>
//                         <span className="text-sm text-gray-300">
//                           Tree Plantation Drives
//                         </span>
//                       </div>

//                       <div className="flex items-center p-3 bg-indigo-500/10 rounded-lg">
//                         <div className="w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center mr-3">
//                           <Sparkle className="w-4 h-4 text-indigo-400" />
//                         </div>
//                         <span className="text-sm text-gray-300">
//                           Cleanliness Campaigns
//                         </span>
//                       </div>

//                       <div className="flex items-center p-3 bg-indigo-500/10 rounded-lg">
//                         <div className="w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center mr-3">
//                           <MessageSquare className="w-4 h-4 text-indigo-400" />
//                         </div>
//                         <span className="text-sm text-gray-300">
//                           Environmental Workshops
//                         </span>
//                       </div>
//                     </div>

//                     <Link
//                       to="/environment"
//                       className="mt-8 w-full inline-block"
//                     >
//                       <motion.button
//                         className="w-full py-3 rounded-lg bg-gradient-to-r from-indigo-600/80 to-indigo-700/80 text-white font-medium hover:from-indigo-500 hover:to-indigo-600 transition-all duration-300 flex items-center justify-center"
//                         whileHover={{ scale: 1.02 }}
//                         whileTap={{ scale: 0.98 }}
//                       >
//                         Learn More <ChevronRight className="ml-2 w-4 h-4" />
//                       </motion.button>
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Impact Counter Section */}
//       <section className="relative py-24 bg-gradient-to-b from-gray-950 to-gray-900">
//         <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

//         {/* Animated background elements */}
//         <motion.div
//           className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"
//           animate={{ opacity: [0.3, 0.6, 0.3] }}
//           transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
//         />
//         <div className="absolute inset-0 overflow-hidden pointer-events-none">
//           <motion.div
//             className="absolute -top-40 left-1/4 w-80 h-80 rounded-full bg-blue-500/10 blur-3xl"
//             animate={{ y: [0, 30, 0], opacity: [0.3, 0.2, 0.3] }}
//             transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
//           />
//           <motion.div
//             className="absolute -bottom-40 right-1/4 w-80 h-80 rounded-full bg-purple-500/10 blur-3xl"
//             animate={{ y: [0, -30, 0], opacity: [0.3, 0.2, 0.3] }}
//             transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
//           />
//         </div>

//         {/* Content */}
//         <div className="container mx-auto px-4 relative z-10">
//           <motion.div
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             viewport={{ once: true, margin: "-100px" }}
//             transition={{ duration: 0.8 }}
//             className="grid grid-cols-1 md:grid-cols-3 gap-12"
//           >
//             {/* Counter 1 */}
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, margin: "-100px" }}
//               transition={{ duration: 0.8, delay: 0.1 }}
//               className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-8 text-center"
//             >
//               <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-full mx-auto mb-6">
//                 <Calendar className="w-8 h-8 text-blue-400" />
//               </div>
//               <motion.h3
//                 className="text-5xl font-bold text-white mb-2"
//                 initial={{ opacity: 0, scale: 0.5 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.8, delay: 0.5 }}
//               >
//                 {counters.events}+
//               </motion.h3>
//               <p className="text-blue-300 text-lg font-medium">
//                 Events Organized
//               </p>
//               <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-blue-300 mx-auto mt-4 rounded-full"></div>
//             </motion.div>

//             {/* Counter 2 */}
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, margin: "-100px" }}
//               transition={{ duration: 0.8, delay: 0.3 }}
//               className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-8 text-center"
//             >
//               <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-full mx-auto mb-6">
//                 <Users className="w-8 h-8 text-purple-400" />
//               </div>
//               <motion.h3
//                 className="text-5xl font-bold text-white mb-2"
//                 initial={{ opacity: 0, scale: 0.5 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.8, delay: 0.7 }}
//               >
//                 {counters.volunteers}+
//               </motion.h3>
//               <p className="text-purple-300 text-lg font-medium">
//                 Active Volunteers
//               </p>
//               <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-purple-300 mx-auto mt-4 rounded-full"></div>
//             </motion.div>

//             {/* Counter 3 */}
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, margin: "-100px" }}
//               transition={{ duration: 0.8, delay: 0.5 }}
//               className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-8 text-center"
//             >
//               <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-pink-500/20 to-pink-600/20 rounded-full mx-auto mb-6">
//                 <Heart className="w-8 h-8 text-pink-400" />
//               </div>
//               <motion.h3
//                 className="text-5xl font-bold text-white mb-2"
//                 initial={{ opacity: 0, scale: 0.5 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.8, delay: 0.9 }}
//               >
//                 {counters.lives.toLocaleString()}+
//               </motion.h3>
//               <p className="text-pink-300 text-lg font-medium">
//                 Lives Impacted
//               </p>
//               <div className="w-16 h-1 bg-gradient-to-r from-pink-500 to-pink-300 mx-auto mt-4 rounded-full"></div>
//             </motion.div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Upcoming Events Section */}
//       <section className="relative py-24 bg-gray-900">
//         <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

//         {/* Content */}
//         <div className="container mx-auto px-4 relative z-10">
//           {/* Section header */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, margin: "-100px" }}
//             transition={{ duration: 0.8 }}
//             className="text-center mb-16"
//           >
//             <div className="inline-block mb-4 px-6 py-2 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 backdrop-blur-sm rounded-full border border-emerald-500/20 text-emerald-300 text-sm font-medium">
//               <Calendar className="inline-block mr-2 h-4 w-4" />
//               Mark Your Calendar
//             </div>

//             <h2 className="text-4xl md:text-5xl font-bold mb-6">
//               <span className="text-white">Upcoming </span>
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400">
//                 Events
//               </span>
//             </h2>

//             <div className="w-24 h-1.5 bg-gradient-to-r from-emerald-500 to-blue-500 mx-auto mb-8 rounded-full" />

//             <p className="text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed">
//               Join us for these exciting upcoming events and be a part of our
//               mission to serve the community while developing your leadership
//               skills.
//             </p>
//           </motion.div>

//           {/* Event filter buttons */}
//           <div className="flex justify-center flex-wrap gap-3 mb-12">
//             {eventCategories.map((category, index) => (
//               <motion.button
//                 key={index}
//                 onClick={() => setActiveEventCategory(category)}
//                 className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
//                   activeEventCategory === category
//                     ? "bg-gradient-to-r from-emerald-500 to-blue-500 text-white shadow-lg shadow-emerald-900/30"
//                     : "bg-white/5 text-gray-300 hover:bg-white/10"
//                 }`}
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 {category}
//               </motion.button>
//             ))}
//           </div>

//           {/* Events grid */}
//           <motion.div
//             className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
//             variants={staggerContainer}
//             initial="hidden"
//             whileInView="show"
//             viewport={{ once: true, margin: "-100px" }}
//           >
//             {events
//               .filter(
//                 (event) =>
//                   activeEventCategory === "All" ||
//                   event.category === activeEventCategory
//               )
//               .map((event) => (
//                 <motion.div
//                   key={event.id}
//                   variants={cardVariant}
//                   className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl overflow-hidden group"
//                   whileHover={{ y: -5, transition: { duration: 0.3 } }}
//                 >
//                   <div className={`h-2 bg-${event.color}-500`}></div>
//                   <div className="p-6">
//                     <div className="flex justify-between items-start mb-4">
//                       <div className="flex-shrink-0">{event.icon}</div>
//                       <span
//                         className={`text-xs font-medium px-3 py-1 rounded-full bg-${event.color}-500/10 text-${event.color}-300`}
//                       >
//                         {event.category}
//                       </span>
//                     </div>

//                     <h3 className="text-xl font-bold text-white mb-2">
//                       {event.title}
//                     </h3>
//                     <p className="text-gray-400 mb-4 text-sm">
//                       {event.description}
//                     </p>

//                     <div className="border-t border-white/10 pt-4 mt-4 space-y-2">
//                       <div className="flex items-center text-sm text-gray-300">
//                         <Calendar className="w-4 h-4 mr-2 text-gray-400" />
//                         {event.date}
//                       </div>
//                       <div className="flex items-center text-sm text-gray-300">
//                         <MapPin className="w-4 h-4 mr-2 text-gray-400" />
//                         {event.location}
//                       </div>
//                       <div className="flex items-center text-sm text-gray-300">
//                         <Users className="w-4 h-4 mr-2 text-gray-400" />
//                         {event.participants} participants expected
//                       </div>
//                     </div>

//                     <Link to={`/events/${event.id}`} className="mt-6 block">
//                       <motion.button
//                         className={`w-full py-2.5 rounded-lg text-white font-medium flex items-center justify-center bg-${event.color}-500/20 hover:bg-${event.color}-500/30 border border-${event.color}-500/30 transition-all duration-300`}
//                         whileHover={{ scale: 1.02 }}
//                         whileTap={{ scale: 0.98 }}
//                       >
//                         View Details <ChevronRight className="ml-2 w-4 h-4" />
//                       </motion.button>
//                     </Link>
//                   </div>
//                 </motion.div>
//               ))}
//           </motion.div>

//           <div className="text-center mt-12">
//             <Link to="/events">
//               <motion.button
//                 className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-emerald-600 to-blue-600 text-white font-medium hover:from-emerald-500 hover:to-blue-500 transition-all duration-300"
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 View All Events <ChevronRight className="ml-2 w-5 h-5" />
//               </motion.button>
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* Testimonials Carousel Section */}
//       <section className="relative py-24 bg-gradient-to-b from-gray-900 to-gray-950">
//         <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

//         {/* Animated background elements */}
//         <div className="absolute inset-0 overflow-hidden pointer-events-none">
//           <motion.div
//             className="absolute top-1/4 -right-40 w-80 h-80 rounded-full bg-purple-500/10 blur-3xl"
//             animate={{ y: [0, 30, 0], opacity: [0.3, 0.2, 0.3] }}
//             transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
//           />
//           <motion.div
//             className="absolute bottom-1/4 -left-40 w-80 h-80 rounded-full bg-blue-500/10 blur-3xl"
//             animate={{ y: [0, -30, 0], opacity: [0.3, 0.2, 0.3] }}
//             transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
//           />
//         </div>

//         {/* Content */}
//         <div className="container mx-auto px-4 relative z-10">
//           {/* Section header */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, margin: "-100px" }}
//             transition={{ duration: 0.8 }}
//             className="text-center mb-16"
//           >
//             <div className="inline-block mb-4 px-6 py-2 bg-gradient-to-r from-pink-500/10 to-purple-500/10 backdrop-blur-sm rounded-full border border-pink-500/20 text-pink-300 text-sm font-medium">
//               <Star className="inline-block mr-2 h-4 w-4" />
//               Volunteer Experiences
//             </div>

//             <h2 className="text-4xl md:text-5xl font-bold mb-6">
//               <span className="text-white">What Our </span>
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
//                 Volunteers Say
//               </span>
//             </h2>

//             <div className="w-24 h-1.5 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto mb-8 rounded-full" />
//           </motion.div>

//           {/* Testimonials carousel */}
//           <div className="max-w-4xl mx-auto">
//             <div className="relative">
//               <AnimatePresence mode="wait">
//                 <motion.div
//                   key={currentTestimonial}
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: -20 }}
//                   transition={{ duration: 0.5 }}
//                   className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-8 md:p-10"
//                 >
//                   <div className="absolute top-8 left-8 opacity-20">
//                     <FaQuoteLeft className="w-10 h-10 text-purple-300" />
//                   </div>

//                   <div className="text-center px-4 md:px-12">
//                     <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8">
//                       {testimonials[currentTestimonial].content}
//                     </p>

//                     <div className="flex items-center justify-center">
//                       <img
//                         src={testimonials[currentTestimonial].image}
//                         alt={testimonials[currentTestimonial].name}
//                         className="w-16 h-16 rounded-full border-2 border-purple-500 object-cover"
//                       />
//                       <div className="ml-4 text-left">
//                         <h4 className="text-white font-bold">
//                           {testimonials[currentTestimonial].name}
//                         </h4>
//                         <p className="text-purple-300 text-sm">
//                           {testimonials[currentTestimonial].position}
//                         </p>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="absolute bottom-8 right-8 opacity-20">
//                     <FaQuoteRight className="w-10 h-10 text-purple-300" />
//                   </div>
//                 </motion.div>
//               </AnimatePresence>

//               {/* Navigation buttons */}
//               <div className="flex justify-between absolute top-1/2 -translate-y-1/2 w-full left-0 px-4">
//                 <motion.button
//                   className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white border border-white/20"
//                   whileHover={{
//                     scale: 1.1,
//                     backgroundColor: "rgba(255,255,255,0.2)",
//                   }}
//                   whileTap={{ scale: 0.9 }}
//                   onClick={() =>
//                     setCurrentTestimonial(
//                       (currentTestimonial - 1 + testimonials.length) %
//                         testimonials.length
//                     )
//                   }
//                 >
//                   <FaChevronLeft className="w-4 h-4" />
//                 </motion.button>

//                 <motion.button
//                   className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white border border-white/20"
//                   whileHover={{
//                     scale: 1.1,
//                     backgroundColor: "rgba(255,255,255,0.2)",
//                   }}
//                   whileTap={{ scale: 0.9 }}
//                   onClick={() =>
//                     setCurrentTestimonial(
//                       (currentTestimonial + 1) % testimonials.length
//                     )
//                   }
//                 >
//                   <FaChevronRight className="w-4 h-4" />
//                 </motion.button>
//               </div>
//             </div>

//             {/* Dots indicator */}
//             <div className="flex justify-center mt-8 space-x-2">
//               {testimonials.map((_, index) => (
//                 <button
//                   key={index}
//                   onClick={() => setCurrentTestimonial(index)}
//                   className={`w-3 h-3 rounded-full transition-all duration-300 ${
//                     currentTestimonial === index
//                       ? "bg-gradient-to-r from-pink-500 to-purple-500 w-6"
//                       : "bg-white/20 hover:bg-white/40"
//                   }`}
//                 />
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Call to Action */}
//       <section className="relative py-24 bg-gray-950">
//         <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

//         {/* Content */}
//         <div className="container mx-auto px-4 relative z-10">
//           <motion.div
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             viewport={{ once: true, margin: "-100px" }}
//             transition={{ duration: 0.8 }}
//             className="max-w-5xl mx-auto backdrop-blur-sm bg-gradient-to-r from-blue-900/40 to-purple-900/40 border border-white/10 rounded-2xl p-8 md:p-12"
//           >
//             <div className="text-center mb-12">
//               <motion.h2
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.8, delay: 0.2 }}
//                 className="text-3xl md:text-5xl font-bold mb-6"
//               >
//                 <span className="text-white">Ready to </span>
//                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
//                   Make a Difference?
//                 </span>
//               </motion.h2>

//               <motion.p
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.8, delay: 0.4 }}
//                 className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-8"
//               >
//                 Join our community of passionate volunteers and be part of
//                 something bigger. Together, we can create meaningful impact and
//                 develop essential leadership skills.
//               </motion.p>

//               <motion.div
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.8, delay: 0.6 }}
//                 className="flex flex-col sm:flex-row justify-center gap-5"
//               >
//                 <Link to="/join">
//                   <motion.button
//                     className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium flex items-center justify-center"
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                   >
//                     <Users className="w-5 h-5 mr-2" />
//                     Become a Volunteer
//                   </motion.button>
//                 </Link>

//                 <Link to="/contact">
//                   <motion.button
//                     className="px-8 py-4 rounded-full bg-white/10 backdrop-blur-sm text-white font-medium flex items-center justify-center border border-white/20"
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                   >
//                     <MessageSquare className="w-5 h-5 mr-2" />
//                     Contact Us
//                   </motion.button>
//                 </Link>
//               </motion.div>
//             </div>
//           </motion.div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Home;
