import React from 'react';
import { Code, Palette, BookOpen, Video, Database, Globe } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Development",
      skills: [
        { name: "React/TypeScript", level: 95 },
        { name: "Node.js", level: 90 },
        { name: "Python", level: 85 },
        { name: "Mobile Development", level: 88 }
      ]
    },
    {
      icon: Globe,
      title: "Web Technologies",
      skills: [
        { name: "HTML/CSS", level: 98 },
        { name: "JavaScript", level: 95 },
        { name: "Tailwind CSS", level: 92 },
        { name: "Next.js", level: 87 }
      ]
    },
    {
      icon: Database,
      title: "Backend & Database",
      skills: [
        { name: "PostgreSQL", level: 85 },
        { name: "MongoDB", level: 82 },
        { name: "API Design", level: 90 },
        { name: "Cloud Services", level: 88 }
      ]
    },
    {
      icon: Palette,
      title: "Design & Creative",
      skills: [
        { name: "UI/UX Design", level: 85 },
        { name: "Figma", level: 88 },
        { name: "Adobe Creative Suite", level: 80 },
        { name: "Graphic Design", level: 82 }
      ]
    },
    {
      icon: BookOpen,
      title: "Content Creation",
      skills: [
        { name: "Technical Writing", level: 95 },
        { name: "Creative Writing", level: 90 },
        { name: "Content Strategy", level: 85 },
        { name: "Editorial", level: 88 }
      ]
    },
    {
      icon: Video,
      title: "AudioVisual",
      skills: [
        { name: "Video Editing", level: 85 },
        { name: "Audio Production", level: 82 },
        { name: "Motion Graphics", level: 78 },
        { name: "Storytelling", level: 92 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              Skills & Expertise
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              A comprehensive toolkit spanning technical development, creative design, 
              content creation, and multimedia production.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="bg-orange-500 rounded-lg p-3 mr-4">
                    <category.icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-2xl font-semibold text-slate-800">{category.title}</h3>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-2">
                        <span className="text-slate-800 font-medium">{skill.name}</span>
                        <span className="text-slate-600">{skill.level}%</span>
                      </div>
                      <div className="bg-gray-200 rounded-full h-2">
                        <div 
                          className="h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%`, backgroundColor: '#475569' }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
