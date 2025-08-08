import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function NosValeursPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <section className="relative">
        <div
          className="h-80 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&w=2070&auto=format&fit=crop')",
          }}
        >
          <div className="absolute inset-0 bg-blue-900/70 flex items-center justify-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white text-center">
              Nos VALEURS
            </h1>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-blue-900 mb-6">« Les valeurs qui animent notre culture »</h2>
          <div className="space-y-10">
            <div>
              <h3 className="text-xl font-bold text-blue-900">Intégrité / Integrity</h3>
              <p className="text-gray-700 mt-2">
                Comme l’expression du courage et de la responsabilité. Le respect des règles déontologiques et de la morale gouverne toutes les missions que nous acceptons de la part de nos clients. Nous proposons des solutions liées à nos capacités d’intervention, dans le respect permanent des lois en vigueur.
              </p>
              <p className="text-gray-700 mt-2 text-sm italic">
                As an expression of courage and accountability (ref BCG.COM). Respect for ethical rules and morals govern all the assignments we accept from our clients. We offer solutions linked to our intervention capacities, in permanent compliance with applicable laws. (Ref Teligenx.com)
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-blue-900">Priorité aux clients / Clients come first</h3>
              <p className="text-gray-700 mt-2">
                Votre succès fait le nôtre. Mettre toutes nos ressources à disposition pour donner le meilleur de RECOVER à chaque client. Être à l’écoute du client et de ce dont il a besoin.
              </p>
              <p className="text-gray-700 mt-2 text-sm italic">
                We measure our success by our clients’ success. Work with colleagues to deliver the best of RECOVER to every client. Listen to what the client is saying and needs.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-blue-900">Création de valeur / Value delivered</h3>
              <p className="text-gray-700 mt-2">
                Accroître la productivité sous forme de changement tangible, positif et durable, pour mieux rémunérer les investisseurs.
              </p>
              <p className="text-gray-700 mt-2 text-sm italic">
                Increase productivity in the form of tangible, positive and lasting change, to better reward investors.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-blue-900">Élargir l’art du possible / Expanding the art of the possible</h3>
              <p className="text-gray-700 mt-2">
                Parce que l’objectif n’est pas simplement d’appliquer les « best practices » mais aussi de les inventer.
              </p>
              <p className="text-gray-700 mt-2 text-sm italic">
                Because the goal is not simply to apply best practices but also to invent them.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}


