import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import { personalInfo } from "../data/personal";

const socialLinks = [
  { icon: FaGithub, href: 'https://github.com/mpiumakkho', label: 'GitHub' },
  { icon: FaLinkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: FaEnvelope, href: 'mailto:marutpiumakkho@gmail.com', label: 'Email' },
];

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center text-center bg-white px-4"
    >
      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        Hi There, I'm <span className="text-blue-600">{personalInfo.name}</span>
      </h1>
      <p className="text-2xl mb-6">{personalInfo.title}</p>
      <a
        href="#contact"
        className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
      >
        Hire Me
      </a>
      <div className="mt-8 flex gap-4">
        {socialLinks.map((social) => (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-gray-600 hover:text-blue-600"
          >
            <social.icon />
            <span className="sr-only">{social.label}</span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Hero;