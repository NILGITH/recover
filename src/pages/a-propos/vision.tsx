import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function NotreVisionPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <section className="relative">
        <div
          className="h-80 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1515165562835-c3b8c8df0b97?q=80&w=2070&auto=format&fit=crop')",
          }}
        >
          <div className="absolute inset-0 bg-blue-900/70 flex items-center justify-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white text-center">
              Notre VISION
            </h1>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose max-w-none">
            <p>
              Fondé en 2011 sous la bannière YSY Consulting Group par des praticiens expérimentés et des professionnels reconnus, le cabinet acquiert sa nouvelle identité RECOVER en 2015 avec l’appui d’investisseurs africains.
            </p>
            <p>
              RECOVER est un cabinet indépendant de conseil spécialisé dans les stratégies de développement et des activités de banque d’affaires. Il ambitionne de devenir leader en Afrique de l’Ouest aussi bien dans le conseil en stratégie d’entreprise que dans le conseil financier et l’accompagnement des Partenariats Public-Privé (PPP).
            </p>
            <p>
              Notre expertise et notre connaissance approfondie du tissu économique régional nous permettent de fournir à nos clients des conseils sur mesure et adaptés aux contraintes des marchés africains.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}


