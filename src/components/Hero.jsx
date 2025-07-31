// src/components/Hero.jsx
import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center text-center px-4 relative z-10">
    <div className="group relative cursor-pointer">
      <div className="max-w-3xl transition-transform duration-300 ease-in-out group-hover:scale-110 group-hover:z-50 group-hover:backdrop-blur-md bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-10 text-white text-center shadow-xl">
         <img
          // src="/avatar.png"
          // Image is in assets folder
          // src={require('../assets/avatar.png')}
          src="/avatar.ico"
          alt="Parmeet"
          className="w-32 h-32 rounded-full mx-auto border-4 border-white/20 shadow-md"
        />
        <h1 className="text-4xl md:text-5xl font-bold text-white mt-6">Parmeet Singh Banga</h1>
        <p className="text-lg md:text-xl text-white/80 mt-4">
          Full-Stack Developer | JavaScript | React | Node.js
        </p>
        <div className="mt-6 flex gap-4 justify-center">
          <a
            href="#projects"
            className="bg-white/10 hover:bg-white/20 text-white px-6 py-2 rounded-full border border-white/20 backdrop-blur-sm"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full"
          >
            Contact Me
          </a>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Hero;
