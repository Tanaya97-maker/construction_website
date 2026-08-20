import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MessageCircle, ChevronDown } from 'lucide-react';

const servicesLinks = [
  { label: 'All Services', to: '/services' },
  { label: 'Residential Construction', to: '/services/residential-construction-goa' },
  { label: 'Commercial Construction', to: '/services/commercial-construction-goa' },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    setServicesOpen(false);
  }, [location.pathname]);

  const navLinkClass = ({ isActive }) =>
    `hover:text-amber-gold transition-colors duration-200 ${isActive ? 'text-amber-gold' : ''}`;

  const mobileNavLinkClass = ({ isActive }) =>
    `py-2 border-b border-light-grey hover:text-amber-gold block ${isActive ? 'text-amber-gold' : ''}`;

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-dark-grey/10 py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center">

        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 border-2 border-amber-gold flex items-center justify-center">
            <div className="w-3 h-3 bg-construction-black"></div>
          </div>
          <Link to="/" className="font-heading text-2xl font-bold tracking-tight text-construction-black uppercase">
            Construct<span className="text-amber-gold">.</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 font-other font-medium tracking-wide text-dark-grey text-sm uppercase">
          <NavLink to="/" end className={navLinkClass}>Home</NavLink>
          <NavLink to="/about" className={navLinkClass}>About</NavLink>

          {/* Services Dropdown */}
          <div className="relative" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
            <NavLink
              to="/services"
              className={({ isActive }) => `hover:text-amber-gold transition-colors duration-200 flex items-center gap-1 ${isActive ? 'text-amber-gold' : ''}`}
            >
              Services <ChevronDown size={14} className={`transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} />
            </NavLink>
            <div className={`absolute top-full left-0 bg-white border border-dark-grey/10 shadow-lg min-w-56 transition-all duration-200 origin-top ${servicesOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 pointer-events-none'}`}>
              {servicesLinks.map((s) => (
                <Link key={s.to} to={s.to} className="block px-5 py-3 text-sm text-dark-grey hover:text-amber-gold hover:bg-light-grey transition-colors border-b border-light-grey last:border-0">
                  {s.label}
                </Link>
              ))}
            </div>
          </div>

          <NavLink to="/projects" className={navLinkClass}>Projects</NavLink>
          <NavLink to="/process" className={navLinkClass}>Process</NavLink>
          <NavLink to="/insights" className={navLinkClass}>Insights</NavLink>
          <a href="/#contact" className="hover:text-amber-gold transition-colors">Contact</a>
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center space-x-4">
          <a href="tel:[PHONE]" className="text-dark-grey hover:text-amber-gold transition-colors">
            <Phone size={20} />
          </a>
          <a href="/#contact" className="btn btn-primary !py-2 !px-4 text-sm">
            Get a Quote
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-construction-black hover:text-amber-gold transition-colors focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-white border-b border-dark-grey/10 transition-all duration-300 overflow-hidden ${mobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
        <nav className="flex flex-col px-6 py-4 space-y-1 font-other uppercase text-sm tracking-wide text-dark-grey">
          <NavLink to="/" end className={mobileNavLinkClass} onClick={() => setMobileMenuOpen(false)}>Home</NavLink>
          <NavLink to="/about" className={mobileNavLinkClass} onClick={() => setMobileMenuOpen(false)}>About</NavLink>
          <NavLink to="/services" className={mobileNavLinkClass} onClick={() => setMobileMenuOpen(false)}>All Services</NavLink>
          <NavLink to="/services/residential-construction-goa" className={mobileNavLinkClass} onClick={() => setMobileMenuOpen(false)}>— Residential</NavLink>
          <NavLink to="/services/commercial-construction-goa" className={mobileNavLinkClass} onClick={() => setMobileMenuOpen(false)}>— Commercial</NavLink>
          <NavLink to="/projects" className={mobileNavLinkClass} onClick={() => setMobileMenuOpen(false)}>Projects</NavLink>
          <NavLink to="/process" className={mobileNavLinkClass} onClick={() => setMobileMenuOpen(false)}>Process</NavLink>
          <NavLink to="/insights" className={mobileNavLinkClass} onClick={() => setMobileMenuOpen(false)}>Insights</NavLink>
          <a href="/#contact" className="py-2 border-b border-light-grey hover:text-amber-gold" onClick={() => setMobileMenuOpen(false)}>Contact</a>

          <div className="flex flex-col space-y-3 pt-4">
            <a href="tel:[PHONE]" className="btn border border-dark-grey/20 py-2 flex justify-center text-construction-black">
              <Phone size={18} className="mr-2" /> Call Us
            </a>
            <a href="https://wa.me/[WHATSAPP]" className="btn bg-[#25D366] text-white py-2 flex justify-center border-transparent hover:bg-[#128C7E]">
              <MessageCircle size={18} className="mr-2" /> WhatsApp
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
