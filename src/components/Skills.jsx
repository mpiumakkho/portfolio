import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  FaReact, 
  FaJs, 
  FaHtml5, 
  FaCss3Alt, 
  FaNode, 
  FaGitAlt, 
  FaDocker,
  FaFigma
} from 'react-icons/fa';
import { 
  SiTypescript, 
  SiTailwindcss, 
  SiMongodb, 
  SiExpress, 
  SiVite,
  SiPostman
} from 'react-icons/si';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', icon: FaReact, color: '#61DAFB' },
        { name: 'JavaScript', icon: FaJs, color: '#F7DF1E' },
        { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
        { name: 'HTML5', icon: FaHtml5, color: '#E34F26' },
        { name: 'CSS3', icon: FaCss3Alt, color: '#1572B6' },
        { name: 'Tailwind', icon: SiTailwindcss, color: '#06B6D4' },
        { name: 'Vite', icon: SiVite, color: '#646CFF' },
      ],
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', icon: FaNode, color: '#339933' },
        { name: 'Express', icon: SiExpress, color: '#000000' },
        { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
      ],
    },
    {
      title: 'Tools & Tech',
      skills: [
        { name: 'Git', icon: FaGitAlt, color: '#F05032' },
        { name: 'Docker', icon: FaDocker, color: '#2496ED' },
        { name: 'Figma', icon: FaFigma, color: '#F24E1E' },
        { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            My <span className="text-[#3886db]">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-[#3886db] mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Here are the technologies and tools I work with to create amazing web experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: 0.2 + categoryIndex * 0.1 }}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: 0.4 + categoryIndex * 0.1 + skillIndex * 0.05 
                    }}
                    whileHover={{ scale: 1.05 }}
                    className="flex flex-col items-center p-4 rounded-lg bg-gray-50 hover:bg-[#d1f0ff] transition-colors duration-200 cursor-pointer"
                  >
                    <skill.icon 
                      size={40} 
                      style={{ color: skill.color }}
                      className="mb-2"
                    />
                    <span className="text-sm font-medium text-gray-700">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;