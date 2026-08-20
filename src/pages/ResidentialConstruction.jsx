import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, ChevronDown, ChevronUp, Home, Ruler, ShieldCheck, Users, Award, Leaf } from 'lucide-react';
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
      "geo": { "@type": "GeoCoordinates", "latitude": "15.4909", "longitude": "73.8278" },
      "areaServed": { "@type": "State", "name": "Goa" },
      "priceRange": "₹₹₹"
    },
    {
      "@type": "Service",
      "name": "Residential Construction in Goa",
      "provider": { "@type": "LocalBusiness", "name": "[Company Name]" },
      "areaServed": { "@type": "State", "name": "Goa" },
      "description": "Premium residential construction services in Goa including custom homes, villas, row houses and apartments with full structural and finishing work.",
      "serviceType": "Residential Construction"
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://yourwebsite.com/" },
        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://yourwebsite.com/services" },
        { "@type": "ListItem", "position": 3, "name": "Residential Construction Goa", "item": "https://yourwebsite.com/services/residential-construction-goa" }
      ]
    }
  ]
};

const homeTypes = [
  { title: 'Custom Villas', img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=800&auto=format&fit=crop', desc: 'Individually designed bungalows and villas with full architectural coordination, premium finishes, and structural longevity.' },
  { title: 'Row Houses', img: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=800&auto=format&fit=crop', desc: 'Efficiently planned row-house developments for housing colonies and residential townships.' },
  { title: 'Apartments & Flats', img: 'https://images.unsplash.com/photo-1515263487990-61b07816b324?q=80&w=800&auto=format&fit=crop', desc: 'Multi-storey residential buildings with RCC structures, common facilities, and reliable MEP coordination.' },
  { title: 'Heritage & Renovation', img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop', desc: 'Sensitive restoration and structural upgrades for Goan heritage homes, Portuguese-style villas, and older properties.' },
];

const processSteps = [
  { num: '01', title: 'Site Visit & Assessment', desc: 'We visit the plot or existing structure to evaluate soil, access, local bye-laws, and construction feasibility.' },
  { num: '02', title: 'Requirement Discussion', desc: 'A detailed conversation about your needs — layout preferences, bedroom count, style, future-proofing, and budget.' },
  { num: '03', title: 'Design Coordination', desc: 'We coordinate with your architect or refer one. All plans are reviewed structurally before construction starts.' },
  { num: '04', title: 'Estimate & Agreement', desc: 'A transparent, itemised cost estimate with material specifications, timeline milestones, and payment schedule.' },
  { num: '05', title: 'Construction', desc: 'Execution with dedicated site supervisors, daily progress tracking, quality material procurement, and regular updates.' },
  { num: '06', title: 'Finishing & Handover', desc: 'Complete interior finishing, final inspection, defect resolution, and a smooth handover with full documentation.' },
];

const advantages = [
  { icon: <ShieldCheck size={28} />, title: 'Structural Integrity First', desc: 'Every home starts with correctly engineered foundations, columns, and beams — never compromised for cost.' },
  { icon: <Ruler size={28} />, title: 'Accurate Estimates', desc: 'No hidden costs. You receive itemised estimates with material specifications before work begins.' },
  { icon: <Users size={28} />, title: 'Dedicated Site Team', desc: 'A supervisor is assigned to your project from start to finish — you always have someone accountable on-site.' },
  { icon: <Award size={28} />, title: 'Quality Finishes', desc: 'Flooring, plastering, painting, and carpentry are executed with premium-grade materials and experienced tradespeople.' },
  { icon: <Leaf size={28} />, title: 'Sustainable Building', desc: 'We advise on energy-efficient design, proper ventilation, rainwater harvesting, and sustainable material choices.' },
  { icon: <Home size={28} />, title: 'Goa-Specific Expertise', desc: 'We understand local climate, soil conditions, CRZ regulations, panchayat norms, and Goa-specific construction requirements.' },
];

const materials = [
  { title: 'Structural Materials', points: ['Fe500 TMT steel bars from certified suppliers', 'OPC/PPC cement — 43/53 grade', 'Locally tested aggregates and sand', 'RCC mix design as per structural drawings'] },
  { title: 'Masonry & Waterproofing', points: ['AAC blocks or burnt clay bricks', 'Waterproofing compounds for terrace, bathrooms, and basements', 'External wall weather-resistant coatings', 'Anti-termite treatment as standard'] },
  { title: 'Finishes', points: ['Vitrified or natural stone flooring options', 'Premium texture or emulsion paint finishes', 'UPVC / aluminium windows and doors', 'Branded sanitary fittings and electrical fixtures'] },
];

const projects = [
  { title: 'Hilltop Villa, Dona Paula', type: 'Luxury Villa', status: 'Completed', img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=800&auto=format&fit=crop', area: '3,800 sq.ft' },
  { title: 'Coastal Row Houses, Candolim', type: 'Row Houses', status: 'Completed', img: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=800&auto=format&fit=crop', area: '2,200 sq.ft each' },
  { title: 'Heritage Restoration, Fontainhas', type: 'Renovation', status: 'Completed', img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop', area: '1,600 sq.ft' },
];

const faqs = [
  { q: 'What is the average cost of residential construction in Goa?', a: 'Construction costs in Goa typically range from ₹1,800 to ₹3,500+ per sq.ft depending on the construction type, finishes, location, and structural requirements. We provide a detailed itemised estimate specific to your project before any commitment.' },
  { q: 'How long does it take to build a house in Goa?', a: 'A standard 2,000–3,000 sq.ft residential build typically takes 12–18 months from groundbreaking to handover. Timeline varies based on design complexity, approvals, site access, and finishes selected.' },
  { q: 'Do you handle building permissions and approvals in Goa?', a: 'We assist with the approval process and coordinate with your architect for plan submissions. For turnkey projects, we manage all approvals including panchayat/municipal NOCs, CRZ clearances, and structural approvals.' },
  { q: 'Can you build on a plot I have already purchased?', a: 'Yes. We assess your plot for construction feasibility, soil type, access, and applicable bye-laws, then provide a full project proposal based on your requirements.' },
  { q: 'What payment schedule do you follow?', a: 'We follow milestone-based payment schedules linked to construction progress — typically tied to foundation, plinth, slab levels, brickwork, plastering, and finishing stages.' },
  { q: 'Do you provide a warranty on your residential construction?', a: 'Yes. We provide a post-handover defect liability period covering structural and waterproofing issues. Specific warranty terms are outlined in the project agreement.' },
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

const ResidentialConstruction = () => (
  <div className="bg-light-grey">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    <Header />

    {/* ── HERO ── */}
    <section className="relative min-h-[80vh] flex items-end bg-construction-black overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
      <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1800&auto=format&fit=crop" alt="Residential Construction Goa" className="absolute inset-0 w-full h-full object-cover filter grayscale opacity-30" />
      <div className="absolute inset-0 bg-linear-to-t from-construction-black via-construction-black/60 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-64 h-1 bg-amber-gold"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10 pb-20 pt-32">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 font-other text-xs uppercase tracking-widest text-white/50 mb-8">
          <Link to="/" className="hover:text-amber-gold transition-colors">Home</Link>
          <span>/</span>
          <Link to="/services" className="hover:text-amber-gold transition-colors">Services</Link>
          <span>/</span>
          <span className="text-amber-gold">Residential Construction Goa</span>
        </nav>
        <div className="max-w-3xl">
          <div className="flex items-center space-x-4 mb-6">
            <span className="w-12 h-px bg-amber-gold"></span>
            <span className="font-other text-amber-gold font-bold uppercase tracking-widest text-sm">Residential Construction · Goa</span>
          </div>
          <h1 className="text-5xl lg:text-7xl text-white leading-tight mb-6">
            Build Your Home <br /><span className="text-amber-gold italic font-normal">The Right Way.</span>
          </h1>
          <p className="text-light-grey text-lg font-paragraph max-w-2xl mb-10">
            Premium residential construction services across Goa — custom villas, row houses, apartments, and heritage renovations. Built with structural precision, delivered on time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="/#contact" className="btn btn-primary group">
              Discuss Your Home Project <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
            <Link to="/projects" className="btn bg-transparent text-white border-white hover:bg-white hover:text-construction-black">
              View Projects
            </Link>
          </div>
        </div>
      </div>
    </section>

    {/* ── WHAT IT INCLUDES ── */}
    <section className="py-24 bg-white construction-border-t">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <div className="flex items-center space-x-4 mb-4">
              <span className="w-8 h-px bg-amber-gold"></span>
              <span className="font-other text-amber-gold font-bold uppercase tracking-widest text-sm">What We Deliver</span>
            </div>
            <h2 className="text-4xl md:text-5xl text-construction-black mb-6">What Residential Construction Includes</h2>
            <p className="text-dark-grey font-paragraph text-lg mb-8">
              Residential construction is more than laying bricks — it's the coordinated delivery of every system that makes a home safe, functional, and lasting. We manage the full scope.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {['Site preparation & excavation', 'Foundation & plinth work', 'RCC structural framework', 'Brickwork & masonry', 'Plastering & waterproofing', 'Electrical & plumbing rough-in', 'Roofing & terrace work', 'Door & window frames', 'Flooring & tiling', 'Internal & external finishes', 'Compound wall & gate', 'Landscape coordination'].map((item, i) => (
                <div key={i} className="flex items-center space-x-3">
                  <CheckCircle2 size={16} className="text-amber-gold flex-shrink-0" />
                  <span className="text-dark-grey text-sm font-paragraph">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="construction-box p-4 bg-white">
              <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=900&auto=format&fit=crop" alt="Construction in progress" className="w-full h-96 object-cover filter grayscale hover:grayscale-0 transition-all duration-700" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-amber-gold p-6 z-10">
              <p className="font-heading text-4xl font-bold text-construction-black leading-none">250+</p>
              <p className="font-other uppercase tracking-widest text-xs text-construction-black/70 mt-1">Homes Delivered</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* ── TYPES OF HOMES ── */}
    <section className="py-24 bg-light-grey construction-border-t relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <span className="w-8 h-px bg-amber-gold"></span>
            <span className="font-other text-amber-gold font-bold uppercase tracking-widest text-sm">Scope of Work</span>
            <span className="w-8 h-px bg-amber-gold"></span>
          </div>
          <h2 className="text-4xl md:text-5xl text-construction-black">Types of Homes We Build</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {homeTypes.map((type, i) => (
            <div key={i} className="construction-box bg-white group hover:-translate-y-2 transition-transform duration-300 overflow-hidden">
              <div className="relative h-56 overflow-hidden">
                <img src={type.img} alt={type.title} className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-linear-to-t from-construction-black/60 to-transparent"></div>
                <h3 className="absolute bottom-4 left-6 text-2xl text-white">{type.title}</h3>
              </div>
              <div className="p-6">
                <p className="text-dark-grey text-sm font-paragraph leading-relaxed">{type.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ── PROCESS ── */}
    <section className="py-24 bg-construction-black text-white construction-border-t relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <span className="w-8 h-px bg-amber-gold"></span>
            <span className="font-other text-amber-gold font-bold uppercase tracking-widest text-sm">How We Work</span>
            <span className="w-8 h-px bg-amber-gold"></span>
          </div>
          <h2 className="text-4xl md:text-5xl text-white">Our Residential Construction Process</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {processSteps.map((step, i) => (
            <div key={i} className="construction-box p-8 bg-white/5 border-white/10 group hover:border-amber-gold hover:bg-amber-gold/5 transition-all duration-300">
              <p className="font-heading text-5xl text-amber-gold/20 font-bold mb-4 group-hover:text-amber-gold/40 transition-colors">{step.num}</p>
              <h3 className="text-xl text-white mb-3">{step.title}</h3>
              <p className="text-light-grey text-sm font-paragraph">{step.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link to="/process" className="btn bg-transparent text-amber-gold border-amber-gold hover:bg-amber-gold hover:text-construction-black">
            View Full Process <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>

    {/* ── ADVANTAGES ── */}
    <section className="py-24 bg-white construction-border-t">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <span className="w-8 h-px bg-amber-gold"></span>
            <span className="font-other text-amber-gold font-bold uppercase tracking-widest text-sm">Why Work With Us</span>
            <span className="w-8 h-px bg-amber-gold"></span>
          </div>
          <h2 className="text-4xl md:text-5xl text-construction-black">Key Advantages of Working With Us</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((adv, i) => (
            <div key={i} className="construction-box p-8 bg-light-grey/30 group hover:-translate-y-2 hover:bg-construction-black transition-all duration-300">
              <div className="w-14 h-14 construction-border bg-white flex items-center justify-center text-amber-gold mb-6 group-hover:bg-amber-gold group-hover:text-construction-black transition-colors duration-300">
                {adv.icon}
              </div>
              <h3 className="text-xl text-construction-black group-hover:text-white mb-3 transition-colors duration-300">{adv.title}</h3>
              <p className="text-sm text-dark-grey group-hover:text-light-grey font-paragraph transition-colors duration-300">{adv.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ── MATERIALS ── */}
    <section className="py-24 bg-light-grey construction-border-t relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <span className="w-8 h-px bg-amber-gold"></span>
            <span className="font-other text-amber-gold font-bold uppercase tracking-widest text-sm">Quality Standards</span>
            <span className="w-8 h-px bg-amber-gold"></span>
          </div>
          <h2 className="text-4xl md:text-5xl text-construction-black">Materials & Quality Approach</h2>
          <p className="text-dark-grey font-paragraph text-lg mt-4">We source only tested, specification-grade materials from reliable suppliers. Every material used is selected for performance and longevity in Goa's coastal climate.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {materials.map((mat, i) => (
            <div key={i} className="construction-box p-8 bg-white">
              <div className="w-1 h-10 bg-amber-gold mb-6"></div>
              <h3 className="text-2xl text-construction-black mb-4">{mat.title}</h3>
              <ul className="space-y-3">
                {mat.points.map((pt, j) => (
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

    {/* ── PROJECTS ── */}
    <section className="py-24 bg-white construction-border-t">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <div className="flex items-center space-x-4 mb-4">
              <span className="w-8 h-px bg-amber-gold"></span>
              <span className="font-other text-amber-gold font-bold uppercase tracking-widest text-sm">Featured Work</span>
            </div>
            <h2 className="text-4xl md:text-5xl text-construction-black">Featured Residential Projects</h2>
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
            <p className="text-dark-grey font-paragraph">Answers to the most common questions about residential construction in Goa.</p>
            <a href="/#contact" className="btn btn-primary mt-8 inline-flex group">
              Ask Us <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
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
      <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1800&auto=format&fit=crop" alt="Build Your Home" className="absolute inset-0 w-full h-full object-cover filter grayscale" />
      <div className="absolute inset-0 bg-grid-pattern opacity-20 z-10 pointer-events-none"></div>
      <div className="container mx-auto px-6 lg:px-12 relative z-20 py-28 text-center text-white">
        <div className="flex items-center justify-center space-x-4 mb-6">
          <span className="w-12 h-px bg-amber-gold"></span>
          <span className="font-other text-amber-gold font-bold uppercase tracking-widest text-sm">Start Building</span>
          <span className="w-12 h-px bg-amber-gold"></span>
        </div>
        <h2 className="text-4xl md:text-6xl font-heading mb-6">Discuss Your Home Project</h2>
        <p className="text-light-grey text-lg mb-10 max-w-2xl mx-auto font-paragraph">
          Tell us about your plot, your vision, and your timeline. We'll put together a clear proposal — with no obligation.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="/#contact" className="btn btn-primary bg-amber-gold text-construction-black hover:bg-white hover:border-white hover:text-construction-black group">
            Get a Free Quote <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
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

export default ResidentialConstruction;
