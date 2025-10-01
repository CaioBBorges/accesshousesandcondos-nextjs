
'use client';

import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './central-park.module.css';

const project = {
  title: "Central Park",
  status: "PRE-CONSTRUCTION",
  image: "/uploads/2024/09/central-park-project-image.jpeg",
  description: "-A Vibrant Pedestrian Experience- Central Park Residences is the ideal place to live. It incorporates over 320,000 square feet of newly designed creative office space that feature a stimulating range of shops, cafes and services at street level. The spaces have been designed to stoke a sense of wellness, while immersing you in the splendour of nature.",
  features: [
    "Developer: Amexon Developement Corporation",
    "Architects: CORE Architects",
    "Location: 1200 Sheppard Ave East - Toronto, ON",
    "Overlooking the East Don Parkland ravine.",
    "Heart of 12 acre master planned community",
    "Direct t access to the Leslie subway station, bus routes on Sheppard Avenue, and the relocated Oriole GO Transit station",
    "The Park Club features more than 55,000 square feet of fitness, wellness, leisure and social amenities over four sunlit floors, and rivals facilities at the world’s finest five-star resorts.",
    "Total of five buildings ranging from 12 to 31 storey",
    "Total 1478 residential units."
  ],
  socialAmenities: [
    "Coworking space with meeting rooms",
    "Business centre with smart technology",
    "Lobby lounges / library",
    "Private event / dining room",
    "Private screening room / theatre",
    "Recording / media / music studio",
    "Art display / event space",
    "Expansive event space / banquet room",
    "Event kitchen / show kitchen",
    "Piano lounge / wine lounge",
    "Kid’s club",
    "Guest hotel suites",
    "Privately operated, full-service daycare within Central Park"
  ],
  fitnessAmenities: [
    "Outdoor saltwater pool",
    "Indoor saltwater pool",
    "Hot tub",
    "Fitness club with cardio and weight areas",
    "Interactive fitness equipment",
    "Multipurpose fitness studios",
    "Spinning studio / Pilates studio",
    "Yoga / meditation studio",
    "Martial arts / boxing studio",
    "Half-court basketball",
    "Private fitness training",
    "Outdoor fitness zones"
  ],
  leisureAmenities: [
    "Skating rink (refrigerated)",
    "Rooftop barbecue areas / cabanas",
    "Herb garden",
    "Bowling alley and billiards room",
    "Golf simulator / putting green",
    "Arts and crafts / hobby studio",
    "Children’s playground",
    "Bike repair station",
    "Pet daycare",
    "Pet grooming / pet washing area"
  ],
  wellnessAmenities: [
    "The Park Spa",
    "Hair and nail bar",
    "Rooftop zen gardens",
    "Outdoor sundeck and lounges",
    "Luxurious change rooms, steam rooms, infrared saunas and marble showers",
    "Relaxation lounges",
    "Juice / beverage bar"
  ],
  developer: "Amexon is widely recognized as one of Toronto’s most prominent real estate developers. Amexon Development Corporation has been synonymous with building excellence and client satisfaction for over 45 years. Amexon is responsible for the development and management of over five million square feet of commercial, residential, industrial and hotel properties across Canada. They bring their highly successful expertise, extraordinary vision and lifetime passion for outstanding buildings and spectacular interior design to this luxury residential development."
};

export default function CentralParkPage() {
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
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Central Park Residences?</h3>
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
              <Image src="/uploads/2024/09/central-park-why.jpeg" alt="Why Central Park" width={800} height={600} className="w-full h-auto object-cover rounded-xl shadow-lg" />
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
                    <Image src="/uploads/2024/09/central-park-gallery-1-1024x576.jpeg" alt="Gallery 1" width={1024} height={576} className="w-full h-auto object-cover rounded-lg"/>
                    <Image src="/uploads/2024/09/central-park-gallery-2-1-1024x529.jpeg" alt="Gallery 2" width={1024} height={529} className="w-full h-auto object-cover rounded-lg"/>
                    <Image src="/uploads/2024/09/central-park-gallery-3-1024x576.jpeg" alt="Gallery 3" width={1024} height={576} className="w-full h-auto object-cover rounded-lg"/>
                    <Image src="/uploads/2024/09/central-park-gallery-4-1024x682.jpeg" alt="Gallery 4" width={1024} height={682} className="w-full h-auto object-cover rounded-lg"/>
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
