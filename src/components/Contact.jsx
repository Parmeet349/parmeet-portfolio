// src/components/Contact.jsx
import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 text-center">
      <div className="max-w-xl mx-auto bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-10 text-white shadow-xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Get in Touch</h2>
        <p className="text-white/80 mb-6">
          Have a project idea or want to collaborate? Let’s connect!
        </p>
        <a
          href="mailto:parmeet349@gmail.com"
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full inline-block"
        >
          Email Me
        </a>
      </div>
    </section>
  );
};

export default Contact;
