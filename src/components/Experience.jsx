import { experience } from "../data/experience";

function Experience() {
  return (
    <section id="experience" className="py-16 bg-transparent px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Experience</h2>
        <div className="space-y-6 md:space-y-8">
          {experience.map((item) => (
            <div
              key={item.id}
              className="border-2 rounded-lg backdrop-blur bg-white/70 p-6 shadow-sm hover:shadow-md transition text-left"
            >
              <h3 className="text-lg font-medium mb-1">{item.title}</h3>
              <p className="text-blue-600 mb-1">{item.company}</p>
              <span className="text-sm text-gray-500 mb-4 block">{item.period}</span>
              {item.bullets && (
                <ul className="list-disc pl-4 space-y-1 text-sm md:text-base text-gray-700">
                  {item.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience; 