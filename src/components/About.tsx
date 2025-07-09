import React from 'react';
import { Code, Database, Cpu, BarChart } from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
    {
      icon: <Code className="w-8 h-8 text-blue-600" />,
      title: "Software Development",
      description: "Full-stack development with expertise in multiple programming languages and frameworks"
    },
    {
      icon: <Database className="w-8 h-8 text-teal-600" />,
      title: "Data Science",
      description: "Advanced analytics, machine learning, and data visualization using Python and R"
    },
    {
      icon: <Cpu className="w-8 h-8 text-orange-600" />,
      title: "IoT Development",
      description: "Embedded systems programming with Arduino, ESP32, and edge computing devices"
    },
    {
      icon: <BarChart className="w-8 h-8 text-purple-600" />,
      title: "Business Intelligence",
      description: "Data-driven decision making with Power BI, Tableau, and advanced analytics"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A passionate software developer with a strong foundation in computer science and 
            hands-on experience in cutting-edge technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100"
            >
              <div className="mb-4">{highlight.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{highlight.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{highlight.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Key Achievements</h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-3xl font-bold text-blue-600 mb-2">Top 35</div>
                <p className="text-gray-600">Among top students at Edunet Foundation</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-3xl font-bold text-teal-600 mb-2">Grade A</div>
                <p className="text-gray-600">Final project grade at Globsyn internship</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-3xl font-bold text-orange-600 mb-2">7.48 CGPA</div>
                <p className="text-gray-600">Current academic performance (5th Semester)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;