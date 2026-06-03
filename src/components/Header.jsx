import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../assets/logo.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [visible, setVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Determine header visibility (hide on scroll down, show on scroll up)
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setVisible(false);
      } else {
        setVisible(true);
      }

      // Determine scrolled state (for compact layout and shadow)
      if (currentScrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

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
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' }
  ];

  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <>
      {/* Fixed header container */}
      <div 
        className={`fixed top-0 w-full z-50 ${visible ? 'translate-y-0' : '-translate-y-full'} transition-all duration-300`}
      >
        {/* Header with glassmorphism or solid bg based on scroll */}
        <header 
          className={`transition-all duration-300 ${
            isScrolled 
              ? 'bg-white/95 backdrop-blur-md shadow-md py-2 border-b border-gray-100' 
              : 'bg-white py-4 shadow-sm'
          }`}
        >
          <div className="container mx-auto px-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Link to="/" className="text-2xl font-bold flex items-center" aria-label="Home">
                  <img 
                    src={Logo}
                    alt="S. Suresh & Associates Logo" 
                    className="h-10 md:h-12 w-auto transition-all duration-300" 
                  />
                </Link>
              </div>
              
              {/* Mobile menu button */}
              <div className="md:hidden">
                <button
                  onClick={() => setIsOpen(true)}
                  className="text-gray-600 hover:text-primary focus:outline-none p-2 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                  aria-label="Open menu"
                  aria-expanded={isOpen}
                >
                  <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
              
              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center space-x-1">
                {navLinks.map((link) => {
                  const active = isActive(link.path);
                  return (
                    <Link 
                      key={link.name}
                      to={link.path} 
                      className={`px-4 py-2 text-sm font-semibold transition-all duration-300 relative group ${
                        active 
                          ? 'text-primary' 
                          : 'text-gray-600 hover:text-primary'
                      }`}
                    >
                      {link.name}
                      <span 
                        className={`absolute bottom-0 left-4 right-4 h-0.5 bg-primary transition-all duration-300 origin-left ${
                          active ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                        }`}
                      ></span>
                    </Link>
                  );
                })}
              </nav>
            </div>
          </div>
        </header>
      </div>

      {/* Mobile Navigation Drawer - Slide-out drawer with backdrop */}
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/50 backdrop-blur-xs z-50 md:hidden transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />
      
      {/* Drawer */}
      <div 
        className={`fixed top-0 right-0 h-full w-72 bg-white z-50 shadow-2xl md:hidden transform transition-transform duration-300 ease-in-out flex flex-col ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation"
      >
        <div className="flex justify-between items-center px-6 py-5 border-b border-gray-100">
          <span className="font-bold text-lg text-gray-800">Menu</span>
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-500 hover:text-primary focus:outline-none p-2 rounded-lg hover:bg-gray-50 transition-colors duration-200"
            aria-label="Close menu"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav className="flex-grow px-4 py-6 space-y-2 overflow-y-auto">
          {navLinks.map((link) => {
            const active = isActive(link.path);
            return (
              <Link 
                key={link.name}
                to={link.path} 
                className={`flex items-center px-4 py-3 rounded-lg text-base font-semibold transition-all duration-200 ${
                  active 
                    ? 'text-primary bg-primary-light' 
                    : 'text-gray-600 hover:text-primary hover:bg-gray-50'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        <div className="p-6 border-t border-gray-100 bg-gray-50 text-center">
          <p className="text-xs text-gray-500 font-medium">S. Suresh & Associates</p>
          <p className="text-xs text-gray-400 mt-1">Chartered Accountants</p>
        </div>
      </div>
      
      {/* Spacer div to prevent content from being hidden under fixed header */}
      <div className="h-20"></div>
    </>
  );
};

export default Header;