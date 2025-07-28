
import React from "react"

export default function References() {
  const references = [
    {
      name: "BDU-CI",
      description: "Banque de Développement de l'Union - Côte d'Ivoire",
      sector: "Services Financiers",
      project: "Restructuration organisationnelle et optimisation des processus",
      logo: "/images/Nosreferences/BDU-CI.jpg"
    },
    {
      name: "Biopharma",
      description: "Laboratoire pharmaceutique leader en Afrique de l'Ouest",
      sector: "Pharmaceutique",
      project: "Stratégie de développement et expansion régionale",
      logo: "/images/Nosreferences/BIOPHARMA.png"
    },
    {
      name: "CIE",
      description: "Compagnie Ivoirienne d'Électricité",
      sector: "Énergie",
      project: "Modernisation des systèmes d'information et transformation digitale",
      logo: "/images/Nosreferences/CIE.jpg"
    }
  ]

  return (
    <section id="references" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">
            RÉFÉRENCES
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Découvrez quelques-unes de nos réalisations marquantes qui témoignent 
            de notre expertise et de notre capacité à créer de la valeur pour nos clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {references.map((reference, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <img src={reference.logo} alt={reference.name + ' logo'} className="w-16 h-16 object-contain bg-white rounded-full border border-gray-200 shadow mr-4" />
                <div>
                  <h3 className="text-xl font-bold text-blue-900">{reference.name}</h3>
                  <p className="text-sm text-gray-600">{reference.sector}</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">{reference.description}</p>
              <div className="border-t pt-4">
                <p className="text-sm font-medium text-blue-900 mb-2">Projet réalisé :</p>
                <p className="text-sm text-gray-600">{reference.project}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-gray-600 mb-6">
            Ces projets illustrent notre capacité à accompagner nos clients dans leurs défis 
            les plus complexes et à générer des résultats concrets et durables.
          </p>
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-blue-900 mb-4">Notre Impact</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-900 mb-2">50+</div>
                <p className="text-gray-700">Projets réalisés</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-900 mb-2">15+</div>
                <p className="text-gray-700">Secteurs d'activité</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-900 mb-2">95%</div>
                <p className="text-gray-700">Taux de satisfaction client</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
