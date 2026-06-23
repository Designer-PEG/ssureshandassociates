import { Link } from 'react-router-dom';
import LedgerList from '../components/LedgerList';
import { siteConfig } from '../data/siteContent';

export default function Services() {
  return (
    <div className="bg-brand-ivory min-h-screen">
      
      {/* 1. Header (Ledger style) */}
      <section className="bg-brand-navy text-white py-20 relative">
        <div className="max-w-7xl mx-auto px-6 z-10 relative">
          <span className="text-brand-gold font-mono-ledger font-bold uppercase tracking-[0.2em] text-xs">
            Professional Scope
          </span>
          <h1 className="font-serif-display text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mt-2">
            Practice Areas
          </h1>
          <div className="w-16 h-0.5 bg-brand-gold mt-4 mb-6"></div>
          <p className="text-gray-300 font-sans-ui leading-relaxed text-base md:text-lg max-w-3xl">
            S. Suresh & Associates delivers licensed auditing, strategic corporate taxation setups, VAT/GST administration, and financial advisories aligned with NFRS rules in Nepal.
          </p>
        </div>
      </section>

      {/* 2. Ledger Index Summary */}
      <section className="py-16 bg-white/40 border-b border-brand-navy/10">
        <div className="max-w-5xl mx-auto px-6">
          <span className="text-brand-gold font-mono-ledger text-xs font-bold uppercase tracking-wider block mb-4">
            Index of Services
          </span>
          {/* Render LedgerList in Light Theme */}
          <LedgerList items={siteConfig.services} isDark={false} />
        </div>
      </section>

      {/* 3. Detailed Service Breakdown */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-brand-gold font-bold uppercase tracking-widest text-xs">
              Detailed breakdown
            </span>
            <h2 className="font-serif-display text-3xl md:text-4xl font-extrabold text-brand-navy mt-2">
              Process & Deliverables
            </h2>
            <div className="w-12 h-0.5 bg-brand-gold mx-auto my-4"></div>
            {siteConfig.isStaging && (
              <p className="text-xs text-amber-500 font-bold uppercase tracking-wider bg-amber-500/10 px-3.5 py-1 rounded inline-block font-mono-ledger">
                Note: Sub-services require firm verification before publishing
              </p>
            )}
          </div>

          {/* Service items structured like a general ledger statement */}
          <div className="space-y-24">
            {siteConfig.services.map((service) => (
              <div 
                key={service.id} 
                id={service.id}
                className="border-t-2 border-brand-navy pt-12 relative group"
              >
                
                {/* Number Indicator & Header */}
                <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 mb-6">
                  <div className="flex items-baseline gap-6">
                    <span className="font-mono-ledger text-2xl md:text-3xl font-extrabold text-brand-gold">
                      {service.index}
                    </span>
                    <h3 className="font-serif-display text-2xl md:text-3xl font-extrabold text-brand-navy">
                      {service.title}
                    </h3>
                  </div>
                  
                  <Link 
                    to={`/contact?service=${encodeURIComponent(service.title)}`}
                    className="inline-flex items-center text-xs font-bold font-sans-ui tracking-wider uppercase text-brand-gold hover:text-brand-navy transition-colors self-start md:self-auto"
                  >
                    Inquire for details →
                  </Link>
                </div>

                {/* Body Content */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-8">
                  {/* Left Column: Description */}
                  <div className="lg:col-span-7">
                    <p className="text-gray-700 leading-relaxed font-sans-ui text-sm md:text-base">
                      {service.longDesc}
                    </p>
                    <p className="text-gray-500 leading-relaxed font-sans-ui text-xs md:text-sm mt-4 italic">
                      All audit and filings are performed under current Nepal standards, ICAN directives, and Inland Revenue Department circulars.
                    </p>
                  </div>

                  {/* Right Column: Ruled Sub-services List */}
                  <div className="lg:col-span-5 bg-white p-6 border border-brand-navy/10 relative">
                    <div className="absolute top-0 left-0 w-full h-0.5 bg-brand-gold"></div>
                    <span className="text-[10px] font-mono-ledger font-bold text-brand-gold uppercase tracking-wider block mb-4">
                      Sub-Services Checklist
                    </span>
                    
                    <ul className="space-y-3.5">
                      {service.subServices.map((sub, idx) => (
                        <li key={idx} className="flex items-start text-xs text-gray-600 font-sans-ui leading-tight gap-2">
                          <span className="text-brand-gold mt-0.5 font-bold">•</span>
                          <span className="flex-grow">
                            {sub.text}
                          </span>
                          
                          {/* Staging tag overlay for unconfirmed items */}
                          {sub.isPlaceholder && siteConfig.isStaging && (
                            <span className="flex-shrink-0 bg-amber-500/10 text-amber-500 text-[7px] font-bold px-1.5 py-0.5 font-mono-ledger uppercase border border-amber-500/20">
                              Stg
                            </span>
                          )}
                        </li>
                      ))}
                    </ul>

                    {siteConfig.isStaging && (
                      <div className="mt-6 border-t border-brand-navy/5 pt-4 text-[9px] text-amber-600 italic font-medium leading-normal flex items-center gap-1.5">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 text-amber-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                        <span>[placeholder sub-services — confirm with firm]</span>
                      </div>
                    )}
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. Timeline / Pricing Guidance */}
      <section className="bg-brand-navy text-white py-20 border-t border-brand-gold/15">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="font-serif-display text-2xl font-bold mb-4">Engagement Timelines</h3>
          <p className="text-gray-300 font-sans-ui leading-relaxed text-sm md:text-base max-w-xl mx-auto mb-8">
            Typical audit engagements require 2 to 6 weeks depending on financial volume and preparedness. Fixed scopes and monthly accounting retainers are structured individually.
          </p>
          <Link 
            to="/contact" 
            className="px-6 py-3 bg-brand-gold text-brand-navy text-xs font-bold uppercase tracking-wider font-sans-ui hover:bg-white transition-colors"
          >
            Request Engagement Quote
          </Link>
        </div>
      </section>

    </div>
  );
}