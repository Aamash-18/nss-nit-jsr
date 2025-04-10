import { motion } from 'framer-motion';
import { FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const TeamMemberCard = ({ member }) => {
  const cardVariants = {
    hover: {
      scale: 1.03,
      transition: { duration: 0.3 }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      className="relative group"
      whileHover="hover"
    >
      {/* Outer glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-500"></div>
      
      {/* Main card */}
      <div className="relative bg-[#0a0a20]/80 backdrop-blur-lg rounded-2xl p-6 border border-blue-500/10 shadow-lg transition-all duration-500 group-hover:border-blue-500/30 overflow-hidden z-10">
        {/* Background pattern */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-full -mr-20 -mt-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-purple-500/10 to-transparent rounded-full -ml-20 -mb-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        {/* Content */}
        <div className="relative z-10 text-center">
          {/* Profile image with improved styling */}
          <div className="w-28 h-28 mx-auto mb-5 rounded-full overflow-hidden border-2 border-blue-500/20 group-hover:border-blue-500/50 transition-all duration-500 shadow-lg">
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>
          
          {/* Name with enhanced styling */}
          <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-white mb-1">
            {member.name}
          </h3>
          
          {/* Position with badge styling */}
          <div className="inline-block px-3 py-1 rounded-full bg-blue-900/30 border border-blue-500/20 text-blue-400 text-xs font-medium mb-4">
            {member.position}
          </div>
          
          {/* Department with improved styling */}
          <p className="text-gray-400 text-sm mb-6 max-w-xs mx-auto">
            {member.department}
          </p>
          
          {/* Social links with improved hover effects */}
          <div className="flex justify-center space-x-5">
            <a
              href={member.social.twitter}
              className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
              aria-label="Twitter"
            >
              <div className="w-8 h-8 rounded-full flex items-center justify-center border border-gray-700 group-hover:border-blue-500/30 transition-all duration-300 hover:bg-blue-900/20">
                <FaTwitter className="w-4 h-4" />
              </div>
            </a>
            <a
              href={member.social.linkedin}
              className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <div className="w-8 h-8 rounded-full flex items-center justify-center border border-gray-700 group-hover:border-blue-500/30 transition-all duration-300 hover:bg-blue-900/20">
                <FaLinkedinIn className="w-4 h-4" />
              </div>
            </a>
            <a
              href={`mailto:${member.email}`}
              className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
              aria-label="Email"
            >
              <div className="w-8 h-8 rounded-full flex items-center justify-center border border-gray-700 group-hover:border-blue-500/30 transition-all duration-300 hover:bg-blue-900/20">
                <MdEmail className="w-4 h-4" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TeamMemberCard;