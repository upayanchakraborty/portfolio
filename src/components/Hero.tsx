import React from 'react';
import { ArrowDown, Github, Linkedin, Mail, MapPin } from 'lucide-react';

interface HeroProps {
  onScrollToSection: (section: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onScrollToSection }) => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Starry Night Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-900 via-purple-900 to-blue-900">
        {/* Stars */}
        <div className="absolute inset-0">
          {[...Array(100)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-white rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 3 + 1}px`,
                height: `${Math.random() * 3 + 1}px`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${Math.random() * 2 + 2}s`
              }}
            />
          ))}
        </div>
        
        {/* Crescent Moon */}
        <div className="absolute top-20 right-20 w-16 h-16">
          <div className="relative w-full h-full">
            <div className="absolute inset-0 bg-yellow-200 rounded-full shadow-lg"></div>
            <div className="absolute inset-0 bg-indigo-900 rounded-full" style={{
              clipPath: 'circle(50% at 70% 50%)'
            }}></div>
          </div>
        </div>
        
        {/* Shooting Stars */}
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-white rounded-full opacity-0 animate-ping" style={{
          animationDelay: '2s',
          animationDuration: '3s'
        }}></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-white rounded-full opacity-0 animate-ping" style={{
          animationDelay: '5s',
          animationDuration: '3s'
        }}></div>
      </div>
      
      {/* Content Overlay */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden shadow-2xl border-4 border-white/20 backdrop-blur-sm">
              <img 
                src="/photo_6303242627667051503_y.png" 
                alt="Upayan Chakraborty" 
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-lg">
              Upayan Chakraborty
            </h1>
            <p className="text-xl sm:text-2xl text-blue-200 mb-2 drop-shadow-md">
              Software Development Professional
            </p>
            <div className="flex items-center justify-center text-blue-300 mb-8 drop-shadow-md">
              <MapPin size={20} className="mr-2" />
              <span>Kolkata, West Bengal</span>
            </div>
          </div>
          
          <p className="text-lg text-blue-100 max-w-3xl mx-auto mb-8 leading-relaxed drop-shadow-md backdrop-blur-sm bg-white/10 p-6 rounded-xl border border-white/20">
            Experienced in software development life cycle, IoT, data science, and coding with internship 
            background from Edunet Foundation and Globsyn. Possesses strong analytical and problem-solving 
            skills, eager to be part of a dynamic engineering team.
          </p>

          <div className="flex justify-center space-x-4 mb-12">
            <a
              href="https://github.com/upayanchakraborty"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/20 backdrop-blur-sm text-white rounded-full hover:bg-white/30 transition-all duration-300 border border-white/30 shadow-lg"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/in/upayanchakraborty"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/20 backdrop-blur-sm text-white rounded-full hover:bg-white/30 transition-all duration-300 border border-white/30 shadow-lg"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:upayan.chakraborty@example.com"
              className="p-3 bg-white/20 backdrop-blur-sm text-white rounded-full hover:bg-white/30 transition-all duration-300 border border-white/30 shadow-lg"
            >
              <Mail size={20} />
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onScrollToSection('projects')}
              className="px-8 py-3 bg-white/20 backdrop-blur-sm text-white rounded-lg hover:bg-white/30 transition-all duration-300 font-medium border border-white/30 shadow-lg"
            >
              View My Work
            </button>
            <button
              onClick={() => onScrollToSection('contact')}
              className="px-8 py-3 border-2 border-white/50 text-white rounded-lg hover:bg-white/20 hover:border-white/70 transition-all duration-300 font-medium backdrop-blur-sm shadow-lg"
            >
              Get In Touch
            </button>
          </div>

          <div className="mt-16 animate-bounce">
            <button
              onClick={() => onScrollToSection('about')}
              className="text-white/70 hover:text-white transition-colors drop-shadow-lg"
            >
              <ArrowDown size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;