'use client';

import HeroSlider from "../components/HeroSlider";
import ProjectCard from "../components/ProjectCard";
import ContactForm from "../components/ContactForm";
import Accordion from "../components/Accordion";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  const projects = [
    {
      title: "The Clove",
      status: "COMING SOON",
      image: "/uploads/2024/08/fac73e6a-3687-4009-a699-752e15c6821d.png",
      link: "/the-clove",
      description: "Your new home awaits"
    },
    {
      title: "Selling Now",
      status: "SELLING NOW",
      image: "/uploads/2024/08/bc08eb89-8a4d-4823-988a-c195a4d4a467.png",
      link: "/projects",
      description: "discover the possibilities"
    },
    {
      title: "The Well",
      status: "MOVE IN READY",
      image: "/uploads/2024/08/2c0300f9-26c0-48e2-ac21-a0e2eaded5ca.png",
      link: "/the-well",
      description: "get inspired"
    }
  ];

  const faqData = [
    {
      question: "What is a pre construction purchase?",
      answer: "Essentially, you are purchasing something that hasn’t been built yet. You could purchase your home before construction begins or before completion. The process for purchasing Pre-construction properties is different from buying an existing Condo or House. One of the benefits of purchasing pre-construction condos is that with time prices will increase even though you are paying with today's dollars. Every pre sale contract is different, including terms and conditions,deposits, and payment schedules. The deposit structure and incentives varies according to project and developers. Usually, a deposit of 5 to 20% deposit structure is required before occupancy. The remaining amount can be paid later according to the progress of the construction and deposit structure the developer has in place."
    },
    {
      question: "Know your risk tolerance",
      answer: "While pre construction can offer significant benefits, they also come with potential risks, such as: Project cancellation, Market fluctuations, Liquidity, Project delays"
    },
    {
      question: "Tips",
      answer: "To maximize your returns and minimize risk, follow these tips for a successful investment journey: Expect Condo fees to rise. Be sure to fully understand what will be required of you when the closing date comes, and how long you have until that date arrives. Understand the payment plan. Study the location. Chose the right developer. It is always recommended to do research and to have a look at the developer’s previous projects so that you can buy the condos with confidence and trust. Be prepared for market fluctuations. Conduct thorough due diligence. Monitor construction process."
    },
    {
      question: "Benefits of buying Pre Construction",
      answer: "Customization options. New amenities. Buy a property at a lower purchase price and potentially enjoy high appreciation, enjoy modern amenities and generate rental income. You get to delay things like mortgage payments until the property is completed. The trajectory of a condo building’s appreciation begins to slow relative to the rest of the market. If you were to buy a condo today, in four years it ages and with this, gets closer to the end of its prime. Whereas if you purchase a new condo, in four years, you’ll have a brand new property. And, it’ll be in demand while hopefully having appreciated with or above the market during the construction period."
    },
    {
      question: "Purchasing process:",
      answer: "Working with a REALTOR® who can best represent your interests is critical. The REALTOR® can help you make this process as smooth as possible, saving you time, headaches and money in the long run. *Sales agents at the presentation center may only be knowledgeable about their development, and not the area market, and will not be able to tell you about other new communities. The sales person at the presentation centre works for the developer, not for you. Once you have an executed copy of the agreement, you have what’s known as the 10-day cooling off period. During this time, you can review the purchase information with your lawyer, lender, REALTOR®, and financial advisor. If you change your mind within this 10 day period, you can cancel the agreement. *Choose a Suite / Submit a Worksheet. Once you’ve made your final decision is made, it’s time to select a suite by filling in a worksheet. If the project is hot, developer may receive more worksheets than suites available, so consider alternate options. This may include other projects in the same area, projects in different areas, or even resale options. The majority of projects, require 80% Mortgage pre approval to be presented. Work with a lawyer: Getting a trusted lawyer with expertise in new construction to review the fine print can save you both money and stress."
    },
    {
      question: "Know your costs and what can be capped at the time of purchase. It's important to understand:",
      answer: "Levies costs: Cap fees, Development charges. Maintenance fees: Assignment clause, Right to rent during occupancy period, Interim occupancy, The closing costs, Utility connection fees, Education Levies, Park levies"
    },
    {
      question: "What's Tarion Warranty ?",
      answer: "In pre-construction, the Tarion Warranty provides new homeowners comprehensive coverage on new builds for up to 7 years. This unique home warranty covers water leaks, heating and electrical complications, and structural defects. The Tarion Warranty offers unmatched assurance with no-hassle coverage so you can confidently purchase your pre-construction. Click here for more detailed information: HERE : https://www.tarion.com/homeowners/the-new-home-warranty."
    }
  ];

  const accordionItems = faqData.map(faq => ({ title: faq.question, content: faq.answer }));

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
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className={`text-3xl font-bold text-gray-900 mb-6 text-center`}>Facts about Pre Construction in Ontario you should know:</h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Accordion items={accordionItems} />
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