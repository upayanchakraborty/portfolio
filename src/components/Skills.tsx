import React from 'react';
import { Code, Database, Cpu, BarChart3, Settings, Users } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="w-6 h-6 text-blue-600" />,
      color: "blue",
      skills: ["Python", "C", "C++", "Java", "JavaScript", "HTML", "CSS", "R"]
    },
    {
      title: "AI & Machine Learning",
      icon: <Cpu className="w-6 h-6 text-purple-600" />,
      color: "purple",
      skills: ["TensorFlow", "PyTorch", "Scikit-Learn", "Pandas", "NumPy"]
    },
    {
      title: "Data Visualization",
      icon: <BarChart3 className="w-6 h-6 text-teal-600" />,
      color: "teal",
      skills: ["Seaborn", "Plotly", "Tableau", "Power BI", "Geopandas", "Folium"]
    },
    {
      title: "Databases",
      icon: <Database className="w-6 h-6 text-green-600" />,
      color: "green",
      skills: ["MySQL", "SQL Plus", "PostgreSQL", "MS Access"]
    },
    {
      title: "Tools & Technologies",
      icon: <Settings className="w-6 h-6 text-orange-600" />,
      color: "orange",
      skills: ["Git & GitHub", "VS Code IDE", "Unix Environments", "Shell Scripting", "Arduino", "ESP8266", "ESP32"]
    },
    {
      title: "Soft Skills",
      icon: <Users className="w-6 h-6 text-pink-600" />,
      color: "pink",
      skills: ["Project Management", "Teamwork", "Communication", "Leadership"]
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: {
        bg: 'bg-blue-50',
        border: 'border-blue-200',
        badge: 'bg-blue-100 text-blue-800',
        icon: 'text-blue-600'
      },
      purple: {
        bg: 'bg-purple-50',
        border: 'border-purple-200',
        badge: 'bg-purple-100 text-purple-800',
        icon: 'text-purple-600'
      },
      teal: {
        bg: 'bg-teal-50',
        border: 'border-teal-200',
        badge: 'bg-teal-100 text-teal-800',
        icon: 'text-teal-600'
      },
      green: {
        bg: 'bg-green-50',
        border: 'border-green-200',
        badge: 'bg-green-100 text-green-800',
        icon: 'text-green-600'
      },
      orange: {
        bg: 'bg-orange-50',
        border: 'border-orange-200',
        badge: 'bg-orange-100 text-orange-800',
        icon: 'text-orange-600'
      },
      pink: {
        bg: 'bg-pink-50',
        border: 'border-pink-200',
        badge: 'bg-pink-100 text-pink-800',
        icon: 'text-pink-600'
      }
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Technical Skills</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive skill set spanning multiple domains of software development, 
            data science, and emerging technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const colors = getColorClasses(category.color);
            return (
              <div key={index} className={`${colors.bg} ${colors.border} border rounded-2xl p-6 hover:shadow-lg transition-shadow`}>
                <div className="flex items-center mb-4">
                  {category.icon}
                  <h3 className="text-xl font-semibold text-gray-900 ml-3">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className={`${colors.badge} px-3 py-1 rounded-full text-sm font-medium`}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Skill Highlights</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="text-3xl font-bold text-blue-600 mb-2">8+</div>
                <p className="text-gray-600 font-medium">Programming Languages</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="text-3xl font-bold text-purple-600 mb-2">5+</div>
                <p className="text-gray-600 font-medium">AI/ML Frameworks</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="text-3xl font-bold text-teal-600 mb-2">6+</div>
                <p className="text-gray-600 font-medium">Data Tools</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;