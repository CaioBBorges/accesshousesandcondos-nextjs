
'use client';

import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './crosstown.module.css';

const project = {
  title: "Crosstown",
  status: "PRE-CONSTRUCTION",
  image: "/uploads/2024/09/image-1.png",
  description: "Crosstown Master Planned Community in Don Mills. Eglinton Ave & Don Mills Rd From boutique mid-rise condominiums to modern freehold townhomes with private outdoor space Crosstown has breathtaking parkside escapes. Crosstown was designed to keep you connected. From Crosstown Place, residents have direct underground access to the TTC Bus Terminal, Eglinton Crosstown LRT and the future Ontario Line. You’re never far from the action, and you’re always close to home.",
  features: [
    "60 Acres of space to live, work, play and thrive.",
    "Crosstown has LRT Metrolink at your door step",
    "Conveniently located in Don Mills, Toronto close to Sunnybrook park and only 20 minutes from Toronto waterfront.",
    "A huge Community Centre will be located on the property – with two Ice Rinks.",
    "Two parks",
    "Bike lanes and walking trails",
    "Connected to Sunnybrook Park and neighbouring Leaside",
    "Crosstown place 250,000 sq.ft. of office space.",
    "Natural Oasis! 380 Acre Sunnybrook Park, Aga Khan Park, Edward Gardens and more",
    "Culture and Community: The Don Mills neighbourhood is rich with history, heritage, shops & entertainment",
    "Crosstown is blessed with an abundance of gorgeous parks and green space. Here are some parks close to home:"
  ],
  parks: [
      { name: "Moccasin Trails Park:", distance: "18 minutes walk" },
      { name: "E.T. Seton Park:", distance: "10 minutes walk" },
      { name: "Sunnybrook Park:", distance: "13 minutes walk" },
  ],
  quickFacts: [
    "Builder/Developer: Aspen Ridge Homes",
    "Over 30 years of home building experience",
    "Architect: CORE Architects",
    "One Crosstown East- Tower I and II",
    "One Crosstown West Tower Tower III",
    "Mid -rise tower: CREST",
    "Mid -rise: LILLY at Crosstown is 8-storeys with 2 mid-rise buildings atop a shared ground floor.",
    "400 Freehold Townhouses. Each townhome features private outdoor space, and some have rooftop terraces and garages."
  ],
  developer: "Aspen Ridge stands as one of Canada’s leading developers, with over 30 years of comprehensive family experience with a long line of distinguished builders and developers, whose philosophy embodies excellence, craftsmanship, quality and care."
};

export default function CrosstownPage() {
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
              <Image src={project.image} alt={project.title} width={1200} height={600} className="w-full h-auto object-cover rounded-xl shadow-2xl max-h-[600px]" />
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
              <h2 className={`text-3xl font-bold text-gray-900 mb-6 ${styles.hasTextAlignCenter}`}>Crosstown Master Planned Community in Don Mills.</h2>
              <p className={`text-lg text-gray-600 ${styles.hasTextAlignCenter}`}><strong>Eglinton Ave & Don Mills Rd</strong></p>
              <div className={`prose prose-lg max-w-none text-gray-600 ${styles.hasTextAlignCenter}`}>
                <p>{project.description}</p>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className={`text-3xl font-bold text-gray-900 mb-6 ${styles.hasTextAlignCenter}`}>Why Crosstown?</h2>
            <ul className="space-y-3">
              {project.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <svg className="w-6 h-6 text-blue-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
            <div className="grid grid-cols-2 gap-4 mt-4">
                {project.parks.map((park, index) => (
                    <div key={index} className="col-span-1">{park.name}</div>
                ))}
                 {project.parks.map((park, index) => (
                    <div key={index} className="col-span-1">{park.distance}</div>
                ))}
            </div>
          </div>
        </section>

        <section className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <Image src="/uploads/2024/09/image.png" alt="Crosstown" width={1200} height={600} className="w-full h-auto object-cover rounded-xl shadow-lg" />
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

        <section className={`py-16 ${styles.wpBlockGallery}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Image src="/uploads/2024/09/image-2.png" alt="Gallery 1" width={800} height={600} className="w-full h-auto object-cover rounded-lg"/>
                    <Image src="/uploads/2024/09/image-3.png" alt="Gallery 2" width={800} height={600} className="w-full h-auto object-cover rounded-lg"/>
                    <Image src="/uploads/2024/09/image-4.png" alt="Gallery 3" width={800} height={600} className="w-full h-auto object-cover rounded-lg"/>
                    <Image src="/uploads/2024/09/image-5.png" alt="Gallery 4" width={800} height={600} className="w-full h-auto object-cover rounded-lg"/>
                </div>
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
