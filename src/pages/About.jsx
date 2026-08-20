import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, ShieldCheck, Eye, Target, Users, Award,
  CheckCircle2, Star, HardHat, Ruler, Leaf
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const values = [
  { icon: <Award size={28} />, title: 'Quality', desc: 'We hold every build to the highest standard — from materials to finishing. No shortcuts, no compromise.' },
  { icon: <Eye size={28} />, title: 'Transparency', desc: 'Clear communication at every step. You always know where your project stands, the costs involved, and what comes next.' },
  { icon: <ShieldCheck size={28} />, title: 'Safety', desc: 'Site safety is non-negotiable. We enforce strict protocols to protect our workers, clients, and neighbouring communities.' },
  { icon: <CheckCircle2 size={28} />, title: 'Accountability', desc: 'We own every decision and outcome. When issues arise, we address them head-on with solutions, not excuses.' },
  { icon: <Star size={28} />, title: 'Reliability', desc: 'Deadlines are commitments, not suggestions. Our track record speaks to consistent, on-time delivery.' },
];

const team = [
  { name: '[Founder Name]', role: 'Founder & Principal', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop' },
  { name: '[Director Name]', role: 'Director of Operations', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop' },
  { name: '[Lead Name]', role: 'Lead Structural Engineer', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop' },
  { name: '[PM Name]', role: 'Senior Project Manager', img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600&auto=format&fit=crop' },
];

const credentials = [
  { label: 'RERA Registered', sub: 'Real Estate Regulatory Authority' },
  { label: 'GST Compliant', sub: 'Goods & Services Tax Registered' },
  { label: 'ISO Certified', sub: 'Quality Management Standards' },
  { label: 'PWD Registered', sub: 'Public Works Department' },
  { label: 'Contractor License', sub: 'State Government Licensed' },
  { label: 'Labour Registration', sub: 'Fully Compliant Workforce' },
];

const reasons = [
  { icon: <HardHat size={24} />, title: 'Safety First Culture', desc: 'Strict on-site protocols that protect every stakeholder.' },
  { icon: <Ruler size={24} />, title: 'Precision Engineering', desc: 'Structural work executed to exact tolerances and specifications.' },
  { icon: <Users size={24} />, title: 'Dedicated Teams', desc: 'Experienced professionals assigned to every project from start to finish.' },
  { icon: <Leaf size={24} />, title: 'Sustainable Practices', desc: 'Building responsibly for a better, greener future.' },
];

const About = () => {
  return (
    <div className="bg-light-grey">
      <Header />

      {/* ─── HERO ─────────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[70vh] flex items-center bg-construction-black overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
        <img
          src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1800&auto=format&fit=crop"
          alt="About Hero"
          className="absolute inset-0 w-full h-full object-cover filter grayscale opacity-20"
        />
        {/* Amber accent line */}
        <div className="absolute bottom-0 left-0 w-1/3 h-1 bg-amber-gold"></div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10 py-32">
          <div className="max-w-3xl">
            <div className="flex items-center space-x-4 mb-6">
              <span className="w-12 h-px bg-amber-gold"></span>
              <span className="font-other text-amber-gold font-bold uppercase tracking-widest text-sm">Our Story</span>
            </div>
            <h1 className="text-5xl lg:text-7xl text-white leading-tight mb-6">
              Building With Experience.<br />
              <span className="text-amber-gold italic font-normal">Delivering With Confidence.</span>
            </h1>
            <p className="text-light-grey text-lg max-w-2xl font-paragraph">
              A construction company rooted in professional execution, structural integrity, and a commitment to building spaces that endure and inspire.
            </p>
          </div>
        </div>
      </section>

      {/* ─── COMPANY STORY ───────────────────────────────────────────────────── */}
      <section className="py-24 bg-white construction-border-t">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center space-x-4 mb-4">
                <span className="w-8 h-px bg-amber-gold"></span>
                <span className="font-other text-amber-gold font-bold uppercase tracking-widest text-sm">Who We Are</span>
              </div>
              <h2 className="text-4xl md:text-5xl text-construction-black mb-6">Our Company Introduction</h2>
              <p className="text-dark-grey mb-4 font-paragraph text-lg">
                Founded with a vision to raise construction standards across the region, [Company Name] has grown into a trusted name in residential and commercial construction.
              </p>
              <p className="text-dark-grey mb-4 font-paragraph">
                We started as a team of dedicated engineers and project managers who believed that construction could be done better — with greater transparency, better planning, and uncompromising quality. Over the years, we have built hundreds of homes, offices, and civil structures across Goa, earning the trust of clients through consistent delivery.
              </p>
              <p className="text-dark-grey font-paragraph">
                Today, we bring the same founding principles to every project: expert execution, open communication, and structures that are built to last for generations.
              </p>
            </div>

            <div className="relative">
              <div className="construction-box p-4 bg-white">
                <img
                  src="https://images.unsplash.com/photo-1541888081622-1065113d5aee?q=80&w=900&auto=format&fit=crop"
                  alt="Company"
                  className="w-full h-96 object-cover filter grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
              {/* Stats badge */}
              <div className="absolute -bottom-6 -right-6 bg-amber-gold p-6 z-10">
                <p className="font-heading text-4xl font-bold text-construction-black leading-none">15+</p>
                <p className="font-other uppercase tracking-widest text-xs text-construction-black/70 mt-1">Years in Business</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── EXPERIENCE & EXPERTISE ──────────────────────────────────────────── */}
      <section className="py-24 bg-light-grey construction-border-t relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <span className="w-8 h-px bg-amber-gold"></span>
              <span className="font-other text-amber-gold font-bold uppercase tracking-widest text-sm">Expertise</span>
              <span className="w-8 h-px bg-amber-gold"></span>
            </div>
            <h2 className="text-4xl md:text-5xl text-construction-black mb-4">Our Experience & Expertise</h2>
            <p className="text-dark-grey font-paragraph text-lg">
              Decades of combined expertise across every category of construction, backed by a portfolio of successful projects.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { num: '15+', label: 'Years of Experience' },
              { num: '500+', label: 'Projects Completed' },
              { num: '50+', label: 'Skilled Professionals' },
              { num: '100%', label: 'Client Satisfaction Goal' },
            ].map((stat, i) => (
              <div key={i} className="construction-box p-8 text-center bg-white group hover:-translate-y-2 transition-transform duration-300">
                <p className="font-heading text-5xl text-amber-gold font-bold mb-2">{stat.num}</p>
                <p className="font-other uppercase tracking-wider text-sm text-dark-grey">{stat.label}</p>
              </div>
            ))}
          </div>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Residential Construction', desc: 'Custom villas, apartments, and housing developments built with structural precision and premium finishes.' },
              { title: 'Commercial Construction', desc: 'Offices, retail outlets, and commercial complexes designed for lasting functionality and business performance.' },
              { title: 'Civil & Renovation Work', desc: 'Core civil infrastructure and high-quality renovation projects that transform existing spaces.' },
            ].map((item, i) => (
              <div key={i} className="construction-box p-8 bg-white group hover:border-amber-gold transition-colors duration-300">
                <div className="w-1 h-10 bg-amber-gold mb-6"></div>
                <h3 className="text-2xl text-construction-black mb-3">{item.title}</h3>
                <p className="text-dark-grey text-sm font-paragraph">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── MISSION & VISION ────────────────────────────────────────────────── */}
      <section className="py-24 bg-construction-black text-white relative overflow-hidden construction-border-t">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="construction-box p-10 bg-white/5 border-white/10">
              <div className="flex items-center space-x-4 mb-6">
                <Target className="text-amber-gold" size={32} />
                <h2 className="text-3xl text-white">Our Mission</h2>
              </div>
              <p className="text-light-grey font-paragraph text-lg leading-relaxed">
                To deliver construction projects of the highest quality through disciplined execution, transparent client relationships, and a workforce committed to excellence — building spaces that improve lives and stand the test of time.
              </p>
            </div>
            <div className="construction-box p-10 bg-white/5 border-white/10">
              <div className="flex items-center space-x-4 mb-6">
                <Eye className="text-amber-gold" size={32} />
                <h2 className="text-3xl text-white">Our Vision</h2>
              </div>
              <p className="text-light-grey font-paragraph text-lg leading-relaxed">
                To be the most trusted construction company in the region — recognized for our integrity, precision, and the lasting value we bring to every project we undertake, while contributing to sustainable development and community growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CORE VALUES ─────────────────────────────────────────────────────── */}
      <section className="py-24 bg-white construction-border-t">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <span className="w-8 h-px bg-amber-gold"></span>
              <span className="font-other text-amber-gold font-bold uppercase tracking-widest text-sm">What We Stand For</span>
              <span className="w-8 h-px bg-amber-gold"></span>
            </div>
            <h2 className="text-4xl md:text-5xl text-construction-black">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {values.map((val, i) => (
              <div key={i} className="construction-box p-8 bg-light-grey/30 group hover:-translate-y-2 hover:bg-construction-black transition-all duration-300 flex flex-col space-y-4">
                <div className="w-12 h-12 bg-white construction-border flex items-center justify-center text-amber-gold group-hover:bg-amber-gold group-hover:text-construction-black transition-colors duration-300">
                  {val.icon}
                </div>
                <h3 className="text-xl text-construction-black group-hover:text-white transition-colors duration-300">{val.title}</h3>
                <p className="text-sm text-dark-grey group-hover:text-light-grey transition-colors duration-300 font-paragraph">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── LEADERSHIP / TEAM ───────────────────────────────────────────────── */}
      <section className="py-24 bg-light-grey construction-border-t relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <span className="w-8 h-px bg-amber-gold"></span>
              <span className="font-other text-amber-gold font-bold uppercase tracking-widest text-sm">The People Behind the Work</span>
              <span className="w-8 h-px bg-amber-gold"></span>
            </div>
            <h2 className="text-4xl md:text-5xl text-construction-black">Our Leadership Team</h2>
            <p className="text-dark-grey font-paragraph mt-4 text-lg">
              Experienced professionals who bring deep industry knowledge and a hands-on approach to every project.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, i) => (
              <div key={i} className="group construction-box bg-white overflow-hidden">
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-construction-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="p-6 border-t-2 border-amber-gold">
                  <h3 className="text-xl text-construction-black mb-1">{member.name}</h3>
                  <p className="font-other uppercase tracking-widest text-xs text-dark-grey">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CREDENTIALS ─────────────────────────────────────────────────────── */}
      <section className="py-24 bg-white construction-border-t">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center space-x-4 mb-4">
                <span className="w-8 h-px bg-amber-gold"></span>
                <span className="font-other text-amber-gold font-bold uppercase tracking-widest text-sm">Certifications & Compliance</span>
              </div>
              <h2 className="text-4xl md:text-5xl text-construction-black mb-6">Registered, Certified & Compliant</h2>
              <p className="text-dark-grey font-paragraph text-lg">
                We operate with full legal and professional compliance. Our registrations and certifications give clients the assurance that their project is in the right hands.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {credentials.map((cred, i) => (
                <div key={i} className="construction-box p-6 bg-light-grey/30 flex flex-col space-y-2 group hover:border-amber-gold transition-colors">
                  <div className="w-2 h-2 bg-amber-gold"></div>
                  <p className="font-heading text-base font-bold text-construction-black">{cred.label}</p>
                  <p className="font-other text-xs uppercase tracking-wide text-dark-grey">{cred.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── WHY CHOOSE US ───────────────────────────────────────────────────── */}
      <section className="py-24 bg-light-grey construction-border-t relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <span className="w-8 h-px bg-amber-gold"></span>
              <span className="font-other text-amber-gold font-bold uppercase tracking-widest text-sm">Why Partner With Us</span>
              <span className="w-8 h-px bg-amber-gold"></span>
            </div>
            <h2 className="text-4xl md:text-5xl text-construction-black">Why Clients Choose Us</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {reasons.map((reason, i) => (
              <div key={i} className="construction-box p-8 bg-white group hover:-translate-y-2 transition-transform duration-300">
                <div className="w-14 h-14 bg-light-grey construction-border flex items-center justify-center text-amber-gold mb-6 group-hover:bg-construction-black group-hover:text-white transition-colors duration-300">
                  {reason.icon}
                </div>
                <h3 className="text-xl text-construction-black mb-3">{reason.title}</h3>
                <p className="text-sm text-dark-grey font-paragraph">{reason.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FEATURED PROJECT ────────────────────────────────────────────────── */}
      <section className="py-24 bg-white construction-border-t">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <div className="flex items-center space-x-4 mb-4">
                <span className="w-8 h-px bg-amber-gold"></span>
                <span className="font-other text-amber-gold font-bold uppercase tracking-widest text-sm">Featured Work</span>
              </div>
              <h2 className="text-4xl md:text-5xl text-construction-black">A Project We're Proud Of</h2>
            </div>
            <Link to="/projects" className="btn btn-secondary mt-6 md:mt-0">View All Projects</Link>
          </div>
          <div className="group relative construction-box p-4 bg-white overflow-hidden h-[500px]">
            <img
              src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1400&auto=format&fit=crop"
              alt="Featured Project"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-linear-to-t from-construction-black/80 via-construction-black/20 to-transparent"></div>
            <div className="absolute bottom-10 left-10 right-10">
              <span className="bg-amber-gold text-construction-black text-xs font-other font-bold uppercase tracking-wider px-3 py-1 inline-block mb-4">Completed</span>
              <h3 className="text-3xl text-white mb-2">Modern Residential Villa</h3>
              <p className="text-light-grey font-other uppercase tracking-widest text-sm flex items-center">
                <span className="w-4 h-px bg-white/50 mr-2"></span>Porvorim, Goa &bull; Residential Construction
              </p>
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
            <span className="font-other text-amber-gold font-bold uppercase tracking-widest text-sm">Ready to Build?</span>
            <span className="w-12 h-px bg-amber-gold"></span>
          </div>
          <h2 className="text-4xl md:text-6xl font-heading mb-6">Let's Discuss Your Project</h2>
          <p className="text-light-grey text-lg mb-10 max-w-2xl mx-auto font-paragraph">
            Whether you're planning a new home, a commercial space, or a major renovation — we'd love to hear about your project and help you take the next step.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="/#contact" className="btn btn-primary bg-amber-gold text-construction-black hover:bg-white hover:text-construction-black hover:border-white group">
              Get a Free Consultation <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
            <Link to="/services" className="btn bg-transparent text-white border-white hover:bg-white hover:text-construction-black">
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
