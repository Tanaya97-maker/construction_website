import React from 'react';
import { ArrowRight, HardHat, Ruler, Building2 } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-light-grey overflow-hidden construction-border-b">
      {/* Background Graphic Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-1/3 h-full bg-amber-gold/5 -skew-x-12 transform origin-top pointer-events-none"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20">

        {/* Content Side */}
        <div className="flex flex-col space-y-8">
          <div className="flex items-center space-x-4">
            <span className="w-12 h-0.5 bg-amber-gold"></span>
            <span className="font-other text-amber-gold font-bold uppercase tracking-widest text-sm">Pioneering Construction</span>
          </div>

          <h1 className="text-5xl lg:text-7xl leading-tight">
            Building Spaces <br />
            <span className="text-amber-gold italic font-normal">That Last.</span>
          </h1>

          <p className="text-lg lg:text-xl max-w-lg">
            Professional residential and commercial construction services with experienced execution, transparent communication, and a commitment to sustainable futures.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a href="#contact" className="btn btn-primary group">
              Start Your Project
              <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#projects" className="btn btn-secondary">
              Explore Portfolio
            </a>
          </div>

          {/* Trust indicators */}
          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-dark-grey/10 mt-8">
            <div className="flex flex-col space-y-2">
              <HardHat className="text-amber-gold" size={24} />
              <span className="font-other text-sm font-semibold text-construction-black">Safety First</span>
            </div>
            <div className="flex flex-col space-y-2">
              <Ruler className="text-amber-gold" size={24} />
              <span className="font-other text-sm font-semibold text-construction-black">Precision Eng.</span>
            </div>
            <div className="flex flex-col space-y-2">
              <Building2 className="text-amber-gold" size={24} />
              <span className="font-other text-sm font-semibold text-construction-black">Sustainable</span>
            </div>
          </div>
        </div>

        {/* Image/Visual Side */}
        <div className="relative h-150 w-full flex items-center justify-center lg:justify-end">
          {/* Main image box with construction styling */}
          <div className="relative w-full max-w-125 h-full max-h-150 construction-box p-4 bg-white/50 backdrop-blur-sm z-20">
            <div className="w-full h-full relative overflow-hidden bg-dark-grey/5">
              <img
                src="/images/1.png"
                alt="Construction Project"
                className="object-cover w-full h-full transition-transform duration-700 hover:scale-105"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://images.unsplash.com/photo-1541888081622-1065113d5aee?q=80&w=1200&auto=format&fit=crop";
                }}
              />
              <div className="absolute inset-0 bg-linear-to-t from-construction-black/60 to-transparent pointer-events-none"></div>

              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/90 backdrop-blur-md p-4 construction-border border-l-4 border-l-amber-gold">
                  <p className="font-heading font-bold text-lg text-construction-black m-0 leading-none mb-1">Luxury Resedential</p>
                  <p className="font-other text-sm text-dark-grey uppercase tracking-wider m-0">Project Alpha</p>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative wireframe element behind */}
          <div className="absolute top-1/2 -translate-y-1/2 -right-8 w-64 h-64 border border-dark-grey/10 z-10 hidden lg:block rotate-12"></div>
          <div className="absolute bottom-12 -left-12 w-48 h-48 bg-amber-gold/10 z-10 hidden lg:block -rotate-6"></div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
