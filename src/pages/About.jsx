import { siteConfig } from '../data/siteContent';

// Repeatable TeamMember Component
const TeamMember = ({ name, role, credential, bio, isPlaceholder }) => {
  return (
    <div className="bg-white p-6 md:p-8 border border-brand-navy/10 hover:border-brand-gold hover:shadow-lg transition-all duration-300 flex flex-col justify-between h-full relative">
      
      {/* Visual Staging Alert */}
      {isPlaceholder && siteConfig.isStaging && (
        <span className="absolute top-4 right-4 bg-amber-500 text-slate-950 font-mono-ledger text-[8px] font-bold px-2 py-0.5 uppercase tracking-wide">
          Staging Bio
        </span>
      )}
      
      <div>
        {/* Typographic Photo Placeholder with Gold Border */}
        <div className="w-24 h-24 bg-brand-navy border border-brand-gold flex items-center justify-center font-serif-display text-brand-gold text-2xl font-bold mb-6 mx-auto md:mx-0 shadow-md">
          {name.charAt(0) === '[' ? 'CA' : name.charAt(0)}
        </div>
        
        {/* Name & Credentials */}
        <div className="text-center md:text-left">
          <h3 className="font-serif-display text-xl font-bold text-brand-navy">
            {name}
          </h3>
          <span className="text-[10px] font-mono-ledger font-bold text-brand-gold uppercase tracking-wider block mt-1">
            {credential}
          </span>
          <span className="text-xs text-gray-500 font-sans-ui mt-0.5 block italic">
            {role}
          </span>
        </div>

        {/* Short Bio */}
        <p className="mt-4 text-xs md:text-sm text-gray-600 leading-relaxed font-sans-ui text-center md:text-left">
          {bio}
        </p>
      </div>

      {/* Ruled foot line */}
      <div className="border-t border-brand-navy/5 mt-6 pt-4 text-center md:text-left">
        <span className="text-[9px] text-gray-400 uppercase tracking-widest">
          {isPlaceholder ? "Verification Required" : "Licensed CA Partner"}
        </span>
      </div>
    </div>
  );
};

export default function About() {
  const timelineMilestones = [
    {
      year: '2016',
      title: 'Firm Foundation',
      description: 'S. Suresh & Associates was founded in Kathmandu, Nepal, with a license to practice statutory audits.',
      isPlaceholder: false
    },
    {
      year: '2019',
      title: 'Tax Advisory Scope',
      description: '[Staging: Expanded scope to cover corporate tax compliance, corporate restructuring support, and self-assessments.]',
      isPlaceholder: true
    },
    {
      year: '2022',
      title: 'NFRS Audits Integration',
      description: '[Staging: Standardized auditing workflows under the newly enforced Nepal Financial Reporting Standards guidelines.]',
      isPlaceholder: true
    },
    {
      year: '2025',
      title: 'Corporate MIS Support',
      description: '[Staging: Began offering digital ledger consulting and customized Management Information System structuring.]',
      isPlaceholder: true
    }
  ];

  return (
    <div className="bg-brand-ivory min-h-screen">
      
      {/* 1. Page Header (Ledger Concept) */}
      <section className="bg-brand-navy text-white py-20 relative">
        <div className="max-w-7xl mx-auto px-6 z-10 relative">
          <span className="text-brand-gold font-mono-ledger font-bold uppercase tracking-[0.2em] text-xs">
            Operating Since {siteConfig.firmInfo.establishedYear}
          </span>
          <h1 className="font-serif-display text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mt-2">
            About S. Suresh & Associates
          </h1>
          <div className="w-16 h-0.5 bg-brand-gold mt-4 mb-6"></div>
          <p className="text-gray-300 font-sans-ui leading-relaxed text-base md:text-lg max-w-3xl">
            Established in {siteConfig.firmInfo.establishedYear}, we are tax consultants and auditors serving enterprises across Nepal with rigorous compliance and corporate growth models.
          </p>
        </div>
      </section>

      {/* 2. Welcome Message */}
      <section className="py-20 border-b border-brand-navy/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="lg:grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left text column */}
            <div className="lg:col-span-7">
              <span className="text-brand-gold font-bold uppercase tracking-widest text-xs">
                Firm Identity
              </span>
              <h2 className="font-serif-display text-3xl md:text-4xl font-extrabold text-brand-navy mt-2 mb-6">
                Delivering Compliance & Strategic Transparency
              </h2>
              <div className="space-y-6 text-gray-600 font-sans-ui text-sm md:text-base leading-relaxed">
                <p>
                  S. Suresh & Associates is a chartered accountancy practice based in Nepal. We operate as a dedicated strategic partner, working alongside businesses to navigate regulatory taxation environments and financial reporting complexities.
                </p>
                <p>
                  Since our foundation in 2016, we have combined accounting, tax planning, GST/VAT filing, auditing, and financial advisory into a integrated service system that reinforces company operations and supports stakeholder decision-making.
                </p>
              </div>
            </div>

            {/* Right decorative wireframe card */}
            <div className="lg:col-span-5 mt-12 lg:mt-0">
              <div className="border border-brand-navy/10 bg-white p-8 md:p-10 shadow-sm relative overflow-hidden flex flex-col justify-center min-h-[300px]">
                <div className="absolute top-0 right-0 w-32 h-32 opacity-5 pointer-events-none">
                  <div className="w-full h-full border-b border-l border-brand-navy"></div>
                </div>
                <span className="text-brand-gold font-mono-ledger text-sm font-bold uppercase tracking-wider block mb-2">
                  Firm Profile Check
                </span>
                <ul className="space-y-4 text-xs font-sans-ui text-gray-600">
                  <li className="flex items-center gap-3">
                    <span className="text-brand-gold">✓</span>
                    <span>ICAN Affiliation (Active License)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-brand-gold">✓</span>
                    <span>Operating in Nepal since 2016</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-brand-gold">✓</span>
                    <span>Tax consultants and registered auditors</span>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Journey & Milestones Timeline */}
      <section className="py-20 border-b border-brand-navy/10">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-brand-gold font-bold uppercase tracking-widest text-xs">
              Milestones
            </span>
            <h2 className="font-serif-display text-3xl font-bold text-brand-navy mt-2">
              Timeline of Development
            </h2>
            <div className="w-12 h-0.5 bg-brand-gold mx-auto my-4"></div>
          </div>

          <div className="relative border-l border-brand-navy/10 ml-4 md:ml-6 space-y-12">
            {timelineMilestones.map((milestone) => (
              <div key={milestone.year} className="relative pl-8 md:pl-10">
                {/* Monospace dot node */}
                <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full border border-brand-gold bg-brand-navy"></div>
                
                <div className="bg-white p-6 border border-brand-navy/10 hover:border-brand-navy/20 transition-all shadow-xs">
                  <div className="flex items-center gap-3 mb-2 flex-wrap">
                    <span className="font-serif-display text-lg md:text-xl font-extrabold text-brand-navy">
                      {milestone.year} — {milestone.title}
                    </span>
                    {milestone.isPlaceholder && siteConfig.isStaging && (
                      <span className="bg-amber-500/10 text-amber-500 text-[8px] font-mono-ledger font-bold px-1.5 py-0.5 uppercase tracking-wide border border-amber-500/20">
                        Staging Milestone
                      </span>
                    )}
                  </div>
                  <p className="text-gray-600 text-xs md:text-sm leading-relaxed font-sans-ui">
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Repeatable Team Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-brand-gold font-bold uppercase tracking-widest text-xs">
              Leadership & Associates
            </span>
            <h2 className="font-serif-display text-3xl md:text-4xl font-extrabold text-brand-navy mt-2">
              Our Professional Staff
            </h2>
            <div className="w-12 h-0.5 bg-brand-gold mx-auto my-4"></div>
            {siteConfig.isStaging && (
              <p className="text-xs text-amber-500 font-bold uppercase tracking-wider bg-amber-500/10 px-3.5 py-1 rounded inline-block font-mono-ledger">
                Placeholder team profiles — Verification pending
              </p>
            )}
          </div>

          {/* Team Member Component Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {siteConfig.team.map((member) => (
              <TeamMember 
                key={member.id}
                name={member.name}
                role={member.role}
                credential={member.credential}
                bio={member.bio}
                isPlaceholder={member.isPlaceholder}
              />
            ))}
          </div>
          
        </div>
      </section>

    </div>
  );
}