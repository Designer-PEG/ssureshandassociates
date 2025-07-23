import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import servicesData from '../data/services.json';
import { 
  DocumentTextIcon,
  BuildingOffice2Icon,
  ComputerDesktopIcon,
  ShieldCheckIcon,
  BookOpenIcon,
  CurrencyDollarIcon,
  HeartIcon,
  ArrowTrendingUpIcon,
  ChartBarIcon,
  CircleStackIcon
} from '@heroicons/react/24/outline';

const ServicePreview = () => {
  const [activeService, setActiveService] = useState(0);
  const [displayedServices, setDisplayedServices] = useState([]);
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    // Check if mobile on mount and resize
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768); // Tailwind's md breakpoint
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  useEffect(() => {
    // Shuffle services and select appropriate number based on screen size
    const shuffled = [...servicesData].sort(() => 0.5 - Math.random());
    const count = isMobile ? 2 : 4;
    setDisplayedServices(shuffled.slice(0, count));
    setActiveService(0); // Reset active service when services change
  }, [isMobile]);

  // Map JSON icon names to actual icon components
  const getIconComponent = (iconName) => {
    const iconMap = {
      'document-report': DocumentTextIcon,
      'office-building': BuildingOffice2Icon,
      'desktop-computer': ComputerDesktopIcon,
      'badge-check': ShieldCheckIcon,
      'book-open': BookOpenIcon,
      'currency-dollar': CurrencyDollarIcon,
      'heart-pulse': HeartIcon,
      'trending-up': ArrowTrendingUpIcon,
      'chart-bar': ChartBarIcon,
      'database': CircleStackIcon
    };
    
    const IconComponent = iconMap[iconName];
    return IconComponent ? <IconComponent className="w-6 h-6" /> : null;
  };

  if (displayedServices.length === 0) {
    return null;
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-gray-900"
          >
            Our Services
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="w-20 h-1 bg-blue-600 mx-auto my-4"
          ></motion.div>
        </div>

        {/* Service Icons - Responsive grid */}
        <div className={`grid ${isMobile ? 'grid-cols-2' : 'grid-cols-2 md:grid-cols-4'} gap-6 mb-12`}>
          {displayedServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              viewport={{ once: true }}
              className={`flex flex-col items-center cursor-pointer ${activeService === index ? 'text-blue-600' : 'text-gray-500'}`}
              onClick={() => setActiveService(index)}
            >
              <div className={`w-16 h-16 rounded-full border-2 flex items-center justify-center mb-2 transition-all
                ${activeService === index ? 'border-blue-600 bg-blue-50' : 'border-gray-300 hover:border-blue-400'}`}>
                {getIconComponent(service.icon)}
              </div>
              <span className="text-sm font-medium text-center px-2">{service.title}</span>
            </motion.div>
          ))}
        </div>

        {/* Service Description */}
        <motion.div
          key={activeService}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="text-2xl font-semibold text-gray-800 mb-2">
            {displayedServices[activeService].title}
          </div>
          <div className="w-full h-px bg-gray-200 my-4"></div>
          <p className="text-gray-600 px-4">
            {displayedServices[activeService].description}
          </p>
        </motion.div>

        <div className="text-center mt-12">
          <Link to="/services">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all"
            >
              Explore All Services
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicePreview;