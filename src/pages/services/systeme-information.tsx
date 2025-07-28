import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function SystemeInformationPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="relative">
        <div 
          className="h-96 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
          }}
        >
          <div className="absolute inset-0 bg-blue-900 bg-opacity-60 flex items-center justify-center">
            <h1 className="text-5xl font-bold text-white text-center">
              SYSTÈME D'INFORMATION
            </h1>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-8">
              RECOVER conseille les organisations dans la conception, 
              l'implémentation et l'optimisation de leurs systèmes d'information. 
              Nous aidons nos clients à aligner leur infrastructure technologique 
              avec leurs objectifs stratégiques pour améliorer leur performance 
              opérationnelle et leur compétitivité.
            </p>
            <p className="text-gray-700 leading-relaxed mb-8">
              Notre approche couvre l'audit des systèmes existants, 
              la définition d'architectures cibles et l'accompagnement 
              dans la mise en œuvre de solutions technologiques innovantes, 
              sécurisées et évolutives.
            </p>
            
            <div className="bg-blue-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-semibold text-blue-900 mb-4">Nos Services SI</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Audit & Stratégie</h4>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Audit de l'existant technologique</li>
                    <li>• Définition de la stratégie SI</li>
                    <li>• Architecture d'entreprise</li>
                    <li>• Gouvernance des données</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Mise en Œuvre</h4>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Gestion de projets SI</li>
                    <li>• Intégration de systèmes</li>
                    <li>• Migration de données</li>
                    <li>• Formation et accompagnement</li>
                  </ul>
                </div>
              </div>
            </div>

            <p className="text-gray-700 leading-relaxed mb-8">
              Notre expertise technique combinée à notre connaissance des enjeux 
              métier nous permet de proposer des solutions SI adaptées qui 
              contribuent réellement à la performance et à la transformation 
              digitale de nos clients.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
