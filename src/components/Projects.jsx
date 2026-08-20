import React from 'react';
import { MoveUpRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "Modern Residential Villa",
    location: "Porvorim, Goa",
    type: "Residential Construction",
    status: "Completed",
    className: "md:col-span-2 md:row-span-2",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Tech Hub Commercial Center",
    location: "Panjim, Goa",
    type: "Commercial",
    status: "In Progress",
    className: "md:col-span-1 md:row-span-1",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Seaside Heritage Restoration",
    location: "Dona Paula, Goa",
    type: "Renovation",
    status: "Completed",
    className: "md:col-span-1 md:row-span-1",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Boutique Retail Complex",
    location: "Mapusa, Goa",
    type: "Commercial",
    status: "Completed",
    className: "md:col-span-3 md:row-span-1",
    image: "https://images.unsplash.com/photo-1541888081622-1065113d5aee?q=80&w=1200&auto=format&fit=crop"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-light-grey relative construction-border-t">
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 space-y-6 md:space-y-0">
          <div className="max-w-xl">
            <div className="flex items-center space-x-4 mb-4">
              <span className="w-8 h-[1px] bg-amber-gold"></span>
              <span className="font-other text-amber-gold font-bold uppercase tracking-widest text-sm">Portfolio</span>
            </div>
            <h2 className="text-4xl md:text-5xl text-construction-black">
              Built Projects.<br/>Real Results.
            </h2>
          </div>
          <a href="#projects" className="btn btn-secondary hidden md:inline-flex bg-white hover:bg-construction-black hover:text-white">
            View All Projects
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
          {projects.map((project) => (
            <div key={project.id} className={`group relative overflow-hidden construction-box p-2 bg-white ${project.className}`}>
              <div className="w-full h-full relative overflow-hidden bg-dark-grey/5">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-construction-black/40 group-hover:bg-construction-black/20 transition-colors duration-500"></div>
                
                {/* Overlay Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <span className="bg-amber-gold text-construction-black text-xs font-other font-bold uppercase tracking-wider px-3 py-1">
                      {project.status}
                    </span>
                    <a href="#projects" className="w-10 h-10 bg-white/10 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:bg-amber-gold hover:text-construction-black">
                      <MoveUpRight size={20} />
                    </a>
                  </div>
                  
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <p className="font-other text-amber-gold uppercase tracking-widest text-sm font-semibold mb-1">{project.type}</p>
                    <h3 className="text-2xl text-white mb-1">{project.title}</h3>
                    <p className="text-light-grey text-sm flex items-center">
                      <span className="w-4 h-[1px] bg-white/50 mr-2"></span>
                      {project.location}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
          <a href="#projects" className="btn btn-secondary w-full bg-white">
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
