import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Hero from './components/Hero';
import MyApps from './components/MyApps';
import PrivacyPolicy from './pages/privacy-policy';
import { Routes, Route } from 'react-router-dom';
import DownloadResume from './components/DownloadResume';

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white">
      <Routes>
        <Route path="/" element={
          <>
            <Navbar />
            <Hero />
            <About />
            <MyApps />
            <Projects />
            <Skills />
            <Contact />
            <Footer />
          </>
        } />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </div>
  );
};

export default App;
