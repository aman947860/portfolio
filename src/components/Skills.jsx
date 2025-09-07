import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
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

  const skillCategories = [
    {
      title: "Languages",
      color: "from-blue-500 to-blue-600",
      skills: [
        { name: "C", level: 85 },
        { name: "C++", level: 90 },
        { name: "Java", level: 88 },
        { name: "Python", level: 92 },
        { name: "JavaScript", level: 95 },
        { name: "TypeScript", level: 88 },
        { name: "HTML/CSS", level: 90 }
      ]
    },
    {
      title: "Frameworks",
      color: "from-green-500 to-green-600",
      skills: [
        { name: "React.js", level: 95 },
        { name: "Node.js", level: 88 },
        { name: "Express.js", level: 85 },
        { name: "Spring Boot", level: 80 },
        { name: "Tailwind CSS", level: 92 },
        { name: "Bootstrap", level: 85 },
        { name: "Material UI", level: 88 },
        { name: "Chrome Extensions", level: 82 }
      ]
    },
    {
      title: "Databases",
      color: "from-purple-500 to-purple-600",
      skills: [
        { name: "MongoDB", level: 90 },
        { name: "DynamoDB", level: 85 }
      ]
    },
    {
      title: "Cloud & DevOps",
      color: "from-orange-500 to-orange-600",
      skills: [
        { name: "AWS (S3, Lambda, SES)", level: 85 },
        { name: "Git", level: 92 },
        { name: "GitHub", level: 90 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
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
            Skills & Technologies
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ delay: categoryIndex * 0.2 }}
              className="bg-gray-800 rounded-xl p-6 hover:bg-gray-750 transition-colors duration-300"
            >
              <h3 className={`text-xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r ${category.color}`}>
                {category.title}
              </h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: (categoryIndex * 0.2) + (skillIndex * 0.1) }}
                    className="group"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 font-medium group-hover:text-white transition-colors duration-200">
                        {skill.name}
                      </span>
                      <span className="text-gray-400 text-sm">
                        {skill.level}%
                      </span>
                    </div>
                    
                    <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ 
                          delay: (categoryIndex * 0.2) + (skillIndex * 0.1) + 0.5,
                          duration: 1,
                          ease: "easeOut"
                        }}
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full relative`}
                      >
                        <motion.div
                          animate={{ 
                            boxShadow: [
                              "0 0 0px rgba(59, 130, 246, 0)",
                              "0 0 10px rgba(59, 130, 246, 0.5)",
                              "0 0 0px rgba(59, 130, 246, 0)"
                            ]
                          }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="absolute inset-0 rounded-full"
                        />
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Section */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-8">Additional Skills</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Problem Solving", "Data Structures & Algorithms", "System Design",
              "API Development", "RESTful Services", "Version Control",
              "Agile Development", "Team Collaboration", "Code Review",
              "Testing & Debugging", "Performance Optimization", "Security Best Practices"
            ].map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-full text-sm font-medium transition-colors duration-200 cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
