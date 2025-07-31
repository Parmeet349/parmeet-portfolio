// src/components/About.jsx
import React from 'react';

const About = () => {
  return (
    // <section id="about" data-aos="fade-up" className="py-20 px-6 flex justify-center items-center">
//     <section id="about" className="py-20 px-6 flex justify-center items-center">
// <div className="group relative cursor-pointer">
//   <div className="transition-transform duration-300 ease-in-out group-hover:scale-110 group-hover:z-50 group-hover:backdrop-blur-sm">
//             <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
//         <p className="text-lg leading-relaxed text-white/80">
//           I'm a full-stack developer passionate about building beautiful web apps using React, Node.js, and modern JavaScript technologies. I love solving real-world problems and collaborating with creative minds.
//         </p>
//       </div>
//       </div>
//     </section>
    <section id="about" className="py-20 px-6 flex justify-center items-center">
      <div className="group relative cursor-pointer">
        <div className="max-w-3xl transition-transform duration-300 ease-in-out group-hover:scale-110 group-hover:z-50 group-hover:backdrop-blur-md bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-10 text-white text-center shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
          <p className="text-lg leading-relaxed text-white/80">
            I'm a full-stack developer passionate about building beautiful web apps using React, Node.js, and modern JavaScript technologies. I love solving real-world problems and collaborating with creative minds.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
