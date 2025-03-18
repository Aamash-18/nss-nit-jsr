import { Outlet } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="flex-grow pt-16"
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>
      <Footer />
    </div>
  );
};

export default MainLayout; 