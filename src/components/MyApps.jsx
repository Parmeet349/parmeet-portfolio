// src/components/MyApps.jsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const projects = [
  {
    title: "AutoLog App",
    description: "Platforms: iOS, Android, Web\n Smart fuel and maintenance tracking app for vehicle owners. Scan receipts, log fuel, and view charts.",
    image: "/AUTOLog.png",
    link: "#",
  },
  {
    title: "Password Manager",
    description: "Platforms: iOS, Android, Web\n A secure and intuitive password vault for managing your credentials across devices.",
    image: "/managerly.png",
    link: "#",
  },
  {
    title: "Get It Done",
    description: "Platforms: iOS, Android, Web\n A app that write assignments for you in your handwriting.",
    image: "/getitdone.png",
    link: "#",
  },
];

const MyApps = () => {
  const [current, setCurrent] = useState(0);

  // Autoscroll every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % projects.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % projects.length);
  };

  return (
    <section id="myapps" className="py-20 px-4 md:px-6 overflow-hidden">
      <h2 className="text-4xl font-bold text-white text-center mb-12">My Apps</h2>

      <div className="relative flex items-center justify-center w-full max-w-6xl mx-auto h-[450px]">
        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="absolute left-4 z-20 text-white hover:text-blue-400 transition"
        >
          <ChevronLeft size={40} />
        </button>

        {/* Projects Display */}
        <div className="relative w-full flex justify-center items-center">
          {projects.map((project, index) => {
            const isActive = index === current;
            const isLeft = index === (current - 1 + projects.length) % projects.length;
            const isRight = index === (current + 1) % projects.length;

            return (
              <motion.div
                key={index}
                className={`absolute transition-all duration-500 ease-in-out ${
                  isActive
                    ? "scale-100 z-20"
                    : "scale-90 blur-sm z-10"
                }`}
                initial={{ opacity: 0 }}
                animate={{ opacity: isActive || isLeft || isRight ? 1 : 0 }}
                exit={{ opacity: 0 }}
                style={{
                  transform: `translateX(${(index - current) * 100}%)`,
                  width: "100%",
                  maxWidth: "400px",
                }}
              >
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-56 object-cover"
                  />
                  <div className="p-6 text-white">
                    <h3 className="text-2xl font-semibold">{project.title}</h3>
                    <p className="text-sm text-white/80 mt-2 whitespace-pre-line">
                      {project.description}
                    </p>
                    <a
                      href={project.link}
                      className="inline-block mt-4 text-blue-400 hover:underline"
                    >
                      View Project →
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="absolute right-4 z-20 text-white hover:text-blue-400 transition"
        >
          <ChevronRight size={40} />
        </button>
      </div>
    </section>
  );
};

export default MyApps;
