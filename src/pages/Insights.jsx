import { siteConfig } from '../data/siteContent';

export default function Insights() {
  return (
    <div className="bg-brand-ivory min-h-screen">
      
      {/* Header (Ledger style) */}
      <section className="bg-brand-navy text-white py-20 relative">
        <div className="max-w-7xl mx-auto px-6 z-10 relative">
          <span className="text-brand-gold font-mono-ledger font-bold uppercase tracking-[0.2em] text-xs">
            Regulatory & Business
          </span>
          <h1 className="font-serif-display text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mt-2">
            Insights & Bulletins
          </h1>
          <div className="w-16 h-0.5 bg-brand-gold mt-4 mb-6"></div>
          <p className="text-gray-300 font-sans-ui leading-relaxed text-base md:text-lg max-w-3xl">
            Periodic compliance updates, tax adjustments, and financial reporting guidelines published by our chartered accountants.
          </p>
        </div>
      </section>

      {/* Main post list section */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          
          <div className="text-center mb-16">
            <span className="text-brand-gold font-bold uppercase tracking-widest text-xs">
              Latest Bulletins
            </span>
            <h2 className="font-serif-display text-3xl font-bold text-brand-navy mt-2">
              Compliance & Guidance Updates
            </h2>
            <div className="w-12 h-0.5 bg-brand-gold mx-auto my-4"></div>
            {siteConfig.isStaging && (
              <p className="text-xs text-amber-500 font-bold uppercase tracking-wider bg-amber-500/10 px-3.5 py-1 rounded inline-block font-mono-ledger">
                Placeholder Index — Articles are structural draft items
              </p>
            )}
          </div>

          {/* 3-Column Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {siteConfig.insights.map((post) => (
              <article 
                key={post.id}
                className="bg-white p-6 border border-brand-navy/10 hover:border-brand-gold hover:shadow-lg transition-all duration-300 flex flex-col justify-between h-full relative"
              >
                
                {/* Visual Staging Alert */}
                {post.isPlaceholder && siteConfig.isStaging && (
                  <span className="absolute top-4 right-4 bg-amber-500 text-slate-950 font-mono-ledger text-[8px] font-bold px-2 py-0.5 uppercase tracking-wide">
                    Draft Outline
                  </span>
                )}

                <div>
                  {/* Category & Date */}
                  <div className="flex items-center gap-3 text-[10px] font-mono-ledger font-bold text-brand-gold uppercase tracking-wider mb-4">
                    <span>{post.category}</span>
                    <span className="text-gray-300">•</span>
                    <span className="text-gray-400">{post.date}</span>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif-display text-lg font-bold text-brand-navy mb-3 leading-snug">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-gray-600 font-sans-ui text-xs md:text-sm leading-relaxed mb-6">
                    {post.excerpt}
                  </p>
                </div>

                {/* Footer read link */}
                <div className="border-t border-brand-navy/5 pt-4 mt-6 flex justify-between items-center">
                  <span className="text-[10px] text-brand-navy font-bold uppercase tracking-wider font-sans-ui hover:text-brand-gold cursor-not-allowed">
                    Read Bulletin (Pending Review) →
                  </span>
                  
                  <span className="text-xs font-mono-ledger text-gray-300">
                    {post.id}
                  </span>
                </div>

              </article>
            ))}
          </div>

        </div>
      </section>

      {/* Newsletter / Alert sign up */}
      <section className="bg-brand-navy text-white py-16 border-t border-brand-gold/15">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="text-brand-gold font-mono-ledger text-xs font-bold uppercase tracking-widest block mb-2">
            Compliance Newsletter
          </span>
          <h3 className="font-serif-display text-xl md:text-2xl font-bold mb-4">
            Receive IRD Compliance Updates
          </h3>
          <p className="text-gray-300 font-sans-ui leading-relaxed text-xs md:text-sm max-w-lg mx-auto mb-6">
            Sign up to receive periodic digests of local financial regulations, corporate tax changes, and VAT guidelines direct to your email inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter corporate email..."
              className="bg-white/10 border border-white/20 text-white placeholder-gray-400 px-4 py-2 text-sm focus:border-brand-gold focus:outline-none flex-grow"
              disabled
            />
            <button 
              className="px-6 py-2 bg-brand-gold text-brand-navy text-xs font-bold uppercase tracking-wider font-sans-ui cursor-not-allowed"
              disabled
            >
              Subscribe
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}