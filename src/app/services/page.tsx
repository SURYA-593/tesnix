"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { HiChevronRight } from "react-icons/hi";
import {
  FaMicrochip,
  FaDraftingCompass,
  FaSearch,
  FaCogs,
  FaIndustry,
  FaFlask,
  FaChalkboardTeacher,
  FaUserGraduate,
  FaBuilding,
} from "react-icons/fa";
import AnimatedSection from "@/components/AnimatedSection";

const pcbServices = [
  {
    icon: FaDraftingCompass,
    title: "Schematic Design",
    items: [
      "Clear and error-free circuit design",
      "Proper component selection & connectivity",
      "Easy-to-understand documentation",
      "BOM (Bill of Materials) provided",
    ],
  },
  {
    icon: FaMicrochip,
    title: "PCB Layout & Routing",
    items: [
      "Clean and efficient routing",
      "Differential pair routing support",
      "Basic signal integrity practices",
      "Optimized layout for performance",
    ],
  },
  {
    icon: FaSearch,
    title: "Design Review",
    items: [
      "DRC check & basic validation",
      "Design improvement support",
      "Focus on reliable output",
    ],
  },
  {
    icon: FaCogs,
    title: "Footprint & Component Placement",
    items: [
      "Footprint creation as per datasheet",
      "Standard pad dimensions",
      "Practical placement for routing",
      "Basic industry guidelines",
    ],
  },
  {
    icon: FaIndustry,
    title: "Manufacturing Output",
    items: [
      "Gerber & drill file generation",
      "Complete fabrication outputs",
      "Ready for PCB production",
    ],
  },
  {
    icon: FaFlask,
    title: "PCB Testing Board",
    items: [
      "Complete board verification support",
      "Accurate performance validation",
      "Reliable and documented results",
    ],
  },
];

const trainingServices = [
  {
    icon: FaChalkboardTeacher,
    title: "PCB Designing",
    subtitle: "Beginner to Advanced",
    desc: "Complete training from schematic design to PCB layout and manufacturing output.",
    color: "from-primary to-primary-light",
  },
  {
    icon: FaMicrochip,
    title: "Electronics Fundamentals",
    subtitle: "Foundation Course",
    desc: "A strong foundation in circuit design, electronic components, and working principles — ideal for beginners and freshers.",
    color: "from-primary-light to-accent",
  },
  {
    icon: FaUserGraduate,
    title: "Internship Programs",
    subtitle: "Industry Experience",
    desc: "Industry-style training with hands-on experience and mentorship — simulates real workplace learning.",
    color: "from-accent to-accent-light",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative pt-32 pb-20 bg-dark overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <span className="text-primary-light font-semibold text-sm uppercase tracking-wider">
              What We Offer
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
              Our <span className="gradient-text">Services</span>
            </h1>
            <p className="mt-6 text-gray-400 text-lg max-w-2xl mx-auto">
              Built on a foundation of technical accuracy, industry standards,
              and a genuine passion for electronics.
            </p>
          </motion.div>
        </div>
      </section>

      {/* PCB Design Services */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-4">
              <FaMicrochip className="text-primary" />
              <span className="text-primary font-semibold text-sm">
                Service 01
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              PCB Design <span className="gradient-text">Services</span>
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              We specialize in PCB design and testing — providing complete
              support to verify board performance, validate designs, and deliver
              manufacturing-ready outputs.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pcbServices.map((service, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className="h-full p-8 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-primary-light flex items-center justify-center text-white mb-6 shadow-lg shadow-primary/20">
                    <service.icon size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <ul className="space-y-2.5">
                    {service.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                        <span className="text-gray-600 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Training Programs */}
      <section className="py-24 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full mb-4">
              <FaChalkboardTeacher className="text-accent" />
              <span className="text-accent font-semibold text-sm">
                Service 02
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Training <span className="gradient-text">Programs</span>
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {trainingServices.map((service, i) => (
              <AnimatedSection key={i} delay={i * 0.15}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className="h-full p-8 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300"
                >
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white mb-6 shadow-lg`}
                  >
                    <service.icon size={24} />
                  </div>
                  <div className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">
                    {service.subtitle}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.desc}
                  </p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate & Institutional Training */}
      <section className="py-24 bg-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
                <FaBuilding className="text-primary-light" />
                <span className="text-primary-light font-semibold text-sm">
                  Service 03
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white">
                Corporate &{" "}
                <span className="gradient-text">Institutional Training</span>
              </h2>
              <p className="mt-6 text-gray-400 leading-relaxed">
                We offer customized training sessions for colleges,
                institutions, and companies. Our team can travel to your location
                and deliver offline training tailored to your curriculum or
                organizational needs.
              </p>
              <div className="mt-8 space-y-4">
                {[
                  "Customized training programs",
                  "On-site delivery available",
                  "Tailored to your curriculum",
                  "Expert trainers with industry experience",
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
                      <svg
                        className="w-3.5 h-3.5 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-300 font-medium">{item}</span>
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
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-primary to-primary-light text-white font-semibold rounded-full hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 hover:scale-105"
                >
                  Request Custom Training
                  <HiChevronRight />
                </Link>
              </motion.div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { num: "01", title: "Assess Requirements" },
                  { num: "02", title: "Customize Curriculum" },
                  { num: "03", title: "Deliver Training" },
                  { num: "04", title: "Evaluate & Certify" },
                ].map((step, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    className="p-6 rounded-2xl glass-card text-center hover:border-primary/30 transition-all"
                  >
                    <div className="text-3xl font-bold gradient-text mb-2">
                      {step.num}
                    </div>
                    <p className="text-gray-300 text-sm font-medium">
                      {step.title}
                    </p>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Ready to Get <span className="gradient-text">Started</span>?
            </h2>
            <p className="mt-4 text-gray-600 text-lg">
              Contact us to discuss your PCB design needs or training
              requirements.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="px-8 py-3 bg-gradient-to-r from-primary to-primary-light text-white font-semibold rounded-full hover:shadow-lg hover:shadow-primary/30 transition-all hover:scale-105"
              >
                Contact Us
              </Link>
              <Link
                href="/courses"
                className="px-8 py-3 border-2 border-primary text-primary font-semibold rounded-full hover:bg-primary hover:text-white transition-all"
              >
                View Courses
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
