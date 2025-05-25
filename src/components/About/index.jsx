'use client';
import { User } from 'lucide-react';

const AboutMe = () => {
  return (
    <section
      id="about"
      className="relative w-full bg-gradient-to-b from-gray-950 via-black to-gray-900 text-white py-24 px-6 overflow-hidden"
    >
      {/* Decorative Circles */}
      <div className="absolute top-10 -left-10 w-40 h-40 bg-teal-500 opacity-20 rounded-full blur-3xl animate-pulse z-0"></div>
      <div className="absolute bottom-0 -right-10 w-52 h-52 bg-blue-500 opacity-20 rounded-full blur-2xl animate-pulse z-0"></div>

      <div className="max-w-6xl mx-auto relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left: Profile Image */}
        <div className="flex justify-center">
          <div className="relative w-[280px] h-[280px] md:w-[350px] md:h-[350px] border-4 border-teal-500 shadow-lg overflow-hidden rounded-xl">
            <img
              src="/tanvir1.png"
              alt="Md. Tanvir Siam"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 border-4 border-blue-500 animate-ping opacity-10 z-[-1] rounded-xl" />
          </div>
        </div>

        {/* Right: Text Content */}
        <div className="bg-gray-900/60 backdrop-blur-md p-8 rounded-2xl shadow-2xl border border-gray-800">
          <div className="flex items-center gap-3 mb-6">
            <User className="text-teal-400" size={28} />
            <h2 className="text-3xl font-bold text-white">About Me</h2>
          </div>
          <div className="space-y-4 text-gray-300 text-lg">
            <p><span className="text-white font-semibold">Name:</span> Md. Tanvir Siam</p>
            <p><span className="text-white font-semibold">University:</span> Green University of Bangladesh (GUB)</p>
            <p><span className="text-white font-semibold">Passing Year:</span> 2026</p>
            <p><span className="text-white font-semibold">Total Research Papers:</span> 3</p>
            <p><span className="text-white font-semibold">Date of Birth:</span> January 1, 1996</p>
            <p><span className="text-white font-semibold">CGPA:</span> 3.15 / 4.00</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
