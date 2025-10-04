'use client';

import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './the-clove.module.css';

const project = {
  title: "The Clove",
  status: "COMING SOON",
  image: "/uploads/2024/09/clover-banner.jpeg",
  description: "This dynamic urban hub will feature a collection of modern residences surrounded by public parks, enriching amenities, enganging retail shops and unique culinary experiences. Now is your chance to be part of this Etobicoke community.",
  features: [
    "The Clove is a first phase of a bold new vision",
    "Close to the Pearson economic zone, Canada’s second largest employment zone",
    "Building details: -33 and 9 storey 26 000 sf of amenities 686 suites",
    "32 Acres Master Planned Community",
    "9 + Acres of vibrant public realm",
    "3+ Acres of parkland",
    "180 000 sf new retail space",
    "20 000 sf of communities amenities",
    "Location: Cloverdale mall in Etobicoke"
  ],
  highways: [
      "1 min to hwy 427",
      "4 min to hwy 405",
      "2 min to qew",
      "7 min to Lakeshore blvd",
      "9 min to Pearson Airport",
  ],
  transit: [
      "1 min to Bus Stop along Dundas street",
      "4 min to Kipling Transit Hub",
      "Kipling GO Station – Milton Line",
      "Kipling TCC Subway Station – Line 2",
      "Kipling TCC Bus Terminal",
      "Miway Bus Routes",
      "Express Bus to Pearson Airport",
  ],
  brt: [
      "The proposed Dundas BRT will bring over 40 KM of dedicated bus rapid transit (BRT) lanes along Dundas Street-from Highway 6 in the city of Hamilton through to the kipling transit hub in the city of toronto.",
      "This extensive BRT will alson seamlessly connect with the TCC subway Line 2, the Milton Go line and the 18-kilometer Hazel McCallion LRT on hurontario St., which is currently under construction.",
  ],
  developer: "Mattamy Homes is the largest privately owned homebuilder in North America with over 45 years of industry-leading experience. As a company committed to delivering high-quality homes across North America, Mattamy continues to invest in the GTA real estate market to meet its growing demand for increased density and affordable housing options. Over the past 24 months, Mattamy has successfully launched nine buildings for sale in the Greater Toronto Area (GTA), all of which are either under construction or approved to begin.",
  developerFacts: [
      "Largest privately-owned homebuilder in North America",
      "Over 45 years of creating places people are proud to call home",
      "125,000+ homes built",
  ]
};

export default function TheClovePage() {
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
        <section className={`${styles.wpBlockGroup} ${styles.alignfull} py-12 overflow-x-hidden`}>
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

        <section className="py-16 overflow-x-hidden">
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

        <section className="py-16 bg-white overflow-x-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Why THE CLOVE?</h3>
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
              <Image src="/uploads/2024/09/the-clove-why-1024x853.jpeg" alt="Why The Clove" width={1024} height={853} className="w-full h-auto object-cover rounded-xl shadow-lg" />
            </motion.div>
          </div>
        </section>

        <section className={`py-16 ${styles.wpBlockGallery} overflow-x-hidden`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Image src="/uploads/2024/09/the-clove-gallery-image-3-1024x575.jpeg" alt="Gallery 1" width={1024} height={575} className="w-full h-auto object-cover rounded-lg"/>
                    <Image src="/uploads/2024/09/the-clove-gallery-image-2-1024x575.jpeg" alt="Gallery 2" width={1024} height={575} className="w-full h-auto object-cover rounded-lg"/>
                    <Image src="/uploads/2024/09/the-clove-gallery-image-3-1-1024x575.jpeg" alt="Gallery 3" width={1024} height={575} className="w-full h-auto object-cover rounded-lg"/>
                    <Image src="/uploads/2024/09/the-clove-gallery-image-1024x575.jpeg" alt="Gallery 4" width={1024} height={575} className="w-full h-auto object-cover rounded-lg"/>
                </div>
            </div>
        </section>

        <section className="py-16 bg-white overflow-x-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
                              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2884.59695039894!2d-79.343919!3d43.73507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDPCsDQ0JzA2LjMiTiA3OcKwMjAnMzguMSJX!5e0!3m2!1sen!2sca!4v1620000000000!5m2!1sen!2sca"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg shadow-md"
              ></iframe>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
                <h1 className={`text-3xl font-bold text-gray-900 mb-6 ${styles.hasTextAlignCenter}`}>UNRIVALED ACCESS</h1>
                <div className="grid grid-cols-2 gap-8">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">HIGHWAYS</h2>
                        <ul className="space-y-2">
                            {project.highways.map((item, index) => (
                                <li key={index} className="text-gray-700">{item}</li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">TRANSIT</h2>
                        <ul className="space-y-2">
                            {project.transit.map((item, index) => (
                                <li key={index} className="text-gray-700">{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="mt-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">DUNDAS BUS RAPID TRANSIT</h2>
                    <ul className="space-y-2">
                        {project.brt.map((item, index) => (
                            <li key={index} className="text-gray-700">{item}</li>
                        ))}
                    </ul>
                </div>
            </motion.div>
          </div>
        </section>

        <section className="py-16 overflow-x-hidden">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className={`text-3xl font-bold text-gray-900 mb-6 ${styles.hasTextAlignCenter}`}>The Developer</h2>
                <div className="flex justify-center mb-8">
                    <Image src="/uploads/2024/09/00229fde-6f98-4ff4-917a-a8499de47047-removebg-preview-e1725744996612.png" alt="Mattamy Homes" width={300} height={100} />
                </div>
                <p className="text-lg text-gray-600">{project.developer}</p>
                <ul className="space-y-2 mt-4">
                    {project.developerFacts.map((fact, index) => (
                        <li key={index} className="flex items-start">
                        <svg className="w-6 h-6 text-blue-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                        <span className="text-gray-700">{fact}</span>
                      </li>
                    ))}
                </ul>
            </div>
        </section>

        <section className="py-16 bg-white overflow-x-hidden">
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