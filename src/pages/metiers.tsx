import React from 'react';
import Header from "@/components/Header";
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function NosMetiers() {
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
              Nos Métiers
            </h1>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">
            Notre Expertise Professionnelle
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
            Découvrez nos domaines d'expertise et nos services spécialisés qui font de RECOVER 
            un partenaire de confiance pour votre développement stratégique et financier.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200 hover:shadow-xl transition-shadow duration-300">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-4">
                Accompagnement Stratégique
              </h3>
              <p className="text-gray-700 mb-6">
                Nous vous accompagnons dans l'élaboration et la mise en œuvre de votre stratégie 
                d'entreprise pour assurer votre croissance et votre compétitivité.
              </p>
              <Link 
                href="/metiers/accompagnement"
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300"
              >
                En savoir plus
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200 hover:shadow-xl transition-shadow duration-300">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-4">
                La Banque d'Affaires
              </h3>
              <p className="text-gray-700 mb-6">
                Notre expertise en banque d'affaires vous accompagne dans vos projets de financement, 
                de fusion-acquisition et de restructuration.
              </p>
              <Link 
                href="/metiers/banque"
                className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors duration-300"
              >
                En savoir plus
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200 hover:shadow-xl transition-shadow duration-300">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-4">
                Impact & PPP
              </h3>
              <p className="text-gray-700 mb-6">
                Nous vous accompagnons dans vos projets d'impact social et vos partenariats 
                public-privé pour créer une valeur durable.
              </p>
              <Link 
                href="/metiers/impact"
                className="inline-block bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors duration-300"
              >
                En savoir plus
              </Link>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-blue-900 mb-6">
            Pourquoi Choisir RECOVER ?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="text-left">
              <h4 className="text-lg font-semibold text-blue-900 mb-3">Expertise Locale</h4>
              <p className="text-gray-700">
                Une connaissance approfondie des marchés africains et des enjeux locaux.
              </p>
            </div>
            <div className="text-left">
              <h4 className="text-lg font-semibold text-blue-900 mb-3">Approche Personnalisée</h4>
              <p className="text-gray-700">
                Des solutions sur mesure adaptées à vos besoins spécifiques.
              </p>
            </div>
            <div className="text-left">
              <h4 className="text-lg font-semibold text-blue-900 mb-3">Équipe Expérimentée</h4>
              <p className="text-gray-700">
                Des professionnels reconnus avec plus de 20 ans d'expérience.
              </p>
            </div>
            <div className="text-left">
              <h4 className="text-lg font-semibold text-blue-900 mb-3">Résultats Probants</h4>
              <p className="text-gray-700">
                Un track record solide de succès dans des environnements complexes.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
