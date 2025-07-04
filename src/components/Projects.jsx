import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaGithub } from 'react-icons/fa';
import { projects } from '../data/projects';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="work" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl ext-5xl font-bold text-gray-800 mb-6">
            Personal Projects
          </h2>
          <div className="w-24 h-1 bg-[#3886db] mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              {/* Project Image/Icon */}
              <div className="h-48 bg-gradient-to-br from-[#d1f0ff] to-[#6eb6f3] flex items-center justify-center">
                <span className="text-6xl">{project.image}</span>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-[#d1f0ff] text-[#3886db] px-2 py-1 rounded-md text-xs font-normal"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex space-x-4">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-[#3886db] hover:text-[#2563eb] transition-colors duration-200"
                  >
                    {/* <FaExternalLinkAlt size={16} />
                    <span className="text-sm font-normal">Live Demo</span> */}
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors duration-200"
                  >
                    <FaGithub size={16} />
                    <span className="text-sm font-normal">Code</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;