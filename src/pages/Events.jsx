import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";



const Events = () => {
  const [filter, setFilter] = useState("all");

   const fadeInUp = {
     hidden: { opacity: 0, y: 50 },
     visible: {
       opacity: 1,
       y: 0,
       transition: { duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] },
     },
   };

   

  


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
      <section className="relative z-10 min-h-screen flex items-center justify-center text-center overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-gray-900 opacity-90"></div>

        {/* Floating Event-Related Objects */}
        <motion.div
          className="absolute top-10 left-10 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center"
          animate={{
            y: [0, 20, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        </motion.div>
        <motion.div
          className="absolute bottom-20 right-20 w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center"
          animate={{
            x: [0, 20, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </motion.div>
        <motion.div
          className="absolute top-1/3 right-1/3 w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center"
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </motion.div>

        {/* Hero Content */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] },
            },
          }}
          className="relative z-10 container mx-auto px-6 md:px-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            Explore Our Events
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Discover the impactful events organized by NSS NIT Jamshedpur. Join
            us in making a difference in the community.
          </p>
        </motion.div>
      </section>
      {/* Events Section */}
      <section className="relative py-12 overflow-hidden bg-gradient-to-br from-purple-900 via-blue-900 to-gray-900">
        {/* Gradient Background */}
        <div className="custom-shape"></div>

        {/* Content */}
        <div className="relative z-10 container-custom">
          {/* Filter Tabs */}
          <div className="flex justify-center mb-16">
            <div className="inline-flex custom-container rounded-full p-4 shadow-lg space-x-4">
              {["all", "upcoming", "past"].map((tab) => (
                <motion.button
                  key={tab}
                  onClick={() => setFilter(tab)}
                  className={`flex items-center px-8 py-3 rounded-full transition-all duration-500 ${
                    filter === tab
                      ? "bg-gradient-to-r from-primary to-secondary text-white"
                      : "text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                  }`}
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
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
                      event.category === "upcoming"
                        ? "0 0 20px 5px rgba(59, 130, 246, 0.6)" // Blue glow for upcoming events
                        : "0 0 20px 5px rgba(107, 114, 128, 0.6)", // Gray glow for past events
                  }}
                  className="relative bg-white/30 dark:bg-gray-800/30 backdrop-blur-md rounded-2xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700 transition-transform duration-300"
                >
                  {/* Event Image */}
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

                  {/* Event Details */}
                  <div className="p-6 space-y-4">
                    {/* Event Title */}
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                      {event.title}
                    </h3>

                    {/* Event Date and Location */}
                    <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
                      <div className="flex items-center space-x-2">
                        <svg
                          className="w-5 h-5 text-primary"
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
                        <span>
                          {new Date(event.date).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <svg
                          className="w-5 h-5 text-primary"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5.121 17.804A1 1 0 016 17h12a1 1 0 01.707 1.707l-6 6a1 1 0 01-1.414 0l-6-6A1 1 0 015.121 17.804z"
                          />
                        </svg>
                        <span>{event.location}</span>
                      </div>
                    </div>

                    {/* Event Description */}
                    <p className="text-gray-700 dark:text-gray-300 line-clamp-3">
                      {event.description}
                    </p>

                    {/* Event Button */}
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="max-w-75 bg-gradient-to-r from-primary to-secondary text-white px-6 py-2 rounded-full shadow-lg transition-transform duration-300"
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-20 flex items-center justify-center text-center overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-gray-900 opacity-90"></div>

        {/* Floating Objects */}
        <motion.div
          className="absolute top-10 left-10 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center"
          animate={{
            y: [0, 20, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        </motion.div>
        <motion.div
          className="absolute bottom-20 right-20 w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center"
          animate={{
            x: [0, 20, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </motion.div>

        {/* CTA Section */}
        <section className="relative z-10 py-40 flex items-center justify-center text-center overflow-hidden">
          {/* Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-gray-900 opacity-90"></div>

          {/* Floating Objects */}
          <motion.div
            className="absolute top-10 left-10 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center"
            animate={{
              y: [0, 20, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </motion.div>
          <motion.div
            className="absolute bottom-20 right-20 w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center"
            animate={{
              x: [0, 20, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </motion.div>

          {/* CTA Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] },
              },
            }}
            className="relative z-10 container mx-auto px-6 md:px-12"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              Want to Organize an Event with Us?
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
              Have an idea for a community service event or want to collaborate
              with NSS NIT Jamshedpur? Let’s work together to create a positive
              impact.
            </p>
            <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
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
                    "0 10px 20px rgba(59, 130, 246, 0.6), 0 5px 10px rgba(59, 130, 246, 0.4)",
                }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-blue-400 text-blue-400 bg-transparent px-8 py-3 rounded-full shadow-md transition-transform duration-300"
              >
                Contact Us
              </motion.button>
            </div>
          </motion.div>
        </section>
      </section>
    </div>
  );
};

export default Events;
