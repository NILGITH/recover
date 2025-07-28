import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function ConseilFinancierPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="relative">
        <div 
          className="h-96 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
          }}
        >
          <div className="absolute inset-0 bg-blue-900 bg-opacity-60 flex items-center justify-center">
            <h1 className="text-5xl font-bold text-white text-center">
              CONSEIL FINANCIER
            </h1>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-8">
              RECOVER offre des services de conseil financier complets pour accompagner 
              les entreprises et organisations dans leurs décisions stratégiques. 
              Notre expertise couvre l'analyse financière, la planification budgétaire, 
              l'optimisation de la structure financière et la gestion des risques.
            </p>
            <p className="text-gray-700 leading-relaxed mb-8">
              Nous aidons nos clients à améliorer leur performance financière, 
              à sécuriser leurs investissements et à développer des stratégies 
              financières durables adaptées à leurs objectifs de croissance.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
