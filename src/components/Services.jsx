import React from 'react';
import { Home, Building2, HardHat, Hammer, Key, LayoutList, ArrowRight } from 'lucide-react';

const services = [
  {
    id: 1,
    icon: <Home size={32} strokeWidth={1} />,
    title: "Residential Construction",
    description: "Custom homes and residential developments built with precision, quality materials, and structural integrity."
  },
  {
    id: 2,
    icon: <Building2 size={32} strokeWidth={1} />,
    title: "Commercial Construction",
    description: "Offices, retail spaces, and commercial buildings designed for functionality, durability, and business impact."
  },
  {
    id: 3,
    icon: <HardHat size={32} strokeWidth={1} />,
    title: "Civil & Structural Work",
    description: "Core structural framework, foundations, and civil engineering work executed to highest safety standards."
  },
  {
    id: 4,
    icon: <Hammer size={32} strokeWidth={1} />,
    title: "Renovation & Remodeling",
    description: "Structural modifications and premium upgrades to transform existing spaces with modern capabilities."
  },
  {
    id: 5,
    icon: <Key size={32} strokeWidth={1} />,
    title: "Turnkey Construction",
    description: "End-to-end project delivery from concept and design through construction to final handover."
  },
  {
    id: 6,
    icon: <LayoutList size={32} strokeWidth={1} />,
    title: "Project Management",
    description: "Structured coordination of resources, timelines, and execution ensuring your project stays on track."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-white relative">
      <div className="absolute top-0 inset-x-0 h-px bg-dark-grey/10"></div>
      
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 space-y-6 md:space-y-0">
          <div className="max-w-2xl">
            <div className="flex items-center space-x-4 mb-4">
              <span className="w-8 h-[1px] bg-amber-gold"></span>
              <span className="font-other text-amber-gold font-bold uppercase tracking-widest text-sm">Our Expertise</span>
            </div>
            <h2 className="text-4xl md:text-5xl text-construction-black mb-6">
              Construction Services Built Around Your Project
            </h2>
            <p className="text-lg">
              From premium residential builds to complex commercial developments, we manage the work with a structured, transparent approach from planning to completion.
            </p>
          </div>
          <a href="#contact" className="btn btn-secondary hidden md:inline-flex">
            View All Services
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="construction-box p-8 group hover:-translate-y-2 transition-all duration-300 hover:shadow-xl hover:shadow-amber-gold/5 bg-light-grey/30">
              <div className="w-16 h-16 bg-white construction-border flex items-center justify-center text-amber-gold mb-6 group-hover:bg-construction-black group-hover:text-white transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="text-2xl mb-3 group-hover:text-amber-gold transition-colors">{service.title}</h3>
              <p className="mb-6 text-sm">
                {service.description}
              </p>
              <a href="#contact" className="inline-flex items-center font-other uppercase tracking-wider text-sm font-bold text-construction-black group-hover:text-amber-gold transition-colors">
                Explore Service <ArrowRight size={16} className="ml-2 group-hover:translate-x-2 transition-transform" />
              </a>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
          <a href="#contact" className="btn btn-secondary w-full">
            View All Services
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
