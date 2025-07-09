import React from 'react';
import { Calendar, MapPin, Award, TrendingUp } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: "Intern",
      company: "Edunet Foundation",
      location: "Bengaluru, Karnataka",
      period: "January 2025 - March 2025",
      achievements: [
        "Analyzed COVID-19 patient data using Python to identify common symptom patterns and correlations",
        "Performed data cleaning and preprocessing on real-world datasets (e.g., missing values, normalization)",
        "Visualized trends in symptoms, age groups, and recovery times using Matplotlib and Seaborn",
        "Applied exploratory data analysis (EDA) techniques to uncover key insights in patient demographics",
        "Built a basic predictive model to assess the likelihood of recovery based on symptom severity",
        "Summarized and interpreted findings to understand symptom clusters and severity trends across regions"
      ],
      highlight: "Among Top 35 students of the batch",
      color: "blue"
    },
    {
      title: "Summer Intern",
      company: "Globsyn",
      location: "Sector V, Kolkata",
      period: "June 2024 - July 2024",
      achievements: [
        "Gained hands-on experience with Power BI, contributing to 30% improvement in data analysis efficiency",
        "Designed interactive reports and dashboards, reducing manual reporting time by 40%",
        "Understood data-driven decision-making, leading to 25% more accurate insights in project analysis",
        "Analyzed trends and generated reports using Power BI, improving data accessibility by 35%",
        "Experimented with DAX functions and Power Query, optimizing data transformation speed by 45%",
        "Enhanced data storytelling skills, increasing user engagement with reports by 30%"
      ],
      highlight: "Received Grade A and ranked among top-performing students",
      color: "teal"
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'blue':
        return {
          bg: 'bg-blue-50',
          border: 'border-blue-200',
          accent: 'text-blue-600',
          badge: 'bg-blue-100 text-blue-800'
        };
      case 'teal':
        return {
          bg: 'bg-teal-50',
          border: 'border-teal-200',
          accent: 'text-teal-600',
          badge: 'bg-teal-100 text-teal-800'
        };
      default:
        return {
          bg: 'bg-gray-50',
          border: 'border-gray-200',
          accent: 'text-gray-600',
          badge: 'bg-gray-100 text-gray-800'
        };
    }
  };

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Professional Experience</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hands-on experience in data science, business intelligence, and software development 
            through prestigious internships.
          </p>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, index) => {
            const colors = getColorClasses(exp.color);
            return (
              <div key={index} className={`${colors.bg} ${colors.border} border rounded-2xl p-8 shadow-sm`}>
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  <div className="lg:w-1/3">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{exp.title}</h3>
                    <p className="text-xl font-semibold text-gray-700 mb-3">{exp.company}</p>
                    
                    <div className="flex items-center text-gray-600 mb-2">
                      <Calendar size={16} className="mr-2" />
                      <span className="text-sm">{exp.period}</span>
                    </div>
                    
                    <div className="flex items-center text-gray-600 mb-4">
                      <MapPin size={16} className="mr-2" />
                      <span className="text-sm">{exp.location}</span>
                    </div>

                    <div className={`${colors.badge} px-3 py-1 rounded-full text-sm font-medium inline-flex items-center`}>
                      <Award size={14} className="mr-1" />
                      {exp.highlight}
                    </div>
                  </div>

                  <div className="lg:w-2/3">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                      <TrendingUp size={20} className={`mr-2 ${colors.accent}`} />
                      Key Achievements
                    </h4>
                    <ul className="space-y-3">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start">
                          <div className={`w-2 h-2 rounded-full ${colors.accent.replace('text-', 'bg-')} mt-2 mr-3 flex-shrink-0`}></div>
                          <span className="text-gray-700 text-sm leading-relaxed">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;