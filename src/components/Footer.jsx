import { Link } from 'react-router-dom';
import servicesData from '../data/services.json';

const Footer = () => {
  // Randomize the services order
  const randomizedServices = [...servicesData].sort(() => 0.5 - Math.random());

  return (
    <footer className="bg-neutral-900 text-neutral-100 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="space-y-4">
            <h3 className="text-2xl font-serif font-bold tracking-tight">S.Suresh & Associates</h3>
            <p className="text-neutral-400 font-light leading-relaxed">
              Chartered Accountants providing strategic partnership in compliance, growth, and governance since 2005.
            </p>
            <div className="pt-2">
              <p className="text-neutral-300 font-medium">Available:</p>
              <p className="text-neutral-400">10:00 AM - 5:00 PM, Sunday-Friday</p>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-5 uppercase tracking-wider text-neutral-200">Navigation</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-neutral-400 hover:text-white transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-neutral-400 hover:text-white transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-neutral-400 hover:text-white transition-colors duration-200">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/insights" className="text-neutral-400 hover:text-white transition-colors duration-200">
                  Insights
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-neutral-400 hover:text-white transition-colors duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-5 uppercase tracking-wider text-neutral-200">Expertise</h4>
            <ul className="space-y-3">
              {randomizedServices.slice(0, 5).map((service) => (
                <li key={service.id}>
                  <Link 
                    to={`/services/${service.id}`} 
                    className="text-neutral-400 hover:text-white transition-colors duration-200"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-5 uppercase tracking-wider text-neutral-200">Reach Us</h4>
            <address className="text-neutral-400 not-italic space-y-3">
              <div>
                <p className="font-medium text-neutral-300">Head Office:</p>
                <p>
                  <Link 
                    href="https://maps.app.goo.gl/StsAueTS1QknMu7x5" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="mt-1 text-blue-600 hover:text-blue-800 hover:underline"
                  >
                    Tinkune,
                  </Link>
                </p>
                <p>Kathmandu 44600, Nepal</p>
              </div>
              <div>
                <p className="font-medium text-neutral-300">Direct Contact:</p>
                <p>+977 (98) 5113 5421</p>
                <p>suresh@ssureshassociates.com</p>
              </div>
            </address>
          </div>
        </div>
        
        {/* Divider & Copyright */}
        <div className="border-t border-neutral-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-neutral-500 text-sm">
              &copy; {new Date().getFullYear()} S.Suresh & Associates, CA. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/privacypolicy" className="text-neutral-500 hover:text-white transition-colors duration-200 text-sm">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-neutral-500 hover:text-white transition-colors duration-200 text-sm">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="text-neutral-500 hover:text-white transition-colors duration-200 text-sm">
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