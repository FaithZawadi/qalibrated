import React from 'react';
import {
  Facebook, Twitter, Linkedin, Instagram, ArrowUp,
  Scale, Building, Car, Settings, Factory, FlaskConical
} from 'lucide-react';
import Navbar from '../components/Navbar';

// Placeholder images (replace with your own imported assets as needed)
import about1 from '../assets/about.jpg';
import HeroAbout from '../assets/weighingbridge1.jpg';

const About = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center text-white py-20 md:py-32 rounded-b-lg shadow-lg"
        style={{
          backgroundImage: `url(${HeroAbout})`,
          backgroundAttachment: 'scroll' // safer for mobile
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50 rounded-b-lg"></div>
        <div className="relative z-10 max-w-screen-xl mx-auto px-4 text-center">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4">About Us</h1>
          <p className="text-base md:text-xl">Home / <span className="text-amber-400">About</span></p>
        </div>
      </section>

      {/* About Content */}
      <section className="max-w-screen-xl mx-auto px-4 my-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl sm:text-4xl font-bold mb-6">
              Meet our company and discover our commitment to precision.
            </h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              <strong>Qalibrated Systems Limited</strong> is a Kenyan Registered Private Limited Company with a 100% local shareholding. 
              Established in July 2009 in Nairobi, Kenya, and initially registered as Resolution Electro-Technique, our primary focus was to offer after-sale support for weighing equipment from various manufacturers.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Over the years, we have significantly expanded our expertise into diverse fields of Electronic and Instrumentation Engineering. In July 2017, we received official approval from the Weights and Measures Department to operate a comprehensive workshop for the sale, service, repair, and overhauling of all types of weighing instruments.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Today, Qalibrated Systems Limited stands as a market leader in advanced integrated weighing solutions across Kenya and the wider East African region. We are headquartered in Nairobi, with active branches in <strong>Mombasa</strong> and <strong>Kisumu</strong>, and our dedicated support team ensures full national coverage and extends services to clients across the region. 
            </p>

            {/* Mission & Vision */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-100 p-6 rounded-md shadow-sm">
                <h4 className="text-xl font-semibold text-amber-500 mb-2">Our Mission</h4>
                <p className="text-gray-700">
                  To deliver tailored and innovative weighing, automation, and transport system solutions...
                </p>
              </div>
              <div className="bg-gray-100 p-6 rounded-md shadow-sm">
                <h4 className="text-xl font-semibold text-amber-500 mb-2">Our Vision</h4>
                <p className="text-gray-700">
                  To be the preferred partner in precision technology...
                </p>
              </div>
            </div>

            <button className="mt-4 bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition duration-300 text-sm md:text-base">
              Discover Now
            </button>
          </div>

          <div className="flex justify-center">
            <img
              src={about1}
              alt="About Us"
              className="w-full h-auto rounded-lg shadow-xl max-w-full"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-16 rounded-t-lg shadow-inner">
        <div className="max-w-screen-xl mx-auto px-4 text-center">
          <h2 className="text-amber-500 text-2xl sm:text-3xl font-bold mb-2">Our Solutions</h2>
          <h3 className="text-2xl sm:text-4xl font-bold mb-12 max-w-2xl mx-auto">
            Providing advanced integrated solutions for diverse industries.
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              { icon: Scale, title: 'Commercial Weighing Solutions' },
              { icon: Building, title: 'Building Management System' },
              { icon: Car, title: 'Intelligent Transport System' },
              { icon: Settings, title: 'Calibrations' },
              { icon: Factory, title: 'Industrial Automation' },
              { icon: FlaskConical, title: 'Research and Development' },
            ].map(({ icon: Icon, title }, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-lg shadow-md border flex flex-col items-center text-center hover:shadow-xl hover:scale-[1.02] transition duration-300"
              >
                <div className="bg-amber-100 rounded-full p-4 mb-4">
                  <Icon className="h-10 w-10 text-amber-500" />
                </div>
                <h4 className="font-bold text-lg sm:text-xl mb-2">{title}</h4>
                <p className="text-gray-600 text-sm mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <button className="text-amber-500 font-semibold hover:underline text-sm">Learn More</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="max-w-screen-xl mx-auto px-4 my-16 text-center">
        <h3 className="text-2xl sm:text-4xl font-bold mb-12">Meet Our Team</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[1, 2, 3, 4].map((_, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-lg shadow-md border flex flex-col items-center transition duration-300 hover:shadow-xl hover:scale-[1.02]"
            >
              <div className="relative mb-4">
                <img
                  src={about1}
                  alt={`Advisor ${i + 1}`}
                  className="rounded-full w-32 h-32 object-cover border-4 border-amber-400 p-1"
                />
                <div className="absolute inset-0 rounded-full border-4 border-dashed border-amber-300 animate-spin-slow"></div>
              </div>
              <h4 className="font-bold text-lg mb-1">David James</h4>
              <p className="text-gray-600 text-sm mb-3">Profession</p>
              <div className="flex space-x-3">
                <a href="#" className="text-gray-600 hover:text-blue-500"><Facebook className="w-5 h-5" /></a>
                <a href="#" className="text-gray-600 hover:text-blue-400"><Twitter className="w-5 h-5" /></a>
                <a href="#" className="text-gray-600 hover:text-blue-700"><Linkedin className="w-5 h-5" /></a>
                <a href="#" className="text-gray-600 hover:text-purple-600"><Instagram className="w-5 h-5" /></a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Scroll to Top Button */}
      <button
        className="fixed bottom-8 right-8 bg-amber-500 hover:bg-amber-600 text-white p-3 rounded-full shadow-lg transition duration-300"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <ArrowUp className="w-6 h-6" />
      </button>

      {/* Slow Spin Animation */}
      <style>
        {`
          @keyframes spin-slow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          .animate-spin-slow {
            animation: spin-slow 10s linear infinite;
          }
        `}
      </style>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 text-center rounded-t-lg shadow-inner">
        <p className="text-gray-400 text-sm">&copy; 2025 Qalibrated Systems Ltd. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default About;
