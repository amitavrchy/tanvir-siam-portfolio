'use client';
import { useState, useEffect } from 'react';
import { ArrowDownCircle } from 'lucide-react';

const Hero = () => {
  const [rippleStyle, setRippleStyle] = useState({});
  const [isRippling, setIsRippling] = useState(false);

  const handleMouseEnter = (e) => {
    const rippleSize = 300;
    const x = e.clientX - rippleSize / 2;
    const y = e.clientY - rippleSize / 2;

    setRippleStyle({
      top: y + 'px',
      left: x + 'px',
      width: rippleSize + 'px',
      height: rippleSize + 'px',
    });

    setIsRippling(true);
    setTimeout(() => setIsRippling(false), 1000); // Reset animation
  };

  return (
    <section
      id="home"
      onMouseEnter={handleMouseEnter}
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-gray-950 via-black to-gray-900 text-white pb-20"
    >
      {/* Ripple Effect */}
      {isRippling && (
        <span
          className="absolute bg-blue-400 opacity-20 rounded-full pointer-events-none animate-ripple z-0"
          style={rippleStyle}
        ></span>
      )}

      {/* Content Row */}
      <div className="relative z-10 flex flex-col-reverse md:flex-row items-center justify-between max-w-6xl w-full px-6 h-full mt-40">
        {/* Left: Text */}
        <div className="text-center md:text-left max-w-xl">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
            Hello, I'm <br /><span className="text-teal-400 mt-5 space-y-5">Md.Tanvir Siam</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-6">
            A passionate graduate in Electrical & Electronics Engineering (EEE)
            with a strong interest in research, innovation, and studying abroad.
            Focused on energy systems, robotics, and AI in engineering.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="/cv.pdf"
              target="_blank"
              className="px-6 py-3 bg-teal-500 text-black font-semibold rounded-full hover:bg-teal-400 transition"
            >
              Download CV
            </a>
            <a
              href="#research"
              className="px-6 py-3 border border-teal-500 text-teal-400 font-semibold rounded-full hover:bg-teal-800 transition"
            >
              View Research Papers
            </a>
          </div>
          <div className="mt-16 flex justify-center md:justify-start">
            <a href="#about" className="animate-bounce text-teal-400">
              <ArrowDownCircle size={40} />
            </a>
          </div>
        </div>

        {/* Right: Image with Shapes */}
        <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px]">
          <img
            src="/tanvir-hero.png"
            alt="Tanvir Siam"
            className="w-full h-full object-cover rounded-full border-4 border-teal-500"
          />
          <div className="absolute top-0 left-0 w-full h-full rounded-full animate-pulse border-4 border-blue-500 opacity-20 z-[-1]" />
          <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-teal-400 rounded-full opacity-30 animate-bounce" />
        </div>
      </div>
    </section>

  );
};

export default Hero;
