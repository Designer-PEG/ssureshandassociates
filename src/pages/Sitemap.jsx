import { Link } from 'react-router-dom';
import { siteConfig } from '../data/siteContent';

export default function Sitemap() {
  return (
    <div className="bg-brand-ivory min-h-screen py-16">
      <div className="container mx-auto px-6 max-w-4xl">
        
        {/* Page Header */}
        <div className="text-center mb-16">
          <span className="text-brand-gold font-bold uppercase tracking-widest text-xs">
            Site Directory
          </span>
          <h1 className="font-serif-display text-3xl md:text-5xl font-extrabold text-brand-navy mt-2">
            Sitemap
          </h1>
          <div className="w-12 h-0.5 bg-brand-gold mx-auto my-4"></div>
          <p className="text-xs md:text-sm text-gray-500 max-w-xl mx-auto leading-relaxed">
            Easily locate the practice areas, bulletins, and corporate compliance directories of S. Suresh & Associates.
          </p>
        </div>

        {/* Directory Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          
          {/* Main Navigation Links */}
          <div className="bg-white p-8 border border-brand-navy/10 shadow-xs relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-brand-navy"></div>
            
            <h2 className="font-serif-display text-xl font-bold text-brand-navy mb-6 pb-3 border-b border-brand-navy/5">
              Core Pages
            </h2>
            
            <ul className="space-y-4 text-sm font-sans-ui">
              <li>
                <Link to="/" className="flex items-center gap-3 text-gray-600 hover:text-brand-gold font-medium transition-colors group">
                  <span className="text-brand-gold">→</span>
                  <span>Home Page</span>
                </Link>
              </li>
              <li>
                <Link to="/about" className="flex items-center gap-3 text-gray-600 hover:text-brand-gold font-medium transition-colors group">
                  <span className="text-brand-gold">→</span>
                  <span>About Us</span>
                </Link>
              </li>
              <li>
                <Link to="/services" className="flex items-center gap-3 text-gray-600 hover:text-brand-gold font-medium transition-colors group">
                  <span className="text-brand-gold">→</span>
                  <span>Services Directory</span>
                </Link>
              </li>
              <li>
                <Link to="/insights" className="flex items-center gap-3 text-gray-600 hover:text-brand-gold font-medium transition-colors group">
                  <span className="text-brand-gold">→</span>
                  <span>Insights & Bulletins</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="flex items-center gap-3 text-gray-600 hover:text-brand-gold font-medium transition-colors group">
                  <span className="text-brand-gold">→</span>
                  <span>Contact Office</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Links List */}
          <div className="bg-white p-8 border border-brand-navy/10 shadow-xs relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-brand-gold"></div>
            
            <h2 className="font-serif-display text-xl font-bold text-brand-navy mb-6 pb-3 border-b border-brand-navy/5">
              Practice Areas
            </h2>
            
            <ul className="space-y-4 text-sm font-sans-ui">
              {siteConfig.services.map((service) => (
                <li key={service.id}>
                  <Link 
                    to={`/services#${service.id}`}
                    className="flex items-start gap-3 text-gray-600 hover:text-brand-gold font-medium transition-colors group"
                  >
                    <span className="font-mono-ledger text-xs text-brand-gold mt-0.5">{service.index}</span>
                    <span className="leading-tight">{service.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
        </div>

        {/* Technical search configs */}
        <div className="mt-8 bg-white p-6 border border-brand-navy/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-sans-ui">
          <div className="flex gap-4">
            <a href="/robots.txt" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-brand-gold underline">
              robots.txt
            </a>
            <a href="/sitemap.xml" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-brand-gold underline">
              sitemap.xml
            </a>
          </div>
          <p className="text-gray-400">
            S. Suresh & Associates CA, Tinkune, Kathmandu
          </p>
        </div>

      </div>
    </div>
  );
}
