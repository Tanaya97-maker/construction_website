import React from 'react';
import { MessageCircle, ArrowRight } from 'lucide-react';

const ContactCTA = () => {
  return (
    <section id="contact" className="bg-light-grey">
      
      {/* CTA Banner */}
      <div className="relative overflow-hidden construction-border-b border-amber-gold border-b-4">
        <div className="absolute inset-0 bg-construction-black/80 z-10 mix-blend-multiply"></div>
        <img 
          src="https://images.unsplash.com/photo-1541888081622-1065113d5aee?q=80&w=1200&auto=format&fit=crop" 
          alt="Construction Background" 
          className="absolute inset-0 w-full h-full object-cover filter grayscale"
        />
        <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none z-10"></div>
        
        <div className="container mx-auto px-6 lg:px-12 relative z-20 py-24 text-center text-white">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <span className="w-12 h-[1px] bg-amber-gold"></span>
            <span className="font-other text-amber-gold font-bold uppercase tracking-widest text-sm">Start Building</span>
            <span className="w-12 h-[1px] bg-amber-gold"></span>
          </div>
          <h2 className="text-4xl md:text-5xl font-heading mb-6 leading-tight">
            Planning Your Next <br className="hidden md:block"/> Construction Project?
          </h2>
          <p className="text-lg text-light-grey mb-10 max-w-2xl mx-auto font-paragraph">
            Tell us what you're building and we'll help you understand the next steps, timelines, and execution strategy.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a href="#contact-form" className="btn btn-primary bg-amber-gold text-construction-black hover:bg-white hover:text-construction-black hover:border-white">
              Request a Consultation
            </a>
            <a href="https://wa.me/[WHATSAPP]" className="btn bg-[#25D366] text-white border-[#25D366] hover:bg-transparent hover:text-[#25D366]">
              <MessageCircle size={18} className="mr-2" /> WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div id="contact-form" className="container mx-auto px-6 lg:px-12 py-24 relative">
        <div className="max-w-4xl mx-auto construction-box p-8 md:p-12 bg-white relative z-10 shadow-2xl shadow-dark-grey/5">
          
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-construction-black mb-4">Let's Discuss Your Project</h2>
            <p className="text-dark-grey">Fill out the form below and our team will get back to you promptly.</p>
          </div>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col space-y-2">
                <label htmlFor="name" className="font-other uppercase tracking-wide text-xs font-bold text-dark-grey">Name</label>
                <input type="text" id="name" placeholder="Your full name" required className="construction-border p-4 bg-light-grey/50 focus:outline-none focus:border-amber-gold focus:ring-1 focus:ring-amber-gold transition-all font-paragraph" />
              </div>
              <div className="flex flex-col space-y-2">
                <label htmlFor="phone" className="font-other uppercase tracking-wide text-xs font-bold text-dark-grey">Phone Number</label>
                <input type="tel" id="phone" placeholder="Your phone number" required className="construction-border p-4 bg-light-grey/50 focus:outline-none focus:border-amber-gold focus:ring-1 focus:ring-amber-gold transition-all font-paragraph" />
              </div>
            </div>

            <div className="flex flex-col space-y-2">
              <label htmlFor="email" className="font-other uppercase tracking-wide text-xs font-bold text-dark-grey">Email</label>
              <input type="email" id="email" placeholder="Your email address" required className="construction-border p-4 bg-light-grey/50 focus:outline-none focus:border-amber-gold focus:ring-1 focus:ring-amber-gold transition-all font-paragraph" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col space-y-2">
                <label htmlFor="type" className="font-other uppercase tracking-wide text-xs font-bold text-dark-grey">Project Type</label>
                <select id="type" required className="construction-border p-4 bg-light-grey/50 focus:outline-none focus:border-amber-gold focus:ring-1 focus:ring-amber-gold transition-all font-paragraph appearance-none cursor-pointer">
                  <option value="">Select project type</option>
                  <option value="residential">Residential Construction</option>
                  <option value="commercial">Commercial Construction</option>
                  <option value="renovation">Renovation & Remodeling</option>
                  <option value="civil">Civil Work</option>
                </select>
              </div>
              <div className="flex flex-col space-y-2">
                <label htmlFor="location" className="font-other uppercase tracking-wide text-xs font-bold text-dark-grey">Project Location</label>
                <input type="text" id="location" placeholder="City or area" required className="construction-border p-4 bg-light-grey/50 focus:outline-none focus:border-amber-gold focus:ring-1 focus:ring-amber-gold transition-all font-paragraph" />
              </div>
            </div>

            <div className="flex flex-col space-y-2">
              <label htmlFor="size" className="font-other uppercase tracking-wide text-xs font-bold text-dark-grey">Approximate Project Size (sq.ft)</label>
              <input type="text" id="size" placeholder="e.g. 2000 sq.ft" className="construction-border p-4 bg-light-grey/50 focus:outline-none focus:border-amber-gold focus:ring-1 focus:ring-amber-gold transition-all font-paragraph" />
            </div>

            <div className="flex flex-col space-y-2">
              <label htmlFor="message" className="font-other uppercase tracking-wide text-xs font-bold text-dark-grey">Message</label>
              <textarea id="message" rows="4" placeholder="Tell us about your project requirements..." className="construction-border p-4 bg-light-grey/50 focus:outline-none focus:border-amber-gold focus:ring-1 focus:ring-amber-gold transition-all font-paragraph resize-none"></textarea>
            </div>

            <button type="submit" className="btn btn-primary w-full group">
              Submit Request <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </div>
        
        {/* Background decorative elements */}
        <div className="absolute bottom-0 right-0 w-64 h-64 border border-dark-grey/10 z-0 hidden lg:block -rotate-12 translate-y-12"></div>
        <div className="absolute top-1/2 left-0 w-32 h-32 bg-amber-gold/5 z-0 hidden lg:block rotate-45 -translate-x-16"></div>
      </div>
    </section>
  );
};

export default ContactCTA;
