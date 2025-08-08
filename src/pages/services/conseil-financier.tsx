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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-8">
              Notre vocation est d’accompagner nos clients dans la création de valeur à court et moyen terme, en protégeant leur patrimoine.              Nous accompagnons de nombreux clients dans le suivi financier régulier de leurs entreprises, afin d’anticiper les difficultés, de repositionner la politique financière de l’entreprise et favoriser leur prise de décision.

            </p>
         
          </div>
          
          {/* Cartes interactives Conseil Financier */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            {/* Financements Structurés */}
            <div className="relative group rounded-2xl overflow-hidden shadow-xl">
              <div
                className="h-[420px] w-full bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=2070&auto=format&fit=crop')",
                }}
              />
              <div className="absolute top-4 left-4">
                <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wide rounded-full bg-white/80 text-blue-900 backdrop-blur-md">
                  CONSEIL FINANCIER
                </span>
              </div>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/10 via-black/10 to-black/40" />
              <div className="absolute bottom-6 left-6 right-6 transition-all duration-300">
                <div className="rounded-2xl bg-white/85 backdrop-blur-2xl p-5 shadow-lg">
                  <h3 className="mt-1 text-xl font-bold text-gray-900">Financements Structurés</h3>
                </div>
              </div>
              <div className="absolute inset-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="h-full w-full rounded-2xl bg-white/95 backdrop-blur-md p-6 overflow-y-auto shadow-xl">
                  <h4 className="text-lg font-semibold text-blue-900 mb-3">Financements Structurés</h4>
                  <p className="text-gray-700 mb-4">
                    Le métier des Financements structurés consiste à originer, conseiller, structurer et financer des opérations d’investissement, reposant souvent sur des suretés réelles (Équipements, Immobilier d’Entreprise, Matières Premières), ou encore des crédits complexes et structurés.
                  </p>
                  <p className="text-gray-700 mb-4">
                    Nous sélectionnons avec vous le meilleur mix de financement entre Capital, Obligations Convertibles et Dettes bancaires, en fonction de la situation de la Société.
                  </p>
                  <p className="text-gray-700">
                    Nous organisons un processus structuré de mise en concurrence des investisseurs afin de maximiser vos chances d’obtenir la meilleure offre du marché.
                  </p>
                </div>
              </div>
            </div>

            {/* Levée de fonds & Restructuration de dettes */}
            <div className="relative group rounded-2xl overflow-hidden shadow-xl">
              <div
                className="h-[420px] w-full bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2070&auto=format&fit=crop')",
                }}
              />
              <div className="absolute top-4 left-4">
                <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wide rounded-full bg-white/80 text-blue-900 backdrop-blur-md">
                  CONSEIL FINANCIER
                </span>
              </div>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/10 via-black/10 to-black/40" />
              <div className="absolute bottom-6 left-6 right-6 transition-all duration-300">
                <div className="rounded-2xl bg-white/85 backdrop-blur-2xl p-5 shadow-lg">
                  <h3 className="mt-1 text-xl font-bold text-gray-900">Levée de fonds & restructuration de dettes</h3>
                </div>
              </div>
              <div className="absolute inset-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="h-full w-full rounded-2xl bg-white/95 backdrop-blur-md p-6 overflow-y-auto shadow-xl">
                  <h4 className="text-lg font-semibold text-blue-900 mb-3">Levée de fonds & restructuration de dettes</h4>
                  <p className="text-gray-700 mb-4">
                    Nous accompagnons nos clients sur l’ensemble du processus, de la préparation du dossier à la revue du business plan, à l’approche des investisseurs potentiels et tout au long des négociations.
                  </p>
                  <p className="text-gray-700 mb-4">
                    Notre proximité avec les fonds de « private equity » et les « family office … » nous permet d’effectuer une sélection adaptée des investisseurs potentiels.
                  </p>
                  <p className="text-gray-700">
                    La restructuration des dettes vise généralement à réduire le service de la dette afin d’obtenir des conditions de prêts et de remboursement plus favorables. L’objectif peut aussi être d’obtenir des liquidités supplémentaires pour financer les opérations ou des investissements.
                  </p>
                </div>
              </div>
            </div>

            {/* Cession, Fusion & Acquisition */}
            <div className="relative group rounded-2xl overflow-hidden shadow-xl">
              <div
                className="h-[420px] w-full bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2069&auto=format&fit=crop')",
                }}
              />
              <div className="absolute top-4 left-4">
                <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wide rounded-full bg-white/80 text-blue-900 backdrop-blur-md">
                  CONSEIL FINANCIER
                </span>
              </div>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/10 via-black/10 to-black/40" />
              <div className="absolute bottom-6 left-6 right-6 transition-all duration-300">
                <div className="rounded-2xl bg-white/85 backdrop-blur-2xl p-5 shadow-lg">
                  <h3 className="mt-1 text-xl font-bold text-gray-900">Cession, Fusion & Acquisition</h3>
                </div>
              </div>
              <div className="absolute inset-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="h-full w-full rounded-2xl bg-white/95 backdrop-blur-md p-6 overflow-y-auto shadow-xl">
                  <h4 className="text-lg font-semibold text-blue-900 mb-3">Cession, Fusion & Acquisition</h4>
                  <p className="text-gray-700">
                    RECOVER accompagne les actionnaires dans le cadre des opérations de rachats d’entreprise ou de cession d’une de leurs filiales ou de leur entreprise. Nos équipes apportent leur expertise à chaque étape clé de l’opération.
                  </p>
                </div>
              </div>
            </div>

            {/* Affacturage & Rachat de Créances */}
            <div className="relative group rounded-2xl overflow-hidden shadow-xl">
              <div
                className="h-[420px] w-full bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2070&auto=format&fit=crop')",
                }}
              />
              <div className="absolute top-4 left-4">
                <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wide rounded-full bg-white/80 text-blue-900 backdrop-blur-md">
                  CONSEIL FINANCIER
                </span>
              </div>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/10 via-black/10 to-black/40" />
              <div className="absolute bottom-6 left-6 right-6 transition-all duration-300">
                <div className="rounded-2xl bg-white/85 backdrop-blur-2xl p-5 shadow-lg">
                  <h3 className="mt-1 text-xl font-bold text-gray-900">Affacturage & Rachat de Créances</h3>
                </div>
              </div>
              <div className="absolute inset-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="h-full w-full rounded-2xl bg-white/95 backdrop-blur-md p-6 overflow-y-auto shadow-xl">
                  <h4 className="text-lg font-semibold text-blue-900 mb-3">Affacturage & Rachat de Créances</h4>
                  <p className="text-gray-700">
                    Nous assistons nos clients à optimiser la trésorerie par la vente des créances souveraines à un organisme financier.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
