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
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="text-blue-600 font-bold uppercase tracking-widest text-xs">
            Who We Are
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2">
            About <span className="text-primary bg-clip-text">Our Practice</span>
          </h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto my-4 rounded-full"></div>
          <p className="mt-4 max-w-2xl text-lg text-gray-600 mx-auto">
            Strategic financial partnership for compliance, transparency, and sustainable business growth.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-stretch">
          {/* Left Column - About Text */}
          <div className="lg:w-1/2 flex">
            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-md border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between w-full">
              <div>
                <div className="flex items-center mb-6">
                  <div className="bg-primary-light p-3.5 rounded-xl mr-4 text-primary">
                    <ChartBarIcon className="h-7 w-7" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">Beyond Numbers</h3>
                </div>
                
                <p className="text-gray-600 mb-8 leading-relaxed text-base md:text-lg">
                  At <span className="font-semibold text-primary">S. Suresh & Associates</span>, Chartered Accountants, we believe financial excellence is more than just compliance — it is a pillar for strategic business scaling. 
                </p>
                <p className="text-gray-600 mb-8 leading-relaxed text-base md:text-lg">
                  With years of specialized audit and advisory expertise in Nepal, we deliver insights that help organizations optimize operational structures, mitigate corporate risks, and drive digital compliance integrations.
                </p>
              </div>
              
              <div className="bg-primary-light/50 p-6 rounded-xl border border-primary-light">
                <div className="flex items-center">
                  <div className="bg-primary-light p-3 rounded-xl mr-4 flex-shrink-0 text-primary">
                    <DevicePhoneMobileIcon className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider">Discuss Your Project</h4>
                    <a href="tel:+9779851135421" className="text-primary font-bold text-xl hover:underline block mt-0.5">
                       +977 (98) 5113 5421
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Mission & Strategy */}
          <div className="lg:w-1/2 flex">
            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-md border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between w-full">
              <div>
                <div className="flex items-center mb-8">
                  <div className="bg-primary-light p-3.5 rounded-xl mr-4 text-primary">
                    <TrophyIcon className="h-7 w-7" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">Our Vision & Strategy</h3>
                </div>
                
                <div className="space-y-8">
                  {/* Mission */}
                  <div className="flex items-start">
                    <div className="text-primary mt-1 mr-4">
                      <LightBulbIcon className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-800">Our Mission</h4>
                      <p className="text-gray-600 mt-1.5 leading-relaxed text-sm md:text-base">
                        To build sustainable businesses by providing reliable, value-driven audit and advisory services that uphold the highest standards of integrity, quality, and excellence.
                      </p>
                    </div>
                  </div>
                  
                  {/* Objectives */}
                  <div className="flex items-start">
                    <div className="text-primary mt-1 mr-4">
                      <ScaleIcon className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-800">Core Objectives</h4>
                      <ul className="mt-3 space-y-2.5 text-sm md:text-base">
                        <li className="text-gray-600 flex items-start">
                          <span className="text-primary-dark mr-2.5 mt-1 flex-shrink-0">
                            <ShieldCheckIcon className="h-4.5 w-4.5" />
                          </span>
                          Ensure complete financial transparency through audits
                        </li>
                        <li className="text-gray-600 flex items-start">
                          <span className="text-primary-dark mr-2.5 mt-1 flex-shrink-0">
                            <CalculatorIcon className="h-4.5 w-4.5" />
                          </span>
                          Empower firms with strategic legal and tax insights
                        </li>
                        <li className="text-gray-600 flex items-start">
                          <span className="text-primary-dark mr-2.5 mt-1 flex-shrink-0">
                            <ArrowTrendingUpIcon className="h-4.5 w-4.5" />
                          </span>
                          Foster long-term governance and structural growth
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;