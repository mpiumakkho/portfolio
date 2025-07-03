import { motion } from 'framer-motion';
import { ReactTyped } from 'react-typed';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Hero = () => {
  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: FaTwitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: FaEnvelope, href: 'mailto:your@email.com', label: 'Email' },
  ];

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center md:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-4xl md:text-6xl font-bold text-gray-800 mb-4"
            >
              Hi There,{' '}
              <span className="text-[#3886db]">I'm</span>
              <br />
              <span className="text-[#3886db]">Your Name</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl md:text-2xl text-gray-600 mb-8 h-16"
            >
              <span>I Am Into </span>
              <span className="text-[#3886db] font-semibold">
                <ReactTyped
                  strings={[
                    'frontend development',
                    'UI/UX design',
                    'web development',
                    'React development',
                    'JavaScript',
                  ]}
                  typeSpeed={60}
                  backSpeed={40}
                  loop
                />
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 mb-8"
            >
              <a
                href="#about"
                className="bg-[#3886db] text-white px-8 py-3 rounded-lg hover:bg-[#2563eb] transition-colors duration-200 font-medium text-center"
              >
                About Me
              </a>
              <a
                href="#contact"
                className="border-2 border-[#3886db] text-[#3886db] px-8 py-3 rounded-lg hover:bg-[#3886db] hover:text-white transition-colors duration-200 font-medium text-center"
              >
                Hire Me
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex justify-center md:justify-start space-x-4"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border-2 border-[#3886db] flex items-center justify-center text-[#3886db] hover:bg-[#3886db] hover:text-white transition-colors duration-200"
                  aria-label={social.label}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Avatar */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-80 h-80 rounded-full bg-gradient-to-br from-[#d1f0ff] to-[#6eb6f3] flex items-center justify-center shadow-2xl"
            >
              <div className="w-72 h-72 rounded-full bg-white flex items-center justify-center">
                <span className="text-6xl text-[#3886db]">
                  👨‍💻
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;