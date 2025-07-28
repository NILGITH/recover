import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function FinancementsStructuresPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="relative">
        <div 
          className="h-96 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
          }}
        >
          <div className="absolute inset-0 bg-blue-900 bg-opacity-60 flex items-center justify-center">
            <h1 className="text-4xl font-bold text-white text-center">
              FINANCEMENTS STRUCTURÉS
            </h1>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-8">
              Le métier des Financements structurés consiste à originer, conseiller, 
              structurer et financer des opérations d'investissement, reposant souvent 
              sur des sûretés réelles (Équipements, Immobilier d'Entreprise, Matières 
              Premières), ou encore des crédits complexes et structurés.
            </p>
            <p className="text-gray-700 leading-relaxed mb-8">
              Nous sélectionnons avec vous le meilleur mix de financement entre 
              Capital, Obligations Convertibles et Dettes bancaires, en fonction de la 
              situation de la Société.
            </p>
            <p className="text-gray-700 leading-relaxed mb-8">
              Nous organisons un processus structuré de mise en concurrence des 
              investisseurs afin de maximiser vos chances d'obtenir la meilleure offre du 
              marché.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
