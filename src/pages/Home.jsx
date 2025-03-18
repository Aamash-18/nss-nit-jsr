import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-gradient-to-r from-primary/90 to-secondary/90">
            {/* We'll add a real image in production */}
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
        </div>

        {/* Hero Content */}
        <div className="container-custom relative z-10 text-white text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              National Service Scheme
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium mb-6">
              NIT Jamshedpur
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl max-w-3xl mx-auto mb-8"
          >
            Not Me But You - Serving the community and developing leadership skills through meaningful service projects.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Link to="/about">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-primary px-8 py-3"
              >
                Learn More
              </motion.button>
            </Link>
            <Link to="/events">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn bg-white text-primary hover:bg-gray-100 px-8 py-3"
              >
                Our Events
              </motion.button>
            </Link>
          </motion.div>
        </div>

        {/* Scroll Down Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.div>
        </motion.div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Welcome to NSS NIT Jamshedpur
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              Empowering students to contribute to society and develop a sense of social responsibility.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden"
            >
              <div className="p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-center text-gray-900 dark:text-white">Community Service</h3>
                <p className="text-gray-700 dark:text-gray-300 text-center">
                  Engaging in meaningful service projects that address community needs and create positive impact.
                </p>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden"
            >
              <div className="p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-center text-gray-900 dark:text-white">Skill Development</h3>
                <p className="text-gray-700 dark:text-gray-300 text-center">
                  Building leadership, teamwork, and organizational skills through hands-on experience and training.
                </p>
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden"
            >
              <div className="p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-center text-gray-900 dark:text-white">Social Awareness</h3>
                <p className="text-gray-700 dark:text-gray-300 text-center">
                  Raising awareness about social issues and promoting a sense of responsibility towards society.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                Making a Difference <br />
                <span className="text-primary">In Our Community</span>
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Since its inception, NSS NIT Jamshedpur has been at the forefront of community service, organizing numerous events and initiatives that have positively impacted thousands of lives.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-8">
                Our volunteers dedicate their time and skills to address various social issues, from education and healthcare to environmental conservation and disaster relief.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                    <span className="text-xl font-bold text-primary">50+</span>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">Events Organized</span>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                    <span className="text-xl font-bold text-primary">200+</span>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">Active Volunteers</span>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                    <span className="text-xl font-bold text-primary">10k+</span>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">Lives Impacted</span>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden">
                {/* Placeholder for an image or video */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-gray-500 dark:text-gray-400">Impact Video</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Join Us in Making a Difference
            </h2>
            <p className="text-lg max-w-3xl mx-auto mb-8">
              Become a part of NSS NIT Jamshedpur and contribute to meaningful community service while developing valuable skills and creating lasting memories.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/contact" className="btn bg-white text-primary hover:bg-gray-100 px-8 py-3 inline-block">
                Get Involved
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home; 