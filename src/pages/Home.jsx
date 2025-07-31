const Home = () => {
  return (
    <section id='hh' className="flex items-center justify-center min-h-screen text-center relative">
      <div className="glass p-10 rounded-xl max-w-3xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Hi, I’m <span className="text-blue-300">Parmeet Singh Banga</span>
        </h2>
        <p className="text-lg mb-6">
          Full-Stack Developer building modern, secure, and impactful web & mobile apps using React, Node.js, and more.
        </p>
        <a
          href="#projects"
          className="inline-block px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-full text-white transition"
        >
          View My Work
        </a>
      </div>
    </section>
  );
};

export default Home;