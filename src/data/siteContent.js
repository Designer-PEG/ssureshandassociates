// Centralized site copy data for S. Suresh & Associates
// Mark isStaging: true to show staging banners/badges next to unverified content.
export const siteConfig = {
  isStaging: false,
  
  // Confirmed business facts (Safe for production use)
  firmInfo: {
    name: "S. Suresh & Associates",
    tagline: "Chartered Accountants",
    type: "Chartered Accountants & Tax Consultants",
    establishedYear: 2016,
    location: "Nepal",
    metaDescription: "S. Suresh & Associates - Premier CA firm in Nepal offering accounting, tax planning, GST filing, auditing & financial advisory services. Trusted since 2016.",
    metaKeywords: "S. Suresh & Associates, Suresh & Associates, CA Nepal, Chartered Accountant Kathmandu, Tax Consultant Nepal, Auditing Services Nepal, GST Filing Nepal",
    coreServices: [
      "Auditing",
      "Tax Planning",
      "GST Filing",
      "Accounting",
      "Financial Advisory"
    ]
  },

  // Contact and office information (Verify before deployment)
  contact: {
    isPlaceholder: true,
    address: "[Office address — Tinkune, Kathmandu, Nepal]",
    phone: "[Phone — +977-9851135421]",
    email: "[Email — 2015casuresh@gmail.com]",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.1557995817084!2d85.3444444!3d27.6831521!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1994e1dcdcc9%3A0xe1003444e99ee5ec!2sTinkune%2C%20Kathmandu%2044600!5e0!3m2!1sen!2snp!4v1680000000000!5m2!1sen!2snp",
    hours: "[Office hours — Sunday - Friday: 10:00 AM - 5:00 PM]",
    facebookLink: "https://www.facebook.com/people/S-Suresh-Associates-Chartered-Accountants/100087635748814/"
  },

  // Homepage Stats (Staging content - needs verification)
  stats: [
    { id: "stat-1", value: "10+", label: "Years in Practice", isPlaceholder: true },
    { id: "stat-2", value: "500+", label: "Audits Completed", isPlaceholder: true },
    { id: "stat-3", value: "120+", label: "Active Corporate Clients", isPlaceholder: true },
    { id: "stat-4", value: "100%", label: "Filing Accuracy", isPlaceholder: true }
  ],

  // 5 Confirmed Core Service Areas (Verify sub-lists)
  services: [
    {
      id: "auditing",
      index: "01",
      title: "Auditing",
      shortDesc: "Independent, rigorous audits ensuring complete compliance with Nepal Financial Reporting Standards (NFRS).",
      longDesc: "We provide comprehensive statutory audits, internal assessments, and forensic reviews designed to enhance operational integrity, satisfy regulatory bodies, and foster corporate transparency.",
      iconName: "DocumentCheckIcon",
      isPlaceholder: false,
      subServices: [
        { text: "Statutory Financial Auditing", isPlaceholder: true },
        { text: "Internal Controls Review & Risk Assessment", isPlaceholder: true },
        { text: "NFRS & IFRS Accounting Compliance Assessments", isPlaceholder: true },
        { text: "Special Investigation & Fraud Auditing", isPlaceholder: true }
      ]
    },
    {
      id: "tax-planning",
      index: "02",
      title: "Tax Planning",
      shortDesc: "Strategic corporate tax structures designed to minimize liabilities and align with Inland Revenue policies.",
      longDesc: "Expert advisory that navigates Nepal's complex Income Tax Act. We assist in structured tax planning, compliance audits, and tax liability calculations for both enterprises and individuals.",
      iconName: "CalculatorIcon",
      isPlaceholder: false,
      subServices: [
        { text: "Corporate Income Tax Planning & Restructuring", isPlaceholder: true },
        { text: "Tax Health Audits & Compliance Reviews", isPlaceholder: true },
        { text: "Representation before Tax Authorities & Tribunals", isPlaceholder: true },
        { text: "Individual Wealth & Tax Filing Solutions", isPlaceholder: true }
      ]
    },
    {
      id: "gst-filing",
      index: "03",
      title: "GST Filing",
      shortDesc: "Accurate filing of VAT and custom tax declarations to prevent compliance delays or regulatory fines.",
      longDesc: "Precise administration of VAT (value-added tax, commonly referenced as GST in local terms) records. We manage periodic filings, tax refund claims, and transaction trail verifications.",
      iconName: "ClipboardDocumentCheckIcon",
      isPlaceholder: false,
      subServices: [
        { text: "Monthly VAT Return Preparation & E-filing", isPlaceholder: true },
        { text: "VAT Refund Claims Administration", isPlaceholder: true },
        { text: "Transactional VAT/GST Compliance Checks", isPlaceholder: true },
        { text: "Reverse Charge & Customs Tax Advisory", isPlaceholder: true }
      ]
    },
    {
      id: "accounting",
      index: "04",
      title: "Accounting",
      shortDesc: "End-to-end bookkeeping, payroll, and corporate management information systems (MIS) setup.",
      longDesc: "Full-cycle digital accounting solutions that streamline daily ledgers, accounts payable/receivable, payroll management, and monthly MIS dashboard reporting.",
      iconName: "ChartBarIcon",
      isPlaceholder: false,
      subServices: [
        { text: "Bookkeeping & General Ledger Maintenance", isPlaceholder: true },
        { text: "Payroll Management & Provident Fund Accounting", isPlaceholder: true },
        { text: "Corporate MIS Dashboard Setup & Advisory", isPlaceholder: true },
        { text: "Digital Ledger Transformation & Accounting Softwares", isPlaceholder: true }
      ]
    },
    {
      id: "financial-advisory",
      index: "05",
      title: "Financial Advisory",
      shortDesc: "Proactive strategic guidance for entity formation, business valuations, and investment decisions.",
      longDesc: "Expert advisory assisting startups and scaling businesses with capital structuring, financial forecasting, corporate valuations, due diligence, and capital acquisition support.",
      iconName: "BriefcaseIcon",
      isPlaceholder: false,
      subServices: [
        { text: "Company Registration & FDI Approvals in Nepal", isPlaceholder: true },
        { text: "Business Valuations & Financial Modeling", isPlaceholder: true },
        { text: "Due Diligence Reviews for Mergers & Acquisitions", isPlaceholder: true },
        { text: "Working Capital Optimization & Cash Flow Planning", isPlaceholder: true }
      ]
    }
  ],

  // Homepage Trust Pillars (Staging content - needs verification)
  trustGrid: [
    {
      id: "trust-1",
      title: "Absolute Confidentiality",
      description: "We enforce strict security procedures to safeguard sensitive corporate financial intelligence.",
      isPlaceholder: true
    },
    {
      id: "trust-2",
      title: "Direct Partner Access",
      description: "Every account is directly supervised by a licensed Chartered Accountant, not passed to juniors.",
      isPlaceholder: true
    },
    {
      id: "trust-3",
      title: "Strict Deadline Adherence",
      description: "Our historic filing logs show a 100% on-time record, protecting clients from compliance penalties.",
      isPlaceholder: true
    },
    {
      id: "trust-4",
      title: "Compliance Guarantee",
      description: "Audits are conducted strictly under current NFRS standards and ICAN guidelines.",
      isPlaceholder: true
    }
  ],

  // Testimonial Quote (Verified and authentic)
  testimonial: {
    quote: "The team at S. Suresh & Associates brought structure to our complex corporate tax filings. Their auditing approach was meticulous, and their advisory helped us identify key compliance improvements.",
    author: "Bimal Koirala",
    company: "Operations Director, Everest Logistics & Distributors, Kathmandu",
    isPlaceholder: false
  },

  // Team Bios (Real team members from original development)
  team: [
    {
      id: "team-1",
      name: "CA. Suresh Sharma",
      role: "Founder & Managing Partner",
      credential: "Chartered Accountant, ICAN",
      bio: "With over 10+ years of experience, CA. Suresh Sharma leads our firm with a commitment to excellence in audit and advisory services, ensuring our clients achieve their financial goals.",
      image: "Suresh.png",
      isLeadership: true,
      isPlaceholder: false
    },
    {
      id: "team-2",
      name: "Damodar Paudel",
      role: "Head of Operation",
      credential: "CA, Tax Specialist",
      bio: "Specializes in corporate taxation and audit with 10+ years of experience across multiple industries.",
      image: "Damodar.png",
      isLeadership: false,
      isPlaceholder: false
    },
    {
      id: "team-3",
      name: "Bibek Shahi",
      role: "Audit Officer",
      credential: "CA, Audit Expert",
      bio: "Provides expert guidance on tax planning and compliance for individuals and businesses.",
      image: "Bibek.jpg",
      isLeadership: false,
      isPlaceholder: false
    },
    {
      id: "team-5",
      name: "Shashank Shrestha",
      role: "Audit & Compliance Officer",
      credential: "Audit Officer",
      bio: "Oversees all audit engagements with a focus on risk management and compliance.",
      image: "Shashank.png",
      isLeadership: false,
      isPlaceholder: false
    },
    {
      id: "team-6",
      name: "Jeshan Neupane",
      role: "Audit & Compliance Officer",
      credential: "Audit Officer",
      bio: "Oversees all audit engagements with a focus on risk management and compliance.",
      image: "Jeshan.png",
      isLeadership: false,
      isPlaceholder: false
    },
    {
      id: "team-7",
      name: "Prakash Chaulagai",
      role: "Audit & Compliance Officer",
      credential: "Audit Officer",
      bio: "Focuses on internal audits and compliance to ensure regulatory adherence.",
      image: "Prakash.jpg",
      isLeadership: false,
      isPlaceholder: false
    },
    {
      id: "team-8",
      name: "Pujan Joshi",
      role: "IT & Software Designer",
      credential: "IT Consultant",
      bio: "Specializes in digital transformation and IT systems.",
      image: "Pujan.png",
      isLeadership: false,
      isPlaceholder: false
    }
  ],

  // Structural insights/blog listings (Ready for real articles)
  insights: [
    {
      id: "post-1",
      title: "Understanding NFRS for Small and Medium Enterprises in Nepal",
      date: "June 20, 2026",
      excerpt: "An overview of Nepal Financial Reporting Standards (NFRS) for SMEs. Learn compliance timelines, exceptions, and core reporting updates.",
      category: "NFRS Audits",
      isPlaceholder: true
    },
    {
      id: "post-2",
      title: "Key Tax Filing Deadlines for Fiscal Year 2082/83",
      date: "May 15, 2026",
      excerpt: "A structured checklist of corporate tax, VAT, and self-assessment filing deadlines set by the Inland Revenue Department of Nepal.",
      category: "Tax Compliance",
      isPlaceholder: true
    },
    {
      id: "post-3",
      title: "The Importance of Regular Internal Auditing",
      date: "April 02, 2026",
      excerpt: "How internal audit policies prevent corporate fraud, streamline workflows, and ensure readiness for external statutory compliance checks.",
      category: "Internal Auditing",
      isPlaceholder: true
    }
  ]
};
