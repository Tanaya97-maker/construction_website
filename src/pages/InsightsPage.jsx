import React, { useState } from 'react';
import { ArrowRight, Clock, BookOpen, Calendar, ChevronRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const articles = [
  {
    id: 1,
    category: 'Cost Planning',
    readTime: '6 min read',
    date: 'February 2025',
    title: 'Complete Guide to Construction Costs in Goa: Estimates, Material Grades & Labour Rates',
    summary: 'A realistic, breakdown of per-square-foot construction rates across North and South Goa, including structural vs finishing costs and contingency planning.',
    tags: ['Cost Analysis', 'Budgeting', 'Residential'],
    image: 'https://images.unsplash.com/photo-1541888081622-1065113d5aee?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 2,
    category: 'Legal & Approvals',
    readTime: '8 min read',
    date: 'January 2025',
    title: 'Navigating CRZ Regulations, Panchayat Permissions & TCP Approvals in Goa',
    summary: 'A step-by-step primer on zoning guidelines, Coastal Regulation Zone (CRZ) rules, FAR/FSI calculations, and obtaining necessary statutory construction approvals.',
    tags: ['CRZ', 'Building Permits', 'Compliance'],
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 3,
    category: 'Engineering & Materials',
    readTime: '5 min read',
    date: 'December 2024',
    title: 'Coastal Climate Construction: Waterproofing and Corrosion Protection Best Practices',
    summary: 'Why coastal building demands specialized anti-corrosion TMT steel, chemical admixtures, waterproofing membranes, and weather-resistant external finishes.',
    tags: ['Waterproofing', 'Structural Integrity', 'Materials'],
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 4,
    category: 'Architecture & Design',
    readTime: '7 min read',
    date: 'November 2024',
    title: 'Modern Goan Architecture: Blending Portuguese Heritage with Modern Structural Systems',
    summary: 'How contemporary villa designs incorporate high pitched roofs, verandahs, laterite accents, and passive cooling while utilizing modern RCC frames.',
    tags: ['Design', 'Heritage', 'Villas'],
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 5,
    category: 'Commercial',
    readTime: '6 min read',
    date: 'October 2024',
    title: 'Commercial Construction Timelines: How to Prevent Cost Overruns and Schedule Delays',
    summary: 'Key strategies for coordinating MEP contractors, procurement lead times, and municipal inspections to ensure commercial buildings open on target.',
    tags: ['Commercial', 'Project Management', 'Timelines'],
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 6,
    category: 'Homeowner Guide',
    readTime: '5 min read',
    date: 'September 2024',
    title: 'Turnkey vs. Labour Contract: Which Construction Model Protects Your Investment?',
    summary: 'An honest comparison of contracting models, risk allocation, material quality assurances, and peace-of-mind during a custom home build.',
    tags: ['Contract Types', 'Turnkey', 'Home Building'],
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop'
  }
];

const categories = ['All', 'Cost Planning', 'Legal & Approvals', 'Engineering & Materials', 'Architecture & Design', 'Commercial', 'Homeowner Guide'];

const InsightsPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredArticles = articles.filter(art => {
    if (activeCategory === 'All') return true;
    return art.category === activeCategory;
  });

  return (
    <div className="bg-light-grey">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-end bg-construction-black overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1800&auto=format&fit=crop"
          alt="Construction Insights"
          className="absolute inset-0 w-full h-full object-cover filter grayscale opacity-25"
        />
        <div className="absolute inset-0 bg-linear-to-t from-construction-black via-construction-black/60 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-48 h-1 bg-amber-gold"></div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10 pb-20 pt-32">
          <div className="max-w-3xl">
            <div className="flex items-center space-x-4 mb-6">
              <span className="w-12 h-px bg-amber-gold"></span>
              <span className="font-other text-amber-gold font-bold uppercase tracking-widest text-sm">Knowledge Base & Guides</span>
            </div>
            <h1 className="text-5xl lg:text-7xl text-white leading-tight mb-6">
              Construction Insights <br />
              <span className="text-amber-gold italic font-normal">&amp; Expert Guides.</span>
            </h1>
            <p className="text-light-grey text-lg font-paragraph max-w-2xl">
              Practical guides on building in Goa, cost planning, regulatory approvals, engineering best practices, and construction project management.
            </p>
          </div>
        </div>
      </section>

      {/* Articles Gallery */}
      <section className="py-24 bg-white construction-border-t">
        <div className="container mx-auto px-6 lg:px-12">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 justify-center mb-16">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 text-xs font-other uppercase tracking-wider font-bold border-2 transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-amber-gold border-amber-gold text-construction-black'
                    : 'bg-transparent border-dark-grey/20 text-dark-grey hover:border-amber-gold hover:text-amber-gold'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid of Articles */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => (
              <article
                key={article.id}
                className="construction-box bg-white overflow-hidden group flex flex-col justify-between hover:shadow-xl hover:border-amber-gold transition-all duration-300"
              >
                <div>
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-construction-black/20 group-hover:bg-construction-black/0 transition-colors"></div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-amber-gold text-construction-black text-xs font-other font-bold uppercase tracking-wider px-3 py-1">
                        {article.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center space-x-4 text-xs text-dark-grey/80 font-other uppercase tracking-wider mb-3">
                      <span className="flex items-center"><Calendar size={13} className="mr-1 text-amber-gold" />{article.date}</span>
                      <span>&bull;</span>
                      <span className="flex items-center"><Clock size={13} className="mr-1 text-amber-gold" />{article.readTime}</span>
                    </div>

                    <h3 className="text-xl text-construction-black group-hover:text-amber-gold transition-colors font-bold mb-3 line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-sm text-dark-grey font-paragraph line-clamp-3 mb-6">
                      {article.summary}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-dark-grey/10 flex items-center justify-between mt-auto">
                  <div className="flex flex-wrap gap-1">
                    {article.tags.map((t, idx) => (
                      <span key={idx} className="text-[11px] font-other uppercase text-dark-grey/70 bg-light-grey px-2 py-0.5">
                        #{t}
                      </span>
                    ))}
                  </div>
                  <a
                    href="/#contact"
                    className="inline-flex items-center text-xs font-other uppercase tracking-wider font-bold text-amber-gold hover:text-construction-black transition-colors"
                  >
                    Consult Us <ChevronRight size={14} className="ml-0.5" />
                  </a>
                </div>
              </article>
            ))}
          </div>

          {filteredArticles.length === 0 && (
            <div className="text-center py-16 text-dark-grey font-other uppercase tracking-widest">
              No articles found in this category.
            </div>
          )}

        </div>
      </section>

      {/* Advisory Consultation Box */}
      <section className="py-20 bg-light-grey construction-border-t">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="construction-box p-8 lg:p-12 bg-white flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <div className="flex items-center space-x-3 mb-2">
                <BookOpen size={20} className="text-amber-gold" />
                <span className="font-other text-amber-gold text-xs font-bold uppercase tracking-widest">Free Engineering Guidance</span>
              </div>
              <h3 className="text-3xl text-construction-black mb-3">Planning a Project in Goa?</h3>
              <p className="text-dark-grey font-paragraph text-sm">
                Get practical insights into plot feasibility, CRZ norms, construction cost estimation, and timeline scheduling tailored to your exact plot and vision.
              </p>
            </div>
            <a href="/#contact" className="btn btn-primary whitespace-nowrap shrink-0 group">
              Speak With An Engineer <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default InsightsPage;
