import React from 'react';
import { 
  ChartBarIcon,
  CalculatorIcon,
  ScaleIcon,
  ArrowTrendingUpIcon,
  DevicePhoneMobileIcon,
  TrophyIcon,
  LightBulbIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline';

const HomeAbout = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            About <span className="text-blue-600">Our Firm</span>
          </h2>
          <div className="mt-4 max-w-3xl mx-auto">
            <p className="text-xl text-gray-600">
              Strategic financial partnership for sustainable business growth
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* Left Column - About Text */}
          <div className="lg:w-1/2">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <ChartBarIcon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Beyond Numbers</h3>
              </div>
              
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                At <span className="font-semibold text-blue-600">S. Suresh & Associates</span>, Chartered Accountants, we go beyond numbers. We serve as your strategic partner in compliance, growth, and governance. With years of expertise across industries, we deliver insightful audits, practical advisory, and digital transformation solutions to elevate your business performance.
              </p>
              
              <div className="bg-blue-50/50 p-6 rounded-xl border border-blue-100">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4 flex-shrink-0">
                    <DevicePhoneMobileIcon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">Ready to transform your business?</h3>
                    <p className="text-blue-600 font-medium text-xl flex items-center">
                       +977 (98) 5113 5421
                    </p>
                    <p className="text-sm text-gray-500 mt-1">Available 10:00 AM - 5:00 PM, Sunday-Friday</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Mission, Objectives & Goals */}
          <div className="lg:w-1/2">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="flex items-center mb-8">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <TrophyIcon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Our Vision & Strategy</h3>
              </div>
              
              <div className="space-y-10">
                {/* Mission */}
                <div>
                  <div className="flex items-center mb-4">
                    <LightBulbIcon className="h-6 w-6 text-blue-500 mr-3" />
                    <h4 className="text-xl font-semibold text-gray-800">Mission</h4>
                  </div>
                  <p className="text-gray-600 pl-9 border-l-2 border-blue-200">
                    To build sustainable businesses by providing reliable, value-driven audit and advisory services that uphold the highest standards of integrity and excellence.
                  </p>
                </div>
                
                {/* Objectives */}
                <div>
                  <div className="flex items-center mb-4">
                    <ScaleIcon className="h-6 w-6 text-blue-500 mr-3" />
                    <h4 className="text-xl font-semibold text-gray-800">Objectives</h4>
                  </div>
                  <ul className="space-y-3 pl-9 border-l-2 border-blue-200">
                    <li className="text-gray-600 flex items-start">
                      <span className="text-blue-500 mr-2 mt-1">
                        <ShieldCheckIcon className="h-4 w-4" />
                      </span>
                      Ensure financial transparency through efficient audits
                    </li>
                    <li className="text-gray-600 flex items-start">
                      <span className="text-blue-500 mr-2 mt-1">
                        <CalculatorIcon className="h-4 w-4" />
                      </span>
                      Empower businesses with strategic and tax insights
                    </li>
                    <li className="text-gray-600 flex items-start">
                      <span className="text-blue-500 mr-2 mt-1">
                        <ArrowTrendingUpIcon className="h-4 w-4" />
                      </span>
                      Foster accountability and sustainable growth for clients
                    </li>
                  </ul>
                </div>
                
                {/* Goals */}
                {/* <div>
                  <div className="flex items-center mb-4">
                    <ArrowTrendingUpIcon className="h-6 w-6 text-blue-500 mr-3" />
                    <h4 className="text-xl font-semibold text-gray-800">Goals</h4>
                  </div>
                  <ul className="space-y-3 pl-9 border-l-2 border-blue-200">
                    <li className="text-gray-600 flex items-start">
                      <span className="text-blue-500 mr-2 mt-1">
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                      </span>
                      To become a trusted partner for 100+ enterprises in South Asia by 2030
                    </li>
                    <li className="text-gray-600 flex items-start">
                      <span className="text-blue-500 mr-2 mt-1">
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </span>
                      Lead the way in digital finance and ERP adoption for SMEs
                    </li>
                    <li className="text-gray-600 flex items-start">
                      <span className="text-blue-500 mr-2 mt-1">
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </span>
                      Establish a benchmark in forensic and investigative auditing
                    </li>
                  </ul>
                </div> */}

                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;