import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import { Discover } from '../components/Discover';
import Intro from '../components/Intro';
import Impact from '../components/Impact';

const Home = () => {
  return (
    <div className="w-full h-auto border-l-2 border-r-2 border-[#7134a289] max-[767px]:border-l-0 max-[767px]:border-r-0">
    <Hero />
    <Discover />
    <Intro />
    <Impact />
  </div>
  
  );
};

export default Home; 