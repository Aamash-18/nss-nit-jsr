import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaCrown, 
  FaStar, 
  FaUsers, 
  FaEnvelope, 
  FaLinkedin, 
  FaTwitter
} from 'react-icons/fa';
import TeamMemberCard from '../components/TeamMemberCard';
import ResponsiveCategoryTabs from '../components/export default ResponsiveCategoryTabs;';
import { teamMembers } from '../utils/data';
import SEO from '../components/SEO';

const Team = () => {
  const [activeCategory, setActiveCategory] = useState('superCore');
  const [hoveredMember, setHoveredMember] = useState(null);
  // Categories array
  const categories = [
    { id: 'superCore', label: 'Super Core', icon: FaCrown },
    { id: 'core', label: 'Core', icon: FaStar },
    { id: 'volunteers', label: 'Volunteers', icon: FaUsers },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.08
      }
    }
  };
  
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring",
        stiffness: 300,
        damping: 24
      }
    }
  };

  // Dynamic 3D hover effect
  const handleHover = (id) => {
    setHoveredMember(id);
  };

  const handleHoverEnd = () => {
    setHoveredMember(null);
  };

  return (
   <>
    <SEO 
    title="Our Team"
    description="Meet the dedicated team of volunteers and coordinators behind NSS NIT Jamshedpur. Our leadership and volunteers drive our community service initiatives."
    path="/team"
  />
    <div className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white min-h-screen relative overflow-hidden">
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-rose-600/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-blue-600/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-violet-600/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-6000"></div>
   
      </div>

      {/* Enhanced modern header with 3D elements */}
      <header className="relative py-20 overflow-hidden">
             
        {/* Enhanced subtle grid */}
        <div className="absolute inset-0" style={{ 
          backgroundImage: `linear-gradient(to right, rgba(99, 102, 241, 0.09) 1px, transparent 1px), 
                             linear-gradient(to bottom, rgba(99, 102, 241, 0.09) 1px, transparent 1px)`, 
          backgroundSize: '70px 70px' 
        }}></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div className="flex justify-center mb-8">
              <motion.div
                initial={{ scale: 0.8, opacity: 0, rotateY: -90 }}
                animate={{ scale: 1, opacity: 1, rotateY: 0 }}
                transition={{ duration: 0.8, type: "spring" }}
                className="relative w-28 h-28"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600 to-purple-600 rounded-2xl transform rotate-12 shadow-lg shadow-indigo-500/40"></div>
                <div className="absolute inset-1 bg-gray-900 rounded-xl transform rotate-12 flex items-center justify-center">
                  <FaUsers className="text-white text-4xl transform -rotate-12" />
                </div>
              </motion.div>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-6xl md:text-7xl font-bold mb-6 tracking-tight"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
                Meet Our Team
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light"
            >
              The passionate individuals driving social change through the National Service Scheme at NIT Jamshedpur.
            </motion.p>

            {/* Enhanced decorative elements */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 1 }}
              className="mt-10 flex justify-center"
            >
              <div className="h-1 w-32 bg-gradient-to-r from-transparent via-purple-500 to-transparent rounded-full"></div>
            </motion.div>
          </motion.div>
        </div>
      </header>

      {/* Enhanced 3D Category Navigation */}

      {/* Enhanced Team Members Section with Advanced Cards */}
      <section className="py-10 relative">
        <ResponsiveCategoryTabs categories={categories} activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Soft gradient base */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800"></div>

          {/* Noise texture overlay for depth */}
          <div
            className="absolute inset-0 opacity-30 dark:opacity-40"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
              backgroundSize: "cover",
              mixBlendMode: "soft-light",
            }}
          ></div>

        
          {/* Subtle animated accents */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-70"></div>
          {/* Light beams */}
          <div className="absolute top-40 left-[10%] w-40 h-80 bg-gradient-to-t from-blue-500/10 to-transparent transform -rotate-45 dark:from-blue-400/20"></div>
          <div className="absolute -bottom-20 right-1/4 w-40 h-80 bg-gradient-to-t from-purple-500/30 to-transparent transform -rotate-45 dark:from-purple-400/20"></div>

        
        </div>
        <div className="container mx-auto px-4 md:px-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
            >
              {teamMembers[activeCategory].map((member) => (
                <TeamMemberCard key={member.id} member={member} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

   
    </div>
   </>
  );
};

export default Team;