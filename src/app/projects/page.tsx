
'use client';

import { motion } from 'framer-motion';
import ProjectCard from '../../components/ProjectCard';
import styles from './projects.module.css';

const projects = [
  {
    title: "The Clove",
    status: "COMING SOON",
    image: "/uploads/2024/09/The-clove-project-image.jpeg",
    link: "/the-clove",
    description: "The biggest master plan in Canada. Location: Etobicoke. Developer: Mattamy homes"
  },
  {
    title: "Central Park",
    status: "PRE-CONSTRUCTION",
    image: "/uploads/2024/09/central-park-project-image.jpeg",
    link: "/central-park",
    description: "A Lifestyle Like No Other. Location: North York : Bayview village. Developer: Amexon Development"
  },
  {
    title: "Crosstown",
    status: "PRE-CONSTRUCTION",
    image: "/uploads/2024/09/crosstown-project-image.jpeg",
    link: "/crosstown",
    description: "60 acres to live, work, play, and thrive. Location: Don Mills in Toronto. Developer: Aspenridge"
  },
  {
    title: "The Well",
    status: "AVAILABLE",
    image: "/uploads/2024/09/well-project-image.jpeg",
    link: "/well",
    description: "One of the most important destinations in Toronto. Location: Downtown- Spadina Ave& Front St. Developer: Tridel"
  },
  {
    title: "Forêt Forest Hill",
    status: "AVAILABLE",
    image: "/uploads/2024/09/foret-project-image.jpeg",
    link: "/foret",
    description: "it’s glamour and grace enriches the fabric of a coveted neighbourhood. Location: Forest Hill: Bathurst & St Clair. Developer: Canderel Residential and Kingsett Capital"
  },
  {
    title: "Modal",
    status: "AVAILABLE",
    image: "/uploads/2024/09/modal-project.jpeg",
    link: "/modal",
    description: "Great collection of townhomes. Location: Cambridge, ON. Developer: Reid’s Heritage Properties"
  },
  {
    title: "Porta",
    status: "SELLING",
    image: "/uploads/2024/09/porta-project-image.jpeg",
    link: "/porta",
    description: "Steps to downtown Belleville, minutes from Prince Edward County. Location: Belleville, ON. Developer: MDM Developments"
  }
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className={`${styles.wpBlockGroup} ${styles.alignfull} text-white py-20`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our Projects
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Discover premium pre-construction condos, single family houses, and townhouses 
              across Southern Ontario
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Premium Developments
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Each project is carefully selected for its location, design, and investment potential. 
              Find your perfect home or investment opportunity.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Ready to Find Your Dream Home?
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
    </div>
  );
}
