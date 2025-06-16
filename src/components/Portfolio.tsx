import React from 'react';
import { ExternalLink, Github, Smartphone, Globe, Book, Play } from 'lucide-react';

const Portfolio = () => {
  const projects = {
    apps: [
      {
        title: "TaskFlow Pro",
        description: "A comprehensive project management app with real-time collaboration, advanced analytics, and intuitive user interface.",
        image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800",
        tech: ["React Native", "Node.js", "MongoDB"],
        links: { demo: "#", github: "#" }
      },
      {
        title: "FitTracker Elite",
        description: "Personal fitness tracking application with workout planning, progress monitoring, and social features.",
        image: "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=800",
        tech: ["Flutter", "Firebase", "ML Kit"],
        links: { demo: "#", github: "#" }
      },
      {
        title: "EcoSmart Home",
        description: "IoT home automation system with energy monitoring, smart scheduling, and environmental control.",
        image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
        tech: ["React Native", "IoT", "AWS"],
        links: { demo: "#", github: "#" }
      }
    ],
    websites: [
      {
        title: "TechCorp Solutions",
        description: "Modern corporate website with dynamic content management, client portal, and integrated CRM system.",
        image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
        tech: ["Next.js", "TypeScript", "Strapi"],
        links: { demo: "#", github: "#" }
      },
      {
        title: "Artisan Marketplace",
        description: "E-commerce platform connecting local artisans with customers, featuring custom product configurators.",
        image: "https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=800",
        tech: ["React", "Node.js", "Stripe"],
        links: { demo: "#", github: "#" }
      },
      {
        title: "Digital Learning Hub",
        description: "Interactive educational platform with video streaming, progress tracking, and collaborative tools.",
        image: "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=800",
        tech: ["Vue.js", "Django", "PostgreSQL"],
        links: { demo: "#", github: "#" }
      }
    ],
    books: [
      {
        title: "Code Craft: Modern Web Development",
        description: "Comprehensive guide to building scalable web applications using modern frameworks and best practices.",
        image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800",
        tech: ["Technical Writing", "Code Examples", "Tutorials"],
        links: { demo: "#", github: "#" }
      },
      {
        title: "The Digital Storyteller",
        description: "Creative writing guide exploring narrative techniques for digital media and interactive experiences.",
        image: "https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg?auto=compress&cs=tinysrgb&w=800",
        tech: ["Creative Writing", "Digital Media", "Narrative Design"],
        links: { demo: "#", github: "#" }
      },
      {
        title: "Innovation Mindset",
        description: "Business strategy book focusing on fostering creativity and innovation in technology organizations.",
        image: "https://images.pexels.com/photos/159751/book-address-book-learning-learn-159751.jpeg?auto=compress&cs=tinysrgb&w=800",
        tech: ["Business Strategy", "Leadership", "Innovation"],
        links: { demo: "#", github: "#" }
      }
    ],
    audiovisual: [
      {
        title: "Tech Talk Series",
        description: "Educational video series covering advanced programming concepts, tutorials, and industry insights.",
        image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800",
        tech: ["Video Production", "Motion Graphics", "Audio Editing"],
        links: { demo: "#", github: "#" }
      },
      {
        title: "Product Launch Campaign",
        description: "Complete audiovisual campaign including promotional videos, motion graphics, and interactive presentations.",
        image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
        tech: ["After Effects", "Premiere Pro", "3D Animation"],
        links: { demo: "#", github: "#" }
      },
      {
        title: "Documentary: Code Stories",
        description: "Feature-length documentary exploring the human stories behind breakthrough software innovations.",
        image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800",
        tech: ["Documentary Film", "Interviews", "Post-Production"],
        links: { demo: "#", github: "#" }
      }
    ]
  };

  const sections = [
    { id: 'apps', title: 'App Building', icon: Smartphone, projects: projects.apps },
    { id: 'websites', title: 'Website Building', icon: Globe, projects: projects.websites },
    { id: 'books', title: 'Books', icon: Book, projects: projects.books },
    { id: 'audiovisual', title: 'AudioVisual', icon: Play, projects: projects.audiovisual }
  ];

  const ProjectCard = ({ project, sectionId }: { project: any, sectionId: string }) => (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
      <div className="relative overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
          <div className="p-4 w-full">
            <div className="flex space-x-2">
              <a href={project.links.demo} className="bg-white/20 backdrop-blur-sm rounded-full p-2 hover:bg-orange-500/30 transition-colors">
                <ExternalLink size={18} className="text-white" />
              </a>
              <a href={project.links.github} className="bg-white/20 backdrop-blur-sm rounded-full p-2 hover:bg-orange-500/30 transition-colors">
                <Github size={18} className="text-white" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="p-6">
        <h4 className="text-xl font-semibold text-slate-800 mb-3">{project.title}</h4>
        <p className="text-slate-600 mb-4 leading-relaxed">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech: string, index: number) => (
            <span key={index} className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="py-20">
      {sections.map((section, sectionIndex) => (
        <section key={section.id} id={section.id} className={`py-20 ${sectionIndex % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <div className="flex items-center justify-center mb-4">
                  <div className="bg-orange-500 rounded-full p-4 mr-4">
                    <section.icon className="text-white" size={32} />
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold text-slate-800">{section.title}</h2>
                </div>
                <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                  Showcasing expertise in {section.title.toLowerCase()} with innovative solutions and creative approaches.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {section.projects.map((project, index) => (
                  <ProjectCard key={index} project={project} sectionId={section.id} />
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default Portfolio;
