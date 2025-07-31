import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Hero from './components/Hero';
import MyApps from './components/MyApps';
import DownloadResume from './components/DownloadResume';

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white">
      <Navbar />
      <Hero />
      <About />
      <MyApps />
      <Projects />
      <Skills />
      <Contact />
      <DownloadResume />
      <Footer />
    </div>
  );
};

export default App;
