// src/components/DownloadResume.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";

const DownloadResume = () => {
  return (
    <section id="resume" className="py-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-10 shadow-2xl text-white relative overflow-hidden group"
      >
        {/* Background glow */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }}
          transition={{ duration: 1 }}
          className="absolute -top-20 -left-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-20 group-hover:opacity-30 transition duration-500"
        />

        <h2 className="text-3xl md:text-4xl font-bold mb-4">Get My Resume</h2>
        <p className="text-white/80 mb-8">
          Interested in working together or just want to learn more about my experience? Download my resume below.
        </p>

        <motion.a
          href="https://drive.google.com/file/d/1RQw3kshTkG-ZRP6RyRkZEytTC53baI--/view?usp=drivesdk"
          download
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-2xl backdrop-blur-md"
        >
          <FaDownload className="text-lg" />
          Download Resume
        </motion.a>
      </motion.div>
    </section>
  );
};

export default DownloadResume;
