import React from 'react';
import { GraduationCap, Award, Calendar, MapPin } from 'lucide-react';

const Education: React.FC = () => {
  const education = [
    {
      degree: "Bachelor of Technology in Computer Science and Engineering",
      institution: "MCKV Institute of Engineering",
      location: "243, G T Road North, Liluah, Howrah, West Bengal 711204",
      period: "2022 - 2026",
      grade: "7.48 CGPA (5th Semester)",
      achievements: [
        "Second in Insignia-2K24, an event organized by the Data Science Department",
        "Represented college in IEEE Conference organized by FOSET",
        "Organized SCMIM 2025, an International Conference"
      ]
    },
    {
      degree: "Class 12 (CBSE)",
      institution: "Vivekananda Academy, Serampore",
      location: "Serampore, West Bengal",
      period: "2022",
      grade: "71.33%",
      achievements: []
    },
    {
      degree: "Class 10 (CBSE)",
      institution: "TIGPS Hooghly",
      location: "Hooghly, West Bengal",
      period: "2020",
      grade: "83.83%",
      achievements: []
    }
  ];

  const certifications = [
    {
      title: "IoT with Machine Learning",
      provider: "Reunited Tech Solution Pvt. Ltd.",
      year: "2024",
      description: "Certified completion of Industrial Training on IoT with Machine Learning"
    },
    {
      title: "Data Science Using Python",
      provider: "Globsyn Finishing School",
      year: "2024",
      description: "Comprehensive knowledge in data handling, visualization, and various data operations"
    }
  ];

  const involvement = [
    {
      role: "Member of Communications Team",
      organization: "The Start-up Club of MCKVIE",
      period: "September 2024 - Present",
      responsibilities: [
        "Core member of the Communications Team",
        "Ensured smooth execution of events by managing logistics",
        "Led the prize department, ensuring recognition for inspiring ideas",
        "Designed promotional posters and authored event write-ups"
      ]
    },
    {
      role: "Core Committee Member",
      organization: "Heritage Club of MCKVIE",
      period: "April 2024 - Present",
      responsibilities: [
        "Actively participated in cultural events and competitions",
        "Assisted in organizing cultural programs and managing logistics",
        "Contributed to event promotion and community engagement"
      ]
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Education & Certifications</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Strong academic foundation with continuous learning and professional development.
          </p>
        </div>

        {/* Education */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
            <GraduationCap className="mr-3 text-blue-600" size={28} />
            Education
          </h3>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">{edu.degree}</h4>
                    <p className="text-lg text-gray-700 mb-2">{edu.institution}</p>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-gray-600 mb-3">
                      <div className="flex items-center">
                        <Calendar size={16} className="mr-2" />
                        <span className="text-sm">{edu.period}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin size={16} className="mr-2" />
                        <span className="text-sm">{edu.location}</span>
                      </div>
                    </div>
                    <div className="bg-blue-50 text-blue-800 px-3 py-1 rounded-full text-sm font-medium inline-block mb-4">
                      {edu.grade}
                    </div>
                    {edu.achievements.length > 0 && (
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-2">Achievements</h5>
                        <ul className="space-y-1">
                          {edu.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="flex items-start">
                              <Award size={14} className="text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-gray-700">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
            <Award className="mr-3 text-teal-600" size={28} />
            Certifications
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{cert.title}</h4>
                <p className="text-gray-700 mb-2">{cert.provider}</p>
                <div className="bg-teal-50 text-teal-800 px-3 py-1 rounded-full text-sm font-medium inline-block mb-3">
                  {cert.year}
                </div>
                <p className="text-sm text-gray-600">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Involvement */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
            <svg className="mr-3 text-orange-600" width="28" height="28" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
            Leadership & Involvement
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {involvement.map((inv, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{inv.role}</h4>
                <p className="text-gray-700 mb-2">{inv.organization}</p>
                <div className="bg-orange-50 text-orange-800 px-3 py-1 rounded-full text-sm font-medium inline-block mb-4">
                  {inv.period}
                </div>
                <ul className="space-y-2">
                  {inv.responsibilities.map((resp, respIndex) => (
                    <li key={respIndex} className="flex items-start">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-sm text-gray-700">{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;