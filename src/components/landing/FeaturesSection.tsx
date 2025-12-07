import { Check, Plus, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FeaturesSection = () => {
  // Por defecto, la primera tarjeta de la derecha (índice 1) viene abierta
  const [openIndex, setOpenIndex] = useState<number | null>(1);

  const features = [
    {
      title: "Best interest rates on the market.",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna.",
    },
    {
      title: "Best price on the market",
      description: "We offer competitive pricing that ensures you get the best value for your investment.",
    },
    {
      title: "Security of your data",
      description: "Your data security is our top priority with enterprise-grade encryption and protection.",
    },
    {
      title: "Prevent unstable prices",
      description: "Lock in your rates and avoid unexpected price fluctuations with our stable pricing model.",
    },
    {
      title: "Best price on the market",
      description: "Get access to premium features at the most competitive rates in the industry.",
    },
  ];

  // Organizar las tarjetas: 3 en columna izquierda, 2 en columna derecha
  // Columna izquierda: índices 0, 2, 4
  // Columna derecha: índices 1, 3
  const leftColumnFeatures = [features[0], features[2], features[4]];
  const rightColumnFeatures = [features[1], features[3]];
  const leftColumnIndices = [0, 2, 4];
  const rightColumnIndices = [1, 3];

  const handleCardClick = (originalIndex: number) => {
    setOpenIndex(openIndex === originalIndex ? null : originalIndex);
  };

  return (
    <section className="py-20 bg-deep-purple">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.8,
            ease: [0.43, 0.13, 0.23, 0.96],
          }}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-white font-serif"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.2,
              ease: "easeOut",
            }}
          >
            Success is the only thing we care about
          </motion.h2>
          <motion.p
            className="text-white/80 mt-4 text-sm md:text-base font-sans"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.4,
              ease: "easeOut",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna.
          </motion.p>
        </motion.div>

        {/* Features Grid - Distribución 3 izquierda, 2 derecha */}
        <div className="flex flex-col md:flex-row gap-4 max-w-4xl mx-auto">
          {/* Columna Izquierda - 3 tarjetas */}
          <div className="flex-1 space-y-4">
            {leftColumnFeatures.map((feature, idx) => {
              const originalIndex = leftColumnIndices[idx];
              const isOpen = openIndex === originalIndex;
              return (
                <motion.div
                  key={originalIndex}
                  className="rounded-lg overflow-hidden cursor-pointer"
                  style={{
                    backgroundColor: "#3B1F60",
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: originalIndex * 0.1 }}
                  onClick={() => handleCardClick(originalIndex)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3 flex-1 min-w-0">
                        <Check size={18} className="text-white flex-shrink-0" />
                        <span className="text-sm font-medium text-white font-sans">
                          {feature.title}
                        </span>
                      </div>
                      <motion.div
                        className="flex-shrink-0 ml-3"
                        animate={{
                          rotate: isOpen ? 45 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <AnimatePresence mode="wait">
                          {isOpen ? (
                            <motion.div
                              key="close"
                              initial={{ opacity: 0, rotate: -90 }}
                              animate={{ opacity: 1, rotate: 0 }}
                              exit={{ opacity: 0, rotate: 90 }}
                              transition={{ duration: 0.2 }}
                            >
                              <X size={18} className="text-white" />
                            </motion.div>
                          ) : (
                            <motion.div
                              key="open"
                              initial={{ opacity: 0, rotate: -90 }}
                              animate={{ opacity: 1, rotate: 0 }}
                              exit={{ opacity: 0, rotate: 90 }}
                              transition={{ duration: 0.2 }}
                            >
                              <Plus size={18} className="text-white" />
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    </div>

                    {/* Expanded Description */}
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <motion.p
                            className="text-white/70 text-sm mt-3 pl-7 font-sans"
                            initial={{ y: -10 }}
                            animate={{ y: 0 }}
                            exit={{ y: -10 }}
                            transition={{ duration: 0.3, delay: 0.1 }}
                          >
                            {feature.description}
                          </motion.p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Columna Derecha - 2 tarjetas */}
          <div className="flex-1 space-y-4">
            {rightColumnFeatures.map((feature, idx) => {
              const originalIndex = rightColumnIndices[idx];
              const isOpen = openIndex === originalIndex;
              return (
                <motion.div
                  key={originalIndex}
                  className="rounded-lg overflow-hidden cursor-pointer relative"
                  style={{
                    backgroundColor: "#3B1F60",
                  }}
                  initial={{ opacity: 0, y: 40, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 0.6,
                    delay: originalIndex * 0.15,
                    ease: [0.43, 0.13, 0.23, 0.96],
                  }}
                  onClick={() => handleCardClick(originalIndex)}
                  whileHover={{
                    scale: 1.02,
                    y: -2,
                    transition: { duration: 0.2, ease: "easeOut" },
                  }}
                  whileTap={{ scale: 0.97 }}
                  animate={{
                    boxShadow: isOpen
                      ? "0 10px 40px rgba(139, 92, 246, 0.3)"
                      : "0 4px 20px rgba(0, 0, 0, 0.2)",
                  }}
                >
                  {/* Efecto de brillo sutil al hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/10 to-purple-500/0 opacity-0"
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  <div className="p-4 relative z-10">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3 flex-1 min-w-0">
                        <motion.div
                          animate={{
                            scale: isOpen ? [1, 1.2, 1] : 1,
                            rotate: isOpen ? [0, 10, -10, 0] : 0,
                          }}
                          transition={{
                            duration: 0.5,
                            ease: "easeInOut",
                          }}
                        >
                          <Check
                            size={18}
                            className="text-white flex-shrink-0"
                          />
                        </motion.div>
                        <motion.span
                          className="text-sm font-medium text-white font-sans"
                          animate={{
                            color: isOpen ? "#FFFFFF" : "#FFFFFF",
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          {feature.title}
                        </motion.span>
                      </div>
                      <motion.div
                        className="flex-shrink-0 ml-3"
                        animate={{
                          rotate: isOpen ? 90 : 0,
                          scale: isOpen ? 1.1 : 1,
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 20,
                        }}
                      >
                        <AnimatePresence mode="wait">
                          {isOpen ? (
                            <motion.div
                              key="close"
                              initial={{ opacity: 0, scale: 0.5, rotate: -90 }}
                              animate={{
                                opacity: 1,
                                scale: 1,
                                rotate: 0,
                              }}
                              exit={{
                                opacity: 0,
                                scale: 0.5,
                                rotate: 90,
                              }}
                              transition={{
                                type: "spring",
                                stiffness: 400,
                                damping: 25,
                              }}
                              whileHover={{ rotate: 180, scale: 1.2 }}
                            >
                              <X size={18} className="text-white" />
                            </motion.div>
                          ) : (
                            <motion.div
                              key="open"
                              initial={{ opacity: 0, scale: 0.5, rotate: -90 }}
                              animate={{
                                opacity: 1,
                                scale: 1,
                                rotate: 0,
                              }}
                              exit={{
                                opacity: 0,
                                scale: 0.5,
                                rotate: 90,
                              }}
                              transition={{
                                type: "spring",
                                stiffness: 400,
                                damping: 25,
                              }}
                              whileHover={{ rotate: 90, scale: 1.2 }}
                            >
                              <Plus size={18} className="text-white" />
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    </div>

                    {/* Expanded Description */}
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{
                            duration: 0.4,
                            ease: [0.43, 0.13, 0.23, 0.96],
                          }}
                          className="overflow-hidden"
                        >
                          <motion.div
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: -20, opacity: 0 }}
                            transition={{
                              duration: 0.4,
                              delay: 0.1,
                              ease: "easeOut",
                            }}
                          >
                            <motion.p
                              className="text-white/70 text-sm mt-3 pl-7 font-sans leading-relaxed"
                              initial={{ y: -10 }}
                              animate={{ y: 0 }}
                              exit={{ y: -10 }}
                              transition={{
                                duration: 0.3,
                                delay: 0.15,
                                ease: "easeOut",
                              }}
                            >
                              {feature.description}
                            </motion.p>
                          </motion.div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
