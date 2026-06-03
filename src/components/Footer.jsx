import { Link } from 'react-router-dom';
import servicesData from '../data/services.json';

const Footer = () => {
  // Use first 5 services instead of random sorting to maintain UI consistency
  const footerServices = servicesData.slice(0, 5);

  return (
    <footer className="bg-neutral-900 text-neutral-100 py-16 border-t border-neutral-800">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="space-y-5">
            <h3 className="text-2xl font-bold tracking-tight">
              <Link to="/" className="hover:opacity-90 transition-opacity">
                <span className="text-blue-500">S. Suresh</span>
                <span className="text-neutral-300 font-light"> & Associates</span>
              </Link>
            </h3>
            <p className="text-neutral-400 font-light leading-relaxed text-sm">
              Chartered Accountants providing strategic partnership in compliance, growth, and governance since 2016.
            </p>
            <div className="pt-2 text-sm">
              <p className="text-emerald-500 font-semibold">Business Hours:</p>
              <p className="text-neutral-400 mt-1">10:00 AM - 5:00 PM, Sunday - Friday</p>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold mb-6 uppercase tracking-wider text-neutral-300">Navigation</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/" className="text-neutral-400 hover:text-white hover:underline transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-neutral-400 hover:text-white hover:underline transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-neutral-400 hover:text-white hover:underline transition-colors duration-200">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/insights" className="text-neutral-400 hover:text-white hover:underline transition-colors duration-200">
                  Insights
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-neutral-400 hover:text-white hover:underline transition-colors duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold mb-6 uppercase tracking-wider text-neutral-300">Our Expertise</h4>
            <ul className="space-y-3 text-sm">
              {footerServices.map((service) => (
                <li key={service.id}>
                  <Link 
                    to={`/services/${service.id}`} 
                    className="text-neutral-400 hover:text-white hover:underline transition-colors duration-200"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold mb-6 uppercase tracking-wider text-neutral-300">Reach Us</h4>
            <address className="text-neutral-400 not-italic space-y-4 text-sm">
              <div>
                <p className="font-semibold text-neutral-300">Head Office:</p>
                <p className="mt-1">
                  <a 
                    href="https://maps.app.goo.gl/StsAueTS1QknMu7x5" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 hover:underline inline-flex items-center"
                  >
                    Tinkune, Kathmandu, Nepal
                    <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </p>
              </div>
              <div>
                <p className="font-semibold text-neutral-300">Direct Contact:</p>
                <p className="mt-1">
                  <a href="tel:+9779851135421" className="hover:text-white transition-colors">
                    +977 (98) 5113 5421
                  </a>
                </p>
                <p className="mt-1">
                  <a href="mailto:2015casuresh@gmail.com" className="hover:text-white transition-colors">
                    2015casuresh@gmail.com
                  </a>
                </p>
              </div>
            </address>
          </div>
        </div>
        
        {/* Divider & Copyright */}
        <div className="border-t border-neutral-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-neutral-500 text-sm">
              &copy; {new Date().getFullYear()} S. Suresh & Associates, CA. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacypolicy" className="text-neutral-500 hover:text-neutral-300 transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-neutral-500 hover:text-neutral-300 transition-colors duration-200">
                Terms of Service
              </Link>
              <Link to="/sitemap" className="text-neutral-500 hover:text-neutral-300 transition-colors duration-200">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;