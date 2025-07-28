import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function ServicesPolitiquesAssistancePage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="relative">
        <div 
          className="h-96 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
          }}
        >
          <div className="absolute inset-0 bg-blue-900 bg-opacity-60 flex items-center justify-center">
            <h1 className="text-4xl font-bold text-white text-center">
              SERVICES & POLITIQUES D'ASSISTANCE
            </h1>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-8">
              RECOVER développe et met en œuvre des politiques d'assistance 
              adaptées aux besoins spécifiques de nos clients. Nous concevons 
              des programmes d'accompagnement personnalisés qui favorisent 
              le développement durable et l'autonomisation des organisations.
            </p>
            <p className="text-gray-700 leading-relaxed mb-8">
              Nos services incluent l'élaboration de politiques sectorielles, 
              la mise en place de mécanismes de suivi-évaluation et 
              l'accompagnement dans la mise en œuvre de réformes structurelles.
            </p>
            
            <div className="bg-blue-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-semibold text-blue-900 mb-4">Nos Domaines d'Intervention</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Politiques Publiques</h4>
                  <p className="text-gray-700 text-sm">
                    Élaboration de politiques sectorielles, analyse d'impact, 
                    conception de cadres réglementaires et accompagnement 
                    dans la mise en œuvre de réformes.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Programmes d'Assistance</h4>
                  <p className="text-gray-700 text-sm">
                    Conception et gestion de programmes d'assistance technique, 
                    renforcement des capacités institutionnelles et 
                    développement de partenariats stratégiques.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Suivi & Évaluation</h4>
                  <p className="text-gray-700 text-sm">
                    Mise en place de systèmes de suivi-évaluation, 
                    développement d'indicateurs de performance et 
                    évaluation d'impact des politiques et programmes.
                  </p>
                </div>
              </div>
            </div>

            <p className="text-gray-700 leading-relaxed mb-8">
              Notre approche participative et notre expertise en développement 
              institutionnel nous permettent de créer des solutions durables 
              qui renforcent les capacités de nos partenaires et contribuent 
              au développement socio-économique.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
