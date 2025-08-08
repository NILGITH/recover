import Header from "@/components/Header"
import Footer from "@/components/Footer"

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
      "Ingénieur en Génie Mécanique diplômé de l’Ecole Polytechnique de Montréal, également expert financier diplômé de HEC Paris (Audit-Conseil et Expertise). 26 années d’expériences dont 22 à des postes de Direction Générale en Afrique.",
      "Carrière débutée en fusions & acquisitions et audit à Paris, puis responsabilités chez Barry Callebaut; Nestlé Central & West Africa; IPS West Africa; etc. Manager de haut niveau, spécialisé en redressement, restructuration et développement.",
      "Chez RECOVER, a bâti les activités de banque d’affaires et développé le conseil aux gouvernements et au secteur public.",
    ],
  },
  {
    name: "Louis VONAN TANOE",
    role: "Associé",
    imageUrl: "/images/business.jpg",
    bio: [
      "Expert en structuration et gestion des opérations, distributions et commerciales de l’aval pétrolier en Afrique de l’Ouest et du Centre. Vice-président non-exécutif opérations et techniques de NHE Petroleum and Gas (PTY) SA.",
      "Expérience: Shell Afrique de l’Ouest; MRS GROUP (DG MRS Oil & Gas Co; Chevron Oil Nigeria); rétablissement de l’activité Chevron Aviation (risques, conformité, éthique). Conseiller pétrole au Ghana chez BOST et TOR.",
      "Diplômes: Ingénieur Pétrole et Moteurs (IFP, France); Ingénieur Électricien & Mécanicien (Ecole SUDRIA, Paris).",
    ],
  },
  {
    name: "Charles A. TIEMELE",
    role: "Associé",
    imageUrl: "/images/conseil.jpg",
    bio: [
      "Ingénieur (École Polytechnique Montréal, Génie Chimique) et Master HEC Paris. Débuts en audit et M&A chez Andersen et General Electric.",
      "Carrière pétrolière depuis 2004 (négoce), Directeur du bureau Suisse de SAHARA Energy; responsable négoce africain chez AOT Trading (Zoug, Suisse). Franchise très solide en WAF de la Guinée au Ghana.",
      "Fondateur de Damalex SA (Nyon, Suisse) – conseil aux entreprises et gouvernements pour l’optimisation de la chaîne de valeur oil & gas; impliqué dans 2 opérations M&A majeures en aval; support clé aux sociétés WAF (financier, opérationnel, commercial).",
    ],
  },
]

export default function NotreEquipePage() {
  return (
    <div className="min-h-screen">
      <Header />

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
              Notre EQUIPE
            </h1>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white  mb-16 mt-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {TEAM_MEMBERS.map((member) => (
              <div key={member.name} className="flip-card h-[520px]">
                <div className="flip-inner h-full rounded-2xl shadow-xl">
                  {/* Front */}
                  <div className="flip-front absolute inset-0 rounded-2xl overflow-hidden border border-gray-200 bg-white flex flex-col">
                    <div className="w-full h-[380px] bg-cover bg-center" style={{ backgroundImage: `url(${member.imageUrl})` }} />
                    <div className="flex-1 p-5">
                      <h3 className="text-xl font-bold text-blue-900">{member.name}</h3>
                      <p className="text-sm text-gray-600">{member.role}</p>
                    </div>
                  </div>
                  {/* Back */}
                  <div className="flip-back absolute inset-0 rounded-2xl overflow-hidden border border-gray-200 bg-white flex flex-col">
                    <div className="flex-1 p-5 overflow-y-auto">
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
      </section>

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
      `}</style>
    </div>
  )
}


