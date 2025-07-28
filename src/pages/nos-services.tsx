import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Button } from "@/components/ui/button"

export default function NosServicesPage() {
  const services = [
    {
      title: "Conseil Stratégique",
      description: "Accompagnement des dirigeants dans la définition et la mise en œuvre de leur stratégie d'entreprise pour maximiser la création de valeur.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      link: "/services/conseil-strategique",
      features: [
        "Diagnostic stratégique approfondi",
        "Analyse concurrentielle",
        "Définition de la vision d'entreprise",
        "Plans d'action stratégiques"
      ]
    },
    {
      title: "Conseil Financier",
      description: "Services de conseil financier complets pour accompagner les entreprises dans leurs décisions stratégiques et optimiser leur performance financière.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      link: "/services/conseil-financier",
      features: [
        "Analyse financière approfondie",
        "Planification budgétaire",
        "Optimisation de structure financière",
        "Gestion des risques financiers"
      ]
    },
    {
      title: "Partenariats Public-Privé",
      description: "Conseil au gouvernement et accompagnement des projets PPP dans un objectif de durabilité et d'autonomie pour le développement.",
      image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      link: "/services/partenariat-public-prive",
      features: [
        "Pilotage et financement de projets PPP",
        "Investissement stratégique sectoriel",
        "Valorisation des ressources naturelles",
        "Médiation avec les états"
      ]
    },
    {
      title: "Services & Politiques d'Assistance",
      description: "Développement et mise en œuvre de politiques d'assistance adaptées aux besoins spécifiques des organisations.",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      link: "/services/services-politiques-assistance",
      features: [
        "Élaboration de politiques sectorielles",
        "Programmes d'assistance technique",
        "Systèmes de suivi-évaluation",
        "Renforcement des capacités"
      ]
    },
    {
      title: "Efficacité Opérationnelle & Durabilité",
      description: "Optimisation des processus opérationnels tout en intégrant les principes de durabilité pour créer de la valeur à long terme.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      link: "/services/efficacite-operationnelle",
      features: [
        "Optimisation des processus métier",
        "Stratégies environnementales",
        "Économie circulaire",
        "Reporting ESG"
      ]
    },
    {
      title: "Business Transformation",
      description: "Accompagnement des entreprises dans leurs projets de transformation globale et modernisation de leurs processus.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      link: "/services/business-transformation",
      features: [
        "Transformation digitale",
        "Optimisation organisationnelle",
        "Conduite du changement",
        "Nouveaux modèles de performance"
      ]
    },
    {
      title: "Système d'Information",
      description: "Conseil dans la conception, l'implémentation et l'optimisation des systèmes d'information pour améliorer la performance opérationnelle.",
      image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      link: "/services/systeme-information",
      features: [
        "Audit des systèmes existants",
        "Architecture d'entreprise",
        "Intégration de systèmes",
        "Gouvernance des données"
      ]
    },
    {
      title: "Fusion & Acquisition",
      description: "Accompagnement des actionnaires dans les opérations de rachats d'entreprise ou de cession pour maximiser la création de valeur.",
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      link: "/services/fusion-acquisition",
      features: [
        "Évaluation d'entreprise",
        "Due diligence approfondie",
        "Structuration des transactions",
        "Accompagnement post-acquisition"
      ]
    },
    {
      title: "Financements Structurés",
      description: "Origination, conseil et structuration d'opérations d'investissement complexes reposant sur des sûretés réelles.",
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      link: "/services/financements-structures",
      features: [
        "Structuration de financements complexes",
        "Mix optimal Capital/Dette",
        "Mise en concurrence d'investisseurs",
        "Optimisation des conditions"
      ]
    },
    {
      title: "Levée de Fonds & Restructuration",
      description: "Accompagnement complet de la préparation du dossier aux négociations, incluant l'optimisation de la structure de dette.",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      link: "/services/levee-fonds-restructuration",
      features: [
        "Préparation de business plans",
        "Recherche d'investisseurs ciblée",
        "Restructuration de dettes",
        "Négociation avec investisseurs"
      ]
    },
    {
      title: "Affacturage & Rachat de Créances",
      description: "Optimisation de la trésorerie par la vente de créances souveraines à des organismes financiers spécialisés.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      link: "/services/affacturage-rachat-creances",
      features: [
        "Évaluation de portefeuilles de créances",
        "Négociation avec organismes financiers",
        "Optimisation des conditions de rachat",
        "Gestion des flux de trésorerie"
      ]
    }
  ]

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="relative">
        <div 
          className="h-96 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
          }}
        >
          <div className="absolute inset-0 bg-blue-900 bg-opacity-70 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-5xl font-bold mb-4">
                NOS SERVICES
              </h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Découvrez notre gamme complète de services de conseil stratégique et financier 
                adaptés aux défis des entreprises et organisations en Afrique de l'Ouest
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">
              NOTRE EXPERTISE À VOTRE SERVICE
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              RECOVER combine une expertise internationale avec une connaissance approfondie 
              des marchés africains pour offrir des solutions sur mesure qui créent de la valeur durable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div 
                  className="h-48 bg-cover bg-center relative"
                  style={{ backgroundImage: `url('${service.image}')` }}
                >
                  <div className="absolute inset-0 bg-blue-900 bg-opacity-60"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-blue-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-2 text-sm">Points clés :</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="text-xs text-gray-600 flex items-start">
                          <span className="text-blue-600 mr-2">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button 
                    className="w-full bg-blue-900 text-white hover:bg-blue-800 rounded-full"
                    onClick={() => window.location.href = service.link}
                  >
                    EN SAVOIR PLUS
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-blue-50 rounded-lg p-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">
                POURQUOI CHOISIR RECOVER ?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold text-blue-900 mb-2">Expertise Reconnue</h4>
                  <p className="text-gray-600 text-sm">
                    Plus de 50 projets réalisés avec succès dans 15 secteurs d'activité différents
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012-2v-1a2 2 0 012-2h1.945M15 8a3 3 0 11-6 0 3 3 0 016 0zm-3 7h3l-3-7-3 7h3z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold text-blue-900 mb-2">Approche Locale</h4>
                  <p className="text-gray-600 text-sm">
                    Connaissance approfondie des marchés africains et des spécificités locales
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold text-blue-900 mb-2">Équipe Expérimentée</h4>
                  <p className="text-gray-600 text-sm">
                    Consultants seniors avec une expertise internationale et sectorielle
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
