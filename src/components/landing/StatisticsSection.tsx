import { motion } from "framer-motion";

const StatisticsSection = () => {
  const statistics = [
    {
      number: "54M",
      description: "Students already enroll for using it.",
    },
    {
      number: "3.2K+",
      description: "courses are available with various categories.",
    },
    {
      number: "600",
      description: "Experienced author who will teach you.",
    },
  ];

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

  const itemVariants = {
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

  const numberVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.5,
      filter: "blur(10px)",
    },
    visible: {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
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
        delay: 0.3,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-12 md:py-16 bg-deep-purple">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          {statistics.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center md:text-left"
              variants={itemVariants}
            >
              <motion.div
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2 md:mb-3 leading-none"
                variants={numberVariants}
                style={{
                  textShadow: "0 0 20px rgba(255, 255, 255, 0.5), 0 0 40px rgba(255, 255, 255, 0.3), 0 0 60px rgba(255, 255, 255, 0.1)"
                }}
              >
                {stat.number}
              </motion.div>
              <motion.p
                className="text-white text-base md:text-sm lg:text-base leading-relaxed"
                variants={descriptionVariants}
              >
                {stat.description}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default StatisticsSection;

