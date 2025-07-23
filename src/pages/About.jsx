import { BuildingOfficeIcon, ScaleIcon, ChartBarIcon, ShieldCheckIcon, LightBulbIcon, ArrowTrendingUpIcon } from '@heroicons/react/24/outline';
import Suresh from '../assets/Suresh.png';
import Pujan from '../assets/Pujan.png';
import Bibek from '../assets/Bibek.jpg';
import about from '../assets/about.jpg';
import About1 from '../assets/About_1.jpg';
import Graph from '../assets/Graph.png';
import Prakash from '../assets/Prakash.jpg';
import Jeshan from '../assets/Jeshan.jpg';
import Damodar from '../assets/Damodar.png';

export default function AboutUs() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-indigo-800">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover transition-all duration-500 hover:scale-105"
            src={about}
            alt=""
          />
          <div className="absolute inset-0 bg-indigo-800 mix-blend-multiply" aria-hidden="true" />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl transition-all duration-300 hover:text-indigo-100">
            About S. Suresh & Associates
          </h1>
          <p className="mt-6 text-xl text-indigo-100 max-w-3xl transition-all duration-300 hover:text-white">
            Chartered Accountants serving as your strategic partner in compliance, growth, and governance.
          </p>
        </div>
      </div>

      {/* Introduction */}
      <div className="py-16 bg-gray-50 overflow-hidden transition-all duration-300 hover:bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl transition-all duration-300 hover:text-indigo-700">
                Welcome to S. Suresh & Associates
              </h2>
              <p className="mt-3 text-lg text-gray-500 transition-all duration-300 hover:text-gray-700">
                At S. Suresh & Associates, Chartered Accountants, we go beyond numbers. With years of expertise across industries, we deliver insightful audits, practical advisory, and digital transformation solutions to elevate your business performance.
              </p>
              <div className="mt-8 sm:flex">
                <div className="rounded-md shadow transition-transform duration-300 hover:scale-105">
                  <a
                    href="tel:9851135421"
                    className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-300"
                  >
                    <span className="mr-2">📞</span> Call us today: 9851135421
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-12 lg:mt-0">
              <div className="relative overflow-hidden rounded-lg shadow-xl transition-all duration-500 hover:shadow-2xl">
                <img
                  className="w-full rounded-lg transition-transform duration-500 hover:scale-110"
                  src={About1}
                  alt="Team working"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-16 bg-white overflow-hidden transition-all duration-300 hover:bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div className="lg:order-2">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl transition-all duration-300 hover:text-indigo-700">
                Our Mission
              </h2>
              <p className="mt-3 text-lg text-gray-500 transition-all duration-300 hover:text-gray-700">
                To build sustainable businesses by providing reliable, value-driven audit and advisory services that uphold the highest standards of integrity and excellence.
              </p>
            </div>
            <div className="mt-12 lg:mt-0 lg:order-1">
              <div className="relative overflow-hidden rounded-lg shadow-xl transition-all duration-500 hover:shadow-2xl">
                <img
                  className="w-full rounded-lg transition-transform duration-500 hover:scale-110"
                  src={Graph}
                  alt="Mission illustration"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Objectives */}
      <div className="py-16 bg-gray-50 overflow-hidden transition-all duration-300 hover:bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl transition-all duration-300 hover:text-indigo-700">
              Our Objectives
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto transition-all duration-300 hover:text-gray-700">
              Driving excellence in financial services and business advisory
            </p>
          </div>

          <div className="mt-16">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {/* Objective 1 */}
              <div className="pt-6 transition-transform duration-300 hover:-translate-y-2">
                <div className="flow-root bg-white rounded-lg px-6 pb-8 h-full shadow-md transition-all duration-300 hover:shadow-xl hover:border-indigo-500 hover:border-t-4">
                  <div className="-mt-6">
                    <div className="transition-transform duration-300 hover:scale-110">
                      <span className="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg">
                        <ScaleIcon className="h-6 w-6 text-white" aria-hidden="true" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight transition-all duration-300 hover:text-indigo-700">Financial Transparency</h3>
                    <p className="mt-5 text-base text-gray-500 transition-all duration-300 hover:text-gray-700">
                      Ensure financial transparency through efficient audits that provide clear insights into your business operations.
                    </p>
                  </div>
                </div>
              </div>

              {/* Objective 2 */}
              <div className="pt-6 transition-transform duration-300 hover:-translate-y-2">
                <div className="flow-root bg-white rounded-lg px-6 pb-8 h-full shadow-md transition-all duration-300 hover:shadow-xl hover:border-indigo-500 hover:border-t-4">
                  <div className="-mt-6">
                    <div className="transition-transform duration-300 hover:scale-110">
                      <span className="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg">
                        <LightBulbIcon className="h-6 w-6 text-white" aria-hidden="true" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight transition-all duration-300 hover:text-indigo-700">Strategic Insights</h3>
                    <p className="mt-5 text-base text-gray-500 transition-all duration-300 hover:text-gray-700">
                      Empower businesses with strategic and tax insights that drive informed decision-making and growth.
                    </p>
                  </div>
                </div>
              </div>

              {/* Objective 3 */}
              <div className="pt-6 transition-transform duration-300 hover:-translate-y-2">
                <div className="flow-root bg-white rounded-lg px-6 pb-8 h-full shadow-md transition-all duration-300 hover:shadow-xl hover:border-indigo-500 hover:border-t-4">
                  <div className="-mt-6">
                    <div className="transition-transform duration-300 hover:scale-110">
                      <span className="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg">
                        <ArrowTrendingUpIcon className="h-6 w-6 text-white" aria-hidden="true" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight transition-all duration-300 hover:text-indigo-700">Sustainable Growth</h3>
                    <p className="mt-5 text-base text-gray-500 transition-all duration-300 hover:text-gray-700">
                      Foster accountability and sustainable growth for clients through comprehensive financial planning.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-16 bg-white overflow-hidden transition-all duration-300 hover:bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase transition-all duration-300 hover:text-indigo-800">Our Values</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl transition-all duration-300 hover:text-indigo-700">
              The Foundation of Our Practice
            </p>
          </div>

          <div className="mt-10">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              <div className="relative group">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white transition-all duration-300 group-hover:bg-indigo-700 group-hover:scale-110">
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900 transition-all duration-300 group-hover:text-indigo-700">Integrity</p>
                <p className="mt-2 ml-16 text-base text-gray-500 transition-all duration-300 group-hover:text-gray-700">
                  Uncompromising ethical standards in all our engagements and recommendations.
                </p>
              </div>

              <div className="relative group">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white transition-all duration-300 group-hover:bg-indigo-700 group-hover:scale-110">
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                  </svg>
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900 transition-all duration-300 group-hover:text-indigo-700">Expertise</p>
                <p className="mt-2 ml-16 text-base text-gray-500 transition-all duration-300 group-hover:text-gray-700">
                  Deep technical knowledge combined with practical business acumen.
                </p>
              </div>

              <div className="relative group">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white transition-all duration-300 group-hover:bg-indigo-700 group-hover:scale-110">
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                  </svg>
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900 transition-all duration-300 group-hover:text-indigo-700">Innovation</p>
                <p className="mt-2 ml-16 text-base text-gray-500 transition-all duration-300 group-hover:text-gray-700">
                  Embracing technology to deliver forward-thinking solutions for our clients.
                </p>
              </div>

              <div className="relative group">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white transition-all duration-300 group-hover:bg-indigo-700 group-hover:scale-110">
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900 transition-all duration-300 group-hover:text-indigo-700">Client-Centric Approach</p>
                <p className="mt-2 ml-16 text-base text-gray-500 transition-all duration-300 group-hover:text-gray-700">
                  Tailored solutions that address unique business challenges and opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Leadership Section */}
{/* Leadership Section */}
<div className="py-16 bg-gray-50 overflow-hidden transition-all duration-300 hover:bg-gray-100">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center">
      <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl transition-all duration-300 hover:text-indigo-700">
        Our Leadership
      </h2>
      <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto transition-all duration-300 hover:text-gray-700">
        Experienced professionals guiding your financial success
      </p>
    </div>

    <div className="mt-16 flex justify-center">
      {/* Centered container */}
      <div className="flex flex-col items-center transition-transform duration-300 hover:scale-105">
        <div className="group relative flex flex-col items-center">
          {/* Image container - now properly centered */}
          <div className="bg-white w-[250px] rounded-lg overflow-hidden shadow-xl transition-all duration-500 group-hover:shadow-2xl flex justify-center">
            <img
              src={Suresh}
              alt="S. Suresh"
              className="block h-auto max-h-[300px] w-full object-cover mx-auto"
              style={{ 
                aspectRatio: '632/764',
                display: 'block'
              }}
            />
          </div>
          {/* Text content */}
          <div className="mt-6 text-center w-full">
            <h3 className="text-2xl font-medium text-gray-900 transition-all duration-300 group-hover:text-indigo-700">
              Suresh Sharma
            </h3>
            <p className="text-lg text-gray-500 mt-2 transition-all duration-300 group-hover:text-indigo-600">
              Founder & Managing Partner
            </p>
            <p className="mt-4 text-base text-gray-600 max-w-2xl mx-auto transition-all duration-300 group-hover:text-gray-700">
              With over 10+ years of experience, CEO Suresh leads our firm with a commitment to excellence in audit and advisory services, ensuring our clients achieve their financial goals.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

      {/* Team Section */}
      <div className="py-16 bg-white overflow-hidden transition-all duration-300 hover:bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl transition-all duration-300 hover:text-indigo-700">
              Our Team
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto transition-all duration-300 hover:text-gray-700">
              Dedicated professionals committed to your financial success
            </p>
          </div>

          <div className="mt-16">
            <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
              {/* Team Member 1 */}
              <div className="text-center transition-transform duration-300 hover:-translate-y-2">
                <div className="relative w-40 h-40 mx-auto rounded-full overflow-hidden border-4 border-indigo-100 shadow-lg transition-all duration-500 hover:border-red-600 hover:shadow-xl hover:cursort-pointer">
                  <img
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    src={Damodar}
                    alt="Damodhar Paudel"
                  />
                </div>
                <h3 className="mt-6 text-xl font-medium text-gray-900 transition-all duration-300 hover:text-indigo-700">Damodhar Paudel</h3>
                <p className="text-lg text-gray-500 mt-2 transition-all duration-300 hover:text-indigo-600">Head Officer/Director & Managing Partner</p>
                <p className="mt-4 text-base text-gray-600 transition-all duration-300 hover:text-gray-700">
                  Specializes in corporate taxation and audit with 10+ years of experience across multiple industries.
                </p>
              </div>

              {/* Team Member 3 */}
              <div className="text-center transition-transform duration-300 hover:-translate-y-2">
                <div className="relative w-40 h-40 mx-auto rounded-full overflow-hidden border-4 border-indigo-100 shadow-lg transition-all duration-500 hover:border-blue-400 hover:shadow-xl hover:cursort-pointer">
                  <img
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    src={Jeshan}
                    alt="Jeshan Neupane"
                  />
                </div>
                <h3 className="mt-6 text-xl font-medium text-gray-900 transition-all duration-300 hover:text-indigo-700">Jeshan Neupane</h3>
                <p className="text-lg text-gray-500 mt-2 transition-all duration-300 hover:text-indigo-600">Audit & Compliance Officer</p>
                <p className="mt-4 text-base text-gray-600 transition-all duration-300 hover:text-gray-700">
                  Oversees all audit engagements with a focus on risk management and compliance.
                </p>
              </div>

              {/* Team Member 4 */}
              <div className="text-center transition-transform duration-300 hover:-translate-y-2">
                <div className="relative w-40 h-40 mx-auto rounded-full overflow-hidden border-4 border-indigo-100 shadow-lg transition-all duration-500 hover:border-teal-600 hover:shadow-xl hover:cursort-pointer">
                  <img
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    src={Bibek}
                    alt="Bibek Shahi"
                  />
                </div>
                <h3 className="mt-6 text-xl font-medium text-gray-900 transition-all duration-300 hover:text-indigo-700">Bibek Shahi</h3>
                <p className="text-lg text-gray-500 mt-2 transition-all duration-300 hover:text-indigo-600">Audit Officer</p>
                <p className="mt-4 text-base text-gray-600 transition-all duration-300 hover:text-gray-700">
                  Provides expert guidance on tax planning and compliance for individuals and businesses.
                </p>
              </div>

              {/* Team Member 5 */}
              <div className="text-center transition-transform duration-300 hover:-translate-y-2">
                <div className="relative w-40 h-40 mx-auto rounded-full overflow-hidden border-4 border-indigo-100 shadow-lg transition-all duration-500 hover:border-green-400 hover:shadow-xl hover:cursort-pointer">
                  <img
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    src={Pujan}
                    alt="Pujan Joshi"
                  />
                </div>
                <h3 className="mt-6 text-xl font-medium text-gray-900 transition-all duration-300 hover:text-indigo-700">Pujan Joshi</h3>
                <p className="text-lg text-gray-500 mt-2 transition-all duration-300 hover:text-indigo-600">IT & Software Designer</p>
                <p className="mt-4 text-base text-gray-600 transition-all duration-300 hover:text-gray-700">
                  Specializes in digital transformation and IT systems.
                </p>
              </div>

              <div className="text-center transition-transform duration-300 hover:-translate-y-2">
                <div className="relative w-40 h-40 mx-auto rounded-full overflow-hidden border-4 border-indigo-100 shadow-lg transition-all duration-500 hover:border-indigo-600 hover:shadow-xl hover:cursort-pointer">
                  <img
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    src={Prakash}
                    alt="Prakash Chaulagai"
                  />
                </div>
                <h3 className="mt-6 text-xl font-medium text-gray-900 transition-all duration-300 hover:text-blue-700">Prakash Chaulagai</h3>
                <p className="text-lg text-gray-500 mt-2 transition-all duration-300 hover:text-indigo-600">Audit & Compliance Officer</p>
                <p className="mt-4 text-base text-gray-600 transition-all duration-300 hover:text-gray-700">
                  Focuses on internal audits and compliance to ensure regulatory adherence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}