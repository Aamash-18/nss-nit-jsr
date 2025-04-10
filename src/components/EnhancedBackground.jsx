import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

const EnhancedBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{
          background: "linear-gradient(135deg, #2a0845 0%, #6441a5 100%)",
        }}
        animate={{
          background: [
            "linear-gradient(135deg, #2a0845 0%, #6441a5 100%)",
            "linear-gradient(135deg, #4b134f 0%, #c94b4b 100%)",
            "linear-gradient(135deg, #093028 0%, #237a57 100%)",
            "linear-gradient(135deg, #2a0845 0%, #6441a5 100%)",
          ],
        }}
        transition={{
          duration: 20,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      {/* Particle overlay */}
      <motion.div
        className="absolute inset-0 bg-black bg-opacity-20 z-10"
        style={{
          backgroundImage:
            "url('data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='50' cy='50' r='1.5' fill='rgba(255,255,255,0.2)'/%3E%3C/svg%3E')",
          backgroundSize: "50px 50px",
        }}
        animate={{
          backgroundPosition: ["0px 0px", "25px 25px"],
        }}
        transition={{
          duration: 8,
          ease: "linear",
          repeat: Infinity,
        }}
      />

      {/* Interactive overlay that follows mouse */}
      <motion.div
        className="absolute inset-0 bg-gradient-radial from-purple-500 to-transparent opacity-20 z-20 pointer-events-none"
        style={{
          backgroundSize: "120% 120%",
          backgroundPosition: `${mousePosition.x * 100}% ${
            mousePosition.y * 100
          }%`,
        }}
        animate={{
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 5,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      />

      {/* Image overlay with blend mode */}
      <motion.div
        initial={{ opacity: 0.6 }}
        animate={{ opacity: [0.6, 0.8, 0.6] }}
        transition={{ duration: 8, ease: "easeInOut", repeat: Infinity }}
        className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] bg-cover bg-center mix-blend-overlay z-30"
      />
    </>
  );
};

export default EnhancedBackground;
