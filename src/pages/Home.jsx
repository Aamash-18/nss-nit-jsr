import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import ImpactDashboard  from '../components/ImpactDashboard';
import Impact from '../components/Impact';
import EventShowcase from '../components/EventShowcase';
import TestimonialSection from '../components/TestimonialSection';
import SEO from '../components/SEO';

const Home = () => {
  return (
 <>
   <SEO 
        title="Home"
        description="Official website of the National Service Scheme (NSS) at NIT Jamshedpur. Promoting community service and social responsibility."
        path="/"
      />
    <div className="w-full h-auto border-l-2 border-r-2 border-[#7134a289] max-[767px]:border-l-0 max-[767px]:border-r-0">
    <Hero />
    <ImpactDashboard />
    <div id="event-section">
    <EventShowcase />
    </div>
    <Impact />
    <TestimonialSection/>
  </div>
 </>
  
  );
};

export default Home; 