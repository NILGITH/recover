import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function LeveeFondsRestructurationPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="relative">
        <div 
          className="h-96 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
          }}
        >
          <div className="absolute inset-0 bg-blue-900 bg-opacity-60 flex items-center justify-center">
            <h1 className="text-4xl font-bold text-white text-center">
              LEVÉE DE FONDS & RESTRUCTURATION DE DETTES
            </h1>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-8">
              Nous accompagnons nos clients de la préparation du dossier jusqu'aux négociations, 
              incluant la revue du business plan et la recherche d'investisseurs. Notre lien étroit avec 
              les fonds de private equity et family offices permet une sélection ciblée. En parallèle, 
              nous optimisons la structure de la dette pour alléger les charges, améliorer les conditions 
              de financement et libérer des liquidités.
            </p>
            <p className="text-gray-700 leading-relaxed mb-8">
              Notre expertise couvre l'ensemble du processus de levée de fonds, depuis l'évaluation 
              initiale jusqu'à la finalisation des accords, en passant par la préparation des documents 
              de présentation et l'accompagnement dans les négociations avec les investisseurs.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
