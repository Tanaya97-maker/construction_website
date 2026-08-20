import React, { useState } from 'react';
import {
  Home, Building2, Key, HardHat, Hammer, LayoutList,
  ArrowRight, CheckCircle2, ChevronDown, ChevronUp,
  MessageCircle, ShieldCheck, Award, Users, Ruler
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const services = [
  {
    id: 'residential',
    icon: <Home size={36} strokeWidth={1} />,
    title: 'Residential Construction',
    tagline: 'Your dream home, built right.',
    description: 'We design and build custom homes, villas, and residential developments that reflect your lifestyle and stand for generations. From plot-level planning to final handover, every detail is managed with precision.',
    benefits: ['Custom layout and design integration', 'Quality materials sourced responsibly', 'On-schedule delivery guarantee', 'Transparent cost breakdowns', 'Vastu-compliant planning available'],
    img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=900&auto=format&fit=crop',
  },
  {
    id: 'commercial',
    icon: <Building2 size={36} strokeWidth={1} />,
    title: 'Commercial Construction',
    tagline: 'Spaces that work as hard as you do.',
    description: 'From corporate offices to retail complexes and hospitality projects, we build commercial spaces that combine structural durability with functional, business-ready design.',
    benefits: ['Compliance with commercial building codes', 'Scalable design for future expansion', 'Minimized business disruption timelines', 'Integrated MEP coordination', 'Interior fit-out support available'],
    img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=900&auto=format&fit=crop',
  },
  {
    id: 'turnkey',
    icon: <Key size={36} strokeWidth={1} />,
    title: 'Turnkey Construction',
    tagline: 'One contract. Zero hassle. Complete delivery.',
    description: 'We handle every phase — from design, approvals, and sourcing to construction, finishing, and final handover. A truly end-to-end solution that saves you time and reduces coordination burden.',
    benefits: ['Single point of accountability', 'Design-to-delivery management', 'Regulatory approvals handled', 'Budget and timeline certainty', 'Move-in ready handover'],
    img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=900&auto=format&fit=crop',
  },
  {
    id: 'civil',
    icon: <HardHat size={36} strokeWidth={1} />,
    title: 'Civil Construction',
    tagline: 'Solid foundations. Structural excellence.',
    description: 'Our civil work covers foundations, RCC structures, compound walls, drainage systems, and all associated infrastructure. We execute to engineering specifications with full documentation.',
    benefits: ['Soil testing and site analysis', 'Certified structural engineers on-site', 'RCC and load-bearing structure expertise', 'All civil compliance documentation', 'Third-party quality audits available'],
    img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=900&auto=format&fit=crop',
  },
  {
    id: 'renovation',
    icon: <Hammer size={36} strokeWidth={1} />,
    title: 'Renovation & Remodeling',
    tagline: 'Transform your space. Preserve its soul.',
    description: "Whether it's a heritage property restoration, structural modification, or a full interior overhaul — we bring fresh construction quality to existing spaces with minimal disruption.",
    benefits: ['Structural assessment before work begins', 'Heritage and vintage structure expertise', 'Phased renovation planning', 'Waterproofing and retrofitting services', 'Premium finishing and detailing'],
    img: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=900&auto=format&fit=crop',
  },
  {
    id: 'pm',
    icon: <LayoutList size={36} strokeWidth={1} />,
    title: 'Project Management',
    tagline: 'Expert oversight. On-time results.',
    description: 'For clients with existing contractors or partially executed projects, we provide professional project management — coordinating all parties, monitoring quality, and keeping timelines on track.',
    benefits: ['Independent site monitoring and reporting', 'Vendor coordination and management', 'Progress tracking and reporting', 'Quality control and punch-list management', 'Risk mitigation and timeline recovery'],
    img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=900&auto=format&fit=crop',
  },
];

const approach = [
  { icon: <Award size={28} />, title: 'Quality Without Compromise', desc: 'Every material, every joint, every finish is reviewed against our quality standards before it passes.' },
  { icon: <ShieldCheck size={28} />, title: 'Safety by Default', desc: 'We do not cut corners on site safety. Protocols are enforced from day one through handover.' },
  { icon: <Users size={28} />, title: 'Collaborative Execution', desc: 'We work as an extension of your team, not just a contractor — with open communication at every stage.' },
  { icon: <Ruler size={28} />, title: 'Precision Planning', desc: 'Detailed pre-construction planning reduces surprises, delays, and budget overruns on site.' },
];

const processSteps = [
  { num: '01', title: 'Initial Consultation', desc: 'We listen to your requirements, timeline, and budget to understand the full project scope.' },
  { num: '02', title: 'Site Assessment', desc: 'On-site evaluation of the property to identify constraints, opportunities, and requirements.' },
  { num: '03', title: 'Estimation & Proposal', desc: 'A transparent, itemised project proposal with timeline, scope, and cost breakdown.' },
  { num: '04', title: 'Execution & Oversight', desc: 'Construction begins with dedicated site management, progress updates, and quality checks.' },
  { num: '05', title: 'Quality Review & Handover', desc: 'Final inspections, punch-list completion, and a smooth project handover to you.' },
];

const faqs = [
  { q: 'How do you ensure your projects stay on budget?', a: 'We provide a detailed itemised estimate upfront and track all costs throughout the project. Any scope changes are communicated and approved before additional costs are incurred.' },
  { q: 'Do you handle the necessary permits and approvals?', a: 'Yes. For our turnkey projects, we manage all required regulatory approvals and permits. For standard contracts, we assist you through the approval process.' },
  { q: 'What types of projects do you specialise in?', a: 'We work across residential, commercial, and civil construction in Goa — from individual bungalows to commercial complexes and multi-unit developments.' },
  { q: 'How transparent is your pricing?', a: 'Very. We provide line-item estimates and regular financial updates. There are no hidden costs — only documented change orders if the scope changes.' },
  { q: 'Do you offer post-construction support?', a: 'Yes. We offer a post-handover defect liability period and are available for any structural or finishing issues that arise after project completion.' },
  { q: 'Can you work with an existing architect or designer?', a: 'Absolutely. We regularly collaborate with architects, interior designers, and consultants. We can execute based on existing plans or coordinate the full design-build process.' },
];

const FAQ = ({ q, a }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={`construction-border bg-white transition-all duration-300 ${open ? 'border-amber-gold' : ''}`}>
      <button
        className="w-full flex justify-between items-center p-6 text-left group"
        onClick={() => setOpen(!open)}
      >
        <span className={`font-heading text-lg ${open ? 'text-amber-gold' : 'text-construction-black'} group-hover:text-amber-gold transition-colors`}>{q}</span>
        <span className={`flex-shrink-0 ml-4 text-amber-gold transition-transform duration-300 ${open ? 'rotate-0' : ''}`}>
          {open ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </span>
      </button>
      <div className={`overflow-hidden transition-all duration-500 ${open ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
        <p className="px-6 pb-6 text-dark-grey font-paragraph text-sm leading-relaxed">{a}</p>
      </div>
    </div>
  );
};

const ServicesPage = () => {
  return (
    <div className="bg-light-grey">
      <Header />

      {/* ─── HERO ────────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[70vh] flex items-center bg-construction-black overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1800&auto=format&fit=crop"
          alt="Services Hero"
          className="absolute inset-0 w-full h-full object-cover filter grayscale opacity-20"
        />
        <div className="absolute bottom-0 right-0 w-1/4 h-1 bg-amber-gold"></div>
        <div className="container mx-auto px-6 lg:px-12 relative z-10 py-32">
          <div className="max-w-3xl">
            <div className="flex items-center space-x-4 mb-6">
              <span className="w-12 h-px bg-amber-gold"></span>
              <span className="font-other text-amber-gold font-bold uppercase tracking-widest text-sm">What We Build</span>
            </div>
            <h1 className="text-5xl lg:text-7xl text-white leading-tight mb-6">
              Construction Services <br />
              <span className="text-amber-gold italic font-normal">Built Around Your Project.</span>
            </h1>
            <p className="text-light-grey text-lg max-w-2xl font-paragraph">
              From single-family homes to large-scale commercial developments — expert construction execution across every category.
            </p>
          </div>
        </div>
      </section>

      {/* ─── SERVICE CARDS ───────────────────────────────────────────────────── */}
      <section id="services-list" className="py-24 bg-white construction-border-t">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <span className="w-8 h-px bg-amber-gold"></span>
              <span className="font-other text-amber-gold font-bold uppercase tracking-widest text-sm">Our Offerings</span>
              <span className="w-8 h-px bg-amber-gold"></span>
            </div>
            <h2 className="text-4xl md:text-5xl text-construction-black">Premium Construction Services</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {services.map((svc) => (
              <div key={svc.id} className="construction-box bg-white group hover:shadow-2xl hover:shadow-amber-gold/5 transition-all duration-500">
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={svc.img}
                    alt={svc.title}
                    className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-construction-black/70 to-transparent"></div>
                  <div className="absolute bottom-5 left-5 text-amber-gold">{svc.icon}</div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <p className="font-other text-amber-gold uppercase tracking-widest text-xs font-semibold mb-2">{svc.tagline}</p>
                  <h3 className="text-3xl text-construction-black mb-4 group-hover:text-amber-gold transition-colors duration-300">{svc.title}</h3>
                  <p className="text-dark-grey font-paragraph mb-6 text-sm leading-relaxed">{svc.description}</p>

                  {/* Benefits */}
                  <div className="mb-6 space-y-2">
                    {svc.benefits.map((b, i) => (
                      <div key={i} className="flex items-start space-x-3">
                        <CheckCircle2 size={16} className="text-amber-gold flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-dark-grey font-paragraph">{b}</span>
                      </div>
                    ))}
                  </div>

                  <a href="/#contact" className="inline-flex items-center font-other uppercase tracking-wider text-sm font-bold text-construction-black group-hover:text-amber-gold transition-colors">
                    Explore Service <ArrowRight size={16} className="ml-2 group-hover:translate-x-2 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── OUR APPROACH ────────────────────────────────────────────────────── */}
      <section className="py-24 bg-construction-black text-white relative overflow-hidden construction-border-t">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <span className="w-8 h-px bg-amber-gold"></span>
              <span className="font-other text-amber-gold font-bold uppercase tracking-widest text-sm">How We Work</span>
              <span className="w-8 h-px bg-amber-gold"></span>
            </div>
            <h2 className="text-4xl md:text-5xl text-white">Our Approach to Construction</h2>
            <p className="text-light-grey mt-4 font-paragraph text-lg">
              Every project we take on reflects a consistent set of principles that define how we build and how we communicate.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {approach.map((item, i) => (
              <div key={i} className="construction-box p-8 bg-white/5 border-white/10 group hover:bg-amber-gold/10 hover:border-amber-gold transition-all duration-300">
                <div className="w-14 h-14 border border-white/20 flex items-center justify-center text-amber-gold mb-6 group-hover:bg-amber-gold group-hover:text-construction-black transition-colors duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl text-white mb-3">{item.title}</h3>
                <p className="text-light-grey text-sm font-paragraph">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHY CHOOSE OUR SERVICES ─────────────────────────────────────────── */}
      <section className="py-24 bg-white construction-border-t">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[500px]">
              <div className="construction-box p-4 h-full bg-white">
                <img
                  src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=900&auto=format&fit=crop"
                  alt="Why Choose Our Services"
                  className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-construction-black text-white p-6 construction-border border-t-4 border-amber-gold">
                <p className="font-heading text-4xl text-amber-gold font-bold">500+</p>
                <p className="font-other uppercase tracking-widest text-xs mt-1">Projects Delivered</p>
              </div>
            </div>
            <div>
              <div className="flex items-center space-x-4 mb-4">
                <span className="w-8 h-px bg-amber-gold"></span>
                <span className="font-other text-amber-gold font-bold uppercase tracking-widest text-sm">Why Our Services Stand Out</span>
              </div>
              <h2 className="text-4xl md:text-5xl text-construction-black mb-6">Built on a Foundation of Trust</h2>
              <p className="text-dark-grey font-paragraph text-lg mb-8">
                Our services are not just construction deliverables — they are commitments to quality, timelines, and your peace of mind.
              </p>
              <div className="space-y-4">
                {[
                  'Full accountability from first meeting to final handover',
                  'Experienced, licensed professionals on every project',
                  'Detailed reporting and real-time communication',
                  'Vetted material suppliers and subcontractors only',
                  'Post-handover defect liability and support',
                ].map((point, i) => (
                  <div key={i} className="flex items-start space-x-4 group">
                    <div className="w-6 h-6 bg-amber-gold/10 border border-amber-gold flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-amber-gold transition-colors">
                      <CheckCircle2 size={14} className="text-amber-gold group-hover:text-construction-black transition-colors" />
                    </div>
                    <span className="text-dark-grey font-paragraph">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SERVICE PROCESS ─────────────────────────────────────────────────── */}
      <section className="py-24 bg-light-grey construction-border-t relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <span className="w-8 h-px bg-amber-gold"></span>
              <span className="font-other text-amber-gold font-bold uppercase tracking-widest text-sm">How Every Project Runs</span>
              <span className="w-8 h-px bg-amber-gold"></span>
            </div>
            <h2 className="text-4xl md:text-5xl text-construction-black">Service Process Overview</h2>
          </div>
          <div className="relative">
            <div className="hidden lg:block absolute top-12 left-0 w-full h-px bg-dark-grey/10"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 relative">
              {processSteps.map((step, i) => (
                <div key={i} className="group flex lg:flex-col items-start lg:items-center">
                  {i < processSteps.length - 1 && (
                    <div className="lg:hidden absolute left-12 w-px bg-dark-grey/10" style={{ top: `${i * 120 + 48}px`, height: '120px' }}></div>
                  )}
                  <div className="flex-shrink-0 w-24 h-24 bg-white construction-border flex items-center justify-center font-heading text-4xl text-light-grey group-hover:text-amber-gold group-hover:border-amber-gold transition-colors duration-300 z-10 relative">
                    <span className="absolute inset-2 border border-dark-grey/5"></span>
                    {step.num}
                  </div>
                  <div className="ml-8 lg:ml-0 lg:mt-8 lg:text-center">
                    <h3 className="text-xl text-construction-black mb-2 font-bold group-hover:text-amber-gold transition-colors">{step.title}</h3>
                    <p className="text-sm text-dark-grey font-paragraph">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── FAQ ─────────────────────────────────────────────────────────────── */}
      <section className="py-24 bg-white construction-border-t">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div>
              <div className="flex items-center space-x-4 mb-4">
                <span className="w-8 h-px bg-amber-gold"></span>
                <span className="font-other text-amber-gold font-bold uppercase tracking-widest text-sm">FAQ</span>
              </div>
              <h2 className="text-4xl text-construction-black mb-6">Frequently Asked Questions</h2>
              <p className="text-dark-grey font-paragraph">
                Have a question not listed here? Reach out directly — we're happy to walk you through anything related to your project.
              </p>
              <a href="/#contact" className="btn btn-primary mt-8 inline-flex group">
                Ask Us Anything <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
            <div className="lg:col-span-2 space-y-4">
              {faqs.map((faq, i) => (
                <FAQ key={i} q={faq.q} a={faq.a} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ───────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden border-t-4 border-amber-gold">
        <div className="absolute inset-0 bg-construction-black/85 z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1541888081622-1065113d5aee?q=80&w=1600&auto=format&fit=crop"
          alt="CTA Background"
          className="absolute inset-0 w-full h-full object-cover filter grayscale"
        />
        <div className="absolute inset-0 bg-grid-pattern opacity-20 z-10 pointer-events-none"></div>
        <div className="container mx-auto px-6 lg:px-12 relative z-20 py-28 text-center text-white">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <span className="w-12 h-px bg-amber-gold"></span>
            <span className="font-other text-amber-gold font-bold uppercase tracking-widest text-sm">Get Started</span>
            <span className="w-12 h-px bg-amber-gold"></span>
          </div>
          <h2 className="text-4xl md:text-6xl font-heading mb-6">Ready to Build Something Great?</h2>
          <p className="text-light-grey text-lg mb-10 max-w-2xl mx-auto font-paragraph">
            Tell us about your project and we'll put together a clear plan, timeline, and proposal — with no obligation.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="/#contact" className="btn btn-primary bg-amber-gold text-construction-black hover:bg-white hover:border-white hover:text-construction-black group">
              Request a Free Quote <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="https://wa.me/[WHATSAPP]" className="btn bg-[#25D366] text-white border-[#25D366] hover:bg-transparent hover:text-[#25D366]">
              <MessageCircle size={18} className="mr-2" /> WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesPage;
