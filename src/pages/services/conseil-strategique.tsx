import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function ConseilStrategiquePage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="relative">
        <div 
          className="h-96 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
          }}
        >
          <div className="absolute inset-0 bg-blue-900 bg-opacity-60 flex items-center justify-center">
            <h1 className="text-5xl font-bold text-white text-center">
              CONSEIL STRATÉGIQUE
            </h1>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-8">
              RECOVER accompagne les dirigeants dans la définition et la mise en œuvre 
              de leur stratégie d'entreprise. Nous aidons nos clients à identifier les 
              opportunités de croissance, à optimiser leur positionnement concurrentiel 
              et à développer des plans d'action stratégiques durables.
            </p>
            <p className="text-gray-700 leading-relaxed mb-8">
              Notre approche combine analyse approfondie du marché, évaluation des 
              capacités internes et vision prospective pour créer des stratégies 
              adaptées aux défis spécifiques de chaque organisation.
            </p>
            
            <div className="bg-blue-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-semibold text-blue-900 mb-4">Notre Méthodologie</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Diagnostic Stratégique</h4>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Analyse de l'environnement concurrentiel</li>
                    <li>• Évaluation des forces et faiblesses internes</li>
                    <li>• Identification des opportunités de marché</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Élaboration Stratégique</h4>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Définition de la vision et des objectifs</li>
                    <li>• Développement de plans d'action</li>
                    <li>• Mise en place d'indicateurs de performance</li>
                  </ul>
                </div>
              </div>
            </div>

            <p className="text-gray-700 leading-relaxed mb-8">
              Nos consultants seniors apportent une expertise sectorielle approfondie 
              et une connaissance des marchés africains pour garantir la pertinence 
              et l'efficacité des stratégies développées.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
