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
      subtitle: "« Un métier au sens le plus noble du terme, un art qui s’apprend, se pratique, se perfectionne et se transmet »",
      image: "/images/abidjan.png",
      buttonText: "Voir plus",
      buttonAction: () => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }),
    },
    {
      id: 2,
      title: "STRATÉGIE POLITIQUE D’ENTREPRISE",
      subtitle: "« Assurer une cohésion parfaite entre votre stratégie d’entreprise.",
      image: "/images/vintage.jpg",
      buttonText: "Voir plus",
      buttonAction: () => window.location.href = '/services/conseil-strategique',
    },
    {
      id: 3,
      title: "BUSINESS TRANSFORMATION",
      subtitle: "« Faire du changement votre principale force » Conduite du changement – Digitalisation",
      image: "/images/IM 2.jpg",
      buttonText: "Voir plus",
      buttonAction: () => window.location.href = '/services/conseil-financier',
    },
    {
      id: 4,
      title: "INTERMEDIATION D’AFFAIRES",
      subtitle: "« Mise en Relation, Facilitation, Médiation »",
      image: "/images/intermediation.jpg",
      buttonText: "Voir plus",
      buttonAction: () => window.location.href = '/services/partenariat-public-prive',
    },
    {
      id: 5,
      title: "FINANCEMENTS STRUCTURES",
      subtitle: "« Origination, Structuration et Financement des opérations d’investissement »",
      image: "/images/finance.jpg",
      buttonText: "Voir plus",
      buttonAction: () => window.location.href = '/services/conseil-financier',
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
    }, 8000)
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
              <div className="relative h-[900px] sm:h-[800px] lg:h-[960px] w-full">
                <div 
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                  style={{
                    backgroundImage: `url('${slide.image}')`
                  }}
                />
                <div className="absolute inset-0  " />
                
                <div className="relative z-10 h-full flex items-center justify-center">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <div className="space-y-4 sm:space-y-6 text-white mt-28 text-center">
                      <h1 className="text-5xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-bold leading-tight">
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