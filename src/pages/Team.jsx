import { useState } from 'react';
import { motion } from 'framer-motion';

const Team = () => {
  const [activeCategory, setActiveCategory] = useState('faculty');

  // Sample team data
  const teamMembers = {
    faculty: [
      {
        id: 1,
        name: 'Dr. Rajesh Kumar',
        position: 'Program Officer',
        image: 'https://via.placeholder.com/300x300',
        department: 'Department of Mechanical Engineering',
        email: 'rajesh.kumar@nitjsr.ac.in',
        description: 'Dr. Rajesh Kumar has been leading the NSS unit at NIT Jamshedpur for the past 5 years. Under his guidance, the unit has achieved numerous milestones and recognition.',
      },
      {
        id: 2,
        name: 'Dr. Priya Singh',
        position: 'Faculty Coordinator',
        image: 'https://via.placeholder.com/300x300',
        department: 'Department of Computer Science',
        email: 'priya.singh@nitjsr.ac.in',
        description: 'Dr. Priya Singh is responsible for coordinating various activities and ensuring smooth functioning of the NSS unit. She has been associated with NSS for over 3 years.',
      },
    ],
    coordinators: [
      {
        id: 3,
        name: 'Amit Sharma',
        position: 'Student Coordinator',
        image: 'https://via.placeholder.com/300x300',
        department: 'B.Tech, Electrical Engineering',
        email: 'amit.sharma@nitjsr.ac.in',
        description: 'Amit is responsible for overall coordination of NSS activities and leads the team of volunteers. He has been an active NSS volunteer since his first year.',
      },
      {
        id: 4,
        name: 'Sneha Patel',
        position: 'Student Coordinator',
        image: 'https://via.placeholder.com/300x300',
        department: 'B.Tech, Civil Engineering',
        email: 'sneha.patel@nitjsr.ac.in',
        description: 'Sneha manages the planning and execution of various events and activities. She is known for her organizational skills and dedication to social service.',
      },
    ],
    volunteers: [
      {
        id: 5,
        name: 'Rahul Verma',
        position: 'Volunteer',
        image: 'https://via.placeholder.com/300x300',
        department: 'B.Tech, Mechanical Engineering',
        email: 'rahul.verma@nitjsr.ac.in',
        description: 'Rahul is an enthusiastic volunteer who actively participates in all NSS activities. He is particularly interested in environmental conservation projects.',
      },
      {
        id: 6,
        name: 'Neha Gupta',
        position: 'Volunteer',
        image: 'https://via.placeholder.com/300x300',
        department: 'B.Tech, Computer Science',
        email: 'neha.gupta@nitjsr.ac.in',
        description: 'Neha is passionate about teaching and regularly conducts educational workshops for underprivileged children as part of NSS activities.',
      },
      {
        id: 7,
        name: 'Vikram Singh',
        position: 'Volunteer',
        image: 'https://via.placeholder.com/300x300',
        department: 'B.Tech, Electronics Engineering',
        email: 'vikram.singh@nitjsr.ac.in',
        description: 'Vikram is skilled in organizing health camps and awareness programs. He has been instrumental in the success of several health-related initiatives.',
      },
      {
        id: 8,
        name: 'Ananya Reddy',
        position: 'Volunteer',
        image: 'https://via.placeholder.com/300x300',
        department: 'B.Tech, Chemical Engineering',
        email: 'ananya.reddy@nitjsr.ac.in',
        description: 'Ananya is dedicated to social service and has been actively involved in various community outreach programs organized by NSS.',
      },
    ],
  };

  const categories = [
    { id: 'faculty', label: 'Faculty Advisors' },
    { id: 'coordinators', label: 'Student Coordinators' },
    { id: 'volunteers', label: 'Active Volunteers' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-primary via-primary/90 to-secondary/80 text-white">
        <div className="absolute inset-0 bg-[url('https://via.placeholder.com/1920x1080')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-md">Our Team</h1>
            <p className="text-lg md:text-xl text-white/90">
              Meet the dedicated individuals who make our mission possible.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white dark:from-gray-900 to-transparent"></div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container-custom">
          {/* Category Tabs */}
          <div className="flex justify-center mb-16 flex-wrap">
            <div className="inline-flex bg-gray-100 dark:bg-gray-800 rounded-full p-1.5 shadow-lg flex-wrap justify-center">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-6 py-3 m-1 rounded-full transition-all duration-300 ${
                    activeCategory === category.id
                      ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-md'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category.label}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Team Members Grid */}
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className={`grid grid-cols-1 ${
              activeCategory === 'volunteers' ? 'md:grid-cols-2 lg:grid-cols-4' : 'md:grid-cols-2'
            } gap-8`}
          >
            {teamMembers[activeCategory].map((member) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -10, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
                className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-800"
              >
                <div className="relative overflow-hidden group">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover object-center transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 w-full">
                      <div className="flex justify-center space-x-4">
                        <motion.a
                          href={`mailto:${member.email}`}
                          className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/40 transition-colors"
                          aria-label="Email"
                          whileHover={{ scale: 1.2, rotate: 5 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </motion.a>
                        <motion.a
                          href="#"
                          className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/40 transition-colors"
                          aria-label="LinkedIn"
                          whileHover={{ scale: 1.2, rotate: -5 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                          </svg>
                        </motion.a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1 text-gray-900 dark:text-white">{member.name}</h3>
                  <div className="inline-block px-3 py-1 mb-2 bg-gradient-to-r from-primary/10 to-secondary/10 text-primary dark:text-secondary rounded-full text-sm font-medium">
                    {member.position}
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{member.department}</p>
                  <p className="text-gray-700 dark:text-gray-300 line-clamp-3">
                    {member.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                Join Our Team
              </h2>
              <div className="w-20 h-1.5 bg-gradient-to-r from-primary to-secondary rounded-full mb-6"></div>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Becoming a part of NSS NIT Jamshedpur is not just about volunteering; it's about making a difference, developing leadership skills, and creating lasting memories.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-8">
                We welcome students who are passionate about social service and want to contribute to the betterment of society. Join us in our mission to create a positive impact in the community.
              </p>
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)' }}
                whileTap={{ scale: 0.95 }}
                className="btn bg-gradient-to-r from-primary to-secondary text-white px-8 py-3 rounded-full shadow-md"
              >
                Apply to Join
              </motion.button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-xl border border-gray-100 dark:border-gray-800"
            >
              <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">Benefits of Joining NSS</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full flex items-center justify-center mr-3">
                    <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">Develop leadership and organizational skills</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full flex items-center justify-center mr-3">
                    <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">Make a positive impact in the community</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full flex items-center justify-center mr-3">
                    <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">Network with like-minded individuals</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full flex items-center justify-center mr-3">
                    <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">Enhance your resume with valuable experience</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full flex items-center justify-center mr-3">
                    <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">Participate in national level NSS camps and events</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team; 