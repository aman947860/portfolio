import React from 'react';
import profileImg from '../assets/profile.jpeg';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import profile from '../assets/profile.jpeg';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4"
          >
            About Me
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="text-center lg:text-left"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="w-64 h-64 mx-auto lg:mx-0 mb-8 relative"
            >
              <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-500 rounded-full p-1">
                <div className="w-full h-full bg-gray-800 rounded-full overflow-hidden">
                  <img
                    src={profileImg}
                    alt="Aman Singh profile"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border-2 border-transparent border-t-blue-400 rounded-full"
              />
            </motion.div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-6"
          >
            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-300 leading-relaxed"
            >
              I'm a passionate software developer currently pursuing my B.Tech in Information Technology 
              at IIIT Bhopal (2021-2025). My journey in technology began with a fascination for solving 
              complex problems through code.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-300 leading-relaxed"
            >
              Currently, I'm working as a Software Developer Intern at <span className="text-blue-400 font-semibold">RedyHire</span>, 
              where I'm gaining hands-on experience in building scalable web applications and working with 
              modern development frameworks.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-300 leading-relaxed"
            >
              My interests span across full-stack development, artificial intelligence, and cloud computing. 
              I love exploring new technologies and building innovative solutions that make a real impact.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 pt-4"
            >
              <div className="bg-gray-700 px-4 py-2 rounded-lg">
                <span className="text-blue-400 font-semibold">Education:</span>
                <span className="text-gray-300 ml-2">IIIT Bhopal (2021-2025)</span>
              </div>
              <div className="bg-gray-700 px-4 py-2 rounded-lg">
                <span className="text-green-400 font-semibold">Current Role:</span>
                <span className="text-gray-300 ml-2">Software Developer Intern</span>
              </div>
              <div className="bg-gray-700 px-4 py-2 rounded-lg">
                <span className="text-purple-400 font-semibold">Company:</span>
                <span className="text-gray-300 ml-2">RedyHire</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
