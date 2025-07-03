import { personalInfo } from "../data/personal";

const About = () => {
  return (
    <section id="about" className="py-16 bg-[#d1f0ff] px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="mb-6 whitespace-pre-line leading-relaxed">
          {personalInfo.careerObjective}
        </p>
        <h3 className="text-2xl font-semibold mb-2">Soft Skills</h3>
        <ul className="list-disc list-inside space-y-1">
          {personalInfo.softSkills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default About;