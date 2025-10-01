
'use client';

import { motion } from 'framer-motion';
import Accordion from '../../components/Accordion';
import styles from './important-faq.module.css';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
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

export default function ImportantFAQPage() {
  const accordionItems = faqData.map(faq => ({ title: faq.question, content: faq.answer }));

  return (
    <div className="min-h-screen bg-gray-50">
      <header className={`${styles.wpBlockGroup} ${styles.alignfull}`}>
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
          <h1 className={`text-4xl md:text-5xl font-bold text-white ${styles.hasTextAlignCenter}`}>Important FAQ</h1>
        </div>
      </header>

      <main className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className={`text-3xl font-bold text-gray-900 mb-6 ${styles.hasTextAlignCenter}`}>Facts about Pre Construction in Ontario you should know:</h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Accordion items={accordionItems} />
            </motion.div>
        </div>
      </main>
    </div>
  );
}
