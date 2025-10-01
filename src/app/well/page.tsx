
'use client';

import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import styles from './well.module.css';

const project = {
  title: "The Well",
  status: "AVAILABLE",
  image: "/uploads/2024/09/well-banner.jpeg",
  description: "The Ultimate Downtown Lifestyle. Live, Eat, Shop, Work and Play. Welcome to Classic Series Residences at The Well. You’re in the best place in Canada to enjoy it all. It is the perfect home base for exploring the entertainment district and sporting venues which are just a short walk or streetcar ride away. From live theatre to top Hollywood blockbusters; baseball, hockey and basketball games; and live performances of all types of music.",
  features: [
    "Developer: TRIDEL",
    "Architect: Hariri Pontarini",
    "The Well is the culmination of years of incredible creativity, planning, and organization. The 7 buildings — one commercial and six residential — are already transforming the downtown skyline over an entire city block. Connecting the buildings is a spectacular glass-roofed atrium that houses The Well’s high-end retail spaces.",
    "In the heart of Toronto's illustrious King West district, the project is becoming one of the best destinations in Toronto",
    "The community offers an exquisite 500,000 sq ft of retail space, united under an awe-inspiring glass canopy, and a 70,000 sq ft gourmet food market at Wellington, elevating the standard of upscale urban living.",
    "True wellness and unimagined luxury. The Well Signature Series places you in the heart of a neighbourhood that pulls together the best international experience. Gourmet restaurants and boutique shopping, arts, culture and nightlife: Toronto at its finest."
  ],
  quickFacts: [
      "Location: Spadina Ave & Front Street West, Toronto, ON 455 Wellington Street West, Toronto",
      "Classic series Tower I: 38 Storeys/ 400 suites",
      "Classic series Tower II: 22 Storeys / 258 suites",
      "Signature Series Tower: 14 storey / 98 suites",
  ],
  developer: "As the largest builder of sustainable condominiums in Canada, Tridel is proud to be a 14-time recipient of the Green Builder of the Year award from the Building Industry and Land Development Association (BILD). With a 90-year history, Tridel embodies excellence in real estate. Buying from Tridel means more than purchasing a home; it’s an investment in quality, sustainability, and community."
};

export default function WellPage() {
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
        <section className={`${styles.wpBlockGroup} ${styles.alignfull} py-12`}>
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
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Classic Residences at The Well?</h3>
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
              <img src="/uploads/2024/09/well-why.jpeg" alt="Why The Well" className="w-full h-auto object-cover rounded-xl shadow-lg" />
            </motion.div>
          </div>
        </section>

        <section className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className={`text-3xl font-bold text-gray-900 mb-6 ${styles.hasTextAlignCenter}`}>Quick facts:</h2>
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

        <section className={`py-16 ${styles.wpBlockGallery}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <img src="/uploads/2024/09/well-gallery-1.jpeg" alt="Gallery 1" className="w-full h-auto object-cover rounded-lg"/>
                    <img src="/uploads/2024/09/well-gallery-2-1024x607.jpeg" alt="Gallery 2" className="w-full h-auto object-cover rounded-lg"/>
                    <img src="/uploads/2024/09/well-gallery-3.jpeg" alt="Gallery 3" className="w-full h-auto object-cover rounded-lg"/>
                    <img src="/uploads/2024/09/well-gallery-4-1024x775.jpeg" alt="Gallery 4" className="w-full h-auto object-cover rounded-lg"/>
                </div>
            </div>
        </section>

        <section className="py-16 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div id="wpmapblock_8b96644d" className={styles.wpmapblockrender}></div>
            </div>
        </section>

        <section className="py-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className={`text-3xl font-bold text-gray-900 mb-6 ${styles.hasTextAlignCenter}`}>About Developer:</h2>
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
