import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, Linkedin, Mail, Send } from 'lucide-react';
import ContactForm from './ui/ContactForm';

const Contact: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const socialLinks = [
    {
      name: 'GitHub',
      icon: <Github className="h-6 w-6" />,
      url: 'https://github.com/HitheshSoosaiManickam',
      color: 'hover:text-gray-800 dark:hover:text-white'
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin className="h-6 w-6" />,
      url: 'https://www.linkedin.com/in/hithesh-soosaimanickam/',
      color: 'hover:text-blue-600 dark:hover:text-blue-400'
    },
    {
      name: 'Email',
      icon: <Mail className="h-6 w-6" />,
      url: 'mailto:hitheshsm04@gmail.com',
      color: 'hover:text-red-500 dark:hover:text-red-400'
    },
  ];

  return (
    <section id="contact" ref={ref} className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold mb-4 text-gray-900 dark:text-white"
          >
            Get In Touch
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-700 dark:text-gray-300"
          >
            Have a question or want to work together?
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden"
          >
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                Contact Me
              </h3>
              
              <ContactForm />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden p-8 h-full">
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                Connect With Me
              </h3>
              
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Feel free to reach out through any of the platforms below. I'm always 
                open to discussing new projects, creative ideas, or opportunities to be 
                part of your vision.
              </p>
              
              <div className="space-y-6">
                <div className="flex flex-col space-y-4">
                  {socialLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center text-gray-600 dark:text-gray-400 ${link.color} transition-colors`}
                    >
                      <div className="rounded-full bg-gray-100 dark:bg-gray-700 p-3 mr-4">
                        {link.icon}
                      </div>
                      <span className="text-lg">{link.name}</span>
                    </a>
                  ))}
                </div>
              </div>

              <div className="mt-8 p-6 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                <h4 className="font-medium text-gray-900 dark:text-white mb-2 flex items-center">
                  <Send className="h-4 w-4 mr-2" /> Response Time
                </h4>
                <p className="text-gray-700 dark:text-gray-300">
                  I typically respond within 24-48 hours. For urgent inquiries, please indicate 
                  so in your message.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;