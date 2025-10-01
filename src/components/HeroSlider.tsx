'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const HeroSlider = () => {
  const slides = [
    {
      id: 1,
      title: "Beautiful Pre-Construction Projects",
      subtitle: "Condos, Single Family Houses and Townhouses",
      description: "Discover your dream home in Southern Ontario",
      backgroundImage: "/uploads/2024/08/cn-tower-dusk.jpg.png",
      cta: "Explore Projects"
    },
    {
      id: 2,
      title: "Your New Home Awaits",
      subtitle: "Premium Living Spaces",
      description: "Modern designs with exceptional amenities",
      backgroundImage: "/uploads/2024/08/fac73e6a-3687-4009-a699-752e15c6821d.png",
      cta: "Learn More"
    }
  ];

  return (
    <section className="relative h-[500px] overflow-hidden">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect="fade"
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop
        className="h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div 
              className="relative h-full bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${slide.backgroundImage})` }}
            >
              <div className="absolute inset-0 bg-black/40" />
              <div className="relative z-10 h-full flex items-center justify-center text-center text-white px-4">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="max-w-4xl"
                >
                  <motion.h1 
                    className="text-4xl md:text-6xl font-bold mb-4"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    {slide.title}
                  </motion.h1>
                  <motion.h2 
                    className="text-xl md:text-2xl mb-6 text-blue-200"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                  >
                    {slide.subtitle}
                  </motion.h2>
                  <motion.p 
                    className="text-lg mb-8 max-w-2xl mx-auto"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                  >
                    {slide.description}
                  </motion.p>
                  <motion.button 
                    className="bg-[#3078e4] hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 1 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {slide.cta}
                  </motion.button>
                </motion.div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroSlider;