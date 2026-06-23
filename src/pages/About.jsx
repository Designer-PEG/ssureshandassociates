import { siteConfig } from '../data/siteContent';

// Import images from previous development
import aboutHero from '../assets/about.jpg';
import aboutIntro from '../assets/About_1.jpg';
import SureshImg from '../assets/Suresh.png';
import DamodarImg from '../assets/Damodar.png';
import BibekImg from '../assets/Bibek.jpg';
import ShashankImg from '../assets/Shashank.png';
import JeshanImg from '../assets/Jeshan.png';
import PrakashImg from '../assets/Prakash.jpg';
import PujanImg from '../assets/Pujan.png';

// Team image mapping dictionary
const imageMap = {
  'Suresh.png': SureshImg,
  'Damodar.png': DamodarImg,
  'Bibek.jpg': BibekImg,
  'Shashank.png': ShashankImg,
  'Jeshan.png': JeshanImg,
  'Prakash.jpg': PrakashImg,
  'Pujan.png': PujanImg
};

// Repeatable TeamMember Component
const TeamMember = ({ name, role, credential, bio, image, isPlaceholder }) => {
  const memberPhoto = imageMap[image];
  return (
    <div className="bg-white p-6 md:p-8 border border-brand-navy/10 hover:border-brand-gold hover:shadow-lg transition-all duration-300 flex flex-col justify-between h-full relative">
      
      {isPlaceholder && siteConfig.isStaging && (
        <span className="absolute top-4 right-4 bg-amber-500 text-slate-950 font-mono-ledger text-[8px] font-bold px-2 py-0.5 uppercase tracking-wide">
          Staging
        </span>
      )}
      
      <div>
        {/* Graphic Image / Fallback block */}
        <div className="w-28 h-36 border border-brand-gold p-1 bg-brand-ivory flex items-center justify-center font-serif-display text-brand-gold text-2xl font-bold mb-6 mx-auto md:mx-0 shadow-sm overflow-hidden">
          {memberPhoto ? (
            <img 
              src={memberPhoto} 
              alt={name} 
              className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-[1.03]" 
            />
          ) : (
            <span>{name.charAt(0)}</span>
          )}
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
      {isPlaceholder && siteConfig.isStaging && (
        <div className="border-t border-brand-navy/5 mt-6 pt-4 text-center md:text-left">
          <span className="text-[9px] text-amber-600 uppercase tracking-widest font-mono-ledger font-bold">
            Verification Required
          </span>
        </div>
      )}
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
      description: 'Expanded scope to cover corporate tax compliance, corporate restructuring support, and self-assessments.',
      isPlaceholder: false
    }
  ];

  return (
    <div className="bg-brand-ivory min-h-screen">
      
      {/* 1. Page Header (Ledger style with background image) */}
      <section className="relative bg-brand-navy text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover opacity-35 transform scale-100"
            src={aboutHero}
            alt="Suresh and Associates office header"
          />
          <div className="absolute inset-0 bg-brand-navy/60" />
        </div>
        
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

      {/* 2. Welcome Message (with intro section image) */}
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
              
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="tel:+9779851135421"
                  className="inline-flex items-center justify-center px-6 py-3 bg-brand-navy hover:bg-brand-navy/80 text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 gap-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4.5 w-4.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>Call office: 9851135421</span>
                </a>
              </div>
            </div>

            {/* Right column - Reused Intro Image */}
            <div className="lg:col-span-5 mt-12 lg:mt-0">
              <div className="border border-brand-navy/10 bg-white p-3 shadow-md relative overflow-hidden">
                <img
                  className="w-full rounded transition-transform duration-500 hover:scale-[1.02]"
                  src={aboutIntro}
                  alt="Team auditing and planning"
                />
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

      {/* 4. Team Member Grid */}
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
                image={member.image}
                isPlaceholder={member.isPlaceholder}
              />
            ))}
          </div>
          
        </div>
      </section>

    </div>
  );
}