import React from 'react';
import Navbar from '../components/Navbar';
import HeroCarousel from '../components/HeroCarousel';
import AboutSnapshot from '../components/AboutSnapshot';
import ServicesGrid from '../components/ServicesGrid';
import StatsCounter from '../components/StatsCounter';
import FAQAccordion from '../components/FAQAccordion';
import Footer from '../components/Footer';
function Home() {
  return (
    <>
      <Navbar />

      {/* Hero Carousel Section */}
      <section id="hero">
        <HeroCarousel />
      </section>

      {/* About Snapshot Section */}
      <section id="about">
        <AboutSnapshot />
      </section>

      {/* Services Section */}
      <section id="services">
        <ServicesGrid />
      </section>

      {/* Stats/Counter Section */}
      <section id="stats">
        <StatsCounter />
      </section>

      {/* FAQs Section */}
      <section id="faq">
        <FAQAccordion />
      </section>
      <section id="footer">
        <Footer />
      </section>
    </>
  );
}

export default Home;
