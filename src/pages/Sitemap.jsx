import React from "react";
import { Link } from "react-router-dom";
import { motion as Motion } from "framer-motion";
import {
  HomeIcon,
  InformationCircleIcon,
  WrenchScrewdriverIcon,
  EnvelopeIcon,
  ChartBarIcon,
  ChevronRightIcon,
  ShieldCheckIcon,
  DocumentCheckIcon,
  MapIcon
} from "@heroicons/react/24/outline";

import services from "../data/services.json";

export default function Sitemap() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const getCategory = (serviceId) => {
    if (["1", "4"].includes(serviceId)) return "Audit & Assurance";
    if (["2", "6"].includes(serviceId)) return "Tax & Compliance";
    if (["3", "5"].includes(serviceId)) return "Corporate & IT";
    return "Business Advisory";
  };

  // Group services by category
  const categories = {
    "Audit & Assurance": services.filter(s => getCategory(s.id) === "Audit & Assurance"),
    "Tax & Compliance": services.filter(s => getCategory(s.id) === "Tax & Compliance"),
    "Corporate & IT": services.filter(s => getCategory(s.id) === "Corporate & IT"),
    "Business Advisory": services.filter(s => getCategory(s.id) === "Business Advisory")
  };

  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* Page Header */}
        <div className="text-center mb-16">
          <span className="text-blue-600 font-bold uppercase tracking-widest text-xs">
            Site Directory
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mt-2">
            Website Sitemap
          </h1>
          <div className="w-16 h-1 bg-blue-600 mx-auto my-4 rounded-full"></div>
          <p className="text-base md:text-lg text-gray-500 max-w-2xl mx-auto font-light">
            Easily locate services, dashboards, and core corporate details of S. Suresh & Associates.
          </p>
        </div>

        <Motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-3 gap-10"
        >
          {/* Column 1: Core Navigation */}
          <Motion.div variants={itemVariants} className="space-y-8">
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
                <div className="bg-blue-50 text-blue-600 p-2.5 rounded-xl">
                  <MapIcon className="w-6 h-6" />
                </div>
                <h2 className="text-xl font-bold text-gray-800">Main Pages</h2>
              </div>
              
              <ul className="space-y-4">
                <li>
                  <Link to="/" className="flex items-center gap-3 text-gray-600 hover:text-blue-600 font-medium transition-colors group">
                    <HomeIcon className="w-5 h-5 text-gray-400 group-hover:text-blue-500" />
                    <span>Home Page</span>
                    <ChevronRightIcon className="w-3.5 h-3.5 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="flex items-center gap-3 text-gray-600 hover:text-blue-600 font-medium transition-colors group">
                    <InformationCircleIcon className="w-5 h-5 text-gray-400 group-hover:text-blue-500" />
                    <span>About Us</span>
                    <ChevronRightIcon className="w-3.5 h-3.5 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="flex items-center gap-3 text-gray-600 hover:text-blue-600 font-medium transition-colors group">
                    <WrenchScrewdriverIcon className="w-5 h-5 text-gray-400 group-hover:text-blue-500" />
                    <span>Services Directory</span>
                    <ChevronRightIcon className="w-3.5 h-3.5 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
                <li>
                  <Link to="/insights" className="flex items-center gap-3 text-gray-600 hover:text-blue-600 font-medium transition-colors group">
                    <ChartBarIcon className="w-5 h-5 text-gray-400 group-hover:text-blue-500" />
                    <span>Audit Insights Dashboard</span>
                    <ChevronRightIcon className="w-3.5 h-3.5 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="flex items-center gap-3 text-gray-600 hover:text-blue-600 font-medium transition-colors group">
                    <EnvelopeIcon className="w-5 h-5 text-gray-400 group-hover:text-blue-500" />
                    <span>Contact & Location</span>
                    <ChevronRightIcon className="w-3.5 h-3.5 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              </ul>
            </div>

            {/* Support & Documents Box */}
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
                <div className="bg-emerald-50 text-emerald-600 p-2.5 rounded-xl">
                  <ShieldCheckIcon className="w-6 h-6" />
                </div>
                <h2 className="text-xl font-bold text-gray-800">Support & Legal</h2>
              </div>
              
              <ul className="space-y-4">
                <li>
                  <a href="/sitemap.xml" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-600 hover:text-emerald-600 font-medium transition-colors group">
                    <DocumentCheckIcon className="w-5 h-5 text-gray-400 group-hover:text-emerald-500" />
                    <span>Sitemap XML (Search Engines)</span>
                    <ChevronRightIcon className="w-3.5 h-3.5 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
                <li>
                  <a href="/robots.txt" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-600 hover:text-emerald-600 font-medium transition-colors group">
                    <DocumentCheckIcon className="w-5 h-5 text-gray-400 group-hover:text-emerald-500" />
                    <span>robots.txt file</span>
                    <ChevronRightIcon className="w-3.5 h-3.5 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              </ul>
            </div>
          </Motion.div>

          {/* Column 2 & 3: Detailed Services Grid */}
          <Motion.div variants={itemVariants} className="md:col-span-2 bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all space-y-8">
            <div className="flex items-center gap-3 pb-4 border-b border-gray-100">
              <div className="bg-blue-50 text-blue-600 p-2.5 rounded-xl">
                <WrenchScrewdriverIcon className="w-6 h-6" />
              </div>
              <h2 className="text-xl font-bold text-gray-800">Services Breakdown</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {Object.keys(categories).map((catName) => (
                <div key={catName} className="space-y-3">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-blue-600 bg-blue-50/50 px-3 py-1.5 rounded-lg inline-block">
                    {catName}
                  </h3>
                  <ul className="space-y-2.5 pl-1">
                    {categories[catName].map((srv) => (
                      <li key={srv.id}>
                        <Link 
                          to={`/services/${srv.id}`}
                          className="group flex items-start gap-2 text-gray-600 hover:text-blue-600 transition-colors text-sm font-medium leading-tight"
                        >
                          <span className="text-blue-400 group-hover:text-blue-600 mt-1">•</span>
                          <span className="group-hover:underline">{srv.title}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Motion.div>
        </Motion.div>

        {/* Footer Contact CTA */}
        <div className="mt-12 text-center bg-blue-50/50 rounded-2xl p-8 border border-blue-100/50">
          <h3 className="font-bold text-gray-800 mb-2">Need direct assistance or customized compliance consultation?</h3>
          <p className="text-gray-500 text-sm mb-6 max-w-xl mx-auto">Get in touch with our team or schedule a business health check-up today.</p>
          <Link 
            to="/contact" 
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-sm font-bold rounded-lg text-white bg-primary hover:bg-primary-dark shadow-md transition-all duration-300"
          >
            Inquire/Book Consultation
          </Link>
        </div>
        
      </div>
    </div>
  );
}
