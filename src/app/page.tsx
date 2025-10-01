'use client';

import HeroSlider from "../components/HeroSlider";
import ProjectCard from "../components/ProjectCard";
import ContactForm from "../components/ContactForm";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  const projects = [
    {
      title: "The Clove",
      status: "COMING SOON",
      image: "/uploads/2024/08/fac73e6a-3687-4009-a699-752e15c6821d.png",
      link: "/the-clove",
      description: "Your new home awaits in this premium development"
    },
    {
      title: "Central Park",
      status: "PRE-CONSTRUCTION",
      image: "/uploads/2024/09/central-park-project-image.jpeg",
      link: "/central-park",
      description: "Modern living in the heart of the city"
    },
    {
      title: "Foret",
      status: "AVAILABLE",
      image: "/uploads/2024/09/foret-project-image.jpeg",
      link: "/foret",
      description: "Luxury townhouses surrounded by nature"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <HeroSlider />

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              A beautiful series of Pre construction projects,
              <br className="hidden md:block" />
              <span className="text-[#3078e4]">Condos, Single family houses and townhouses</span>
              <br className="hidden md:block" />
              in Southern Ontario
            </h2>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </div>

          {/* Features Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gray-50 rounded-2xl p-8 md:p-12 mb-16"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-[#3078e4] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Premium Locations</h3>
                <p className="text-gray-600">Strategically located in Southern Ontario&apos;s most desirable neighborhoods</p>
              </div>
              <div className="text-center">
                <div className="bg-[#3078e4] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Investment Opportunity</h3>
                <p className="text-gray-600">Excellent potential for appreciation and rental income</p>
              </div>
              <div className="text-center">
                <div className="bg-[#3078e4] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Quality Assurance</h3>
                <p className="text-gray-600">Built by reputable developers with proven track records</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Image src="/uploads/2024/08/lucy.png" alt="Lucy" width={400} height={400} className="rounded-lg shadow-lg" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-[#3078e4] mb-4">About us</h2>
              <p className="text-gray-600 mb-4">
                As a REALTOR® with Royal LePage Signature, we get advantageous access to many of the most desirable projects across the GTA and Ontario. This puts you first in line for desirable projects and getting access to the best price, best suite choices, and best incentives the development has to offer. This has been such a benefit to our clients. I have witnessed investing in real estate as one of the greatest opportunities to build financial security over the long term. Our office continues to work on developing relationships with premier builders helping clients secure units often before projects even hit the open market.
              </p>
              <p className="text-gray-600 font-semibold">
                I am Luci Tejkowski, REALTOR®, helping you to make informed Real Estate decisions.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactForm />
    </>
  );
}