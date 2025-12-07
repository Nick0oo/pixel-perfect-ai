import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import React from "react";
import aboutImage from "@/assets/about-image.jpg";

const AboutSection = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  
  // Repetir la imagen 3 veces para el carrusel
  const images = [aboutImage, aboutImage, aboutImage];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // Auto-play del carrusel
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section id="about" className="py-20 bg-deep-purple">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Image Carousel */}
          <div className="relative max-w-md mx-auto md:mx-0">
            {/* Background Block behind image - Offset (like HeroSection) - Moradito */}
            <motion.div
              className="absolute top-8 -left-8 w-full h-full bg-[#3B1F60] -z-10 rounded-lg shadow-2xl"
              animate={{
                rotate: [0, 5, -5, 0],
                scale: [1, 1.02, 1],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            
            {/* Carousel Container - Sin recuadro blanco */}
            <motion.div
              className="relative aspect-square rounded-lg overflow-hidden shadow-2xl"
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              whileHover={{ scale: 1.02 }}
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentIndex}
                  src={images[currentIndex]}
                  alt="Team collaboration"
                  className="w-full h-full object-cover rounded-lg"
                  initial={{ opacity: 0, scale: 1.15, x: 100, rotateY: 15 }}
                  animate={{ opacity: 1, scale: 1, x: 0, rotateY: 0 }}
                  exit={{ opacity: 0, scale: 0.85, x: -100, rotateY: -15 }}
                  transition={{
                    duration: 0.7,
                    ease: [0.43, 0.13, 0.23, 0.96],
                  }}
                  whileHover={{ scale: 1.05 }}
                />
              </AnimatePresence>
              
              {/* Dots Indicator - Más abajo y más visibles */}
              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-20">
                {images.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? "bg-white w-8 shadow-[0_0_10px_rgba(255,255,255,0.5)]"
                        : "bg-white/30 hover:bg-white/50 w-2.5"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    animate={{
                      scale: index === currentIndex ? 1.1 : 1,
                    }}
                    transition={{ duration: 0.2 }}
                  />
                ))}
              </div>
            </motion.div>
            
            {/* Shadow Effect - Animado */}
            <motion.div
              className="absolute -inset-4 bg-gradient-to-br from-purple-500/20 to-transparent rounded-xl blur-xl -z-20"
              animate={{
                opacity: [0.3, 0.5, 0.3],
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>

          {/* Right Content */}
          <motion.div
            className="space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2,
                  delayChildren: 0.1,
                },
              },
            }}
          >
            <motion.div
              className="flex items-center gap-2"
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.6, ease: "easeOut" },
                },
              }}
            >
              <motion.div
                className="w-8 h-px bg-white"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: 0.2 }}
              />
              <span className="text-sm font-medium text-white tracking-wider uppercase">About Us</span>
            </motion.div>
            
            <motion.h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-white"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.7,
                    ease: [0.43, 0.13, 0.23, 0.96],
                  },
                },
              }}
            >
              If you can imagine it we can make it.
            </motion.h2>
            
            <motion.p
              className="text-white text-base md:text-lg leading-relaxed"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.6,
                    ease: "easeOut",
                  },
                },
              }}
            >
              Lorem ipsum dolor sit amet consectetur. Sit sem eu id morbi sollicitudin mauris venenatis pulvinar. Massa fringilla feugiat semper viverra amet dui turpis.
            </motion.p>
            
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.6,
                    ease: "easeOut",
                  },
                },
              }}
            >
              <Button 
                variant="hero"
                className="bg-gradient-to-r from-[#7000FF] to-[#8B5CF6] hover:opacity-90 text-white rounded-md px-8 py-3 text-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(112,0,255,0.5)]"
              >
                Read more
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
