
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <nav
      className={cn(
        "fixed w-full z-50 transition-all duration-300 px-4 md:px-8",
        scrolled
          ? "bg-white/90 shadow-md backdrop-blur-sm py-3"
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link
          to="/"
          className="text-2xl font-serif font-bold text-olive hover:text-robin transition-colors"
        >
          Dr. Immaculate Wangui
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "font-medium transition-colors hover:text-robin",
                location.pathname === link.path
                  ? "text-robin"
                  : "text-olive/80"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Button asChild variant="default" className="bg-robin hover:bg-robin/80 text-white">
            <Link to="/contact">Book Session</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-olive" />
            ) : (
              <Menu className="h-6 w-6 text-olive" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg animate-fade-in py-4">
          <div className="container mx-auto flex flex-col space-y-4 px-4">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "py-2 font-medium transition-colors hover:text-robin",
                  location.pathname === link.path
                    ? "text-robin"
                    : "text-olive/80"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Button asChild variant="default" className="bg-robin hover:bg-robin/80 text-white mt-4 w-full">
              <Link to="/contact">Book Session</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
