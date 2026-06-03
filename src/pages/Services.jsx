import React, { useState, useEffect } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useParams, useNavigate, Link } from "react-router-dom";
import {
  DocumentTextIcon,
  BuildingOfficeIcon,
  ComputerDesktopIcon,
  CheckBadgeIcon,
  BookOpenIcon,
  ChevronRightIcon,
  ArrowLeftIcon,
  CurrencyDollarIcon,
  HeartIcon,
  ArrowTrendingUpIcon,
  ChartBarIcon,
  CircleStackIcon,
  ClockIcon,
  BriefcaseIcon
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

const getCategory = (serviceId) => {
  if (["1", "4"].includes(serviceId)) return "Audit & Assurance";
  if (["2", "6"].includes(serviceId)) return "Tax & Compliance";
  if (["3", "5"].includes(serviceId)) return "Corporate & IT";
  return "Business Advisory";
};

const ServiceCard = ({ icon, title, description, index, onSelect }) => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const IconComponent = iconMap[icon];

  return (
    <Motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center h-full border border-gray-100 hover:border-blue-100 cursor-pointer"
      onClick={() => onSelect(index)}
    >
      <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-blue-50 text-blue-600">
        <IconComponent className="w-7 h-7" />
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed mb-6">{description}</p>
      <div className="flex items-center text-blue-600 font-bold text-sm">
        <span>Learn more about process</span>
        <ChevronRightIcon className="w-4 h-4 ml-1.5" />
      </div>
    </Motion.div>
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

  const processSteps = [
    { step: '01', title: 'Scope & Discovery', desc: 'Understanding client needs, operational parameters, and initial paperwork.' },
    { step: '02', title: 'Data Collection & Audit', desc: 'Detailed assessment of records, operational workflows, and ledger entries.' },
    { step: '03', title: 'Analysis & Review', desc: 'Reviewing compliance gaps, identifying tax advantages, and highlighting errors.' },
    { step: '04', title: 'Consolidated Reporting', desc: 'Delivery of authorized audit reports, tax certificates, and executive MIS summaries.' }
  ];

  return (
    <Motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="bg-gray-50 min-h-screen py-10"
    >
      <div className="container mx-auto max-w-4xl px-4">
        <button
          onClick={handleBack}
          className="flex items-center text-blue-600 mb-8 hover:text-blue-800 transition-colors font-bold text-sm"
        >
          <ArrowLeftIcon className="w-4.5 h-4.5 mr-2" />
          Back to Services
        </button>

        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl border border-gray-100">
          <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-6 mb-10 pb-8 border-b border-gray-100">
            <div className="w-18 h-18 rounded-xl flex items-center justify-center bg-blue-50 text-blue-600 flex-shrink-0">
              <IconComponent className="w-9 h-9" />
            </div>
            <div>
              <span className="text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                {getCategory(service.id)}
              </span>
              <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 mt-2">{service.title}</h1>
            </div>
          </div>
          
          <div className="prose max-w-none">
            <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed font-light">{service.description}</p>
            
            <div className="mb-12">
              <h2 className="text-xl font-bold text-gray-800 mb-6">Service Scope & Deliverables</h2>
              {Array.isArray(service.subDescription) ? (
                <ul className="space-y-3.5 text-gray-600 text-sm md:text-base">
                  {service.subDescription.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-blue-500 mr-3 font-semibold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">{service.subDescription}</p>
              )}
            </div>

            {/* Engagement Process Roadmap */}
            <div className="mb-12 border-t border-gray-100 pt-10">
              <h2 className="text-xl font-bold text-gray-800 mb-8">Our Engagement Process</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {processSteps.map((step, idx) => (
                  <div key={idx} className="bg-gray-50 p-5 rounded-xl border border-gray-200/50">
                    <span className="text-2xl font-extrabold text-blue-300 block mb-2">{step.step}</span>
                    <h4 className="font-bold text-gray-800 text-sm mb-1">{step.title}</h4>
                    <p className="text-gray-500 text-xs leading-relaxed">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Timelines and pricing guidance */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 bg-gray-50 p-6 rounded-2xl border border-gray-200/40">
              <div className="flex items-start gap-4">
                <div className="text-blue-600 mt-0.5">
                  <ClockIcon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 text-sm">Typical Engagement Timeline</h4>
                  <p className="text-gray-500 text-xs mt-1.5 leading-relaxed">
                    2 to 6 weeks, depending on company transaction volume and readiness of lead documentation.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-blue-600 mt-0.5">
                  <BriefcaseIcon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 text-sm">Engagement Structure</h4>
                  <p className="text-gray-500 text-xs mt-1.5 leading-relaxed">
                    Flexible options available: structured project-based pricing, monthly retainers, or custom compliance packages.
                  </p>
                </div>
              </div>
            </div>

            {/* Redirection CTA */}
            <div className="text-center pt-4">
              <Link 
                to={`/contact?service=${encodeURIComponent(service.title)}`}
                className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-bold rounded-lg text-white bg-primary hover:bg-primary-dark shadow-md hover:shadow-lg transition-all duration-300"
              >
                Inquire about this service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Motion.div>
  );
};

const ProfessionalServices = () => {
  const [headerRef, headerInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [selectedService, setSelectedService] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      const service = services.find(s => s.id === id);
      if (service) {
        setSelectedService(service);
      } else {
        navigate('/services', { replace: true });
      }
    }
  }, [id, navigate]);

  const categories = ["All", "Audit & Assurance", "Tax & Compliance", "Corporate & IT", "Business Advisory"];

  const filteredServices = services.filter(service => {
    if (activeCategory === "All") return true;
    return getCategory(service.id) === activeCategory;
  });

  const getServiceCount = (cat) => {
    if (cat === "All") return services.length;
    return services.filter(s => getCategory(s.id) === cat).length;
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <main className="flex-grow">
        <section className="py-20 bg-gray-50/50 relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {selectedService === null ? (
              <>
                <Motion.div
                  ref={headerRef}
                  initial={{ opacity: 0, y: 20 }}
                  animate={headerInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6 }}
                  className="text-center mb-16"
                >
                  <span className="text-blue-600 font-bold uppercase tracking-widest text-xs">
                    Our Expertise
                  </span>
                  <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2">Professional Services</h2>
                  <div className="w-16 h-1 bg-blue-600 mx-auto my-4 rounded-full"></div>
                  <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto font-light">
                    Comprehensive compliance, assurance, and business growth advisory designed specifically to navigate Nepal's financial regulatory landscape.
                  </p>
                </Motion.div>

                {/* Categories Tab Filter */}
                <div className="flex flex-wrap justify-center gap-3 mb-12 max-w-4xl mx-auto">
                  {categories.map(cat => {
                    const isActive = activeCategory === cat;
                    return (
                      <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-all flex items-center gap-2 cursor-pointer ${
                          isActive 
                            ? "bg-primary text-white shadow-md" 
                            : "bg-white text-gray-600 border border-gray-200 hover:border-blue-300 hover:text-blue-600"
                        }`}
                      >
                        <span>{cat}</span>
                        <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full ${
                          isActive ? "bg-white text-primary" : "bg-gray-100 text-gray-500"
                        }`}>
                          {getServiceCount(cat)}
                        </span>
                      </button>
                    );
                  })}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredServices.map((service, index) => (
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