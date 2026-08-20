import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import TrustStrip from '../components/TrustStrip';
import Services from '../components/Services';
import Projects from '../components/Projects';
import WhyChooseUs from '../components/WhyChooseUs';
import Process from '../components/Process';
import Testimonials from '../components/Testimonials';
import LocalPresence from '../components/LocalPresence';
import ContactCTA from '../components/ContactCTA';
import Footer from '../components/Footer';

function Home() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <TrustStrip />
        <Services />
        <Projects />
        <WhyChooseUs />
        <Process />
        <Testimonials />
        <LocalPresence />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
