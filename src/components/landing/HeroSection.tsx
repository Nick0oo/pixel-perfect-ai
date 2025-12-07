import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import { motion } from "framer-motion";
import React from "react";
import heroImage from "@/assets/hero-image.jpg";

// Componente para las esquinas en forma de L
const CornerFrame = ({ position }: { position: "top-left" | "top-right" | "bottom-left" | "bottom-right" }) => {
  const cornerStyles = {
    "top-left": "top-0 left-0",
    "top-right": "top-0 right-0",
    "bottom-left": "bottom-0 left-0",
    "bottom-right": "bottom-0 right-0",
  };

  const lineStyles = {
    "top-left": {
      horizontal: "w-20 h-1 bg-white top-0 left-0 origin-left",
      vertical: "w-1 h-20 bg-white top-0 left-0 origin-top",
    },
    "top-right": {
      horizontal: "w-20 h-1 bg-white top-0 right-0 origin-right",
      vertical: "w-1 h-20 bg-white top-0 right-0 origin-top",
    },
    "bottom-left": {
      horizontal: "w-20 h-1 bg-white bottom-0 left-0 origin-left",
      vertical: "w-1 h-20 bg-white bottom-0 left-0 origin-bottom",
    },
    "bottom-right": {
      horizontal: "w-20 h-1 bg-white bottom-0 right-0 origin-right",
      vertical: "w-1 h-20 bg-white bottom-0 right-0 origin-bottom",
    },
  };

  const styles = lineStyles[position];
  const cornerClass = cornerStyles[position];

  return (
    <motion.div
      className={`absolute ${cornerClass} z-20`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <motion.div
        className={`absolute ${styles.horizontal}`}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      />
      <motion.div
        className={`absolute ${styles.vertical}`}
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      />
    </motion.div>
  );
};

// Componente para cada letra con animación
const AnimatedLetter = ({ letter, index, isHovered }: { letter: string; index: number; isHovered: boolean }) => {
  return (
    <motion.span
      className="inline-block cursor-default"
      initial={{
        WebkitTextFillColor: "transparent",
        WebkitTextStrokeWidth: "2px",
        WebkitTextStrokeColor: "#FFFFFF",
        scale: 0.8,
        opacity: 0,
      }}
      animate={{
        WebkitTextFillColor: isHovered ? "transparent" : "#FFFFFF",
        WebkitTextStrokeWidth: isHovered ? "2px" : "0px",
        WebkitTextStrokeColor: "#FFFFFF",
        scale: isHovered ? 1.05 : 1,
        opacity: 1,
      }}
      transition={{
        duration: 0.5,
        delay: isHovered ? index * 0.08 : 0.4 + index * 0.1,
        ease: [0.43, 0.13, 0.23, 0.96],
      }}
      style={{
        display: "inline-block",
      }}
    >
      {letter}
    </motion.span>
  );
};

const HeroSection = () => {
  const [isHovered, setIsHovered] = React.useState(false);
  const [isTextHovered, setIsTextHovered] = React.useState(false);

  // Variantes de animación para el contenedor del marco
  const frameVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      rotate: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
    hover: {
      rotate: 360,
      transition: {
        duration: 1,
        ease: "easeInOut",
        repeat: Infinity,
      },
    },
  };

  const creativeLetters = ["C", "R", "E", "A", "T", "I", "V", "E"];

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-deep-purple">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-dot-pattern opacity-30 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-gradient-start/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-vivid-purple/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-6 md:space-y-8 text-center lg:text-left">
            {/* We Are */}
            <motion.h2
              className="text-xl md:text-2xl lg:text-3xl font-medium text-[#A78BFA] tracking-wide"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              We Are
            </motion.h2>

            {/* CREATIVE */}
            <motion.h1
              className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tighter text-white leading-none font-sans"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              onMouseEnter={() => setIsTextHovered(true)}
              onMouseLeave={() => setIsTextHovered(false)}
            >
              {creativeLetters.map((letter, index) => (
                <AnimatedLetter 
                  key={`${letter}-${index}`} 
                  letter={letter} 
                  index={index} 
                  isHovered={isTextHovered} 
                />
              ))}
            </motion.h1>

            {/* Description */}
            <motion.p
              className="text-gray-400 text-lg md:text-xl max-w-lg mx-auto lg:mx-0 leading-relaxed font-light"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Help find solutions with intuitive and in accordance with client business goals. we provide a high-quality services.
            </motion.p>

            {/* Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <Button
                className="h-14 px-8 bg-gradient-to-r from-[#7000FF] to-[#8B5CF6] hover:opacity-90 text-white rounded-md text-lg font-medium transition-all duration-300 shadow-[0_0_20px_rgba(112,0,255,0.3)] hover:shadow-[0_0_30px_rgba(112,0,255,0.5)]">
                Contact us
              </Button>
              <Button
                variant="ghost"
                className="h-14 px-8 text-white hover:bg-white/5 rounded-md text-lg font-medium gap-3 group"
              >
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                  <Play size={18} className="fill-white ml-1" />
                </div>
                Watch video
              </Button>
            </motion.div>
          </div>

          {/* Right Content - Image with L-Corner Frame */}
          <div className="relative mx-auto lg:ml-auto w-full max-w-xs md:max-w-sm lg:max-w-md group">
            {/* Background Block behind image - Offset Top/Right */}
            <motion.div
              className="absolute top-8 -right-8 w-full h-full bg-[#3B1F60] -z-10 rounded-lg"
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

            {/* Image Container with L-Corner Frame */}
            <motion.div
              className="relative aspect-square overflow-hidden bg-gray-900 shadow-2xl z-10 rounded-sm group/image"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <img
                src={heroImage}
                alt="Creative Professional"
                className="w-full h-full object-cover transition-transform duration-300 group-hover/image:scale-105"
              />
              
              {/* L-Corner Frame with Animation */}
              <motion.div
                className="absolute inset-0 pointer-events-none"
                variants={frameVariants}
                initial="hidden"
                animate={isHovered ? "hover" : "visible"}
                style={{ transformOrigin: "center center" }}
              >
                <CornerFrame position="top-left" />
                <CornerFrame position="top-right" />
                <CornerFrame position="bottom-left" />
                <CornerFrame position="bottom-right" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
