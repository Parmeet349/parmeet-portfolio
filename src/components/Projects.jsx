// src/components/Projects.jsx
import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "Smart Wearable Glasses",
    description: "IoT-based assistive glasses with gesture and voice control features. Built using Arduino + JS.",
    image: "/smartspecs.png",
    link: "#",
  },
  {
    title: "Weather App",
    description: "Minimal weather web app using OpenWeatherMap API with React and dynamic styling.",
    image: "/weather.png",
    link: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Projects</h2>
      <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {/* {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-6 text-white shadow-xl"
          >
            <img
              src={project.image}
              alt={project.title}
              className="rounded-xl w-full h-40 object-cover mb-4 border border-white/10"
            />
            <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
            <p className="text-white/80">{project.description}</p>
            <a
              href={project.link}
              className="inline-block mt-4 text-blue-400 hover:underline"
            >
              View Project →
            </a>
          </div>
        ))} */}
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05 }}
            className="relative bg-white/10 rounded-2xl overflow-hidden backdrop-blur-md shadow-lg border border-white/10 transition-all duration-300 hover:z-10"
          >
            <img src={project.image} alt={project.title} className="w-full h-52 object-cover" />
            <div className="p-6 text-white">
              <h3 className="text-2xl font-semibold">{project.title}</h3>
              <p className="text-sm text-white/80 mt-2">{project.description}</p>
              <a
                href={project.link}
                className="inline-block mt-4 text-blue-400 hover:underline"
              >
                View Project →
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
