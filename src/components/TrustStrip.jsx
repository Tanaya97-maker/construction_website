import React from 'react';

const TrustStrip = () => {
  return (
    <div className="bg-construction-black text-white construction-border-b border-b-amber-gold relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
      <div className="container mx-auto px-6 lg:px-12 py-10 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-x-0 md:divide-x divide-dark-grey/50">
          
          <div className="flex flex-col items-center justify-center text-center space-y-2">
            <span className="font-heading text-4xl text-amber-gold font-bold">15+</span>
            <span className="font-other uppercase tracking-widest text-xs text-light-grey">Years Experience</span>
          </div>
          
          <div className="flex flex-col items-center justify-center text-center space-y-2">
            <span className="font-heading text-4xl text-amber-gold font-bold">500+</span>
            <span className="font-other uppercase tracking-widest text-xs text-light-grey">Projects Completed</span>
          </div>
          
          <div className="flex flex-col items-center justify-center text-center space-y-2">
            <span className="font-heading text-4xl text-amber-gold font-bold">NYC</span>
            <span className="font-other uppercase tracking-widest text-xs text-light-grey">Based Operations</span>
          </div>
          
          <div className="flex flex-col items-center justify-center text-center space-y-2">
            <span className="font-heading text-4xl text-amber-gold font-bold">A+</span>
            <span className="font-other uppercase tracking-widest text-xs text-light-grey">Industry Rating</span>
          </div>

        </div>
      </div>
    </div>
  );
};

export default TrustStrip;
