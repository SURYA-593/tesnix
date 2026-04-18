"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  HiLightningBolt,
  HiAcademicCap,
  HiOfficeBuilding,
  HiGlobe,
  HiChevronRight,
  HiShieldCheck,
} from "react-icons/hi";
import { FaMicrochip, FaChalkboardTeacher, FaUserGraduate } from "react-icons/fa";
import CircuitBackground from "@/components/CircuitBackground";
import AnimatedSection from "@/components/AnimatedSection";

const highlights = [
  { icon: HiLightningBolt, text: "Industry-Focused Training", color: "from-primary to-primary-light" },
  { icon: FaMicrochip, text: "Hands-On PCB Projects", color: "from-primary-light to-accent" },
  { icon: HiOfficeBuilding, text: "Placement Support", color: "from-accent to-accent-light" },
  { icon: HiGlobe, text: "Online & Offline Programs", color: "from-primary to-accent" },
  { icon: HiShieldCheck, text: "ISO 9001 Certified", color: "from-primary-light to-primary" },
  { icon: HiAcademicCap, text: "MSME Registered", color: "from-accent to-primary-light" },
];

const services = [
  {
    icon: FaMicrochip,
    title: "PCB Design Services",
    description:
      "End-to-end PCB design support — from schematic to Gerber-ready manufacturing output.",
    href: "/services",
  },
  {
    icon: FaChalkboardTeacher,
    title: "Training Programs",
    description:
      "Comprehensive PCB designing courses from beginner to advanced. Online & offline modes.",
    href: "/courses",
  },
  {
    icon: FaUserGraduate,
    title: "Internship Programs",
    description:
      "Industry-style training with hands-on experience and real-world mentorship.",
    href: "/services",
  },
];

const stats = [
  { value: "4", suffix: " Weeks", label: "Course Duration" },
  { value: "100", suffix: "%", label: "Practical Learning" },
  { value: "2", suffix: "+", label: "Industry Tools" },
  { value: "ISO", suffix: "", label: "9001 Certified" },
];

export default function Home() {
  return (
    <>
      {/* ========== HERO SECTION ========== */}
      <section className="relative min-h-screen flex items-center bg-dark overflow-hidden">
        <CircuitBackground />

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark/90 to-dark" />
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <div className="space-y-8">
              {/* Badges */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-wrap gap-3"
              >
                <span className="px-4 py-1.5 bg-primary/10 border border-primary/30 text-primary-light text-xs font-semibold rounded-full flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary-light rounded-full animate-pulse" />
                  ISO 9001 Certified
                </span>
                <span className="px-4 py-1.5 bg-accent/10 border border-accent/30 text-accent text-xs font-semibold rounded-full flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
                  MSME Registered
                </span>
              </motion.div>

              {/* Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight"
              >
                Empowering the Future of{" "}
                <span className="gradient-text">Electronics</span> Through
                Practical Learning
              </motion.h1>

              {/* Sub-headline */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-lg text-gray-400 max-w-lg leading-relaxed"
              >
                From Schematic to Silicon — We Build Industry-Ready Engineers.
                <span className="block mt-2 text-primary-light font-medium">
                  Electronics | Innovation | Excellence
                </span>
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex flex-wrap gap-4"
              >
                <Link
                  href="/courses"
                  className="group px-8 py-4 bg-gradient-to-r from-primary to-primary-light text-white font-semibold rounded-full hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 hover:scale-105 flex items-center gap-2"
                >
                  Explore Courses
                  <HiChevronRight className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/contact"
                  className="px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-full hover:bg-white/5 hover:border-primary-light/50 transition-all duration-300"
                >
                  Enquire Now
                </Link>
              </motion.div>
            </div>

            {/* Right - Logo / Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="hidden lg:flex items-center justify-center"
            >
              <div className="relative">
                {/* Glowing rings */}
                <div className="absolute inset-0 -m-12 rounded-full border border-primary/20 animate-pulse" />
                <div className="absolute inset-0 -m-24 rounded-full border border-primary/10" />
                <div className="absolute inset-0 -m-36 rounded-full border border-primary/5" />

                {/* Logo container */}
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="relative w-80 h-80 flex items-center justify-center"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl" />
                  <Image
                    src="/logo.png"
                    alt="TESNIX"
                    width={280}
                    height={280}
                    className="relative z-10 object-contain drop-shadow-2xl"
                    priority
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center pt-2"
          >
            <div className="w-1.5 h-1.5 bg-primary-light rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* ========== INTRODUCTION ========== */}
      <section className="py-24 bg-white circuit-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Welcome to TESNIX
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">
              Your Partner in{" "}
              <span className="gradient-text">Electronics Growth</span>
            </h2>
            <p className="mt-6 text-gray-600 leading-relaxed text-lg">
              TESNIX is an electronics-focused organization based in Tamil Nadu,
              India, dedicated to advancing practical, industry-relevant
              knowledge and innovation. We specialize in PCB design services,
              electronics training, and research — with a strong emphasis on
              hands-on learning and real-world application.
            </p>
          </AnimatedSection>

          {/* Highlights Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {highlights.map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="p-5 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-lg transition-all text-center group cursor-default"
                >
                  <div
                    className={`w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white shadow-lg`}
                  >
                    <item.icon size={22} />
                  </div>
                  <p className="text-xs font-medium text-gray-700 group-hover:text-gray-900">
                    {item.text}
                  </p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ========== STATS SECTION ========== */}
      <section className="py-20 bg-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <AnimatedSection key={i} delay={i * 0.15}>
                <div className="text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", delay: i * 0.15 + 0.3 }}
                    className="text-4xl sm:text-5xl font-bold gradient-text"
                  >
                    {stat.value}
                    <span className="text-primary-light">{stat.suffix}</span>
                  </motion.div>
                  <p className="mt-2 text-gray-400 text-sm font-medium">
                    {stat.label}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ========== SERVICES PREVIEW ========== */}
      <section className="py-24 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              What We Offer
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">
              Our Core <span className="gradient-text">Services</span>
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <AnimatedSection key={i} delay={i * 0.15} direction={i === 0 ? "left" : i === 2 ? "right" : "up"}>
                <Link href={service.href} className="block group">
                  <motion.div
                    whileHover={{ y: -8 }}
                    className="h-full p-8 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-300"
                  >
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-primary-light flex items-center justify-center text-white mb-6 shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform">
                      <service.icon size={26} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {service.description}
                    </p>
                    <div className="mt-6 text-primary font-semibold text-sm flex items-center gap-1 group-hover:gap-3 transition-all">
                      Learn More
                      <HiChevronRight className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </motion.div>
                </Link>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-8 py-3 border-2 border-primary text-primary font-semibold rounded-full hover:bg-primary hover:text-white transition-all duration-300"
            >
              View All Services
              <HiChevronRight />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ========== WHY TESNIX ========== */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                Why Choose Us
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">
                Building <span className="gradient-text">Industry-Ready</span>{" "}
                Engineers
              </h2>
              <p className="mt-6 text-gray-600 leading-relaxed">
                Whether you are a student stepping into electronics for the
                first time, a job seeker looking to sharpen your skills, or a
                professional aiming to stay ahead — TESNIX is your partner in
                growth.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  "Practical, project-based learning",
                  "Industry-standard tools — Altium Designer & KiCad",
                  "Expert trainers with real-world experience",
                  "Placement support for eligible students",
                  "Flexible learning — Online & Offline modes",
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-accent to-accent-light flex items-center justify-center shrink-0">
                      <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700 font-medium">{item}</span>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="mt-10"
              >
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-primary to-primary-light text-white font-semibold rounded-full hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 hover:scale-105"
                >
                  Learn More About Us
                  <HiChevronRight />
                </Link>
              </motion.div>
            </AnimatedSection>

            <AnimatedSection direction="right" className="hidden lg:block">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl blur-2xl" />
                <div className="relative bg-dark rounded-3xl p-10 shadow-2xl">
                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <div className="space-y-3 font-mono text-sm">
                    <div className="text-gray-500">{"// TESNIX PCB Design Pipeline"}</div>
                    <div>
                      <span className="text-primary-light">const</span>{" "}
                      <span className="text-accent">pipeline</span>{" "}
                      <span className="text-white">=</span>{" "}
                      <span className="text-yellow-400">[</span>
                    </div>
                    {[
                      '"Schematic Design"',
                      '"Component Selection"',
                      '"PCB Layout & Routing"',
                      '"Design Review & DRC"',
                      '"Gerber Generation"',
                      '"Manufacturing Ready"',
                    ].map((step, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.15 + 0.3 }}
                        className="pl-6"
                      >
                        <span className="text-accent">{step}</span>
                        <span className="text-white">,</span>
                      </motion.div>
                    ))}
                    <div>
                      <span className="text-yellow-400">]</span>
                      <span className="text-white">;</span>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ========== CTA SECTION ========== */}
      <section className="py-24 bg-dark relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/2 w-[800px] h-[800px] -translate-x-1/2 -translate-y-1/2 bg-primary/10 rounded-full blur-[120px]" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Ready to Start Your{" "}
              <span className="gradient-text">Electronics Journey</span>?
            </h2>
            <p className="mt-6 text-gray-400 text-lg max-w-2xl mx-auto">
              Join TESNIX and gain the skills, confidence, and industry
              knowledge to build a successful career in electronics.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link
                href="/courses"
                className="px-10 py-4 bg-gradient-to-r from-primary to-accent text-white font-semibold rounded-full hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 hover:scale-105"
              >
                Explore Courses
              </Link>
              <Link
                href="/contact"
                className="px-10 py-4 border-2 border-white/20 text-white font-semibold rounded-full hover:bg-white/5 hover:border-primary-light/50 transition-all duration-300"
              >
                Contact Us
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
