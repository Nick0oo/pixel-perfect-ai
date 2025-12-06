import { Check, Plus, X } from "lucide-react";
import { useState } from "react";

const FeaturesSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const features = [
    {
      title: "Best interest rates on the market.",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et aliquet adipiscing elit. ut aliquet pu us. s",
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
      title: "Prevent variable prices",
      description: "Lock in your rates and avoid unexpected price fluctuations with our stable pricing model.",
    },
    {
      title: "Best price on the market",
      description: "Get access to premium features at the most competitive rates in the industry.",
    },
  ];

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Success is the only thing we care about
          </h2>
          <p className="text-muted-foreground mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquet, purus at amet lacinia venenatis, tellus integer.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-item rounded-lg"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <div className="flex items-center gap-3">
                <Check size={18} className="text-primary flex-shrink-0" />
                <span className="text-sm font-medium">{feature.title}</span>
              </div>
              <button className="text-muted-foreground hover:text-primary transition-colors">
                {openIndex === index ? <X size={18} /> : <Plus size={18} />}
              </button>
            </div>
          ))}
        </div>

        {/* Expanded Description */}
        {openIndex !== null && (
          <div className="max-w-4xl mx-auto mt-4 p-4 bg-secondary rounded-lg animate-fade-in">
            <p className="text-muted-foreground text-sm">
              {features[openIndex].description}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturesSection;
