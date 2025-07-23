import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 10) {
        // Scrolling down
        setVisible(false);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up
        setVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <>
      {/* Fixed header container */}
      <div className={`fixed top-0 w-full z-50 ${visible ? 'translate-y-0' : '-translate-y-full'} transition-transform duration-300`}>
        {/* Header with white background */}
        <header className="bg-white shadow-sm">
          <div className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Link to="/" className="text-2xl font-bold text-primary">
                  <img 
                    src={Logo}
                    alt="Logo" 
                    className="h-12 w-auto" 
                  />
                </Link>
              </div>
              
              {/* Mobile menu button */}
              <div className="md:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="text-gray-600 hover:text-primary focus:outline-none transition-colors duration-200"
                  aria-label="Toggle menu"
                >
                  <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    {isOpen ? (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    ) : (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    )}
                  </svg>
                </button>
              </div>
              
              {/* Desktop Navigation */}
              <nav className="hidden md:flex space-x-1">
                <Link 
                  to="/" 
                  className="px-4 py-2 text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 relative group"
                >
                  Home
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300 origin-left"></span>
                </Link>
                <Link 
                  to="/about" 
                  className="px-4 py-2 text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 relative group"
                >
                  About Us
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300 origin-left"></span>
                </Link>
                <Link 
                  to="/services" 
                  className="px-4 py-2 text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 relative group"
                >
                  Services
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300 origin-left"></span>
                </Link>
                <Link 
                  to="/contact" 
                  className="px-4 py-2 text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 relative group"
                >
                  Contact
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300 origin-left"></span>
                </Link>
              </nav>
            </div>
          </div>
        </header>
        
        {/* Mobile Navigation - Absolute positioned overlay */}
        {isOpen && (
          <div className="md:hidden bg-white shadow-lg absolute w-full z-50">
            <div className="container mx-auto px-6 py-3">
              <div className="flex flex-col space-y-1">
                <Link 
                  to="/" 
                  className="px-4 py-3 text-gray-700 hover:text-primary hover:bg-gray-50 font-medium rounded-md transition-colors duration-200 relative group"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                  <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </Link>
                <Link 
                  to="/about" 
                  className="px-4 py-3 text-gray-700 hover:text-primary hover:bg-gray-50 font-medium rounded-md transition-colors duration-200 relative group"
                  onClick={() => setIsOpen(false)}
                >
                  About Us
                  <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </Link>
                <Link 
                  to="/services" 
                  className="px-4 py-3 text-gray-700 hover:text-primary hover:bg-gray-50 font-medium rounded-md transition-colors duration-200 relative group"
                  onClick={() => setIsOpen(false)}
                >
                  Services
                  <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </Link>
                <Link 
                  to="/contact" 
                  className="px-4 py-3 text-gray-700 hover:text-primary hover:bg-gray-50 font-medium rounded-md transition-colors duration-200 relative group"
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                  <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* Spacer div to prevent content from being hidden under fixed header */}
      <div className="h-20"></div>
    </>
  );
};

export default Header;