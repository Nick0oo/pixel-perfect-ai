import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  const stats = [
    { value: "54M", label: "Students already enroll for using it." },
    { value: "3.2K+", label: "courses are available with various categories" },
    { value: "600", label: "Experienced author who will teach you..." },
  ];

  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              We Are
              <br />
              <span className="text-foreground">CRE</span>
              <span className="text-gradient">AT</span>
              <span className="text-foreground">IVE</span>
            </h1>
            
            <p className="text-muted-foreground text-lg max-w-md">
              Help find solutions with intuition and in accordance with client business goals, we provide a high-quality services.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="lg">
                Contact us
              </Button>
              <Button variant="heroOutline" size="lg" className="gap-2">
                <Play size={18} className="fill-current" />
                Watch video
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative animate-slide-in-right" style={{ animationDelay: "0.2s" }}>
            <div className="relative">
              {/* Purple frame decoration */}
              <div className="absolute -inset-4 border-2 border-primary rounded-lg transform translate-x-4 translate-y-4" />
              <img
                src={heroImage}
                alt="Creative professional working"
                className="relative rounded-lg w-full object-cover aspect-[4/3] z-10"
              />
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-border/50">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center md:text-left animate-fade-in"
              style={{ animationDelay: `${0.4 + index * 0.1}s` }}
            >
              <div className="stat-number">{stat.value}</div>
              <p className="text-muted-foreground mt-2 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
