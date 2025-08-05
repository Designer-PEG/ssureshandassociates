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
    <section className="relative h-[80vh] flex items-center">
      {/* Background Image with proper overlay */}
      <div className="absolute inset-0 overflow-hidden h-full">
        <div className="relative w-full h-full">
          {/* Image */}
          <img 
            src={currentBg} 
            alt="Festival background" 
            className="w-full h-full object-cover"
          />
          {/* Dark overlay - only if showing text */}
          <div className={`absolute inset-0 ${showText ? 'bg-black/60' : ''}`}></div>
        </div>
      </div>
      
      {/* Content - Adjusted to be on the left side - only shown when showText is true */}
      {showText && (
        <div className="container mx-auto px-6 relative z-10 text-white w-full">
          <div className="max-w-3xl text-left">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                <span className='text-blue-800'>S</span>
                <span className='text-green-600'>. Suresh </span> 
                <span className='text-neutral-300'>& Associates</span>
              </h1>
              <p className="text-xl md:text-2xl text-purple-200">
                A Responsible & Proficient Management Consultant.
              </p>
              <div className="pt-4">
                <Link 
                  to="/about" 
                  className="relative text-lg font-medium group transition-all duration-300 inline-block"
                >
                  <span className="relative">
                    Learn more about us
                    <span className="absolute left-0 bottom-0 h-0.5 bg-amber-400 w-0 group-hover:w-full transition-all duration-500"></span>
                  </span>
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-white/30"></span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;