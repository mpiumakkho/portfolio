import { skillGroups } from "../data/skills";

const Skills = () => {
  return (
    <section id="skills" className="py-16 bg-white px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">My Skills</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group) => (
            <div
              key={group.group}
              className="border p-4 rounded-md shadow-sm hover:shadow-md transition"
            >
              <h3 className="font-semibold mb-2">{group.group}</h3>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="bg-blue-50 text-blue-800 px-2 py-1 rounded text-sm"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;