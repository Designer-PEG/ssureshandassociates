import { siteConfig } from '../data/siteContent';

const TrustGrid = () => {
  return (
    <section className="bg-brand-ivory py-24 border-b border-brand-navy/15">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-brand-gold font-bold uppercase tracking-widest text-xs">
            Why Clients Choose Us
          </span>
          <h2 className="font-serif-display text-3xl md:text-4xl font-extrabold text-brand-navy mt-2">
            Pillars of Accountability
          </h2>
          <div className="w-12 h-0.5 bg-brand-gold mx-auto my-4"></div>
          {siteConfig.isStaging && (
            <p className="text-xs text-amber-500 font-bold uppercase tracking-wider bg-amber-500/10 px-3 py-1 rounded inline-block">
              Staging Content — Subject to Client Verification
            </p>
          )}
        </div>

        {/* 2x2 Grid with hairline sheet borders */}
        <div className="grid grid-cols-1 md:grid-cols-2 border-t border-l border-brand-navy/10 max-w-5xl mx-auto shadow-xs">
          {siteConfig.trustGrid.map((item) => (
            <div 
              key={item.id} 
              className="p-8 md:p-12 border-b border-r border-brand-navy/10 flex flex-col justify-between hover:bg-white/30 transition-colors duration-300 relative group"
            >
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <h3 className="font-serif-display text-lg md:text-xl font-bold text-brand-navy group-hover:text-brand-gold transition-colors duration-300">
                    {item.title}
                  </h3>
                  
                  {/* Small inline staging badge */}
                  {item.isPlaceholder && siteConfig.isStaging && (
                    <span className="bg-amber-500/10 text-amber-500 text-[8px] font-bold px-1.5 py-0.5 uppercase border border-amber-500/20 font-mono-ledger">
                      Stg
                    </span>
                  )}
                </div>
                
                <p className="text-gray-600 text-xs md:text-sm leading-relaxed font-sans-ui">
                  {item.description}
                </p>
              </div>
              
              {/* Corner accent resembling a ledger book tick */}
              <div className="absolute bottom-4 right-4 text-brand-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs font-mono-ledger">
                ✓
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default TrustGrid;
