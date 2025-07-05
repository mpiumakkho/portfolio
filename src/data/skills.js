import { FaCogs, FaCss3Alt, FaDocker, FaGitAlt, FaHtml5, FaJava, FaReact } from 'react-icons/fa';
import {
  SiAngular,
  SiApachecouchdb,
  SiApachemaven,
  SiJavascript,
  SiMysql,
  SiPostgresql,
  SiPostman,
  SiSpring,
  SiTailwindcss,
  SiTypescript
} from 'react-icons/si';

export const categories = [
  {
    title: 'Core Technologies',
    items: [
      { name: 'Java', icon: FaJava },
      { name: 'Spring Boot', icon: SiSpring },
      { name: 'PostgreSQL', icon: SiPostgresql },
      { name: 'HTML5', icon: FaHtml5 },
      { name: 'CSS3', icon: FaCss3Alt },
      { name: 'JavaScript', icon: SiJavascript },
      { name: 'RESTful APIs', icon: FaCogs },
      { name: 'Git', icon: FaGitAlt },
      { name: 'Maven', icon: SiApachemaven },
      { name: 'Postman', icon: SiPostman },
    ],
  },
  {
    title: 'Additional Skills',
    items: [
      // Frontend
      { name: 'React', icon: FaReact },
      { name: 'Angular', icon: SiAngular },
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'Tailwind CSS', icon: SiTailwindcss },
      // Backend
      // { name: 'Python', icon: SiPython },
      // { name: 'FastAPI', icon: SiFastapi },
      // { name: 'Node.js', icon: SiNodedotjs },
      // { name: 'Express.js', icon: SiExpress },
      // Database
      { name: 'MySQL', icon: SiMysql },
      { name: 'CouchDB', icon: SiApachecouchdb },
      // Tools
      { name: 'Docker', icon: FaDocker },
      { name: 'Jira', icon: FaCogs },
    ],
  },
]; 