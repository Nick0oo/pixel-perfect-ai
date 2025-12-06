import { Button } from "@/components/ui/button";
import aboutImage from "@/assets/about-image.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div className="relative">
            <div className="absolute -inset-4 border-2 border-primary/30 rounded-lg" />
            <img
              src={aboutImage}
              alt="Team collaboration"
              className="relative rounded-lg w-full object-cover aspect-[4/5] z-10"
            />
          </div>

          {/* Right Content */}
          <div className="space-y-6">
            <div className="section-label">About Us</div>
            
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              If you can imagine it we can make it.
            </h2>
            
            <p className="text-muted-foreground">
              Lorem ipsum dolor sit amet consectetur. Ut sem ac id hendrerit vulputate. Nisi nunc massa venenatis eleifend. Vitae a finigilla ac pqtet tempor egestas amet dui in ppp.
            </p>
            
            <Button variant="hero">
              Read more
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
