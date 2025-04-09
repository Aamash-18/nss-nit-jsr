import React from "react";
import { motion, AnimatePresence } from "framer-motion";

// EventCard Component
const EventCard = ({ event }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      whileHover={{
        y: -10,
        boxShadow:
          "0 15px 30px rgba(0, 0, 0, 0.2), 0 10px 10px rgba(0, 0, 0, 0.1)",
      }}
      className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-800 transition-transform duration-300"
    >
      <div className="relative overflow-hidden">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-56 object-cover transition-transform duration-500 hover:scale-105"
        />
        <div
          className={`absolute top-4 right-4 px-4 py-1 rounded-full text-sm font-semibold text-white ${
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
        <EventDetails
          date={event.date}
          location={event.location}
          time={event.time}
        />
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full bg-gradient-to-r from-blue-500 to-blue-400 text-white py-3 rounded-full shadow-md transition-transform duration-300 hover:shadow-xl"
        >
          {event.category === "upcoming" ? "Register Now" : "View Details"}
        </motion.button>
      </div>
    </motion.div>
  );
};

// EventDetails Component
const EventDetails = ({ date, location, time }) => {
  return (
    <>
      <DetailItem
        icon="calendar"
        text={new Date(date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      />
      <DetailItem icon="location" text={location} />
      <DetailItem icon="clock" text={time} />
    </>
  );
};

// DetailItem Component
const DetailItem = ({ icon, text }) => {
  const icons = {
    calendar: (
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
    ),
    location: (
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
    ),
    clock: (
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
    ),
  };

  return (
    <div className="flex items-center mb-4">
      <div className="w-8 h-8 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full flex items-center justify-center mr-3">
        {icons[icon]}
      </div>
      <span className="text-gray-600 dark:text-gray-400 text-sm">{text}</span>
    </div>
  );
};

// FilterTabs Component
const FilterTabs = ({ filter, setFilter }) => {
  const tabs = ["all", "upcoming", "past"];
  return (
    <div className="flex justify-center mb-16">
      <div className="inline-flex bg-gray-200 dark:bg-gray-800 rounded-full p-4 shadow-lg space-x-3">
        {tabs.map((tab) => (
          <motion.button
            key={tab}
            onClick={() => setFilter(tab)}
            className={`px-10 py-3 rounded-full transition-all duration-500 ${
              filter === tab
                ? "bg-gradient-to-r from-blue-500 to-blue-400 text-white shadow-lg"
                : "text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </motion.button>
        ))}
      </div>
    </div>
  );
};

// NoEventsMessage Component
const NoEventsMessage = ({ filter }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="text-center py-16 bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-100 dark:border-gray-800"
    >
      <svg
        className="w-20 h-20 text-gray-400 mx-auto mb-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <h3 className="text-2xl font-bold text-gray-700 dark:text-gray-300 mb-3">
        No events found
      </h3>
      <div className="w-16 h-1 bg-gradient-to-r from-primary/50 to-secondary/50 rounded-full mx-auto mb-4"></div>
      <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto">
        There are no {filter !== "all" ? filter : ""} events to display at the
        moment. Please check back later or explore other categories.
      </p>
    </motion.div>
  );
};

// Main EventsSection Component
const EventsSection = ({ filteredEvents, filter, setFilter }) => {
  return (
    <section className="py-12 bg-gray-100 dark:bg-gray-800">
      <div className="container-custom">
        {/* Filter Tabs */}
        <FilterTabs filter={filter} setFilter={setFilter} />

        {/* Events Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredEvents.length > 0 ? (
              filteredEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))
            ) : (
              <NoEventsMessage filter={filter} />
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export { EventCard, EventDetails, DetailItem, FilterTabs, NoEventsMessage };