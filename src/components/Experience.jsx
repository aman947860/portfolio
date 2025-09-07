import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaCalendarAlt, FaMapMarkerAlt, FaBriefcase } from 'react-icons/fa';

const Experience = () => {
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

  const experiences = [
    {
      company: "RedyHire",
      position: "Software Developer Intern",
      duration: "2025 – Present",
      location: "Remote",
      description: "Working as a Software Developer Intern, contributing to the development of innovative hiring solutions.",
      achievements: [
        "Developed Dynamic Mail Template system for automated email communications",
        "Built Referrer Tracking Form with real-time analytics and reporting",
        "Created Chrome Extension automation tools to streamline recruitment processes",
        "Collaborated with cross-functional teams to deliver high-quality software solutions",
        "Implemented modern web technologies including React.js, Node.js, and cloud services"
      ],
      technologies: ["React.js", "Node.js", "JavaScript", "Google Custom Search API", "RESTful APIs", "Gemini API", "Chrome Extensions", "Dynmodb", "S3", "AWS"]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800">
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
            Professional Experience
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"
          />
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 via-purple-500 to-blue-400"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full border-4 border-gray-800 z-10"></div>

              {/* Content card */}
              <div className={`ml-12 md:ml-0 md:w-1/2 ${
                index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
              }`}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg">
                      <FaBriefcase className="text-white text-lg" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{exp.position}</h3>
                      <p className="text-blue-400 font-semibold">{exp.company}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 mb-4 text-gray-400">
                    <div className="flex items-center gap-2">
                      <FaCalendarAlt className="text-sm" />
                      <span className="text-sm">{exp.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaMapMarkerAlt className="text-sm" />
                      <span className="text-sm">{exp.location}</span>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="text-white font-semibold mb-2">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <motion.li
                          key={achIndex}
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                          transition={{ delay: (index * 0.2) + (achIndex * 0.1) + 0.5 }}
                          className="flex items-start gap-2 text-gray-300 text-sm"
                        >
                          <span className="text-blue-400 mt-1">•</span>
                          <span>{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-white font-semibold mb-2">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                          transition={{ delay: (index * 0.2) + (techIndex * 0.1) + 0.8 }}
                          className="px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs rounded-full"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}

          {/* Education section */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="relative flex items-center mb-12"
          >
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-green-400 to-blue-500 rounded-full border-4 border-gray-800 z-10"></div>
            
            <div className="ml-12 md:ml-0 md:w-1/2 md:pr-8">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">B.Tech Information Technology</h3>
                    <p className="text-green-400 font-semibold">Indian Institute of Information Technology, Bhopal</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 mb-4 text-gray-400">
                  <div className="flex items-center gap-2">
                    <FaCalendarAlt className="text-sm" />
                    <span className="text-sm">2021 – 2025</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaMapMarkerAlt className="text-sm" />
                    <span className="text-sm">Bhopal, India</span>
                  </div>
                </div>

                <p className="text-gray-300 mb-4 leading-relaxed">
                  Pursuing Bachelor of Technology in Information Technology with focus on software development, 
                  data structures, algorithms, and modern web technologies.
                </p>

                <div className="flex flex-wrap gap-2">
                  {["Data Structures", "Algorithms", "Software Engineering", "Database Systems", "Computer Networks", "Operating Systems"].map((subject, index) => (
                    <motion.span
                      key={subject}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ delay: index * 0.1 + 1 }}
                      className="px-3 py-1 bg-gradient-to-r from-green-500 to-blue-600 text-white text-xs rounded-full"
                    >
                      {subject}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
