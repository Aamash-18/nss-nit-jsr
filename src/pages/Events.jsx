import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {events} from "../utils/data";

import {
  FaCalendarAlt,
  FaRocket,
  FaStar,
  FaMapMarkerAlt,
  FaHandsHelping,
  FaFilter,
  FaHandHoldingHeart,
} from "react-icons/fa";
import { BsPeopleFill } from "react-icons/bs";
import { MdOutlineVolunteerActivism } from "react-icons/md";

import { BiSolidTimeFive } from "react-icons/bi";
import { HiOutlineCollection } from "react-icons/hi";
import { BsFillCalendarCheckFill, BsArrowUpRight } from "react-icons/bs";
import {
  MessageSquare,
  MapPin,
  Calendar,
  Clock,
  Filter,
  Grid,
  ChevronRight,
  Star,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Events = () => {
  const [filter, setFilter] = useState("all");
  const navigate = useNavigate();

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] },
    },
  };

  // Sample event data

  // Filter events based on selected category
  const filteredEvents =
    filter === "all"
      ? events
      : events.filter((event) => event.category === filter);

  // Navigate to event detail page
  const handleEventClick = (eventId) => {
    console.log(eventId);
    navigate(`/gallery/${eventId}`);

  };



  return (
    <div>
      {/* Hero Section */}
      <section className="relative z-10 min-h-[500px] h-auto flex items-center justify-center text-center overflow-hidden py-16">
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

        {/* Floating icons */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[FaStar, FaRocket, FaHandsHelping].map((Icon, i) => (
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
            {/* Animated title with icon */}
            <div className="flex flex-col md:flex-row items-center justify-center md:space-x-4 mb-6">
              <div>
               <div className="flex justify-center md:-mr-20">
               <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="inline-flex items-center p-2  bg-white/10 backdrop-blur-xl rounded-full text-rose-300 font-medium text-sm border border-rose-500/40 mx-auto"
                >
                  <span className="mr-2 text-rose-300">
                    <FaHandHoldingHeart size={16} />
                  </span>
                  <span className="text-white text-sm font-medium">
                    NSS NIT Jamshedpur
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
                  Explore Our Events
                </motion.h1>
              </div>

              <motion.div
                className="mt-4 md:mt-0 w-14 h-14 bg-gradient-to-r from-rose-500 to-blue-500 rounded-xl flex items-center justify-center shadow-lg"
                animate={{
                  boxShadow: [
                    "0 0 15px 2px rgba(219,39,119,0.7)",
                    "0 0 20px 5px rgba(59,130,246,0.7)",
                    "0 0 15px 2px rgba(219,39,119,0.7)",
                  ],
                  rotate: [0, 360],
                }}
                transition={{
                  boxShadow: {
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                  rotate: {
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear",
                  },
                }}
              >
                <FaCalendarAlt className="w-7 h-7 text-white" />
              </motion.div>
            </div>

            <motion.p
              className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Discover the impactful events organized by NSS NIT Jamshedpur.
              Join us in making a difference in the community.
            </motion.p>

            {/* Action buttons with hover effects */}
            <motion.div
              className=" flex-col sm:flex-row justify-center gap-4 mt-6 hidden md:flex"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <motion.button
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full text-white font-semibold flex items-center justify-center gap-2 group"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 15px rgba(59,130,246,0.7)",
                }}
                whileTap={{ scale: 0.98 }}
              >
                <BsPeopleFill className="w-5 h-5 group-hover:animate-bounce" />
                Join Us
              </motion.button>

              <motion.button
                className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full text-white font-semibold flex items-center justify-center gap-2 group"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 15px rgba(168,85,247,0.7)",
                }}
                whileTap={{ scale: 0.98 }}
              >
                <MdOutlineVolunteerActivism className="w-5 h-5 group-hover:animate-pulse" />
                Volunteer
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* Decorative orbiting circle */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] opacity-20 pointer-events-none">
          <motion.div
            className="absolute w-full h-full rounded-full border border-blue-300"
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute w-[110%] h-[110%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-purple-300"
            animate={{ rotate: -360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute w-[100%] h-[100%] -bottom-1/2 -left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-purple-300"
            animate={{ rotate: -360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          />
        </div>
      </section>

      {/* Events Section */}
      <section className="relative py-16 overflow-hidden bg-gradient-to-br from-gray-950 via-blue-950 to-gray-900 bg-clip-border opacity-90">
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
                <FaCalendarAlt className="mr-2" />
                Upcoming & Past Events
              </motion.span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Explore Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Initiatives
              </span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Discover the range of events and activities organized by NSS NIT
              Jamshedpur to create a positive impact in our community.
            </p>
          </motion.div>

          {/* Filter Tabs */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] },
              },
            }}
            className="flex justify-center mb-16"
          >
            <div className="inline-flex rounded-full p-2 shadow-[0_0_15px_rgba(128,90,213,0.8)] border border-purple-800 bg-gray-900/40 backdrop-blur-sm space-x-2 md:space-x-4 transition-all duration-500">
              {[
                {
                  id: "all",
                  label: "All Events",
                  icon: <HiOutlineCollection />,
                },
                { id: "upcoming", label: "Upcoming", icon: <FaCalendarAlt /> },
                { id: "past", label: "Past", icon: <BiSolidTimeFive /> },
              ].map((tab) => (
                <motion.button
                  key={tab.id}
                  onClick={() => setFilter(tab.id)}
                  className={`flex items-center px-5 md:px-8 py-3 rounded-full transition-all duration-300 ${
                    filter === tab.id
                      ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium shadow-lg shadow-purple-900/30"
                      : "text-gray-300 hover:bg-white/5"
                  }`}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 5px 15px rgba(128, 90, 213, 0.4)",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="mr-2 text-lg">{tab.icon}</span>
                  <span className="hidden md:inline">{tab.label}</span>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Events Grid */}
          {/* <AnimatePresence mode="wait"> */}
            <motion.div
              key={filter}
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    staggerChildren: 0.1,
                  },
                },
              }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:px-16 px-2"
            >
              {filteredEvents.map((event) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  whileHover={{
                    boxShadow:
                      event.category === "upcoming"
                        ? "0 0 25px rgba(59, 130, 246, 0.4)"
                        : "0 0 25px rgba(107, 114, 128, 0.4)",
                  }}
                  className="group relative bg-white/5 backdrop-blur-md rounded-2xl overflow-hidden shadow-lg border border-white/10 hover:border-purple-500/50 transition-all duration-300"
                >
                  {/* Event Image with Overlay */}
                  <div className="relative overflow-hidden h-56">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>

                    {/* Event Category Badge */}
                    <div
                      className={`absolute top-4 left-4 px-4 py-1 rounded-full text-sm font-semibold text-white flex items-center gap-1.5 ${
                        event.category === "upcoming"
                          ? "bg-gradient-to-r from-blue-600 to-indigo-600"
                          : "bg-gradient-to-r from-gray-700 to-gray-600"
                      }`}
                    >
                      {event.category === "upcoming" ? (
                        <>
                          <FaCalendarAlt className="text-xs" />
                          <span>Upcoming</span>
                        </>
                      ) : (
                        <>
                          <BsFillCalendarCheckFill className="text-xs" />
                          <span>Past</span>
                        </>
                      )}
                    </div>
                  </div>

                  {/* Event Details */}
                  <div className="p-6 space-y-4">
                    {/* Event Title */}
                    <h3 className="text-2xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300">
                      {event.title}
                    </h3>

                    {/* Event Description */}
                    <p className="text-gray-300 line-clamp-3">
                      {event.description}
                    </p>

                    {/* Event Date and Location */}
                    <div className="flex flex-col space-y-2 text-sm text-gray-400">
                      <div className="flex items-center space-x-2">
                        <FaCalendarAlt className="text-purple-400" />
                        <span>
                          {new Date(event.date).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <FaMapMarkerAlt className="text-purple-400" />
                        <span>{event.location}</span>
                      </div>
                    </div>

                    {/* Event Button */}
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleEventClick(event.link)}
                      className={`w-full mt-2 bg-gradient-to-r rounded-full text-white font-medium hover:shadow-lg hover:shadow-purple-800/30 transition-all duration-300 px-6 py-3 flex items-center justify-center gap-2 
                      ${
                        event.category === "upcoming"
                          ? "from-green-600 to-teal-700"
                          : "from-blue-600 to-indigo-800"
                      }
                      `}
                    >
                      <span>
                        {event.category === "upcoming"
                          ? "Register Now"
                          : "View Details"}
                      </span>
                      {/* <BsArrowUpRight className="text-sm transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" /> */}
                    </motion.button>
                  </div>

                  
                </motion.div>
              ))}
            </motion.div>
          {/* </AnimatePresence> */}

          {/* No Events Message */}
          {filteredEvents.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="inline-flex justify-center items-center w-20 h-20 rounded-full bg-purple-500/10 mb-6">
                <FaCalendarAlt className="text-3xl text-purple-400" />
              </div>
              <h3 className="text-2xl text-white font-medium mb-2">
                No events found
              </h3>
              <p className="text-gray-400">
                There are no {filter !== "all" ? filter : ""} events at the
                moment.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 overflow-hidden">
        {/* Background with improved gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-950 via-slate-900 to-teal-950"></div>

        {/* Decorative elements */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Light accent top */}
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-teal-400 to-transparent opacity-70"></div>

          {/* Animated glowing orbs */}
          <motion.div
            className="absolute top-20 right-20 w-64 h-64 rounded-full bg-teal-500/5 blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.2, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-20 left-20 w-80 h-80 rounded-full bg-emerald-500/5 blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.2, 0.3, 0.2],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 md:px-8 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            {/* Pre-heading */}
            <motion.div
              className="inline-block mb-5 px-4 py-1.5 bg-teal-500/10 backdrop-blur-sm border border-teal-500/30 rounded-full text-teal-300 text-sm font-medium"
              whileHover={{ scale: 1.05 }}
            >
              <motion.span
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="inline-flex items-center"
              >
                <Calendar className="w-4 h-4 mr-2 stroke-teal-300" />
                Collaboration Opportunity
              </motion.span>
            </motion.div>

            {/* Main heading with enhanced styling */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300 drop-shadow-[0_0_5px_rgba(20,184,166,0.3)]">
                Partner With Us For Your Next Event
              </span>
            </h2>

            {/* Subheading with improved readability */}
            <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
              Have an idea that could create positive change? Collaborate with
              NSS NIT Jamshedpur to transform your vision into impactful
              community service.
            </p>

            {/* CTA Buttons with improved design */}
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-5">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="group bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white px-8 py-4 rounded-full font-medium shadow-lg shadow-emerald-900/30 transition-all duration-300 flex items-center justify-center"
              >
                <span>Propose an Event</span>
                <ChevronRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="group bg-slate-900/50 backdrop-blur-sm hover:bg-slate-800/50 border border-teal-500/30 hover:border-teal-400/40 text-teal-300 hover:text-teal-200 px-8 py-4 rounded-full font-medium transition-all duration-300 flex items-center justify-center"
              >
                <MessageSquare className="mr-2 w-5 h-5" />
                <span>Contact Us</span>
              </motion.button>
            </div>
          </motion.div>

          {/* Optional highlight element */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-16 text-center"
          >
            <div className="inline-flex items-center text-sm text-slate-400">
              <span className="inline-block w-12 h-px bg-gradient-to-r from-transparent via-slate-500 to-transparent mr-3"></span>
              <span>Join over 50+ successful community initiatives</span>
              <span className="inline-block w-12 h-px bg-gradient-to-r from-slate-500 via-transparent to-transparent ml-3"></span>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Events;
