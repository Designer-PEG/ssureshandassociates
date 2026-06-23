import { Link } from 'react-router-dom';
import { siteConfig } from '../data/siteContent';

const TestimonialBlock = () => {
  const { quote, author, company, isPlaceholder } = siteConfig.testimonial;

  return (
    <section className="bg-brand-navy text-white py-24 relative overflow-hidden">
      
      {/* Decorative hairline backdrop */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="w-full h-full border-b border-r border-white border-hairline-dark"></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10 flex flex-col items-center">
        
        {/* Testimonial Staging Warning Badge */}
        {isPlaceholder && siteConfig.isStaging && (
          <span className="mb-8 bg-amber-500 text-slate-950 text-xs font-bold font-sans-ui tracking-wider px-3.5 py-1 uppercase shadow-md font-mono-ledger">
            [Staging Testimonial — Unverified]
          </span>
        )}

        {/* Big quote mark icon */}
        <span className="font-serif-display text-7xl text-brand-gold/30 block h-8 select-none select-none">“</span>

        {/* Testimonial Quote */}
        <blockquote className="max-w-3xl mx-auto mb-8">
          <p className="font-serif-display text-xl md:text-2xl lg:text-3xl italic leading-relaxed text-gray-200">
            {quote}
          </p>
        </blockquote>

        {/* Citation details */}
        <cite className="not-italic flex flex-col items-center gap-1">
          <span className="font-sans-ui text-sm font-bold text-brand-gold tracking-wide uppercase">
            {author}
          </span>
          <span className="font-sans-ui text-xs text-gray-400">
            {company}
          </span>
        </cite>

        {/* CTA Close Section */}
        <div className="mt-16 w-full max-w-xl border-t border-white/10 pt-10">
          <h3 className="font-serif-display text-lg md:text-xl font-medium text-white mb-6">
            Partner with S. Suresh & Associates for Trusted Compliance
          </h3>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              to="/contact" 
              className="px-6 py-3.5 bg-brand-gold text-brand-navy text-xs font-bold font-sans-ui uppercase tracking-wider hover:bg-white transition-all shadow-lg"
            >
              Book a consultation
            </Link>
            <Link 
              to="/services" 
              className="px-6 py-3.5 border border-white/20 hover:border-brand-gold hover:text-brand-gold text-white text-xs font-bold font-sans-ui uppercase tracking-wider transition-all"
            >
              Explore Services
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};

export default TestimonialBlock;
