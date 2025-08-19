import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { Menu, X, Search, ChevronDown, ChevronRight } from "lucide-react";

export default function Header() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isSecteurDropdownOpen, setIsSecteurDropdownOpen] = useState(false);
  const [isAProposDropdownOpen, setIsAProposDropdownOpen] = useState(false);
  const [isSupplyChainOpen, setIsSupplyChainOpen] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState<string | null>(null);

  const menuRef = useRef<HTMLDivElement>(null);
  const toggleButtonRef = useRef<HTMLButtonElement>(null);

  const servicesTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const secteurTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const aProposTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const isHomePage = router.pathname === "/";

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
    if (!isMenuOpen) {
      setSelectedMenu(null);
      setIsSupplyChainOpen(false);
    }
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setSelectedMenu(null);
    setIsSupplyChainOpen(false);
  };

  const handleMenuSelect = (menu: string) => {
    if (menu === "services" || menu === "secteur" || menu === "aPropos") {
      setSelectedMenu(menu);
    } else {
      setSelectedMenu(null);
      setIsSupplyChainOpen(false);
      closeMenu();
    }
  };

  const openServicesDropdown = () => {
    if (servicesTimeoutRef.current) {
      clearTimeout(servicesTimeoutRef.current);
    }
    setIsServicesDropdownOpen(true);
  };

  const closeServicesDropdown = () => {
    servicesTimeoutRef.current = setTimeout(() => {
      setIsServicesDropdownOpen(false);
    }, 150);
  };

  const openSecteurDropdown = () => {
    if (secteurTimeoutRef.current) {
      clearTimeout(secteurTimeoutRef.current);
    }
    setIsSecteurDropdownOpen(true);
  };

  const closeSecteurDropdown = () => {
    secteurTimeoutRef.current = setTimeout(() => {
      setIsSecteurDropdownOpen(false);
      setIsSupplyChainOpen(false);
    }, 150);
  };

  const openAProposDropdown = () => {
    if (aProposTimeoutRef.current) {
      clearTimeout(aProposTimeoutRef.current);
    }
    setIsAProposDropdownOpen(true);
  };

  const closeAProposDropdown = () => {
    aProposTimeoutRef.current = setTimeout(() => {
      setIsAProposDropdownOpen(false);
    }, 150);
  };

  useEffect(() => {
    if (!isMenuOpen) {
      setIsServicesDropdownOpen(false);
      setIsSecteurDropdownOpen(false);
      setIsAProposDropdownOpen(false);
      setIsSupplyChainOpen(false);
      setSelectedMenu(null);
    }
  }, [isMenuOpen]);

  useEffect(() => {
    return () => {
      if (servicesTimeoutRef.current) clearTimeout(servicesTimeoutRef.current);
      if (secteurTimeoutRef.current) clearTimeout(secteurTimeoutRef.current);
      if (aProposTimeoutRef.current) clearTimeout(aProposTimeoutRef.current);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        toggleButtonRef.current &&
        toggleButtonRef.current.contains(event.target as Node)
      ) {
        return;
      }
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        closeMenu();
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    if (isMenuOpen) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = originalOverflow || "unset";
    }
    return () => {
      document.body.style.overflow = originalOverflow || "unset";
    };
  }, [isMenuOpen]);

  return (
    <>
      {isHomePage && (
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/60 via-black/60 to-transparent z-40" />
      )}

      <header
        className={`${
          isHomePage
            ? "bg-transparent absolute text-white"
            : "bg-white relative shadow-md text-black"
        } top-0 left-0 w-full z-50`}
      >
        <div className="w-full">
          <div className="flex items-center w-full px-4 py-3 md:py-4">
            {/* Left Column */}
            <div className="flex-1 flex justify-start mr-16 items-center space-x-4">
              <button
                ref={toggleButtonRef}
                onClick={toggleMenu}
                className={`${isHomePage ? "text-white" : "text-black"} p-4 md:p-6 transition-colors rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                aria-label="Toggle navigation menu"
                aria-expanded={isMenuOpen}
                aria-controls="mobile-menu"
              >
                {isMenuOpen ? (
                  <X className="h-8 w-8 md:h-10 md:w-10" />
                ) : (
                  <Menu className="h-8 w-8 md:h-10 md:w-10" />
                )}
              </button>
              <Link href="/">
                <Image
                  src="/NOUVEAU LOGO RECOVER (1).png"
                  alt="RECOVER"
                  width={180}
                  height={110}
                  className="w-[180px] h-[110px] md:w-[300px] md:h-[110px] object-contain"
                  style={{ transform: "scale(1.3)" }}
                  priority
                  quality={100}
                />
              </Link>
            </div>

            {/* Center Column */}
            <nav
              className={`hidden lg:flex justify-center items-center space-x-4 ${isHomePage ? "text-white" : "text-black"}`}
            >
              <div className="relative">
                <button
                  onMouseEnter={openServicesDropdown}
                  onMouseLeave={closeServicesDropdown}
                  className={`${isHomePage ? "text-white hover:text-blue-200" : "text-black hover:text-blue-600"} font-medium px-3 py-2 text-sm transition-colors flex items-center space-x-1`}
                  aria-expanded={isServicesDropdownOpen}
                  aria-haspopup="true"
                >
                  <span>NOS SERVICES</span>
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${isServicesDropdownOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {isServicesDropdownOpen && (
                  <div
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-[800px] bg-white shadow-lg rounded-lg border border-gray-200 z-50"
                    onMouseEnter={openServicesDropdown}
                    onMouseLeave={closeServicesDropdown}
                    role="menu"
                  >
                    <div className="p-6">
                      <div className="grid grid-cols-3 gap-8">
                        <div>
                          <Link
                            href="/services/conseil-strategique"
                            className="text-blue-900 text-xl font-semibold text-base mb-4 border-b border-gray-200 pb-2 block"
                          >
                            Conseil Stratégique
                          </Link>
                          <ul className="space-y-3">
                            <li>
                              <Link
                                href="/services/conseil-strategique?section=strategie"
                                className="text-gray-800 hover:text-blue-900 text-md block"
                              >
                                Stratégie & Politique d'entreprise
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/services/conseil-strategique?section=concurrentielle"
                                className="text-gray-800 hover:text-blue-900 text-md block"
                              >
                                Stratégie concurrentielle & Efficacité
                                opérationnelle
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/services/conseil-strategique?section=transformation"
                                className="text-gray-800 hover:text-blue-900 text-md block"
                              >
                                Business transformation
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <Link
                            href="/services/conseil-financier"
                            className="text-blue-900 text-xl font-semibold text-base mb-4 border-b border-gray-200 pb-2 block"
                          >
                            Conseil Financier
                          </Link>
                          <ul className="space-y-3">
                            <li>
                              <Link
                                href="/services/conseil-financier"
                                className="text-gray-800 hover:text-blue-900 text-md block"
                              >
                                Financements Structurés
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/services/conseil-financier"
                                className="text-gray-800 hover:text-blue-900 text-md block"
                              >
                                Levée de fonds & restructuration de dettes
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/services/conseil-financier"
                                className="text-gray-800 hover:text-blue-900 text-md block"
                              >
                                Cession, Fusion & Acquisition
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/services/conseil-financier"
                                className="text-gray-800 hover:text-blue-900 text-md block"
                              >
                                Affacturage & Rachat de Créances
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <Link
                            href="/services/partenariat-public-prive"
                            className="text-blue-900 text-xl font-semibold text-base mb-4 border-b border-gray-200 pb-2 block"
                          >
                            Partenariat Public-Privé
                          </Link>
                          <ul className="space-y-3">
                            <li>
                              <Link
                                href="/services/partenariat-public-prive"
                                className="text-gray-800 hover:text-blue-900 text-md block"
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
              <div className="relative">
                <button
                  onMouseEnter={openSecteurDropdown}
                  onMouseLeave={closeSecteurDropdown}
                  className={`${isHomePage ? "text-white hover:text-blue-200" : "text-black hover:text-blue-600"} font-medium px-3 py-2 text-sm transition-colors flex items-center space-x-1`}
                  aria-expanded={isSecteurDropdownOpen}
                  aria-haspopup="true"
                >
                  <span>SECTEURS</span>
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${isSecteurDropdownOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {isSecteurDropdownOpen && (
                  <div
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-[600px] bg-white shadow-lg rounded-lg border border-gray-200 z-50"
                    onMouseEnter={openSecteurDropdown}
                    onMouseLeave={closeSecteurDropdown}
                    role="menu"
                  >
                    <div className="p-6">
                      <div className="grid grid-cols-3 gap-8">
                        <ul className="space-y-3">
                          <li className="text-gray-800 text-md">
                            Agriculture & Sécurité Alimentaire
                          </li>
                          <li className="text-gray-800 text-md">
                            Agro-Industrie
                          </li>
                          <li className="text-gray-800 text-md">
                            Industrie Manufacturière
                          </li>
                          <li className="text-gray-800 text-md">
                            Biens de Grandes Consommations
                          </li>
                          <li className="text-gray-800 text-md">Emballages</li>
                          <li>
                            <button
                              onClick={() =>
                                setIsSupplyChainOpen(!isSupplyChainOpen)
                              }
                              className="text-gray-800 text-md flex items-center space-x-1 hover:text-blue-600"
                            >
                              <span>Chaîne d'Approvisionnement</span>
                              <ChevronDown
                                className={`h-3 w-3 transition-transform ${isSupplyChainOpen ? "rotate-180" : ""}`}
                              />
                            </button>
                            {isSupplyChainOpen && (
                              <ul className="ml-4 mt-1 space-y-1 text-gray-600 text-md">
                                <li>Planification</li>
                                <li>Approvisionnement</li>
                                <li>Transport & Logistique</li>
                              </ul>
                            )}
                          </li>
                        </ul>
                        <ul className="space-y-3">
                          <li className="text-gray-800 text-md">
                            Transformation Digitale
                          </li>
                          <li className="text-gray-800 text-md">
                            Mines, Pétrole & Gaz
                          </li>
                          <li className="text-gray-800 text-md">
                            Ingénierie, Bâtiments & Matériaux de Construction
                          </li>
                          <li className="text-gray-800 text-md">Immobilier</li>
                        </ul>
                        <ul className="space-y-3">
                          <li className="text-gray-800 text-md">
                            Services Financiers
                          </li>
                          <li className="text-gray-800 text-md">
                            Investissements
                          </li>
                          <li className="text-gray-800 text-md">
                            Gouvernement & Secteur Public
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <Link
                href="/#references"
                className={`${isHomePage ? "text-white hover:text-blue-200" : "text-black hover:text-blue-600"} font-medium px-3 py-2 text-sm transition-colors`}
              >
                RÉFÉRENCES
              </Link>

              <div className="relative ">
                <button
                  onMouseEnter={openAProposDropdown}
                  onMouseLeave={closeAProposDropdown}
                  className={`${isHomePage ? "text-white hover:text-blue-200" : "text-black hover:text-blue-600"} font-medium px-3 py-2 text-sm transition-colors flex items-center space-x-1`}
                  aria-expanded={isAProposDropdownOpen}
                  aria-haspopup="true"
                >
                  <span>A PROPOS DE NOUS</span>
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${isAProposDropdownOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {isAProposDropdownOpen && (
                  <div
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-[700px] bg-white shadow-lg rounded-lg border border-gray-200 z-50"
                    onMouseEnter={openAProposDropdown}
                    onMouseLeave={closeAProposDropdown}
                    role="menu"
                  >
                    <div className="p-6 flex justify-center">
                      <div className="grid grid-cols-3 gap-12">
                        <div>
                          <Link
                            href="/Notreorganisation"
                            className="text-blue-900 font-semibold text-xl mb-4 border-b border-gray-200 pb-2 block whitespace-nowrap"
                          >
                            Notre Organisation
                          </Link>
                          <ul className="space-y-3">
                            <li>
                              <Link
                                href="/Notreorganisation?section=adn"
                                className="text-gray-800 hover:text-blue-900 text-md block"
                              >
                                Notre ADN
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/Notreorganisation?section=vision"
                                className="text-gray-800 hover:text-blue-900 text-md block"
                              >
                                Notre Vision
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/Notreorganisation?section=valeurs"
                                className="text-gray-800 hover:text-blue-900 text-md block"
                              >
                                Nos Valeurs
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/Notreorganisation?section=equipe"
                                className="text-gray-800 hover:text-blue-900 text-md block"
                              >
                                Notre Équipe
                              </Link>
                            </li>
                          </ul>
                        </div>

                        <div>
                          <Link
                            href="/metiers"
                            className="text-blue-900 font-semibold text-xl mb-4 border-b border-gray-200 pb-2 block whitespace-nowrap"
                          >
                            Nos Métiers
                          </Link>
                          <ul className="space-y-3">
                            <li>
                              <Link
                                href="/a-propos/accompagnement"
                                className="text-gray-800 hover:text-blue-900 text-md block"
                              >
                                Accompagnement Stratégique
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/a-propos/banque"
                                className="text-gray-800 hover:text-blue-900 text-md block"
                              >
                                La Banque d'Affaires
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/a-propos/impact"
                                className="text-gray-800 hover:text-blue-900 text-md block"
                              >
                                Impact & PPP
                              </Link>
                            </li>
                          </ul>
                        </div>

                        <div>
                          <h3 className="text-blue-900 font-semibold text-xl mb-4 border-b border-gray-200 pb-2 whitespace-nowrap">
                            Nous Contacter
                          </h3>
                          <ul className="space-y-3">
                            <li>
                              <Link
                                href="/contact"
                                className="text-gray-800 hover:text-blue-900 text-md block"
                              >
                                Nous Contacter
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <Link
                href=""
                className={`${isHomePage ? "text-white hover:text-blue-200" : "text-black hover:text-blue-600"} font-medium px-3 py-2 text-sm transition-colors`}
              >
                ACTUALITES
              </Link>
            </nav>

            {/* Right Column */}
            <div className="flex-1 flex justify-end items-center">
              <Search className={`${isHomePage ? "text-white" : "text-black"} h-6 w-6`} />
            </div>
          </div>
        </div>
      </header>

      {/* Half-screen Navigation Menu */}
      {isMenuOpen && (
        <div
          ref={menuRef}
          className={`fixed top-0 left-0 w-full h-[600px] bg-gray-800 bg-opacity-60 backdrop-blur-lg z-[9999] flex text-white transition-opacity duration-300 ${
            isMenuOpen ? "backdrop-blur-lg" : "opacity-0 pointer-events-none"
          }`}
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
        >
          {/* Left Panel: Sidebar Navigation */}
          <div className="w-1/3 bg-gray-900 bg-opacity-60 backdrop-blur-lg p-8 flex flex-col">
            <button
              onClick={closeMenu}
              className="self-start text-white hover:text-blue-300 p-2 transition-colors mb-8"
              aria-label="Close menu"
            >
              <X className="h-8 w-8" />
            </button>
            <nav className="flex flex-col space-y-6">
              <button
                onClick={() => handleMenuSelect("services")}
                className="text-xl hover:text-blue-300 transition-colors flex items-center justify-between group"
              >
                <span>NOS SERVICES</span>
                <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => handleMenuSelect("secteur")}
                className="text-xl hover:text-blue-300 transition-colors flex items-center justify-between group"
              >
                <span>SECTEUR</span>
                <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => handleMenuSelect("aPropos")}
                className="text-xl hover:text-blue-300 transition-colors flex items-center justify-between group"
              >
                <span>A PROPOS DE NOUS</span>
                <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <Link
                href="/#references"
                className="text-xl hover:text-blue-300 transition-colors"
                onClick={closeMenu}
              >
                RÉFÉRENCES
              </Link>
            </nav>
          </div>

          {/* Right Panel: Sub-menu Content */}
          <div className="w-2/3 bg-gray-100 bg-opacity-70 backdrop-blur-lg p-8 text-black overflow-y-auto">
            {!selectedMenu && (
              <div className="flex items-center justify-center h-full">
                <div className="text-center">
                  <h2 className="text-3xl font-bold mb-4 text-gray-800">
                    Bienvenue chez RECOVER
                  </h2>
                  <p className="text-lg text-gray-500">
                    Sélectionnez un menu pour explorer nos services et secteurs
                    d'activité
                  </p>
                </div>
              </div>
            )}
            {selectedMenu === "services" && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <Link
                    href="/services/conseil-strategique"
                    className="text-blue-900 text-xl font-semibold mb-4 border-b border-gray-200 pb-2 block"
                  >
                    Conseil Stratégique
                  </Link>
                  <ul className="space-y-3">
                    <li>
                      <Link
                        href="/services/conseil-strategique?section=strategie"
                        className="text-gray-800 hover:text-blue-900 text-md block"
                        onClick={closeMenu}
                      >
                        Stratégie & Politique d'entreprise
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/services/conseil-strategique?section=concurrentielle"
                        className="text-gray-800 hover:text-blue-900 text-md block"
                        onClick={closeMenu}
                      >
                        Stratégie concurrentielle & Efficacité opérationnelle
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/services/conseil-strategique?section=transformation"
                        className="text-gray-800 hover:text-blue-900 text-md block"
                        onClick={closeMenu}
                      >
                        Business transformation
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <Link
                    href="/services/conseil-financier"
                    className="text-blue-900 text-xl font-semibold mb-4 border-b border-gray-200 pb-2 block"
                  >
                    Conseil Financier
                  </Link>
                  <ul className="space-y-3">
                    <li>
                      <Link
                        href="/services/conseil-financier"
                        className="text-gray-800 hover:text-blue-900 text-md block"
                        onClick={closeMenu}
                      >
                        Financements Structurés
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/services/conseil-financier"
                        className="text-gray-800 hover:text-blue-900 text-md block"
                        onClick={closeMenu}
                      >
                        Levée de fonds & restructuration de dettes
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/services/conseil-financier"
                        className="text-gray-800 hover:text-blue-900 text-md block"
                        onClick={closeMenu}
                      >
                        Cession, Fusion & Acquisition
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/services/conseil-financier"
                        className="text-gray-800 hover:text-blue-900 text-md block"
                        onClick={closeMenu}
                      >
                        Affacturage & Rachat de Créances
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <Link
                    href="/services/partenariat-public-prive"
                    className="text-blue-900 text-xl font-semibold mb-4 border-b border-gray-200 pb-2 block"
                  >
                    Partenariat Public-Privé
                  </Link>
                  <ul className="space-y-3">
                    <li>
                      <Link
                        href="/services/partenariat-public-prive"
                        className="text-gray-800 hover:text-blue-900 text-md block"
                        onClick={closeMenu}
                      >
                        Partenariat Public-Privé
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            )}
            {selectedMenu === "secteur" && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <ul className="space-y-3">
                  <li className="text-gray-800 text-md">
                    Agriculture & Sécurité Alimentaire
                  </li>
                  <li className="text-gray-800 text-md">Agro-Industrie</li>
                  <li className="text-gray-800 text-md">
                    Industrie Manufacturière
                  </li>
                  <li className="text-gray-800 text-md">
                    Biens de Grandes Consommations
                  </li>
                  <li className="text-gray-800 text-md">Emballages</li>
                  <li>
                    <button
                      onClick={() => setIsSupplyChainOpen(!isSupplyChainOpen)}
                      className="text-gray-800 text-md flex items-center space-x-1 hover:text-blue-600"
                    >
                      <span>Chaîne d'Approvisionnement</span>
                      <ChevronDown
                        className={`h-3 w-3 transition-transform ${isSupplyChainOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                    {isSupplyChainOpen && (
                      <ul className="ml-4 mt-1 space-y-1 text-gray-600 text-md">
                        <li>Planification</li>
                        <li>Approvisionnement</li>
                        <li>Transport & Logistique</li>
                      </ul>
                    )}
                  </li>
                </ul>
                <ul className="space-y-3">
                  <li className="text-gray-800 text-md">
                    Transformation Digitale
                  </li>
                  <li className="text-gray-800 text-md">Mines, Pétrole & Gaz</li>
                  <li className="text-gray-800 text-md">
                    Ingénierie, Bâtiments & Matériaux de Construction
                  </li>
                  <li className="text-gray-800 text-md">Immobilier</li>
                </ul>
                <ul className="space-y-3">
                  <li className="text-gray-800 text-md">
                    Services Financiers
                  </li>
                  <li className="text-gray-800 text-md">Investissements</li>
                  <li className="text-gray-800 text-md">
                    Gouvernement & Secteur Public
                  </li>
                </ul>
              </div>
            )}
            {selectedMenu === "aPropos" && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <Link
                    href="/Notreorganisation"
                    className="text-blue-900 font-semibold text-xl mb-4 border-b border-gray-200 pb-2 block whitespace-nowrap"
                  >
                    Notre Organisation
                  </Link>
                  <ul className="space-y-3">
                    <li>
                      <Link
                        href="/Notreorganisation?section=adn"
                        className="text-gray-800 hover:text-blue-900 text-md block"
                        onClick={closeMenu}
                      >
                        Notre ADN
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/Notreorganisation?section=vision"
                        className="text-gray-800 hover:text-blue-900 text-md block"
                        onClick={closeMenu}
                      >
                        Notre Vision
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/Notreorganisation?section=valeurs"
                        className="text-gray-800 hover:text-blue-900 text-md block"
                        onClick={closeMenu}
                      >
                        Nos Valeurs
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/Notreorganisation?section=equipe"
                        className="text-gray-800 hover:text-blue-900 text-md block"
                        onClick={closeMenu}
                      >
                        Notre Équipe
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <Link
                    href="/metiers"
                    className="text-blue-900 font-semibold text-xl mb-4 border-b border-gray-200 pb-2 block whitespace-nowrap"
                  >
                    Nos Métiers
                  </Link>
                  <ul className="space-y-3">
                    <li>
                      <Link
                        href="/a-propos/accompagnement"
                        className="text-gray-800 hover:text-blue-900 text-md block"
                        onClick={closeMenu}
                      >
                        Accompagnement Stratégique
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/a-propos/banque"
                        className="text-gray-800 hover:text-blue-900 text-md block"
                        onClick={closeMenu}
                      >
                        La Banque d'Affaires
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/a-propos/impact"
                        className="text-gray-800 hover:text-blue-900 text-md block"
                        onClick={closeMenu}
                      >
                        Impact & PPP
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-blue-900 font-semibold text-xl mb-4 border-b border-gray-200 pb-2 whitespace-nowrap">
                    Nous Contacter
                  </h3>
                  <ul className="space-y-3">
                    <li>
                      <Link
                        href="/contact"
                        className="text-gray-800 hover:text-blue-900 text-md block"
                        onClick={closeMenu}
                      >
                        Nous Contacter
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}