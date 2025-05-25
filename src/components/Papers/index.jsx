'use client';
import { FileText, ExternalLink } from 'lucide-react';

const researchPapers = [
  {
    title: 'Optimization of Renewable Energy Systems Using AI Algorithms',
    conference: 'IEEE International Conference on Energy Technologies',
    year: 2024,
    link: 'https://example.com/paper1',
  },
  {
    title: 'Design and Analysis of Smart Grid Systems in Urban Areas',
    conference: 'International Journal of Electrical Engineering Research',
    year: 2023,
    link: 'https://example.com/paper2',
  },
  {
    title: 'Autonomous Robotics in Power System Inspection',
    conference: 'GreenTech Symposium 2023',
    year: 2023,
    link: 'https://example.com/paper3',
  },
];

const ResearchPapers = () => {
  return (
    <section id="research" className="bg-gradient-to-b from-black via-gray-900 to-gray-950 py-20 px-6 text-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Research Papers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {researchPapers.map((paper, index) => (
            <div
              key={index}
              className="bg-gray-800/80 border border-gray-700 p-6 rounded-xl shadow-md hover:shadow-teal-500/20 transition"
            >
              <div className="flex items-start gap-4">
                <FileText className="text-teal-400 mt-1" size={28} />
                <div>
                  <h3 className="text-xl font-semibold mb-1">{paper.title}</h3>
                  <p className="text-gray-400 text-sm mb-2">{paper.conference} • {paper.year}</p>
                  <a
                    href={paper.link}
                    target="_blank"
                    className="inline-flex items-center text-teal-400 hover:underline text-sm"
                    rel="noopener noreferrer"
                  >
                    View Paper <ExternalLink size={16} className="ml-1" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchPapers;
