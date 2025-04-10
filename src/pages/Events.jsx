import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCalendar, FaCalendarAlt } from "react-icons/fa";



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
      <section className="relative z-10 min-h-[400px] h-auto  flex items-center justify-center text-center overflow-hidden">
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
        </div>

        {/* Floating light particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(50)].map((_, i) => (
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
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 2, ease: [0.6, 0.05, 0.01, 0.9] },
            },
          }}
          className="relative z-10 container mx-auto px-6 md:px-12"
        >
          <div className="flex items-center justify-center space-x-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              Explore Our Events
            </h1>
            <motion.div
              className="w-12 h-12 bg-gradient-to-r from-rose-500 to-blue-500 rounded-lg flex items-center justify-center shadow-lg"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 360],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <FaCalendarAlt className="w-6 h-6 text-white" />
            </motion.div>
          </div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Discover the impactful events organized by NSS NIT Jamshedpur. Join
            us in making a difference in the community.
          </p>
        </motion.div>
      </section>

      {/* Events Section */}
      <section className="relative py-12 overflow-hidden bg-gradient-to-br from-purple-950/30 via-blue-950 to-gray-900 bg-clip-border opacity-90">
        {/* Glowing upper Border */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-rose-600 via-blue-300 to-purple-600 blur-md "></div>
        {/* Gradient Background */}
        <div className="bg-gradient-to-br from-purple-950/30 via-blue-950 to-gray-900 bg-clip-border opacity-90"></div>

        {/* Content */}
        <div className="relative z-10 container-custom ">
          {/* Filter Tabs */}
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
            className="flex justify-center mb-16"
          >
            <div className="inline-flex custom-container rounded-full p-4 shadow-[0_0_15px_rgba(128,90,213,0.8)] border-2 border-purple-950 space-x-4 transition-all duration-500">
              {["all", "upcoming", "past"].map((tab) => (
                <motion.button
                  key={tab}
                  onClick={() => setFilter(tab)}
                  className={`flex items-center px-8 py-3 rounded-full transition-all duration-500 ${
                    filter === tab
                      ? "bg-gradient-to-r from-purple-500 to-blue-600 text-white font-medium "
                      : "text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                  }`}
                  whileHover={{
                    scale: 1.1,
                    //boxShadow: "0 0 20px rgba(128, 90, 213, 0.8)", // Purple glow on hover
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
          </motion.div>

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
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 bg-gradient-to-br from-purple-950/30 via-blue-950 to-gray-900 bg-clip-border opacity-90 hover:opacity-100"
            >
              {filteredEvents.map((event) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  whileHover={{
                    scale: 1.05,
                    boxShadow:
                      event.category === "upcoming"
                        ? "0 0 20px 5px rgba(59, 130, 246, 0.6)" // Blue glow for upcoming events
                        : "0 0 20px 5px rgba(107, 114, 128, 0.6)", // Gray glow for past events
                  }}
                  className="relative bg-white/30 dark:bg-gray-800/30 backdrop-blur-md rounded-2xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700 hover:border-purple-500 dark:hover:border-purple-700 transition-transform duration-300"
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
                  <div className="p-6 space-y-4 group ">
                    {/* Event Title */}
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white group-hover:text-purple-500 transition-colors duration-300">
                      {event.title}
                    </h3>

                    {/* Event Description */}
                    <p className="text-gray-700 dark:text-gray-300 line-clamp-3">
                      {event.description}
                    </p>

                    {/* Event Date and Location */}
                    <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400 p-1">
                      <div className="flex items-center justify-center space-x-2 ">
                        <svg
                          className="w-5 h-5 text-primary "
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

                    {/* Event Button */}
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="max-w-75 bg-gradient-to-r from-purple-800 to-blue-700 rounded-full text-white font-medium hover:shadow-lg hover:shadow-purple-800/30 transition-all duration-300 px-6 py-3 mt-4"
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
      <section className="relative z-10 py-40 flex items-center justify-center text-center overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-800/30 via-blue-950 to-green-900/30 bg-clip-border opacity-90"></div>

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
          <h2 className="text-4xl p-1 md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-teal-400 transition duration-300  drop-shadow-[0_0_10px_rgba(34, 231, 169, 0.8)]">
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
                  "0 10px 20px rgba(23, 79, 55, 0.6), 0 5px 10px rgba(90, 64, 185, 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-green-900  to-teal-700 text-white px-8 py-3 rounded-full shadow-lg"
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
              className="border-2 border-blue-900 text-blue-600 dark:hover:text-blue-500 bg-transparent px-8 py-3 rounded-full shadow-md transition-transform duration-300"
            >
              Contact Us
            </motion.button>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Events;
