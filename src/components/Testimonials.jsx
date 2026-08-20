import React from 'react';
import { Star, ArrowRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    quote: "The team delivered our new corporate office exactly on schedule. Their structured approach and transparent communication made a complex build surprisingly stress-free.",
    name: "Rajesh S.",
    projectType: "Commercial Office Build",
    location: "Panjim"
  },
  {
    id: 2,
    quote: "Exceptional attention to detail in our villa renovation. They managed the structural changes seamlessly and the finishing quality is exactly what we envisioned.",
    name: "Meera D.",
    projectType: "Residential Renovation",
    location: "Assagao"
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-white relative construction-border-t">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-8">
          
          <div className="lg:w-2/3">
            <div className="flex items-center space-x-4 mb-4">
              <span className="w-8 h-[1px] bg-amber-gold"></span>
              <span className="font-other text-amber-gold font-bold uppercase tracking-widest text-sm">Client Feedback</span>
            </div>
            <h2 className="text-4xl md:text-5xl text-construction-black mb-12">
              What Our Clients Say
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map(t => (
                <div key={t.id} className="construction-box p-8 bg-light-grey/30 flex flex-col justify-between">
                  <div>
                    <Quote className="text-amber-gold/20 mb-6" size={48} />
                    <p className="text-dark-grey italic text-lg leading-relaxed mb-8">"{t.quote}"</p>
                  </div>
                  <div>
                    <h4 className="font-heading text-xl text-construction-black font-bold mb-1">{t.name}</h4>
                    <p className="font-other text-sm uppercase tracking-wide text-dark-grey">{t.projectType} &bull; {t.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/3 flex flex-col justify-center">
            <div className="bg-construction-black text-white p-10 construction-border-t border-t-amber-gold border-t-4 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-grid-pattern opacity-10 pointer-events-none"></div>
              
              <h3 className="text-2xl mb-6">Trusted by Local Homeowners &amp; Businesses</h3>
              
              <div className="flex space-x-1 mb-4">
                {[1, 2, 3, 4, 5].map(i => (
                  <Star key={i} size={28} fill="#F5A623" color="#F5A623" />
                ))}
              </div>
              
              <p className="text-light-grey mb-8 font-other uppercase tracking-widest text-sm">Based on Google Reviews</p>
              
              <a href="#" className="inline-flex items-center font-other uppercase tracking-wider text-sm font-bold text-amber-gold hover:text-white transition-colors group">
                Read Google Reviews <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;
