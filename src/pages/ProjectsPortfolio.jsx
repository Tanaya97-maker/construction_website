import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MoveUpRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const allProjects = [
  { id: 1, title: 'Hilltop Villa, Dona Paula', location: 'Dona Paula, Goa', type: 'Residential', status: 'Completed', desc: 'Luxury 3,800 sq.ft custom villa with pool, RCC structure, and premium interior finishes.', img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=800&auto=format&fit=crop' },
  { id: 2, title: 'Corporate Office Hub', location: 'Panjim, Goa', type: 'Commercial', status: 'Completed', desc: '12,000 sq.ft multi-tenant office building with structural steel mezzanines and commercial-grade MEP.', img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop' },
  { id: 3, title: 'Heritage Home Restoration', location: 'Fontainhas, Goa', type: 'Renovation', status: 'Completed', desc: 'Full structural and aesthetic restoration of a 120-year-old Goan Portuguese heritage home.', img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop' },
  { id: 4, title: 'Coastal Row Houses', location: 'Candolim, Goa', type: 'Residential', status: 'Completed', desc: 'Six-unit row house development with individual basements, terraces, and shared landscaping.', img: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=800&auto=format&fit=crop' },
  { id: 5, title: 'Boutique Hotel', location: 'Calangute, Goa', type: 'Commercial', status: 'Completed', desc: '18-room boutique hotel with restaurant, swimming pool, and full hospitality infrastructure.', img: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&auto=format&fit=crop' },
  { id: 6, title: 'Highway Bridge Approach', location: 'Vasco, Goa', type: 'Civil', status: 'Completed', desc: 'Civil infrastructure including box culvert, retaining walls, and drainage works for a state highway project.', img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800&auto=format&fit=crop' },
  { id: 7, title: 'Retail & F&B Complex', location: 'Mapusa, Goa', type: 'Commercial', status: 'Completed', desc: '8,500 sq.ft ground-floor retail and food court complex with 14 individual unit shells.', img: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800&auto=format&fit=crop' },
  { id: 8, title: 'Apartment Complex', location: 'Porvorim, Goa', type: 'Residential', status: 'Ongoing', desc: 'G+4 residential apartment building with 24 units, stilt parking, and rooftop amenities. Currently at 3rd floor slab.', img: 'https://images.unsplash.com/photo-1515263487990-61b07816b324?q=80&w=800&auto=format&fit=crop' },
  { id: 9, title: 'Warehouse & Logistics Centre', location: 'Verna, Goa', type: 'Civil', status: 'Completed', desc: '22,000 sq.ft pre-engineered warehouse with docking bays, admin block, and hardstand paving.', img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop' },
  { id: 10, title: 'Villa Renovation, Assagao', location: 'Assagao, Goa', type: 'Renovation', status: 'Completed', desc: 'Complete structural and interior renovation of a 1990s villa with pool addition and landscaped garden.', img: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=800&auto=format&fit=crop' },
  { id: 11, title: 'Hotel Expansion Block', location: 'Baga, Goa', type: 'Commercial', status: 'Ongoing', desc: 'New 24-room extension block for an existing mid-scale hotel, including new dining and pool areas.', img: 'https://images.unsplash.com/photo-1615460549969-36fa19521a4f?q=80&w=800&auto=format&fit=crop' },
  { id: 12, title: 'Community Hall', location: 'Margao, Goa', type: 'Civil', status: 'Completed', desc: 'G+1 community hall with 500-person assembly space, stage, green rooms, and public amenities.', img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800&auto=format&fit=crop' },
];

const FILTERS = ['All', 'Residential', 'Commercial', 'Renovation', 'Civil', 'Completed', 'Ongoing'];

const ProjectsPortfolio = () => {
  const [active, setActive] = useState('All');

  const filtered = allProjects.filter(p => {
    if (active === 'All') return true;
    if (active === 'Completed' || active === 'Ongoing') return p.status === active;
    return p.type === active;
  });

  return (
    <div className="bg-light-grey">
      <Header />

      {/* ── HERO ── */}
      <section className="relative min-h-[70vh] flex items-end bg-construction-black overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
        <img src="https://images.unsplash.com/photo-1541888081622-1065113d5aee?q=80&w=1800&auto=format&fit=crop" alt="Projects Portfolio" className="absolute inset-0 w-full h-full object-cover filter grayscale opacity-20" />
        <div className="absolute inset-0 bg-linear-to-t from-construction-black via-construction-black/60 to-transparent"></div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-32 bg-amber-gold/30"></div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10 pb-20 pt-32 text-center">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <span className="w-12 h-px bg-amber-gold"></span>
            <span className="font-other text-amber-gold font-bold uppercase tracking-widest text-sm">Portfolio</span>
            <span className="w-12 h-px bg-amber-gold"></span>
          </div>
          <h1 className="text-5xl lg:text-7xl text-white leading-tight mb-6">
            Our Work <br /><span className="text-amber-gold italic font-normal">Speaks For Itself.</span>
          </h1>
          <p className="text-light-grey text-lg font-paragraph max-w-2xl mx-auto">
            {allProjects.length} projects completed and ongoing across residential, commercial, civil, and renovation categories.
          </p>
        </div>
      </section>

      {/* ── GALLERY ── */}
      <section className="py-24 bg-white construction-border-t">
        <div className="container mx-auto px-6 lg:px-12">

          {/* Filters */}
          <div className="flex flex-wrap gap-3 mb-14 justify-center">
            {FILTERS.map(f => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`font-other uppercase tracking-widest text-sm px-5 py-2 border-2 transition-all duration-200 ${
                  active === f
                    ? 'bg-amber-gold border-amber-gold text-construction-black'
                    : 'bg-transparent border-dark-grey/20 text-dark-grey hover:border-amber-gold hover:text-amber-gold'
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map(proj => (
              <div key={proj.id} className="group construction-box bg-white overflow-hidden hover:-translate-y-2 transition-transform duration-300 hover:shadow-2xl hover:shadow-amber-gold/5">
                <div className="relative h-60 overflow-hidden">
                  <img src={proj.img} alt={proj.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-construction-black/20 group-hover:bg-construction-black/0 transition-colors duration-500"></div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-construction-black/0 group-hover:bg-construction-black/60 transition-all duration-500 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <div className="w-12 h-12 bg-amber-gold flex items-center justify-center text-construction-black transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <MoveUpRight size={24} />
                    </div>
                  </div>

                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="bg-amber-gold text-construction-black text-xs font-other font-bold uppercase tracking-wider px-3 py-1">{proj.status}</span>
                    <span className="bg-construction-black/70 text-white text-xs font-other uppercase tracking-wider px-3 py-1">{proj.type}</span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl text-construction-black mb-1 group-hover:text-amber-gold transition-colors">{proj.title}</h3>
                  <p className="font-other text-xs uppercase tracking-widest text-dark-grey mb-3 flex items-center">
                    <span className="w-3 h-px bg-amber-gold mr-2"></span>{proj.location}
                  </p>
                  <p className="text-sm text-dark-grey font-paragraph mb-4 line-clamp-2">{proj.desc}</p>
                  <a href="/#contact" className="inline-flex items-center font-other uppercase tracking-wider text-xs font-bold text-construction-black hover:text-amber-gold transition-colors group/btn">
                    View Project <ArrowRight size={14} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16 text-dark-grey font-other uppercase tracking-widest">No projects found for this filter.</div>
          )}
        </div>
      </section>

      {/* ── OUR APPROACH ── */}
      <section className="py-24 bg-construction-black text-white construction-border-t relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center space-x-4 mb-4">
                <span className="w-8 h-px bg-amber-gold"></span>
                <span className="font-other text-amber-gold font-bold uppercase tracking-widest text-sm">Behind Every Project</span>
              </div>
              <h2 className="text-4xl md:text-5xl text-white mb-6">Our Approach</h2>
              <p className="text-light-grey font-paragraph text-lg mb-8">
                Every project in this portfolio represents a commitment — to the client, to the craft, and to the community. We don't take on more than we can execute excellently.
              </p>
              <div className="space-y-4">
                {['Structured planning before a single brick is laid', 'Dedicated site team for every project, every day', 'Transparent reporting — clients are never left guessing', 'Quality inspections at every structural milestone', 'Projects delivered to agree timelines and budgets'].map((pt, i) => (
                  <div key={i} className="flex items-center space-x-4">
                    <span className="w-6 h-px bg-amber-gold flex-shrink-0"></span>
                    <span className="text-light-grey font-paragraph text-sm">{pt}</span>
                  </div>
                ))}
              </div>
              <div className="mt-10">
                <Link to="/process" className="btn bg-transparent text-amber-gold border-amber-gold hover:bg-amber-gold hover:text-construction-black">
                  See Our Full Process <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { num: '15+', label: 'Years Active' },
                { num: '500+', label: 'Projects' },
                { num: '4', label: 'Project Types' },
                { num: '100%', label: 'Dedication' },
              ].map((stat, i) => (
                <div key={i} className="construction-box p-8 bg-white/5 border-white/10 flex flex-col items-center justify-center text-center hover:border-amber-gold transition-colors">
                  <p className="font-heading text-5xl text-amber-gold font-bold">{stat.num}</p>
                  <p className="font-other uppercase tracking-widest text-xs text-light-grey mt-2">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative overflow-hidden border-t-4 border-amber-gold">
        <div className="absolute inset-0 bg-construction-black/85 z-10"></div>
        <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1800&auto=format&fit=crop" alt="Start Your Project" className="absolute inset-0 w-full h-full object-cover filter grayscale" />
        <div className="absolute inset-0 bg-grid-pattern opacity-20 z-10 pointer-events-none"></div>
        <div className="container mx-auto px-6 lg:px-12 relative z-20 py-28 text-center text-white">
          <h2 className="text-4xl md:text-6xl font-heading mb-6">Ready to Start Your Project?</h2>
          <p className="text-light-grey text-lg mb-10 max-w-2xl mx-auto font-paragraph">
            Let's add your project to this portfolio. Tell us what you're building and we'll put together a plan.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="/#contact" className="btn btn-primary bg-amber-gold text-construction-black hover:bg-white hover:border-white hover:text-construction-black group">
              Get a Free Quote <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
            <Link to="/services" className="btn bg-transparent text-white border-white hover:bg-white hover:text-construction-black">
              Our Services
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProjectsPortfolio;
