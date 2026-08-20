import React from 'react';
import { ArrowRight } from 'lucide-react';

const steps = [
  {
    num: "01",
    title: "Consultation",
    desc: "Understand the project, requirements, budget, and goals."
  },
  {
    num: "02",
    title: "Site Assessment",
    desc: "Evaluate the property, site conditions, and construction requirements."
  },
  {
    num: "03",
    title: "Planning & Estimate",
    desc: "Define the scope, requirements, timeline, and estimated project cost."
  },
  {
    num: "04",
    title: "Construction",
    desc: "Coordinate execution, labour, materials, and site activities."
  },
  {
    num: "05",
    title: "Handover",
    desc: "Complete final checks, finishing, and project handover."
  }
];

const Process = () => {
  return (
    <section id="process" className="py-24 bg-light-grey relative">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <span className="w-8 h-[1px] bg-amber-gold"></span>
            <span className="font-other text-amber-gold font-bold uppercase tracking-widest text-sm">Our Methodology</span>
            <span className="w-8 h-[1px] bg-amber-gold"></span>
          </div>
          <h2 className="text-4xl md:text-5xl text-construction-black">
            A Clear Process From First Conversation to Handover
          </h2>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-0 w-full h-[2px] bg-dark-grey/10"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4 relative">
            {steps.map((step, index) => (
              <div key={index} className="relative group">
                {/* Connecting Line (Mobile/Tablet) */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden absolute top-[3rem] left-12 w-0.5 h-full bg-dark-grey/10 -z-10"></div>
                )}
                
                <div className="flex lg:flex-col items-start lg:items-center">
                  <div className="flex-shrink-0 w-24 h-24 lg:w-24 lg:h-24 bg-white construction-border flex items-center justify-center font-heading text-4xl text-light-grey group-hover:text-amber-gold group-hover:border-amber-gold transition-colors duration-300 z-10 relative">
                    <span className="absolute inset-2 border border-dark-grey/5"></span>
                    {step.num}
                  </div>
                  
                  <div className="ml-8 lg:ml-0 lg:mt-8 lg:text-center pt-2 lg:pt-0">
                    <h3 className="text-xl text-construction-black mb-2 font-bold group-hover:text-amber-gold transition-colors">{step.title}</h3>
                    <p className="text-sm text-dark-grey">{step.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 text-center">
          <a href="#contact" className="btn btn-primary group">
            Discuss Your Project <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Process;
