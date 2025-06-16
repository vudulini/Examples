import React from 'react';
import { Award, Code, Heart, Lightbulb } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Technical Excellence",
      description: "Passionate about clean code, innovative solutions, and cutting-edge technologies."
    },
    {
      icon: Lightbulb,
      title: "Creative Problem Solving",
      description: "Transforming complex challenges into elegant, user-friendly solutions."
    },
    {
      icon: Heart,
      title: "User-Centered Design",
      description: "Creating experiences that delight users and drive meaningful engagement."
    },
    {
      icon: Award,
      title: "Quality Focused",
      description: "Committed to delivering exceptional results that exceed expectations."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              About Me
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              A multi-disciplinary creative professional with expertise spanning digital development, 
              content creation, and storytelling across multiple mediums.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-3xl font-bold text-slate-800 mb-6">
                Crafting Digital Experiences
              </h3>
              <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                With a passion for innovation and a keen eye for detail, I specialize in creating 
                comprehensive digital solutions that bridge technology and creativity. From mobile 
                applications to web platforms, books to audiovisual content, I bring stories to life 
                through multiple channels.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed">
                My approach combines technical expertise with creative storytelling, ensuring every 
                project not only functions flawlessly but also resonates with its intended audience. 
                I believe in the power of technology to transform ideas into impactful experiences.
              </p>
            </div>
            <div className="relative">
              <div className="bg-orange-500 rounded-2xl p-8 text-white">
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold mb-2">50+</div>
                    <div className="text-orange-200">Projects Completed</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-2">5+</div>
                    <div className="text-orange-200">Years Experience</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-2">20+</div>
                    <div className="text-orange-200">Published Works</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-2">100+</div>
                    <div className="text-orange-200">Happy Clients</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((item, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="bg-orange-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="text-white" size={28} />
                  </div>
                  <h4 className="text-xl font-semibold text-slate-800 mb-4">{item.title}</h4>
                  <p className="text-slate-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
