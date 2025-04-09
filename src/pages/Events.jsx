import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import EnhancedBackground from "../components/EnhancedBackground";
import {
  EventCard,
  EventDetails,
  DetailItem,
  FilterTabs,
  NoEventsMessage,
} from "../components/EventSection";

const Events = () => {
  const [filter, setFilter] = useState("all");

  // Sample event data
  const events = [
    {
      id: 1,
      title: "Blood Donation Camp",
      date: "2025-04-15",
      category: "upcoming",
      image: "https://via.placeholder.com/600x400",
      description:
        "Join us for our annual blood donation camp in collaboration with the Red Cross Society. Your small contribution can save lives.",
      location: "NIT Jamshedpur Campus",
      time: "10:00 AM - 4:00 PM",
    },
    {
      id: 2,
      title: "Tree Plantation Drive",
      date: "2025-05-05",
      category: "upcoming",
      image: "https://via.placeholder.com/600x400",
      description:
        "Help us make our planet greener by participating in our tree plantation drive. We aim to plant 500 trees in a day.",
      location: "Jubilee Park, Jamshedpur",
      time: "9:00 AM - 1:00 PM",
    },
    {
      id: 3,
      title: "Health Awareness Workshop",
      date: "2025-06-10",
      category: "upcoming",
      image: "https://via.placeholder.com/600x400",
      description:
        "A workshop on health awareness focusing on preventive measures and healthy lifestyle choices.",
      location: "Central Auditorium, NIT Jamshedpur",
      time: "2:00 PM - 5:00 PM",
    },
    {
      id: 4,
      title: "Cleanliness Drive",
      date: "2024-12-15",
      category: "past",
      image: "https://via.placeholder.com/600x400",
      description:
        "A successful cleanliness drive conducted in the nearby villages to promote hygiene and sanitation.",
      location: "Adityapur Village",
      time: "9:00 AM - 12:00 PM",
    },
    {
      id: 5,
      title: "Educational Outreach Program",
      date: "2024-11-20",
      category: "past",
      image: "https://via.placeholder.com/600x400",
      description:
        "An educational outreach program for underprivileged children, providing them with books, stationery, and basic education.",
      location: "Government School, Jamshedpur",
      time: "10:00 AM - 3:00 PM",
    },
    {
      id: 6,
      title: "COVID-19 Awareness Campaign",
      date: "2024-10-05",
      category: "past",
      image: "https://via.placeholder.com/600x400",
      description:
        "A campaign to spread awareness about COVID-19 prevention measures and distribute masks and sanitizers.",
      location: "Various locations in Jamshedpur",
      time: "All Day",
    },
  ];

  // Filter events based on selected category
  const filteredEvents =
    filter === "all"
      ? events
      : events.filter((event) => event.category === filter);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-blue-500 via-blue-400 to-blue-300 text-white">
        <EnhancedBackground />
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.h1
              className="text-5xl md:text-7xl font-extrabold mb-6 drop-shadow-lg"
              initial={{ y: -50 }}
              animate={{ y: [0, -20, 0] }}
              transition={{
                duration: 3,
                ease: "easeInOut",
                repeat: 2,
                repeatType: "loop",
              }}
            >
              Our Events
            </motion.h1>
            <p className="text-lg md:text-2xl text-white/90">
              Discover our past achievements and upcoming initiatives that make
              a difference in the community.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-12 bg-gray-100 dark:bg-gray-800">
        <div className="container-custom">
          {/* Filter Tabs */}
          <div className="flex justify-center mb-16">
            <div className="inline-flex bg-gray-200 dark:bg-gray-800 rounded-full p-4 shadow-lg space-x-4">
              {["all", "upcoming", "past"].map((tab) => (
                <motion.button
                  key={tab}
                  onClick={() => setFilter(tab)}
                  className={`flex items-center px-8 py-3 rounded-full transition-all duration-500 ${
                    filter === tab
                      ? "bg-gradient-to-r from-blue-500 to-blue-400 text-white shadow-lg"
                      : "text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700"
                  }`}
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Add icons for each tab */}
                  <span className="mr-2">
                    {tab === "all" && (
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 10h11M9 21V3m0 0L3 10m6-7l6 7"
                        />
                      </svg>
                    )}
                    {tab === "upcoming" && (
                      <svg
                        className="w-5 h-5"
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
                    )}
                    {tab === "past" && (
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    )}
                  </span>
                  <span>
                    {tab === "all"
                      ? "All Events"
                      : tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </span>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Events Grid */}
          <AnimatePresence mode="wait">
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
                    staggerChildren: 0.2,
                  },
                },
              }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredEvents.map((event) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3 }}
                  whileHover={{
                    scale: 1.05,
                    boxShadow:
                      "0 15px 30px rgba(0, 0, 0, 0.2), 0 10px 10px rgba(0, 0, 0, 0.1)",
                  }}
                  className="relative bg-white/30 dark:bg-gray-800/30 backdrop-blur-md rounded-2xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700 transition-transform duration-300"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-56 object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div
                      className={`absolute top-4 left-4 px-4 py-1 rounded-full text-sm font-semibold text-white ${
                        event.category === "upcoming"
                          ? "bg-gradient-to-r from-blue-500 to-blue-400"
                          : "bg-gradient-to-r from-gray-600 to-gray-700"
                      }`}
                    >
                      {event.category === "upcoming" ? "Upcoming" : "Past"}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">
                      {event.title}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-4 line-clamp-3">
                      {event.description}
                    </p>
                    <div className="flex items-center mb-4">
                      <div className="w-8 h-8 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full flex items-center justify-center mr-3">
                        <svg
                          className="w-4 h-4 text-primary"
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
                      </div>
                      <span className="text-gray-600 dark:text-gray-400 text-sm font-medium">
                        {new Date(event.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </span>
                    </div>
                    <div className="flex items-center mb-4">
                      <div className="w-8 h-8 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full flex items-center justify-center mr-3">
                        <svg
                          className="w-4 h-4 text-primary"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </div>
                      <span className="text-gray-600 dark:text-gray-400 text-sm">
                        {event.location}
                      </span>
                    </div>
                    <div className="flex items-center mb-6">
                      <div className="w-8 h-8 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full flex items-center justify-center mr-3">
                        <svg
                          className="w-4 h-4 text-primary"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <span className="text-gray-600 dark:text-gray-400 text-sm">
                        {event.time}
                      </span>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full bg-gradient-to-r from-blue-500 to-blue-400 text-white py-3 rounded-full shadow-md transition-transform duration-300 hover:shadow-xl"
                    >
                      {event.category === "upcoming"
                        ? "Register Now"
                        : "View Details"}
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
          {/* No Events Message */}

          {filteredEvents.length === 0 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-16 bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-100 dark:border-gray-800"
            >
              <motion.div
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                
                <img
                  src="https://via.placeholder.com/150" // Replace with a relevant illustration URL
                  alt="No Events"
                  className="w-32 h-32 mx-auto mb-6"
                />
              </motion.div>
              <motion.h3
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-3xl font-bold text-gray-700 dark:text-gray-300 mb-3"
              >
                No Events Found
              </motion.h3>
              <motion.p
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-gray-600 dark:text-gray-400 max-w-md mx-auto mb-6"
              >
                It seems there are no {filter !== "all" ? filter : ""} events to
                display at the moment. Please check back later or explore other
                categories.
              </motion.p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-500 to-blue-400 text-white px-6 py-3 rounded-full shadow-lg transition-transform duration-300"
                onClick={() => setFilter("all")}
              >
                Explore All Events
              </motion.button>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Text Section */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-900 dark:text-white">
                Want to Organize an Event with Us?
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
                Have an idea for a community service event or want to
                collaborate with NSS NIT Jamshedpur? Let’s work together to
                create a positive impact.
              </p>
              <div className="flex space-x-4">
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    boxShadow:
                      "0 10px 20px rgba(0, 0, 0, 0.2), 0 5px 10px rgba(0, 0, 0, 0.1)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-green-400 to-green-500 text-white px-8 py-3 rounded-full shadow-lg"
                >
                  Propose an Event
                </motion.button>
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    boxShadow:
                      "0 10px 20px rgba(0, 0, 0, 0.2), 0 5px 10px rgba(0, 0, 0, 0.1)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-blue-400 to-blue-500 text-white px-8 py-3 rounded-full shadow-lg"
                >
                  Contact Us
                </motion.button>
              </div>
            </motion.div>

            {/* Event Highlights Section */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{
                y: -10,
                boxShadow:
                  "0 15px 30px rgba(0, 0, 0, 0.2), 0 10px 10px rgba(0, 0, 0, 0.1)",
              }}
              className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-xl border border-gray-100 dark:border-gray-800"
            >
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                Event Highlights
              </h3>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-400 rounded-full flex items-center justify-center mr-4 transition-transform duration-300 hover:scale-110 hover:shadow-lg">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300 text-lg">
                    Organized over <strong>50 successful events</strong> across
                    various domains.
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-green-500 to-green-400 rounded-full flex items-center justify-center mr-4 transition-transform duration-300 hover:scale-110 hover:shadow-lg">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300 text-lg">
                    Positively impacted <strong>thousands of lives</strong> in
                    the community.
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-yellow-500 to-yellow-400 rounded-full flex items-center justify-center mr-4 transition-transform duration-300 hover:scale-110 hover:shadow-lg">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300 text-lg">
                    Collaborated with <strong>renowned NGOs</strong> and
                    organizations.
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-purple-500 to-purple-400 rounded-full flex items-center justify-center mr-4 transition-transform duration-300 hover:scale-110 hover:shadow-lg">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300 text-lg">
                    Received <strong>state and national recognition</strong> for
                    our efforts.
                  </span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
