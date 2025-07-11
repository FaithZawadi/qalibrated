import { Link } from 'react-router-dom';
import {
  MapPin,
  Phone,
  Mail,
  UserPlus,
  LogIn,
  LayoutDashboard
} from 'lucide-react';
import logo from '../assets/logoblack.svg';

function Navbar() {
  return (
    <header className="w-full">
      {/* Top Info Bar */}
      <div className="bg-amber-400 text-xs text-black px-4 py-2 flex justify-between items-center">
        <div className="flex gap-4 items-center">
          <span className="flex items-center gap-1"><MapPin size={14} /> Find A Location</span>
          <span className="flex items-center gap-1"><Phone size={14} /> +01234567890</span>
          <span className="flex items-center gap-1"><Mail size={14} /> Example@gmail.com</span>
        </div>
        <div className="hidden md:flex gap-4 items-center text-sm">
          <span className="flex items-center gap-1"><UserPlus size={14} /> Register</span>
          <span className="flex items-center gap-1"><LogIn size={14} /> Login</span>
          <span className="flex items-center gap-1"><LayoutDashboard size={14} /> My Dashboard</span>
        </div>
      </div>

      {/* Main Nav */}
      <nav className="bg-white shadow py-4 px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="QSL Logo" className="h-10 w-auto" />
        </Link>
        <div className="hidden md:flex gap-6 items-center font-medium text-black">
          <Link to="/" className="hover:text-amber-400">Home</Link>
          <Link to="/about" className="hover:text-amber-400">About</Link>
          <Link to="/services" className="hover:text-amber-400">Services</Link>
          <Link to="/catalogue" className="hover:text-amber-400">Catalogue</Link>
          {/* <Link to="/blogs" className="hover:text-amber-400">Blogs</Link> */}
          <Link to="/contact" className="hover:text-amber-400">Contact Us</Link>
          <button className="ml-4 px-4 py-2 bg-amber-400 text-black rounded-full hover:opacity-90 transition">
            Get Started
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
