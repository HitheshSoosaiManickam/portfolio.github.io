import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, Youtube, HandMetal } from 'lucide-react';
import ProjectCard from './ui/ProjectCard';

const Project: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="project" ref={ref} className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold mb-4 text-gray-900 dark:text-white"
          >
            Featured Project
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-700 dark:text-gray-300"
          >
            My work in Computer Vision
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <ProjectCard 
            title="Gesture-Based Volume Control System"
            description="A real-time gesture recognition system to adjust system volume using hand gestures detected by a webcam."
            icon={<HandMetal className="h-8 w-8" />}
            features={[
              "Tracks the center point between index and middle fingers.",
              "Interprets vertical hand movement as a volume slider.",
              "Smooth gesture detection and volume feedback using OpenCV."
            ]}
            techStack={["Python", "OpenCV", "MediaPipe", "pycaw"]}
            outcome="A functional prototype that showcases how AI + CV can enhance user interaction without needing touch input."
            links={[
              { icon: <Github className="h-5 w-5" />, label: "View Code", url: "https://github.com/HitheshSoosaiManickam/Gesture_Volume_Control" },
            ]}
            imageUrl="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Project;