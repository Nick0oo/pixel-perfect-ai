import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "HOME", href: "#" },
    { name: "ABOUT", href: "#about" },
    { name: "SERVICES", href: "#services" },
    { name: "PRICING", href: "#pricing" },
   
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-6">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-1">
            <span className="text-2xl font-bold text-white italic tracking-tighter">CS</span>
            <span className="text-xs font-medium text-gray-300 uppercase tracking-widest mt-1">TECH</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-12">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors uppercase tracking-wide"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Login Button */}
          <div className="hidden md:block">
            <Button
              className="bg-gradient-to-r from-[#7000FF] to-[#8B5CF6] hover:opacity-90 text-white rounded-md px-8 py-2 font-medium transition-all duration-300"
            >
              Log In
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu size={24} />
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-4 bg-[#1A0B2E]/95 p-6 rounded-lg border border-purple-500/20 backdrop-blur-lg">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-white transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <Button className="w-full bg-gradient-to-r from-[#7000FF] to-[#8B5CF6] text-white">
              Log In
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
