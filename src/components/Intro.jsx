import React, { useState } from "react";

const events = [
  {
    name: "Blood Donation Camp",
    category: "Health",
    description: "Join our annual blood donation drive in collaboration with the local hospital.",
    icon: "🩸"
  },
  {
    name: "Tree Plantation Drive",
    category: "Environment",
    description: "Help us make our planet greener by planting trees in and around our campus.",
    icon: "🌱"
  },
  {
    name: "Leadership Workshop",
    category: "Skill Development",
    description: "Develop your leadership skills through interactive sessions by industry experts.",
    icon: "👥"
  },
  {
    name: "Swachchhata Pakhwara",
    category: "Environment",
    description: "Clean surroundings. Clean habits. Clean future.",
    icon: "🧹"
  },
  {
    name: "Run For Unity",
    category: "Health",
    description: "Race towards a united India. One stride at a time.",
    icon: "🏃"
  },
  {
    name: "Digital Literacy Workshop",
    category: "Education",
    description: "Learn essential digital skills for the modern world.",
    icon: "💻"
  }
];

export default function EventShowcase() {
  const [currentPage, setCurrentPage] = useState(1);
  const eventsPerPage = 3;
  
  // Calculate total pages
  const totalPages = Math.ceil(events.length / eventsPerPage);
  
  // Get current events
  const indexOfLastEvent = currentPage * eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
  const currentEvents = events.slice(indexOfFirstEvent, indexOfLastEvent);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const getCategoryColor = (category) => {
    switch(category) {
      case "Health": return "text-blue-400";
      case "Environment": return "text-purple-400";
      case "Skill Development": return "text-teal-400";
      case "Education": return "text-orange-400";
      default: return "text-gray-400";
    }
  };

  const getCategoryBgColor = (category) => {
    switch(category) {
      case "Health": return "bg-blue-900/20";
      case "Environment": return "bg-purple-900/20";
      case "Skill Development": return "bg-teal-900/20";
      case "Education": return "bg-orange-900/20";
      default: return "bg-gray-800/30";
    }
  };

  return (
    <section className="w-full bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold mb-2">
            Our <span className="text-pink-500">Events</span>
          </h2>
          <div className="w-24 h-1 bg-pink-500 mx-auto mt-2 mb-6"></div>
          <p className="text-lg max-w-3xl mx-auto">
            Join us in our upcoming events and be a part of the change. 
            Find the perfect opportunity to contribute and make a difference.
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {currentEvents.map((event, index) => (
            <div 
              key={index} 
              className="bg-gray-900 border border-gray-800 rounded-lg overflow-hidden transition-transform hover:translate-y-1 h-64 flex flex-col"
            >
              <div className={`p-6 ${getCategoryBgColor(event.category)} flex-1 flex flex-col`}>
                <div className="flex items-start justify-between mb-4">
                  <div className="bg-gray-800 p-4 rounded-lg">
                    {event.icon && (
                      <span className="text-2xl">{event.icon}</span>
                    )}
                  </div>
                  <span className={getCategoryColor(event.category)}>
                    {event.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2">{event.name}</h3>
                <p className="text-gray-400 text-sm flex-1">{event.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center gap-2">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => paginate(index + 1)}
              className={`w-3 h-3 rounded-full transition ${
                currentPage === index + 1 ? "bg-white" : "bg-white/30"
              }`}
              aria-label={`Page ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}