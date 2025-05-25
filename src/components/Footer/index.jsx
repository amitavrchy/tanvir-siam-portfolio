'use client';
import { Mail, Linkedin, Github, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left: Copyright */}
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Md. Tanvir Siam. All rights reserved.
        </p>

        {/* Center: Contact */}
        <div className="flex items-center gap-4">
          <Mail className="text-teal-400" />
          <a
            href="mailto:tanvirsiambw@gmail.com"
            className="hover:text-teal-400 transition"
          >
            tanvirsiambw@gmail.com
          </a>
        </div>

        {/* Right: Social Links */}
        <div className="flex items-center gap-6">
          <a
            href="https://linkedin.com/in/tanvirsiam"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-400 transition"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="https://github.com/tanvirsiam"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-400 transition"
            aria-label="GitHub"
          >
            <Github size={24} />
          </a>
          <a
            href="https://twitter.com/tanvirsiam"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-400 transition"
            aria-label="Twitter"
          >
            <Twitter size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
