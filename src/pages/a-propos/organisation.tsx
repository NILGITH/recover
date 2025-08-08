import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function NotreADNPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <section className="relative">
        <div
          className="h-80 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1485217988980-11786ced9454?q=80&w=2070&auto=format&fit=crop')",
          }}
        >
          <div className="absolute inset-0 bg-blue-900/70 flex items-center justify-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white text-center">
              Notre ADN
            </h1>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xl text-blue-900 font-semibold mb-6">
            « Des SOLUTIONS adaptées à vos défis »
          </p>
        </div>
      </section>

      <Footer />
    </div>
  )
}


