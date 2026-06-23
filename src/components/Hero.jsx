import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../data/siteContent';

// Import local assets
import heroBg from '../assets/hero-bg.jpg';
import Rakhi from '../assets/rakhi.jpg';
import Gaijatra from '../assets/gaijatra.jpg';

const Hero = () => {
  const [currentBg, setCurrentBg] = useState(heroBg);
  const [isHolidayBg, setIsHolidayBg] = useState(false);

  useEffect(() => {
    const checkDate = () => {
      const currentDate = new Date();
      // August is month 7 in JavaScript (0-indexed)
      const isRakhi = currentDate.getDate() === 9 && currentDate.getMonth() === 7 && currentDate.getFullYear() === 2025;
      const isGaijatra = currentDate.getDate() === 10 && currentDate.getMonth() === 7 && currentDate.getFullYear() === 2025;

      if (isRakhi) {
        setCurrentBg(Rakhi);
        setIsHolidayBg(true);
      } else if (isGaijatra) {
        setCurrentBg(Gaijatra);
        setIsHolidayBg(true);
      } else {
        setCurrentBg(heroBg);
        setIsHolidayBg(false);
      }
    };
    checkDate();
  }, []);

  return (
    <section className="relative h-[85vh] min-h-[600px] flex items-center bg-brand-navy overflow-hidden">
      
      {/* Background Image & Sheet Grid Overlay */}
      <div className="absolute inset-0 overflow-hidden h-full">
        <div className="relative w-full h-full">
          {/* Image */}
          <img 
            src={currentBg} 
            alt="Chartered Accountancy Ledger Backdrop" 
            className="w-full h-full object-cover object-center transform scale-100 transition-transform duration-[10000ms] opacity-65"
          />
          {/* Linear gradient shade to ensure high contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/85 to-brand-navy/60"></div>
          
          {/* Ledger columns (hairline sheet guide) */}
          <div className="absolute inset-0 grid grid-cols-4 md:grid-cols-6 opacity-[0.04] pointer-events-none">
            <div className="border-r border-white border-hairline-dark h-full"></div>
            <div className="border-r border-white border-hairline-dark h-full"></div>
            <div className="border-r border-white border-hairline-dark h-full"></div>
            <div className="border-r border-white border-hairline-dark h-full"></div>
            <div className="border-r border-white border-hairline-dark h-full"></div>
            <div className="h-full"></div>
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 text-white w-full">
        <div className="max-w-3xl text-left">
          
          {/* Eyebrow line */}
          <span className="inline-block text-brand-gold font-sans-ui font-bold uppercase tracking-[0.25em] text-xs md:text-sm">
            {siteConfig.firmInfo.name} • Established {siteConfig.firmInfo.establishedYear}
          </span>
          
          {/* Main Serif Headline */}
          <h1 className="font-serif-display text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] text-white mt-4 max-w-2xl">
            Precision in Auditing.<br />
            <span className="text-brand-gold">
              Balance in Strategy.
            </span>
          </h1>
          
          {/* Checked supporting copy using ONLY the confirmed facts */}
          <p className="font-sans-ui text-base md:text-lg text-gray-300 font-light leading-relaxed max-w-xl mt-6">
            Licensed Chartered Accountants in Nepal delivering professional auditing, tax planning, GST filing, accounting, and financial advisory services since {siteConfig.firmInfo.establishedYear}.
          </p>
          
          {/* Action CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link 
              to="/contact" 
              className="px-8 py-4 bg-brand-gold hover:bg-white text-brand-navy font-bold text-xs tracking-wider uppercase transition-all duration-300 text-center hover:scale-[1.02] shadow-lg focus:ring-4 focus:ring-brand-gold/30"
            >
              Book a consultation
            </Link>
            <Link 
              to="/services" 
              className="px-8 py-4 border border-white/20 hover:border-brand-gold hover:text-brand-gold text-white font-bold text-xs tracking-wider uppercase transition-all duration-300 text-center hover:scale-[1.02]"
            >
              Explore Services
            </Link>
          </div>
          
          {/* Dynamic Holiday Flag (preserved DNA) */}
          {isHolidayBg && (
            <div className="mt-8 inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 px-3 py-1.5 rounded-lg text-amber-400 text-xs font-semibold">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-amber-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
              <span>Celebrating dynamic seasonal themes.</span>
            </div>
          )}
          
        </div>
      </div>
      
    </section>
  );
};

export default Hero;