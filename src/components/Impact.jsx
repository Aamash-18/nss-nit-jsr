import React, { useState,useEffect} from 'react';
import CountUp from 'react-countup';
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




export default function Impact() {

     const [counters, setCounters] = useState({
        events: 0,
        volunteers: 0,
        lives: 0
      });
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
      
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
    return (
        <>
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
       </>
    );
}



// function StatBox({ number, label, suffix }) {
//     return (
//         <div className="bg-teal-900 hover:bg-teal-800 transition-colors p-6 rounded-xl shadow-lg">
//             <h3 className="text-4xl font-bold text-white mb-1">
//                 <CountUp end={number} duration={2} suffix={suffix || '+'} />
//             </h3>
//             <p className="text-blue-300 text-sm tracking-wide">{label}</p>
//         </div>
//     );
// }
