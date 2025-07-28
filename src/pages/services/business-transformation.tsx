import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function BusinessTransformationPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="relative">
        <div 
          className="h-96 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
          }}
        >
          <div className="absolute inset-0 bg-blue-900 bg-opacity-60 flex items-center justify-center">
            <h1 className="text-5xl font-bold text-white text-center">
              BUSINESS TRANSFORMATION
            </h1>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-8">
              RECOVER accompagne les entreprises dans leurs projets de 
              transformation globale. Nous aidons nos clients à repenser 
              leur modèle d'affaires, à moderniser leurs processus et à 
              s'adapter aux évolutions du marché.
            </p>
            <p className="text-gray-700 leading-relaxed mb-8">
              Notre expertise couvre la transformation digitale, 
              l'optimisation organisationnelle et la conduite du changement 
              pour assurer une transition réussie vers de nouveaux modèles 
              de performance.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
