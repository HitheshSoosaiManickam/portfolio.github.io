import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Brain, Code, BookOpen, Terminal } from 'lucide-react';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.1
      } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="about" ref={ref} className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white inline-flex items-center">
              <Brain className="h-8 w-8 mr-2 text-primary-600 dark:text-primary-400" /> 
              About Me
            </h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                I'm a final-year B.Tech Computer Science (Specialization: Artificial Intelligence) 
                student at Karunya Institute of Technology and Sciences.
              </p>
              <p>
                A passionate and curious learner in the world of AI, ML, and Computer Vision, 
                I enjoy building real-world solutions using code. Currently exploring how machines 
                can understand and respond to human gestures and interactions.
              </p>
              <div className="pt-4">
                <h3 className="text-xl font-medium mb-4 text-gray-900 dark:text-white">
                  What I Do
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="flex-shrink-0 mt-1 text-primary-600 dark:text-primary-400">
                      <Code className="h-5 w-5" />
                    </span>
                    <span className="ml-3">Develop AI and Computer Vision solutions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 mt-1 text-primary-600 dark:text-primary-400">
                      <BookOpen className="h-5 w-5" />
                    </span>
                    <span className="ml-3">Research in human-computer interaction</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 mt-1 text-primary-600 dark:text-primary-400">
                      <Terminal className="h-5 w-5" />
                    </span>
                    <span className="ml-3">Build prototypes that showcase AI capabilities</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary-200 to-secondary-200 dark:from-primary-800/30 dark:to-secondary-800/30 rounded-2xl blur opacity-20"></div>
            <div className="relative bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl">
              <div className="flex flex-col h-full">
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-2">Education</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    B.Tech in Computer Science (AI Specialization)
                  </p>
                  <p className="text-gray-500 dark:text-gray-400">
                    Karunya Institute of Technology and Sciences
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">2022 - 2026</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-2">Focus Areas</h3>
                  <div className="flex flex-wrap gap-2">
                    {['Data Science', 'Machine Learning', 'Web Technology', 'Computer Vision'].map((area) => (
                      <span 
                        key={area} 
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;