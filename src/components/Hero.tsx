import React from "react"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-blue-800 to-blue-500 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl font-bold leading-tight">
              Un travail de sens plus noble et à terme, on est que l'espoir soit 
              pratique, sa perfection et sa tournure.
            </h1>
            <p className="text-xl text-blue-100">
              RECOVER est un cabinet de conseil indépendant spécialisé en stratégies de 
              développement et en banque d'affaires.
            </p>
            <Button 
              className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-3 text-lg font-semibold rounded-full"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
              DÉCOUVRIR
            </Button>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div 
              className="w-full max-w-2xl h-96 bg-cover bg-center rounded-lg shadow-2xl"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
