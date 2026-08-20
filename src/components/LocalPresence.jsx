import React from 'react';
import { MapPin, ArrowRight, Map } from 'lucide-react';

const locations = [
  "Panjim",
  "Porvorim",
  "Mapusa",
  "Margao",
  "Vasco da Gama",
  "Calangute"
];

const LocalPresence = () => {
  return (
    <section className="py-24 bg-white relative construction-border-t">
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="lg:w-1/2">
            <div className="flex items-center space-x-4 mb-4">
              <span className="w-8 h-[1px] bg-amber-gold"></span>
              <span className="font-other text-amber-gold font-bold uppercase tracking-widest text-sm">Service Areas</span>
            </div>
            <h2 className="text-4xl md:text-5xl text-construction-black mb-6">
              Building Across Goa
            </h2>
            <p className="text-lg text-dark-grey mb-10 max-w-lg">
              We operate across the state, bringing our premium construction expertise directly to your project site. No matter where you are building, our standards remain uncompromised.
            </p>

            <div className="grid grid-cols-2 gap-y-6 gap-x-4 mb-10">
              {locations.map((loc, index) => (
                <div key={index} className="flex items-center space-x-3 group cursor-default">
                  <div className="w-8 h-8 rounded-full border border-dark-grey/20 flex items-center justify-center group-hover:border-amber-gold group-hover:bg-amber-gold/10 transition-colors duration-300">
                    <MapPin size={16} className="text-dark-grey group-hover:text-amber-gold transition-colors" />
                  </div>
                  <span className="font-heading text-lg text-construction-black group-hover:text-amber-gold transition-colors">{loc}</span>
                </div>
              ))}
            </div>

            <a href="#contact" className="inline-flex items-center font-other uppercase tracking-wider text-sm font-bold text-construction-black hover:text-amber-gold transition-colors group">
              View All Areas <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="lg:w-1/2 w-full">
            <div className="relative h-[400px] w-full construction-box p-4 bg-light-grey/50">
              <div className="w-full h-full bg-white border border-dark-grey/10 flex flex-col items-center justify-center text-dark-grey/30 relative overflow-hidden">
                <Map size={120} strokeWidth={0.5} />
                <p className="mt-4 font-other uppercase tracking-widest text-xs text-dark-grey/50">Coverage Map Graphic</p>
                
                {/* Decorative map elements */}
                <div className="absolute top-1/4 left-1/4 w-3 h-3 rounded-full bg-amber-gold shadow-[0_0_15px_rgba(245,166,35,0.8)] animate-pulse"></div>
                <div className="absolute bottom-1/3 right-1/3 w-2 h-2 rounded-full bg-amber-gold shadow-[0_0_10px_rgba(245,166,35,0.8)] animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 right-1/4 w-2 h-2 rounded-full bg-amber-gold shadow-[0_0_10px_rgba(245,166,35,0.8)] animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default LocalPresence;
