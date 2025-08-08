import React, { useState } from "react";
import { Button } from "@/components/ui/button";

export default function About() {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section id="about" className="relative py-20 px-4 overflow-hidden bg-gradient-to-b from-gray-50 to-gray-200">
      {/* Dynamic Background Animation */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-full h-full opacity-10 animate-pulse">
          <svg width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0 300 Q 300 100, 600 300 T 1200 300 T 1800 300"
              stroke="#3B82F6"
              strokeWidth="2"
              fill="none"
              className="animate-wave"
            />
            <path
              d="M0 400 Q 350 200, 700 400 T 1400 400 T 2000 400"
              stroke="#E5E7EB"
              strokeWidth="2"
              fill="none"
              className="animate-wave-delayed"
            />
          </svg>
        </div>
      </div>

      {/* Header Section with Parallax Effect */}
      <div className="relative max-w-6xl mx-auto text-center transform perspective-1000 rotate-x-10 transition-all duration-500">
        <div className="relative  p-10 ">
          <h2 className="text-5xl font-extrabold text-blue-900 tracking-wide mb-6 animate-fade-in">RECOVER</h2>
          <p className="text-xl text-gray-600 text-justify max-w-xl mx-auto leading-relaxed">
            <span className="font-bold">RECOVER</span> est un cabinet indépendant de conseil spécialisé dans les stratégies de développement et des activités de banque d’affaires.Il ambitionne de devenir leader en Afrique de l’Ouest aussi bien dans le conseil en stratégie d’entreprise que dans le conseil financier et l’accompagnement des Partenariats Public-Privé (PPP).Notre expertise et notre connaissance approfondie du tissu économique régional nous permettent de fournir à nos clients des conseils sur mesure et adaptés aux contraintes des marchés africains.
          </p>
        </div>
      </div>

      {/* Values Section with 3D Cards */}
      <div className="max-w-6xl mx-auto mt-16 mb-20 grid grid-cols-1 md:grid-cols-3 gap-8 perspective-1000">
        {[
          {
            title: "Excellence",
            description: "Solutions sur mesure adaptées aux spécificités des marchés africains",
            icon: (
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            ),
          },
          {
            title: "Innovation",
            description: "Approches créatives et durables pour relever chaque défi",
            icon: (
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3" />
              </svg>
            ),
          },
          {
            title: "Expertise",
            description: "Équipe de consultants seniors hautement expérimentés",
            icon: (
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <circle cx="12" cy="7" r="4" />
                <path d="M5.5 21a7.5 7.5 0 0 1 13 0" />
              </svg>
            ),
          },
        ].map((value, index) => (
          <div
            key={index}
            className={`relative bg-white rounded-2xl p-8 flex flex-col items-center shadow-xl transition-all duration-500 transform hover:scale-105 hover:rotate-y-10 ${
              hoveredCard === index ? "z-10 shadow-2xl" : "z-0"
            }`}
            onMouseEnter={() => setHoveredCard(index)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-blue-100 to-transparent opacity-0 hover:opacity-30 transition-opacity duration-300 rounded-2xl"></div>
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-blue-900 mb-6 transform transition-transform duration-300 hover:scale-110">
              {value.icon}
            </div>
            <h4 className="text-2xl font-bold text-blue-900 mb-3">{value.title}</h4>
            <p className="text-gray-600 text-base text-center">{value.description}</p>
          </div>
        ))}
      </div>

      {/* Mission Section with Floating Card */}
      <div className="max-w-5xl mx-auto mb-16 relative">
        <div className="relative bg-blue-900 text-white rounded-2xl p-10 shadow-2xl transform transition-all duration-500 hover:-translate-y-2">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-700 to-blue-400 opacity-20 rounded-2xl animate-pulse-slow"></div>
          <h3 className="text-2xl font-semibold mb-6">Notre mission</h3>
          <p className="text-lg mb-6 leading-relaxed">
            Nous accompagnons nos clients dans leurs défis stratégiques et financiers les plus complexes, en proposant des solutions innovantes et durables. Notre expertise internationale, combinée à une connaissance approfondie des spécificités locales, crée une valeur ajoutée exceptionnelle.
          </p>
          <p className="text-lg mb-6">
            RECOVER intervient auprès d’entreprises privées, d’institutions publiques et d’organisations internationales pour soutenir leurs projets de transformation, de croissance et de développement durable.
          </p>
          <div className="flex items-center gap-4">
            <div className="bg-blue-600 text-white rounded-full p-3 transform transition-transform duration-300 hover:rotate-12">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 21H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h4l2-2h4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2z" />
              </svg>
            </div>
            <p className="italic text-lg font-medium">
              Transformer les défis en opportunités, créer de la valeur durable et contribuer au développement économique de l'Afrique de l'Ouest
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action with Glow Effect */}
      <div className="flex justify-center">
        <Button
          className="relative bg-gradient-to-r from-blue-900 to-blue-500 text-white px-10 py-4 text-lg font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]"
          onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <span className="relative z-10">Découvrir nos services</span>
          <div className="absolute inset-0 bg-blue-400 opacity-0 hover:opacity-20 transition-opacity duration-300"></div>
        </Button>
      </div>

      {/* Custom CSS for Animations */}
      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .rotate-x-10 {
          transform: rotateX(10deg);
        }
        .rotate-y-10 {
          transform: rotateY(10deg);
        }
        .animate-wave {
          animation: wave 10s ease-in-out infinite;
        }
        .animate-wave-delayed {
          animation: wave 12s ease-in-out infinite;
          animation-delay: 2s;
        }
        .animate-pulse-slow {
          animation: pulse 8s ease-in-out infinite;
        }
        .animate-fade-in {
          animation: fadeIn 1.5s ease-out;
        }
        @keyframes wave {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-50px);
          }
        }
        @keyframes pulse {
          0%, 100% {
            opacity: 0.2;
          }
          50% {
            opacity: 0.4;
          }
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}