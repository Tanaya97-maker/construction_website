import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-construction-black text-white pt-24 pb-8 relative construction-border-t border-t-amber-gold border-t-4">
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 border-b border-white/10 pb-16">

          {/* Brand Col */}
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 border-2 border-amber-gold flex items-center justify-center">
                <div className="w-3 h-3 bg-white"></div>
              </div>
              <Link to="/" className="font-heading text-2xl font-bold tracking-tight text-white uppercase">
                Construct<span className="text-amber-gold">.</span>
              </Link>
            </div>
            <p className="text-light-grey text-sm mb-8 leading-relaxed font-paragraph">
              Professional construction services delivering high-quality residential and commercial projects across Goa with structural integrity, precision, and lasting value.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-other uppercase tracking-widest text-sm font-bold text-amber-gold mb-6">Navigation</h4>
            <ul className="space-y-4 font-other uppercase text-sm tracking-wide text-light-grey">
              {[
                { to: '/', label: 'Home' },
                { to: '/about', label: 'About Us' },
                { to: '/projects', label: 'Projects' },
                { to: '/process', label: 'Our Process' },
                { to: '/insights', label: 'Insights' },
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link to={to} className="hover:text-amber-gold transition-colors flex items-center group">
                    <ArrowUpRight size={14} className="mr-2 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all text-amber-gold" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-other uppercase tracking-widest text-sm font-bold text-amber-gold mb-6">Services</h4>
            <ul className="space-y-4 font-other uppercase text-sm tracking-wide text-light-grey">
              {[
                { to: '/services', label: 'All Services' },
                { to: '/services/residential-construction-goa', label: 'Residential' },
                { to: '/services/commercial-construction-goa', label: 'Commercial' },
                { to: '/services', label: 'Civil Construction' },
                { to: '/services', label: 'Renovation' },
                { to: '/services', label: 'Turnkey Projects' },
              ].map(({ to, label }, i) => (
                <li key={i}>
                  <Link to={to} className="hover:text-amber-gold transition-colors flex items-center group">
                    <ArrowUpRight size={14} className="mr-2 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all text-amber-gold" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-other uppercase tracking-widest text-sm font-bold text-amber-gold mb-6">Contact</h4>
            <ul className="space-y-4 font-other uppercase text-sm tracking-wide text-light-grey">
              <li><a href="tel:[PHONE]" className="hover:text-amber-gold transition-colors">[PHONE]</a></li>
              <li><a href="https://wa.me/[WHATSAPP]" className="hover:text-amber-gold transition-colors">WhatsApp: [WHATSAPP]</a></li>
              <li><a href="mailto:contact@company.com" className="hover:text-amber-gold transition-colors normal-case">contact@company.com</a></li>
              <li className="pt-4 text-white/50 leading-relaxed font-paragraph normal-case">
                Office Address<br />
                Panaji, Goa<br />
                India
              </li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-white/50 text-xs font-other uppercase tracking-widest">
          <div>&copy; {new Date().getFullYear()} [COMPANY NAME]. All rights reserved.</div>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-amber-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-amber-gold transition-colors">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
