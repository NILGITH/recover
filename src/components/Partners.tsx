import React from "react"

const logoMap = {
  "Société Ivoirienne de Banque": "/images/Nosreferences/Logosib.png",
  "Orabank": "/images/Nosreferences/ORABANK.jpg",
  "BDU-CI": "/images/Nosreferences/BDU-CI.jpg",
  "BICI Bourse": "/images/Nosreferences/bicibourse.jpg",
  "IFC": "/images/Nosreferences/ifclogo.jpg",
  "NESKO Cocoa Products": "/images/Nosreferences/NESKAO.jpg",
  "SIDCAO": "/images/Nosreferences/sidcoa.jpg",
  "International Cocoa Initiative": "/images/Nosreferences/INTERNATIONAL CACAO INITIATIVE.jpg",
  "ADM Cocoa": "/images/Nosreferences/ADM CACAO.png",
  "KORIGINS": "/images/Nosreferences/K'ORIGINS.png",
  "SAPLED": "/images/Nosreferences/SAPLED.jpg",
  "SUCAF Côte d'Ivoire": "/images/Nosreferences/SUCAF CÔTE D'IVOIRE.jpg",
  "SOMDIAA": "/images/Nosreferences/SPMDIAA.jpg",
  "Unilever": "/images/Nosreferences/Unilever-Logo.png",
  "EuroCosmetics": "/images/Nosreferences/EURO COSMETIC'S.jpg",
  "Biopharma": "/images/Nosreferences/BIOPHARMA.png",
  "TAGIDOR": "/images/Nosreferences/TAGIDOR.png",
  "Roche": "/images/Nosreferences/ROCHE.png",
  "GLENERGIES": "/images/Nosreferences/GLEN.jpg",
  "CIE": "/images/Nosreferences/compagnie.jpg",
  "IHS Towers": "/images/Nosreferences/IHSlogo.png",
  "CNAM": "/images/Nosreferences/CNAM.png",
  "FGIS": "/images/Nosreferences/FGIS.png",
  "Oikocredit": "/images/Nosreferences/Oikocredit.png",
  "PHYTAGRI": "/images/Nosreferences/PHYTAGRI.SA.png",
  "Orange Fondation": "/images/Nosreferences/Orange-Logo.png",
  "Ministère Économie Numérique": "/images/Nosreferences/logo-micomef.png",
  "MFS Africa": "/images/Nosreferences/MFSAfrica.jpg",
  "Côte d'Ivoire Énergies": "/images/Nosreferences/cienergies.png",
  "COBASA": "/images/Nosreferences/coba.jpg",
  "ATEPA": "/images/Nosreferences/atepagroupe.jpg",
  "AMSCO": "/images/Nosreferences/AmscoAS.png",
  // Ajoute d'autres correspondances si besoin
};

export default function Partners() {
  const partners = [
    { name: "Société Ivoirienne de Banque", category: "Banque" },
    { name: "Orabank", category: "Banque" },
    { name: "BDU-CI", category: "Banque" },
    { name: "BICI Bourse", category: "Finance" },
    { name: "IFC", category: "Finance Internationale" },
    { name: "NESKO Cocoa Products", category: "Agro-industrie" },
    { name: "SIDCAO", category: "Agro-industrie" },
    { name: "International Cocoa Initiative", category: "Organisation Internationale" },
    { name: "ADM Cocoa", category: "Agro-industrie" },
    { name: "KORIGINS", category: "Technologie" },
    { name: "SAPLED", category: "Services" },
    { name: "SUCAF Côte d'Ivoire", category: "Agro-industrie" },
    { name: "SOMDIAA", category: "Agro-industrie" },
    { name: "Unilever", category: "Multinationale" },
    { name: "EuroCosmetics", category: "Cosmétiques" },
    { name: "Biopharma", category: "Pharmaceutique" },
    { name: "TAGIDOR", category: "Services" },
    { name: "Roche", category: "Pharmaceutique" },
    { name: "GLENERGIES", category: "Énergie" },
    { name: "CIE", category: "Énergie" },
    { name: "IHS Towers", category: "Télécommunications" },
    { name: "CNAM", category: "Assurance" },
    { name: "FGIS", category: "Finance" },
    { name: "Oikocredit", category: "Microfinance" },
    { name: "PHYTAGRI", category: "Agriculture" },
    { name: "Orange Fondation", category: "Fondation" },
    { name: "Ministère Économie Numérique", category: "Institution Publique" },
    { name: "MFS Africa", category: "Services Financiers" },
    { name: "Côte d'Ivoire Énergies", category: "Énergie" },
    { name: "COBASA", category: "Services" },
    { name: "ATEPA", category: "Services" },
    { name: "AMSCO", category: "Services" },
  ];

  return (
    <section id="partners" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <div 
            className="h-64 bg-cover bg-center rounded-lg mb-8"
            style={{
              backgroundImage: ""
            }}
          >
            <div className="h-full  bg-opacity-70 flex items-center justify-center rounded-lg">
              <h2 className="text-4xl  text-blue-900 font-extrabold tracking-tight drop-shadow-lg ">
                ILS NOUS ONT FAIT CONFIANCE
              </h2>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8">
          {partners.map((partner, index) => {
            const logo = logoMap[partner.name];
            return (
              <div key={index} className="group">
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 h-32 flex items-center justify-center">
                  <div className="text-center w-full">
                    {logo ? (
                      <img 
                        src={logo} 
                        alt={partner.name + ' logo'} 
                        className={
                          partner.name === "Ministère Économie Numérique"
                            ? "w-[28rem] h-[20rem] object-contain mx-auto mb-3"
                            : "w-24 h-20 object-contain mx-auto mb-3"
                        }
                      />
                    ) : (
                      <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-105 transition-transform duration-300">
                        <span className="text-white font-bold text-xs">
                          {partner.name.split(' ').map(word => word[0]).join('').slice(0, 3)}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-gray-600 mb-4">
            Nous sommes fiers de collaborer avec des partenaires de renom dans différents secteurs :
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-blue-900 font-medium">
            <span className="bg-blue-100 px-3 py-1 rounded-full">Banques & Finance</span>
            <span className="bg-blue-100 px-3 py-1 rounded-full">Agro-industrie</span>
            <span className="bg-blue-100 px-3 py-1 rounded-full">Télécommunications</span>
            <span className="bg-blue-100 px-3 py-1 rounded-full">Énergie</span>
            <span className="bg-blue-100 px-3 py-1 rounded-full">Pharmaceutique</span>
            <span className="bg-blue-100 px-3 py-1 rounded-full">Organisations Internationales</span>
          </div>
        </div>
      </div>
    </section>
  )
}
