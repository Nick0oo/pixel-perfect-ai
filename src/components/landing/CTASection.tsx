import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const CTASection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.43, 0.13, 0.23, 0.96],
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.43, 0.13, 0.23, 0.96],
      },
    },
  };

  const descriptionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.43, 0.13, 0.23, 0.96],
      },
    },
  };

  return (
    <section className="py-20" style={{ backgroundColor: "#2F1B4E" }}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            {/* Text Block - Left */}
            <motion.div className="flex-1" variants={textVariants}>
              <motion.h2
                className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-white font-serif"
                variants={titleVariants}
              >
                Your one stop shop for all your business needs.
              </motion.h2>
              <motion.p
                className="text-white/80 mt-4 text-sm md:text-base font-sans"
                variants={descriptionVariants}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna.
              </motion.p>
            </motion.div>

            {/* Button - Right */}
            <motion.div
              className="flex-shrink-0"
              variants={buttonVariants}
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
              >
                <Button
                  className="bg-gradient-to-r from-[#7B4B9A] to-[#5A2C7B] hover:opacity-90 text-white rounded-xl px-8 py-3 text-base font-semibold transition-all duration-300 hover:shadow-[0_10px_30px_rgba(123,75,154,0.4)]"
                >
                  Get started
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
