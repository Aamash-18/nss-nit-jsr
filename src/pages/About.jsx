import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  FaHandsHelping,
  FaLightbulb,
  FaHistory,
  FaBalanceScale,
  FaUsers,
  FaGlobeAsia,
  FaChevronDown,
  FaMedal,
  FaHandHoldingHeart,
  FaSeedling,
  FaGraduationCap,
  FaHeartbeat,
} from "react-icons/fa";
import SEO from "../components/SEO";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate= useNavigate();
  // State for mobile menu
  const [activeSection, setActiveSection] = useState("hero");

  // Refs for animations
  const heroRef = useRef(null);
  const missionRef = useRef(null);
  const historyRef = useRef(null);
  const valuesRef = useRef(null);
  const impactRef = useRef(null);
  const teamRef = useRef(null);

  // Animation controls
  const heroControls = useAnimation();
  const missionControls = useAnimation();
  const historyControls = useAnimation();
  const valuesControls = useAnimation();
  const impactControls = useAnimation();
  const teamControls = useAnimation();

  // View states
  const heroInView = useInView(heroRef, { once: false, threshold: 0.2 });
  const missionInView = useInView(missionRef, { once: false, threshold: 0.2 });
  const historyInView = useInView(historyRef, { once: false, threshold: 0.3 });
  const valuesInView = useInView(valuesRef, { once: false, threshold: 0.2 });
  const impactInView = useInView(impactRef, { once: false, threshold: 0.3 });
  const teamInView = useInView(teamRef, { once: false, threshold: 0.2 });

  // Update active section based on scroll position
  useEffect(() => {
    if (heroInView) setActiveSection("hero");
    if (missionInView) setActiveSection("mission");
    if (historyInView) setActiveSection("history");
    if (valuesInView) setActiveSection("values");
    if (impactInView) setActiveSection("impact");
    if (teamInView) setActiveSection("team");
  }, [
    heroInView,
    missionInView,
    historyInView,
    valuesInView,
    impactInView,
    teamInView,
  ]);

  // Trigger animations when elements come into view
  useEffect(() => {
    if (heroInView) heroControls.start("visible");
    if (missionInView) missionControls.start("visible");
    if (historyInView) historyControls.start("visible");
    if (valuesInView) valuesControls.start("visible");
    if (impactInView) impactControls.start("visible");
    if (teamInView) teamControls.start("visible");
  }, [
    heroInView,
    missionInView,
    historyInView,
    valuesInView,
    impactInView,
    teamInView,
    heroControls,
    missionControls,
    historyControls,
    valuesControls,
    impactControls,
    teamControls,
  ]);

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] },
    },
  };

  const staggeredFadeIn = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, 0.05, 0.01, 0.9],
      },
    },
  };

  // Scroll to section function
  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };
  console.log("activeSection", activeSection);

  return (
  <>
    <SEO 
        title="About Us"
        description="Learn about NSS NIT Jamshedpur, our mission, vision, and the impact we create through community service and social initiatives."
        path="/about"
      />
  <div className="w-full overflow-hidden bg-gradient-to-b from-[#050510] via-[#0a0a1e] to-[#131330] text-white min-h-screen font-sans">
      {/* Navigation Dots */}
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50 hidden md:block">
        <div className="flex flex-col space-y-4 items-center">
          {[
            { id: "hero", label: "Home", ref: heroRef },
            { id: "mission", label: "Mission", ref: missionRef },
            { id: "history", label: "History", ref: historyRef },
            { id: "values", label: "Values", ref: valuesRef },
            { id: "impact", label: "Impact", ref: impactRef },
            { id: "team", label: "Team", ref: teamRef },
          ].map((item) => (
            <motion.div
              key={item.id}
              className="relative group cursor-pointer"
              onClick={() => scrollToSection(item.ref)}
              whileHover={{ scale: 1.2 }}
            >
              <div
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeSection === item.id
                    ? "bg-gradient-to-r from-cyan-400 to-purple-500 shadow-md shadow-purple-500/50"
                    : "bg-gray-500/40"
                }`}
              />
              <div className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                {item.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      {/* Mobile Navigation */}
      <div className="fixed right-2 top-1/2 transform -translate-y-1/2 z-50  md:hidden">
        <div className="flex flex-col space-y-4 items-center">
          {[
            {
              id: "hero",
              label: "Home",
              icon: <FaGlobeAsia className="text-lg" />,
              ref: heroRef,
            },
            {
              id: "mission",
              label: "Mission",
              icon: <FaLightbulb className="text-lg" />,
              ref: missionRef,
            },
            {
              id: "history",
              label: "History",
              icon: <FaHistory className="text-lg" />,
              ref: historyRef,
            },
            {
              id: "values",
              label: "Values",
              icon: <FaBalanceScale className="text-lg" />,
              ref: valuesRef,
            },
            {
              id: "impact",
              label: "Impact",
              icon: <FaHandsHelping className="text-lg" />,
              ref: impactRef,
            },
            {
              id: "team",
              label: "Team",
              icon: <FaUsers className="text-lg" />,
              ref: teamRef,
            },
          ].map((item) => (
            <motion.div
              key={item.id}
              className="relative group cursor-pointer"
              onClick={() => scrollToSection(item.ref)}
              whileHover={{ scale: 1.2 }}
            >
              <div
                className={` rounded-full transition-all p-2 duration-300 ${
                  activeSection === item.id
                    ? "bg-gradient-to-r from-cyan-400 to-purple-500 shadow-md shadow-purple-500/50"
                    : "bg-gray-500/40"
                }`}
              >
                 {item.icon}
              </div>
              
            </motion.div>
          ))}
        </div>
      </div>

 
      {/* Hero Section */}
      <section
        id="hero"
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden md:px-16"
      >
        {/* Background with 3D layers */}
        <div className="absolute inset-0 bg-black z-0">

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

        {/* Content Container */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Left side - Text content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/2 text-left"
            >
              {/* Organization Badge */}
              <div className="inline-flex items-center mb-6 bg-white/10 backdrop-blur-xl rounded-full py-2 px-4 border border-white/20">
                <span className="mr-2 text-rose-300">
                  <FaHandHoldingHeart size={16} />
                </span>
                <span className="text-white text-sm font-medium">
                  NSS NIT Jamshedpur
                </span>
              </div>

              {/* Main Heading */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
                <span className="block text-white">Empowering</span>
                <div className="relative inline-block">
                  <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-rose-400">
                    Communities
                  </span>
                </div>
                <span className="block text-white">Through Service</span>
              </h1>

              {/* Description */}
              <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-xl leading-relaxed">
                The National Service Scheme at NIT Jamshedpur is dedicated to
                creating positive social impact through service, responsibility,
                and sustainable development.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <motion.button
                  className="relative overflow-hidden px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg group"
                  whileHover={{
                    translateY: -4,
                    boxShadow: "0 20px 25px -5px rgba(59, 130, 246, 0.2)",
                  }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => scrollToSection(impactRef)}
                >
                  <span className="relative z-10">Discover Our Impact</span>
                  <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>

                <motion.button
                  className="px-8 py-4 bg-transparent border-2 border-rose-400/50 text-rose-300 font-medium rounded-lg hover:bg-rose-500/10"
                  whileHover={{
                    translateY: -4,
                    boxShadow: "0 20px 25px -5px rgba(244, 114, 182, 0.2)",
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  Join Our Community
                </motion.button>
              </div>
            </motion.div>

            {/* Right side - 3D Illustration */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="w-full lg:w-1/2 flex justify-center relative"
            >
              {/* Main image/illustration */}
              <div className="relative w-full max-w-lg h-96 flex items-center justify-center">
                {/* Decorative circles */}
                <motion.div
                  className="absolute w-64 h-64 rounded-full border-2 border-dashed border-cyan-500/30"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />

                <motion.div
                  className="absolute w-80 h-80 rounded-full border-2 border-dashed border-purple-500/20"
                  animate={{ rotate: -360 }}
                  transition={{
                    duration: 40,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />

                <motion.div
                  className="absolute w-96 h-96 rounded-full border-2 border-dashed border-rose-500/10"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 50,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />

                {/* NSS Logo/Symbol with glow */}
                <div className="relative z-10">
                  <motion.div
                    className="w-40 h-40 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-lg shadow-purple-600/30"
                    whileHover={{ scale: 1.05 }}
                    animate={{
                      boxShadow: [
                        "0 0 20px 5px rgba(147, 51, 234, 0.3)",
                        "0 0 40px 10px rgba(147, 51, 234, 0.5)",
                        "0 0 20px 5px rgba(147, 51, 234, 0.3)",
                      ],
                    }}
                    transition={{
                      boxShadow: { duration: 3, repeat: Infinity },
                    }}
                  >
                    <span className="text-5xl font-bold text-white">NSS</span>
                  </motion.div>

                  {/* Floating elements around the main logo */}
                  <motion.div
                    className="absolute -top-8 -right-4 w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center shadow-lg shadow-cyan-500/30"
                    animate={{
                      y: [0, -10, 0],
                      rotate: [0, 10, 0],
                    }}
                    transition={{ duration: 5, repeat: Infinity }}
                  >
                    <FaHandHoldingHeart size={32} className="text-white" />
                  </motion.div>

                  <motion.div
                    className="absolute -bottom-4 -left-8 w-20 h-20 bg-gradient-to-br from-rose-500 to-purple-500 rounded-lg flex items-center justify-center shadow-lg shadow-rose-500/30"
                    animate={{
                      y: [0, 10, 0],
                      rotate: [0, -5, 0],
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    <FaUsers size={40} className="text-white" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <motion.div
            className="flex flex-col items-center cursor-pointer"
            onClick={() => scrollToSection(missionRef)}
            whileHover={{ y: -2 }}
          >
            <span className="text-white/70 text-sm mb-2">Explore More</span>
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 4L12 20M12 20L18 14M12 20L6 14"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
      {/* Mission & Vision Section */}
      <section
        ref={missionRef}
        className="py-20 relative overflow-hidden"
        id="mission"
      >
        {/* Decorative elements */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500 rounded-full filter blur-[120px] opacity-10"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500 rounded-full filter blur-[150px] opacity-10"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.18, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />

        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial="hidden"
            animate={missionControls}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <motion.span
              className="inline-block py-1 px-3 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-sm font-medium text-cyan-300 mb-6 backdrop-blur-md border border-cyan-500/20"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 15px rgba(34, 211, 238, 0.4)",
              }}
              transition={{ duration: 0.3 }}
            >
              <FaLightbulb className="inline-block mr-2" />
              Our Purpose
            </motion.span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Mission & Vision
            </h2>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "30%" }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                delay: 0.5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="h-1 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 mx-auto mb-8"
            />
            <p className="text-gray-300 max-w-2xl mx-auto text-lg">
              Guiding principles that drive our commitment to community service
              and social responsibility.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Mission */}
            <motion.div
              variants={cardVariants}
              initial="hidden"
              animate={missionControls}
              whileHover="hover"
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-500"></div>
              <div className="relative bg-[#0a0a20]/80 backdrop-blur-lg rounded-2xl p-8 border border-cyan-500/10 transition-all duration-500 group-hover:border-cyan-500/30 overflow-hidden z-10">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-cyan-500/20">
                    <FaHandsHelping className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white group-hover:text-cyan-300 transition-colors duration-300">
                    Our Mission
                  </h3>

                  <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300 mb-4">
                    The mission of NSS NIT Jamshedpur is to provide hands-on
                    experience to young students in delivering community
                    service. We aim to develop among them a sense of social and
                    civic responsibility, and to utilize their knowledge in
                    finding practical solutions to community problems.
                  </p>

                  <div className="mt-6 space-y-3">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-5 h-5 bg-cyan-500/20 rounded-full flex items-center justify-center mt-1">
                        <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                      </div>
                      <p className="ml-3 text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                        <span className="text-cyan-400 font-medium">
                          Community Development:
                        </span>{" "}
                        Identifying and addressing local needs
                      </p>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-5 h-5 bg-cyan-500/20 rounded-full flex items-center justify-center mt-1">
                        <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                      </div>
                      <p className="ml-3 text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                        <span className="text-cyan-400 font-medium">
                          Education Enhancement:
                        </span>{" "}
                        Supporting learning in underserved areas
                      </p>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-5 h-5 bg-cyan-500/20 rounded-full flex items-center justify-center mt-1">
                        <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                      </div>
                      <p className="ml-3 text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                        <span className="text-cyan-400 font-medium">
                          Civic Engagement:
                        </span>{" "}
                        Fostering active citizenship among students
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Vision */}
            <motion.div
              variants={cardVariants}
              initial="hidden"
              animate={missionControls}
              whileHover="hover"
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-500"></div>
              <div className="relative bg-[#0a0a20]/80 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/10 transition-all duration-500 group-hover:border-purple-500/30 overflow-hidden z-10">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-purple-500/20">
                    <FaGlobeAsia className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white group-hover:text-purple-300 transition-colors duration-300">
                    Our Vision
                  </h3>

                  <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300 mb-4">
                    Our vision is to build a generation of young individuals who
                    are socially responsible, environmentally conscious, and
                    committed to serving the nation. We envision a society where
                    youth are actively engaged in addressing social challenges
                    and contributing to sustainable development.
                  </p>

                  <div className="mt-6 space-y-3">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-5 h-5 bg-purple-500/20 rounded-full flex items-center justify-center mt-1">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      </div>
                      <p className="ml-3 text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                        <span className="text-purple-400 font-medium">
                          Empowered Youth:
                        </span>{" "}
                        Developing leaders for tomorrow
                      </p>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-5 h-5 bg-purple-500/20 rounded-full flex items-center justify-center mt-1">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      </div>
                      <p className="ml-3 text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                        <span className="text-purple-400 font-medium">
                          Sustainable Communities:
                        </span>{" "}
                        Creating lasting positive impact
                      </p>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-5 h-5 bg-purple-500/20 rounded-full flex items-center justify-center mt-1">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      </div>
                      <p className="ml-3 text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                        <span className="text-purple-400 font-medium">
                          Inclusive Growth:
                        </span>{" "}
                        Ensuring no one is left behind
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section
        ref={historyRef}
        className="py-20 relative overflow-hidden"
        id="history"
      >
        {/* Decorative background elements */}
        <div className="absolute inset-0 bg-[#080818] z-0"></div>
        <motion.div
          className="absolute top-1/3 left-1/3 w-64 h-64 bg-amber-500 rounded-full filter blur-[120px] opacity-10"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-orange-500 rounded-full filter blur-[150px] opacity-10"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <motion.div
            initial="hidden"
            animate={historyControls}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <motion.span
              className="inline-block py-1 px-3 rounded-full bg-gradient-to-r from-amber-500/20 to-orange-500/20 text-sm font-medium text-amber-300 mb-6 backdrop-blur-md border border-amber-500/20"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 15px rgba(251, 191, 36, 0.4)",
              }}
              transition={{ duration: 0.3 }}
            >
              <FaHistory className="inline-block mr-2" />
              Our Journey
            </motion.span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-orange-500">
              Our History
            </h2>
            <motion.div
              className="h-1 bg-gradient-to-r from-amber-600/70 to-orange-500 mx-auto mb-8"
              initial={{ width: 0 }}
              animate={{ width: "22%" }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                delay: 0.5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
            <p className="text-gray-300 max-w-3xl mx-auto text-lg">
              The journey of NSS at NIT Jamshedpur has been one of growth,
              impact, and transformation.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-amber-400 to-orange-500 opacity-60 hidden md:block"></div>

            {/* Timeline Items */}
            <div className="space-y-16">
              {/* Item 1 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="relative"
              >
                <motion.div
                  className="absolute md:left-[49%] hidden md:flex   transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full  items-center justify-center z-10"
                  whileInView={{
                    scale: [0.5, 1.2, 1],
                    boxShadow: "0 0 20px rgba(251, 191, 36, 0.5)",
                  }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="md:text-right md:pr-12 order-1 md:order-1">
                    <motion.div
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.7, delay: 0.3 }}
                    >
                      <h3 className="text-xl md:text-2xl font-bold text-amber-300 mb-2">
                        Establishment
                      </h3>
                      <p className="text-gray-400">2005</p>
                    </motion.div>
                  </div>
                  <motion.div
                    className="bg-[#0a0a20]/80 backdrop-blur-lg rounded-xl p-6 border border-amber-500/20 order-2 md:order-2"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    whileHover={{ y: -5 }}
                  >
                    <p className="text-gray-300">
                      NSS NIT Jamshedpur was established with 50 volunteers,
                      marking the beginning of our journey in community service.
                    </p>
                  </motion.div>
                </div>
              </motion.div>

              {/* Item 2 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="relative"
              >
                <motion.div
                  className="absolute left-[49%] hidden md:flex transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full  items-center justify-center z-10"
                  whileInView={{
                    scale: [0.5, 1.2, 1],
                    boxShadow: "0 0 20px rgba(251, 191, 36, 0.5)",
                  }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="md:text-left md:pl-12 order-1 md:order-2">
                    <motion.div
                      initial={{ opacity: 0, x: 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.7, delay: 0.3 }}
                    >
                      <h3 className="text-xl md:text-2xl font-bold text-amber-300 mb-2">
                        First Major Initiative
                      </h3>
                      <p className="text-gray-400">2008</p>
                    </motion.div>
                  </div>
                  <motion.div
                    className="bg-[#0a0a20]/80 backdrop-blur-lg rounded-xl p-6 border border-amber-500/20 order-2 md:order-1"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    whileHover={{ y: -5 }}
                  >
                    <p className="text-gray-300">
                      Launched our first major literacy program, teaching basic
                      reading and writing skills to over 200 children in nearby
                      villages.
                    </p>
                  </motion.div>
                </div>
              </motion.div>

              {/* Item 3 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="relative"
              >
                <motion.div
                  className="absolute left-[49%] hidden md:flex transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full items-center justify-center z-10"
                  whileInView={{
                    scale: [0.5, 1.2, 1],
                    boxShadow: "0 0 20px rgba(251, 191, 36, 0.5)",
                  }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="md:text-right md:pr-12 order-1 md:order-1">
                    <motion.div
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.7, delay: 0.3 }}
                    >
                      <h3 className="text-xl md:text-2xl font-bold text-amber-300 mb-2">
                        Expansion
                      </h3>
                      <p className="text-gray-400">2012</p>
                    </motion.div>
                  </div>
                  <motion.div
                    className="bg-[#0a0a20]/80 backdrop-blur-lg rounded-xl p-6 border border-amber-500/20 order-2 md:order-2"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    whileHover={{ y: -5 }}
                  >
                    <p className="text-gray-300">
                      Expanded our volunteer base to 150 students and initiated
                      environmental sustainability projects across campus and
                      local communities.
                    </p>
                  </motion.div>
                </div>
              </motion.div>

              {/* Item 4 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="relative"
              >
                <motion.div
                  className="absolute left-[49%] hidden md:flex  transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full items-center justify-center z-10"
                  whileInView={{
                    scale: [0.5, 1.2, 1],
                    boxShadow: "0 0 20px rgba(251, 191, 36, 0.5)",
                  }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="md:text-left md:pl-12 order-1 md:order-2">
                    <motion.div
                      initial={{ opacity: 0, x: 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.7, delay: 0.3 }}
                    >
                      <h3 className="text-xl md:text-2xl font-bold text-amber-300 mb-2">
                        National Recognition
                      </h3>
                      <p className="text-gray-400">2016</p>
                    </motion.div>
                  </div>
                  <motion.div
                    className="bg-[#0a0a20]/80 backdrop-blur-lg rounded-xl p-6 border border-amber-500/20 order-2 md:order-1"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    whileHover={{ y: -5 }}
                  >
                    <p className="text-gray-300">
                      Received national recognition for our "Digital Literacy
                      for Rural Youth" program, impacting over 500
                      beneficiaries.
                    </p>
                  </motion.div>
                </div>
              </motion.div>

              {/* Item 5 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="relative"
              >
                <motion.div
                  className="absolute left-[49%] hidden md:flex  transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full  items-center justify-center z-10"
                  whileInView={{
                    scale: [0.5, 1.2, 1],
                    boxShadow: "0 0 20px rgba(251, 191, 36, 0.5)",
                  }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="md:text-right md:pr-12 order-1 md:order-1">
                    <motion.div
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.7, delay: 0.3 }}
                    >
                      <h3 className="text-xl md:text-2xl font-bold text-amber-300 mb-2">
                        Present Day
                      </h3>
                      <p className="text-gray-400">2023</p>
                    </motion.div>
                  </div>
                  <motion.div
                    className="bg-[#0a0a20]/80 backdrop-blur-lg rounded-xl p-6 border border-amber-500/20 order-2 md:order-2"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    whileHover={{ y: -5 }}
                  >
                    <p className="text-gray-300">
                      Now with 300+ active volunteers, we run multiple
                      initiatives in education, healthcare, environment, and
                      women empowerment, touching thousands of lives annually.
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section
        ref={valuesRef}
        className="py-20 relative overflow-hidden"
        id="values"
      >
        {/* Decorative elements */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-green-500 rounded-full filter blur-[120px] opacity-10"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-teal-500 rounded-full filter blur-[150px] opacity-10"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.18, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />

        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial="hidden"
            animate={valuesControls}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <motion.span
              className="inline-block py-1 px-3 rounded-full bg-gradient-to-r from-green-500/20 to-teal-500/20 text-sm font-medium text-green-300 mb-6 backdrop-blur-md border border-green-500/20"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 15px rgba(74, 222, 128, 0.4)",
              }}
              transition={{ duration: 0.3 }}
            >
              <FaBalanceScale className="inline-block mr-2" />
              Our Foundation
            </motion.span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-teal-500">
              Core Values
            </h2>
            <motion.div
              className="h-1 bg-gradient-to-r from-green-400 to-teal-500 mx-auto mb-8"
              initial={{ width: 0 }}
              animate={{ width: "25%" }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                delay: 0.5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
            <p className="text-gray-300 max-w-3xl mx-auto text-lg">
              These principles guide every decision we make and every action we
              take as an organization.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            animate={valuesControls}
            variants={staggeredFadeIn}
          >
            {/* Value 1 */}
            <motion.div
              variants={cardVariants}
              className="relative group"
              whileHover="hover"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-600/20 to-teal-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-500"></div>
              <div className="relative bg-[#0a0a20]/80 backdrop-blur-lg rounded-2xl p-8 border border-green-500/10 transition-all duration-500 group-hover:border-green-500/30 overflow-hidden z-10 h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10 h-full flex flex-col">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-green-500/20">
                    <FaHandHoldingHeart className="w-6 h-6 text-white" />
                  </div>

                  <h3 className="text-xl font-bold mb-4 text-white group-hover:text-green-300 transition-colors duration-300">
                    Service to Society
                  </h3>

                  <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300 mb-4 flex-grow">
                    We believe in selfless service to humanity, putting the
                    needs of others before our own and working towards the
                    betterment of society.
                  </p>

                  <div className="mt-auto">
                    <div className="w-full h-0.5 bg-green-500/20 mb-4"></div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                      <span className="text-xs text-green-400">
                        Guiding Principle
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Value 2 */}
            <motion.div
              variants={cardVariants}
              className="relative group"
              whileHover="hover"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-600/20 to-teal-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-500"></div>
              <div className="relative bg-[#0a0a20]/80 backdrop-blur-lg rounded-2xl p-8 border border-green-500/10 transition-all duration-500 group-hover:border-green-500/30 overflow-hidden z-10 h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10 h-full flex flex-col">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-green-500/20">
                    <FaUsers className="w-6 h-6 text-white" />
                  </div>

                  <h3 className="text-xl font-bold mb-4 text-white group-hover:text-green-300 transition-colors duration-300">
                    Community First
                  </h3>

                  <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300 mb-4 flex-grow">
                    Our work is centered around the needs of the communities we
                    serve. We listen, learn, and collaborate to create
                    meaningful impact.
                  </p>

                  <div className="mt-auto">
                    <div className="w-full h-0.5 bg-green-500/20 mb-4"></div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                      <span className="text-xs text-green-400">Core Ethos</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Value 3 */}
            <motion.div
              variants={cardVariants}
              className="relative group"
              whileHover="hover"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-600/20 to-teal-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-500"></div>
              <div className="relative bg-[#0a0a20]/80 backdrop-blur-lg rounded-2xl p-8 border border-green-500/10 transition-all duration-500 group-hover:border-green-500/30 overflow-hidden z-10 h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10 h-full flex flex-col">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-green-500/20">
                    <FaSeedling className="w-6 h-6 text-white" />
                  </div>

                  <h3 className="text-xl font-bold mb-4 text-white group-hover:text-green-300 transition-colors duration-300">
                    Sustainable Impact
                  </h3>

                  <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300 mb-4 flex-grow">
                    We focus on creating sustainable solutions that have
                    long-term positive effects, rather than temporary fixes.
                  </p>

                  <div className="mt-auto">
                    <div className="w-full h-0.5 bg-green-500/20 mb-4"></div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                      <span className="text-xs text-green-400">
                        Strategic Focus
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Value 4 */}
            <motion.div
              variants={cardVariants}
              className="relative group"
              whileHover="hover"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-600/20 to-teal-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-500"></div>
              <div className="relative bg-[#0a0a20]/80 backdrop-blur-lg rounded-2xl p-8 border border-green-500/10 transition-all duration-500 group-hover:border-green-500/30 overflow-hidden z-10 h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10 h-full flex flex-col">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-green-500/20">
                    <FaGraduationCap className="w-6 h-6 text-white" />
                  </div>

                  <h3 className="text-xl font-bold mb-4 text-white group-hover:text-green-300 transition-colors duration-300">
                    Youth Empowerment
                  </h3>

                  <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300 mb-4 flex-grow">
                    We empower young volunteers with leadership opportunities,
                    fostering their personal and professional growth through
                    service.
                  </p>

                  <div className="mt-auto">
                    <div className="w-full h-0.5 bg-green-500/20 mb-4"></div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                      <span className="text-xs text-green-400">
                        Key Objective
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Value 5 */}
            <motion.div
              variants={cardVariants}
              className="relative group"
              whileHover="hover"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-600/20 to-teal-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-500"></div>
              <div className="relative bg-[#0a0a20]/80 backdrop-blur-lg rounded-2xl p-8 border border-green-500/10 transition-all duration-500 group-hover:border-green-500/30 overflow-hidden z-10 h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10 h-full flex flex-col">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-green-500/20">
                    <FaHeartbeat className="w-6 h-6 text-white" />
                  </div>

                  <h3 className="text-xl font-bold mb-4 text-white group-hover:text-green-300 transition-colors duration-300">
                    Compassion
                  </h3>

                  <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300 mb-4 flex-grow">
                    We approach all our work with empathy and kindness, treating
                    every individual with dignity and respect.
                  </p>

                  <div className="mt-auto">
                    <div className="w-full h-0.5 bg-green-500/20 mb-4"></div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                      <span className="text-xs text-green-400">
                        Fundamental Value
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Value 6 */}
            <motion.div
              variants={cardVariants}
              className="relative group"
              whileHover="hover"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-600/20 to-teal-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-500"></div>
              <div className="relative bg-[#0a0a20]/80 backdrop-blur-lg rounded-2xl p-8 border border-green-500/10 transition-all duration-500 group-hover:border-green-500/30 overflow-hidden z-10 h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10 h-full flex flex-col">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-green-500/20">
                    <FaMedal className="w-6 h-6 text-white" />
                  </div>

                  <h3 className="text-xl font-bold mb-4 text-white group-hover:text-green-300 transition-colors duration-300">
                    Excellence
                  </h3>

                  <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300 mb-4 flex-grow">
                    We strive for excellence in all our initiatives,
                    continuously improving our programs to maximize positive
                    impact.
                  </p>

                  <div className="mt-auto">
                    <div className="w-full h-0.5 bg-green-500/20 mb-4"></div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                      <span className="text-xs text-green-400">
                        Operational Standard
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Impact Section */}
      <section
        ref={impactRef}
        className="py-20 relative overflow-hidden"
        id="impact"
      >
        {/* Decorative background elements */}
        <div className="absolute inset-0 bg-[#080818] z-0"></div>
        <motion.div
          className="absolute top-1/3 left-1/3 w-64 h-64 bg-pink-500 rounded-full filter blur-[120px] opacity-10"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-purple-500 rounded-full filter blur-[150px] opacity-10"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <motion.div
            initial="hidden"
            animate={impactControls}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <motion.span
              className="inline-block py-1 px-3 rounded-full bg-gradient-to-r from-pink-500/20 to-purple-500/20 text-sm font-medium text-pink-300 mb-6 backdrop-blur-md border border-pink-500/20"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 15px rgba(236, 72, 153, 0.4)",
              }}
              transition={{ duration: 0.3 }}
            >
              <FaHandsHelping className="inline-block mr-2" />
              Our Reach
            </motion.span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-500">
              Our Impact
            </h2>
            <motion.div
              className="h-1 bg-gradient-to-r from-pink-400 to-purple-500 mx-auto mb-8"
              initial={{ width: 0 }}
              animate={{ width: "25%" }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                delay: 0.5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
            <p className="text-gray-300 max-w-3xl mx-auto text-lg">
              The tangible difference we've made in communities through our
              dedicated efforts.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
            initial="hidden"
            animate={impactControls}
            variants={staggeredFadeIn}
          >
            {/* Stat 1 */}
            <motion.div
              variants={cardVariants}
              className="relative group"
              whileHover="hover"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-pink-600/20 to-purple-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-500"></div>
              <div className="relative bg-[#0a0a20]/80 backdrop-blur-lg rounded-2xl p-8 border border-pink-500/10 transition-all duration-500 group-hover:border-pink-500/30 overflow-hidden z-10">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10 text-center">
                  <motion.div
                    className="text-5xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-500"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    500+
                  </motion.div>
                  <h3 className="text-xl font-medium text-gray-300 mb-4">
                    Volunteers
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Active student volunteers contributing to community
                    development
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Stat 2 */}
            <motion.div
              variants={cardVariants}
              className="relative group"
              whileHover="hover"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-pink-600/20 to-purple-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-500"></div>
              <div className="relative bg-[#0a0a20]/80 backdrop-blur-lg rounded-2xl p-8 border border-pink-500/10 transition-all duration-500 group-hover:border-pink-500/30 overflow-hidden z-10">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10 text-center">
                  <motion.div
                    className="text-5xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-500"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    50+
                  </motion.div>
                  <h3 className="text-xl font-medium text-gray-300 mb-4">
                    Villages
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Communities positively impacted by our initiatives
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Stat 3 */}
            <motion.div
              variants={cardVariants}
              className="relative group"
              whileHover="hover"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-pink-600/20 to-purple-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-500"></div>
              <div className="relative bg-[#0a0a20]/80 backdrop-blur-lg rounded-2xl p-8 border border-pink-500/10 transition-all duration-500 group-hover:border-pink-500/30 overflow-hidden z-10">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10 text-center">
                  <motion.div
                    className="text-5xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-500"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                  >
                    10K+
                  </motion.div>
                  <h3 className="text-xl font-medium text-gray-300 mb-4">
                    Lives Touched
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Individuals benefiting from our programs annually
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            initial="hidden"
            animate={impactControls}
            variants={staggeredFadeIn}
          >
            {/* Impact Story 1 */}
            <motion.div
              variants={cardVariants}
              className="relative group"
              whileHover="hover"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-pink-600/20 to-purple-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-500"></div>
              <div className="relative bg-[#0a0a20]/80 backdrop-blur-lg rounded-2xl p-8 border border-pink-500/10 transition-all duration-500 group-hover:border-pink-500/30 overflow-hidden z-10">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mr-4 transform group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-pink-500/20">
                      <FaGraduationCap className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-pink-300 transition-colors duration-300">
                      Education for All
                    </h3>
                  </div>

                  <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300 mb-4">
                    Our "Shiksha for All" initiative has provided free education
                    to over 2,000 underprivileged children in rural areas around
                    Jamshedpur. We've established 15 learning centers and
                    trained 200 volunteers as tutors.
                  </p>

                  <div className="mt-6">
                    <div className="w-full bg-gray-800 rounded-full h-2 mb-2">
                      <motion.div
                        className="bg-gradient-to-r from-pink-500 to-purple-600 h-2 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: "85%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 2, delay: 0.5 }}
                      />
                    </div>
                    <div className="flex justify-between text-xs text-gray-400">
                      <span>2018</span>
                      <span>85% Literacy Improvement</span>
                      <span>2023</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Impact Story 2 */}
            <motion.div
              variants={cardVariants}
              className="relative group"
              whileHover="hover"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-pink-600/20 to-purple-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-500"></div>
              <div className="relative bg-[#0a0a20]/80 backdrop-blur-lg rounded-2xl p-8 border border-pink-500/10 transition-all duration-500 group-hover:border-pink-500/30 overflow-hidden z-10">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mr-4 transform group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-pink-500/20">
                      <FaSeedling className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-pink-300 transition-colors duration-300">
                      Green Campus Initiative
                    </h3>
                  </div>

                  <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300 mb-4">
                    Our environmental program has planted over 5,000 trees on
                    campus and surrounding areas, reduced plastic waste by 70%,
                    and installed solar panels generating 50KW of clean energy.
                    The initiative has won 3 national awards.
                  </p>

                  <div className="mt-6">
                    <div className="w-full bg-gray-800 rounded-full h-2 mb-2">
                      <motion.div
                        className="bg-gradient-to-r from-pink-500 to-purple-600 h-2 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: "92%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 2, delay: 0.7 }}
                      />
                    </div>
                    <div className="flex justify-between text-xs text-gray-400">
                      <span>2019</span>
                      <span>92% Waste Reduction</span>
                      <span>2023</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section
  ref={teamRef}
  className="py-20 relative overflow-hidden"
  id="team"
>
  {/* Decorative elements */}
  <motion.div
    className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full filter blur-[120px] opacity-10"
    animate={{
      scale: [1, 1.2, 1],
      opacity: [0.1, 0.15, 0.1],
    }}
    transition={{
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />
  <motion.div
    className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-500 rounded-full filter blur-[150px] opacity-10"
    animate={{
      scale: [1, 1.3, 1],
      opacity: [0.1, 0.18, 0.1],
    }}
    transition={{
      duration: 10,
      repeat: Infinity,
      ease: "easeInOut",
      delay: 2,
    }}
  />

  <section className="container mx-auto px-6 md:px-12">
    <motion.div
      initial="hidden"
      animate={teamControls}
      variants={fadeInUp}
      className="text-center mb-16"
    >
      <motion.span
        className="inline-block py-1 px-3 rounded-full bg-gradient-to-r from-blue-500/20 to-indigo-500/20 text-sm font-medium text-blue-300 mb-6 backdrop-blur-md border border-blue-500/20"
        whileHover={{
          scale: 1.05,
          boxShadow: "0 0 15px rgba(59, 130, 246, 0.4)",
        }}
        transition={{ duration: 0.3 }}
      >
        <FaUsers className="inline-block mr-2" />
        Our People
      </motion.span>
      <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500">
        Meet Our Team
      </h2>
      <motion.div
        className="h-1 bg-gradient-to-r from-blue-400 to-indigo-500 mx-auto mb-8"
        initial={{ width: 0 }}
        animate={{ width: "25%" }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          delay: 0.5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <p className="text-gray-300 max-w-3xl mx-auto text-lg">
        The passionate individuals who lead our initiatives and drive our
        mission forward.
      </p>
    </motion.div>

    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
      initial="hidden"
      animate={teamControls}
      variants={staggeredFadeIn}
    >
      {/* Team Member 1 - Professor Incharge */}
      <motion.div
        variants={cardVariants}
        className="relative group"
        whileHover="hover"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-indigo-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-500"></div>
        <div className="relative bg-[#0a0a20]/80 backdrop-blur-lg rounded-2xl p-6 border border-blue-500/10 transition-all duration-500 group-hover:border-blue-500/30 overflow-hidden z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          <div className="relative z-10 text-center">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-2 border-blue-500/20 group-hover:border-blue-500/50 transition-all duration-500">
              <img
                src="/core-team/dr-jayendra-kumar.webp"
                alt="Dr. Jayendra Kumar"
                className="w-full h-full object-cover"
              />
            </div>

            <h3 className="text-xl font-bold text-white mb-1">
              Dr. Jayendra Kumar
            </h3>
            <p className="text-blue-400 text-sm mb-4">Professor Incharge</p>

            <p className="text-gray-400 text-sm mb-6">
              Electronics and Communication Engineering faculty leading the NSS unit at NIT Jamshedpur .
            </p>

            <div className="flex justify-center space-x-4">
            <a
                href="https://www.linkedin.com/in/shifan-akram-343326264?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a
                href="#"
                className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Team Member 2 - President */}
      <motion.div
        variants={cardVariants}
        className="relative group"
        whileHover="hover"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-indigo-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-500"></div>
        <div className="relative bg-[#0a0a20]/80 backdrop-blur-lg rounded-2xl p-6 border border-blue-500/10 transition-all duration-500 group-hover:border-blue-500/30 overflow-hidden z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          <div className="relative z-10 text-center">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-2 border-blue-500/20 group-hover:border-blue-500/50 transition-all duration-500">
              <img
                src="/core-team/shifan-akram.webp"
                alt="Shifan Akram"
                className="w-full h-full object-cover"
              />
            </div>

            <h3 className="text-xl font-bold text-white mb-1">
              Shifan Akram
            </h3>
            <p className="text-blue-400 text-sm mb-4">President</p>

            <p className="text-gray-400 text-sm mb-6">
              B.Tech, Civil Engineering student leading the NSS activities with passion for social impact and community service .
            </p>

            <div className="flex justify-center space-x-4">
              <a
                href="https://www.linkedin.com/in/shifan-akram-343326264?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a
                href="#"
                className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Team Member 3 - Vice President */}
      <motion.div
        variants={cardVariants}
        className="relative group"
        whileHover="hover"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-indigo-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-500"></div>
        <div className="relative bg-[#0a0a20]/80 backdrop-blur-lg rounded-2xl p-6 border border-blue-500/10 transition-all duration-500 group-hover:border-blue-500/30 overflow-hidden z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          <div className="relative z-10 text-center">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-2 border-blue-500/20 group-hover:border-blue-500/50 transition-all duration-500">
              <img
                src="/core-team/Shyamli Rupam.webp"
                alt="Shyamali Rupam"
                className="w-full h-full object-cover"
              />
            </div>

            <h3 className="text-xl font-bold text-white mb-1">
              Shyamali Rupam
            </h3>
            <p className="text-blue-400 text-sm mb-4">Vice President</p>

            <p className="text-gray-400 text-sm mb-6">
              B.Tech, Electronics and Communication Engineering student responsible for coordinating NSS .
            </p>

            <div className="flex justify-center space-x-4">
              <a
                href="https://www.linkedin.com/in/shyamli-rupam?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a
                href="#"
                className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Team Member 4 - Web Head */}
      <motion.div
  variants={cardVariants}
  className="relative group"
  whileHover="hover"
>
  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-indigo-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-500"></div>
  
  <div className="relative bg-[#0a0a20]/80 backdrop-blur-lg rounded-2xl p-6 border border-blue-500/10 transition-all duration-500 group-hover:border-blue-500/30 overflow-hidden z-10">
    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

    <div className="relative z-10 text-center">
      <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-2 border-blue-500/20 group-hover:border-blue-500/50 transition-all duration-500">
        <img
          src="/core-team/gourab-bistu.webp"
          alt="Gourab Bistu"
          className="w-full h-full object-cover"
        />
      </div>

      <h3 className="text-xl font-bold text-white mb-1">Gourab Bistu</h3>
      <p className="text-blue-400 text-sm mb-4">Web Head</p>

      <p className="text-gray-400 text-sm mb-6">
        Master of Computer Applications student leading the web development team for NSS digital initiatives.
      </p>

      <div className="flex justify-center space-x-4">
              <a
                href="https://www.linkedin.com/in/shyamli-rupam?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a
                href="#"
                className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
            </div>
    </div>
  </div>
</motion.div>

</motion.div>

</section>

<motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <motion.button
              className="px-6 py-3 bg-transparent border border-blue-500 rounded-full text-blue-400 font-medium hover:bg-blue-500/10 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/team")}
            >
              Meet All Team Members
            </motion.button>
          </motion.div>
</section>

     

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 to-blue-900/30 z-0"></div>
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500 rounded-full filter blur-[120px] opacity-10"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500 rounded-full filter blur-[150px] opacity-10"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.18, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <motion.div
            className="bg-[#0a0a20]/80 backdrop-blur-lg rounded-2xl p-8 md:p-12 border border-purple-500/20 overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center max-w-3xl mx-auto">
              <motion.span
                className="inline-block py-1 px-3 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-sm font-medium text-purple-300 mb-6 backdrop-blur-md border border-purple-500/20"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 15px rgba(168, 85, 247, 0.4)",
                }}
                transition={{ duration: 0.3 }}
              >
                <FaHandsHelping className="inline-block mr-2" />
                Join Our Movement
              </motion.span>

              <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                Ready to Make a Difference?
              </h2>

              <motion.div
                className="h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto mb-8"
                initial={{ width: 0 }}
                whileInView={{ width: "40%" }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3 }}
              />

              <p className="text-gray-300 text-lg mb-8">
                Whether you want to volunteer, partner with us, or support our
                initiatives, we'd love to hear from you. Together, we can create
                lasting change in our communities.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <motion.button
                  className="px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full text-white font-medium hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Join as Volunteer
                </motion.button>
                <motion.button
                  className="px-6 py-3 bg-transparent border border-blue-400 rounded-full text-blue-400 font-medium hover:bg-blue-500/10 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Us
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  </>
  );
};

export default About;
