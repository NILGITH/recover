import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function PartenariatPublicPrivePage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="relative">
        <div 
          className="h-96 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
          }}
        >
          <div className="absolute inset-0 bg-blue-900 bg-opacity-60 flex items-center justify-center">
            <h1 className="text-4xl font-bold text-white text-center">
              PARTENARIAT PUBLIC-PRIVÉ
            </h1>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-8">
              Intervenir dans le conseil au gouvernement est une initiative qui permet à 
              RECOVER d'atteindre ses objectifs d'engagement social et 
              d'accompagnement au développement de nos pays.
            </p>
            <p className="text-gray-700 leading-relaxed mb-8">
              RECOVER vous accompagne également dans toutes les étapes des 
              projets que vous entreprendrez dans un objectif de durabilité et 
              d'autonomie, en particulier :
            </p>
            <ul className="text-gray-700 leading-relaxed mb-8 space-y-2">
              <li>• Le Pilotage, le suivi et le financement de projet en PPP.</li>
              <li>• L'investissement et la diversification stratégique des secteurs.</li>
              <li>• La valorisation économique des ressources naturelles du pays avec 
              des outils de planification et gestion reconnus en vue d'instaurer un 
              cadre environnemental sain et productif.</li>
              <li>• La médiation et l'intermédiation avec les états.</li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
