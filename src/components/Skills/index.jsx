'use client';
import {
  Cpu,
  Zap,
  Database,
  Code,
  Settings,
  PenTool,
  BarChart2,
  BookOpen,
} from 'lucide-react';

const skills = [
  { name: 'Circuit Design', icon: <Cpu className="text-teal-400" size={30} /> },
  { name: 'Power Systems', icon: <Zap className="text-yellow-400" size={30} /> },
  { name: 'Control Systems', icon: <Settings className="text-blue-400" size={30} /> },
  { name: 'Project Management', icon: <BarChart2 className="text-purple-400" size={30} /> },
  { name: 'MATLAB/Simulink', icon: <Code className="text-pink-400" size={30} /> },
  { name: 'Research Writing', icon: <BookOpen className="text-orange-400" size={30} /> },
  { name: 'Embedded Systems', icon: <Database className="text-cyan-400" size={30} /> },
  { name: 'Problem Solving', icon: <PenTool className="text-green-400" size={30} /> },
];

const Skills = () => {
  return (
    <section id="skills" className="bg-gradient-to-b from-gray-950 via-black to-gray-900 py-20 px-6 text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">My Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center bg-gray-900/70 border border-gray-800 rounded-xl p-6 shadow-lg hover:shadow-teal-500/20 transition duration-300"
            >
              <div className="mb-3">{skill.icon}</div>
              <h4 className="text-lg font-semibold">{skill.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
