import React, { useState, useEffect } from "react";
import { Calendar, ArrowRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { upcomingEvents } from "../utils/data";
import { motion, AnimatePresence } from "framer-motion";

export default function EventShowcase() {
  const [currentPage, setCurrentPage] = useState(1);
  const [animateIn, setAnimateIn] = useState(false);
  const eventsPerPage = 3;

  // Calculate total pages
  const totalPages = Math.ceil(upcomingEvents.length / eventsPerPage);

  // Get current events
  const indexOfLastEvent = currentPage * eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
  const currentEvents = upcomingEvents.slice(
    indexOfFirstEvent,
    indexOfLastEvent
  );

  // Change page with animation
  const paginate = (pageNumber) => {
    setAnimateIn(false);
    setTimeout(() => {
      setCurrentPage(pageNumber);
      setAnimateIn(true);
    }, 300);
  };

  // Initial animation
  useEffect(() => {
    setAnimateIn(true);
  }, []);

  const getCategoryColor = (category) => {
    switch (category) {
      case "Health":
        return "text-blue-400";
      case "Environment":
        return "text-green-400";
      case "Skill Development":
        return "text-purple-400";
      case "Education":
        return "text-orange-400";
      default:
        return "text-gray-400";
    }
  };

  const getCategoryBgGradient = (category) => {
    switch (category) {
      case "Health":
        return "from-blue-900/20 to-blue-800/5";
      case "Environment":
        return "from-green-900/20 to-green-800/5";
      case "Skill Development":
        return "from-purple-900/20 to-purple-800/5";
      case "Education":
        return "from-orange-900/20 to-orange-800/5";
      default:
        return "from-gray-800/20 to-gray-800/5";
    }
  };

  const getCategoryAccentColor = (category) => {
    switch (category) {
      case "Health":
        return "bg-blue-500";
      case "Environment":
        return "bg-green-500";
      case "Skill Development":
        return "bg-purple-500";
      case "Education":
        return "bg-orange-500";
      default:
        return "bg-gray-500";
    }
  };

  const getButtonGradient = (category) => {
    switch (category) {
      case "Health":
        return "from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400";
      case "Environment":
        return "from-green-600 to-green-500 hover:from-green-500 hover:to-green-400";
      case "Skill Development":
        return "from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400";
      case "Education":
        return "from-orange-600 to-orange-500 hover:from-orange-500 hover:to-orange-400";
      default:
        return "from-gray-600 to-gray-500 hover:from-gray-500 hover:to-gray-400";
    }
  };

  return (
    <section className="w-full bg-gray-950 text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-2">
            Upcoming <span className="text-pink-500">Events</span>
          </h2>
          <div className="w-24 h-1 bg-pink-500 mx-auto mt-2 mb-6"></div>
          <p className="text-lg max-w-3xl mx-auto">
            Join us in our upcoming events and be a part of the change. Find the
            perfect opportunity to contribute and make a difference.
          </p>
        </div>

        {/* Events Grid */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10 transition-all duration-300 ${
            animateIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {currentEvents.length > 0 && (
            currentEvents.map((event, index) => (
              <div
                key={index}
                className="group relative bg-gray-900 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Hover border effect using pseudo-element */}
                <div
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `linear-gradient(to right, ${getCategoryAccentColor(
                      event.category
                    ).replace("bg-", "")}, transparent)`,
                    padding: "1px",
                  }}
                >
                  <div className="absolute inset-0 bg-gray-900 rounded-xl"></div>
                </div>

                <div
                  className={`relative p-6 bg-gradient-to-b ${getCategoryBgGradient(
                    event.category
                  )} flex-1 flex flex-col z-10`}
                >
                  {/* Top accent bar */}
                  <div
                    className={`absolute top-0 left-0 right-0 h-1 ${getCategoryAccentColor(
                      event.category
                    )} opacity-70`}
                  ></div>

                  <div className="flex items-start justify-between mb-5">
                    <div className="bg-gray-800/70 backdrop-blur-sm p-4 rounded-lg shadow-lg">
                      {event.icon && (
                        <span className="text-3xl">{event.icon}</span>
                      )}
                    </div>
                    <span
                      className={`${getCategoryColor(
                        event.category
                      )} px-3 py-1 rounded-full text-sm font-medium bg-gray-800/50 backdrop-blur-sm`}
                    >
                      {event.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold mb-3 group-hover:text-white transition-colors">
                    {event.name}
                  </h3>
                  <p className="text-gray-400 text-sm mb-5 flex-grow">
                    {event.description}
                  </p>

                  <div className="flex items-center mt-auto mb-4 text-gray-300">
                    <Calendar size={16} className="mr-2" />
                    <span>{event.date}</span>
                  </div>

                  <a
                    href={event.formLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg font-medium text-white transition-all duration-300 bg-gradient-to-r ${getButtonGradient(
                      event.category
                    )} transform group-hover:translate-y-0 translate-y-0 opacity-95 group-hover:opacity-100 shadow-md group-hover:shadow-lg`}
                  >
                    Register Now{" "}
                    <ExternalLink
                      size={16}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </a>
                </div>
              </div>
            ))
          )}
        </div>
        {
          currentEvents.length == 0 && (
            <>
             <div className="">
      <motion.h1
        className="text-5xl font-bold  text-blue-500  text-center"
        animate={{
          y: [0, -15, 0, -15, 0],
          color: ["#3b82f6", "#8b5cf6", "#ec4899", "#6366f1", "#3b82f6"],
          textShadow: ["0px 0px 0px rgba(0,0,0,0)", "0px 5px 8px rgba(0,0,0,0.1)", "0px 0px 0px rgba(0,0,0,0)", "0px 5px 8px rgba(0,0,0,0.1)", "0px 0px 0px rgba(0,0,0,0)"]
        }}
        transition={{
          duration: 6,
          ease: "easeInOut",
          times: [0, 0.25, 0.5, 0.75, 1],
          repeat: Infinity,
          repeatType: "loop"
        }}
      >
        Coming Soon
      </motion.h1>
    </div>
            </>
          )
        }

        {/* Pagination */}
        <div className="flex justify-center gap-3 mb-12">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => paginate(index + 1)}
              className={`w-3 h-3 rounded-full transition-all duration-300 transform ${
                currentPage === index + 1
                  ? "bg-pink-500 scale-125"
                  : "bg-white/20 hover:bg-white/40"
              }`}
              aria-label={`Page ${index + 1}`}
            />
          ))}
        </div>

        {/* View All Events Button */}
        <div className="text-center mt-8">
          <Link
            to="/events"
            className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-pink-600 to-pink-500 hover:from-pink-500 hover:to-pink-400 text-white font-medium rounded-lg transition-all duration-300 transform hover:translate-y-1 shadow-lg hover:shadow-xl"
          >
            View All Events{" "}
            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
