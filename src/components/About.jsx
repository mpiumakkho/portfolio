import { personalInfo } from "../data/personal";

const About = () => {
  return (
    <section id="about" className="pt-16 pb-10 bg-transparent px-4" data-aos="fade-up">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <div className="border-2 rounded-lg backdrop-blur bg-white/70 p-6 mb-6 shadow-sm hover:shadow-md transition text-left">
          <p className="whitespace-pre-line leading-relaxed">
            {personalInfo.careerObjective}
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;