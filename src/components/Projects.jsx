import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaGithub, FaExternalLinkAlt, FaReact, FaNodeJs, FaPython, FaJs, FaBrain, FaRobot, FaSearch, FaCopy, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { SiOpenai, SiMongodb, SiSocketdotio, SiGoogle, SiTailwindcss, SiVite } from 'react-icons/si';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);

  // Navigation functions
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + 1 >= projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex - 1 < 0 ? projects.length - 2 : prevIndex - 1
    );
  };

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
      title: "ORBIT AI",
      tagline: "AI with web search assistant",
      description: "A sophisticated AI-powered search assistant that intelligently routes user queries through Gemini AI and Google Custom Search API. Features smart classification system that determines whether queries require AI-only responses, web search results, or both, optimizing response accuracy and relevance.",
      image: "/api/placeholder/600/400",
      liveUrl: "https://orbit-aman.vercel.app/",
      githubUrl: "https://github.com/aman947860/orbit",
      technologies: [
        { name: "React.js", icon: FaReact, color: "text-blue-400" },
        { name: "Vite", icon: SiVite, color: "text-purple-400" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-400" },
        { name: "Gemini API", icon: FaBrain, color: "text-purple-400" },
        { name: "Google Search", icon: SiGoogle, color: "text-green-400" },
        { name: "JavaScript", icon: FaJs, color: "text-yellow-400" }
      ],
      features: [
        "Smart query classification & routing",
        "Real-time web search integration",
        "Markdown rendering support",
        "Persistent chat history",
        "Responsive design with animations",
        "Copy-to-clipboard functionality"
      ],
      gradient: "from-purple-500 to-pink-600",
      isFeatured: true
    },
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
            My Best Projects
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"
          />
        </motion.div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Arrows */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-full shadow-lg transition-all duration-200"
          >
            <FaChevronLeft className="text-xl" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-full shadow-lg transition-all duration-200"
          >
            <FaChevronRight className="text-xl" />
          </motion.button>

          {/* Projects Carousel */}
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-8"
              animate={{ 
                x: `-${currentIndex * (100 / 2)}%` 
              }}
              transition={{ 
                duration: 0.8, 
                ease: "easeInOut" 
              }}
              style={{ width: `${(projects.length * 100) / 2}%` }}
            >
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  className="group flex-shrink-0"
                  style={{ width: `${100 / projects.length}%` }}
                >
                  <motion.div
                    whileHover={{ y: -10 }}
                    className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-[600px] flex flex-col"
                  >
                    {/* Project Image */}
                    <div className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden flex-shrink-0`}>
                      <div className="absolute inset-0 bg-black/20"></div>
                      
                      {/* Featured Badge */}
                      {project.isFeatured && (
                        <div className="absolute top-4 left-4 z-10">
                          <span className="inline-flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold rounded-full shadow-lg">
                            <FaRobot className="text-xs" />
                            FEATURED
                          </span>
                        </div>
                      )}
                      
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center text-white">
                          <div className="text-4xl font-bold mb-2">{project.title}</div>
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
                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-200">
                        {project.title}
                        {project.isFeatured && (
                          <span className="ml-2 text-xs bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-2 py-1 rounded-full font-bold">
                            BEST PROJECT
                          </span>
                        )}
                      </h3>
                      
                      {project.tagline && (
                        <p className="text-blue-400 text-sm font-medium mb-3 italic">
                          {project.tagline}
                        </p>
                      )}
                      
                      <p className="text-gray-300 mb-4 leading-relaxed text-sm flex-1">
                        {project.description}
                      </p>

                      {/* Features */}
                      <div className="mb-4">
                        <h4 className="text-white font-semibold mb-2 text-sm">Key Features:</h4>
                        <ul className="space-y-1">
                          {project.features.slice(0, 3).map((feature, featureIndex) => (
                            <motion.li
                              key={featureIndex}
                              initial={{ opacity: 0, x: -20 }}
                              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                              transition={{ delay: (index * 0.2) + (featureIndex * 0.1) + 0.5 }}
                              className="flex items-center gap-2 text-gray-300 text-xs"
                            >
                              <span className="text-blue-400">•</span>
                              <span>{feature}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div className="mb-4">
                        <h4 className="text-white font-semibold mb-2 text-sm">Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.slice(0, 4).map((tech, techIndex) => (
                            <motion.div
                              key={tech.name}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                              transition={{ delay: (index * 0.2) + (techIndex * 0.1) + 0.8 }}
                              whileHover={{ scale: 1.05 }}
                              className="flex items-center gap-1 px-2 py-1 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors duration-200"
                            >
                              <tech.icon className={`text-sm ${tech.color}`} />
                              <span className="text-gray-300 text-xs font-medium">{tech.name}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-2 mt-auto">
                        <motion.a
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-lg font-medium transition-all duration-200 text-sm"
                        >
                          <FaExternalLinkAlt className="text-xs" />
                          View Live
                        </motion.a>
                        <motion.a
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg font-medium transition-colors duration-200 text-sm"
                        >
                          <FaGithub className="text-xs" />
                          Source Code
                        </motion.a>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: projects.length - 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  currentIndex === index
                    ? 'bg-blue-500 scale-125'
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
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
