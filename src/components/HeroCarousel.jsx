import {
  PlayCircle,
  Facebook,
  Twitter,
  Instagram,
  Linkedin
} from 'lucide-react';
import heroImage from '../assets/hero.jpg';


function HeroCarousel() {
  return (
    <section
      className="relative h-[90vh] bg-cover bg-center flex items-center justify-center text-white"
      style={{ backgroundImage: `url(${heroImage})` }}

    >
      <div className="absolute inset-0 bg-black opacity-70" />
      <div className="relative z-10 max-w-4xl text-center px-4">
        <h3 className="text-amber-400 font-semibold  mb-2 text-3xl">Precision, Power, & Performance</h3>
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
          Advanced Weighbridge Solutions <br /> HIGHER RETURNS
        </h1>
        <p className="text-gray-200 mb-6">
          We are keen on customers’ needs
and tailor-make solutions that
directly answer to the industry’s
needs. We support a Weighing
system of diverse ranges
        </p>
        <div className="flex justify-center gap-4 mb-6">
          <button className="flex items-center gap-2 bg-white text-black font-medium px-6 py-3 rounded-full hover:bg-gray-200 transition">
            <PlayCircle className="text-amber-400" size={18} /> Watch Video
          </button>
          <button className="bg-amber-400 text-black px-6 py-3 rounded-full font-medium hover:opacity-90 transition">
            Learn More
          </button>
        </div>
        <div className="text-sm font-semibold">Follow Us:</div>
        <div className="flex justify-center gap-4 mt-2 text-lg">
          <a href="#" className="p-2 bg-white text-black rounded-full hover:bg-gray-100"><Facebook size={18} /></a>
          <a href="#" className="p-2 bg-white text-black rounded-full hover:bg-gray-100"><Twitter size={18} /></a>
          <a href="#" className="p-2 bg-white text-black rounded-full hover:bg-gray-100"><Instagram size={18} /></a>
          <a href="#" className="p-2 bg-white text-black rounded-full hover:bg-gray-100"><Linkedin size={18} /></a>
        </div>
      </div>
    </section>
  );
}

export default HeroCarousel;
