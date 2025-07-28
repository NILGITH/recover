import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function EfficaciteOperationnellePage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="relative">
        <div 
          className="h-96 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
          }}
        >
          <div className="absolute inset-0 bg-blue-900 bg-opacity-60 flex items-center justify-center">
            <h1 className="text-4xl font-bold text-white text-center">
              EFFICACITÉ OPÉRATIONNELLE & DURABILITÉ
            </h1>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-8">
              RECOVER aide les organisations à optimiser leurs processus 
              opérationnels tout en intégrant les principes de durabilité. 
              Nous identifions les inefficacités, proposons des solutions 
              d'amélioration et accompagnons la mise en œuvre de pratiques 
              durables qui créent de la valeur à long terme.
            </p>
            <p className="text-gray-700 leading-relaxed mb-8">
              Notre approche combine excellence opérationnelle et responsabilité 
              environnementale pour créer de la valeur à long terme tout en 
              réduisant l'impact écologique des activités et en améliorant 
              la performance globale de l'organisation.
            </p>
            
            <div className="bg-blue-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-semibold text-blue-900 mb-4">Notre Approche Intégrée</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Excellence Opérationnelle</h4>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Optimisation des processus métier</li>
                    <li>• Réduction des coûts opérationnels</li>
                    <li>• Amélioration de la productivité</li>
                    <li>• Gestion de la qualité</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Durabilité</h4>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Stratégies environnementales</li>
                    <li>• Économie circulaire</li>
                    <li>• Responsabilité sociale</li>
                    <li>• Reporting ESG</li>
                  </ul>
                </div>
              </div>
            </div>

            <p className="text-gray-700 leading-relaxed mb-8">
              Nos consultants expérimentés utilisent des méthodologies éprouvées 
              pour transformer les opérations de nos clients, en créant des 
              synergies entre performance économique et impact environnemental 
              positif, garantissant ainsi une croissance durable et responsable.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
