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

const Team = () => {
  const [activeCategory, setActiveCategory] = useState('superCore');
  const [hoveredMember, setHoveredMember] = useState(null);

  // Updated team data with categories
  const teamMembers = {
    superCore: [
      {
        id: 1,
        name: 'Dr. Rajesh Kumar',
        position: 'Program Officer',
        image: 'src/assets/core team images/Dr Rajesh Kumar.jpg',
        department: 'Department of Mechanical Engineering',
        email: 'rajesh.kumar@nitjsr.ac.in',
        description: 'Dr. Rajesh Kumar has been leading the NSS unit at NIT Jamshedpur for the past 5 years. Under his guidance, the unit has achieved numerous milestones and recognition.',
        social: {
          linkedin: '#',
          twitter: '#',
          instagram: '#'
        }
      },
      {
        id: 2,
        name: 'Dr. Priya Singh',
        position: 'Faculty Coordinator',
        image: 'src/assets/core team images/Dr Priya Singh.jpg',
        department: 'Department of Computer Science',
        email: 'priya.singh@nitjsr.ac.in',
        description: 'Dr. Priya Singh is responsible for coordinating various activities and ensuring smooth functioning of the NSS unit. She has been associated with NSS for over 3 years.',
        social: {
          linkedin: '#',
          twitter: '#',
          instagram: '#'
        }
      },
      {
        id: 3,
        name: 'Shyamali Rupam',
        position: 'Vice President',
        image: 'src/assets/core team images/Shyamli Rupam.jpg',
        department: 'B.Tech, Electronics and Communication Engineering',
        email: 'shyamali.rupam@nitjsr.ac.in',
        description: 'Shyamali is responsible for overall coordination of NSS activities and leads the team of volunteers. She has been an active NSS volunteer since her first year.',
        social: {
          linkedin: '#',
          twitter: '#',
          instagram: '#'
        }
      },
    ],
    core: [
      {
        id: 4,
        name: 'Neeraj Bhatt',
        position: 'EM Head',
        image: 'src/assets/core team images/Neeraj.jpg',
        department: 'B.Tech, Electronics and Communication Engineering',
        email: 'neeraj.bhatt@nitjsr.ac.in',
        description: 'Neeraj leads the Event Management team and ensures smooth execution of NSS initiatives across campus and community.',
        social: {
          linkedin: '#',
          twitter: '#',
          instagram: '#'
        }
      },
      {
        id: 5,
        name: 'Doddy Mourya',
        position: 'EM Head',
        image: 'src/assets/core team images/Doddy Mourya.jpg',
        department: 'B.Tech, Electronics and Communication Engineering',
        email: 'doddy.mourya@nitjsr.ac.in',
        description: 'Doddy co-leads the Event Management division and specializes in coordinating large-scale community service projects.',
        social: {
          linkedin: '#',
          twitter: '#',
          instagram: '#'
        }
      },
      {
        id: 6,
        name: 'Pratyush Kumar',
        position: 'Creative Head',
        image: 'src/assets/core team images/Pratyush Kumar.jpg',
        department: 'B.Tech, Electronics and Communication Engineering',
        email: 'pratyush.kumar@nitjsr.ac.in',
        description: 'Pratyush oversees all creative aspects of NSS campaigns and events, bringing innovation to social service initiatives.',
        social: {
          linkedin: '#',
          twitter: '#',
          instagram: '#'
        }
      },
      {
        id: 7,
        name: 'Utkarsh Shukla',
        position: 'Content Head',
        image: 'src/assets/core team images/Utkarsh Shukhla.jpg',
        department: 'B.Tech, Electronics and Communication Engineering',
        email: 'utkarsh.shukla@nitjsr.ac.in',
        description: 'Utkarsh manages content creation and messaging strategy for all NSS communications and outreach materials.',
        social: {
          linkedin: '#',
          twitter: '#',
          instagram: '#'
        }
      },
      {
        id: 8,
        name: 'Gourab Bistu',
        position: 'Web Head',
        image: 'src/assets/core team images/Gourab.png',
        department: 'B.Tech, Electronics and Communication Engineering',
        email: 'gourab.bistu@nitjsr.ac.in',
        description: 'Gourab leads the web development team, ensuring digital presence and technical resources for NSS initiatives.',
        social: {
          linkedin: '#',
          twitter: '#',
          instagram: '#'
        }
      },
      {
        id: 9,
        name: 'Rupam Kumari',
        position: 'PR Head',
        image: 'src/assets/core team images/Rupam Kumari.jpg',
        department: 'B.Tech, Electronics and Communication Engineering',
        email: 'rupam.kumari@nitjsr.ac.in',
        description: 'Rupam manages public relations and external communications for NSS, building partnerships with community stakeholders.',
        social: {
          linkedin: '#',
          twitter: '#',
          instagram: '#'
        }
      },
      {
        id: 10,
        name: 'Kajal Shaw',
        position: 'PR Head',
        image: 'src/assets/core team images/kajal shaw.jpg',
        department: 'B.Tech, Electronics and Communication Engineering',
        email: 'kajal.shaw@nitjsr.ac.in',
        description: 'Kajal co-leads the public relations team, focusing on media engagement and institutional partnerships.',
        social: {
          linkedin: '#',
          twitter: '#',
          instagram: '#'
        }
      },
      {
        id: 13,
        name: 'Rinki Kumari',
        position: 'Media Head',
        image: 'src/assets/core team images/Rinki kumari .jpg',
        department: 'B.Tech, Electronics and Communication Engineering',
        email: 'rinki.kumari@nitjsr.ac.in',
        description: 'Rinki manages all media content and documentation of NSS activities, creating compelling visual narratives.',
        social: {
          linkedin: '#',
          twitter: '#',
          instagram: '#'
        }
      },
      {
        id: 14,
        name: 'Sushant Kachhap',
        position: 'Media Head',
        image: 'src/assets/core team images/Sushant Kachhap .jpg',
        department: 'B.Tech, Electronics and Communication Engineering',
        email: 'sushant.kachhap@nitjsr.ac.in',
        description: 'Sushant co-leads the media team, specializing in photography and videography of NSS events and campaigns.',
        social: {
          linkedin: '#',
          twitter: '#',
          instagram: '#'
        }
      },
    ],
    volunteers: [
      {
        id: 31,
        name: 'Rahul Verma',
        position: 'Volunteer',
        image: 'src/assets/volunteers/Rahul Verma.jpg',
        department: 'B.Tech, Mechanical Engineering',
        email: 'rahul.verma@nitjsr.ac.in',
        description: 'Rahul is an enthusiastic volunteer who actively participates in all NSS activities. He is particularly interested in environmental conservation projects.',
        social: {
          linkedin: '#',
          twitter: '#',
          instagram: '#'
        }
      },
      {
        id: 32,
        name: 'Neha Gupta',
        position: 'Volunteer',
        image: 'src/assets/volunteers/Neha Gupta.jpg',
        department: 'B.Tech, Computer Science',
        email: 'neha.gupta@nitjsr.ac.in',
        description: 'Neha is passionate about teaching and regularly conducts educational workshops for underprivileged children as part of NSS activities.',
        social: {
          linkedin: '#',
          twitter: '#',
          instagram: '#'
        }
      },
      {
        id: 33,
        name: 'Vikram Singh',
        position: 'Volunteer',
        image: 'src/assets/volunteers/Vikram Singh.jpg',
        department: 'B.Tech, Electronics Engineering',
        email: 'vikram.singh@nitjsr.ac.in',
        description: 'Vikram is skilled in organizing health camps and awareness programs. He has been instrumental in the success of several health-related initiatives.',
        social: {
          linkedin: '#',
          twitter: '#',
          instagram: '#'
        }
      },
      {
        id: 34,
        name: 'Ananya Reddy',
        position: 'Volunteer',
        image: 'src/assets/volunteers/Ananya Reddy.jpg',
        department: 'B.Tech, Chemical Engineering',
        email: 'ananya.reddy@nitjsr.ac.in',
        description: 'Ananya is dedicated to social service and has been actively involved in various community outreach programs organized by NSS.',
        social: {
          linkedin: '#',
          twitter: '#',
          instagram: '#'
        }
      },
    ],
  };
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
    <div className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white min-h-screen relative overflow-hidden">
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-rose-600/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-blue-600/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-violet-600/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-6000"></div>
   
      </div>

      {/* Enhanced modern header with 3D elements */}
      <header className="relative py-32 overflow-hidden">
             
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
        <ResponsiveCategoryTabs categories={categories} activeCategory={activeCategory} setActiveCategory={setActiveCategory} />

      {/* Enhanced Team Members Section with Advanced Cards */}
      <section className="py-10 mb-24">
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
                // <motion.div
                //   key={member.id}
                //   variants={cardVariants}
                //   onMouseEnter={() => handleHover(member.id)}
                //   onMouseLeave={handleHoverEnd}
                //   style={{
                //     transform: hoveredMember === member.id ? 'perspective(1000px) rotateY(5deg)' : 'perspective(1000px) rotateY(0deg)',
                //     transition: 'transform 0.5s ease-out'
                //   }}
                //   className="group relative rounded-2xl overflow-hidden bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/10 shadow-xl hover:shadow-2xl hover:border-indigo-500/40 transition-all duration-300"
                // >
                //   {/* Enhanced status indicator */}
                //   <div className="absolute top-6 right-6 z-10">
                //     <div className="flex items-center gap-2 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full">
                //       <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse"></span>
                //       <span className="text-xs text-green-400 font-medium">Active</span>
                //     </div>
                //   </div>
                  
                //   {/* Enhanced image with modern treatment */}
                //   <div className="p-6 pb-4">
                //     <div className="aspect-square overflow-hidden rounded-xl relative bg-gradient-to-br from-indigo-900/30 to-purple-900/30 shadow-inner">
                //       <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/0"></div>
                //       <img
                //         src={member.image}
                //         alt={member.name}
                //         className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                //       />
                      
                //       {/* Enhanced modern social overlay */}
                //       <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/40 to-black/90 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center p-6">
                //         <div className="flex gap-4">
                //           <motion.a
                //             href={`mailto:${member.email}`}
                //             className="p-4 bg-white/10 hover:bg-indigo-600 text-white rounded-full transition-colors backdrop-blur-md shadow-lg shadow-black/30"
                //             whileHover={{ scale: 1.2, rotate: 5 }}
                //             whileTap={{ scale: 0.9 }}
                //           >
                //             <FaEnvelope size={20} />
                //           </motion.a>
                //           <motion.a
                //             href={member.social.linkedin}
                //             className="p-4 bg-white/10 hover:bg-indigo-600 text-white rounded-full transition-colors backdrop-blur-md shadow-lg shadow-black/30"
                //             whileHover={{ scale: 1.2, rotate: -5 }}
                //             whileTap={{ scale: 0.9 }}
                //           >
                //             <FaLinkedin size={20} />
                //           </motion.a>
                //           <motion.a
                //             href={member.social.twitter}
                //             className="p-4 bg-white/10 hover:bg-indigo-600 text-white rounded-full transition-colors backdrop-blur-md shadow-lg shadow-black/30"
                //             whileHover={{ scale: 1.2, rotate: 5 }}
                //             whileTap={{ scale: 0.9 }}
                //           >
                //             <FaTwitter size={20} />
                //           </motion.a>
                //         </div>
                //       </div>
                //     </div>
                //   </div>
                  
                //   {/* Enhanced modern content layout */}
                //   <div className="p-6 pt-2">
                //     <h3 className="text-xl font-semibold text-white group-hover:text-indigo-300 transition-colors">
                //       {member.name}
                //     </h3>
                //     <div className="flex items-center gap-2 mt-2">
                //       <div className="inline-block px-4 py-1.5 bg-indigo-500/20 text-indigo-300 rounded-full text-sm font-medium border border-indigo-500/20">
                //         {member.position}
                //       </div>
                //       {member.position === 'Program Officer' && (
                //         <FaCrown className="text-yellow-400 text-sm" />
                //       )}
                //     </div>
                //     <p className="text-gray-400 text-sm mt-3 line-clamp-2">{member.department}</p>
                //   </div>
                  
                //   {/* Enhanced decorative elements */}
                //   <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                // </motion.div>
                <TeamMemberCard key={member.id} member={member} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

   
    </div>
  );
};

export default Team;