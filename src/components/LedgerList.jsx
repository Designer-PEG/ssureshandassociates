import { Link } from 'react-router-dom';
import { siteConfig } from '../data/siteContent';

const LedgerList = ({ items, isDark = false }) => {
  return (
    <div className={`w-full ${isDark ? 'bg-brand-navy text-white' : 'bg-transparent text-brand-navy'}`}>
      <div className="w-full divide-y border-t border-b border-current/15 divide-current/15">
        {items.map((item) => (
          <div 
            key={item.id}
            className="group block transition-all duration-300 relative"
          >
            {/* Inner content wrapper */}
            <div className="py-8 md:py-10 flex flex-col md:flex-row md:items-center justify-between gap-6 px-4 md:px-8 hover:bg-white/5 transition-colors">
              
              {/* Row Left: Number + Title */}
              <div className="flex items-start gap-6 md:gap-8 flex-1">
                {/* Monospace Ledger Number */}
                <span className="font-mono-ledger text-2xl md:text-3xl text-brand-gold font-bold tracking-tight mt-1 flex-shrink-0">
                  {item.index}
                </span>
                
                {/* Title and Short Description */}
                <div className="flex flex-col gap-2">
                  <h3 className="font-serif-display text-xl md:text-2xl font-bold tracking-wide group-hover:text-brand-gold transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className={`text-sm leading-relaxed font-sans-ui max-w-3xl ${
                    isDark ? 'text-gray-400 group-hover:text-gray-300' : 'text-gray-600'
                  }`}>
                    {item.shortDesc}
                  </p>
                </div>
              </div>

              {/* Row Right: Interactive Arrow Link */}
              <div className="flex items-center justify-start md:justify-end flex-shrink-0 pl-14 md:pl-0">
                <Link 
                  to={isDark ? `/services` : `/contact?service=${encodeURIComponent(item.title)}`}
                  className={`inline-flex items-center gap-2 text-xs font-bold font-sans-ui tracking-widest uppercase py-2 border-b border-transparent hover:border-brand-gold hover:text-brand-gold transition-all duration-300 ${
                    isDark ? 'text-brand-gold' : 'text-brand-navy hover:text-brand-gold'
                  }`}
                >
                  <span>{isDark ? 'Detailed Scope' : 'Inquire'}</span>
                  <svg 
                    className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LedgerList;
