// src/components/Footer.jsx
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="text-center text-white py-6 border-t border-white/10 backdrop-blur-md bg-white/5"
    >
        &copy; {new Date().getFullYear()} Parmeet Singh Banga. Built with ❤️ using React & Tailwind.
    </motion.footer>
  );
};

export default Footer;
