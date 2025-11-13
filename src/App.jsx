import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Hero from './components/Hero';
import MyApps from './components/MyApps';
<<<<<<< HEAD
import PrivacyPolicy from './pages/privacy-policy';
import { Routes, Route } from 'react-router-dom';
=======
import DownloadResume from './components/DownloadResume';
>>>>>>> a6218a533fd2e541a0f4e63089792dbe1c253364

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white">
<<<<<<< HEAD
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
=======
      <Navbar />
      <Hero />
      <About />
      <MyApps />
      <Projects />
      <Skills />
      <Contact />
      <DownloadResume />
      <Footer />
>>>>>>> a6218a533fd2e541a0f4e63089792dbe1c253364
    </div>
  );
};

export default App;
