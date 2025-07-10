import React from 'react';
import {
  
  Facebook, Twitter, Linkedin, Instagram, ArrowUp,
  Scale, Building, Car, Settings, Factory, FlaskConical // New Lucid icons for features
} from 'lucide-react';
import Image from '../assets/construction-workers-sunset.jpg';
import about from '../assets/about.jpg';
import about1 from '../assets/about2.jpg';

// Assuming your Navbar component is in src/components/Navbar.jsx or src/components/Navbar.js
// This import path should match where your Navbar component file is located.
import Navbar from '../components/Navbar'; 

// Main About Page Component
const About = () => { // Renamed from App to About
  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
      {/* Navbar Component - Now imported and used */}
      <Navbar />

      {/* Hero Section - About Us */}
      <section className="relative bg-cover bg-center text-white py-20 md:py-32" style={{ backgroundImage: `url(${Image})`, backgroundAttachment: 'fixed' }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">About Us</h1>
          <p className="text-lg md:text-xl">Home /<span className="text-amber-400">About</span></p> {/* Changed to amber-400 */}
        </div>
      </section>

      {/* About Us Content Section (Qalibrated Systems specific content) */}
      <section className="container mx-auto px-4 my-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Text Content */}
          <div>
            <h2 className="text-amber-500 text-6xl font-semibold mb-2">About Us</h2> {/* Changed to amber-500 */}
            <h3 className="text-4xl font-bold leading-tight mb-6">Meet our company and discover our commitment to precision.</h3>
            
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

            {/* Mission & Vision from original code, styled to fit */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-100 p-6 rounded-md shadow-sm">
                <h3 className="text-2xl font-semibold text-amber-500 mb-2">Our Mission</h3>
                <p className="text-gray-700">
                  To deliver tailored and innovative weighing, automation, and transport system solutions that meet the evolving needs of industries across East Africa.
                </p>
              </div>

              <div className="bg-gray-100 p-6 rounded-md shadow-sm">
                <h3 className="text-2xl font-semibold text-amber-500 mb-2">Our Vision</h3>
                <p className="text-gray-700">
                  To be the preferred partner in precision technology, providing accurate, reliable, and locally supported systems for logistics, manufacturing, and public infrastructure.
                </p>
              </div>
            </div>

            {/* Why Choose QSL? - Updated with PDF content */}
            {/* <div className="mt-8 bg-blue-50 border-l-4 border-blue-600 p-6 rounded-md">
              <h3 className="text-xl font-bold text-blue-700 mb-2">Why Choose Us?</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li><strong>Professional Services:</strong> We ensure you get top-notch services with our team of professionals.</li>
                <li><strong>Clean Work:</strong> We ensure we install clean, debuggable connections and solutions.</li>
                <li><strong>Integrity:</strong> We deliver the best services according to the agreed upon deliverables.</li>
                <li><strong>24/7 Support:</strong> We are always online to give professional support.</li>
              </ul>
            </div> */}

            {/* Discover Now button from image */}
            <button className="mt-8 bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition duration-200">Discover Now</button> {/* Changed to amber-500 */}
          </div>

          {/* Right Column - Images from image */}
          <div className="relative flex flex-col items-center justify-center space-y-6">
            <img src={about} alt="3D Graphic 1" className="w-full h-auto rounded-lg shadow-xl" />
            
          </div>
        </div>
      </section>

      {/* Our Features Section - Updated with PDF content */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-amber-500 text-3xl font-bold mb-2">Our Solutions</h2> {/* Changed to amber-500 */}
          <h3 className="text-4xl font-bold leading-tight mb-12 max-w-2xl mx-auto">Providing advanced integrated solutions for diverse industries.</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8"> {/* Adjusted grid for 6 items */}
            {/* Feature Card 1: Commercial Weighing Solutions */}
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200 flex flex-col items-center text-center transition duration-200 hover:shadow-xl hover:scale-[1.02]">
              <div className="bg-amber-100 rounded-full p-4 mb-6"> {/* Changed to amber-100 */}
                <Scale className="h-12 w-12 text-amber-500" /> {/* Changed to amber-500 */}
              </div>
              <h4 className="font-bold text-xl mb-2">Commercial Weighing Solutions</h4>
              <p className="text-gray-600 text-sm mb-6">Comprehensive weighing systems for various commercial applications, ensuring accuracy and reliability.</p>
              <button className="text-amber-500 font-semibold hover:underline">Learn More</button> {/* Changed to amber-500 */}
            </div>
            {/* Feature Card 2: Building Management System */}
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200 flex flex-col items-center text-center transition duration-200 hover:shadow-xl hover:scale-[1.02]">
              <div className="bg-amber-100 rounded-full p-4 mb-6"> {/* Changed to amber-100 */}
                <Building className="h-12 w-12 text-amber-500" /> {/* Changed to amber-500 */}
              </div>
              <h4 className="font-bold text-xl mb-2">Building Management System</h4>
              <p className="text-gray-600 text-sm mb-6">Integrated solutions for efficient monitoring and control of building infrastructure and operations.</p>
              <button className="text-amber-500 font-semibold hover:underline">Learn More</button> {/* Changed to amber-500 */}
            </div>
            {/* Feature Card 3: Intelligent Transport System */}
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200 flex flex-col items-center text-center transition duration-200 hover:shadow-xl hover:scale-[1.02]">
              <div className="bg-amber-100 rounded-full p-4 mb-6"> {/* Changed to amber-100 */}
                <Car className="h-12 w-12 text-amber-500" /> {/* Changed to amber-500 */}
              </div>
              <h4 className="font-bold text-xl mb-2">Intelligent Transport System</h4>
              <p className="text-gray-600 text-sm mb-6">Advanced systems for managing and optimizing transport logistics and vehicle movement.</p>
              <button className="text-amber-500 font-semibold hover:underline">Learn More</button> {/* Changed to amber-500 */}
            </div>
            {/* Feature Card 4: Calibrations */}
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200 flex flex-col items-center text-center transition duration-200 hover:shadow-xl hover:scale-[1.02]">
              <div className="bg-amber-100 rounded-full p-4 mb-6"> {/* Changed to amber-100 */}
                <Settings className="h-12 w-12 text-amber-500" /> {/* Changed to amber-500 */}
              </div>
              <h4 className="font-bold text-xl mb-2">Calibrations</h4>
              <p className="text-gray-600 text-sm mb-6">Expert calibration services to ensure the highest accuracy and compliance of weighing instruments.</p>
              <button className="text-amber-500 font-semibold hover:underline">Learn More</button> {/* Changed to amber-500 */}
            </div>
            {/* Feature Card 5: Industrial Automation */}
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200 flex flex-col items-center text-center transition duration-200 hover:shadow-xl hover:scale-[1.02]">
              <div className="bg-amber-100 rounded-full p-4 mb-6"> {/* Changed to amber-100 */}
                <Factory className="h-12 w-12 text-amber-500" /> {/* Changed to amber-500 */}
              </div>
              <h4 className="font-bold text-xl mb-2">Industrial Automation</h4>
              <p className="text-gray-600 text-sm mb-6">Automated solutions to streamline industrial processes, enhancing efficiency and productivity.</p>
              <button className="text-amber-500 font-semibold hover:underline">Learn More</button> {/* Changed to amber-500 */}
            </div>
            {/* Feature Card 6: Research and Development */}
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200 flex flex-col items-center text-center transition duration-200 hover:shadow-xl hover:scale-[1.02]">
              <div className="bg-amber-100 rounded-full p-4 mb-6"> {/* Changed to amber-100 */}
                <FlaskConical className="h-12 w-12 text-amber-500" /> {/* Changed to amber-500 */}
              </div>
              <h4 className="font-bold text-xl mb-2">Research and Development</h4>
              <p className="text-gray-600 text-sm mb-6">Continuous innovation and development of new technologies to meet emerging industry demands.</p>
              <button className="text-amber-500 font-semibold hover:underline">Learn More</button> {/* Changed to amber-500 */}
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Advisers Section */}
      <section className="container mx-auto px-4 my-16 text-center">
        <h3 className="text-4xl font-bold leading-tight mb-12">Meet Our Team</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Advisor Card 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 flex flex-col items-center transition duration-200 hover:shadow-xl hover:scale-[1.02]">
            <div className="relative mb-4">
              <img src={about} alt="Advisor 1" className="rounded-full w-36 h-36 object-cover border-4 border-amber-400 p-1" /> {/* Changed to amber-400 */}
              <div className="absolute inset-0 rounded-full border-4 border-dashed border-amber-300 animate-spin-slow"></div> {/* Changed to amber-300 */}
            </div>
            <h4 className="font-bold text-xl mb-1">David James</h4>
            <p className="text-gray-600 text-sm mb-4">Profession</p>
            <div className="flex space-x-3">
              <a href="#" className="text-gray-600 hover:text-blue-500"><Facebook className="h-5 w-5" /></a>
              <a href="#" className="text-gray-600 hover:text-blue-400"><Twitter className="h-5 w-5" /></a>
              <a href="#" className="text-gray-600 hover:text-blue-700"><Linkedin className="h-5 w-5" /></a>
              <a href="#" className="text-gray-600 hover:text-purple-600"><Instagram className="h-5 w-5" /></a>
            </div>
          </div>
          {/* Advisor Card 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 flex flex-col items-center transition duration-200 hover:shadow-xl hover:scale-[1.02]">
            <div className="relative mb-4">
              <img src={about} alt="Advisor 2" className="rounded-full w-36 h-36 object-cover border-4 border-amber-400 p-1" /> {/* Changed to amber-400 */}
              <div className="absolute inset-0 rounded-full border-4 border-dashed border-amber-300 animate-spin-slow"></div> {/* Changed to amber-300 */}
            </div>
            <h4 className="font-bold text-xl mb-1">David James</h4>
            <p className="text-gray-600 text-sm mb-4">Profession</p>
            <div className="flex space-x-3">
              <a href="#" className="text-gray-600 hover:text-blue-500"><Facebook className="h-5 w-5" /></a>
              <a href="#" className="text-gray-600 hover:text-blue-400"><Twitter className="h-5 w-5" /></a>
              <a href="#" className="text-gray-600 hover:text-blue-700"><Linkedin className="h-5 w-5" /></a>
              <a href="#" className="text-gray-600 hover:text-purple-600"><Instagram className="h-5 w-5" /></a>
            </div>
          </div>
          {/* Advisor Card 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 flex flex-col items-center transition duration-200 hover:shadow-xl hover:scale-[1.02]">
            <div className="relative mb-4">
              <img src={about} alt="Advisor 3" className="rounded-full w-36 h-36 object-cover border-4 border-amber-400 p-1" /> {/* Changed to amber-400 */}
              <div className="absolute inset-0 rounded-full border-4 border-dashed border-amber-300 animate-spin-slow"></div> {/* Changed to amber-300 */}
            </div>
            <h4 className="font-bold text-xl mb-1">David James</h4>
            <p className="text-gray-600 text-sm mb-4">Profession</p>
            <div className="flex space-x-3">
              <a href="#" className="text-gray-600 hover:text-blue-500"><Facebook className="h-5 w-5" /></a>
              <a href="#" className="text-gray-600 hover:text-blue-400"><Twitter className="h-5 w-5" /></a>
              <a href="#" className="text-gray-600 hover:text-blue-700"><Linkedin className="h-5 w-5" /></a>
              <a href="#" className="text-gray-600 hover:text-purple-600"><Instagram className="h-5 w-5" /></a>
            </div>
          </div>
          {/* Advisor Card 4 */}
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 flex flex-col items-center transition duration-200 hover:shadow-xl hover:scale-[1.02]">
            <div className="relative mb-4">
              <img src={about} alt="Advisor 4" className="rounded-full w-36 h-36 object-cover border-4 border-amber-400 p-1" /> {/* Changed to amber-400 */}
              <div className="absolute inset-0 rounded-full border-4 border-dashed border-amber-300 animate-spin-slow"></div> {/* Changed to amber-300 */}
            </div>
            <h4 className="font-bold text-xl mb-1">David James</h4>
            <p className="text-gray-600 text-sm mb-4">Profession</p>
            <div className="flex space-x-3">
              <a href="#" className="text-gray-600 hover:text-blue-500"><Facebook className="h-5 w-5" /></a>
              <a href="#" className="text-gray-600 hover:text-blue-400"><Twitter className="h-5 w-5" /></a>
              <a href="#" className="text-gray-600 hover:text-blue-700"><Linkedin className="h-5 w-5" /></a>
              <a href="#" className="text-gray-600 hover:text-purple-600"><Instagram className="h-5 w-5" /></a>
            </div>
          </div>
        </div>
      </section>

      {/* Scroll to top button */}
      <button
        className="fixed bottom-8 right-8 bg-amber-500 hover:bg-amber-600 text-white p-3 rounded-full shadow-lg transition duration-300 focus:outline-none focus:ring-2 focus:ring-amber-400" /* Changed to amber-500, amber-600, amber-400 */
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <ArrowUp className="w-6 h-6" />
      </button>

      {/* Tailwind Custom Animation for Advisor Cards */}
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

      {/* Footer Section (from original code, adapted for Tailwind) */}
      <footer className="bg-gray-800 text-white py-8 text-center">
        <p className="text-gray-400 text-sm">&copy; 2025 Qalibrated Systems Ltd. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default About; // Exporting About component
