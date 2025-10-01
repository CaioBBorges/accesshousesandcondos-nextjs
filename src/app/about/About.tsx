'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from './about.module.css';

const About = () => {
  return (
    <div className={styles.container}>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={styles.hero}
      >
        <h1 className={styles.title}>About Us</h1>
        <p className={styles.subtitle}>Your Trusted Partner in Real Estate</p>
      </motion.div>

      <div className={styles.content}>
        <div className={styles.grid}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={styles.imageContainer}
          >
            <img src="https://accesshousesandcondos.local/wp-content/uploads/2024/08/lucy-300x296.png" alt="Lucy Tejkowsky" className={styles.image} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className={styles.textContainer}
          >
            <h2 className={styles.heading}>I am Lucy Tejkowsky, REALTOR®</h2>
            <p className={styles.paragraph}>
              With an extensive construction and sales industry background, I work closely with projects and clients to maximize their potential and profits.
            </p>
            <p className={styles.paragraph}>
              Many details go into the pre-construction buying process, from choosing the neighborhood to understanding pricing and the latest market conditions. I will be at your side throughout the entire process to advise and assist you.
            </p>
            <p className={styles.paragraph}>
              My goal is to provide my clients with the utmost in service and ensure you get the most value for money in a home that makes you happy.
            </p>
            <p className={styles.paragraph}>
              As a Realtor with Royal LePage Signature, I get advantageous access to many of the most desirable projects across the GTA and Ontario. This puts you first in line for desirable projects and getting access to the best price, best suite choices, and best incentives the development has to offer. This has been such a benefit to our clients.
            </p>
            <p className={styles.paragraph}>
              I have witnessed investing in real estate as one of the greatest opportunities to build financial security over the long term. My office continues to work on developing relationships with premier builders helping clients secure units often before projects even hit the open market.
            </p>
            <p className={styles.paragraph}>
              There is a compelling opportunity in the pre-construction market. I have witnessed home prices more than double in our market over the last 10 years. The benefits of owning real estate in this amazing community we call home, continue to be desired by both current Canadians, and people choosing to make Canada home.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;