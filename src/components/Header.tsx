import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Search, ChevronDown } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isSecteurDropdownOpen, setIsSecteurDropdownOpen] = useState(false);
  const [isAProposDropdownOpen, setIsAProposDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="bg-transparent absolute top-0 left-0 w-full z-50">
        <div className="w-full">
          <div className="flex items-center w-full px-4 py-3 md:py-4">
            {/* Left Column */}
            <div className="flex-1 flex justify-start items-center space-x-4">
              <button
                onClick={toggleMenu}
                className="text-white hover:text-blue-200 p-2 transition-colors"
              >
                {isMenuOpen ? (
                  <X className="h-8 w-8" />
                ) : (
                  <Menu className="h-8 w-8" />
                )}
              </button>
              <Link href="/">
                <Image
                  src="/NOUVEAU LOGO RECOVER (1).png"
                  alt="RECOVER"
                  width={180}
                  height={48}
                  className="w-[180px] h-[48px] md:w-[280px] md:h-[75px] object-contain"
                  style={{ transform: "scale(1.3)" }}
                  priority
                  quality={100}
                />
              </Link>
            </div>

            {/* Center Column */}
            <nav className="hidden lg:flex justify-center items-center space-x-2 text-white">
              {/* NOS SERVICES Dropdown */}
              <div className="relative">
                <button
                  onMouseEnter={() => setIsServicesDropdownOpen(true)}
                  onMouseLeave={() => setIsServicesDropdownOpen(false)}
                  className="text-white hover:text-blue-200 font-medium px-3 py-2 text-sm transition-colors flex items-center space-x-1"
                >
                  <span>NOS SERVICES</span>
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${
                      isServicesDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isServicesDropdownOpen && (
                  <div
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-[800px] bg-white shadow-lg rounded-lg border border-gray-200 z-50"
                    onMouseEnter={() => setIsServicesDropdownOpen(true)}
                    onMouseLeave={() => setIsServicesDropdownOpen(false)}
                  >
                    <div className="p-6">
                      <div className="grid grid-cols-3 gap-8">
                        <div>
                          <Link href="/services/conseil-strategique" className="text-blue-800 font-semibold text-base mb-4 border-b border-gray-200 pb-2 block">
                            Conseil Stratégique
                          </Link>
                          <ul className="space-y-3">
                            <li>
                              <Link
                                href="/services/conseil-strategique"
                                className="text-gray-800 hover:text-blue-600 text-xs block"
                              >
                                Stratégie & Politique d’entreprise
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/services/conseil-strategique"
                                className="text-gray-800 hover:text-blue-600 text-xs block"
                              >
                                Stratégie concurrentielle & Efficacité
                                opérationnelle
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/services/conseil-strategique"
                                className="text-gray-800 hover:text-blue-600 text-xs block"
                              >
                                Business transformation
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <Link href="/services/conseil-financier" className="text-blue-800 font-semibold text-base mb-4 border-b border-gray-200 pb-2 block">
                            Conseil Financier
                          </Link>
                          <ul className="space-y-3">
                            <li>
                              <Link
                                href="/services/conseil-financier"
                                className="text-gray-800 hover:text-blue-600 text-xs block"
                              >
                                Financements Structurés
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/services/conseil-financier"
                                className="text-gray-800 hover:text-blue-600 text-xs block"
                              >
                                Levée de fonds & restructuration de dettes
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/services/conseil-financier"
                                className="text-gray-800 hover:text-blue-600 text-xs block"
                              >
                                Cession, Fusion & Acquisition
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/services/conseil-financier"
                                className="text-gray-800 hover:text-blue-600 text-xs block"
                              >
                                Affacturage & Rachat de Créances
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <Link href="/services/partenariat-public-prive" className="text-blue-800 font-semibold text-base mb-4 border-b border-gray-200 pb-2 block">
                            Partenariat Public-Privé
                          </Link>
                          <ul className="space-y-3">
                            <li>
                              <Link
                                href="/services/partenariat-public-prive"
                                className="text-gray-800 hover:text-blue-600 text-xs block"
                              >
                                Partenariat Public-Privé
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              {/* SECTEUR Dropdown */}
              <div className="relative">
                <button
                  onMouseEnter={() => setIsSecteurDropdownOpen(true)}
                  onMouseLeave={() => setIsSecteurDropdownOpen(false)}
                  className="text-white hover:text-blue-200 font-medium px-3 py-2 text-sm transition-colors flex items-center space-x-1"
                >
                  <span>SECTEUR</span>
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${
                      isSecteurDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isSecteurDropdownOpen && (
                  <div
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-[600px] bg-white shadow-lg rounded-lg border border-gray-200 z-50"
                    onMouseEnter={() => setIsSecteurDropdownOpen(true)}
                    onMouseLeave={() => setIsSecteurDropdownOpen(false)}
                  >
                    <div className="p-6">
                      <div className="grid grid-cols-2 gap-8">
                        <ul className="space-y-3">
                          <li className="text-gray-800 text-xs">Agriculture & Sécurité Alimentaire</li>
                          <li className="text-gray-800 text-xs">Transformation Digital</li>
                          <li className="text-gray-800 text-xs">Industrie Manufacturière</li>
                          <li className="text-gray-800 text-xs">Ingénierie, Bâtiments & Matériaux de Construction</li>
                          <li className="text-gray-800 text-xs">Emballages</li>
                          <li className="text-gray-800 text-xs">Services Financier</li>
                          <li className="text-gray-800 text-xs">Gouvernement & Secteur Public</li>
                        </ul>
                        <ul className="space-y-3">
                          <li className="text-gray-800 text-xs">Agro-Industrie</li>
                          <li className="text-gray-800 text-xs">Mines, Pétrol & Gaz</li>
                          <li className="text-gray-800 text-xs">Biens de Grandes Consommations</li>
                          <li className="text-gray-800 text-xs">Immobilier</li>
                          <li className="text-gray-800 text-xs">Chaine d’Approvisionnement
                            <ul className="ml-4 mt-1 space-y-1 text-gray-600 text-xs">
                              <li>• Planification</li>
                              <li>• Approvisionnement</li>
                              <li>• Transport & Logistique</li>
                            </ul>
                          </li>
                          <li className="text-gray-800 text-xs">Investissements</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <Link
                href="/#references"
                className="text-white hover:text-blue-200 font-medium px-3 py-2 text-sm transition-colors"
              >
                RÉFÉRENCES
              </Link>
              <Link
                href="/localisation"
                className="text-white hover:text-blue-200 font-medium px-3 py-2 text-sm transition-colors"
              >
                LOCALISATION
              </Link>
              {/* A PROPOS DE NOUS Dropdown */}
              <div className="relative">
                <button
                  onMouseEnter={() => setIsAProposDropdownOpen(true)}
                  onMouseLeave={() => setIsAProposDropdownOpen(false)}
                  className="text-white hover:text-blue-200 font-medium px-3 py-2 text-sm transition-colors flex items-center space-x-1"
                >
                  <span>A PROPOS DE NOUS</span>
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${
                      isAProposDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isAProposDropdownOpen && (
                  <div
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-[600px] bg-white shadow-lg rounded-lg border border-gray-200 z-50"
                    onMouseEnter={() => setIsAProposDropdownOpen(true)}
                    onMouseLeave={() => setIsAProposDropdownOpen(false)}
                  >
                    <div className="p-6">
                      <div className="grid grid-cols-3 gap-8">
                        <div>
                          <h3 className="text-blue-800 font-semibold text-base mb-4 border-b border-gray-200 pb-2">
                            Notre Organisation
                          </h3>
                          <ul className="space-y-3">
                            <li>
                              <Link href="/a-propos/organisation" className="text-gray-800 hover:text-blue-600 text-xs block">
                                Notre ADN
                              </Link>
                            </li>
                            <li>
                              <Link href="/a-propos/vision" className="text-gray-800 hover:text-blue-600 text-xs block">
                                Notre Vision
                              </Link>
                            </li>
                            <li>
                              <Link href="/a-propos/valeurs" className="text-gray-800 hover:text-blue-600 text-xs block">
                                Nos valeurs
                              </Link>
                            </li>
                            <li>
                              <Link href="/a-propos/equipe" className="text-gray-800 hover:text-blue-600 text-xs block">
                                Notre Équipe
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h3 className="text-blue-800 font-semibold text-base mb-4 border-b border-gray-200 pb-2">
                            Nos métiers
                          </h3>
                          <ul className="space-y-3">
                            <li>
                              <Link href="/metiers/accompagnement" className="text-gray-800 hover:text-blue-600 text-xs block">
                                Accompagnement Stratégique
                              </Link>
                            </li>
                            <li>
                              <Link href="/metiers/banque" className="text-gray-800 hover:text-blue-600 text-xs block">
                                La banque d’affaire
                              </Link>
                            </li>
                            <li>
                              <Link href="/metiers/impact" className="text-gray-800 hover:text-blue-600 text-xs block">
                                Impact & PPP
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h3 className="text-blue-800 font-semibold text-base mb-4 border-b border-gray-200 pb-2">
                            Nous contacter
                          </h3>
                          <ul className="space-y-3">
                            <li>
                              <Link href="/contact" className="text-gray-800 hover:text-blue-600 text-xs block">
                                Nous contacter
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </nav>

            {/* Right Column */}
            <div className="flex-1 flex justify-end items-center">
              <Search className="h-6 w-6 text-white" />
            </div>
          </div>
        </div>
      </header>

      {/* Full-screen Navigation Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-95 z-50 flex text-white">
          {/* Left Panel: Navigation Links */}
          <div className="w-1/3 bg-gray-900 p-8 flex flex-col">
            <button
              onClick={toggleMenu}
              className="self-start text-white hover:text-blue-200 p-2 transition-colors mb-8"
            >
              {isMenuOpen ? (
                <X className="h-8 w-8" />
              ) : (
                <Menu className="h-8 w-8" />
              )}
            </button>
            <nav className="flex flex-col space-y-4">
              <Link
                href="/secteur"
                className="text-xl hover:text-blue-200 transition-colors"
                onClick={toggleMenu}
              >
                SECTEUR
              </Link>
              <Link
                href="/#references"
                className="text-xl hover:text-blue-200 transition-colors"
                onClick={toggleMenu}
              >
                RÉFÉRENCES
              </Link>
              <Link
                href="/localisation"
                className="text-xl hover:text-blue-200 transition-colors"
                onClick={toggleMenu}
              >
                LOCALISATION
              </Link>
              <Link
                href="/a-propos"
                className="text-xl hover:text-blue-200 transition-colors"
                onClick={toggleMenu}
              >
                A PROPOS DE NOUS
              </Link>
              <Link
                href="/#contact"
                className="text-xl hover:text-blue-200 transition-colors"
                onClick={toggleMenu}
              >
                CONTACT
              </Link>
            </nav>
          </div>

          {/* Right Panel: Services and Secteur Details */}
          <div className="w-2/3 bg-white p-8 text-black overflow-y-auto">
            <h2 className="text-2xl font-bold mb-8 text-red-600">Nos Services</h2>
            <div className="grid grid-cols-2 gap-12">
              <div>
                <Link href="/services/conseil-strategique" className="text-red-600 font-semibold text-lg mb-4 border-b border-gray-200 pb-2 block">
                  Conseil Stratégique
                </Link>
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="/services/strategie-politique-entreprise"
                      className="text-gray-800 hover:text-blue-600 text-sm"
                      onClick={toggleMenu}
                    >
                      Stratégie & Politique d’entreprise
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/strategie-concurrentielle-efficacite"
                      className="text-gray-800 hover:text-blue-600 text-sm"
                      onClick={toggleMenu}
                    >
                      Stratégie concurrentielle & Efficacité opérationnelle
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/business-transformation"
                      className="text-gray-800 hover:text-blue-600 text-sm"
                      onClick={toggleMenu}
                    >
                      Business transformation
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <Link href="/services/conseil-financier" className="text-red-600 font-semibold text-lg mb-4 border-b border-gray-200 pb-2 block">
                  Conseil Financier
                </Link>
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="/services/financements-structures"
                      className="text-gray-800 hover:text-blue-600 text-sm"
                      onClick={toggleMenu}
                    >
                      Financements Structurés
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/levee-fonds-restructuration"
                      className="text-gray-800 hover:text-blue-600 text-sm"
                      onClick={toggleMenu}
                    >
                      Levée de fonds & restructuration de dettes
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/cession-fusion-acquisition"
                      className="text-gray-800 hover:text-blue-600 text-sm"
                      onClick={toggleMenu}
                    >
                      Cession, Fusion & Acquisition
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/affacturage-rachat-creances"
                      className="text-gray-800 hover:text-blue-600 text-sm"
                      onClick={toggleMenu}
                    >
                      Affacturage & Rachat de Créances
                    </Link>
                  </li>
                </ul>
                <Link href="/services/partenariat-public-prive" className="text-red-600 font-semibold text-lg mb-4 mt-8 border-b border-gray-200 pb-2 block">
                  Partenariat Public-Privé
                </Link>
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="/services/partenariat-public-prive"
                      className="text-gray-800 hover:text-blue-600 text-sm"
                      onClick={toggleMenu}
                    >
                      Partenariat Public-Privé
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <h2 className="text-2xl font-bold mb-8 mt-12 text-red-600">
              Secteur
            </h2>
            <div className="grid grid-cols-2 gap-8">
              <ul className="space-y-3">
                <li className="text-gray-800 text-sm">Agriculture & Sécurité Alimentaire</li>
                <li className="text-gray-800 text-sm">Transformation Digital</li>
                <li className="text-gray-800 text-sm">Industrie Manufacturière</li>
                <li className="text-gray-800 text-sm">Ingénierie, Bâtiments & Matériaux de Construction</li>
                <li className="text-gray-800 text-sm">Emballages</li>
                <li className="text-gray-800 text-sm">Services Financier</li>
                <li className="text-gray-800 text-sm">Gouvernement & Secteur Public</li>
              </ul>
              <ul className="space-y-3">
                <li className="text-gray-800 text-sm">Agro-Industrie</li>
                <li className="text-gray-800 text-sm">Mines, Pétrol & Gaz</li>
                <li className="text-gray-800 text-sm">Biens de Grandes Consommations</li>
                <li className="text-gray-800 text-sm">Immobilier</li>
                <li className="text-gray-800 text-sm">Chaine d’Approvisionnement
                  <ul className="ml-4 mt-1 space-y-1">
                    <li className="text-gray-600 text-sm">• Planification</li>
                    <li className="text-gray-600 text-sm">• Approvisionnement</li>
                    <li className="text-gray-600 text-sm">• Transport & Logistique</li>
                  </ul>
                </li>
                <li className="text-gray-800 text-sm">Investissements</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
}