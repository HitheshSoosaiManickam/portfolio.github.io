import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SkillBadge from './ui/SkillBadge';

const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const skillCategories = [
    {
      name: 'Programming',
      skills: ['Python', 'JavaScript', 'HTML', 'CSS'],
    },
    {
      name: 'Libraries/Frameworks',
      skills: ['OpenCV', 'MediaPipe', 'pycaw'],
    },
    {
      name: 'Data & ML Tools',
      skills: ['Excel', 'scikit-learn'],
    },
    {
      name: 'Version Control',
      skills: ['Git', 'GitHub'],
    },
    {
      name: 'Others',
      skills: ['Jupyter Notebook', 'VS Code', 'Google Colab'],
    },
    {
      name: 'Domains',
      skills: ['Machine Learning', 'Computer Vision', 'Web Development'],
    },
  ];

  return (
    <section id="skills" ref={ref} className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold mb-4 text-gray-900 dark:text-white"
          >
            Technical Skills
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-700 dark:text-gray-300"
          >
            Technologies and tools I work with
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.name}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2">
                  {category.name}
                </h3>
                <div className="flex flex-wrap gap-2 mt-3">
                  {category.skills.map((skill) => (
                    <SkillBadge key={skill} name={skill} category={category.name} />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;