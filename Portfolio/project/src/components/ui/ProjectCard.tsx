import React from 'react';
import { motion } from 'framer-motion';

interface ProjectLink {
  icon: React.ReactNode;
  label: string;
  url: string;
}

interface ProjectCardProps {
  title: string;
  description: string;
  features: string[];
  techStack: string[];
  outcome: string;
  links?: ProjectLink[];
  icon?: React.ReactNode;
  imageUrl?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  features,
  techStack,
  outcome,
  links,
  icon,
  imageUrl,
}) => {
  return (
    <div className="rounded-2xl overflow-hidden bg-white dark:bg-gray-800 shadow-xl">
      <div className="md:grid md:grid-cols-5 md:gap-4">
        {/* Image (Left side on desktop) */}
        {imageUrl && (
          <div className="md:col-span-2 h-64 md:h-full min-h-[300px] relative">
            <img 
              src={imageUrl} 
              alt={title} 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-gray-900/70 via-gray-800/30 to-transparent flex items-end p-6">
              <div className="text-white">
                <h3 className="text-2xl font-bold mb-1">{title}</h3>
              </div>
            </div>
          </div>
        )}

        {/* Content (Right side on desktop) */}
        <div className={`p-6 ${imageUrl ? 'md:col-span-3' : 'md:col-span-5'}`}>
          <div className="flex items-center mb-4">
            {icon && <div className="text-primary-500 dark:text-primary-400 mr-2">{icon}</div>}
            {!imageUrl && <h3 className="text-2xl font-bold">{title}</h3>}
          </div>
          
          <p className="text-gray-700 dark:text-gray-300 mb-6">{description}</p>

          {/* Features */}
          <div className="mb-6">
            <h4 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Features</h4>
            <ul className="space-y-2">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-primary-500 dark:text-primary-400 mr-2">•</span>
                  <span className="text-gray-600 dark:text-gray-400">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div className="mb-6">
            <h4 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Tech Stack</h4>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Outcome */}
          <div className="mb-6">
            <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Outcome</h4>
            <p className="text-gray-600 dark:text-gray-400">{outcome}</p>
          </div>

          {/* Links */}
          {links && links.length > 0 && (
            <div className="flex flex-wrap gap-3">
              {links.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                >
                  <span className="mr-2">{link.icon}</span>
                  {link.label}
                </motion.a>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;