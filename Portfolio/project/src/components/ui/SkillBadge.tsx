import React from 'react';
import { motion } from 'framer-motion';

interface SkillBadgeProps {
  name: string;
  category: string;
}

const SkillBadge: React.FC<SkillBadgeProps> = ({ name, category }) => {
  // Different color schemes based on category
  const getBadgeClasses = () => {
    switch (category) {
      case 'Programming':
        return 'bg-primary-100 text-primary-800 dark:bg-primary-900/30 dark:text-primary-300';
      case 'Libraries/Frameworks':
        return 'bg-secondary-100 text-secondary-800 dark:bg-secondary-900/30 dark:text-secondary-300';
      case 'Data & ML Tools':
        return 'bg-accent-100 text-accent-800 dark:bg-accent-900/30 dark:text-accent-300';
      case 'Version Control':
        return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300';
      case 'Others':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300';
      case 'Domains':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300';
    }
  };

  return (
    <motion.span
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getBadgeClasses()}`}
    >
      {name}
    </motion.span>
  );
};

export default SkillBadge;