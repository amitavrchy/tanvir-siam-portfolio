'use client';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    title: 'Intern - Electrical Engineering',
    company: 'Dhaka Electric Supply Company (DESCO)',
    logo: '/logos/desco.png', // Make sure this path matches your public folder
    duration: 'Jan 2023 – Mar 2023',
    description:
      'Worked on live distribution systems, load calculations, and practical energy auditing. Participated in technical site visits and hands-on power management tasks.',
  },
  {
    title: 'Intern - Production & Distribution',
    company: 'PRAN RFL Group',
    logo: '/logos/pranrfl.png',
    duration: 'Jun 2023 – Aug 2023',
    description:
      'Assisted in monitoring automation systems and participated in maintaining industrial electrical equipment. Focused on enhancing production reliability and safety.',
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="bg-gradient-to-b from-gray-950 via-black to-gray-900 py-20 px-6 text-white"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Experience / Internships</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative bg-gray-800/80 border border-gray-700 p-6 rounded-xl shadow-md hover:shadow-teal-500/30 transition"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={exp.logo}
                  alt={`${exp.company} logo`}
                  className="w-16 h-16 object-contain bg-white p-1 rounded-md border"
                />
                <div>
                  <h3 className="text-xl font-semibold text-teal-400">{exp.title}</h3>
                  <p className="text-sm text-gray-300">{exp.company}</p>
                  <p className="text-xs text-gray-500 mt-1">{exp.duration}</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Briefcase size={18} className="text-teal-400 mt-1" />
                <p className="text-sm text-gray-300 leading-relaxed">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
