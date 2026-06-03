// src/pages/AboutUs.jsx
import { 
  BuildingOfficeIcon, 
  ScaleIcon, 
  ChartBarIcon, 
  ShieldCheckIcon, 
  LightBulbIcon, 
  ArrowTrendingUpIcon,
  AcademicCapIcon,
  CheckBadgeIcon
} from '@heroicons/react/24/outline';
import teamData from '../data/teamData.json';

// Import all images
import about from '../assets/about.jpg';
import About1 from '../assets/About_1.jpg';
import SureshImg from '../assets/Suresh.png';
import PujanImg from '../assets/Pujan.png';
import BibekImg from '../assets/Bibek.jpg';
import PrakashImg from '../assets/Prakash.jpg';
import JeshanImg from '../assets/Jeshan.png';
import ShashankImg from '../assets/Shashank.jpg';
import DamodarImg from '../assets/Damodar.png';
import AnujImg from '../assets/Anuj.png';

// Image mapping
const imageMap = {
  'Suresh.png': SureshImg,
  'Pujan.png': PujanImg,
  'Bibek.jpg': BibekImg,
  'Prakash.jpg': PrakashImg,
  'Jeshan.png': JeshanImg,
  'Shashank.jpg': ShashankImg,
  'Anuj.png': AnujImg,
  'Damodar.png': DamodarImg
};

export default function AboutUs() {
  const leadership = teamData.find(member => member.isLeadership);
  const teamMembers = teamData.filter(member => !member.isLeadership);

  const timelineMilestones = [
    {
      year: '2016',
      title: 'Firm Foundation',
      description: 'S. Suresh & Associates was founded by CA. Suresh Sharma in Kathmandu with a vision to deliver exceptional audit services.'
    },
    {
      year: '2019',
      title: 'Advisory Expansion',
      description: 'Expanded capabilities into Tax Planning, Corporate Governance, and Financial Management for local businesses.'
    },
    {
      year: '2022',
      title: 'Digital & ERP Audits',
      description: 'Pioneered Information System Auditing and Digital Transformation Advisory for SMEs adapting to ERP systems in Nepal.'
    },
    {
      year: '2025',
      title: 'Forensic Auditing & MIS',
      description: 'Introduced specialized Forensic Auditing investigations and customized Corporate MIS dashboard solutions.'
    }
  ];

  const credentialsList = [
    {
      title: 'ICAN Affiliation',
      description: 'Registered & licensed by the Institute of Chartered Accountants of Nepal (ICAN).'
    },
    {
      title: 'Certificate of Practice (COP)',
      description: 'Holding active Certificate of Practice for auditing public & private entities.'
    },
    {
      title: 'Tax Authority Registered',
      description: 'Certified representatives for Inland Revenue Department (IRD) matters.'
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-neutral-900 overflow-hidden h-[50vh] min-h-[400px] flex items-center">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover transition-all duration-1000 transform scale-100"
            src={about}
            alt="Suresh and Associates office header"
          />
          <div className="absolute inset-0 bg-neutral-950/70" />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-6 sm:px-8 z-10 w-full">
          <span className="text-blue-400 font-bold uppercase tracking-widest text-xs">
            Established 2016
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mt-2">
            About S. Suresh & Associates
          </h1>
          <p className="mt-6 text-lg md:text-xl text-neutral-200 max-w-3xl leading-relaxed">
            Chartered Accountants serving as your strategic partner in compliance, growth, and corporate governance in Nepal.
          </p>
        </div>
      </div>

      {/* Introduction */}
      <div className="py-24 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
            <div>
              <span className="text-blue-600 font-bold uppercase tracking-widest text-xs">
                Welcome Message
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2">
                Delivering Excellence Beyond Numbers
              </h2>
              <p className="mt-6 text-base md:text-lg text-gray-600 leading-relaxed">
                At S. Suresh & Associates, Chartered Accountants, we believe in building relationships based on trust, integrity, and proactive governance. With years of experience advising diverse clients across manufacturing, trading, and services sectors, we deliver audits and advisories that streamline operations and secure enterprise value.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="tel:+9779851135421"
                  className="inline-flex items-center justify-center px-6 py-3.5 border border-transparent text-base font-bold rounded-lg text-white bg-primary hover:bg-primary-dark shadow-md transition-all duration-300"
                >
                  <span className="mr-2">📞</span> Call office: 9851135421
                </a>
              </div>
            </div>
            <div className="mt-12 lg:mt-0">
              <div className="relative overflow-hidden rounded-2xl shadow-xl border border-gray-100 bg-white p-3">
                <img
                  className="w-full rounded-xl transition-transform duration-500 hover:scale-102"
                  src={About1}
                  alt="Team auditing and planning"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission & Vision cards */}
      <div className="py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300">
              <div className="bg-primary-light p-3 rounded-xl inline-block text-primary mb-6">
                <LightBulbIcon className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                To build sustainable businesses by providing reliable, value-driven audit and advisory services that uphold the highest standards of integrity and professional excellence.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300">
              <div className="bg-primary-light p-3 rounded-xl inline-block text-primary mb-6">
                <ArrowTrendingUpIcon className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                To serve as Nepal's premier corporate advisor, enabling local businesses to integrate sound financial practices, absolute compliance, and advanced digital workflow structures.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Values Grid */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-bold uppercase tracking-widest text-xs">
              Ethics & Values
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2">
              Our Professional Pillars
            </h2>
            <div className="w-12 h-1 bg-blue-600 mx-auto my-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
              <div className="text-blue-600 font-bold text-xl mb-3">Integrity</div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Uncompromising ethical compliance in all audits, reporting, and advisory recommendations.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
              <div className="text-blue-600 font-bold text-xl mb-3">Expertise</div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Combining technical excellence with strategic insights to resolve complex financial challenges.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
              <div className="text-blue-600 font-bold text-xl mb-3">Innovation</div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Integrating digital systems, ERP tools, and audit automation platforms for modern efficiency.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
              <div className="text-blue-600 font-bold text-xl mb-3">Client-Centricity</div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Designing tailored accounting and audit structures focused on the specific needs of each firm.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Timeline Section */}
      <div className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-bold uppercase tracking-widest text-xs">
              History
            </span>
            <h2 className="text-3xl font-extrabold text-gray-900 mt-2">
              Our Journey & Milestones
            </h2>
            <div className="w-12 h-1 bg-blue-600 mx-auto my-4 rounded-full"></div>
          </div>

          <div className="relative border-l border-gray-200 ml-4 md:ml-6 space-y-12">
            {timelineMilestones.map((milestone) => (
              <div key={milestone.year} className="relative pl-8 md:pl-10">
                {/* Visual marker */}
                <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full border-4 border-white bg-blue-600 shadow-md"></div>
                
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 shadow-xs hover:shadow-md transition-all">
                  <span className="text-blue-600 font-bold text-lg md:text-xl block mb-1">
                    {milestone.year} — {milestone.title}
                  </span>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Credentials Grid */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-bold uppercase tracking-widest text-xs">
              Credentials
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2">
              Compliance & Licensing
            </h2>
            <div className="w-12 h-1 bg-blue-600 mx-auto my-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {credentialsList.map((cred, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl border border-gray-200 shadow-xs hover:shadow-md transition-all flex items-start">
                <div className="bg-emerald-50 text-emerald-600 p-2.5 rounded-lg mr-4 flex-shrink-0">
                  <CheckBadgeIcon className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 text-base mb-1">{cred.title}</h4>
                  <p className="text-gray-500 text-xs leading-relaxed">{cred.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Leadership Section */}
      <div className="py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-bold uppercase tracking-widest text-xs">
              Leadership
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2">
              Our Leadership
            </h2>
            <div className="w-12 h-1 bg-blue-600 mx-auto my-4 rounded-full"></div>
          </div>

          <div className="mt-16 flex justify-center">
            <div className="max-w-3xl w-full bg-gray-50 rounded-2xl border border-gray-100 p-8 md:p-12 shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="flex flex-col md:flex-row items-center gap-10">
                <div className="w-56 h-72 flex-shrink-0 bg-white rounded-xl overflow-hidden shadow-md border border-gray-200/50 p-2">
                  <img
                    src={imageMap[leadership.image]}
                    alt={leadership.name}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div className="text-center md:text-left flex-grow">
                  <span className="bg-primary-light text-primary text-xs font-bold uppercase px-3 py-1 rounded-full">
                    {leadership.position}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 mt-3">
                    {leadership.name}
                  </h3>
                  <p className="mt-4 text-gray-600 leading-relaxed text-sm md:text-base">
                    {leadership.description}
                  </p>
                  <div className="mt-6">
                    <a 
                      href="https://www.linkedin.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      <svg className="w-5 h-5 mr-1.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                      </svg>
                      Connect on LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-bold uppercase tracking-widest text-xs">
              Professional Staff
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2">
              Our Associates & Team
            </h2>
            <div className="w-12 h-1 bg-blue-600 mx-auto my-4 rounded-full"></div>
            <p className="mt-4 max-w-2xl text-gray-500 mx-auto text-sm md:text-base">
              Dedicated professionals committed to your financial compliance and success.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {teamMembers.map((member) => {
              return (
                <div 
                  key={member.name} 
                  className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center"
                >
                  <div className="relative w-36 h-36 rounded-full overflow-hidden border-4 border-gray-100 shadow-md group hover:border-blue-400 transition-colors duration-300 hover:cursor-pointer">
                    <img
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      src={imageMap[member.image]}
                      alt={member.name}
                    />
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-gray-900">
                    {member.name}
                  </h3>
                  <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full mt-2">
                    {member.position}
                  </span>
                  <p className="mt-4 text-gray-500 text-sm leading-relaxed">
                    {member.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}