import React, { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Services() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const services = [
    {
      title: "Conseil Stratégique",
      image: "/images/conseil.jpg",
      link: "/services/conseil-strategique"
    },
    {
      title: "Conseil Financier",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      link: "/services/conseil-financier"
    },
    {
      title: "Partenariats Public - Privé",
      image: "/images/publicprive.jpg",
      link: "/services/partenariat-public-prive"
    },
    {
      title: "Services & Politiques d'Assistance",
      image: "/images/politique.jpg",
      link: "/services/services-politiques-assistance"
    },
    {
      title: "Efficacité opérationnelle et durabilité",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      link: "/services/efficacite-operationnelle"
    },
    {
      title: "Business Transformation",
      image: "/images/business.jpg",
      link: "/services/business-transformation"
    },
    {
      title: "Système d'information",
      image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      link: "/services/systeme-information"
    },
    {
      title: "Fusion & Acquisition",
      image: "/images/fusion.jpg",
      link: "/services/fusion-acquisition"
    },
    {
      title: "Financements Structurés",
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      link: "/services/financements-structures"
    },
    {
      title: "Levée de fonds & restructuration de dettes",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      link: "/services/levee-fonds-restructuration"
    },
    {
      title: "Affacturage & Rachat de Créances",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      link: "/services/affacturage-rachat-creances"
    },
    {
      title: "Partenariats Public - Privé",
      image: "/images/partenariat.jpg",
      link: "/services/partenariat-public-prive"
    }
  ];

  return (
    <section className="relative py-16  overflow-hidden">
      {/* Subtle Background Effect */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <svg width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20%" cy="20%" r="30%" fill="#3B82F6" fillOpacity="0.3" className="animate-pulse-slow" />
          <circle cx="80%" cy="80%" r="20%" fill="#E5E7EB" fillOpacity="0.2" className="animate-pulse-delayed" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-900 mb-4 animate-fade-in">EXPERTISES</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative rounded-xl overflow-hidden shadow-lg transition-all duration-500 transform hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] ${
                hoveredCard === index ? "z-10" : "z-0"
              }`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Card Background Image */}
              <div
                className="h-64 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url('${service.image}')` }}
              />
              {/* Glassmorphism Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 flex items-end transition-all duration-500 group-hover:bg-gradient-to-t group-hover:from-blue-800/90 group-hover:to-blue-500/50">
                <div className="p-6 w-full">
                  <h3 className="text-white font-semibold text-lg mb-3 transition-transform duration-500 group-hover:translate-y-[-10px]">
                    {service.title}
                  </h3>
                  <Button
                    className="bg-white text-blue-900 hover:bg-gray-100 rounded-full px-6 py-2 text-sm font-medium transition-all duration-300 group-hover:shadow-md"
                    onClick={() => window.location.href = service.link}
                  >
                    DÉCOUVRIR
                  </Button>
                </div>
              </div>
              {/* Glowing Border Effect */}
              <div
                className={`absolute inset-0 border-2 border-transparent rounded-xl transition-all duration-500 ${
                  hoveredCard === index ? "border-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.7)]" : ""
                }`}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Custom CSS for Animations */}
      <style jsx>{`
        .animate-pulse-slow {
          animation: pulse 10s ease-in-out infinite;
        }
        .animate-pulse-delayed {
          animation: pulse 12s ease-in-out infinite;
          animation-delay: 2s;
        }
        .animate-fade-in {
          animation: fadeIn 1.5s ease-out;
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