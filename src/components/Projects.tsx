import React from 'react';
import { Github, ExternalLink, Calendar, Users, Code } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "AgroCare: Plant Disease Detection & Crop Recommendation",
      type: "Academic Project",
      period: "April 2025 - Present",
      github: "https://github.com/upayanchakraborty/AgroCare.git",
      description: "AI-based smart agriculture solution integrating plant disease detection and crop recommendation using CNNs and ML models for real-time decision-making.",
      technologies: ["Python", "PyTorch", "Flask", "CNN", "IoT", "Raspberry Pi", "Edge Computing"],
      highlights: [
        "Identifies 39+ plant diseases from leaf images with treatment suggestions",
        "Real-time soil analysis using IoT sensors (NPK, pH, temperature, humidity)",
        "Deployed on edge computing devices like Raspberry Pi and Jetson Nano",
        "Promotes inclusivity with external IoT devices for farmers without smartphones",
        "Open-source development for global collaboration"
      ],
      color: "green"
    },
    {
      title: "Get a Doc - Doctor Appointment Website",
      type: "Freelancing",
      period: "March 2025 - May 2025",
      github: "https://github.com/upayanchakraborty/Get-a-doc.git",
      description: "Full-stack healthcare application using Spring Boot and Java for seamless doctor-patient interactions.",
      technologies: ["Java 17+", "Spring Boot", "MySQL", "JPA/Hibernate", "JUnit", "Mockito"],
      highlights: [
        "RESTful APIs for CRUD operations on doctor and patient records",
        "Comprehensive appointment scheduling and tracking system",
        "Robust database interactions with data integrity and scalability",
        "High code coverage through unit and integration testing",
        "Clear MVC architecture for maintainability"
      ],
      color: "blue"
    },
    {
      title: "Smart Parking System Using IoT & YOLOv5",
      type: "Freelancing",
      period: "February 2025 - April 2025",
      description: "IoT-based smart parking system with machine learning integration for intelligent vehicle detection and automated access control.",
      technologies: ["NodeMCU", "ESP32-CAM", "YOLOv5", "IR Sensors", "EdgeImpulse", "Web Dashboard"],
      highlights: [
        "90%+ accuracy in vehicle detection using YOLOv5 model",
        "95% accuracy in parking slot availability identification",
        "Response time of <1 second for vehicle identification",
        "Automated gate control reducing manual intervention by 40%",
        "Real-time web dashboard for parking monitoring"
      ],
      color: "purple"
    },
    {
      title: "Neuro-Symbolic AI for Common-Sense Detection",
      type: "Research Project",
      period: "May 2024 - July 2024",
      github: "https://github.com/upayanchakraborty/Neuro-Symbolic-AI-for-Common-sense-detection.git",
      organization: "Forum of Scientists, Engineers and Technologists (FOSET)",
      description: "Neuro-symbolic AI model combining neural networks with logical reasoning for explainable common-sense detection.",
      technologies: ["Python", "Neural Networks", "Logical Neural Networks", "Symbolic Logic", "AI/ML"],
      highlights: [
        "Integrated Logical Neural Networks (LNNs) for explainable inference",
        "Translated real-world inputs into symbolic logic",
        "Robust performance with less data compared to purely neural models",
        "Enhanced explainability through symbolic reasoning paths",
        "Counterfactual and causal reasoning capabilities"
      ],
      color: "orange"
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'green':
        return {
          bg: 'bg-green-50',
          border: 'border-green-200',
          accent: 'text-green-600',
          badge: 'bg-green-100 text-green-800'
        };
      case 'blue':
        return {
          bg: 'bg-blue-50',
          border: 'border-blue-200',
          accent: 'text-blue-600',
          badge: 'bg-blue-100 text-blue-800'
        };
      case 'purple':
        return {
          bg: 'bg-purple-50',
          border: 'border-purple-200',
          accent: 'text-purple-600',
          badge: 'bg-purple-100 text-purple-800'
        };
      case 'orange':
        return {
          bg: 'bg-orange-50',
          border: 'border-orange-200',
          accent: 'text-orange-600',
          badge: 'bg-orange-100 text-orange-800'
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
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A showcase of innovative projects spanning AI/ML, IoT, web development, and research.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const colors = getColorClasses(project.color);
            return (
              <div key={index} className={`${colors.bg} ${colors.border} border rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow`}>
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className={`${colors.badge} px-3 py-1 rounded-full text-sm font-medium`}>
                        {project.type}
                      </span>
                      {project.organization && (
                        <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
                          <Users size={12} className="inline mr-1" />
                          {project.organization}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center text-gray-600 mb-4">
                      <Calendar size={16} className="mr-2" />
                      <span className="text-sm">{project.period}</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-gray-600 hover:text-gray-900 hover:bg-white rounded-lg transition-colors"
                      >
                        <Github size={20} />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-gray-700 mb-4 text-sm leading-relaxed">{project.description}</p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2 flex items-center">
                    <Code size={16} className="mr-2" />
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-white text-gray-700 px-2 py-1 rounded-md text-xs border border-gray-200">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Highlights</h4>
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, highlightIndex) => (
                      <li key={highlightIndex} className="flex items-start">
                        <div className={`w-1.5 h-1.5 rounded-full ${colors.accent.replace('text-', 'bg-')} mt-2 mr-3 flex-shrink-0`}></div>
                        <span className="text-gray-700 text-xs leading-relaxed">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;