import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaUser,
  FaEnvelope,
  FaPaperPlane,
  FaPhone,
  FaMapMarkerAlt,
  FaClock,
  FaArrowRight,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaHeart,
  FaHandHoldingHeart,
  FaUsers,
  FaHandsHelping,
} from "react-icons/fa";
import { MdSubject, MdMessage, MdCheck, MdStar } from "react-icons/md";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [currentSection, setCurrentSection] = useState(0);
  const [hoverCard, setHoverCard] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log("Form submitted:", formData);
    setIsSubmitting(false);
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
      // Reset form after submission
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    }, 3000);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSection((prev) => (prev + 1) % 3);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const contactCards = [
    {
      icon: <FaMapMarkerAlt className="text-3xl text-rose-400" />,
      title: "Visit Us",
      content:
        "National Institute of Technology, Jamshedpur, Jharkhand - 831014, India",
      action: "Get Directions",
      link: "https://maps.google.com",
      color: "from-rose-500/20 to-rose-900/40",
    },
    {
      icon: <FaEnvelope className="text-3xl text-violet-400" />,
      title: "Email Us",
      content: "nss@nitjsr.ac.in",
      action: "Send Email",
      link: "mailto:nss@nitjsr.ac.in",
      color: "from-violet-500/20 to-violet-900/40",
    },
    {
      icon: <FaPhone className="text-3xl text-blue-400" />,
      title: "Call Us",
      content: "+91 1234567890",
      action: "Call Now",
      link: "tel:+911234567890",
      color: "from-blue-500/20 to-blue-900/40",
    },
    {
      icon: <FaClock className="text-3xl text-cyan-400" />,
      title: "Office Hours",
      content: "Monday to Friday: 9:00 AM - 5:00 PM",
      action: "View Schedule",
      link: "#schedule",
      color: "from-cyan-500/20 to-cyan-900/40",
    },
  ];

  const faqItems = [
    {
      question: "How can I join NSS at NIT Jamshedpur?",
      answer:
        "To join NSS at NIT Jamshedpur, you can register at the beginning of the academic year during the registration drive. Keep an eye on our notices and social media updates for the announcement.",
    },
    {
      question: "What activities does NSS NIT Jamshedpur conduct?",
      answer:
        "NSS NIT Jamshedpur conducts various activities like blood donation camps, tree plantation drives, cleanliness campaigns, teaching underprivileged children, awareness programs, and many more community service activities.",
    },
    {
      question: "Is there any certificate provided for NSS volunteers?",
      answer:
        "Yes, NSS volunteers receive certificates based on their hours of service. A minimum of 120 hours of service over two years is required for the NSS certificate, which adds value to your academic profile.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-indigo-950 to-gray-950 text-white">
  
      <header className="relative py-28 overflow-hidden">
          {/* Background effects */}
          <div className="absolute inset-0">
        {/* Animated gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,#4f46e520,transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,#3b82f630,transparent_50%)]"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
        
      </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
              className="absolute inset-0 -z-10 overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-full">
                {/* Animated gradient circles */}
                <motion.div
                  className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-rose-500/10 blur-3xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    x: [0, 20, 0],
                    y: [0, -20, 0],
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <motion.div
                  className="absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full bg-violet-500/10 blur-3xl"
                  animate={{
                    scale: [1, 1.3, 1],
                    x: [0, -30, 0],
                    y: [0, 30, 0],
                    opacity: [0.3, 0.4, 0.3],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                />
                <motion.div
                  className="absolute top-1/2 left-1/2 w-72 h-72 rounded-full bg-blue-500/10 blur-3xl"
                  animate={{
                    scale: [1, 1.1, 1],
                    x: [0, 40, 0],
                    y: [0, 10, 0],
                    opacity: [0.2, 0.3, 0.2],
                  }}
                  transition={{
                    duration: 9,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2,
                  }}
                />
                <motion.div
                  className="absolute bottom-1/3 right-1/3 w-64 h-64 rounded-full bg-cyan-500/10 blur-3xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    x: [0, -15, 0],
                    y: [0, -25, 0],
                    opacity: [0.2, 0.4, 0.2],
                  }}
                  transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 3,
                  }}
                />
              </div>
            </motion.div>

            
            <motion.div
             initial={{ opacity: 0, y: -20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.5 }}
            className="inline-flex items-center p-2  from-rose-400/20 to-violet-500/20 rounded-full text-rose-300 font-medium text-sm mb-4 border border-rose-500/40">
                <span className="mr-2 text-rose-300">
                  <FaHandHoldingHeart size={16} />
                </span>
                <span className="text-white text-sm font-medium">
                  NSS NIT Jamshedpur
                </span>
              </motion.div>

            <motion.h1
              className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-rose-300 via-violet-300 to-cyan-300"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Connect With Our Community
            </motion.h1>

            <motion.p
              className="text-xl text-gray-300 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Have questions about NSS activities or want to collaborate? Reach
              out to our team and join us in our mission of service and social
              impact.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <a
                href="#contact-form"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-rose-500 to-violet-600 rounded-full text-white font-medium group transition-all duration-300 hover:shadow-lg hover:shadow-rose-500/25"
              >
                <span>Reach Out To Us</span>
                <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </a>

              <a
                href="#about"
                className="inline-flex items-center px-8 py-4 bg-gray-800/50 border border-gray-700 rounded-full text-white font-medium group transition-all duration-300 hover:bg-gray-800/80"
              >
                <span>Learn More</span>
                <FaArrowRight className="ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
              </a>
            </motion.div>
          </div>
        </div>
      </header>
      

      {/* Main Content Split Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-transparent to-gray-950/50"></div>
          <div className="absolute top-1/2 right-0 w-1/3 h-1/2 bg-rose-900/5 blur-3xl rounded-full"></div>
          <div className="absolute bottom-0 left-1/4 w-1/4 h-1/3 bg-violet-900/5 blur-3xl rounded-full"></div>
        </div>

        <div className="container mx-auto px-2 md:px-6">
          <div className="flex flex-col lg:flex-row gap-12 md:px-12">
            {/* Left side: About NSS Section*/}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:w-2/5"
            >
              <div className="bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-2xl p-10 shadow-2xl mb-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500"></div>

                <div className="mb-6">
                  <span className="inline-block px-4 py-1.5 bg-blue-500/20 rounded-full text-blue-300 font-medium text-sm mb-4 border border-blue-500/20">
                    About NSS
                  </span>
                  <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-violet-300">
                    National Service Scheme
                  </h2>
                </div>

                <p className="text-gray-300 mb-6">
                  The National Service Scheme (NSS) is a voluntary program that
                  aims to develop student's personality through community
                  service. The NSS unit at NIT Jamshedpur works with the motto
                  "Not Me But You."
                </p>

                <p className="text-gray-300 mb-6">
                  Our activities include blood donation camps, environmental
                  conservation, educational programs for underprivileged
                  children, health awareness campaigns, and disaster management
                  training.
                </p>

                <div className="bg-gradient-to-r from-blue-900/30 to-violet-900/30 p-6 rounded-xl border border-blue-800/30">
                  <h3 className="text-lg font-semibold mb-2 text-blue-300">
                    Our Vision
                  </h3>
                  <p className="text-gray-300 text-[15px]">
                    To foster a generation of young individuals who are not only sensitive to social issues but also actively engaged in community service. 
                  </p>
                </div>
                <div className="bg-gradient-to-r mt-2 from-green-900/30 to-cyan-900/50 p-6 rounded-xl border border-blue-800/30">
                  <h3 className="text-lg font-semibold mb-4 text-blue-300">
                    Our Mission
                  </h3>
                  <p className="text-gray-300 text-[15px]">
                  Our goal is to empower them with the skills, knowledge, and motivation to drive meaningful and sustainable positive change in society.
                  </p>
                </div>
              </div>

          
            </motion.div>
            {/* Right side: Contact Form*/}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:w-3/5 mb-12 lg:mb-0"
              id="contact-form"
            >
              <div className="bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-2xl p-10 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-r from-rose-500 via-violet-500 to-cyan-500"></div>

                <div className="mb-10">
                  <span className="inline-block px-4 py-1.5 bg-rose-500/20 rounded-full text-rose-300 font-medium text-sm mb-4 border border-rose-500/20">
                    Contact Form
                  </span>
                  <h2 className="text-3xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-rose-300 to-violet-300">
                    Send Us A Message
                  </h2>
                  <p className="text-gray-400">
                    Fill out the form and our team will get back to you within
                    24 hours.
                  </p>
                </div>

                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="bg-green-500/10 border border-green-500/30 rounded-xl p-8 text-center"
                    >
                      <div className="flex justify-center mb-6">
                        <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center">
                          <MdCheck className="text-4xl text-green-400" />
                        </div>
                      </div>
                      <h3 className="text-2xl font-semibold text-white mb-3">
                        Message Sent Successfully!
                      </h3>
                      <p className="text-gray-300 mb-6">
                        Thank you for reaching out to us. We'll get back to you
                        as soon as possible.
                      </p>
                      <motion.div
                        className="w-full h-1.5 bg-gray-800 rounded-full overflow-hidden mt-8"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                      >
                        <motion.div
                          className="h-full bg-gradient-to-r from-green-400 to-emerald-500"
                          initial={{ width: "0%" }}
                          animate={{ width: "100%" }}
                          transition={{ duration: 2.5, ease: "easeInOut" }}
                        />
                      </motion.div>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      onSubmit={handleSubmit}
                      className="space-y-6"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Name Field */}
                        <div className="relative">
                          <label className="flex items-center text-sm font-medium text-gray-300 mb-2">
                            <FaUser className="mr-2 text-rose-400" />
                            Your Name
                          </label>
                          <div className="relative">
                            <input
                              type="text"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              onFocus={() => setFocusedField("name")}
                              onBlur={() => setFocusedField(null)}
                              required
                              className="w-full px-4 py-3 bg-gray-800/50 rounded-lg border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-rose-500/30"
                              placeholder="John Doe"
                            />
                            <motion.div
                              className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-rose-500 to-violet-500"
                              initial={{ width: "0%" }}
                              animate={{
                                width: focusedField === "name" ? "100%" : "0%",
                              }}
                              transition={{ duration: 0.3 }}
                            />
                          </div>
                        </div>

                        {/* Email Field */}
                        <div className="relative">
                          <label className="flex items-center text-sm font-medium text-gray-300 mb-2">
                            <FaEnvelope className="mr-2 text-violet-400" />
                            Your Email
                          </label>
                          <div className="relative">
                            <input
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              onFocus={() => setFocusedField("email")}
                              onBlur={() => setFocusedField(null)}
                              required
                              className="w-full px-4 py-3 bg-gray-800/50 rounded-lg border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-violet-500/30"
                              placeholder="your@email.com"
                            />
                            <motion.div
                              className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-violet-500 to-blue-500"
                              initial={{ width: "0%" }}
                              animate={{
                                width: focusedField === "email" ? "100%" : "0%",
                              }}
                              transition={{ duration: 0.3 }}
                            />
                          </div>
                        </div>

                        {/* Phone Field */}
                        <div className="relative">
                          <label className="flex items-center text-sm font-medium text-gray-300 mb-2">
                            <FaPhone className="mr-2 text-blue-400" />
                            Phone Number
                          </label>
                          <div className="relative">
                            <input
                              type="tel"
                              name="phone"
                              value={formData.phone}
                              onChange={handleChange}
                              onFocus={() => setFocusedField("phone")}
                              onBlur={() => setFocusedField(null)}
                              className="w-full px-4 py-3 bg-gray-800/50 rounded-lg border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30"
                              placeholder="+91 XXXXXXXXXX"
                            />
                            <motion.div
                              className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500"
                              initial={{ width: "0%" }}
                              animate={{
                                width: focusedField === "phone" ? "100%" : "0%",
                              }}
                              transition={{ duration: 0.3 }}
                            />
                          </div>
                        </div>

                        {/* Subject Field */}
                        <div className="relative">
                          <label className="flex items-center text-sm font-medium text-gray-300 mb-2">
                            <MdSubject className="mr-2 text-cyan-400" />
                            Subject
                          </label>
                          <div className="relative">
                            <input
                              type="text"
                              name="subject"
                              value={formData.subject}
                              onChange={handleChange}
                              onFocus={() => setFocusedField("subject")}
                              onBlur={() => setFocusedField(null)}
                              required
                              className="w-full px-4 py-3 bg-gray-800/50 rounded-lg border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/30"
                              placeholder="How can we help you?"
                            />
                            <motion.div
                              className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-cyan-500 to-rose-500"
                              initial={{ width: "0%" }}
                              animate={{
                                width:
                                  focusedField === "subject" ? "100%" : "0%",
                              }}
                              transition={{ duration: 0.3 }}
                            />
                          </div>
                        </div>
                      </div>

                      {/* Message Field */}
                      <div className="relative">
                        <label className="flex items-center text-sm font-medium text-gray-300 mb-2">
                          <MdMessage className="mr-2 text-rose-400" />
                          Your Message
                        </label>
                        <div className="relative">
                          <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            onFocus={() => setFocusedField("message")}
                            onBlur={() => setFocusedField(null)}
                            required
                            rows={5}
                            className="w-full px-4 py-3 bg-gray-800/50 rounded-lg border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-rose-500/30 resize-none"
                            placeholder="Tell us how we can help you or how you'd like to collaborate with NSS NIT Jamshedpur..."
                          />
                          <motion.div
                            className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-rose-500 via-violet-500 to-cyan-500"
                            initial={{ width: "0%" }}
                            animate={{
                              width: focusedField === "message" ? "100%" : "0%",
                            }}
                            transition={{ duration: 0.3 }}
                          />
                        </div>
                      </div>

                      {/* Submit Button */}
                      <motion.button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-4 px-6 bg-gradient-to-r from-rose-500 via-violet-500 to-blue-600 text-white font-medium rounded-lg flex items-center justify-center space-x-2 shadow-lg shadow-rose-500/10 hover:shadow-violet-500/30 disabled:opacity-70 disabled:cursor-not-allowed overflow-hidden relative"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <span className="relative z-10">
                          {isSubmitting ? (
                            <div className="flex items-center justify-center">
                              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-3"></div>
                              <span>Sending Message...</span>
                            </div>
                          ) : (
                            <div className="flex items-center justify-center">
                              <FaPaperPlane className="mr-2" />
                              <span>Send Message</span>
                            </div>
                          )}
                        </span>
                      </motion.button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Information Cards */}
      <section className="py-16 relative">
        <motion.div
          className="absolute inset-0 -z-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-violet-800/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-rose-800/10 rounded-full blur-3xl"></div>
        </motion.div>

        <div className="container mx-auto px-6">
          <div className="max-w-lg mx-auto text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="inline-block px-4 py-1.5 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full text-blue-300 font-medium text-sm mb-4 border border-blue-500/20"
            >
                <FaHandsHelping className="inline-block mr-2 text-lg" />
              How to Reach Us
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-cyan-300"
            >
              Get in Touch With Our Team
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="text-gray-300"
            >
              We're always eager to hear from you. Find the best way to connect
              with our NSS unit through any of these channels.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactCards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{
                  y: -10,
                  transition: { duration: 0.3 },
                }}
                onHoverStart={() => setHoverCard(index)}
                onHoverEnd={() => setHoverCard(null)}
                className="relative rounded-xl overflow-hidden group"
              >
                <div
                  className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
                  style={{
                    backgroundImage: `radial-gradient(circle at center, ${
                      index === 0
                        ? "rgba(244,63,94,0.2)"
                        : index === 1
                        ? "rgba(139,92,246,0.2)"
                        : index === 2
                        ? "rgba(59,130,246,0.2)"
                        : "rgba(34,211,238,0.2)"
                    }, transparent 70%)`,
                  }}
                ></div>

                <div
                  className="bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-xl p-8 h-full flex flex-col items-center text-center group transition-all duration-300 hover:border-opacity-50 hover:shadow-xl"
                  style={{
                    borderColor:
                      hoverCard === index
                        ? index === 0
                          ? "rgb(244,63,94)"
                          : index === 1
                          ? "rgb(139,92,246)"
                          : index === 2
                          ? "rgb(59,130,246)"
                          : "rgb(34,211,238)"
                        : "",
                  }}
                >
                  <div
                    className={`p-4 rounded-full mb-6 bg-gradient-to-br ${card.color}`}
                  >
                    {card.icon}
                  </div>

                  <h3 className="text-xl font-semibold mb-3">{card.title}</h3>
                  <p className="text-gray-400 mb-6 flex-grow">{card.content}</p>

                  <a
                    href={card.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center transition-colors duration-300"
                    style={{
                      color:
                        index === 0
                          ? "rgb(244,63,94)"
                          : index === 1
                          ? "rgb(139,92,246)"
                          : index === 2
                          ? "rgb(59,130,246)"
                          : "rgb(34,211,238)",
                    }}
                  >
                    <span>{card.action}</span>
                    <FaArrowRight className="ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
