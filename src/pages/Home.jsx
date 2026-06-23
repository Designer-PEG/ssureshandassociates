import Hero from '../components/Hero';
import StatsRow from '../components/StatsRow';
import LedgerList from '../components/LedgerList';
import TrustGrid from '../components/TrustGrid';
import TestimonialBlock from '../components/TestimonialBlock';
import { siteConfig } from '../data/siteContent';

const Home = () => {
  return (
    <div className="bg-brand-ivory min-h-screen">
      
      {/* 1. Hero Section */}
      <Hero />
      
      {/* 2. Stats Row (unverified metrics with staging alerts) */}
      <StatsRow />
      
      {/* 3. Services Ledger (Dark Navy Panel) */}
      <section className="bg-brand-navy py-24 text-white border-b border-brand-gold/15">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-brand-gold font-bold uppercase tracking-widest text-xs">
              Areas of Practice
            </span>
            <h2 className="font-serif-display text-3xl md:text-4xl font-extrabold text-white mt-2">
              Core Services Ledger
            </h2>
            <div className="w-12 h-0.5 bg-brand-gold mx-auto my-4"></div>
            <p className="text-sm text-gray-400 font-light leading-relaxed max-w-2xl mx-auto">
              Professional compliance, strategic tax frameworks, and financial advisory services structured for enterprise growth.
            </p>
          </div>
          
          {/* Reuse LedgerList component with isDark theme */}
          <LedgerList items={siteConfig.services} isDark={true} />
        </div>
      </section>
      
      {/* 4. Trust Grid (2x2 hairline worksheet grid) */}
      <TrustGrid />
      
      {/* 5. Testimonial + CTA Close */}
      <TestimonialBlock />
      
    </div>
  );
};

export default Home;