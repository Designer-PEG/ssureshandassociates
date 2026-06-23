import { siteConfig } from '../data/siteContent';

const StatsRow = () => {
  return (
    <section className="bg-brand-ivory border-t border-b border-brand-navy/10 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-y lg:divide-y-0 lg:divide-x divide-brand-navy/10">
          {siteConfig.stats.map((stat, index) => (
            <div 
              key={stat.id} 
              className={`flex flex-col items-center justify-center text-center p-4 ${
                index >= 2 ? 'pt-8 lg:pt-4' : 'pt-4'
              }`}
            >
              <div className="flex items-baseline justify-center gap-1.5 relative">
                <span className="font-serif-display text-4xl md:text-5xl font-extrabold text-brand-navy tracking-tight">
                  {stat.value}
                </span>
                
                {/* Visual Staging Alert Tag */}
                {stat.isPlaceholder && siteConfig.isStaging && (
                  <span 
                    title="Placeholder Staging Data" 
                    className="absolute -top-3 -right-6 bg-amber-500 text-slate-950 font-mono-ledger text-[8px] font-bold px-1 py-0.5 uppercase tracking-tighter"
                  >
                    Stg
                  </span>
                )}
              </div>
              <span className="mt-3 text-xs md:text-sm font-semibold uppercase tracking-wider text-gray-500 font-sans-ui">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsRow;
