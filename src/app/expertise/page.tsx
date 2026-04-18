"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { HiChevronRight, HiShieldCheck } from "react-icons/hi";
import {
  FaMicrochip,
  FaWifi,
  FaTachometerAlt,
  FaSatelliteDish,
  FaDesktop,
  FaProjectDiagram,
  FaSearch,
  FaCheckCircle,
  FaIndustry,
} from "react-icons/fa";
import AnimatedSection from "@/components/AnimatedSection";

const pcbExpertise = {
  designRouting: [
    { icon: FaTachometerAlt, text: "Impedance Matching" },
    { icon: FaProjectDiagram, text: "Differential Pair Routing" },
    { icon: FaMicrochip, text: "PCB Layout & Routing Support" },
    { icon: FaProjectDiagram, text: "4-Layer & 6-Layer PCB Design" },
  ],
  validationOutput: [
    { icon: FaIndustry, text: "Gerber File Generation" },
    { icon: FaSearch, text: "Design Rule Check (DRC)" },
    { icon: FaCheckCircle, text: "Design Validation & Review" },
    { icon: FaIndustry, text: "Manufacturing Output Preparation" },
  ],
};

const embeddedExpertise = [
  { icon: FaWifi, title: "IoT Module Design & Integration", desc: "End-to-end IoT hardware design with seamless module integration" },
  { icon: FaTachometerAlt, title: "Energy Metering Systems", desc: "Precision energy measurement and monitoring system design" },
  { icon: FaSatelliteDish, title: "GPS Tracking Modules", desc: "Advanced GPS tracking hardware for real-time location systems" },
  { icon: FaDesktop, title: "HMI Design", desc: "Human-Machine Interface design for industrial applications" },
];

export default function ExpertisePage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative pt-32 pb-20 bg-dark overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <span className="text-primary-light font-semibold text-sm uppercase tracking-wider">
              Technical Expertise
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
              Our <span className="gradient-text">Expertise</span>
            </h1>
            <p className="mt-6 text-gray-400 text-lg max-w-2xl mx-auto">
              Deep, hands-on expertise across core areas of electronics design
              and embedded systems, backed by real industry knowledge.
            </p>
          </motion.div>
        </div>
      </section>

      {/* PCB Design Expertise */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-4">
              <FaMicrochip className="text-primary" />
              <span className="text-primary font-semibold text-sm">
                Expertise 01
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              PCB Design <span className="gradient-text">Expertise</span>
            </h2>
            <p className="mt-4 text-gray-500 text-sm">
              Tools: <strong>Altium Designer</strong> |{" "}
              <strong>KiCad</strong>
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Design & Routing */}
            <AnimatedSection direction="left">
              <div className="space-y-2 mb-6">
                <h3 className="text-xl font-bold text-gray-900">
                  Design & Routing
                </h3>
                <div className="w-16 h-1 bg-gradient-to-r from-primary to-primary-light rounded-full" />
              </div>
              <div className="space-y-4">
                {pcbExpertise.designRouting.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 hover:bg-primary/5 border border-transparent hover:border-primary/20 transition-all"
                  >
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-primary-light flex items-center justify-center text-white shrink-0">
                      <item.icon size={18} />
                    </div>
                    <span className="text-gray-700 font-medium text-sm">
                      {item.text}
                    </span>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>

            {/* Validation & Output */}
            <AnimatedSection direction="right">
              <div className="space-y-2 mb-6">
                <h3 className="text-xl font-bold text-gray-900">
                  Validation & Output
                </h3>
                <div className="w-16 h-1 bg-gradient-to-r from-accent to-accent-light rounded-full" />
              </div>
              <div className="space-y-4">
                {pcbExpertise.validationOutput.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ x: -5 }}
                    className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 hover:bg-accent/5 border border-transparent hover:border-accent/20 transition-all"
                  >
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent to-accent-light flex items-center justify-center text-white shrink-0">
                      <item.icon size={18} />
                    </div>
                    <span className="text-gray-700 font-medium text-sm">
                      {item.text}
                    </span>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Embedded System Design */}
      <section className="py-24 bg-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full mb-4">
              <FaWifi className="text-accent" />
              <span className="text-accent font-semibold text-sm">
                Expertise 02
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Embedded System{" "}
              <span className="gradient-text">Design</span>
            </h2>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {embeddedExpertise.map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.12}>
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="h-full p-8 rounded-2xl glass-card hover:border-primary/30 transition-all text-center"
                >
                  <motion.div
                    whileHover={{ rotate: 10 }}
                    className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white mb-6 shadow-lg"
                  >
                    <item.icon size={28} />
                  </motion.div>
                  <h3 className="text-lg font-bold text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Our <span className="gradient-text">Certifications</span>
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <AnimatedSection direction="left">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="h-full p-8 rounded-2xl bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-primary-light flex items-center justify-center text-white shrink-0 shadow-lg">
                    <HiShieldCheck size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      ISO 9001 Certified
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      International standard for Quality Management Systems —
                      reflects our commitment to consistent, reliable, and
                      high-quality service delivery.
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="h-full p-8 rounded-2xl bg-gradient-to-br from-accent/5 to-accent/10 border border-accent/20 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent to-accent-light flex items-center justify-center text-white shrink-0 shadow-lg">
                    <HiShieldCheck size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      MSME Registered
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Recognized by the Government of India as a verified Micro,
                      Small & Medium Enterprise in the electronics sector.
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Have a Project in{" "}
              <span className="gradient-text">Mind</span>?
            </h2>
            <p className="mt-4 text-gray-600 text-lg">
              Let our expertise drive your next electronics project to success.
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-10 py-4 bg-gradient-to-r from-primary to-accent text-white font-semibold rounded-full hover:shadow-xl hover:shadow-primary/30 transition-all hover:scale-105"
              >
                Get In Touch
                <HiChevronRight />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
