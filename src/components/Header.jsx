import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { siteConfig } from '../data/siteContent';
import Logo from '../assets/logo.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Insights', path: '/insights' },
    { name: 'Contact', path: '/contact' }
  ];

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <>
      {/* Fixed top header shell */}
      <div className="fixed top-0 w-full z-50 transition-all duration-300">
        
        {/* Navbar */}
        <header 
          className={`transition-all duration-300 ${
            isScrolled 
              ? 'bg-brand-navy/95 backdrop-blur-md shadow-lg border-b border-white/5 py-3' 
              : 'bg-brand-navy border-b border-white/5 py-5'
          }`}
        >
          <div className="container mx-auto px-6">
            <div className="flex items-center justify-between">
              
              {/* Brand logo image replacement */}
              <Link to="/" className="flex items-center group" aria-label="S. Suresh & Associates Home">
                <img 
                  src={Logo} 
                  alt="S. Suresh & Associates Logo" 
                  className="h-10 md:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </Link>

              {/* Desktop Nav */}
              <nav className="hidden md:flex items-center space-x-1">
                {navLinks.map((link) => {
                  const active = isActive(link.path);
                  return (
                    <Link 
                      key={link.name}
                      to={link.path} 
                      className={`px-4 py-2 text-sm font-semibold transition-all duration-300 relative group font-sans-ui ${
                        active 
                          ? 'text-brand-gold font-bold' 
                          : 'text-gray-300 hover:text-white'
                      }`}
                    >
                      {link.name}
                      <span 
                        className={`absolute bottom-0 left-4 right-4 h-0.5 bg-brand-gold transition-all duration-300 origin-left ${
                          active ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                        }`}
                      ></span>
                    </Link>
                  );
                })}
              </nav>

              {/* Desktop CTA Button */}
              <div className="hidden md:flex items-center">
                <Link 
                  to="/contact" 
                  className="px-5 py-2.5 bg-brand-gold text-white text-xs font-bold font-sans-ui tracking-wider uppercase hover:bg-white hover:text-brand-navy transition-all duration-300 shadow-md focus:ring-2 focus:ring-brand-gold/30"
                >
                  Book a consultation
                </Link>
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden">
                <button
                  onClick={() => setIsOpen(true)}
                  className="text-gray-300 hover:text-brand-gold focus:outline-none p-2 rounded-lg transition-colors duration-200"
                  aria-label="Open menu"
                  aria-expanded={isOpen}
                >
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>

            </div>
          </div>
        </header>
      </div>

      {/* Mobile Drawer Backplane */}
      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-xs z-50 md:hidden transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />
      
      {/* Mobile Menu Drawer */}
      <div 
        className={`fixed top-0 right-0 h-full w-80 bg-brand-navy z-50 shadow-2xl md:hidden transform transition-transform duration-300 ease-in-out flex flex-col border-l border-white/5 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation"
      >
        <div className="flex justify-between items-center px-6 py-5 border-b border-white/5">
          <Link 
            to="/" 
            className="flex items-center gap-2"
            onClick={() => setIsOpen(false)}
          >
            <img 
              src={Logo} 
              alt="S. Suresh & Associates Logo" 
              className="h-8 w-auto object-contain"
            />
          </Link>
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-400 hover:text-brand-gold p-2 rounded-lg transition-colors"
            aria-label="Close menu"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav className="flex-grow px-6 py-8 space-y-4 overflow-y-auto">
          <Link 
            to="/" 
            className={`flex items-center px-4 py-3 rounded-lg text-base font-semibold font-sans-ui transition-all duration-200 ${
              isActive('/') 
                ? 'text-brand-gold bg-white/5 font-bold' 
                : 'text-gray-300 hover:text-brand-gold hover:bg-white/5'
            }`}
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          {navLinks.map((link) => {
            const active = isActive(link.path);
            return (
              <Link 
                key={link.name}
                to={link.path} 
                className={`flex items-center px-4 py-3 rounded-lg text-base font-semibold font-sans-ui transition-all duration-200 ${
                  active 
                    ? 'text-brand-gold bg-white/5 font-bold' 
                    : 'text-gray-300 hover:text-brand-gold hover:bg-white/5'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        <div className="p-6 border-t border-white/5 bg-black/20 text-center">
          <Link 
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="block w-full py-3.5 bg-brand-gold text-white text-xs font-bold uppercase tracking-wider hover:bg-white hover:text-brand-navy transition-colors duration-300"
          >
            Book a consultation
          </Link>
          <p className="text-[10px] text-gray-500 mt-4 tracking-wider uppercase font-sans-ui">
            Established {siteConfig.firmInfo.establishedYear} • {siteConfig.firmInfo.location}
          </p>
        </div>
      </div>
      
      {/* Spacer to prevent page content overlap */}
      <div className="h-20 md:h-22"></div>
    </>
  );
};

export default Header;