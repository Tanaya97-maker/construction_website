import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, CheckCircle2, FileText, Compass, HardHat,
  ShieldCheck, Clock, KeyRound, Wrench, Search, MessageSquare
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const processSteps = [
  {
    phase: 'Phase 01',
    title: 'Consultation & Discovery',
    tagline: 'Understanding your vision, budget, and scope',
    icon: <MessageSquare size={32} className="text-amber-gold" />,
    desc: 'Every successful project begins with active listening. We dive deep into your requirements, architectural goals, budget boundaries, and timeline expectations.',
    deliverables: [
      'Preliminary project brief & scope document',
      'Initial feasibility & budgetary estimate',
      'Zoning, bye-law, and site constraint assessment',
      'Clear project roadmap and stage breakdown'
    ]
  },
  {
    phase: 'Phase 02',
    title: 'Site Assessment & Planning',
    tagline: 'Precision engineering and technical analysis',
    icon: <Compass size={32} className="text-amber-gold" />,
    desc: 'Our structural engineers and project planners conduct thorough on-site evaluations, soil testing, and topography checks to formulate an unassailable engineering plan.',
    deliverables: [
      'Topographical and soil bearing capacity test report',
      'Structural design validation & review with architect',
      'Comprehensive Bill of Quantities (BOQ)',
      'Statutory approvals roadmap and timeline'
    ]
  },
  {
    phase: 'Phase 03',
    title: 'Estimation & Milestone Agreement',
    tagline: 'Transparent pricing with zero hidden clauses',
    icon: <FileText size={32} className="text-amber-gold" />,
    desc: 'We present a crystal-clear, itemised contract with fixed material grade specifications, milestone payment schedules, and a legally binding delivery timeline.',
    deliverables: [
      'Line-item construction agreement & payment schedule',
      'Material grade specifications guarantee (TMT, cement, aggregates)',
      'Gantt chart timeline with defined milestone deadlines',
      'Dedicated project manager assignment'
    ]
  },
  {
    phase: 'Phase 04',
    title: 'Mobilisation & Construction',
    tagline: 'Disciplined execution under rigorous supervision',
    icon: <HardHat size={32} className="text-amber-gold" />,
    desc: 'Our experienced on-site team executes foundation, RCC framing, masonry, MEP rough-ins, and waterproofing with daily site oversight and weekly client reporting.',
    deliverables: [
      'Daily site logs and weekly photo/video progress reports',
      'Pre-pour concrete cube compression test certificates',
      'Multi-stage waterproofing and anti-termite treatments',
      'Scheduled bi-weekly stakeholder review meetings'
    ]
  },
  {
    phase: 'Phase 05',
    title: 'Finishing, Testing & Handover',
    tagline: 'Flawless quality verification and key handover',
    icon: <KeyRound size={32} className="text-amber-gold" />,
    desc: 'Before handover, we perform a 120-point quality audit, complete all punch-list items, perform MEP pressure testing, and provide full as-built documentation.',
    deliverables: [
      'Comprehensive punch-list closure and final inspection',
      'MEP and plumbing pressure testing certifications',
      'As-built drawings and equipment warranty documentation',
      'Post-handover defect liability period coverage'
    ]
  }
];

const qualityCommitments = [
  {
    icon: <ShieldCheck size={28} className="text-amber-gold" />,
    title: 'Certified Materials Only',
    desc: 'We procure structural steel, 43/53 grade cement, and certified aggregates directly from manufacturer-approved distributors.'
  },
  {
    icon: <Wrench size={28} className="text-amber-gold" />,
    title: 'Multi-Tier Quality Audits',
    desc: 'From rebar cover checks before pouring to slump testing on-site, every milestone undergoes rigorous technical verification.'
  },
  {
    icon: <Clock size={28} className="text-amber-gold" />,
    title: 'On-Time Milestone Tracking',
    desc: 'Critical path method scheduling ensures potential delays are identified and mitigated before they impact overall project completion.'
  },
  {
    icon: <Search size={28} className="text-amber-gold" />,
    title: 'Full Cost Transparency',
    desc: 'No arbitrary price escalations. All project changes are formally documented with signed change orders before execution.'
  }
];

const ProcessPage = () => {
  return (
    <div className="bg-light-grey">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-end bg-construction-black overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
        <img
          src="https://images.unsplash.com/photo-1541888081622-1065113d5aee?q=80&w=1800&auto=format&fit=crop"
          alt="Construction Process"
          className="absolute inset-0 w-full h-full object-cover filter grayscale opacity-25"
        />
        <div className="absolute inset-0 bg-linear-to-t from-construction-black via-construction-black/60 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-48 h-1 bg-amber-gold"></div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10 pb-20 pt-32">
          <div className="max-w-3xl">
            <div className="flex items-center space-x-4 mb-6">
              <span className="w-12 h-px bg-amber-gold"></span>
              <span className="font-other text-amber-gold font-bold uppercase tracking-widest text-sm">Execution Methodology</span>
            </div>
            <h1 className="text-5xl lg:text-7xl text-white leading-tight mb-6">
              Engineered for Clarity.<br />
              <span className="text-amber-gold italic font-normal">Executed With Discipline.</span>
            </h1>
            <p className="text-light-grey text-lg font-paragraph max-w-2xl">
              From our first blueprint review to the day we hand over your keys, our 5-phase structured workflow guarantees transparency, accountability, and structural integrity.
            </p>
          </div>
        </div>
      </section>

      {/* Process Phases */}
      <section className="py-24 bg-white construction-border-t">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <span className="w-8 h-px bg-amber-gold"></span>
              <span className="font-other text-amber-gold font-bold uppercase tracking-widest text-sm">Step-By-Step Workflow</span>
              <span className="w-8 h-px bg-amber-gold"></span>
            </div>
            <h2 className="text-4xl md:text-5xl text-construction-black">The 5 Phases of Every Build</h2>
            <p className="text-dark-grey font-paragraph text-lg mt-4">
              We eliminate guesswork with a proven process designed to deliver exceptional results on schedule and within budget.
            </p>
          </div>

          <div className="space-y-12">
            {processSteps.map((step, index) => (
              <div key={index} className="construction-box p-8 lg:p-12 bg-white group hover:shadow-xl hover:border-amber-gold transition-all duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  
                  {/* Phase & Icon */}
                  <div className="lg:col-span-4 border-b lg:border-b-0 lg:border-r border-dark-grey/10 pb-6 lg:pb-0 lg:pr-8">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-14 h-14 bg-light-grey/70 border border-dark-grey/20 flex items-center justify-center">
                        {step.icon}
                      </div>
                      <div>
                        <span className="font-heading text-3xl font-bold text-amber-gold block">{step.phase}</span>
                        <span className="font-other text-xs uppercase tracking-widest text-dark-grey">{step.tagline}</span>
                      </div>
                    </div>
                    <h3 className="text-2xl text-construction-black mt-4">{step.title}</h3>
                  </div>

                  {/* Description & Deliverables */}
                  <div className="lg:col-span-8">
                    <p className="text-dark-grey font-paragraph text-base mb-6 leading-relaxed">
                      {step.desc}
                    </p>
                    <div>
                      <h4 className="font-other text-xs font-bold uppercase tracking-widest text-construction-black mb-4">Key Phase Deliverables:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {step.deliverables.map((item, idx) => (
                          <div key={idx} className="flex items-start space-x-3">
                            <CheckCircle2 size={16} className="text-amber-gold shrink-0 mt-0.5" />
                            <span className="text-sm text-dark-grey font-paragraph">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Guarantees */}
      <section className="py-24 bg-construction-black text-white relative overflow-hidden construction-border-t">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <span className="w-8 h-px bg-amber-gold"></span>
              <span className="font-other text-amber-gold font-bold uppercase tracking-widest text-sm">Quality Assurance</span>
              <span className="w-8 h-px bg-amber-gold"></span>
            </div>
            <h2 className="text-4xl md:text-5xl text-white">How We Maintain Standard of Excellence</h2>
            <p className="text-light-grey font-paragraph text-lg mt-4">
              We apply strict quality protocols at every milestone so that no defect escapes attention.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {qualityCommitments.map((qc, i) => (
              <div key={i} className="construction-box p-8 bg-white/5 border-white/10 group hover:border-amber-gold hover:bg-amber-gold/5 transition-all duration-300">
                <div className="w-14 h-14 bg-white/10 border border-white/20 flex items-center justify-center mb-6 group-hover:bg-amber-gold group-hover:text-construction-black transition-colors">
                  {qc.icon}
                </div>
                <h3 className="text-xl text-white mb-3">{qc.title}</h3>
                <p className="text-light-grey text-sm font-paragraph leading-relaxed">{qc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden border-t-4 border-amber-gold">
        <div className="absolute inset-0 bg-construction-black/85 z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1600&auto=format&fit=crop"
          alt="CTA Background"
          className="absolute inset-0 w-full h-full object-cover filter grayscale"
        />
        <div className="absolute inset-0 bg-grid-pattern opacity-20 z-10 pointer-events-none"></div>
        <div className="container mx-auto px-6 lg:px-12 relative z-20 py-28 text-center text-white">
          <h2 className="text-4xl md:text-6xl font-heading mb-6">Ready to Experience a Seamless Build?</h2>
          <p className="text-light-grey text-lg mb-10 max-w-2xl mx-auto font-paragraph">
            Schedule an initial consultation to discuss your project requirements, estimate costs, and review project timelines.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="/#contact" className="btn btn-primary bg-amber-gold text-construction-black hover:bg-white hover:text-construction-black hover:border-white group">
              Start Your Project <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
            <Link to="/projects" className="btn bg-transparent text-white border-white hover:bg-white hover:text-construction-black">
              Explore Portfolio
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProcessPage;
