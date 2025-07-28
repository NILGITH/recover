
import React from "react"
import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <Image 
                src="/NOUVEAU LOGO RECOVER (1).png" 
                alt="RECOVER" 
                width={140}
                height={40}
                className="object-contain"
              />
            </div>
            <p className="text-blue-100 text-sm leading-relaxed">
              RECOVER GROUPE est votre partenaire de confiance pour des solutions 
              innovantes en conseil stratégique, financier et opérationnel.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-blue-200 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-blue-200 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-blue-200 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-blue-200 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-white border-b border-blue-700 pb-2">
              NOS SERVICES
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/services/conseil-strategique" className="text-blue-100 hover:text-white transition-colors text-sm flex items-center group">
                  <span className="w-1 h-1 bg-blue-400 rounded-full mr-3 group-hover:bg-white transition-colors"></span>
                  Conseil stratégique
                </Link>
              </li>
              <li>
                <Link href="/services/conseil-financier" className="text-blue-100 hover:text-white transition-colors text-sm flex items-center group">
                  <span className="w-1 h-1 bg-blue-400 rounded-full mr-3 group-hover:bg-white transition-colors"></span>
                  Conseil financier
                </Link>
              </li>
              <li>
                <Link href="/services/partenariat-public-prive" className="text-blue-100 hover:text-white transition-colors text-sm flex items-center group">
                  <span className="w-1 h-1 bg-blue-400 rounded-full mr-3 group-hover:bg-white transition-colors"></span>
                  Partenariat public et privé
                </Link>
              </li>
              <li>
                <Link href="/services/services-politiques-assistance" className="text-blue-100 hover:text-white transition-colors text-sm flex items-center group">
                  <span className="w-1 h-1 bg-blue-400 rounded-full mr-3 group-hover:bg-white transition-colors"></span>
                  Services & Politiques d'Assistance
                </Link>
              </li>
              <li>
                <Link href="/services/efficacite-operationnelle" className="text-blue-100 hover:text-white transition-colors text-sm flex items-center group">
                  <span className="w-1 h-1 bg-blue-400 rounded-full mr-3 group-hover:bg-white transition-colors"></span>
                  Efficacité opérationnelle
                </Link>
              </li>
              <li>
                <Link href="/services/business-transformation" className="text-blue-100 hover:text-white transition-colors text-sm flex items-center group">
                  <span className="w-1 h-1 bg-blue-400 rounded-full mr-3 group-hover:bg-white transition-colors"></span>
                  Business Transformation
                </Link>
              </li>
            </ul>
          </div>

          {/* Expertise */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-white border-b border-blue-700 pb-2">
              NOS EXPERTISES
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/services/systeme-information" className="text-blue-100 hover:text-white transition-colors text-sm flex items-center group">
                  <span className="w-1 h-1 bg-blue-400 rounded-full mr-3 group-hover:bg-white transition-colors"></span>
                  Système d'information
                </Link>
              </li>
              <li>
                <Link href="/services/fusion-acquisition" className="text-blue-100 hover:text-white transition-colors text-sm flex items-center group">
                  <span className="w-1 h-1 bg-blue-400 rounded-full mr-3 group-hover:bg-white transition-colors"></span>
                  Fusion & Acquisition
                </Link>
              </li>
              <li>
                <Link href="/services/financements-structures" className="text-blue-100 hover:text-white transition-colors text-sm flex items-center group">
                  <span className="w-1 h-1 bg-blue-400 rounded-full mr-3 group-hover:bg-white transition-colors"></span>
                  Financements Structurés
                </Link>
              </li>
              <li>
                <Link href="/services/levee-fonds-restructuration" className="text-blue-100 hover:text-white transition-colors text-sm flex items-center group">
                  <span className="w-1 h-1 bg-blue-400 rounded-full mr-3 group-hover:bg-white transition-colors"></span>
                  Levée de fonds & restructuration
                </Link>
              </li>
              <li>
                <Link href="/services/affacturage-rachat-creances" className="text-blue-100 hover:text-white transition-colors text-sm flex items-center group">
                  <span className="w-1 h-1 bg-blue-400 rounded-full mr-3 group-hover:bg-white transition-colors"></span>
                  Affacturage & Rachat de Créances
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-white border-b border-blue-700 pb-2">
              CONTACTEZ-NOUS
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-300 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-blue-100 text-sm font-medium">Adresse :</p>
                  <p className="text-blue-200 text-xs mt-1 leading-relaxed">
                    Cocody Mermoz en face de Finelle<br />
                    08 BP 2944 ABJ 08<br />
                    Abidjan - CÔTE D'IVOIRE
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-300 flex-shrink-0" />
                <div>
                  <p className="text-blue-100 text-sm font-medium">Téléphone :</p>
                  <p className="text-blue-200 text-xs mt-1">+225 27 22 54 00 53</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-300 flex-shrink-0" />
                <div>
                  <p className="text-blue-100 text-sm font-medium">Email :</p>
                  <p className="text-blue-200 text-xs mt-1">contact@recover-groupe.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-blue-700/50 bg-blue-950/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-blue-200 text-sm">
                © 2025 RECOVER GROUPE. Tous droits réservés.
              </p>
            </div>
            
            <div className="flex space-x-6 text-sm">
              <Link href="/mentions-legales" className="text-blue-200 hover:text-white transition-colors">
                Mentions légales
              </Link>
              <Link href="/politique-confidentialite" className="text-blue-200 hover:text-white transition-colors">
                Politique de confidentialité
              </Link>
              <Link href="/conditions-utilisation" className="text-blue-200 hover:text-white transition-colors">
                Conditions d'utilisation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
