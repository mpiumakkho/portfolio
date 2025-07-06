import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import { ReactTyped } from 'react-typed';
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
      className="min-h-[40vh] flex items-center bg-transparent px-4 pt-24 md:pt-0 scroll-mt-24"
    >
      <div className="w-full max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center" style={{width:'70%'}}>
        {/* Left - text (below avatar on mobile) */}
        <div className="order-2 md:order-1 text-left md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Hello, I'm <br />
            <span className="text-blue-600 whitespace-nowrap">{personalInfo.name}</span>
          </h1>
          <p className="text-2xl mb-6">
            I am{' '}
            <span className="text-blue-600 font-semibold">
              <ReactTyped
                strings={["Full-Stack Developer", "Backend Developer"]}
                typeSpeed={60}
                backSpeed={40}
                loop
              />
            </span>
          </p>
          <p className="mb-6 leading-relaxed text-lg text-gray-600">
          {personalInfo.extra}
          </p>

          {/* Download button + social icons */}
          <div className="mt-8 flex justify-center md:justify-start items-center gap-4 flex-wrap">
            <a
              href="https://drive.google.com/file/d/1MkBwiKyeD9tuafcBaZDjaAyxIcovUsua/view"
              className="border-2 border-blue-600 text-blue-600 px-5 py-2 rounded-md hover:bg-blue-600 hover:text-white transition text-sm font-medium bg-transparent"
            >
              Download CV
            </a>
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-md border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition"
              >
                <social.icon size={20} />
                <span className="sr-only">{social.label}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Right - Avatar (top on mobile) */}
        <div className="order-1 md:order-2 flex justify-center md:justify-end">
          <img
            src={personalInfo.avatar}
            alt="avatar"
            className="w-60 h-60 md:w-72 md:h-72 rounded-full object-cover shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;