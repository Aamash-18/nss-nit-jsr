import { motion } from "framer-motion";
import { FaImage, FaCamera, FaPalette, FaSearch } from "react-icons/fa";

const GalleryHero = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-full flex justify-center items-center py-12 px-4"
    >
      <div className="relative w-full max-w-4xl h-[500px] flex items-center justify-center">
        {/* Hexagonal container */}
        <motion.div
          className="relative w-80 h-80 bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center shadow-xl shadow-purple-600/30"
          style={{
            clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
          }}
          initial={{ scale: 0.9, rotate: 0 }}
          animate={{ scale: 1, rotate: [0, 5, -5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          whileHover={{ scale: 1.05 }}
        >
          {/* Main content inside hexagon */}
          <div className="text-center z-10 p-8">
            <motion.h1 
              className="text-4xl font-bold text-white mb-4"
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.5 }}
            >
              My Gallery
            </motion.h1>
            <motion.p 
              className="text-white/90 mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Explore my creative visual collection
            </motion.p>
            <motion.button
              className="px-6 py-2 bg-white text-purple-600 rounded-full font-medium hover:bg-purple-100 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Gallery
            </motion.button>
          </div>

          {/* Hexagonal glow effect */}
          <motion.div
            className="absolute inset-0 opacity-30"
            style={{
              clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
            }}
            animate={{
              boxShadow: [
                "0 0 30px 10px rgba(147, 51, 234, 0.3)",
                "0 0 50px 15px rgba(147, 51, 234, 0.5)",
                "0 0 30px 10px rgba(147, 51, 234, 0.3)",
              ],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
            }}
          />
        </motion.div>

        {/* Floating gallery icons around the hexagon */}
        <motion.div
          className="absolute top-10 left-10 w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-lg"
          animate={{
            y: [0, -15, 0],
            rotate: [0, 10, -5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <FaImage className="text-purple-600 text-2xl" />
        </motion.div>

        <motion.div
          className="absolute bottom-10 right-10 w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-lg"
          animate={{
            y: [0, 15, 0],
            rotate: [0, -10, 5, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <FaCamera className="text-blue-600 text-2xl" />
        </motion.div>

        <motion.div
          className="absolute top-1/2 -left-8 w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg"
          animate={{
            x: [0, -10, 0],
            rotate: [0, 15, -15, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <FaPalette className="text-rose-600 text-xl" />
        </motion.div>

        <motion.div
          className="absolute top-1/2 -right-8 w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg"
          animate={{
            x: [0, 10, 0],
            rotate: [0, -15, 15, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <FaSearch className="text-cyan-600 text-xl" />
        </motion.div>

        {/* Decorative hexagon outlines */}
        <motion.div
          className="absolute w-[400px] h-[400px] opacity-30"
          style={{
            clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
            border: "2px dashed rgba(147, 51, 234, 0.5)",
          }}
          animate={{ rotate: 360 }}
          transition={{
            duration: 60,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        <motion.div
          className="absolute w-[450px] h-[450px] opacity-20"
          style={{
            clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
            border: "2px dashed rgba(99, 102, 241, 0.5)",
          }}
          animate={{ rotate: -360 }}
          transition={{
            duration: 80,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>
    </motion.div>
  );
};

export default GalleryHero;