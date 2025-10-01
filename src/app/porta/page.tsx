
'use client';

import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import styles from './porta.module.css';

const project = {
  title: "Porta",
  status: "SELLING",
  image: "/uploads/2022/09/Hero-Shot-scaled.jpg",
  description: "YOUR GATEWAY TO GREAT LIVING",
  features: [
    "Condo: 25 Dundas St W. 3 Buildings, Total of 302 units, 1 parking space per unit, 20 000 sft of Retail space",
    "Phase 1: 13 Storey, 96 Units, 1, 2, 3 Bedrooms, 2 Penthouse Floors",
    "Amenities: Elevated pool overlooking The Bay of Quinte, Outdoor Terrace with BBQ and fire pits, Fitness Centre, Social Lounge"
  ],
  highlights: [
      "Steps to Downtown Belleville",
      "Prince Edward County-20 min",
      "Hwy 401 -13 min",
      "Meyers Pier - 6 min",
      "Montreal - 3.5 hours",
      "Toronto - 2 hours",
      "Kingston - 1 hour",
      "Ottawa - 2.5 hours",
  ],
  developer: "MDM Developer",
};

export default function PortaPage() {
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
        <section className={styles.hero}>
            <h1 className={styles.title}>{project.title}</h1>
            <p className={styles.subtitle}>{project.status}</p>
        </section>

        <section className={styles.content}>
            <div className={styles.grid}>
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className={styles.imageContainer}>
                    <img src={project.image} alt={project.title} className={styles.image} />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className={styles.textContainer}>
                    <h2 className={styles.heading}>{project.description}</h2>
                    <p className={styles.paragraph}>Condo Belleville Porta</p>
                </motion.div>
            </div>
        </section>

        <section className={styles.content}>
            <h2 className={`${styles.heading} text-center`}>HIGHLIGHTS</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                {project.highlights.map((highlight, index) => (
                    <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1}} className="p-4 bg-white rounded-lg shadow-md">{highlight}</motion.div>
                ))}
            </div>
        </section>

        <section className={`${styles.content} bg-gray-100 py-16`}>
            <h2 className={`${styles.heading} text-center`}>Highlights of Porta Condos</h2>
            <p className={`${styles.paragraph} text-center max-w-3xl mx-auto`}>Belleville is a historical town overgoing a new transformation. Porta Condos beautifully integrates small- town charm with the convenience of city living. Floor-to-ceiling windows with naturally streaming light and great views in any direction of Belleville. Nature at your doorstep. Situated between Toronto, Ottawa and Montreal on the Bay of Quinte.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                {project.features.map((feature, index) => (
                    <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1}} className="p-6 bg-white rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-2">{feature.split(':')[0]}</h3>
                        <p>{feature.split(':')[1]}</p>
                    </motion.div>
                ))}
            </div>
        </section>

        <section className={styles.content}>
            <h2 className={`${styles.heading} text-center`}>{project.developer}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2}}>
                    <img src="/uploads/2022/09/Screenshot06-22-202215.51.45-e1662769128521.png" alt="Construction Site" className={styles.image} />
                    <h3 className="text-xl font-semibold mt-4 text-center">Construction Site</h3>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4}}>
                    <img src="/uploads/2022/09/Porta-Map-1536x1224-1.png" alt="Location" className={styles.image} />
                    <h3 className="text-xl font-semibold mt-4 text-center">Location</h3>
                </motion.div>
            </div>
        </section>

      </main>
    </div>
  );
}
