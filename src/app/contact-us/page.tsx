
'use client'
import { motion } from 'framer-motion';
import ContactForm from '../../components/ContactForm';
import { MapPin, Clock, Phone, Mail } from 'lucide-react';
import styles from './contact-us.module.css';

export default function ContactUsPage() {
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      details: 'info@accesshousesandcondos.com',
      description: 'Send us your questions anytime'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: 'Available by appointment',
      description: 'Schedule a consultation call'
    },
    {
      icon: MapPin,
      title: 'Service Area',
      details: 'Southern Ontario',
      description: 'Toronto, Mississauga, Brampton, Hamilton & surrounding areas'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: 'Monday - Sunday',
      description: 'Flexible scheduling available'
    }
  ];

  const services = [
    {
      title: 'Pre-Construction Consultation',
      description: 'Expert guidance on available projects, pricing, and investment potential'
    },
    {
      title: 'Market Analysis',
      description: 'Detailed analysis of market trends and property appreciation potential'
    },
    {
      title: 'Financing Assistance',
      description: 'Connect with trusted mortgage professionals and understand your options'
    },
    {
      title: 'Project Tours',
      description: 'Visit presentation centres and model units with our experienced team'
    },
    {
      title: 'Investment Strategy',
      description: 'Develop a personalized real estate investment strategy'
    },
    {
      title: 'Ongoing Support',
      description: 'Continued assistance throughout the construction and closing process'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className={`text-white py-20 ${styles.wpBlockGroup} ${styles.alignfull}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Ready to find your dream home? Let's start the conversation today.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Get In Touch
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Multiple ways to reach us. Choose what works best for you.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-lg shadow-lg text-center"
                >
                  <div className="bg-[#3078e4] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {info.title}
                  </h3>
                  <p className="text-[#3078e4] font-medium mb-2">
                    {info.details}
                  </p>
                  <p className="text-gray-600 text-sm">
                    {info.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <div className={styles.clove_form_container}>
        <ContactForm />
      </div>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              How We Can Help
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our comprehensive services guide you through every step of the 
              pre-construction purchase process.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 p-6 rounded-lg"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`text-white py-16 ${styles.wpBlockGroup} ${styles.alignfull}`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-6">
              Ready to Start Your Home Journey?
            </h2>
            <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
              Don&apos;t wait - the best pre-construction opportunities move quickly. 
              Contact us today to secure your spot in Southern Ontario&apos;s most desirable developments.
            </p>
            <motion.a
              href="mailto:info@accesshousesandcondos.com"
              className="inline-block bg-white text-[#283add] font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Email Us Now
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
