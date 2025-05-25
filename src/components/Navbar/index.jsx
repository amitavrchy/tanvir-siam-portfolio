'use client';
import { useState } from 'react';
import { Mail, Phone, Menu, X, Facebook, Linkedin, Github } from 'lucide-react';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navLinks = ['Home', 'About', 'Skills', 'Education', 'Research', 'Experience', 'Testimonials', 'Contact'];

  return (
    <header className="w-full fixed top-0 left-0 z-50">
      {/* Top Contact Bar */}
      <div className="bg-gray-900 text-gray-300 text-sm px-4 py-2 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1">
            <Mail size={14} className="text-teal-400" />
            <a href="mailto:amitav.das@email.com" className="hover:underline">tanvirsiambw@gmail.com</a>
          </span>
          <span className="flex items-center gap-1">
            <Phone size={14} className="text-teal-400" />
            <a href="tel:+919876543210" className="hover:underline">+880 1721-137479</a>
          </span>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-4">
          <a href="https://www.facebook.com/mdtanvir.sheab" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition">
            <Facebook size={16} />
          </a>
          <a href="https://www.linkedin.com/in/tanvir-siam-6b6bb0265" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition">
            <Linkedin size={16} />
          </a>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-gray-900 bg-opacity-90 shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center text-white">
          <h1 className="text-2xl font-bold tracking-wider">Tanvir Siam</h1>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-8">
            {navLinks.map(link => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="relative group text-sm font-medium hover:text-teal-400 transition"
              >
                {link}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-teal-400 transition-all group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button onClick={() => setOpen(!open)} aria-label="Toggle Menu">
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden bg-gray-900 px-4 pb-4 text-white">
            {navLinks.map(link => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="block py-2 text-sm border-b border-gray-700 hover:text-teal-400 transition"
                onClick={() => setOpen(false)}
              >
                {link}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
