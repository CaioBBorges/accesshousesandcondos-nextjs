
'use client';

import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './modal.module.css';

const project = {
  title: "Modal",
  status: "AVAILABLE",
  image: "/uploads/2024/09/modal-project.jpeg",
  description: "Discover Modal, a great collection of townhomes in the heart of Cambridge, ON. Designed for modern living, Modal offers a unique blend of contemporary design, spacious interiors, and community-focused living. Developed by the renowned Reid’s Heritage Properties, these homes are built with quality craftsmanship and attention to detail, providing a perfect sanctuary for families, professionals, and everyone in between.",
  features: [
    "Developer: Reid’s Heritage Properties",
    "Architects: Modern Architectural Group",
    "Location: Cambridge, ON",
    "Spacious 2, 3, and 4-bedroom townhome designs.",
    "Private backyards and patio spaces for outdoor living.",
    "Energy-efficient construction and smart home features.",
    "Close proximity to parks, schools, shopping, and major transit routes.",
    "Thoughtfully designed community with landscaped green spaces."
  ],
  socialAmenities: [
    "Community Clubhouse",
    "Outdoor BBQ and Picnic Areas",
    "Children's Playground",
    "Multi-purpose Event Room",
    "Visitor Parking"
  ],
  fitnessAmenities: [
    "Community Fitness Centre",
    "Yoga & Flex Studio",
    "Outdoor Fitness Circuit",
    "Walking & Biking Trails"
  ],
  leisureAmenities: [
    "Landscaped Courtyards",
    "Community Gardens",
    "Dog Park",
    "Easy access to local conservation areas"
  ],
  wellnessAmenities: [
    "Quiet reading nooks",
    "Meditation gardens",
    "Professionally managed landscaping",
    "Secure and walkable neighbourhood"
  ],
  developer: "For over 40 years, Reid’s Heritage Homes has been a trusted name in the home building industry. With a commitment to quality, integrity, and innovation, they have built thousands of homes across Ontario. Their reputation is built on creating communities that are not just beautiful, but are also sustainable and designed to last for generations. Reid’s Heritage Properties is dedicated to providing a superior homeownership experience from start to finish."
};

export default function ModalPage() {
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
              <h2 className={`text-3xl font-bold text-gray-900 mb-6 ${styles.hasTextAlignCenter}`}>Project Details</h2>
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
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Why {project.title}?</h3>
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
              <Image src={project.image} alt={`Why ${project.title}`} width={800} height={600} className="w-full h-auto object-cover rounded-xl shadow-lg" />
            </motion.div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className={`text-3xl font-bold text-gray-900 mb-6 ${styles.hasTextAlignCenter}`}>Quick Facts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Social Amenities</h3>
                <ul className="space-y-2">
                  {project.socialAmenities.map((item, index) => (
                    <li key={index} className="text-gray-700">{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Fitness Amenities</h3>
                <ul className="space-y-2">
                  {project.fitnessAmenities.map((item, index) => (
                    <li key={index} className="text-gray-700">{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Leisure Amenities</h3>
                <ul className="space-y-2">
                  {project.leisureAmenities.map((item, index) => (
                    <li key={index} className="text-gray-700">{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Wellness Amenities</h3>
                <ul className="space-y-2">
                  {project.wellnessAmenities.map((item, index) => (
                    <li key={index} className="text-gray-700">{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className={`py-16 ${styles.wpBlockGallery}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Image src={"/uploads/2024/09/image-1.png"} alt="Gallery 1" width={1024} height={576} className="w-full h-auto object-cover rounded-lg"/>
                    <Image src={"/uploads/2024/09/image-2.png"} alt="Gallery 2" width={1024} height={529} className="w-full h-auto object-cover rounded-lg"/>
                    <Image src={"/uploads/2024/09/image-3.png"} alt="Gallery 3" width={1024} height={576} className="w-full h-auto object-cover rounded-lg"/>
                    <Image src={"/uploads/2024/09/image-4.png"} alt="Gallery 4" width={1024} height={682} className="w-full h-auto object-cover rounded-lg"/>
                </div>
            </div>
        </section>

        <section className="py-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className={`text-3xl font-bold text-gray-900 mb-6 ${styles.hasTextAlignCenter}`}>About the Developer</h2>
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
