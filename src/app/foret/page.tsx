
'use client';

import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import styles from './foret.module.css';

const project = {
  title: "Forêt",
  status: "AVAILABLE",
  image: "/uploads/2024/09/foret-banner.jpeg",
  description: "THE FORÊT FOREST HILL FORÊT, the largest master planned community in Forest Hill, Toronto. A luxurious condominium community that embodies the essence of Forest Hill. Standing tall at the heart of the most coveted neighbourhoods in midtown Toronto. Forêt™ brings together majesty, prestige, nature, and youthful energy, moulding them into a one-of-a-kind expression of glamour and grace.",
  features: [
    "Its prime location at Bathurst and St. Clair is directly on the subway and streetcar line connecting you everywhere.",
    "Surrounded by the best schools in Ontario ! Purchasing near a transportation hub is a smart investment opportunity. Both residential and commercial property values increase when they are developed near transit.",
    "Building details: -33 and 9 storey 26 000 sf of amenities 686 suites",
    "Luxury properties near transit tend to appreciate faster due to their strategic location, making them a strong investment choice for long-term gains.",
    "Its prime location at Bathurst and St. Clair is directly on the subway and streetcar line connecting you everywhere.",
    "Surrounded by the best schools in Ontario."
  ],
  quickFacts: [
    "Developer : Canderel and Kingsett Capital",
    "Location: 490 St. Clair Ave West, Toronto (St. Clair Ave W & Bathurst St)",
    "Architect: BDP Quadrangle",
    "Forest Hill Neighbourhood",
    "Largest Master Planned Community in Forest Hill",
    "3 Towers",
    "Storeys: 36, 32, 31",
    "Suites ranging from studios to three-bedroom",
    "Boutique suite collection in Tower 3",
    "Units: 1,000 total",
    "37,000 square feet of amenities",
    "Outdoor Play Area",
    "Public Park",
    "Daycare Center",
    "Direct access to St. Clair West Subway Station",
    "Direct access to the streetcar line",
    "1 minute to St. Michael's College School",
    "7 minutes to Casa Loma",
    "11 minute walk to Sir Winston Church Park",
    "15 minutes to Downtown Toronto",
    "Easy access to local restaurants, cafes, shops, parks"
  ],
  developer: "Canderel Residential is an award-winning home developer who has built over 75,000 homes, all to the great satisfaction of their clients. They have a fixed presence in six cities across the country, and they take their position as community builders very seriously. They have been widely recognized for their developing prowess, which is evidenced by the copious amounts of awards that they’ve earned from different municipalities."
};

export default function ForetPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
          <Link href="/projects" className="flex items-center text-gray-500 hover:text-gray-900">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Projects
          </Link>
        </div>
      </header>

      <main>
        <section className={`py-12 ${styles.wpBlockGroup} ${styles.alignfull}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-center mb-8">
                <h1 className="text-4xl md:text-5xl font-bold text-white">{project.title}</h1>
                <p className="text-lg md:text-xl text-blue-400 font-semibold mt-2">{project.status}</p>
              </div>
              <img src={project.image} alt={project.title} className="w-full h-auto object-cover rounded-xl shadow-2xl max-h-[600px]" />
            </motion.div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className={`text-3xl font-bold text-gray-900 mb-6 ${styles.hasTextAlignCenter}`}>THE FORÊT FOREST HILL</h2>
              <div className={`prose prose-lg max-w-none text-gray-600 ${styles.hasTextAlignCenter}`}>
                <p>{project.description}</p>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Why FORÊT?</h3>
              <ul className="space-y-3">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-6 h-6 text-blue-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <img src="/uploads/2024/09/foret-why-foret-1024x1024.jpeg" alt="Why Foret" className="w-full h-auto object-cover rounded-xl shadow-lg" />
            </motion.div>
          </div>
        </section>

        <section className={`py-16 ${styles.wpBlockGallery}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <img src="/uploads/2024/09/foret-gallery-1-1024x604.jpeg" alt="Gallery 1" className="w-full h-auto object-cover rounded-lg"/>
                    <img src="/uploads/2024/09/foret-gallery-2-1024x576.jpeg" alt="Gallery 2" className="w-full h-auto object-cover rounded-lg"/>
                    <img src="/uploads/2024/09/foret-gallery-3-1024x531.jpeg" alt="Gallery 3" className="w-full h-auto object-cover rounded-lg"/>
                    <img src="/uploads/2024/09/foret-gallery-4-1024x682.jpeg" alt="Gallery 4" className="w-full h-auto object-cover rounded-lg"/>
                </div>
            </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className={`text-3xl font-bold text-gray-900 mb-6 ${styles.hasTextAlignCenter}`}>Quick Facts</h2>
            <ul className="space-y-3">
              {project.quickFacts.map((fact, index) => (
                <li key={index} className="flex items-start">
                  <svg className="w-6 h-6 text-blue-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  <span className="text-gray-700">{fact}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className={`text-3xl font-bold text-gray-900 mb-6 ${styles.hasTextAlignCenter}`}>CONNECTIVITY:</h2>
                <img src="/uploads/2024/09/foret-connectivity-1024x514.jpeg" alt="Connectivity" className="w-full h-auto object-cover rounded-xl shadow-lg" />
            </div>
        </section>

        <section className="py-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className={`text-3xl font-bold text-gray-900 mb-6 ${styles.hasTextAlignCenter}`}>Developer:</h2>
                <p className="text-lg text-gray-600">{project.developer}</p>
            </div>
        </section>

        <section className="py-16 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                        Interested in {project.title}?
                    </h2>
                    <p className="text-lg text-gray-600 mb-8">
                        Contact our expert team to learn more about available units, pricing, 
                        and investment opportunities.
                    </p>
                    <motion.a
                        href="/contact-us"
                        className="inline-block bg-[#3078e4] hover:bg-blue-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Contact Us Today
                    </motion.a>
                </motion.div>
            </div>
        </section>
      </main>
    </div>
  );
}
