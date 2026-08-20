import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, ChevronDown, ChevronUp, Building2, Users, Award, ShieldCheck, LayoutList, Clock } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "name": "[Company Name]",
      "url": "https://yourwebsite.com",
      "telephone": "[PHONE]",
      "address": { "@type": "PostalAddress", "addressLocality": "Panaji", "addressRegion": "Goa", "addressCountry": "IN" },
      "areaServed": { "@type": "State", "name": "Goa" }
    },
    {
      "@type": "Service",
      "name": "Commercial Construction in Goa",
      "provider": { "@type": "LocalBusiness", "name": "[Company Name]" },
      "areaServed": { "@type": "State", "name": "Goa" },
      "description": "Professional commercial construction services in Goa for offices, retail spaces, hotels, restaurants, and commercial buildings.",
      "serviceType": "Commercial Construction"
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://yourwebsite.com/" },
        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://yourwebsite.com/services" },
        { "@type": "ListItem", "position": 3, "name": "Commercial Construction Goa", "item": "https://yourwebsite.com/services/commercial-construction-goa" }
      ]
    }
  ]
};

const projectTypes = [
  { icon: <Building2 size={32} strokeWidth={1} />, title: 'Corporate Offices', desc: 'Open-plan and partitioned office spaces, multi-storey corporate headquarters, and business parks built for productivity and professional aesthetics.' },
  { icon: <LayoutList size={32} strokeWidth={1} />, title: 'Retail & Showrooms', desc: 'Retail outlets, shopping centres, showrooms, and franchise stores with customer-flow focused design and premium display environments.' },
  { icon: <Award size={32} strokeWidth={1} />, title: 'Hotels & Resorts', desc: 'Full-scale hospitality construction including boutique hotels, resort villas, and service apartment blocks across Goa\'s hospitality belt.' },
  { icon: <Users size={32} strokeWidth={1} />, title: 'Restaurants & F&B', desc: 'Restaurant shells, cloud kitchens, food court builds, and café fitouts — with coordinated MEP, ventilation, and kitchen infrastructure.' },
  { icon: <ShieldCheck size={32} strokeWidth={1} />, title: 'Industrial & Warehousing', desc: 'Warehouses, logistics centres, light industrial buildings, and storage facilities designed for operational efficiency and regulatory compliance.' },
  { icon: <Clock size={32} strokeWidth={1} />, title: 'Mixed-Use Developments', desc: 'Multi-purpose buildings combining commercial ground floors with residential or serviced apartment upper floors, coordinated as a unified project.' },
];

const scopeItems = [
  { title: 'Pre-Construction', points: ['Feasibility assessment and site report', 'Structural and architectural plan review', 'Regulatory approval coordination', 'Bill of quantities and cost estimation', 'Procurement planning and lead-time scheduling'] },
  { title: 'Construction Phase', points: ['Site establishment and safety setup', 'Foundation, structure, and RCC works', 'MEP rough-in (mechanical, electrical, plumbing)', 'Façade, cladding, and external works', 'Internal partitioning and fit-out coordination'] },
  { title: 'Completion', points: ['Finishing works and quality inspection', 'Systems testing and commissioning', 'Punch-list and defect resolution', 'Occupancy certificate support', 'Handover documentation and warranties'] },
];

const planningSteps = [
  { num: '01', title: 'Project Briefing', desc: 'We conduct a structured brief with key stakeholders to understand the project scope, business requirements, budget ceiling, and timeline expectations.' },
  { num: '02', title: 'Site & Regulatory Analysis', desc: 'Full site assessment covering access, infrastructure, FSI/FAR calculations, commercial zone compliance, and approvals roadmap.' },
  { num: '03', title: 'Design Coordination', desc: 'Liaison between your architect, interior designer, and our structural team to align all drawings and specifications before construction begins.' },
  { num: '04', title: 'Detailed Estimation', desc: 'Itemised BOQ-based estimate with material specifications, labour rates, overheads, and contingency — reviewed and agreed before any work starts.' },
  { num: '05', title: 'Project Mobilisation', desc: 'Procurement, site team assignment, subcontractor engagement, and formal project kick-off with milestone schedule communicated to all parties.' },
];

const coordinationPoints = [
  { title: 'Dedicated Project Manager', desc: 'Every commercial project has a senior project manager as the single point of contact — responsible for all scheduling, vendor coordination, and progress reporting.' },
  { title: 'Weekly Progress Reporting', desc: 'Structured weekly reports covering work completed, materials consumed, issues flagged, and activities planned for the next period.' },
  { title: 'Subcontractor Management', desc: 'We vet and manage all subcontractors — MEP specialists, façade contractors, waterproofing teams — under a single unified programme.' },
  { title: 'Client Communication Protocol', desc: 'Scheduled fortnightly review calls with the client team, supplemented by site visit access and a live project tracker where required.' },
];

const qualityPoints = [
  { icon: <ShieldCheck size={22} />, title: 'Pre-Pour Inspections', desc: 'All structural work is inspected before concrete is poured — rebar placement, formwork, cover blocks, and mix design are verified.' },
  { icon: <Award size={22} />, title: 'Material Testing', desc: 'Key materials are tested at approved labs — cube tests for concrete, tensile tests for steel, and density checks for masonry.' },
  { icon: <Clock size={22} />, title: 'Timeline Tracking', desc: 'We use programme-of-works scheduling with float analysis — identifying delays before they compound and proactively adjusting.' },
  { icon: <LayoutList size={22} />, title: 'Milestone Sign-offs', desc: 'Each construction milestone is formally signed off by the site engineer and client representative before the next phase commences.' },
];

const projects = [
  { title: 'Corporate Office Hub, Panjim', type: 'Office', status: 'Completed', area: '12,000 sq.ft', img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop' },
  { title: 'Boutique Hotel, Calangute', type: 'Hospitality', status: 'Completed', area: '18 rooms', img: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&auto=format&fit=crop' },
  { title: 'Retail Complex, Mapusa', type: 'Retail', status: 'Completed', area: '8,500 sq.ft', img: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800&auto=format&fit=crop' },
];

const faqs = [
  { q: 'How much does commercial construction cost in Goa?', a: 'Commercial construction in Goa typically ranges from ₹2,200 to ₹5,000+ per sq.ft depending on building type, structural system, finishes level, and MEP complexity. We provide detailed BOQ-based estimates tailored to your specific project before any commitment.' },
  { q: 'What is the typical timeline for a commercial construction project?', a: 'A 10,000 sq.ft commercial build typically takes 14–24 months from approvals to handover. Timeline depends on structural complexity, fit-out scope, approval timelines, and material lead times. We provide a formal programme of works for every project.' },
  { q: 'Can you build within an existing operational business environment?', a: 'Yes. We have experience managing phased construction in and around live commercial environments — minimising disruption through careful sequencing and off-hours working where required.' },
  { q: 'Do you work with the client\'s architect or provide design services?', a: 'We primarily execute to your architect\'s design, acting as the main contractor. We can also refer experienced commercial architects and coordinate the full design-and-build process if needed.' },
  { q: 'How do you ensure commercial projects stay on budget?', a: 'Through detailed pre-contract estimation, agreed change-order protocols, and active cost tracking throughout construction. All budget variances are reported and approved before additional expenditure is committed.' },
  { q: 'Are you registered to undertake large commercial projects in Goa?', a: 'Yes. We are fully licensed, GST-registered, and carry all necessary contractor certifications to undertake commercial construction projects across Goa under applicable building regulations.' },
];

const FAQ = ({ q, a }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={`construction-border bg-white transition-all duration-300 ${open ? 'border-amber-gold' : ''}`}>
      <button className="w-full flex justify-between items-center p-6 text-left" onClick={() => setOpen(!open)}>
        <span className={`font-heading text-lg ${open ? 'text-amber-gold' : 'text-construction-black'} hover:text-amber-gold transition-colors`}>{q}</span>
        <span className="flex-shrink-0 ml-4 text-amber-gold">{open ? <ChevronUp size={20} /> : <ChevronDown size={20} />}</span>
      </button>
      <div className={`overflow-hidden transition-all duration-500 ${open ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}>
        <p className="px-6 pb-6 text-dark-grey font-paragraph text-sm leading-relaxed">{a}</p>
      </div>
    </div>
  );
};

const CommercialConstruction = () => (
  <div className="bg-light-grey">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    <Header />

    {/* ── HERO ── */}
    <section className="relative min-h-[80vh] flex items-end bg-construction-black overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
      <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1800&auto=format&fit=crop" alt="Commercial Construction Goa" className="absolute inset-0 w-full h-full object-cover filter grayscale opacity-25" />
      <div className="absolute inset-0 bg-linear-to-t from-construction-black via-construction-black/60 to-transparent"></div>
      <div className="absolute bottom-0 right-0 w-64 h-1 bg-amber-gold"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10 pb-20 pt-32">
        <nav className="flex items-center space-x-2 font-other text-xs uppercase tracking-widest text-white/50 mb-8">
          <Link to="/" className="hover:text-amber-gold transition-colors">Home</Link>
          <span>/</span>
          <Link to="/services" className="hover:text-amber-gold transition-colors">Services</Link>
          <span>/</span>
          <span className="text-amber-gold">Commercial Construction Goa</span>
        </nav>
        <div className="max-w-3xl">
          <div className="flex items-center space-x-4 mb-6">
            <span className="w-12 h-px bg-amber-gold"></span>
            <span className="font-other text-amber-gold font-bold uppercase tracking-widest text-sm">Commercial Construction · Goa</span>
          </div>
          <h1 className="text-5xl lg:text-7xl text-white leading-tight mb-6">
            Commercial Spaces <br /><span className="text-amber-gold italic font-normal">Built to Perform.</span>
          </h1>
          <p className="text-light-grey text-lg font-paragraph max-w-2xl mb-10">
            Offices, hotels, retail complexes, restaurants, and commercial buildings — delivered by a contractor with the expertise, systems, and accountability to execute at scale.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="/#contact" className="btn btn-primary group">
              Start a Commercial Project <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
            <Link to="/projects" className="btn bg-transparent text-white border-white hover:bg-white hover:text-construction-black">
              View Projects
            </Link>
          </div>
        </div>
      </div>
    </section>

    {/* ── PROJECT TYPES ── */}
    <section className="py-24 bg-white construction-border-t">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <span className="w-8 h-px bg-amber-gold"></span>
            <span className="font-other text-amber-gold font-bold uppercase tracking-widest text-sm">Commercial Projects</span>
            <span className="w-8 h-px bg-amber-gold"></span>
          </div>
          <h2 className="text-4xl md:text-5xl text-construction-black">Commercial Projects We Handle</h2>
          <p className="text-dark-grey font-paragraph text-lg mt-4">From single-tenant offices to large mixed-use developments — we bring the same standard of execution to every commercial project.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectTypes.map((pt, i) => (
            <div key={i} className="construction-box p-8 bg-light-grey/30 group hover:bg-construction-black hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 construction-border bg-white flex items-center justify-center text-amber-gold mb-6 group-hover:bg-amber-gold group-hover:text-construction-black transition-colors duration-300">
                {pt.icon}
              </div>
              <h3 className="text-2xl text-construction-black group-hover:text-white mb-3 transition-colors duration-300">{pt.title}</h3>
              <p className="text-sm text-dark-grey group-hover:text-light-grey font-paragraph transition-colors duration-300">{pt.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ── SCOPE OF WORK ── */}
    <section className="py-24 bg-light-grey construction-border-t relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <span className="w-8 h-px bg-amber-gold"></span>
            <span className="font-other text-amber-gold font-bold uppercase tracking-widest text-sm">Full-Scope Execution</span>
            <span className="w-8 h-px bg-amber-gold"></span>
          </div>
          <h2 className="text-4xl md:text-5xl text-construction-black">Our Scope of Work</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {scopeItems.map((scope, i) => (
            <div key={i} className="construction-box p-8 bg-white">
              <div className="w-1 h-10 bg-amber-gold mb-6"></div>
              <h3 className="text-2xl text-construction-black mb-4">{scope.title}</h3>
              <ul className="space-y-3">
                {scope.points.map((pt, j) => (
                  <li key={j} className="flex items-start space-x-3">
                    <CheckCircle2 size={16} className="text-amber-gold flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-dark-grey font-paragraph">{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ── PLANNING & EXECUTION ── */}
    <section className="py-24 bg-construction-black text-white construction-border-t relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <span className="w-8 h-px bg-amber-gold"></span>
            <span className="font-other text-amber-gold font-bold uppercase tracking-widest text-sm">Methodology</span>
            <span className="w-8 h-px bg-amber-gold"></span>
          </div>
          <h2 className="text-4xl md:text-5xl text-white">Planning & Execution Approach</h2>
        </div>
        <div className="relative">
          <div className="hidden lg:block absolute top-12 left-0 w-full h-px bg-white/10"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 relative">
            {planningSteps.map((step, i) => (
              <div key={i} className="group flex lg:flex-col items-start lg:items-center">
                <div className="flex-shrink-0 w-24 h-24 bg-white/5 border border-white/20 flex items-center justify-center font-heading text-4xl text-white/20 group-hover:text-amber-gold group-hover:border-amber-gold transition-all duration-300 z-10 relative">
                  {step.num}
                </div>
                <div className="ml-8 lg:ml-0 lg:mt-8 lg:text-center">
                  <h3 className="text-lg text-white mb-2 font-bold group-hover:text-amber-gold transition-colors">{step.title}</h3>
                  <p className="text-sm text-light-grey font-paragraph">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* ── PROJECT COORDINATION ── */}
    <section className="py-24 bg-white construction-border-t">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center space-x-4 mb-4">
              <span className="w-8 h-px bg-amber-gold"></span>
              <span className="font-other text-amber-gold font-bold uppercase tracking-widest text-sm">How We Coordinate</span>
            </div>
            <h2 className="text-4xl md:text-5xl text-construction-black mb-6">Project Coordination</h2>
            <p className="text-dark-grey font-paragraph text-lg mb-10">Commercial projects involve multiple consultants, contractors, and stakeholders. Our coordination infrastructure ensures everyone stays aligned.</p>
            <div className="space-y-6">
              {coordinationPoints.map((pt, i) => (
                <div key={i} className="flex items-start space-x-5 group">
                  <div className="w-8 h-8 bg-amber-gold/10 border border-amber-gold flex-shrink-0 flex items-center justify-center font-other font-bold text-amber-gold text-sm mt-0.5 group-hover:bg-amber-gold group-hover:text-construction-black transition-colors">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="font-heading text-lg text-construction-black mb-1">{pt.title}</h3>
                    <p className="text-sm text-dark-grey font-paragraph">{pt.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative h-[500px]">
            <div className="construction-box p-4 h-full bg-white">
              <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=900&auto=format&fit=crop" alt="Project coordination" className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700" />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-construction-black text-white p-6 border-t-4 border-amber-gold">
              <p className="font-heading text-4xl text-amber-gold font-bold">250+</p>
              <p className="font-other uppercase tracking-widest text-xs mt-1">Commercial Projects</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* ── QUALITY & TIMELINE ── */}
    <section className="py-24 bg-light-grey construction-border-t relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <span className="w-8 h-px bg-amber-gold"></span>
            <span className="font-other text-amber-gold font-bold uppercase tracking-widest text-sm">Standards</span>
            <span className="w-8 h-px bg-amber-gold"></span>
          </div>
          <h2 className="text-4xl md:text-5xl text-construction-black">Quality & Timeline Management</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {qualityPoints.map((pt, i) => (
            <div key={i} className="construction-box p-8 bg-white group hover:border-amber-gold transition-colors duration-300">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-10 h-10 bg-amber-gold/10 border border-amber-gold flex items-center justify-center text-amber-gold group-hover:bg-amber-gold group-hover:text-construction-black transition-colors">{pt.icon}</div>
                <h3 className="text-xl text-construction-black">{pt.title}</h3>
              </div>
              <p className="text-dark-grey text-sm font-paragraph">{pt.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ── PROJECTS ── */}
    <section className="py-24 bg-white construction-border-t">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <div className="flex items-center space-x-4 mb-4">
              <span className="w-8 h-px bg-amber-gold"></span>
              <span className="font-other text-amber-gold font-bold uppercase tracking-widest text-sm">Featured Work</span>
            </div>
            <h2 className="text-4xl md:text-5xl text-construction-black">Featured Commercial Projects</h2>
          </div>
          <Link to="/projects" className="btn btn-secondary mt-6 md:mt-0">All Projects</Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((proj, i) => (
            <div key={i} className="group construction-box p-2 bg-white overflow-hidden">
              <div className="relative h-64 overflow-hidden">
                <img src={proj.img} alt={proj.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-construction-black/30 group-hover:bg-construction-black/10 transition-colors duration-500"></div>
                <span className="absolute top-4 left-4 bg-amber-gold text-construction-black text-xs font-other font-bold uppercase tracking-wider px-3 py-1">{proj.status}</span>
              </div>
              <div className="p-5">
                <p className="font-other text-xs uppercase tracking-widest text-amber-gold font-semibold mb-1">{proj.type} · {proj.area}</p>
                <h3 className="text-lg text-construction-black">{proj.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ── FAQ ── */}
    <section className="py-24 bg-light-grey construction-border-t">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div>
            <div className="flex items-center space-x-4 mb-4">
              <span className="w-8 h-px bg-amber-gold"></span>
              <span className="font-other text-amber-gold font-bold uppercase tracking-widest text-sm">FAQ</span>
            </div>
            <h2 className="text-4xl text-construction-black mb-4">Common Questions</h2>
            <p className="text-dark-grey font-paragraph">Questions about commercial construction in Goa, answered directly.</p>
            <a href="/#contact" className="btn btn-primary mt-8 inline-flex group">
              Ask a Question <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
          <div className="lg:col-span-2 space-y-4">
            {faqs.map((faq, i) => <FAQ key={i} q={faq.q} a={faq.a} />)}
          </div>
        </div>
      </div>
    </section>

    {/* ── CTA ── */}
    <section className="relative overflow-hidden border-t-4 border-amber-gold">
      <div className="absolute inset-0 bg-construction-black/85 z-10"></div>
      <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1800&auto=format&fit=crop" alt="Start a Commercial Project" className="absolute inset-0 w-full h-full object-cover filter grayscale" />
      <div className="absolute inset-0 bg-grid-pattern opacity-20 z-10 pointer-events-none"></div>
      <div className="container mx-auto px-6 lg:px-12 relative z-20 py-28 text-center text-white">
        <div className="flex items-center justify-center space-x-4 mb-6">
          <span className="w-12 h-px bg-amber-gold"></span>
          <span className="font-other text-amber-gold font-bold uppercase tracking-widest text-sm">Ready to Build?</span>
          <span className="w-12 h-px bg-amber-gold"></span>
        </div>
        <h2 className="text-4xl md:text-6xl font-heading mb-6">Start a Commercial Project</h2>
        <p className="text-light-grey text-lg mb-10 max-w-2xl mx-auto font-paragraph">
          Whether you're planning a new office, a hotel build, or a retail complex — let's talk about your project and put together a clear, professional proposal.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="/#contact" className="btn btn-primary bg-amber-gold text-construction-black hover:bg-white hover:border-white hover:text-construction-black group">
            Get a Project Quote <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
          <Link to="/services" className="btn bg-transparent text-white border-white hover:bg-white hover:text-construction-black">
            All Services
          </Link>
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default CommercialConstruction;
