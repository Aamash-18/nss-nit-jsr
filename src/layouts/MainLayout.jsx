// import { Outlet } from 'react-router-dom';
// import { AnimatePresence, motion } from 'framer-motion';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';

// const MainLayout = () => {
//   return (
//     <div className="flex flex-col min-h-screen ">
//       <Navbar />
//       <AnimatePresence mode="wait">
//         <motion.main
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 0.3 }}
//           className="flex-grow pt-16"
//         >
//           <Outlet />
//         </motion.main>
//       </AnimatePresence>
//       <Footer />
//     </div>
//   );
// };

// export default MainLayout; 

import { Outlet } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
const MainLayout = () => {
  useEffect(() => {
    // Function to update scrollbar color based on scroll position
    const updateScrollbarColor = () => {
      const scrollPosition = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = scrollPosition / documentHeight;
      
      // Array of colors to transition through
      const colors = [
        'rgb(109, 40, 217)', // Dark Violet
        'rgb(190, 24, 93)',  // Dark Rose
        'rgb(14, 116, 144)', // Dark Cyan
        'rgb(30, 58, 138)'   // Dark Blue
      ];
      
      // Calculate which color pair to use based on scroll percentage
      const colorIndex = Math.min(
        Math.floor(scrollPercentage * colors.length),
        colors.length - 1
      );
      const nextColorIndex = (colorIndex + 1) % colors.length;
      
      // Calculate percentage between the two colors
      const colorPercentage = (scrollPercentage * colors.length) % 1;
      
      // Apply the calculated color to the scrollbar
      document.documentElement.style.setProperty('--scrollbar-color', colors[colorIndex]);
      document.documentElement.style.setProperty('--scrollbar-hover-color', colors[nextColorIndex]);
    };

    // Initial call to set scrollbar color
    updateScrollbarColor();
    
    // Add scroll event listener
    window.addEventListener('scroll', updateScrollbarColor);
    
    // Add CSS for custom scrollbar
    const style = document.createElement('style');
    style.textContent = `
      :root {
        --scrollbar-color: rgb(109, 40, 217);
        --scrollbar-hover-color: rgb(190, 24, 93);
      }
      
      ::-webkit-scrollbar {
        width: 12px;
      }
      
      ::-webkit-scrollbar-track {
        background: rgba(0, 0, 0, 0.1);
        border-radius: 6px;
      }
      
      ::-webkit-scrollbar-thumb {
        background: var(--scrollbar-color);
        border-radius: 6px;
        transition: background-color 0.3s ease;
      }
      
      ::-webkit-scrollbar-thumb:hover {
        background: var(--scrollbar-hover-color);
      }
      
      /* Firefox scrollbar */
      * {
        scrollbar-width: thin;
        scrollbar-color: var(--scrollbar-color) rgba(0, 0, 0, 0.1);
      }
    `;
    document.head.appendChild(style);
    
    // Cleanup function
    return () => {
      window.removeEventListener('scroll', updateScrollbarColor);
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* <Navbar /> */}

      <Navigation/>
      <AnimatePresence mode="wait">
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="flex-grow md:pt-16"
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>
      <Footer />
    </div>
  );
};

export default MainLayout;