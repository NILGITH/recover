import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Header from "@/components/Header";
import Footer from '@/components/Footer';

export default function ConseilStrategique() {
  const router = useRouter();
  const strategieRef = useRef<HTMLDivElement>(null);
  const concurrentielleRef = useRef<HTMLDivElement>(null);
  const transformationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Attendre que la page soit chargée
    const timer = setTimeout(() => {
      const { section } = router.query;
      
      if (section) {
        let targetRef: React.RefObject<HTMLDivElement> | null = null;
        
        switch (section) {
          case 'strategie':
            targetRef = strategieRef;
            break;
          case 'concurrentielle':
            targetRef = concurrentielleRef;
            break;
          case 'transformation':
            targetRef = transformationRef;
            break;
        }
        
        if (targetRef?.current) {
          // Scroll vers la section
          targetRef.current.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'center' 
          });
          
          // Ajouter l'animation d'highlight
          targetRef.current.classList.add('animate-highlight');
          
          // Retirer la classe après l'animation
          setTimeout(() => {
            targetRef.current?.classList.remove('animate-highlight');
          }, 2000);
        }
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [router.query]);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20 ">
        <div className="max-w-7xl mt-20 mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">CONSEIL STRATÉGIQUE</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Développement de stratégies innovantes et transformation d'entreprise pour un avenir durable
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Introduction */}
        <div className="mb-16 rounded-lg  text-justify p-8">
          <p className="text-gray-700 max-w-6xl  text-lg leading-relaxed max-w-4xl">
            Qu'il s'agisse de définir la meilleure stratégie de croissance, de gérer une intégration post fusion, d'optimiser la logistique ou de recommander les systèmes d'information les plus appropriés, RECOVER conçoit pour ses clients des solutions uniques et sur mesure permettant d'obtenir des résultats tangibles.
          </p>
        </div>

        {/* Section 1: STRATEGIE & POLITIQUE D'ENTREPRISE */}
        <div 
          ref={strategieRef}
          className="mb-16 bg-white h-[350px] rounded-lg shadow-lg p-8 transition-all duration-1000"
        >
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-blue-700 uppercase tracking-wide mb-2">
              STRATÉGIE & POLITIQUE D'ENTREPRISE
            </h2>
            <div className="w-32 h-0.5 bg-blue-700"></div>
          </div>
          
          <div className="grid grid-rows-1  lg:grid-rows-2 gap-10">
            <div>
              <p className="text-gray-700 leading-relaxed">
                Pour les militaires, la stratégie est l'art de coordonner l'action de l'ensemble des forces de la nation pour conduire une guerre, gérer une crise ou préserver la paix. Appliquer à l'entreprise, elle définit les choix dans ses domaines d'activité, la détermination des objectifs long terme, les actions et l'allocation des ressources nécessaires à atteindre ces objectifs.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                RECOVER vous aidera à assurer une cohésion parfaite entre votre stratégie d'entreprise, votre structure organisationnelle, votre processus de décision et votre identité.
              </p>
            </div>
           
          </div>
        </div>

        {/* Section 2: STRATEGIE CONCURRENTIELLE & EFFICACITE OPERATIONNELLE */}
        <div 
          ref={concurrentielleRef}
          className="mb-16 bg-white rounded-lg shadow-lg p-8 transition-all duration-1000"
        >
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-blue-700 uppercase tracking-wide mb-2">
              STRATÉGIE CONCURRENTIELLE & EFFICACITÉ OPÉRATIONNELLE
            </h2>
            <div className="w-32 h-0.5 bg-blue-700"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <p className="text-gray-700 leading-relaxed">
                La politique générale et la stratégie de l'entreprise n'ont de sens que si elles sont déclinées en stratégie par domaine d'activité, dans un contexte d'efficacité opérationnelle. Pour ce faire, RECOVER vous accompagnera aussi bien sur l'analyse stratégique par produit ou « business unit », que sur l'amélioration de votre efficacité pour :
              </p>
            </div>
            <div className="space-y-3">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-blue-700 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-blue-700 font-medium">Les opérations industrielles et la « supply chain »</p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-blue-700 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-blue-700 font-medium">La vente et le marketing</p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-blue-700 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-blue-700 font-medium">L'organisation et la gestion stratégique du capital humain</p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 3: BUSINESS TRANSFORMATION */}
        <div 
          ref={transformationRef}
          className="mb-16 bg-white rounded-lg shadow-lg p-8 transition-all duration-1000"
        >
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-blue-700 uppercase tracking-wide mb-2">
              BUSINESS TRANSFORMATION
            </h2>
            <div className="w-32 h-0.5 bg-blue-700"></div>
          </div>
          
          <div className="space-y-8">
            {/* Subsection 1: Conduite du changement */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">• Conduite du changement</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Conduire efficacement le changement permet à l'entreprise de faire adhérer les équipes à un projet de transaction ou à une nécessité de forte évolution. Lorsqu'un changement s'opère, il s'accompagne d'un processus de deuil pour les individus concernés. Et pourtant il est désormais le seul moteur d'une croissance durable.
              </p>
              <p className="text-gray-700 leading-relaxed">
                RECOVER vous aidera à faire du changement votre principale force.
              </p>
            </div>

            {/* Subsection 2: Digitalisation */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">• Digitalisation, Transfo des systèmes d'info. et process métier</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                En ce qui concerne les systèmes d'information (SI), RECOVER se positionne comme un « navigateur » pour ses clients.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Le cabinet s'attache à intégrer les avancées technologiques dans la définition de la stratégie d'ensemble de l'entreprise, dans un objectif d'amélioration des résultats et de création d'avantages concurrentiels.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Nous aidons nos clients à :
              </p>
              <div className="space-y-3 ml-6">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-700 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-blue-700 font-medium">
                    Favoriser l'usage stratégique des SI en cohérence avec l'activité de l'entreprise, notamment lorsqu'il s'agit du choix et du processus d'implémentation d'un ERP ou durant les phases de migration vers un nouveau système.
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-700 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-blue-700 font-medium">
                    Construire une organisation SI performante à travers un alignement business/SI
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-700 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-blue-700 font-medium">
                    Réduire les coûts et la complexité des opérations et du développement des applications.
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-700 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-blue-700 font-medium">
                    Réduire les temps de cycle
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
