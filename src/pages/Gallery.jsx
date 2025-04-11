
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  FaCamera,
  FaImages,
  FaCameraRetro,
  FaInfoCircle,
  FaArrowRight,
  FaHeart,
  FaExpand,
  FaArrowLeft,
  FaPause,
  FaImage,
  FaVideo,
  FaBookmark,
  FaShare,
} from "react-icons/fa";

import { Layers, Calendar, Leaf, BookOpen, Heart } from 'lucide-react';
import { BsImages } from "react-icons/bs";
import CreativeGalleryHero from "../components/CreativeGalleryHero";
import { galleryEvents } from "../utils/data";

const Gallery = () => {
  const [filter, setFilter] = useState("all");
  const navigate = useNavigate();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Set loaded state after initial render to enable animations
    setIsLoaded(true);
  }, []);

  const categories = [
    { id: "all", label: "All Categories", icon: <Layers size={20} /> },
    { id: "events", label: "Events", icon: <Calendar size={20} /> },
    { id: "environment", label: "Environment", icon: <Leaf size={20} /> },
    { id: "education", label: "Education", icon: <BookOpen size={20} /> },
    { id: "health", label: "Health", icon: <Heart size={20} /> },
  ];
  
  // Filter events based on selected category
  const filteredEvents =
    filter === "all"
      ? galleryEvents
      : galleryEvents.filter((event) => event.category === filter);

  // Navigate to event detail page
  const openEventGallery = (eventId) => {
    navigate(`/gallery/${eventId}`);
  };

  // Get featured events

  return (
    <div>
      {/* Hero Section - Kept as is */}
      <section className="relative min-h-screen overflow-hidden">
        {/* Background with 3D layers */}
        <div className="absolute inset-0 bg-black z-0">
          {/* Star field background */}
          <div className="absolute inset-0 bg-[url('/stars-bg.png')] opacity-60"></div>

          {/* Animated photography backdrop */}
          <motion.div
            className="absolute inset-0 bg-[url('/camera-lens-blur.png')] bg-center bg-cover opacity-30"
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 2, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Glowing overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/40 via-purple-900/40 to-rose-900/40"></div>

          {/* Animated aurora effect */}
          <motion.div
            className="absolute inset-x-0 top-0 h-32 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-rose-500/20 blur-3xl"
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
                  i % 3 === 0 ? "#fff" : i % 3 === 1 ? "#a5b4fc" : "#c4b5fd",
                boxShadow:
                  i % 3 === 0
                    ? "0 0 10px 2px rgba(255,255,255,0.8)"
                    : i % 3 === 1
                    ? "0 0 10px 2px rgba(165,180,252,0.8)"
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
          {[FaCamera, BsImages, FaCameraRetro].map((Icon, i) => (
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

        {/* Hero Content Container */}
        <div className="container mx-auto px-4 relative z-10 min-h-screen flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 md:gap-96 items-center md:px-24">
            {/* Text Content - Left side */}
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
              className="text-left"
            >
              {/* Badge */}
              <div className="flex justify-start mb-6">
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="inline-flex items-center p-2 bg-white/10 backdrop-blur-xl rounded-full text-indigo-300 font-medium text-sm border border-indigo-500/40"
                >
                  <span className="mr-2 text-indigo-300">
                    <FaCamera size={16} />
                  </span>
                  <span className="text-white text-sm font-medium">
                    Photography Collection
                  </span>
                </motion.div>
              </div>

              {/* Main Title with icon */}
              <div className="flex flex-col md:flex-row items-start md:items-center md:space-x-4 mb-6">
                <div>
                  <motion.h1
                    className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400"
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
                    <span className="block">Moments</span>
                    <span className="block">Captured in Time</span>
                  </motion.h1>
                </div>
              </div>

              {/* Description */}
              <motion.p
                className="text-gray-300 text-lg max-w-lg mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                Explore our curated collection of visual stories, capturing
                impactful moments and transformative experiences throughout our
                journey.
              </motion.p>

              {/* Action buttons with hover effects */}
              <motion.div
                className="flex flex-wrap gap-4 mt-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                <motion.button
                  className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full text-white font-semibold flex items-center justify-center gap-2 group"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 15px rgba(99,102,241,0.7)",
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <BsImages className="w-5 h-5 group-hover:animate-bounce" />
                  Browse Gallery
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <FaArrowRight size={14} />
                  </motion.div>
                </motion.button>

                <motion.button
                  className="px-8 py-3 bg-transparent border border-white/20 hover:bg-white/10 rounded-full text-white font-semibold flex items-center justify-center gap-2 group"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 15px rgba(255,255,255,0.3)",
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FaInfoCircle className="w-5 h-5 group-hover:animate-pulse" />
                  Learn More
                </motion.button>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="flex gap-10 mt-12"
              >
                {[
                  { value: "500+", label: "Photos" },
                  { value: "50+", label: "Events" },
                  { value: "10K+", label: "Moments" },
                ].map((stat, index) => (
                  <div key={index} className="flex flex-col">
                    <span className="text-3xl font-bold text-white">
                      {stat.value}
                    </span>
                    <span className="text-sm text-gray-400">{stat.label}</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Gallery Preview - Right side */}
            <CreativeGalleryHero />
          </div>
        </div>

        {/* Decorative orbiting circles */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] opacity-20 pointer-events-none">
          <motion.div
            className="absolute w-full h-full rounded-full border border-indigo-300"
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute w-[110%] h-[110%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-purple-300"
            animate={{ rotate: -360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute w-[100%] h-[100%] -bottom-1/2 -left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-indigo-300"
            animate={{ rotate: -360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          />
        </div>
      </section>

      {/* Enhanced Gallery Section */}
      <section className="py-20 relative bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-indigo-950 dark:to-purple-950 overflow-hidden">
        {/* Premium Modern Background Effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Soft gradient base */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800"></div>

          {/* Noise texture overlay for depth */}
          <div
            className="absolute inset-0 opacity-30 dark:opacity-40"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
              backgroundSize: "cover",
              mixBlendMode: "soft-light",
            }}
          ></div>

        
          {/* Subtle animated accents */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-70"></div>
          {/* Light beams */}
          <div className="absolute top-40 left-[10%] w-40 h-80 bg-gradient-to-t from-blue-500/10 to-transparent transform -rotate-45 dark:from-blue-400/20"></div>
          <div className="absolute -bottom-20 right-1/4 w-40 h-80 bg-gradient-to-t from-purple-500/30 to-transparent transform -rotate-45 dark:from-purple-400/20"></div>

        
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-block px-4 py-2 bg-indigo-100 dark:bg-indigo-900/50 rounded-full text-indigo-600 dark:text-indigo-300 text-sm font-medium mb-4"
            >
              Browse Our Collection
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl font-bold mb-4 text-gray-900 dark:text-white"
            >
              Explore Event Galleries
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "120px" }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mb-6 rounded-full"
            ></motion.div>
          </div>

          {/* Enhanced Filter Tabs */}
          <div className="flex justify-center mb-16">
      <div 
        className="inline-flex bg-gradient-to-b from-white/90 to-white/70 dark:from-gray-800/90 dark:to-gray-900/70 backdrop-blur-md rounded-2xl p-2 shadow-xl border border-gray-200/50 dark:border-gray-700/50"
      >
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setFilter(category.id)}
            className={`flex items-center transition-all duration-300 rounded-xl
              ${filter === category.id 
                ? "bg-gradient-to-r from-indigo-700 to-purple-800 text-white shadow-md" 
                : "text-gray-800 dark:text-gray-200 hover:bg-gray-200/70 dark:hover:bg-gray-700/70"
              }
              md:px-5 md:py-3 px-3 py-2`}
          >
            <span className="flex items-center justify-center">
              {category.icon}
            </span>
            <span className="hidden md:inline-block md:ml-2">
              {category.label}
            </span>
          </button>
        ))}
      </div>
    </div>

          {/* Enhanced Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:px-20">
            {filteredEvents.map((event, idx) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: idx * 0.1 }}
                className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500"
              >
                {/* Image container with hover overlay */}
                <div className="h-80 overflow-hidden relative">
                  {/* Image */}
                  <img
                    src={event.thumbnailSrc}
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Photo count badge */}
                  <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm rounded-full px-3 py-1 text-white text-xs font-medium flex items-center gap-1.5 z-10">
                    <FaImages size={12} />
                    <span>{event.imageCount} Photos</span>
                  </div>

                  {/* Category badge */}
                  <div className="absolute top-4 left-4 bg-indigo-600/90 backdrop-blur-sm rounded-full px-3 py-1 text-white text-xs font-medium z-10">
                    {event.category.charAt(0).toUpperCase() +
                      event.category.slice(1)}
                  </div>

                  {/* Overlay content that slides up on hover */}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/70 to-black/30 backdrop-blur-sm p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out flex flex-col h-full justify-end">
                    {/* Title */}
                    <h3 className="text-xl font-bold text-white mb-2 transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                      {event.title}
                    </h3>

                    {/* Date */}
                    <div className="flex items-center text-gray-300 text-sm mb-3 transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-150">
                      <svg
                        className="w-4 h-4 mr-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      {event.date}
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 text-sm mb-4 line-clamp-2 transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-200">
                      {event.description}
                    </p>

                    {/* Button */}
                    <button
                      className="bg-white/20 hover:bg-gray-800/30 hover:text-white backdrop-blur-md border border-white/40 text-white rounded-full px-6 py-2 text-sm font-medium w-fit flex items-center justify-center gap-2 transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-300"
                      onClick={() => openEventGallery(event.eventId)}
                    >
                      <FaExpand size={12} />
                      View Gallery
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          {/* No Images Message - Updated Style */}
          {filteredEvents.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center py-20 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md rounded-2xl shadow-xl border border-gray-200/50 dark:border-gray-800/50 max-w-3xl mx-auto"
            >
              <div className="w-20 h-20 mx-auto mb-6 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center">
                <svg
                  className="w-10 h-10 text-indigo-500 dark:text-indigo-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                No events found
              </h3>
              <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mx-auto mb-6"></div>
              <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto mb-8">
                There are no events in the {filter} category to display at the
                moment. Please check back later or explore other categories.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFilter("all")}
                className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full shadow-md font-medium inline-flex items-center gap-2"
              >
                <FaArrowLeft size={14} />
                View All Categories
              </motion.button>
            </motion.div>
          )}
        </div>
      </section>

      
    </div>
  );
};

export default Gallery;
