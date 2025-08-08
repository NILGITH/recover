import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Link from "next/link"

export default function AProposIndexPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <section className="relative">
        <div
          className="h-80 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1522071901873-411886a10004?q=80&w=2070&auto=format&fit=crop')",
          }}
        >
          <div className="absolute inset-0 bg-blue-900/70 flex items-center justify-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white text-center">
              A PROPOS DE NOUS
            </h1>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link
              href="/a-propos/organisation"
              className="group rounded-2xl border border-gray-200 hover:border-blue-300 p-6 shadow-sm hover:shadow-md transition-all"
            >
              <h3 className="text-xl font-bold text-blue-900 mb-2">Notre ADN</h3>
              <p className="text-sm text-gray-600">
                « Des SOLUTIONS adaptées à vos défis »
              </p>
            </Link>
            <Link
              href="/a-propos/vision"
              className="group rounded-2xl border border-gray-200 hover:border-blue-300 p-6 shadow-sm hover:shadow-md transition-all"
            >
              <h3 className="text-xl font-bold text-blue-900 mb-2">Notre Vision</h3>
              <p className="text-sm text-gray-600">Cabinet indépendant créé en 2011 devenu RECOVER en 2015.</p>
            </Link>
            <Link
              href="/a-propos/valeurs"
              className="group rounded-2xl border border-gray-200 hover:border-blue-300 p-6 shadow-sm hover:shadow-md transition-all"
            >
              <h3 className="text-xl font-bold text-blue-900 mb-2">Nos Valeurs</h3>
              <p className="text-sm text-gray-600">Ce qui anime notre culture.</p>
            </Link>
            <Link
              href="/a-propos/equipe"
              className="group rounded-2xl border border-gray-200 hover:border-blue-300 p-6 shadow-sm hover:shadow-md transition-all"
            >
              <h3 className="text-xl font-bold text-blue-900 mb-2">Notre Équipe</h3>
              <p className="text-sm text-gray-600">Découvrez les dirigeants et associés.</p>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}


