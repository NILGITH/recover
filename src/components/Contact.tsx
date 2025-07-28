
import React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Contact() {
  return (
    <section id="contact" className="py-0 bg-gradient-to-b  via-blue-100 to-white min-h-screen">
      {/* Bandeau titre premium */}
      <div className="  to-blue-400 py-16 flex flex-col items-center justify-center  mb-12">
        <div className="flex items-center gap-4 mb-4">
          <span className="bg-white/20 p-3 rounded-full">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
          </span>
          <h2 className="text-4xl md:text-4xl font-extrabold text-blue-900 tracking-tight drop-shadow-lg">NOUS CONTACTER</h2>
        </div>
        <p className="text-lg text-gray-500 max-w-2xl text-center">
          Contactez-nous pour discuter de vos projets et découvrir comment <span className="font-bold">RECOVER</span> peut vous accompagner dans vos défis stratégiques et financiers.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Bloc infos + horaires */}
          <div className="space-y-8">
            <div className="backdrop-blur-md bg-white/80 rounded-2xl shadow-2xl border border-blue-100 p-8">
              <h3 className="text-2xl font-bold text-blue-900 mb-6 flex items-center gap-2">
                <svg className="w-7 h-7 text-blue-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16 2a2 2 0 012 2v2a2 2 0 01-2 2H8a2 2 0 01-2-2V4a2 2 0 012-2h8zm6 6v12a2 2 0 01-2 2H4a2 2 0 01-2-2V8" /></svg>
                Informations de Contact
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <span className="bg-blue-600/90 p-3 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
                  </span>
                  <div>
                    <h4 className="font-semibold text-blue-900">Adresse</h4>
                    <p className="text-gray-700">
                      Cocody Mermoz en face de Finelle<br />
                      08 BP 2944 ABJ 08<br />
                      Abidjan - CÔTE D'IVOIRE
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="bg-blue-600/90 p-3 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" /></svg>
                  </span>
                  <div>
                    <h4 className="font-semibold text-blue-900">Téléphone</h4>
                    <p className="text-gray-700">+225 27 22 54 00 53</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="bg-blue-600/90 p-3 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" /><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" /></svg>
                  </span>
                  <div>
                    <h4 className="font-semibold text-blue-900">Email</h4>
                    <p className="text-gray-700">contact@recover-groupe.com</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="backdrop-blur-md bg-white/80 rounded-2xl shadow-2xl border border-blue-100 p-8">
              <h3 className="text-2xl font-bold text-blue-900 mb-6 flex items-center gap-2">
                <svg className="w-7 h-7 text-blue-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>
                Horaires d'Ouverture
              </h3>
              <div className="space-y-2 text-gray-700">
                <div className="flex justify-between">
                  <span>Lundi - Vendredi</span>
                  <span>8h00 - 18h00</span>
                </div>
                <div className="flex justify-between">
                  <span>Samedi</span>
                  <span>9h00 - 13h00</span>
                </div>
                <div className="flex justify-between">
                  <span>Dimanche</span>
                  <span>Fermé</span>
                </div>
              </div>
            </div>
          </div>

          {/* Formulaire premium */}
          <div className="backdrop-blur-md bg-white/90 rounded-2xl shadow-2xl border border-blue-100 p-6 md:p-8 flex flex-col justify-center mb-8">
            <h3 className="text-2xl font-bold text-blue-900 mb-14 flex items-center gap-2">
              <svg className="w-7 h-7 text-blue-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16 2a2 2 0 012 2v2a2 2 0 01-2 2H8a2 2 0 01-2-2V4a2 2 0 012-2h8zm6 6v12a2 2 0 01-2 2H4a2 2 0 01-2-2V8" /></svg>
              Envoyez-nous un Message
            </h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                  <label htmlFor="nom" className="block text-sm font-medium text-blue-900 mb-1">
                    Nom & Prénom *
                  </label>
                  <Input
                    id="nom"
                    type="text"
                    placeholder="Votre nom complet"
                    className="w-full rounded-lg border-blue-200 focus:ring-2 focus:ring-blue-400 text-sm py-2"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="telephone" className="block text-sm font-medium text-blue-900 mb-1">
                    Téléphone
                  </label>
                  <Input
                    id="telephone"
                    type="tel"
                    placeholder="Votre numéro de téléphone"
                    className="w-full rounded-lg border-blue-200 focus:ring-2 focus:ring-blue-400 text-sm py-2"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-blue-900 mb-1">
                  E-mail *
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="votre.email@exemple.com"
                  className="w-full rounded-lg border-blue-200 focus:ring-2 focus:ring-blue-400 text-sm py-2"
                  required
                />
              </div>
              <div>
                <label htmlFor="sujet" className="block text-sm font-medium text-blue-900 mb-1">
                  Sujet
                </label>
                <Input
                  id="sujet"
                  type="text"
                  placeholder="Objet de votre demande"
                  className="w-full rounded-lg border-blue-200 focus:ring-2 focus:ring-blue-400 text-sm py-2"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-blue-900 mb-1">
                  Message *
                </label>
                <Textarea
                  id="message"
                  placeholder="Décrivez votre projet ou votre demande..."
                  className="w-full h-28 rounded-lg border-blue-200 focus:ring-2 focus:ring-blue-400 text-sm"
                  required
                />
              </div>
              <Button 
                type="submit"
                className="w-full bg-gradient-to-r from-blue-900 to-blue-700 text-white hover:from-blue-800 hover:to-blue-600 py-2.5 text-base font-semibold rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                ENVOYER LE MESSAGE
              </Button>
              <p className="text-center text-blue-700 text-xs mt-2">Nous vous répondrons sous 24h.</p>
            </form>
          </div>
          <div className="h-8" />
        </div>
      </div>
    </section>
  )
}

