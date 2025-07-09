import React from 'react';
import { Heart, Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Github size={20} />,
      url: "https://github.com/upayanchakraborty",
      name: "GitHub"
    },
    {
      icon: <Linkedin size={20} />,
      url: "https://linkedin.com/in/upayanchakraborty",
      name: "LinkedIn"
    },
    {
      icon: <Mail size={20} />,
      url: "mailto:upayan.chakraborty@example.com",
      name: "Email"
    }
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-2">Upayan Chakraborty</h3>
            <p className="text-gray-400">Software Development Professional</p>
          </div>

          <div className="flex justify-center space-x-6 mb-8">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors p-2"
                title={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>

          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-400 text-sm flex items-center justify-center">
              © {currentYear} Upayan Chakraborty. Made with 
              <Heart size={16} className="text-red-500 mx-1" /> 
              and lots of coffee.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;