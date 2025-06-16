import React from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-800 via-slate-700 to-black text-white flex items-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-72 h-72 bg-orange-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-orange-400 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 animate-fadeInUp">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Creative
              <span className="bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent"> Developer</span>
              <br />& Storyteller
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Building innovative apps, stunning websites, compelling books, and engaging audiovisual content. 
              Bringing ideas to life through code and creativity.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fadeInUp">
            <button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl">
              View My Work
            </button>
            <button className="border-2 border-white/30 hover:border-orange-400/60 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 backdrop-blur-sm hover:bg-orange-500/10">
              Get In Touch
            </button>
          </div>

          <div className="flex justify-center space-x-6 mb-12 animate-fadeInUp">
            <a href="#" className="p-3 rounded-full bg-white/10 hover:bg-orange-500/20 transition-all duration-300 transform hover:scale-110">
              <Github size={24} />
            </a>
            <a href="#" className="p-3 rounded-full bg-white/10 hover:bg-orange-500/20 transition-all duration-300 transform hover:scale-110">
              <Linkedin size={24} />
            </a>
            <a href="#" className="p-3 rounded-full bg-white/10 hover:bg-orange-500/20 transition-all duration-300 transform hover:scale-110">
              <Mail size={24} />
            </a>
          </div>

          <div className="animate-bounce">
            <ArrowDown size={32} className="mx-auto text-white/60" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
