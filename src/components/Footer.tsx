"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  HiLocationMarker,
  HiPhone,
  HiMail,
} from "react-icons/hi";
import { FaLinkedin, FaWhatsapp, FaInstagram } from "react-icons/fa";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/courses", label: "Courses" },
  { href: "/expertise", label: "Expertise" },
  { href: "/contact", label: "Contact Us" },
];

const services = [
  "PCB Design Services",
  "PCB Designing Course",
  "Electronics Fundamentals",
  "Internship Programs",
  "Corporate Training",
];

export default function Footer() {
  return (
    <footer className="bg-dark relative overflow-hidden">
      {/* Top gradient line */}
      <div className="h-1 bg-gradient-to-r from-primary via-primary-light to-accent" />

      {/* Circuit pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(0,119,182,0.3), transparent 50%),
              radial-gradient(circle at 80% 50%, rgba(59,181,74,0.3), transparent 50%)`,
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/tesnix-removebg-preview.png"
                alt="TESNIX"
                width={45}
                height={45}
                className="object-contain"
              />
              <div>
                <h3 className="text-xl font-bold gradient-text">TESNIX</h3>
                <p className="text-xs text-gray-400 tracking-wider">
                  Electronics | Innovation | Excellence
                </p>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Empowering the future of electronics through practical learning
              and innovation. ISO 9001 Certified | MSME Registered.
            </p>
            <div className="flex gap-3 pt-2">
              <motion.a
                whileHover={{ scale: 1.15, y: -3 }}
                href="https://wa.me/919344767747"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-accent hover:border-accent/50 transition-colors"
              >
                <FaWhatsapp size={18} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.15, y: -3 }}
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-primary-light hover:border-primary-light/50 transition-colors"
              >
                <FaLinkedin size={18} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.15, y: -3 }}
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-pink-400 hover:border-pink-400/50 transition-colors"
              >
                <FaInstagram size={18} />
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6 text-sm uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-primary-light text-sm transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary-light transition-colors" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-6 text-sm uppercase tracking-wider">
              Our Services
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-gray-400 text-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent/50" />
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-6 text-sm uppercase tracking-wider">
              Contact Us
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <HiLocationMarker className="text-primary-light mt-1 shrink-0" size={18} />
                <p className="text-gray-400 text-sm">
                  No. 24, Patel Street, Rathinapuri,
                  <br />
                  Coimbatore – 641027,
                  <br />
                  Tamil Nadu, India
                </p>
              </div>
              <div className="flex items-center gap-3">
                <HiPhone className="text-primary-light shrink-0" size={18} />
                <a
                  href="tel:+919344767747"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  +91 93447 67747
                </a>
              </div>
              <div className="flex items-center gap-3">
                <HiMail className="text-primary-light shrink-0" size={18} />
                <a
                  href="mailto:info@tesnix.com"
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  info@tesnix.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} TESNIX. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-xs text-gray-500 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              ISO 9001 Certified
            </span>
            <span className="text-xs text-gray-500 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary-light animate-pulse" />
              MSME Registered
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
