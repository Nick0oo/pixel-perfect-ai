import { Layers, Code, Palette, Smartphone } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Layers,
      title: "UI / UX DESIGN",
      description: "Lorem ipsum dolor sit amet consectetur.",
    },
    {
      icon: Code,
      title: "WEB DEVELOPMENT",
      description: "Lorem ipsum dolor sit amet consectetur.",
    },
    {
      icon: Palette,
      title: "WEB DESIGN",
      description: "Lorem ipsum dolor sit amet consectetur.",
    },
    {
      icon: Smartphone,
      title: "APP DEVELOPMENT",
      description: "Lorem ipsum dolor sit amet consectetur.",
    },
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="section-label justify-center">My Skills</div>
          <h2 className="text-3xl md:text-4xl font-bold mt-4">
            If you can imagine it, we can make it.
          </h2>
          <p className="text-muted-foreground mt-4">
            Lorem ipsum dolor sit amet consectutor. Est quis vel convallis nisl. Sit non sed risea neque aenean in probinatio.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="service-icon">
                <service.icon size={32} />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{service.title}</h3>
              <p className="text-muted-foreground text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
