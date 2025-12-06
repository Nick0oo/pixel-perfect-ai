import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "HOME", href: "#" },
    { name: "ABOUT", href: "#about" },
    { name: "OUR BLOG", href: "#blog" },
    { name: "PRODUCT", href: "#services" },
    { name: "CONTACT US", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-primary">C</span>
            <span className="text-xl font-semibold text-foreground">rea</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="nav-link"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Login Button */}
          <div className="hidden md:block">
            <Button variant="default" size="sm">
              Log In
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu size={24} />
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="nav-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <Button variant="default" size="sm" className="w-fit">
              Log In
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
