import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaGithub, FaExternalLinkAlt, FaReact, FaNodeJs, FaPython, FaJs, FaBrain, FaRobot } from 'react-icons/fa';
import { SiOpenai, SiMongodb, SiSocketdotio } from 'react-icons/si';

const Projects = () => {
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

  const projects = [
    {
      title: "AI Diet Planner",
      description: "An intelligent diet planning application that uses AI to create personalized meal plans based on user preferences, dietary restrictions, and health goals.",
      image: "/api/placeholder/600/400",
      liveUrl: "https://dietly-aman.vercel.app/",
      githubUrl: "https://github.com/aman947860/Dietly",
      technologies: [
        { name: "React.js", icon: FaReact, color: "text-blue-400" },
        { name: "Gemini API", icon: FaBrain, color: "text-purple-400" },
        { name: "OpenAI", icon: SiOpenai, color: "text-green-400" },
        { name: "JavaScript", icon: FaJs, color: "text-yellow-400" }
      ],
      features: [
        "Personalized meal recommendations",
        "AI-powered nutrition analysis",
        "Interactive meal planning interface",
        "Real-time dietary suggestions"
      ],
      gradient: "from-blue-500 to-purple-600"
    },
    {
      title: "Chatify - Real-time Chat App",
      description: "A full-stack real-time chat application built with MERN stack, featuring instant messaging, user authentication, and real-time notifications.",
      image: "/api/placeholder/600/400",
      liveUrl: "https://chatify-ampo.onrender.com/",
      githubUrl: "https://github.com/aman947860/chatify",
      technologies: [
        { name: "React.js", icon: FaReact, color: "text-blue-400" },
        { name: "Node.js", icon: FaNodeJs, color: "text-green-400" },
        { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
        { name: "Socket.io", icon: SiSocketdotio, color: "text-white" }
      ],
      features: [
        "Real-time messaging",
        "User authentication & authorization",
        "Online/offline status",
        "Message history & search"
      ],
      gradient: "from-green-500 to-blue-600"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
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
            Featured Projects
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ delay: index * 0.2 }}
              className="group"
            >
              <motion.div
                whileHover={{ y: -10 }}
                className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                {/* Project Image */}
                <div className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="text-4xl font-bold mb-2">{project.title.split(' ')[0]}</div>
                      <div className="text-sm opacity-80">Project Preview</div>
                    </div>
                  </div>
                  
                  {/* Overlay buttons */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/50">
                    <div className="flex gap-4">
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-white text-gray-900 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200"
                      >
                        <FaExternalLinkAlt className="text-sm" />
                        Live Demo
                      </motion.a>
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg font-medium hover:bg-gray-700 transition-colors duration-200"
                      >
                        <FaGithub className="text-sm" />
                        GitHub
                      </motion.a>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-200">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="mb-4">
                    <h4 className="text-white font-semibold mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {project.features.map((feature, featureIndex) => (
                        <motion.li
                          key={featureIndex}
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                          transition={{ delay: (index * 0.2) + (featureIndex * 0.1) + 0.5 }}
                          className="flex items-center gap-2 text-gray-300 text-sm"
                        >
                          <span className="text-blue-400">•</span>
                          <span>{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-white font-semibold mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-3">
                      {project.technologies.map((tech, techIndex) => (
                        <motion.div
                          key={tech.name}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                          transition={{ delay: (index * 0.2) + (techIndex * 0.1) + 0.8 }}
                          whileHover={{ scale: 1.05 }}
                          className="flex items-center gap-2 px-3 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors duration-200"
                        >
                          <tech.icon className={`text-lg ${tech.color}`} />
                          <span className="text-gray-300 text-sm font-medium">{tech.name}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 mt-6">
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-lg font-medium transition-all duration-200"
                    >
                      <FaExternalLinkAlt className="text-sm" />
                      View Live
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg font-medium transition-colors duration-200"
                    >
                      <FaGithub className="text-sm" />
                      Source Code
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Additional Projects Note */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mt-12"
        >
          <p className="text-gray-400 mb-4">
            More projects available on my GitHub profile
          </p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com/aman947860"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg font-medium transition-colors duration-200"
          >
            <FaGithub className="text-lg" />
            View All Projects
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
