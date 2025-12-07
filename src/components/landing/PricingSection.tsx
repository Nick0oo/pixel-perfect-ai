import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

const PricingSection = () => {
  const plans = [
    {
      name: "Bronze",
      label: "Start From",
      price: "$899",
      features: [
        "Connect With Team",
        "Exclusive Service",
        "Service Guarantee",
        "24 Hours Support",
        "Work Insurance",
      ],
    },
    {
      name: "Silver",
      label: "Start From",
      price: "$12K",
      features: [
        "Connect With Team",
        "Exclusive Service",
        "Service Guarantee",
        "24 Hours Support",
        "Work Insurance",
      ],
    },
    {
      name: "Gold",
      label: "Start From",
      price: "$12M",
      features: [
        "Connect With Team",
        "Exclusive Service",
        "Service Guarantee",
        "24 Hours Support",
        "Work Insurance",
      ],
    },
    {
      name: "Platinum",
      label: "Contact Us",
      price: "$20M",
      features: [
        "Connect With Team",
        "Exclusive Service",
        "Service Guarantee",
        "24 Hours Support",
        "Work Insurance",
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const headerVariants = {
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

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.43, 0.13, 0.23, 0.96],
      },
    },
  };

  return (
    <section id="pricing" className="py-20 bg-deep-purple">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-serif"
            variants={titleVariants}
          >
            Pricing Plans
          </motion.h2>
          <motion.p
            className="text-white/80 mt-4 text-sm md:text-base font-sans"
            variants={descriptionVariants}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna.
          </motion.p>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              className="rounded-lg p-6 relative overflow-hidden"
              style={{
                backgroundColor: "#3B1F60",
              }}
              variants={cardVariants}
              whileHover={{
                scale: 1.03,
                y: -5,
                transition: { duration: 0.2, ease: "easeOut" },
              }}
            >
              {/* Plan Name */}
              <div className="text-center mb-6">
                <h3 className="text-white font-bold text-lg font-sans mb-2">
                  {plan.name}
                </h3>
                <p className="text-white/70 text-xs font-sans mb-2">
                  {plan.label}
                </p>
                <div className="text-3xl md:text-4xl font-bold text-white font-sans mt-2">
                  {plan.price}
                </div>
              </div>

              {/* Features List */}
              <ul className="space-y-4 mb-6">
                {plan.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-center gap-3 text-sm"
                  >
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: "#5A2C7B" }}
                    >
                      <Check size={12} className="text-white" />
                    </div>
                    <span className="text-white/70 font-sans">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Button */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
              >
                <Button
                  className="w-full bg-gradient-to-r from-[#7B4B9A] to-[#5A2C7B] hover:opacity-90 text-white rounded-xl px-6 py-3 text-sm font-semibold transition-all duration-300 hover:shadow-[0_10px_30px_rgba(123,75,154,0.4)]"
                >
                  Get a Quote
                </Button>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
