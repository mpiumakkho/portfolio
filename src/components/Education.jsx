import { education } from "../data/education";
import Timeline from "./Timeline";

function Education() {
  return (
    <section id="education" className="py-16 bg-gray-50 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Education</h2>
        <Timeline items={education} />
      </div>
    </section>
  );
}

export default Education; 