import { useState, useEffect } from 'react';
import heroBg from '../assets/hero-bg.jpg';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative h-[80vh] flex items-center">
      {/* Background Image with proper overlay */}
      <div className="absolute inset-0 overflow-hidden h-full">
        <div className="relative w-full h-full">
          {/* Image */}
          <img 
            src={heroBg} 
            alt="Audit firm office" 
            className="w-full h-full object-cover"
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
      </div>
      
      {/* Content - Adjusted to be on the left side */}
      <div className="container mx-auto px-6 relative z-10 text-white w-full">
        <div className="max-w-3xl text-left">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              <span className='text-blue-800'>S</span>
              <span className='text-green-600'>. Suresh </span> 
              <span className='text-neutral-300'>& Associates</span>
            </h1>
            <p className="text-xl md:text-2xl text-purple-200">
              Providing service over a decade.
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
    </section>
  );
};

export default Hero;