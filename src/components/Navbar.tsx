import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "/assets/logo.png";

const Navbar = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { path: "/showcase", label: "Showcase" },
    { path: "/founders", label: "Founders" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-card border-b-[3px] border-foreground">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 font-display text-2xl font-bold tracking-tight hover:text-primary transition-colors group"
          >
            <img
              src={logo}
              alt="Schwaemo Logo"
              className="h-10 w-10 object-contain group-hover:scale-110 transition-transform"
            />
            <span>SCHWAEMO</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-display font-semibold text-sm uppercase tracking-wide transition-all hover:-translate-y-0.5 ${isActive(link.path)
                    ? "text-primary underline underline-offset-4 decoration-2"
                    : "text-foreground hover:text-primary"
                  }`}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/showcase" className="neo-btn-primary text-sm">
              View Projects →
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 border-brutal bg-card hover:bg-muted transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t-[3px] border-foreground py-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block font-display font-semibold text-lg ${isActive(link.path) ? "text-primary" : "text-foreground"
                  }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/showcase"
              onClick={() => setMobileMenuOpen(false)}
              className="neo-btn-primary text-sm w-full text-center"
            >
              View Projects →
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
