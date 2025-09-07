import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaTrophy, FaMedal, FaStar, FaFlag, FaGraduationCap, FaFutbol } from 'react-icons/fa';

const Achievements = () => {
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

  const achievements = [
    {
      title: "Indian Air Force Selection",
      year: "2021",
      description: "Successfully cleared the rigorous selection process for the Indian Air Force, demonstrating leadership, physical fitness, and mental resilience.",
      icon: FaFlag,
      color: "from-blue-500 to-blue-600",
      category: "Military Service",
      details: [
        "Cleared initial screening and medical examinations",
        "Demonstrated exceptional leadership qualities",
        "Passed physical fitness and aptitude tests",
        "Selected among thousands of applicants"
      ]
    },
    {
      title: "All India Rank 103 - IMO",
      year: "2017",
      description: "Achieved All India Rank 103 in the International Mathematics Olympiad, showcasing exceptional mathematical problem-solving abilities.",
      icon: FaTrophy,
      color: "from-yellow-500 to-orange-600",
      category: "Academic Excellence",
      details: [
        "Ranked among top 0.1% of participants nationwide",
        "Demonstrated advanced mathematical reasoning",
        "Competed against thousands of students",
        "Recognized for exceptional problem-solving skills"
      ]
    },
    {
      title: "Cricket Captain - IIIT Bhopal",
      year: "2021-2025",
      description: "Leading the cricket team at IIIT Bhopal with notable achievements including Silver at IIM Indore and Bronze at IIIT Gwalior tournaments.",
      icon: FaFutbol,
      color: "from-green-500 to-green-600",
      category: "Sports Leadership",
      details: [
        "Silver Medal - IIM Indore Cricket Tournament",
        "Bronze Medal - IIIT Gwalior Cricket Tournament",
        "Led team to multiple tournament victories",
        "Demonstrated leadership and team management skills"
      ]
    }
  ];

  return (
    <section id="achievements" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800">
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
            Achievements & Recognition
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ delay: index * 0.2 }}
              className="group"
            >
              <motion.div
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-gray-900 rounded-xl p-6 h-full shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
              >
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`relative z-10 w-16 h-16 bg-gradient-to-br ${achievement.color} rounded-xl flex items-center justify-center mb-4`}
                >
                  <achievement.icon className="text-white text-2xl" />
                </motion.div>

                {/* Category badge */}
                <div className="relative z-10 mb-3">
                  <span className="inline-block px-3 py-1 bg-gray-700 text-gray-300 text-xs font-medium rounded-full">
                    {achievement.category}
                  </span>
                </div>

                {/* Title and Year */}
                <div className="relative z-10 mb-3">
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors duration-200">
                    {achievement.title}
                  </h3>
                  <p className="text-blue-400 font-semibold text-sm">{achievement.year}</p>
                </div>

                {/* Description */}
                <p className="relative z-10 text-gray-300 mb-4 leading-relaxed text-sm">
                  {achievement.description}
                </p>

                {/* Details */}
                <div className="relative z-10">
                  <h4 className="text-white font-semibold mb-2 text-sm">Key Highlights:</h4>
                  <ul className="space-y-1">
                    {achievement.details.map((detail, detailIndex) => (
                      <motion.li
                        key={detailIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ delay: (index * 0.2) + (detailIndex * 0.1) + 0.5 }}
                        className="flex items-start gap-2 text-gray-400 text-xs"
                      >
                        <span className="text-blue-400 mt-1">•</span>
                        <span>{detail}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-4 right-4 opacity-20">
                  <FaStar className="text-white text-lg" />
                </div>
                <div className="absolute bottom-4 right-4 opacity-20">
                  <FaMedal className="text-white text-lg" />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Additional achievements section */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-16 text-center"
        >
          <div className="bg-gray-900 rounded-xl p-8 max-w-4xl mx-auto">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center justify-center gap-4 mb-6"
            >
              <FaGraduationCap className="text-3xl text-blue-400" />
              <h3 className="text-2xl font-bold text-white">Academic Excellence</h3>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">B.Tech IT</div>
                <div className="text-gray-300 text-sm">IIIT Bhopal (2021-2025)</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">Active Learner</div>
                <div className="text-gray-300 text-sm">Continuous Skill Development</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">Tech Enthusiast</div>
                <div className="text-gray-300 text-sm">AI & Full-Stack Development</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
