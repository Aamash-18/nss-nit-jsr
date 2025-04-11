
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaArrowLeft,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaHeart,
  FaShare,
  FaImages,
  FaDownload,
  FaExpand,
  FaChevronLeft,
  FaChevronRight,
  FaTimes,
  FaInfoCircle
} from "react-icons/fa";
import { galleryEventsDetailed } from "../utils/data";

const EventGallery = () => {
  const { eventId } = useParams();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);

  // Mock events database - in a real application this would come from an API

  useEffect(() => {
    // Simulate loading data from API
    const fetchEventData = () => {
      setLoading(true);
      
      // Short timeout to simulate API call
      setTimeout(() => {
        const eventData = galleryEventsDetailed[eventId];
        
        if (eventData) {
          setEvent(eventData);
        } else {
          // Handle case when event is not found
          navigate("/gallery", { replace: true });
        }
        
        setLoading(false);
        setIsLoaded(true);
      }, 800);
    };

    fetchEventData();
  }, [eventId, navigate]);

  // Open lightbox modal
  const openLightbox = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = "hidden";
  };

  // Close lightbox modal
  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto";
  };

  // Navigate to next/previous image in lightbox
  const navigateImage = (direction) => {
    if (!event || !selectedImage) return;
    
    const currentIndex = event.images.findIndex(img => img.id === selectedImage.id);
    if (currentIndex === -1) return;
    
    let newIndex;
    if (direction === "next") {
      newIndex = (currentIndex + 1) % event.images.length;
    } else {
      newIndex = (currentIndex - 1 + event.images.length) % event.images.length;
    }
    
    setSelectedImage(event.images[newIndex]);
  };

  // Handle keyboard navigation in lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedImage) return;
      
      if (e.key === "Escape") {
        closeLightbox();
      } else if (e.key === "ArrowRight") {
        navigateImage("next");
      } else if (e.key === "ArrowLeft") {
        navigateImage("prev");
      }
    };
    
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage, event]);

  // Loading animation
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
        <div className="text-center">
          <div className="relative w-20 h-20 mx-auto mb-6">
            <div className="absolute top-0 left-0 w-full h-full rounded-full border-4 border-cyan-900 animate-ping opacity-75"></div>
            <div className="absolute top-0 left-0 w-full h-full rounded-full border-4 border-r-transparent border-cyan-400 animate-spin"></div>
          </div>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-cyan-300 font-medium text-lg"
          >
            Loading Memories...
          </motion.p>
        </div>
      </div>
    );
  }

  // Error state - Event Not Found
  if (!event) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-md p-10 bg-gray-800 rounded-2xl shadow-2xl shadow-violet-900/20"
        >
          <div className="w-24 h-24 bg-rose-900/30 rounded-full flex items-center justify-center mx-auto mb-8">
            <FaInfoCircle className="text-rose-400 text-4xl" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">Event Not Found</h2>
          <p className="text-gray-300 mb-8">The event you're looking for doesn't exist or has been removed.</p>
          <motion.button 
            onClick={() => navigate("/gallery")}
            className="px-6 py-3 bg-gradient-to-r from-rose-600 to-violet-600 text-white rounded-xl hover:shadow-lg hover:shadow-violet-700/30 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="flex items-center gap-2">
              <FaArrowLeft size={16} />
              Back to Gallery
            </span>
          </motion.button>
        </motion.div>
      </div>
    );
  }

  // Category color mapping
  const getCategoryColor = (category) => {
    const colors = {
      "events": "from-violet-600 to-violet-800",
      "environment": "from-green-600 to-emerald-800",
      "sports": "from-cyan-600 to-blue-800",
      "academic": "from-amber-600 to-orange-800",
      "cultural": "from-rose-600 to-pink-800"
    };
    
    return colors[category] || "from-violet-600 to-violet-800";
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Event Header - Parallax Hero */}
      <motion.div 
        className="relative h-screen max-h-[400px] overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Hero Background with Parallax */}
        <div className="absolute inset-0">
          <motion.div 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.2 }}
            className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-gray-900/60 z-10"
          ></motion.div>
          <motion.img 
            src={event.images[0].src} 
            alt={event.title}
            className="w-full h-full object-cover"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1.05 }}
            transition={{ duration: 1.2 }}
          />
        </div>
        
        {/* Navigation Bar */}
        <div className="absolute top-0 left-0 right-0 z-20 px-6 py-8">
          <div className="container mx-auto">
            <motion.button
              onClick={() => navigate("/gallery")}
              className="flex items-center gap-2 text-white backdrop-blur-md bg-white/10 rounded-xl px-5 py-3 border border-white/10 hover:bg-white/20 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <FaArrowLeft size={16} />
              <span>Back to Gallery</span>
            </motion.button>
          </div>
        </div>
        
        {/* Event Title Overlay */}
        <div className="absolute bottom-0 left-0 right-0 z-20 px-6 py-16">
          <div className="container mx-auto">
            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <span className={`inline-block px-4 py-2 bg-gradient-to-r ${getCategoryColor(event.category)} text-white text-sm font-medium rounded-xl mb-6`}>
                  {event.category.charAt(0).toUpperCase() + event.category.slice(1)}
                </span>
              </motion.div>
              
              <motion.h1 
                className="text-5xl sm:text-6xl font-bold text-white mb-6 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                {event.title}
              </motion.h1>
              
              <motion.div 
                className="flex flex-wrap gap-8 text-white/90"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-white/10 backdrop-blur-md rounded-lg">
                    <FaCalendarAlt size={18} className="text-cyan-300" />
                  </div>
                  <span className="text-lg">{event.date}</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-white/10 backdrop-blur-md rounded-lg">
                    <FaMapMarkerAlt size={18} className="text-rose-300" />
                  </div>
                  <span className="text-lg">{event.location}</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-white/10 backdrop-blur-md rounded-lg">
                    <FaImages size={18} className="text-violet-300" />
                  </div>
                  <span className="text-lg">{event.images.length} Photos</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
      
      {/* Event Description */}
      <div className="container mx-auto px-6 -mt-5 relative z-30">
        <motion.div 
          className="backdrop-blur-xl bg-gray-800/80 border border-white/5 rounded-2xl shadow-2xl shadow-violet-900/10 p-8 mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
            <span className="inline-block mr-3 h-8 w-1 bg-gradient-to-b from-cyan-400 to-violet-500 rounded-full"></span>
            About This Event
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">{event.description}</p>
          
          <div className="flex gap-4 mt-8">
            <motion.button
              className="flex items-center gap-2 px-5 py-3 bg-violet-500/20 hover:bg-violet-500/30 text-violet-300 rounded-xl transition-all border border-violet-500/30"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaHeart size={16} />
              <span>Favorite</span>
            </motion.button>
            
            <motion.button
              className="flex items-center gap-2 px-5 py-3 bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 rounded-xl transition-all border border-cyan-500/30"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaShare size={16} />
              <span>Share</span>
            </motion.button>
          </div>
        </motion.div>
        
        {/* Gallery Header */}
        <motion.div 
          className="flex items-center mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <div className="text-3xl font-bold text-white flex items-center gap-3">
            <div className="p-3 bg-gradient-to-br from-violet-500 to-cyan-500 rounded-xl">
              <FaImages size={24} className="text-white" />
            </div>
            <span>Captured Moments</span>
          </div>
        </motion.div>
        
        {/* Modern Gallery Layout */}
        <div className="py-4">
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          >
            {event.images.map((image, index) => (
              <motion.div
                key={image.id}
                onClick={() => openLightbox(image)}
                className="relative group overflow-hidden rounded-2xl shadow-lg border border-white/5 aspect-[4/3] cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + (index * 0.1), duration: 0.5 }}
                whileHover={{ 
                  y: -5, 
                  boxShadow: "0 20px 25px -5px rgba(139, 92, 246, 0.1), 0 10px 10px -5px rgba(139, 92, 246, 0.04)" 
                }}
              >
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                
                {/* Overlay with animation */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 mb-3 inline-block">
                      <FaExpand size={16} className="text-white" />
                    </div>
                    <p className="text-white font-medium">{image.alt}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
      
      {/* Enhanced Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-6"
            onClick={closeLightbox}
          >
            {/* Close button with animation */}
            <motion.button 
              className="absolute top-6 right-6 z-60 p-3 bg-white/10 backdrop-blur-lg rounded-full text-white border border-white/20 hover:bg-white/20 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Close lightbox"
              onClick={closeLightbox}
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              transition={{ delay: 0.3 }}
            >
              <FaTimes size={20} />
            </motion.button>
            
            {/* Image container with animations */}
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative max-w-6xl w-full max-h-[80vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={selectedImage.src} 
                alt={selectedImage.alt}
                className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
              />
              
              {/* Navigation arrows with hover effects */}
              <motion.button 
                className="absolute left-4 p-4 bg-gradient-to-r from-violet-600 to-violet-700 backdrop-blur-md rounded-full text-white border border-white/10 hover:shadow-lg hover:shadow-violet-600/50 transition-all"
                whileHover={{ scale: 1.1, x: -5 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                onClick={(e) => {
                  e.stopPropagation();
                  navigateImage("prev");
                }}
              >
                <FaChevronLeft size={24} />
              </motion.button>
              
              <motion.button 
                className="absolute right-4 p-4 bg-gradient-to-r from-violet-700 to-violet-600 backdrop-blur-md rounded-full text-white border border-white/10 hover:shadow-lg hover:shadow-violet-600/50 transition-all"
                whileHover={{ scale: 1.1, x: 5 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                onClick={(e) => {
                  e.stopPropagation();
                  navigateImage("next");
                }}
              >
                <FaChevronRight size={24} />
              </motion.button>
            </motion.div>
            
            {/* Enhanced image info panel with animation */}
            <motion.div 
              className="absolute bottom-0 left-0 right-0 backdrop-blur-xl bg-gray-900/70 border-t border-white/10 text-white py-6 px-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
                <div>
                  <h3 className="text-xl font-bold mb-1">{selectedImage.alt}</h3>
                  <p className="text-cyan-300">
                    Photo {event.images.findIndex(img => img.id === selectedImage.id) + 1} of {event.images.length} • {event.title}
                  </p>
                </div>
                
                <div className="flex gap-4">
                  <motion.button 
                    className="flex items-center gap-2 px-4 py-2 bg-rose-500/20 hover:bg-rose-500/30 text-rose-300 rounded-xl transition-all border border-rose-500/30"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaHeart size={16} />
                    <span>Like</span>
                  </motion.button>
                  
                  <motion.button 
                    className="flex items-center gap-2 px-4 py-2 bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 rounded-xl transition-all border border-cyan-500/30"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaShare size={16} />
                    <span>Share</span>
                  </motion.button>
                  
                  <motion.button 
                    className="flex items-center gap-2 px-4 py-2 bg-violet-500/20 hover:bg-violet-500/30 text-violet-300 rounded-xl transition-all border border-violet-500/30"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaDownload size={16} />
                    <span>Save</span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default EventGallery;