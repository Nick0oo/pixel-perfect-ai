import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-cta">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Your one stop shop for all your business needs.
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquet purus sit amet lacinia venenatis, lacus morbi.
          </p>
          <Button variant="cta" className="mt-8">
            Get started
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
