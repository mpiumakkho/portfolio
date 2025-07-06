import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import { personalInfo } from "../data/personal";

const Footer = () => {
  const socialLinks = [
    { icon: FaGithub, href: personalInfo.contact.github, label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: FaEnvelope, href: `mailto:${personalInfo.contact.email}`, label: 'Email' },
  ];

  return (
    <footer className="py-8 bg-transparent">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-white rounded-md shadow-sm hover:shadow-md transition p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} Portfolio. All rights reserved.
          </p>

          <div className="flex space-x-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-md border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition"
                aria-label={social.label}
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;