import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  const menuLinks = [
    { title: "MENU", links: ["Services", "How It Work", "Feature"] },
    { title: "PRICING", links: ["Packages", "Business", "Get App"] },
    { title: "SUPPORT", links: ["Support Center", "Privacy Policy", "Contact Us"] },
  ];

  return (
    <footer className="py-16 bg-card border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Logo & Copyright */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-primary">C</span>
              <span className="text-xl font-semibold text-foreground">rea</span>
            </div>
            <p className="text-muted-foreground text-sm">
              © 2023 Crea. Powered by STG. All rights reserved.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Menu Links */}
          {menuLinks.map((section, index) => (
            <div key={index}>
              <h4 className="font-semibold text-foreground mb-4 text-sm">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
