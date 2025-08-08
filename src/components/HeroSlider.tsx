import React, { useState, useEffect, useRef, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, CarouselApi } from "@/components/ui/carousel"
import { ChevronLeft, ChevronRight } from "lucide-react"

type HeroSliderProps = {
  className?: string
}

export default function HeroSlider({ className }: HeroSliderProps) {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const slides = [
    {
      id: 1,
      title: "CONSEILLER DES DIRECTIONS GENERALES",
      subtitle: "« Un métier au sens le plus noble du terme, un art qui s’apprend, se pratique, se perfectionne et se transmet »",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      buttonText: "DÉCOUVRIR",
      buttonAction: () => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }),
      expertiseContent: {
        title: "CONSEILLER DES DIRECTIONS GENERALES",
        subtitle: "",
        metrics: [
          { label: "Conseil Stratégique", level: 5 },
          { label: "Banque d'Affaires", level: 5 },
          { label: "PPP & Gouvernance", level: 4 },
          { label: "Développement Durable", level: 4 }
        ],
        stats: [
          { value: "50+", label: "Projets" },
          { value: "15+", label: "Secteurs" }
        ],
        badge: "Excellence Certifiée"
      }
    },
    {
      id: 2,
      title: "STRATEGIE POLITIQUE D’ENTREPRISE",
      subtitle: "« Assurer une cohésion parfaite entre votre stratégie d’entreprise,votre structure organisationnelle, votre processus de décision etvotre identité »",
      image: "/images/vintage.jpg",
      buttonText: "NOS SERVICES",
      buttonAction: () => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' }),
      expertiseContent: {
        title: "CONSEIL STRATÉGIQUE",
        subtitle: "Accompagnement des dirigeants",
        metrics: [
          { label: "Diagnostic Stratégique", level: 5 },
          { label: "Analyse Concurrentielle", level: 5 },
          { label: "Vision d'Entreprise", level: 4 },
          { label: "Plans d'Action", level: 5 }
        ],
        stats: [
          { value: "95%", label: "Succès" },
          { value: "20+", label: "Clients" }
        ],
        badge: "Expertise Reconnue"
      }
    },
    {
      id: 3,
      title: "BUSINESS TRANSFORMATION",
      subtitle: "« Faire du changement votre principale force » Conduite du changement – Digitalisation – Technologie - IA",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      buttonText: "CONSEIL FINANCIER",
      buttonAction: () => window.location.href = '/services/conseil-financier',
      expertiseContent: {
        title: "CONSEIL FINANCIER",
        subtitle: "Optimisation financière",
        metrics: [
          { label: "Analyse Financière", level: 5 },
          { label: "Planification Budgétaire", level: 5 },
          { label: "Structure Financière", level: 4 },
          { label: "Gestion des Risques", level: 4 }
        ],
        stats: [
          { value: "€50M+", label: "Levées" },
          { value: "30+", label: "Deals" }
        ],
        badge: "Finance Experte"
      }
    },
    {
      id: 4,
      title: "INTERMEDIATION D’AFFAIRES",
      subtitle: "« Mise en Relation, Facilitation, Médiation »",
      image: "/images/twoafrican.jpg",
      buttonText: "DÉCOUVRIR PPP",
      buttonAction: () => window.location.href = '/services/partenariat-public-prive',
      expertiseContent: {
        title: "PARTENARIATS PPP",
        subtitle: "Conseil aux gouvernements",
        metrics: [
          { label: "Pilotage de Projets PPP", level: 5 },
          { label: "Financement Public", level: 4 },
          { label: "Médiation États", level: 5 },
          { label: "Développement Durable", level: 4 }
        ],
        stats: [
          { value: "10+", label: "Projets PPP" },
          { value: "5", label: "Pays" }
        ],
        badge: "Partenaire Gouvernemental"
      }
    },
    {
      id: 5,
      title: "FINANCEMENTS STRUCTURES",
      subtitle: "« Origination, Structuration et Financement des opération d’investissement »",
      image: "/images/innov.jpg",
      buttonText: "TRANSFORMATION",
      buttonAction: () => window.location.href = '/services/business-transformation',
      expertiseContent: {
        title: "TRANSFORMATION",
        subtitle: "Innovation & modernisation",
        metrics: [
          { label: "Transformation Digitale", level: 4 },
          { label: "Optimisation Processus", level: 5 },
          { label: "Conduite du Changement", level: 4 },
          { label: "Nouveaux Modèles", level: 4 }
        ],
        stats: [
          { value: "85%", label: "Réussite" },
          { value: "25+", label: "Projets" }
        ],
        badge: "Innovation Leader"
      }
    },
   
  ]

  const startAutoPlay = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }
    intervalRef.current = setInterval(() => {
      if (api && isPlaying) {
        api.scrollNext()
      }
    }, 7000) // 8000ms = 8 secondes pour un défilement plus lent
  }, [api, isPlaying])

  const stopAutoPlay = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
  }, [])

  useEffect(() => {
    if (!api) {
      return
    }

    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  useEffect(() => {
    if (isPlaying) {
      startAutoPlay()
    } else {
      stopAutoPlay()
    }

    return () => stopAutoPlay()
  }, [isPlaying, startAutoPlay, stopAutoPlay])

  return (
    <section 
      className={`relative w-full h-full pt-0 ${className ?? ""}`}
    >
      <Carousel 
        className="w-full" 
        opts={{ align: "start", loop: true }}
        setApi={setApi}
      >
        <CarouselContent>
          {slides.map((slide) => (
            <CarouselItem key={slide.id}>
              <div className="relative h-[600px] sm:h-[700px] lg:h-[800px] w-full">
                <div 
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                  style={{
                    backgroundImage: `url('${slide.image}')`
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-800/90 " />
                
                <div className="relative z-10 h-full flex items-center">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                      <div className="space-y-4 sm:space-y-6 text-white text-center lg:text-left">
                        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight">
                          {slide.title}
                        </h1>
                        <p className="text-base sm:text-lg md:text-xl lg:text-xl text-blue-100 leading-relaxed">
                          {slide.subtitle}
                        </p>
                        <Button 
                          className="bg-white text-blue-900 hover:bg-gray-100 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
                          onClick={slide.buttonAction}
                        >
                          {slide.buttonText}
                        </Button>
                      </div>
                      
                      <div className="hidden lg:block">
                        <div className="relative">
                          <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-2xl transform rotate-3"></div>
                          <div className="relative bg-white/20 backdrop-blur-md rounded-2xl p-6 xl:p-8 border border-white/30">
                            <div className="space-y-4 xl:space-y-6">
                              <div className="text-center mb-4 xl:mb-6">
                                <h3 className="text-white font-bold text-base xl:text-lg mb-2">{slide.expertiseContent.title}</h3>
                                <p className="text-white/80 text-sm">{slide.expertiseContent.subtitle}</p>
                              </div>
                              
                              <div className="space-y-3 xl:space-y-4">
                                {slide.expertiseContent.metrics.map((metric, index) => (
                                  <div key={index} className="flex items-center justify-between">
                                    <span className="text-white/90 text-xs xl:text-sm font-medium">{metric.label}</span>
                                    <div className="flex space-x-1">
                                      {[...Array(5)].map((_, i) => (
                                        <div 
                                          key={i}
                                          className={`w-2 h-2 rounded-full ${
                                            i < metric.level ? 'bg-white/80' : 'bg-white/40'
                                          }`}
                                        ></div>
                                      ))}
                                    </div>
                                  </div>
                                ))}
                              </div>
                              
                              <div className="mt-6 xl:mt-8 pt-4 xl:pt-6 border-t border-white/20">
                                <div className="grid grid-cols-2 gap-4 text-center">
                                  {slide.expertiseContent.stats.map((stat, index) => (
                                    <div key={index}>
                                      <div className="text-xl xl:text-2xl font-bold text-white">{stat.value}</div>
                                      <div className="text-white/70 text-xs">{stat.label}</div>
                                    </div>
                                  ))}
                                </div>
                              </div>
                              
                              <div className="text-center">
                                <div className="inline-flex items-center space-x-2 bg-white/10 rounded-full px-3 xl:px-4 py-2">
                                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                                  <span className="text-white/90 text-xs font-medium">{slide.expertiseContent.badge}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        <CarouselPrevious className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md border-white/30 text-white hover:bg-white/30 hover:text-white transition-all duration-300 w-8 h-8 sm:w-10 sm:h-10">
          <ChevronLeft className="h-4 w-4 sm:h-6 sm:w-6" />
        </CarouselPrevious>
        
        <CarouselNext className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md border-white/30 text-white hover:bg-white/30 hover:text-white transition-all duration-300 w-8 h-8 sm:w-10 sm:h-10">
          <ChevronRight className="h-4 w-4 sm:h-6 sm:w-6" />
        </CarouselNext>
        
        <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <div 
              key={index}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 cursor-pointer ${
                index === current - 1 ? 'bg-white' : 'bg-white/40 hover:bg-white/60'
              }`}
              onClick={() => api?.scrollTo(index)}
            />
          ))}
        </div>

        {/* Auto-play indicator */}
        <div className="absolute top-2 sm:top-4 right-2 sm:right-4 flex items-center space-x-2 bg-white/20 backdrop-blur-md rounded-full px-2 sm:px-3 py-1 sm:py-2">
          <div className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full ${isPlaying ? 'bg-green-400 animate-pulse' : 'bg-gray-400'}`}></div>
          <span className="text-white text-xs font-medium">
            {isPlaying ? 'Auto' : 'Pause'}
          </span>
        </div>
      </Carousel>
    </section>
  )
}
