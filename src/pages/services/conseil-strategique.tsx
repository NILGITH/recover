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
            <h1 className="text-4xl font-bold text-white text-center">
              CONSEIL STRATÉGIQUE
            </h1>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-20">
              Qu’il s’agisse de définir la meilleure stratégie de croissance, de gérer une intégration post fusion, d’optimiser la logistique ou de recommander les systèmes d’information les plus appropriés, RECOVER conçoit pour ses clients des solutions uniques et sur mesure permettant d’obtenir des résultats tangibles.
            </p>

            <div className="mb-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Card 1: Stratégie & Politique d’entreprise */}
                <div className="relative group rounded-2xl overflow-hidden shadow-xl">
                  <div
                    className="h-[420px] w-full bg-cover bg-center"
                    style={{
                      backgroundImage:
                        "url('https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=2070&auto=format&fit=crop')",
                    }}
                  />

                  <div className="absolute top-4 left-4">
                    <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wide rounded-full bg-white/80 text-blue-900 backdrop-blur-md">
                      CONSEIL STRATÉGIQUE
                    </span>
                  </div>

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/10 via-black/10 to-black/40" />

                  <div className="absolute bottom-6 left-6 right-6 transition-all duration-300">
                    <div className="rounded-2xl bg-white/85 backdrop-blur-2xl p-5 shadow-lg">
                      <h3 className="mt-1 text-xl font-bold text-gray-900">
                        Stratégie & Politique d’entreprise
                      </h3>
                    </div>
                  </div>

                  <div className="absolute inset-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="h-full w-full rounded-2xl bg-white/95 backdrop-blur-md p-8 shadow-xl flex items-center justify-center text-center">
                      <p
                        className="text-gray-700 max-w-2xl"
                        style={{
                          display: '-webkit-box',
                          WebkitLineClamp: 4,
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden',
                        }}
                      >
                        Qu’il s’agisse de définir la meilleure stratégie de croissance, de gérer une intégration post fusion, d’optimiser la logistique ou de recommander les systèmes d’information les plus appropriés, RECOVER conçoit pour ses clients des solutions uniques et sur mesure permettant d’obtenir des résultats tangibles.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card 2: Stratégie concurrentielle & Efficacité opérationnelle */}
                <div className="relative group rounded-2xl overflow-hidden shadow-xl">
                  <div
                    className="h-[420px] w-full bg-cover bg-center"
                    style={{
                      backgroundImage:
                        "url('https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=2069&auto=format&fit=crop')",
                    }}
                  />

                  <div className="absolute top-4 left-4">
                    <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wide rounded-full bg-white/80 text-blue-900 backdrop-blur-md">
                      CONSEIL STRATÉGIQUE
                    </span>
                  </div>

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/10 via-black/10 to-black/40" />

                  <div className="absolute bottom-6 left-6 right-6 transition-all duration-300">
                    <div className="rounded-2xl bg-white/85 backdrop-blur-2xl p-5 shadow-lg">
                      <h3 className="mt-1 text-xl font-bold text-gray-900">
                        Stratégie concurrentielle & Efficacité opérationnelle
                      </h3>
                    </div>
                  </div>

                  <div className="absolute inset-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="h-full w-full rounded-2xl bg-white/95 backdrop-blur-md p-6 overflow-y-auto shadow-xl">
                      <h4 className="text-lg font-semibold text-blue-900 mb-3">Stratégie concurrentielle & Efficacité opérationnelle</h4>
                      <p className="text-gray-700 mb-4">
                        La politique générale et la stratégie de l’entreprise n’ont de sens que si elles sont déclinées en stratégie par domaine d’activité, dans un contexte d’efficacité opérationnelle.
                      </p>
                      <p className="text-gray-700 mb-4">
                        Pour ce faire, RECOVER vous accompagnera aussi bien sur l’analyse stratégique par produit ou « business unit », que sur l’amélioration de votre efficacité pour :
                      </p>
                      <ul className="list-disc pl-5 space-y-1 text-gray-700">
                        <li>Les opérations industrielles et la « supply chain »</li>
                        <li>La vente et le marketing</li>
                        <li>L’organisation et la gestion stratégique du capital humain</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Card 3: Business transformation */}
                <div className="relative group rounded-2xl overflow-hidden shadow-xl">
                  <div
                    className="h-[420px] w-full bg-cover bg-center"
                    style={{
                      backgroundImage:
                        "url('https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop')",
                    }}
                  />

                  <div className="absolute top-4 left-4">
                    <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wide rounded-full bg-white/80 text-blue-900 backdrop-blur-md">
                      BUSINESS TRANSFORMATION
                    </span>
                  </div>

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/10 via-black/10 to-black/40" />

                  <div className="absolute bottom-6 left-6 right-6 transition-all duration-300">
                    <div className="rounded-2xl bg-white/85 backdrop-blur-2xl p-5 shadow-lg">
                      <h3 className="mt-1 text-xl font-bold text-gray-900">
                        Business transformation
                      </h3>
                    </div>
                  </div>

                  <div className="absolute inset-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="h-full w-full rounded-2xl bg-white/95 backdrop-blur-md p-8 shadow-xl flex items-center justify-center text-center">
                      <p
                        className="text-gray-700 max-w-2xl"
                        style={{
                          display: '-webkit-box',
                          WebkitLineClamp: 4,
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden',
                        }}
                      >
                        Qu’il s’agisse de définir la meilleure stratégie de croissance, de gérer une intégration post fusion, d’optimiser la logistique ou de recommander les systèmes d’information les plus appropriés, RECOVER conçoit pour ses clients des solutions uniques et sur mesure permettant d’obtenir des résultats tangibles.
                      </p>
                    </div>
                  </div>
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
