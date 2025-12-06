import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const PricingSection = () => {
  const plans = [
    {
      name: "Bronze",
      label: "Small Teams",
      price: "$899",
      features: [
        "Connect With Team",
        "Data Sales Service",
        "Service Guarantee",
        "24 Hours Support",
        "Work Insurance",
      ],
      featured: false,
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
      featured: false,
    },
    {
      name: "Gold",
      label: "Start From",
      price: "$12M",
      features: [
        "Connect With Team",
        "Corporate Service",
        "Service Guarantee",
        "24 Hours Support",
        "Work Insurance",
      ],
      featured: true,
    },
    {
      name: "Platinum",
      label: "Connect to",
      price: "$20M",
      features: [
        "Connect With Team",
        "Exclusive Service",
        "Service Guarantee",
        "24 Hours Support",
        "Work Insurance",
      ],
      featured: false,
    },
  ];

  return (
    <section id="pricing" className="py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">Pricing Plans</h2>
          <p className="text-muted-foreground mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. ut aliquet, purus sit amet lacinia venenatis, lacus ornare.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`pricing-card ${plan.featured ? "pricing-card-featured" : ""} animate-fade-in`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-center mb-6">
                <span className="text-primary text-sm font-medium">{plan.name}</span>
                <p className="text-muted-foreground text-xs mt-1">{plan.label}</p>
                <div className="text-3xl font-bold mt-2">{plan.price}</div>
              </div>

              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-2 text-sm">
                    <Check size={16} className="text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button variant="pricing" size="sm">
                Get a Quote
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
