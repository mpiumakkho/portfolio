import { education } from "../data/education";

function Education() {
  return (
    <section id="education" className="py-8 bg-transparent px-4" data-aos="fade-up">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Education</h2>
        <div className="space-y-6 md:space-y-8">
          {education.map((item, idx) => (
            <div
              key={item.id}
              data-aos="fade-up"
              data-aos-delay={idx * 100}
              className="border-2 rounded-lg backdrop-blur bg-white/70 p-6 shadow-sm hover:shadow-md transition text-left"
            >
              <h3 className="text-lg font-medium mb-1">{item.degree}</h3>
              <p className="text-blue-600 mb-1">{item.school}</p>
              <span className="text-sm text-gray-500">{item.period}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education; 