import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function FusionAcquisitionPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="relative">
        <div 
          className="h-96 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
          }}
        >
          <div className="absolute inset-0 bg-blue-900 bg-opacity-60 flex items-center justify-center">
            <h1 className="text-5xl font-bold text-white text-center">
              FUSION & ACQUISITION
            </h1>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-8">
              RECOVER accompagne les actionnaires dans le cadre des opérations de 
              rachats d'entreprise ou de cession d'une de leurs filiales ou de leur 
              entreprise. Nos équipes apportent leur expertise à chaque étape clé de 
              l'opération pour maximiser la création de valeur.
            </p>
            <p className="text-gray-700 leading-relaxed mb-8">
              Notre approche méthodique couvre l'évaluation d'entreprise, la due diligence, 
              la structuration des transactions et l'accompagnement post-acquisition pour 
              assurer le succès de l'intégration et la création de valeur durable.
            </p>
            
            <div className="bg-blue-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-semibold text-blue-900 mb-4">Notre Processus M&A</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Phase Préparatoire</h4>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Évaluation stratégique et financière</li>
                    <li>• Identification des cibles potentielles</li>
                    <li>• Structuration de l'opération</li>
                    <li>• Préparation des documents de vente</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Exécution & Finalisation</h4>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Due diligence approfondie</li>
                    <li>• Négociation des termes et conditions</li>
                    <li>• Finalisation juridique et réglementaire</li>
                    <li>• Accompagnement post-acquisition</li>
                  </ul>
                </div>
              </div>
            </div>

            <p className="text-gray-700 leading-relaxed mb-8">
              Notre expertise sectorielle et notre connaissance approfondie des marchés 
              africains nous permettent d'identifier les meilleures opportunités et de 
              structurer des opérations créatrices de valeur pour toutes les parties prenantes.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
