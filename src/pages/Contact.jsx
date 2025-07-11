import React from 'react';
import {
  MapPin, Phone, Mail, User, LogIn, LayoutDashboard, ChevronDown, Search, Menu,
  ArrowUp, Globe, MailOpen, PhoneCall, Link, // Updated Lucid icons for contact info
} from 'lucide-react';

// Assuming your Navbar and Footer components are in src/components/
import Navbar from '../components/Navbar'; 
import Footer from '../components/Footer';
import Image from '../assets/hero.jpg'; // Assuming you have a Footer.jsx component

const Contact = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
      

      {/* Navbar Component */}
      <Navbar />

      {/* Hero Section - Contact Us */}
      <section 
        className="relative bg-cover bg-center text-white py-20 md:py-32" 
        style={{ 
          backgroundImage: `url(${Image})`, // Corrected syntax for imported image
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover'
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg md:text-xl">Home /  <span className="text-amber-400">Contact</span></p> {/* Corrected path to match previous output */}
        </div>
      </section>

      {/* Main Contact Content Section */}
      <section className="container mx-auto px-4 my-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Contact Info */}
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200 h-full"> {/* h-full to make cards equal height */}
            <h2 className="text-amber-500 text-lg font-semibold mb-6">Get In Touch</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="flex flex-col items-center text-center">
                <MapPin className="h-12 w-12 text-amber-500 mb-3" />
                <h4 className="font-bold text-xl mb-1">Address</h4>
                <p className="text-gray-600 text-sm">123 Street New York, USA</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <MailOpen className="h-12 w-12 text-amber-500 mb-3" />
                <h4 className="font-bold text-xl mb-1">Mail Us</h4>
                <p className="text-gray-600 text-sm">info@qalibrated.co.ke</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <PhoneCall className="h-12 w-12 text-amber-500 mb-3" />
                <h4 className="font-bold text-xl mb-1">Telephone</h4>
                <p className="text-gray-600 text-sm">(+012) 3456 7890</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Link className="h-12 w-12 text-amber-500 mb-3" />
                <h4 className="font-bold text-xl mb-1">Yoursite</h4>
                <p className="text-gray-600 text-sm">https://qalibrated.co.ke/</p>
              </div>
            </div>
          </div>

          {/* Right Column - Send Your Message Form */}
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200 h-full"> {/* h-full to make cards equal height */}
            <h2 className="text-amber-500 text-lg font-semibold mb-2">Send Your Message</h2>
            <p className="text-gray-600 text-sm mb-6">
              Talk to us 
            </p>
            <form action="mailto:info@qalibrated.co.ke" method="post" encType="text/plain" className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent"
                    placeholder="Your Email"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent"
                    placeholder="Your Phone"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    id="project"
                    name="project"
                    className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent"
                    placeholder="Your Project"
                  />
                </div>
              </div>
              <div>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent"
                  placeholder="Subject"
                />
              </div>
              <div>
                <textarea
                  id="message"
                  rows="6"
                  name="message"
                  className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent resize-y"
                  placeholder="Message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition duration-200 w-full"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Map Placeholder - Now below both columns, full width */}
        <div className="mt-12"> {/* Added margin-top for spacing */}
          <div className="bg-gray-200 rounded-lg shadow-md overflow-hidden" style={{ height: '400px' }}> {/* Adjusted height for full width map */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.814316886494!2d36.81722341475395!3d-1.2863890999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1172d84d49a7%3A0xf7cf0254b297924c!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2sus!4v1678901234567!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map of Kenya"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Scroll to top button */}
      <button
        className="fixed bottom-8 right-8 bg-amber-500 hover:bg-amber-600 text-white p-3 rounded-full shadow-lg transition duration-300 focus:outline-none focus:ring-2 focus:ring-amber-400"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <ArrowUp className="w-6 h-6" />
      </button>

      {/* Footer Component */}
      <Footer />
    </div>
  );
}

export default Contact;
