import { experience } from "../data/experience";
import Timeline from "./Timeline";

function Experience() {
  return (
    <section id="experience" className="py-16 bg-gray-50 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Experience</h2>
        <Timeline items={experience} />
      </div>
    </section>
  );
}

export default Experience; 