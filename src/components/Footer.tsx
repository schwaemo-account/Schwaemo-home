import { Github } from "lucide-react";
import logo from "/assets/logo.png";

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: "https://github.com", label: "GitHub" },
  ];

  return (
    <footer className="border-t-[3px] border-foreground bg-card mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Tagline */}
          <div className="text-center md:text-left">
            <div className="flex items-center gap-3 justify-center md:justify-start">
              <img
                src={logo}
                alt="Schwaemo Logo"
                className="h-8 w-8 object-contain"
              />
              <h3 className="font-display text-xl font-bold">SCHWAEMO</h3>
            </div>
            <p className="text-muted-foreground text-sm mt-1">
              A marketplace of things I've built.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border-brutal bg-card hover:bg-yellow hover:-translate-y-0.5 hover:translate-x-0.5 hover:shadow-brutal-sm transition-all"
                aria-label={social.label}
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Schwaemo. Ship fast.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
