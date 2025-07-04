import React from 'react';
import { categories } from '../data/skills';

const Skills = () => {
  return (
    <section id="skills" className="py-16 bg-transparent px-4" data-aos="fade-up">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">My Skills</h2>
        {categories.map((cat) => (
          <div key={cat.title} className="mb-12" data-aos="fade-up" data-aos-delay="100">
            <h3 className="font-bold text-gray-800 mb-4">{cat.title}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 sm:gap-10 justify-items-center">
              {cat.items.map((item) => (
                <div
                  key={item.name}
                  className="w-full h-full flex flex-col items-center justify-center space-y-3 rounded-lg border-2 shadow-sm hover:shadow-md transition bg-white/70 backdrop-blur p-8 min-h-48"
                >
                  {React.createElement(item.icon, { className: 'text-5xl md:text-6xl text-blue-600' })}
                  <span className="text-sm md:text-base font-normal text-gray-700 text-center px-1">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;