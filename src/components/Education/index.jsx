'use client';

import { GraduationCap, Users, Settings, Bot } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="bg-gradient-to-b from-gray-900 to-black py-20 px-6 text-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Education & Activities</h2>

        {/* Education Card */}
        <div className="bg-gray-800/80 border border-gray-700 rounded-xl p-8 shadow-lg mb-12">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <GraduationCap className="text-teal-400" size={36} />
              <div>
                <h3 className="text-2xl font-semibold">B.Sc. in Electrical & Electronics Engineering (EEE)</h3>
                <p className="text-gray-400">Green University of Bangladesh</p>
              </div>
            </div>
            <div className="text-gray-300 md:text-right">
              <p><strong>CGPA:</strong> 3.15 / 4.00</p>
              <p><strong>Passing Year:</strong> 2026</p>
              <p><strong>DOB:</strong> Jan 01, 1996</p>
              <p><strong>Total Research Papers:</strong> 3</p>
            </div>
          </div>
        </div>

        {/* Club Activities */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 text-center">Extra-Curriculur Activities</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-800/70 border border-gray-700 rounded-xl p-6 flex flex-col items-center shadow-md hover:shadow-teal-500/20 transition">
              <Users className="text-teal-400 mb-4" size={32} />
              <h4 className="text-lg font-semibold text-center">Green University Debating Club (GUDC)</h4>
            </div>
            <div className="bg-gray-800/70 border border-gray-700 rounded-xl p-6 flex flex-col items-center shadow-md hover:shadow-teal-500/20 transition">
              <Settings className="text-yellow-400 mb-4" size={32} />
              <h4 className="text-lg font-semibold text-center">Green University EEE Club</h4>
            </div>
            <div className="bg-gray-800/70 border border-gray-700 rounded-xl p-6 flex flex-col items-center shadow-md hover:shadow-cyan-500/20 transition">
              <Bot className="text-blue-400 mb-4" size={32} />
              <h4 className="text-lg font-semibold text-center">Green University Robotics Club</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
