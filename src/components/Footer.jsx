import { Link } from 'react-router-dom';
import { siteConfig } from '../data/siteContent';

const Footer = () => {
  return (
    <footer className="bg-brand-navy text-neutral-100 py-16 border-t border-brand-gold/20 font-sans-ui">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          
          {/* Brand Column */}
          <div className="space-y-5">
            <h3 className="text-xl font-bold tracking-tight">
              <Link to="/" className="flex items-center gap-3.5 group">
                <div className="w-8 h-8 border border-brand-gold bg-brand-navy flex items-center justify-center font-serif-display text-brand-gold text-sm font-bold group-hover:bg-brand-gold group-hover:text-brand-navy transition-all">
                  SS
                </div>
                <div className="flex flex-col">
                  <span className="font-serif-display text-white text-base font-semibold group-hover:text-brand-gold transition-colors">
                    {siteConfig.firmInfo.name}
                  </span>
                  <span className="text-[8px] text-gray-400 uppercase tracking-widest mt-0.5">
                    {siteConfig.firmInfo.tagline}
                  </span>
                </div>
              </Link>
            </h3>
            <p className="text-gray-400 font-light leading-relaxed text-xs">
              Registered Chartered Accountants providing auditing, tax planning, and compliance advisories in Nepal. Operating since {siteConfig.firmInfo.establishedYear}.
            </p>
            <div className="pt-2 text-xs">
              <p className="text-brand-gold font-bold uppercase tracking-wider">Office Hours</p>
              <p className="text-gray-400 mt-1 flex items-center gap-2">
                {siteConfig.contact.hours}
                {siteConfig.contact.isPlaceholder && (
                  <span className="bg-amber-500/10 text-amber-500 text-[8px] px-1.5 py-0.5 rounded font-mono font-bold tracking-normal uppercase border border-amber-500/20">Staging</span>
                )}
              </p>
            </div>
          </div>
          
          {/* Quick Navigation */}
          <div>
            <h4 className="text-xs font-bold mb-6 uppercase tracking-widest text-brand-gold">Navigation</h4>
            <ul className="space-y-3 text-xs">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/insights" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Insights
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Core Services */}
          <div>
            <h4 className="text-xs font-bold mb-6 uppercase tracking-widest text-brand-gold">Our Expertise</h4>
            <ul className="space-y-3 text-xs">
              {siteConfig.services.map((service) => (
                <li key={service.id}>
                  <Link 
                    to={`/services#${service.id}`} 
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Details */}
          <div>
            <h4 className="text-xs font-bold mb-6 uppercase tracking-widest text-brand-gold">Reach Us</h4>
            <address className="text-gray-400 not-italic space-y-4 text-xs">
              <div>
                <p className="font-semibold text-gray-300">Office Location:</p>
                <div className="mt-1 flex items-center gap-1.5 flex-wrap">
                  <a 
                    href="https://maps.app.goo.gl/StsAueTS1QknMu7x5" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-brand-gold hover:underline inline-flex items-center"
                  >
                    {siteConfig.contact.address}
                  </a>
                  {siteConfig.contact.isPlaceholder && (
                    <span className="bg-amber-500/10 text-amber-500 text-[8px] px-1.5 py-0.5 rounded font-mono font-bold tracking-normal uppercase border border-amber-500/20">Staging</span>
                  )}
                </div>
              </div>
              
              <div className="space-y-1.5">
                <p className="font-semibold text-gray-300">Direct Contact:</p>
                <div className="flex items-center gap-2">
                  <a href="tel:+9779851135421" className="hover:text-white transition-colors">
                    {siteConfig.contact.phone}
                  </a>
                  {siteConfig.contact.isPlaceholder && (
                    <span className="bg-amber-500/10 text-amber-500 text-[8px] px-1.5 py-0.5 rounded font-mono font-bold tracking-normal uppercase border border-amber-500/20">Staging</span>
                  )}
                </div>
                <div className="flex items-center gap-2">
                  <a href="mailto:2015casuresh@gmail.com" className="hover:text-white transition-colors break-all">
                    {siteConfig.contact.email}
                  </a>
                  {siteConfig.contact.isPlaceholder && (
                    <span className="bg-amber-500/10 text-amber-500 text-[8px] px-1.5 py-0.5 rounded font-mono font-bold tracking-normal uppercase border border-amber-500/20">Staging</span>
                  )}
                </div>
              </div>
            </address>
          </div>
        </div>
        
        {/* Divider & Legal */}
        <div className="border-t border-white/5 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-[11px] tracking-wide">
              &copy; {new Date().getFullYear()} {siteConfig.firmInfo.name}. Regulated by ICAN, Nepal. All rights reserved.
            </p>
            <div className="flex space-x-6 text-[11px] tracking-wide">
              <Link to="/sitemap" className="text-gray-500 hover:text-gray-300 transition-colors duration-200">
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