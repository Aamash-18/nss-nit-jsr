import { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      // Simulate successful submission (in a real app, this would be an API call)
      const success = Math.random() > 0.1; // 90% success rate for demo
      
      if (success) {
        setIsSubmitting(false);
        setSubmitSuccess(true);
        
        // Reset form after successful submission
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setSubmitSuccess(false);
        }, 5000);
      } else {
        setIsSubmitting(false);
        setSubmitError(true);
        
        // Reset error message after 5 seconds
        setTimeout(() => {
          setSubmitError(false);
        }, 5000);
      }
    }, 1500);
  };

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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-lg md:text-xl">
              Get in touch with us for any inquiries, collaborations, or to join our team.
            </p>
          </motion.div>
        </div>
       
        {/* SVG Wave */}
        <div className="absolute bottom-0 left-0 w-full z-0 text-white">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none" className="w-full h-20">
            <path 
              fill="currentColor" 
              fillOpacity="1" 
              d="M0,128L48,144C96,160,192,192,288,186.7C384,181,480,139,576,138.7C672,139,768,181,864,181.3C960,181,1056,139,1152,122.7C1248,107,1344,117,1392,122.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-md"
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900 dark:text-white">Send Us a Message</h2>
              
              {/* Success Message */}
              {submitSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-green-100 text-green-700 rounded-md"
                >
                  <p>Your message has been sent successfully! We'll get back to you soon.</p>
                </motion.div>
              )}
              
              {/* Error Message */}
              {submitError && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-red-100 text-red-700 rounded-md"
                >
                  <p>There was an error sending your message. Please try again later.</p>
                </motion.div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 mb-2">
                    Your Name
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.01 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 10 }}
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-secondary"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 mb-2">
                    Your Email
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.01 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 10 }}
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-secondary"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-gray-700 dark:text-gray-300 mb-2">
                    Subject
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.01 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 10 }}
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-secondary"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 mb-2">
                    Your Message
                  </label>
                  <motion.textarea
                    whileFocus={{ scale: 1.01 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 10 }}
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-secondary"
                  ></motion.textarea>
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full btn btn-primary py-3 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </motion.button>
              </form>
            </motion.div>
            
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900 dark:text-white">Contact Information</h2>
              
              <div className="space-y-8">
                <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Our Location</h3>
                      <p className="text-gray-700 dark:text-gray-300">
                        NSS Office, Student Activity Center<br />
                        NIT Jamshedpur, Adityapur<br />
                        Jamshedpur, Jharkhand - 831014
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Email Us</h3>
                      <p className="text-gray-700 dark:text-gray-300">
                        <a href="mailto:nss@nitjsr.ac.in" className="hover:text-primary dark:hover:text-secondary transition-colors">
                          nss@nitjsr.ac.in
                        </a>
                      </p>
                      <p className="text-gray-700 dark:text-gray-300 mt-1">
                        <a href="mailto:coordinator.nss@nitjsr.ac.in" className="hover:text-primary dark:hover:text-secondary transition-colors">
                          coordinator.nss@nitjsr.ac.in
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Call Us</h3>
                      <p className="text-gray-700 dark:text-gray-300">
                        <a href="tel:+919876543210" className="hover:text-primary dark:hover:text-secondary transition-colors">
                          +91 98765 43210
                        </a>
                      </p>
                      <p className="text-gray-700 dark:text-gray-300 mt-1">
                        <a href="tel:+919876543211" className="hover:text-primary dark:hover:text-secondary transition-colors">
                          +91 98765 43211
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Office Hours</h3>
                      <p className="text-gray-700 dark:text-gray-300">
                        Monday - Friday: 10:00 AM - 5:00 PM<br />
                        Saturday: 10:00 AM - 1:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-10">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-white">Find Us</h2>
            <p className="text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              Visit our office at NIT Jamshedpur campus. We're located in the Student Activity Center.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-lg overflow-hidden shadow-md h-96 bg-gray-200 dark:bg-gray-700"
          >
            {/* Placeholder for Google Map */}
            <div className="w-full h-full flex items-center justify-center">
              <p className="text-gray-500 dark:text-gray-400">Google Map will be embedded here</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900 dark:text-white">
              Connect With Us
            </h2>
            <p className="text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-8">
              Follow us on social media to stay updated with our latest events, activities, and announcements.
            </p>
            
            <div className="flex justify-center space-x-6">
              <motion.a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="bg-white dark:bg-gray-900 p-4 rounded-full shadow-md text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </motion.a>
              
              <motion.a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="bg-white dark:bg-gray-900 p-4 rounded-full shadow-md text-blue-400 hover:text-blue-500 dark:text-blue-300 dark:hover:text-blue-200 transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </motion.a>
              
              <motion.a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="bg-white dark:bg-gray-900 p-4 rounded-full shadow-md text-pink-600 hover:text-pink-700 dark:text-pink-400 dark:hover:text-pink-300 transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </motion.a>
              
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="bg-white dark:bg-gray-900 p-4 rounded-full shadow-md text-blue-700 hover:text-blue-800 dark:text-blue-500 dark:hover:text-blue-400 transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </motion.a>
              
              <motion.a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="bg-white dark:bg-gray-900 p-4 rounded-full shadow-md text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact; 