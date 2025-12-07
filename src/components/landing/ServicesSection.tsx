import { Clock, GraduationCap, Settings, Phone } from "lucide-react";
import React from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";

// Componente de partículas animadas para el fondo
const ParticlesBackground = () => {
  // Usar valores fijos para evitar re-renders y cambios visuales
  const particlesData = React.useMemo(() => {
    const smallParticles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() * 8 + 2,
      duration: Math.random() * 10 + 10,
      delay: Math.random() * 5,
    }));
    
    const largeParticles = Array.from({ length: 10 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() * 100 + 50,
      duration: Math.random() * 15 + 15,
      delay: Math.random() * 5,
    }));
    
    return { smallParticles, largeParticles };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particlesData.smallParticles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full opacity-20"
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: '#FFFFFF',
            animation: `float-particle ${particle.duration}s infinite ease-in-out`,
            animationDelay: `${particle.delay}s`,
          }}
        />
      ))}
      {/* Partículas más grandes para efecto borroso */}
      {particlesData.largeParticles.map((particle) => (
        <div
          key={`large-${particle.id}`}
          className="absolute rounded-full opacity-10 blur-xl"
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: '#FFFFFF',
            animation: `float-particle-large ${particle.duration}s infinite ease-in-out`,
            animationDelay: `${particle.delay}s`,
          }}
        />
      ))}
    </div>
  );
};

const ServicesSection = () => {
  const [selectedIndex, setSelectedIndex] = React.useState<number | null>(null);
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);
  const [mousePositions, setMousePositions] = React.useState<Record<number, { x: number; y: number }>>({});

  const services = [
    {
      icon: Clock,
      title: "UI / UX DESIGN",
      description: "Lorem ipsum dolor sit amet consectetur.",
      extendedDescription: "Lorem ipsum dolor sit amet consectetur. Sit sem eu id morbi sollicitudin mauris venenatis pulvinar. Est quis vel convallis nisl. Sit non sed risus neque aenean in proin. Nulla facilisi morbi tempus iaculis urna id volutpat lacus laoreet non.",
    },
    {
      icon: GraduationCap,
      title: "WEB DEVELOPMENT",
      description: "Lorem ipsum dolor sit amet consectetur.",
      extendedDescription: "Lorem ipsum dolor sit amet consectetur. Sit sem eu id morbi sollicitudin mauris venenatis pulvinar. Est quis vel convallis nisl. Sit non sed risus neque aenean in proin. Nulla facilisi morbi tempus iaculis urna id volutpat lacus laoreet non.",
    },
    {
      icon: Settings,
      title: "WEB DESIGN",
      description: "Lorem ipsum dolor sit amet consectetur.",
      extendedDescription: "Lorem ipsum dolor sit amet consectetur. Sit sem eu id morbi sollicitudin mauris venenatis pulvinar. Est quis vel convallis nisl. Sit non sed risus neque aenean in proin. Nulla facilisi morbi tempus iaculis urna id volutpat lacus laoreet non.",
    },
    {
      icon: Phone,
      title: "APP DEVELOPMENT",
      description: "Lorem ipsum dolor sit amet consectetur.",
      extendedDescription: "Lorem ipsum dolor sit amet consectetur. Sit sem eu id morbi sollicitudin mauris venenatis pulvinar. Est quis vel convallis nisl. Sit non sed risus neque aenean in proin. Nulla facilisi morbi tempus iaculis urna id volutpat lacus laoreet non.",
    },
  ];

  const handleCardClick = (index: number) => {
    setSelectedIndex(selectedIndex === index ? null : index);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 15;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 15;
    setMousePositions(prev => ({ ...prev, [index]: { x, y } }));
  };

  const handleMouseLeave = (index: number) => {
    setMousePositions(prev => ({ ...prev, [index]: { x: 0, y: 0 } }));
    setHoveredIndex(null);
  };

  return (
    <section id="services" className="relative w-full py-20 services-section-bg overflow-hidden">
      {/* Fondo con partículas */}
      <ParticlesBackground />
      
      {/* Overlay morado oscuro */}
      <div className="absolute inset-0 bg-[#2F1B4E]/85" />
      
      {/* Contenido */}
      <div className="relative z-10">
        {/* Header */}
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
            <div className="section-label-white justify-center mb-4">
              My Skills
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mt-4 text-white leading-tight">
              If you can imagine it, we can make it.
            </h2>
            <p className="text-white/80 mt-4 text-base md:text-lg">
              Lorem ipsum dolor sit amet consectetur. Sit sem eu id morbi sollicitudin mauris venenatis pulvinar.
            </p>
          </div>
        </div>

        {/* Services Container */}
        <LayoutGroup>
          <div className="relative w-full">
            {/* Tarjeta seleccionada grande en el centro */}
            <AnimatePresence>
              {selectedIndex !== null && (
                <div className="absolute top-0 left-0 right-0 flex justify-center z-20">
                  <motion.div
                    key={`selected-${selectedIndex}`}
                    layoutId={`card-${selectedIndex}`}
                    transition={{ 
                      layout: {
                        type: "spring",
                        stiffness: 350,
                        damping: 30,
                        duration: 0.6
                      }
                    }}
                    className="w-full max-w-2xl px-4"
                  >
                    <motion.div
                      className="service-card-new cursor-pointer relative overflow-hidden"
                      onClick={() => handleCardClick(selectedIndex)}
                    >
                        <div className="service-icon-circle mx-auto mb-6">
                          {React.createElement(services[selectedIndex].icon, { size: 48 })}
                        </div>
                        <h3 className="font-semibold text-white mb-4 text-3xl text-center">{services[selectedIndex].title}</h3>
                        <p className="text-white/70 text-base leading-relaxed mb-4 text-center">{services[selectedIndex].description}</p>
                        <p className="text-white/60 text-sm leading-relaxed max-w-xl mx-auto text-center">
                          {services[selectedIndex].extendedDescription}
                        </p>
                      </motion.div>
                    </motion.div>
                </div>
              )}
            </AnimatePresence>

            {/* Services Grid */}
            <div className={`container mx-auto px-4 w-full ${selectedIndex !== null ? 'pt-[350px] md:pt-[380px]' : ''}`}>
              <motion.div 
                className={`grid gap-6 md:gap-8 ${
                  selectedIndex !== null
                    ? 'grid-cols-1 sm:grid-cols-3 lg:grid-cols-3'
                    : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'
                }`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.15,
                      delayChildren: 0.2,
                    },
                  },
                }}
              >
                {services.map((service, index) => {
                  const isSelected = selectedIndex === index;
                  const isHovered = hoveredIndex === index;
                  
                  // Si hay una tarjeta seleccionada, no mostrar la seleccionada en el grid
                  if (selectedIndex !== null && isSelected) {
                    return null;
                  }

              return (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 50, scale: 0.9 },
                    visible: { 
                      opacity: 1, 
                      y: 0, 
                      scale: 1,
                      transition: {
                        type: "spring",
                        stiffness: 300,
                        damping: 25,
                      }
                    },
                  }}
                  className="service-card-new cursor-pointer relative overflow-hidden group"
                  layoutId={`card-${index}`}
                  layout
                  transition={{ 
                    type: "spring", 
                    stiffness: 300, 
                    damping: 25,
                    layout: { 
                      type: "spring",
                      stiffness: 350,
                      damping: 30,
                      duration: 0.4
                    }
                  }}
                  animate={{
                    scale: selectedIndex !== null && !isSelected ? 0.75 : 1,
                    opacity: selectedIndex !== null && !isSelected ? 0.6 : 1,
                  }}
                  onClick={() => handleCardClick(index)}
                  onMouseEnter={() => {
                    if (selectedIndex === null) {
                      setHoveredIndex(index);
                    }
                  }}
                  onMouseLeave={() => {
                    handleMouseLeave(index);
                  }}
                  onMouseMove={(e) => {
                    if (selectedIndex === null) {
                      handleMouseMove(e, index);
                    }
                  }}
                  whileHover={selectedIndex === null ? {
                    y: -15,
                    scale: 1.05,
                    transition: {
                      type: "spring",
                      stiffness: 400,
                      damping: 17,
                    }
                  } : {}}
                  style={{
                    transformStyle: "preserve-3d",
                  }}
                >
                  {/* Efecto 3D Tilt */}
                  <motion.div
                    animate={isHovered && selectedIndex === null ? {
                      rotateX: mousePositions[index]?.y || 0,
                      rotateY: -(mousePositions[index]?.x || 0),
                    } : {
                      rotateX: 0,
                      rotateY: 0,
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className="relative w-full h-full"
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    {/* Contenido de la tarjeta */}
                    <div className="relative z-10">
                      <motion.div 
                        className="service-icon-circle relative z-10"
                        animate={isHovered && selectedIndex === null ? {
                          scale: [1, 1.2, 1.2],
                          rotate: [0, 180, 360],
                          y: [0, -5, 0],
                        } : {
                          scale: 1,
                          rotate: 0,
                          y: 0,
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 200,
                          damping: 15,
                          rotate: {
                            duration: 0.8,
                            ease: "easeInOut"
                          },
                          scale: {
                            duration: 0.5,
                          }
                        }}
                      >
                        {React.createElement(service.icon, { 
                          size: 28,
                          className: isHovered ? "transition-all duration-300" : ""
                        })}
                      </motion.div>
                      
                      <motion.h3 
                        className="font-semibold text-white mb-2 text-lg relative z-10"
                        animate={isHovered && selectedIndex === null ? {
                          scale: 1.1,
                          y: -5,
                        } : {
                          scale: 1,
                          y: 0,
                        }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                      >
                        {service.title}
                      </motion.h3>
                      
                      <motion.p 
                        className="text-white/70 text-sm relative z-10"
                        animate={isHovered && selectedIndex === null ? {
                          opacity: 1,
                        } : {
                          opacity: 0.7,
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        {service.description}
                      </motion.p>
                    </div>

                    {/* Efecto de resplandor muy sutil */}
                    <AnimatePresence>
                      {isHovered && selectedIndex === null && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="absolute -inset-1 rounded-lg pointer-events-none"
                          style={{
                            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, transparent 70%)',
                            filter: 'blur(12px)',
                          }}
                        />
                      )}
                    </AnimatePresence>

                    {/* Borde muy sutil */}
                    <motion.div
                      className="absolute inset-0 rounded-lg pointer-events-none border border-purple-400/30"
                      animate={isHovered && selectedIndex === null ? {
                        opacity: 1,
                        boxShadow: '0 0 10px rgba(139, 92, 246, 0.15)',
                      } : {
                        opacity: 0,
                        boxShadow: '0 0 0px rgba(139, 92, 246, 0)',
                      }}
                      transition={{ duration: 0.2 }}
                    />
                  </motion.div>
                </motion.div>
              );
              })}
              </motion.div>
            </div>
          </div>
        </LayoutGroup>
      </div>
    </section>
  );
};

export default ServicesSection;
