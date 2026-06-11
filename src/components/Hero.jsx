import { useState, useEffect } from 'react';
import heroBg from '../assets/hero-bg.jpg';
import Rakhi from '../assets/rakhi.jpg';
import Gaijatra from '../assets/gaijatra.jpg';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [currentBg, setCurrentBg] = useState(heroBg);
  const [showText, setShowText] = useState(true);

  useEffect(() => {
    const checkDate = () => {
      const currentDate = new Date();
      // August is month 7 in JavaScript (0-indexed)
      const isRakhi = currentDate.getDate() === 9 && currentDate.getMonth() === 7 && currentDate.getFullYear() === 2025;
      const isGaijatra = currentDate.getDate() === 10 && currentDate.getMonth() === 7 && currentDate.getFullYear() === 2025;

      if (isRakhi) {
        setCurrentBg(Rakhi);
        setShowText(false);
      } else if (isGaijatra) {
        setCurrentBg(Gaijatra);
        setShowText(false);
      } else {
        setCurrentBg(heroBg);
        setShowText(true);
      }
    };

    checkDate();
  }, []);

  return (
    <section className="relative h-[93vh] min-h-[600px] flex items-center bg-gray-900 overflow-hidden">
      {/* Background Image with proper overlay */}
      <div className="absolute inset-0 overflow-hidden h-full">
        <div className="relative w-full h-full">
          {/* Image */}
          <img 
            src={currentBg} 
            alt="Professional background" 
            className="w-full h-full object-cover object-center transform scale-100 transition-transform duration-10000"
          />
          {/* Dark overlay - darker to ensure WCAG color contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/80 via-neutral-900/65 to-neutral-900/45"></div>
        </div>
      </div>
      
      {/* Content - Left Aligned for reading gravity */}
      {showText && (
        <div className="container mx-auto px-6 relative z-10 text-white w-full">
          <div className="max-w-3xl text-left">
            <div className="space-y-6">
              {/* Brand Overline */}
              <span className="inline-block text-blue-400 font-bold uppercase tracking-widest text-xs md:text-sm">
                S. Suresh & Associates
              </span>
              
              {/* Main Headline */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-white">
                Navigate Compliance. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                  Secure Business Growth.
                </span>
              </h1>
              
              {/* Subheading */}
              <p className="text-lg md:text-xl text-neutral-200 font-light leading-relaxed max-w-2xl">
                Chartered Accountants delivering professional auditing, strategic tax advisory, and digital compliance solutions tailored for enterprises in Nepal.
              </p>
              
              {/* Dual CTA Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/contact" 
                  className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-center hover:scale-[1.02] focus:ring-4 focus:ring-blue-500/30"
                >
                  Schedule Consultation
                </Link>
                <Link 
                  to="/services" 
                  className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg backdrop-blur-xs border border-white/30 transition-all duration-300 text-center hover:scale-[1.02]"
                >
                  Explore Services
                </Link>
              </div>

              {/* Microcopy & Trust signals under CTA */}
              <div className="pt-8 flex flex-wrap items-center gap-y-3 gap-x-6 text-sm text-neutral-300 border-t border-white/10 max-w-xl">
                <div className="flex items-center gap-2">
                  <span className="text-amber-400 text-lg">★★★★★</span>
                  <span>10+ Years Trust</span>
                </div>
                <div className="hidden sm:block h-4 w-px bg-white/25"></div>
                <div className="flex items-center gap-1.5">
                  <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <span>Licensed by ICAN</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;