import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function AffacturageRachatCreancesPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="relative">
        <div 
          className="h-96 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
          }}
        >
          <div className="absolute inset-0 bg-blue-900 bg-opacity-60 flex items-center justify-center">
            <h1 className="text-4xl font-bold text-white text-center">
              AFFACTURAGE & RACHAT DE CRÉANCES
            </h1>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-8">
              Nous assistons nos clients à optimiser la trésorerie par la vente des 
              créances souveraines à un organisme financier. Cette solution permet 
              d'améliorer immédiatement les flux de trésorerie et de réduire les 
              risques d'impayés.
            </p>
            <p className="text-gray-700 leading-relaxed mb-8">
              Notre expertise en affacturage couvre l'analyse des créances, la 
              négociation avec les organismes financiers et l'optimisation des 
              conditions de cession pour maximiser les bénéfices de nos clients.
            </p>
            <div className="bg-blue-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-semibold text-blue-900 mb-4">Nos Services d'Affacturage</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Évaluation et analyse des portefeuilles de créances</li>
                <li>• Négociation avec les organismes financiers spécialisés</li>
                <li>• Optimisation des conditions de rachat</li>
                <li>• Accompagnement dans la gestion des flux de trésorerie</li>
                <li>• Conseil en recouvrement et gestion des impayés</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
