'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const HeroSlider = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <section className="relative h-screen flex items-center justify-center text-white">
      {/* Fallback background image */}
      <div 
        className="absolute z-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url(/uploads/2024/08/cn-tower-dusk.jpg.png)',
          display: videoLoaded ? 'none' : 'block'
        }}
      />
      
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        onLoadedData={() => setVideoLoaded(true)}
        className={`absolute z-0 w-full h-full object-cover transition-opacity duration-500 ${
          videoLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <source src="/videos/hero-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      <div className="absolute z-10 inset-0 bg-black opacity-50"></div>
      <div className="z-20 text-center px-4">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4 [text-shadow:3px_3px_10px_#000]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Enhance your Lifestyle
        </motion.h1>
      </div>
    </section>
  );
};

export default HeroSlider;