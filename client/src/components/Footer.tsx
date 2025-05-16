
import React from "react";
import { Link } from "react-router-dom";
import { Linkedin, Instagram, Heart, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];
  
  // const socialLinks = [
  //   { name: "LinkedIn", icon: Linkedin, link: "#" },
  //   { name: "Psychology Today", icon: Heart, link: "#" },
  //   { name: "Instagram", icon: Instagram, link: "#" },
  // ];

  return (
    <footer className="bg-olive text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Column */}
          <div>
            <h3 className="text-2xl font-serif mb-4 text-robin">Dr. Immaculate Wangui</h3>
            <p className="mb-4 text-gray-200 max-w-xs">
               Clinical Psychologist with great experience in helping
              individuals and couples achieve emotional wellness and balance.
            </p>
            {/* <div className="flex space-x-4 mt-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-white hover:text-robin transition-colors"
                  aria-label={`Visit ${social.name}`}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div> */}
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-xl font-serif mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-200 hover:text-robin transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-xl font-serif mb-4">Contact</h3>
            <div className="space-y-3 text-gray-200">
              <p className="flex items-center">
                <Mail size={16} className="mr-2 text-robin" />
                <a href="mailto:contact.wanguiimmaculate@gmail.com" className="hover:text-robin transition-colors">
                  contact.wanguiimmaculate@gmail.com
                </a>
              </p>
              <p className="flex items-center">
                <Phone size={16} className="mr-2 text-robin" />
                <a href="tel:+254792025453" className="hover:text-robin transition-colors">
                  +254 792 025453
                </a>
              </p>
              <p className="flex items-center">
                <MapPin size={16} className="h-5 w-5 text-robin" />
                <a
                  href="https://maps.app.goo.gl/VTtevNhjYda8b3Ko6"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-robin transition-colors"
                >
                  Kirigiti, Kiambu, Kenya
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 border-t border-gray-700 text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} Dr. Immaculate Wangui, All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
