import { motion } from 'framer-motion';

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 pb-32 bg-gradient-to-r from-primary to-primary/80 text-white overflow-hidden">
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About NSS NIT Jamshedpur</h1>
            <p className="text-lg md:text-xl">
              Learn about our mission, vision, and the impact we're making in the community.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-md"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-white">Our Mission</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                The mission of NSS NIT Jamshedpur is to provide hands-on experience to young students in delivering community service. We aim to develop among them a sense of social and civic responsibility, and to utilize their knowledge in finding practical solutions to community problems.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                We strive to identify the needs and problems of the community and involve students in problem-solving processes, developing a sense of social and civic responsibility.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-md"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-white">Our Vision</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Our vision is to build a generation of young individuals who are socially responsible, environmentally conscious, and committed to serving the nation. We envision a society where youth are actively engaged in addressing social challenges and contributing to sustainable development.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                We aim to be a catalyst for positive change, inspiring students to become lifelong volunteers and leaders who make a meaningful impact in their communities.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">Our History</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              The journey of NSS at NIT Jamshedpur has been one of growth, impact, and transformation.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/20"></div>

            {/* Timeline Items */}
            <div className="space-y-12">
              {/* Item 1 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <div className="flex items-center justify-center">
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-primary rounded-full flex items-center justify-center z-10">
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="md:text-right md:pr-12">
                    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Establishment</h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      NSS at NIT Jamshedpur was established in the year 1969 as part of the nationwide NSS program launched by the Government of India.
                    </p>
                  </div>
                  <div className="md:pl-12">
                    <div className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-md">
                      <p className="text-2xl font-bold text-primary">1969</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Item 2 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <div className="flex items-center justify-center">
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-primary rounded-full flex items-center justify-center z-10">
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="md:text-right md:pr-12 md:order-1 order-2">
                    <div className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-md">
                      <p className="text-2xl font-bold text-primary">1985</p>
                    </div>
                  </div>
                  <div className="md:pl-12 md:order-2 order-1">
                    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Expansion Phase</h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      The NSS unit at NIT Jamshedpur expanded its activities and increased its volunteer base, reaching out to more communities in and around Jamshedpur.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Item 3 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <div className="flex items-center justify-center">
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-primary rounded-full flex items-center justify-center z-10">
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="md:text-right md:pr-12">
                    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Recognition & Awards</h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      NSS NIT Jamshedpur received recognition for its outstanding contribution to community service and was awarded at the state and national levels.
                    </p>
                  </div>
                  <div className="md:pl-12">
                    <div className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-md">
                      <p className="text-2xl font-bold text-primary">2005</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Item 4 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <div className="flex items-center justify-center">
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-primary rounded-full flex items-center justify-center z-10">
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="md:text-right md:pr-12 md:order-1 order-2">
                    <div className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-md">
                      <p className="text-2xl font-bold text-primary">Present</p>
                    </div>
                  </div>
                  <div className="md:pl-12 md:order-2 order-1">
                    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Current Impact</h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      Today, NSS NIT Jamshedpur continues to make a significant impact with over 200 active volunteers working on various projects related to education, health, environment, and social awareness.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">Our Core Values</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              These values guide our actions and decisions as we work towards our mission.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Value 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md text-center"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Selfless Service</h3>
              <p className="text-gray-700 dark:text-gray-300">
                We believe in serving others without expecting anything in return, focusing on the needs of the community above our own.
              </p>
            </motion.div>

            {/* Value 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md text-center"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Integrity</h3>
              <p className="text-gray-700 dark:text-gray-300">
                We uphold the highest standards of honesty, transparency, and ethical behavior in all our actions and decisions.
              </p>
            </motion.div>

            {/* Value 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md text-center"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Inclusivity</h3>
              <p className="text-gray-700 dark:text-gray-300">
                We embrace diversity and ensure that our programs and activities are accessible and beneficial to all sections of society.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About; 