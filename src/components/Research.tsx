import React from 'react';
import { FileText, Calendar, Users, ExternalLink } from 'lucide-react';

const Research: React.FC = () => {
  const researchPaper = {
    title: "Learning Based Crop Yield Prediction for Enhanced Agricultural Productivity",
    conference: "2nd National Conference, RAICCIT 2025",
    organizer: "IIC Cell, JISU at JIS University",
    date: "2025",
    description: "This research presents a comprehensive approach to crop yield prediction using machine learning techniques to enhance agricultural productivity and support data-driven farming decisions.",
    keyContributions: [
      "Developed machine learning models for accurate crop yield prediction",
      "Analyzed historical agricultural data to identify yield patterns",
      "Implemented data preprocessing techniques for agricultural datasets",
      "Evaluated model performance using various metrics and validation techniques",
      "Proposed solutions for enhanced agricultural productivity through predictive analytics"
    ],
    impact: [
      "Supports farmers in making informed decisions about crop selection",
      "Helps optimize resource allocation in agriculture",
      "Contributes to sustainable farming practices",
      "Enables predictive planning for better yield outcomes"
    ]
  };

  return (
    <section id="research" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Research & Publications</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Contributing to academic research in agricultural technology and machine learning applications.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
            <div className="flex items-start mb-6">
              <div className="p-3 bg-blue-100 rounded-lg mr-4">
                <FileText className="w-8 h-8 text-blue-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{researchPaper.title}</h3>
                <div className="flex flex-wrap gap-4 text-gray-600 mb-4">
                  <div className="flex items-center">
                    <Calendar size={16} className="mr-2" />
                    <span className="text-sm">{researchPaper.date}</span>
                  </div>
                  <div className="flex items-center">
                    <Users size={16} className="mr-2" />
                    <span className="text-sm">{researchPaper.organizer}</span>
                  </div>
                </div>
                <div className="bg-blue-50 text-blue-800 px-4 py-2 rounded-lg text-sm font-medium">
                  {researchPaper.conference}
                </div>
              </div>
            </div>

            <p className="text-gray-700 mb-6 leading-relaxed">{researchPaper.description}</p>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Contributions</h4>
                <ul className="space-y-3">
                  {researchPaper.keyContributions.map((contribution, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-sm text-gray-700 leading-relaxed">{contribution}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Impact & Applications</h4>
                <ul className="space-y-3">
                  {researchPaper.impact.map((impact, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-sm text-gray-700 leading-relaxed">{impact}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Conference Details</h4>
              <p className="text-gray-700 text-sm mb-4">
                Presented at the 2nd National Conference on Recent Advances in Information Communication 
                Computing and Information Technology (RAICCIT 2025), organized by the Innovation and 
                Incubation Cell (IIC) at JIS University.
              </p>
              <div className="flex items-center text-blue-600 text-sm font-medium">
                <ExternalLink size={16} className="mr-2" />
                <span>Published in Conference Proceedings</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Research Interests</h3>
            <p className="text-gray-600 mb-4">
              Passionate about exploring the intersection of artificial intelligence, machine learning, 
              and agricultural technology to solve real-world problems.
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {['Machine Learning', 'Agricultural Technology', 'Data Science', 'IoT Applications', 'Predictive Analytics'].map((interest, index) => (
                <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Research;