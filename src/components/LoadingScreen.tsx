
import React, { useEffect, useState } from "react"
import Image from "next/image"

interface LoadingScreenProps {
  onLoadingComplete: () => void
}

export default function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(timer)
          setTimeout(() => {
            setIsVisible(false)
            setTimeout(onLoadingComplete, 300)
          }, 500)
          return 100
        }
        return prevProgress + 5
      })
    }, 20)

    return () => clearInterval(timer)
  }, [onLoadingComplete])

  if (!isVisible) return null

  return (
    <div className={`fixed inset-0 z-50 transition-opacity duration-300 ${progress >= 100 ? 'opacity-0' : 'opacity-100'}`}>
      {/* Fond minimaliste */}
      <div className="absolute inset-0 bg-white"></div>
      
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center max-w-sm mx-auto px-6">
          {/* Logo avec animation subtile */}
          <div className="mb-8 transform transition-all duration-700 ease-out" style={{
            transform: `translateY(${10 - (progress / 100) * 10}px)`,
            opacity: Math.min(1, progress / 20)
          }}>
            <div className="animate-float">
              <Image 
                src="/NOUVEAU LOGO RECOVER (1).png" 
                alt="RECOVER" 
                width={320}
                height={85}
                className="object-contain"
                priority
                quality={100}
              />
            </div>
          </div>

          {/* Barre de progression minimaliste */}
          <div className="w-full max-w-xs mx-auto mb-6">
            <div className="bg-gray-100 rounded-full h-1 overflow-hidden">
              <div 
                className="bg-blue-600 h-full rounded-full transition-all duration-300 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
            
            {/* Pourcentage discret */}
            <div className="text-center mt-3">
              <span className="text-gray-500 text-sm font-medium">
                {progress.toFixed(0)}%
              </span>
            </div>
          </div>

          {/* Texte de chargement sobre */}
          <div className="space-y-2">
            <h2 className="text-blue-900 font-semibold text-lg">
              RECOVER
            </h2>
            <p className="text-gray-600 text-sm">
              {progress < 25 && "Initialisation..."}
              {progress >= 25 && progress < 50 && "Chargement..."}
              {progress >= 50 && progress < 75 && "Préparation..."}
              {progress >= 75 && progress < 95 && "Finalisation..."}
              {progress >= 95 && "Terminé"}
            </p>
          </div>

          {/* Animation de points minimaliste */}
          <div className="flex justify-center space-x-1 mt-6">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse"
                style={{
                  animationDelay: `${i * 0.1}s`,
                  animationDuration: '0.5s'
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Animation CSS sobre */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-5px);
          }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}
