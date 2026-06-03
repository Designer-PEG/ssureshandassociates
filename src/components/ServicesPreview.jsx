import { motion as Motion } from 'framer-motion';
import { useState } from 'react';
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
  
  // Select 4 static core services for a stable, professional homepage presentation
  const coreServiceIds = ["1", "6", "3", "2"]; 
  const displayedServices = servicesData.filter(service => coreServiceIds.includes(service.id));

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
    <section className="py-24 bg-gray-50 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-bold uppercase tracking-widest text-xs">
            What We Do
          </span>
          <Motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2"
          >
            Core Service Offerings
          </Motion.h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto my-4 rounded-full"></div>
        </div>

        {/* Service Icons Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {displayedServices.map((service, index) => {
            const isActive = activeService === index;
            return (
              <Motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex flex-col items-center p-6 bg-white rounded-xl border cursor-pointer transition-all duration-300 ${
                  isActive 
                    ? 'border-blue-600 shadow-md ring-1 ring-blue-500/20' 
                    : 'border-gray-200 hover:border-blue-300 hover:shadow-sm'
                }`}
                onClick={() => setActiveService(index)}
              >
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 ${
                  isActive ? 'bg-blue-600 text-white shadow-inner' : 'bg-blue-50 text-blue-600'
                }`}>
                  {getIconComponent(service.icon)}
                </div>
                <span className={`text-sm font-bold text-center transition-colors ${
                  isActive ? 'text-blue-600' : 'text-gray-700'
                }`}>
                  {service.title}
                </span>
              </Motion.div>
            );
          })}
        </div>

        {/* Service Description Box */}
        <Motion.div
          key={activeService}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="max-w-4xl mx-auto text-center bg-white p-8 md:p-10 rounded-2xl border border-gray-100 shadow-xl"
        >
          <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3">
            {displayedServices[activeService].title}
          </h3>
          <div className="w-12 h-0.5 bg-blue-200 mx-auto mb-6"></div>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
            {displayedServices[activeService].description}
          </p>
          <p className="text-gray-500 text-sm md:text-md italic mb-8">
            {displayedServices[activeService].subDescription}
          </p>
          <div>
            <Link 
              to={`/services/${displayedServices[activeService].id}`}
              className="inline-flex items-center text-blue-600 font-bold hover:text-blue-800 transition-colors"
            >
              <span>Learn detailed process & scope</span>
              <svg className="w-5 h-5 ml-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </Motion.div>

        <div className="text-center mt-16">
          <Link to="/services">
            <Motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center px-8 py-4 border border-transparent text-base font-semibold rounded-lg shadow-md text-white bg-blue-600 hover:bg-blue-700 transition-all cursor-pointer"
            >
              Explore All Services
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Motion.button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicePreview;