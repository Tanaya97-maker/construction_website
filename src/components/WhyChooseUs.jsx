import React from 'react';
import { ShieldCheck, MessageSquare, Award, GitMerge } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    {
      title: "Experienced Execution",
      description: "Practical experience managing construction work from site preparation through completion.",
      icon: <Award className="text-amber-gold" size={28} />
    },
    {
      title: "Transparent Communication",
      description: "Clear communication about scope, progress, requirements, and project decisions.",
      icon: <MessageSquare className="text-amber-gold" size={28} />
    },
    {
      title: "Quality-Focused Work",
      description: "Attention to workmanship, materials, detailing, and finishing.",
      icon: <ShieldCheck className="text-amber-gold" size={28} />
    },
    {
      title: "Structured Project Management",
      description: "Organized coordination of people, materials, timelines, and site activities.",
      icon: <GitMerge className="text-amber-gold" size={28} />
    }
  ];

  return (
    <section className="py-24 bg-white relative construction-border-t">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Content Side */}
          <div className="flex flex-col space-y-8 relative z-10">
            <div>
              <div className="flex items-center space-x-4 mb-4">
                <span className="w-8 h-[1px] bg-amber-gold"></span>
                <span className="font-other text-amber-gold font-bold uppercase tracking-widest text-sm">Why Partner With Us</span>
              </div>
              <h2 className="text-4xl md:text-5xl text-construction-black mb-6">
                Built on Trust.<br/>Driven by Quality.
              </h2>
              <p className="text-lg max-w-lg">
                We approach every project with a commitment to reliability, structural integrity, and professional execution. Our reputation is built on delivering beyond expectations.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8">
              {reasons.map((reason, index) => (
                <div key={index} className="flex flex-col space-y-3 group">
                  <div className="w-14 h-14 construction-box flex items-center justify-center bg-light-grey/50 group-hover:bg-amber-gold/10 transition-colors">
                    {reason.icon}
                  </div>
                  <h3 className="text-xl text-construction-black">{reason.title}</h3>
                  <p className="text-sm text-dark-grey leading-relaxed">{reason.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Image Side */}
          <div className="relative lg:h-[700px] w-full flex items-center justify-center">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-3/4 h-full bg-light-grey construction-border"></div>
            <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
            
            {/* Main Image */}
            <div className="relative w-[85%] h-[85%] z-20 construction-box p-3 bg-white">
              <img 
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1000&auto=format&fit=crop" 
                alt="Construction Team" 
                className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700"
              />
              
              {/* Experience Badge */}
              <div className="absolute -bottom-8 -left-8 bg-construction-black text-white p-6 construction-border border-amber-gold border-t-4 flex flex-col items-center justify-center min-w-[140px] shadow-2xl">
                <span className="font-heading text-4xl text-amber-gold font-bold">15+</span>
                <span className="font-other uppercase tracking-widest text-xs text-center mt-2">Years of<br />Excellence</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
