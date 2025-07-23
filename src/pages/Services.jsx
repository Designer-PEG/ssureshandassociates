import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useParams, useNavigate } from "react-router-dom";
import {
  DocumentTextIcon,
  BuildingOfficeIcon,
  ComputerDesktopIcon,
  CheckBadgeIcon,
  BookOpenIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  ArrowLeftIcon,
  CurrencyDollarIcon,
  HeartIcon,
  ArrowTrendingUpIcon,
  ChartBarIcon,
  CircleStackIcon
} from "@heroicons/react/24/outline";

import services from "../data/services.json";

const iconMap = {
  "document-report": DocumentTextIcon,
  "office-building": BuildingOfficeIcon,
  "desktop-computer": ComputerDesktopIcon,
  "badge-check": CheckBadgeIcon,
  "book-open": BookOpenIcon,
  "currency-dollar": CurrencyDollarIcon,
  "heart-pulse": HeartIcon,
  "trending-up": ArrowTrendingUpIcon,
  "chart-bar": ChartBarIcon,
  "database": CircleStackIcon
};

const ServiceCard = ({ icon, title, description, index, onSelect }) => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const IconComponent = iconMap[icon];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center h-full border border-gray-100 hover:border-blue-100 cursor-pointer"
      onClick={() => onSelect(index)}
    >
      <div className="w-16 h-16 rounded-full border-2 border-blue-500 flex items-center justify-center mb-6 bg-blue-50">
        <IconComponent className="w-8 h-8 text-blue-600" />
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed mb-4">{description}</p>
      <div className="flex items-center text-blue-600 font-medium">
        <span>Learn more</span>
        <ChevronDownIcon className="w-5 h-5 ml-1" />
      </div>
    </motion.div>
  );
};

const ServiceDetail = ({ service, onBack }) => {
  const navigate = useNavigate();
  const IconComponent = iconMap[service.icon];

  useEffect(() => {
    // Update URL when service detail is shown
    navigate(`/services/${service.id}`, { replace: true });
  }, [service.id, navigate]);

  const handleBack = () => {
    navigate('/services');
    onBack();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="bg-gray-50 min-h-screen"
    >
      <div className="container mx-auto max-w-4xl py-2 px-4">
        <button
          onClick={handleBack}
          className="flex items-center text-blue-600 mb-8 hover:text-blue-800 transition-colors"
        >
          <ArrowLeftIcon className="w-5 h-5 mr-2" />
          Back to Services
        </button>

        <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
          <div className="flex items-center mb-8">
            <div className="w-20 h-20 rounded-full border-2 border-blue-500 flex items-center justify-center bg-blue-50 mr-6">
              <IconComponent className="w-10 h-10 text-blue-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900">{service.title}</h1>
          </div>
          
          <div className="prose max-w-none">
            <p className="text-xl text-gray-700 mb-8">{service.description}</p>
            
            <div className="border-t border-gray-200 pt-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">Service Details</h2>
              {Array.isArray(service.subDescription) ? (
                <ul className="space-y-4 text-gray-600">
                  {service.subDescription.map((item, i) => (
                    <li key={i} className="text-lg">{item}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-lg text-gray-600">{service.subDescription}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ProfessionalServices = () => {
  const [headerRef, headerInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [selectedService, setSelectedService] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      const service = services.find(s => s.id === id);
      if (service) {
        setSelectedService(service);
      } else {
        // If invalid ID, redirect to services page
        navigate('/services', { replace: true });
      }
    }
  }, [id, navigate]);

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <section className="py-20 bg-gray-50 relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {selectedService === null ? (
              <>
                <motion.div
                  ref={headerRef}
                  initial={{ opacity: 0, y: 30 }}
                  animate={headerInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8 }}
                  className="text-center mb-16"
                >
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Professional Services</h2>
                  <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Comprehensive financial and legal solutions designed to ensure compliance, transparency, and business integrity.
                  </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {services.map((service, index) => (
                    <ServiceCard
                      key={service.id}
                      icon={service.icon}
                      title={service.title}
                      description={service.description}
                      index={index}
                      onSelect={() => setSelectedService(service)}
                    />
                  ))}
                </div>
              </>
            ) : (
              <ServiceDetail 
                service={selectedService} 
                onBack={() => setSelectedService(null)} 
              />
            )}
          </div>
        </section>
      </main>
    </div>
  );
};

export default ProfessionalServices;