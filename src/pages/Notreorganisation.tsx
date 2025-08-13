import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Header from "@/components/Header";
import Footer from '@/components/Footer';

type TeamMember = {
  name: string
  role: string
  imageUrl: string
  bio: string[]
}

const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Désiré GABALA",
    role: "Président Directeur Général",
    imageUrl: "/images/twoafrican.jpg",
    bio: [
      "Ingénieur en Génie Mécanique diplômé de l'Ecole Polytechnique de Montréal, Désiré GABALA est également expert financier diplômé de l'École des Hautes Études Commerciales (HEC Paris) avec une spécialisation en Audit-Conseil et Expertise. Il a la particularité de cumuler 26 années d'expériences dont 22 à des postes de Direction Générale de multinationales et grandes entreprises à travers l'Afrique, dans des environnements complexes et dynamiques.",
      "Avant de créer en 2015 le cabinet de conseil RECOVER, il a commencé sa carrière dans les fusions & acquisitions et l'audit financier à Paris. Il a ensuite rapidement rejoint de grandes entreprises industrielles telles que Barry Callebaut (CI/Sénégal/Cameroun); Nestlé Central & West Africa (Suisse, CI, Ghana, Cameroun); IPS West Africa; etc. où il est très vite devenu un manager de haut niveau avec des références connues et des résultats probants en exerçant essentiellement dans le redressement, la restructuration ou le développement de leurs activités.",
      "Chez RECOVER, après le conseil en stratégie des dirigeants il a construit de bout en bout les activités de banque d'affaires et développé le conseil aux gouvernements au secteur public.",
    ],
  },
  {
    name: "Charles A. TIEMELE",
    role: "Associé",
    imageUrl: "/images/conseil.jpg",
    bio: [
      "Diplômé de l'Ecole Polytechnique Montréal en Génie Chimique et titulaire d'un Master de HEC Paris, Charles THIEMELE a commencé sa carrière professionnelle en tant qu'auditeur et professionnel des fusions et acquisitions chez Andersen et General Electric.",
      "Il a fait son entrée dans l'industrie pétrolière depuis 2004 dans diverses fonctions de négoce, et notamment en tant que Directeur du bureau Suisse de SAHARA Energy. Plus récemment il a assumé la responsabilité du négoce africain chez AOT Trading, une société de négoce mondiale spécialisée dans le pétrole et le gaz basée à Zoug (Suisse). En 5 ans a il construit une franchise très solide et rentable de ce commerçant mondial dans divers pays WAF, de la Guinée au Ghana.",
      "En 2007, Charles THIEMELE fonde et dirige Damalex SA entreprise basée à Nyon (Suisse) qui se concentre sur le conseil aux entreprises, aux gouvernements et aux sociétés commerciales dans leur stratégie et leur vision concernant l'optimisation de leur chaîne de valeur pétrolière et gazière. Damalex a également été impliquée dans 2 opérations M&A très importantes dans le secteur aval et a joué un rôle déterminant en aidant les principales sociétés WAF dans leurs activités financières, opérationnelles et commerciales.",
    ],
  },
  {
    name: "Louis VONAN TANOE",
    role: "Senior Advisor",
    imageUrl: "/images/business.jpg",
    bio: [
      "Louis TANOE est un expert avéré dans la structuration et la gestion de bout en bout des activités logistiques opérations, distributions et commerciales de l'industrie aval des hydrocarbures, en Afrique de l'Ouest et du Centre. Il est par ailleurs Vice-président non-exécutif pour les activités opérations et techniques de NHE Petroleum and Gas (PTY) SA.",
      "Après une dizaine d'année chez Shell en Afrique de l'ouest, il a œuvré au développement de MRS GROUP à travers, d'une part ses différentes fonctions de Directeur Général de MRS Oil & Gas Co; Chevron Oil Nigeria; et d'autre part le rétablissement de l'activité Chevron Aviation sur les questions de gestion des risques, de la conformité et de l'éthique des affaires.",
      "Au Ghana chez Bulk Oil Storage and Transportation (BOST) et Tema Oil Refinery (TOR) il a travaillé comme conseiller pétrole et a participé directement à la gestion commerciale, à l'approvisionnement et au négoce carburant avec des résultats exceptionnels. Louis TANOE est Ingénieur Pétrole et Moteurs de Institut Français du Pétrole, (IFP) Rueil-Malmaison (France) et Ingénieur Électricien et Mécanicien de l'Ecole Spéciale de Mécanique et d'Electricité SUDRIA, Paris, France, 1984.",
    ],
  },
  {
    name: "Théo NGONGANG OUANDJI",
    role: "Senior Advisor",
    imageUrl: "/images/innov.jpg",
    bio: [
      "Theo Ngongang-Ouandji cumule plus de 20 ans d'expérience dans les secteurs public et privé dans la planification urbaine/ régionale, la planification des transports, les politiques publiques et l'administration publique.",
      "Il est actuellement Directeur Adjoint et Chef des Politiques Publiques pour le Département des Transports de la ville de Baltimore (Maryland USA), supervisant 1200 employés, un budget d'investissement de 60 millions de dollars et un budget de fonctionnement de 300 dollars.",
      "Il est titulaire d'une Maîtrise en Administration Publique (MPA) de la Kennedy School of Government de l'Université de Harvard, d'une Maîtrise en Urbanisme et Gestion Urbaine (DESS) de l'Université de ParisXII et d'un Diplôme d'Architecte DESA de l'Ecole Spéciale d'Architecture de Paris, France. Il siège à de nombreux conseils d'administration et est diplômé de la promotion 2014 du programme Leadership du Greater Baltimore Committee.",
    ],
  },
];

export default function NotreOrganisation() {
  const router = useRouter();
  const adnRef = useRef<HTMLDivElement>(null);
  const visionRef = useRef<HTMLDivElement>(null);
  const valeursRef = useRef<HTMLDivElement>(null);
  const equipeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Attendre que la page soit chargée
    const timer = setTimeout(() => {
      const { section } = router.query;

      if (section) {
        let targetRef: React.RefObject<HTMLDivElement> | null = null;

        switch (section) {
          case 'adn':
            targetRef = adnRef;
            break;
          case 'vision':
            targetRef = visionRef;
            break;
          case 'valeurs':
            targetRef = valeursRef;
            break;
          case 'equipe':
            targetRef = equipeRef;
            break;
        }

        if (targetRef?.current) {
          // Scroll vers la section
          targetRef.current.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
          });

          // Ajouter l'animation d'highlight
          targetRef.current.classList.add('animate-highlight');

          // Retirer la classe après l'animation
          setTimeout(() => {
            targetRef.current?.classList.remove('animate-highlight');
          }, 2000);
        }
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [router.query]);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Header */}
      <section className="relative">
        <div
          className="h-80 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=2070&auto=format&fit=crop')",
          }}
        >
          <div className="absolute inset-0 bg-blue-900/70 flex items-center justify-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white text-center">
              Notre Organisation
            </h1>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Section 1: NOTRE ADN */}
        <div
          ref={adnRef}
          className="mb-16  rounded-lg p-8 transition-all duration-1000"
        >
          <h2 className="text-3xl font-bold text-blue-900 mb-12 text-center">
            Notre ADN
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2 text-center md:text-left">
              <p className="text-2xl font-bold text-black mb-8">
                « Des SOLUTIONS adaptées à vos défis »
              </p>
              <p className="text-lg text-gray-700  text-justify leading-relaxed">
                Notre ADN repose sur la conviction que chaque défi entrepreneurial nécessite une approche sur mesure. 
                Nous ne proposons pas de solutions standardisées, mais des stratégies adaptées aux spécificités de votre 
                environnement, de votre secteur et de vos objectifs. Cette approche personnalisée est au cœur de notre 
                méthodologie et de notre engagement envers l'excellence.
              </p>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80" 
                alt="Notre ADN" 
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Section 2: NOTRE VISION */}
        <div
          ref={visionRef}
          className="mb-16  rounded-lg p-8 transition-all duration-1000"
        >
          <h2 className="text-3xl font-bold text-blue-900 mb-12 text-center">
            Notre VISION
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2 text-center md:text-left">
              <p className="text-lg text-gray-700  text-justifyleading-relaxed mb-6">
                Fondé en 2011 sous la bannière YSY Consulting Group par des praticiens expérimentés et des professionnels reconnus, 
                le cabinet acquiert sa nouvelle identité RECOVER en 2015 avec l'appui d'investisseurs africains.
              </p>
              <p className="text-lg text-gray-700  text-justify leading-relaxed mb-6">
                RECOVER est un cabinet indépendant de conseil spécialisé dans les stratégies de développement et des activités 
                de banque d'affaires. Il ambitionne de devenir leader en Afrique de l'Ouest aussi bien dans le conseil en 
                stratégie d'entreprise que dans le conseil financier et l'accompagnement des Partenariats Public-Privé (PPP).
              </p>
              <p className="text-lg text-gray-700  text-justify leading-relaxed">
                Notre expertise et notre connaissance approfondie du tissu économique régional nous permettent de fournir à 
                nos clients des conseils sur mesure et adaptés aux contraintes des marchés africains.
              </p>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80" 
                alt="Notre Vision" 
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Section 3: NOS VALEURS */}
        <div
          ref={valeursRef}
          className="mb-16 p-8 transition-all duration-1000"
        >
          <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">
            Nos VALEURS
          </h2>
          <p className="text-xl font-bold text-black mb-16 text-center">
            « Les valeurs qui animent notre culture »
          </p>
          
          <div className="space-y-12 max-w-4xl mx-auto">
            <div className="relative pl-8 before:absolute before:left-0 before:top-0 before:w-2 before:h-full before:bg-blue-500 before:rounded">
              <h3 className="text-xl font-bold text-blue-900 mb-4">Intégrité / Integrity</h3>
              <p className="text-gray-700 mb-3">
                Comme l'expression du courage et de la responsabilité. Le respect des règles déontologiques et de la morale 
                gouverne toutes les missions que nous acceptons de la part de nos clients.
              </p>
              <p className="text-gray-700 mb-3">
                Nous proposons des solutions liées à nos capacités d'intervention, dans le respect permanent des lois en vigueur.
              </p>
              <p className="text-gray-600 text-sm italic">
                As an expression of courage and accountability (ref BCG.COM). Respect for ethical rules and morals govern 
                all the assignments we accept from our clients. We offer solutions linked to our intervention capacities, 
                in permanent compliance with applicable laws. (Ref Teligenx.com)
              </p>
            </div>

            <div className="relative pl-8 before:absolute before:left-0 before:top-0 before:w-2 before:h-full before:bg-red-500 before:rounded">
              <h3 className="text-xl font-bold text-blue-900 mb-4">Priorité aux clients / Clients come first</h3>
              <p className="text-gray-700 mb-3">
                Votre succès fait le nôtre. Mettre toutes nos ressources à disposition pour donner le meilleur de RECOVER 
                à chaque client. Être à l'écoute du client et de ce dont il a besoin.
              </p>
              <p className="text-gray-600 text-sm italic">
                We measure our success by our clients' success. Work with colleagues to deliver the best of RECOVER to 
                every client. Listen to what the client is saying and needs.
              </p>
            </div>

            <div className="relative pl-8 before:absolute before:left-0 before:top-0 before:w-2 before:h-full before:bg-green-500 before:rounded">
              <h3 className="text-xl font-bold text-blue-900 mb-4">Création de valeur / Value delivered</h3>
              <p className="text-gray-700 mb-3">
                Accroître la productivité sous forme de changement tangible, positif et durable, pour mieux rémunérer 
                les investisseurs.
              </p>
              <p className="text-gray-600 text-sm italic">
                Increase productivity in the form of tangible, positive and lasting change, to better reward investors.
              </p>
            </div>

            <div className="relative pl-8 before:absolute before:left-0 before:top-0 before:w-2 before:h-full before:bg-yellow-500 before:rounded">
              <h3 className="text-xl font-bold text-blue-900 mb-4">Elargir l'art du POSSIBLE / Expanding the art of the possible</h3>
              <p className="text-gray-700 mb-3">
                Parce que l'objectif n'est pas simplement d'appliquer les « best practices » mais aussi de les inventer.
              </p>
              <p className="text-gray-600 text-sm italic">
                Because the goal is not simple to apply best practices but also to invent it.
              </p>
            </div>
          </div>
        </div>

        {/* Section 4: NOTRE EQUIPE */}
        <div
          ref={equipeRef}
          className="mb-16 p-8 transition-all duration-1000"
        >
          <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">
            Notre EQUIPE
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {TEAM_MEMBERS.map((member) => (
              <div key={member.name} className="flip-card h-[480px]">
                <div className="flip-inner h-full rounded-2xl shadow-xl">
                  {/* Front */}
                  <div className="flip-front absolute inset-0 rounded-2xl overflow-hidden border border-gray-200 bg-white flex flex-col">
                    <div className="w-full h-[320px] bg-cover bg-center" style={{ backgroundImage: `url(${member.imageUrl})` }} />
                    <div className="flex-1 p-5">
                      <h3 className="text-xl font-bold text-blue-900">{member.name}</h3>
                      <p className="text-sm text-gray-600">{member.role}</p>
                    </div>
                  </div>
                  {/* Back */}
                  <div className="flip-back absolute inset-0 rounded-2xl overflow-hidden border border-gray-200 bg-white flex flex-col">
                    <div className="flex-1 p-5 text-justify overflow-y-auto">
                      <h3 className="text-lg font-semibold text-blue-900">Bio</h3>
                      {member.bio.map((paragraph, idx) => (
                        <p key={idx} className="text-gray-700 mt-3 text-sm leading-relaxed">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
      
      <style jsx>{`
        .flip-card { perspective: 1200px; }
        .flip-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transform-style: preserve-3d;
          transition: transform 0.7s ease;
        }
        .flip-card:hover .flip-inner { transform: rotateY(180deg); }
        .flip-front, .flip-back {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }
        .flip-back { transform: rotateY(180deg); }
        .animate-highlight {
          animation: highlight 2s ease-in-out;
        }
        @keyframes highlight {
          0% { background-color: transparent; }
          50% { background-color: rgba(255, 255, 0, 0.3); }
          100% { background-color: transparent; }
        }
      `}</style>
    </div>
  );
}