// src/components/Skills.jsx
import React from 'react';
import { motion } from 'framer-motion';

const skills = ["JavaScript", "React", "Node.js", "Express", "TailwindCSS", "MongoDB", "Python", "Django", "SQL"];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">Skills</h2>
      <div className="group relative cursor-pointer">
      {/* <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto"> */}
        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto max-w-3xl transition-transform duration-300 ease-in-out group-hover:scale-110 group-hover:z-50 rounded-3xl p-10 text-white text-center shadow-xl">
        {/* {skills.map((skill, index) => (
          <span
            key={index}
            className="px-4 py-2 bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-full text-sm font-medium shadow"
          >
            {skill}
          </span>
        ))} */}
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.1 }}
            className="px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white shadow-md transition"
          >
            {skill}
          </motion.div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default Skills;
