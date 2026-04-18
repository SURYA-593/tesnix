"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { HiChevronRight, HiClock, HiDesktopComputer, HiAcademicCap } from "react-icons/hi";
import {
  FaLaptopCode,
  FaMicrochip,
  FaFileAlt,
  FaTools,
  FaBriefcase,
  FaUserTie,
  FaFlask,
  FaHandshake,
  FaLink,
} from "react-icons/fa";
import AnimatedSection from "@/components/AnimatedSection";

const curriculum = [
  {
    category: "Foundation",
    color: "from-primary to-primary-light",
    items: [
      "Schematic design basics",
      "Component selection & BOM creation",
      "Understanding circuit connectivity",
    ],
  },
  {
    category: "Design & Layout",
    color: "from-primary-light to-accent",
    items: [
      "Footprint creation (datasheet-based)",
      "PCB layout & routing techniques",
      "Differential pair routing basics",
    ],
  },
  {
    category: "Manufacturing Output",
    color: "from-accent to-accent-light",
    items: [
      "Gerber file generation",
      "Drill file creation",
      "Manufacturing-ready output",
    ],
  },
  {
    category: "Tools & Software",
    color: "from-primary to-accent",
    items: [
      "Altium Designer — industry standard",
      "KiCad — open-source PCB tool",
      "Real project walkthroughs",
    ],
  },
];

const outcomes = [
  "Design PCBs independently from scratch",
  "Work confidently on real-time industry projects",
  "Understand the complete PCB manufacturing process",
  "Attend technical interviews with confidence",
  "Build a professional PCB design portfolio",
];

const placementSupport = [
  { icon: FaFileAlt, text: "Resume Building & Portfolio Preparation" },
  { icon: FaUserTie, text: "Interview Preparation — HR & Technical" },
  { icon: FaFlask, text: "Mock Interviews with Expert Guidance" },
  { icon: FaBriefcase, text: "Hands-On Project Experience" },
  { icon: FaLink, text: "Referrals to MNCs and Startups" },
];

export default function CoursesPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative pt-32 pb-20 bg-dark overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-accent/10 rounded-full blur-[100px]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <span className="text-primary-light font-semibold text-sm uppercase tracking-wider">
              Career Launchpad
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
              PCB Designing <span className="gradient-text">Course</span>
            </h1>
            <p className="mt-6 text-gray-400 text-lg max-w-2xl mx-auto">
              Beginner to Advanced — From Zero to Industry-Ready in 4 Weeks
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <span className="px-5 py-2 bg-primary/10 border border-primary/30 text-primary-light text-sm font-medium rounded-full flex items-center gap-2">
                <HiClock size={16} />4 Weeks Duration
              </span>
              <span className="px-5 py-2 bg-accent/10 border border-accent/30 text-accent text-sm font-medium rounded-full flex items-center gap-2">
                <HiDesktopComputer size={16} />
                Online & Offline
              </span>
              <span className="px-5 py-2 bg-white/5 border border-white/20 text-gray-300 text-sm font-medium rounded-full flex items-center gap-2">
                <FaTools size={14} />
                Altium Designer | KiCad
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Course Overview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Course Overview
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">
              What You Will <span className="gradient-text">Learn</span>
            </h2>
            <p className="mt-6 text-gray-600 leading-relaxed">
              The TESNIX PCB Designing course takes you through the complete PCB
              development process — from drawing your first schematic to
              generating final Gerber files for manufacturing.
            </p>
          </AnimatedSection>

          {/* Course modes */}
          <div className="grid md:grid-cols-2 gap-6 mb-16 max-w-4xl mx-auto">
            <AnimatedSection direction="left">
              <motion.div
                whileHover={{ y: -5 }}
                className="p-8 rounded-2xl bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 transition-all"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary-light flex items-center justify-center text-white">
                    <HiDesktopComputer size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Online Mode</h3>
                    <p className="text-sm text-gray-500">
                      Live interactive sessions
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm">
                  Duration: <strong>4 Weeks</strong> — Learn from anywhere with
                  live sessions at TESNIX.
                </p>
              </motion.div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <motion.div
                whileHover={{ y: -5 }}
                className="p-8 rounded-2xl bg-gradient-to-br from-accent/5 to-accent/10 border border-accent/20 transition-all"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-accent-light flex items-center justify-center text-white">
                    <HiAcademicCap size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Offline Mode</h3>
                    <p className="text-sm text-gray-500">
                      Institutional / Campus delivery
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm">
                  Custom duration — Our trainers visit your institution or campus
                  on request.
                </p>
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-24 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Curriculum
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">
              Complete <span className="gradient-text">Learning Path</span>
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {curriculum.map((module, i) => (
              <AnimatedSection key={i} delay={i * 0.15}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className="h-full bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden hover:shadow-xl transition-all"
                >
                  <div
                    className={`h-2 bg-gradient-to-r ${module.color}`}
                  />
                  <div className="p-6">
                    <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">
                      Module {String(i + 1).padStart(2, "0")}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-4">
                      {module.category}
                    </h3>
                    <ul className="space-y-3">
                      {module.items.map((item, j) => (
                        <li key={j} className="flex items-start gap-2.5">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                          <span className="text-gray-600 text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-24 bg-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <span className="text-primary-light font-semibold text-sm uppercase tracking-wider">
                Course Outcomes
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-white">
                What You <span className="gradient-text">Become</span>
              </h2>
              <div className="mt-8 space-y-4">
                {outcomes.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.12 }}
                    className="flex items-center gap-4 p-4 rounded-xl glass-card hover:border-primary/30 transition-all"
                  >
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent to-accent-light flex items-center justify-center shrink-0">
                      <svg
                        className="w-4 h-4 text-white"
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
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-2xl" />
                <div className="relative bg-dark-light rounded-3xl p-10 border border-white/10 shadow-2xl">
                  <div className="text-center">
                    <motion.div
                      animate={{ rotate: [0, 5, -5, 0] }}
                      transition={{ duration: 4, repeat: Infinity }}
                      className="inline-block"
                    >
                      <FaLaptopCode size={60} className="text-primary-light mx-auto" />
                    </motion.div>
                    <h3 className="mt-6 text-2xl font-bold text-white">
                      Industry-Ready in
                    </h3>
                    <div className="mt-2 text-6xl font-bold gradient-text">
                      4 Weeks
                    </div>
                    <p className="mt-4 text-gray-400 text-sm">
                      Real projects. Real tools. Real skills.
                    </p>
                    <Link
                      href="/contact"
                      className="mt-8 inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-primary to-primary-light text-white font-semibold rounded-full hover:shadow-lg hover:shadow-primary/30 transition-all hover:scale-105"
                    >
                      Enroll Now
                      <HiChevronRight />
                    </Link>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Placement Support */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Career Support
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">
              Placement <span className="gradient-text">Support</span>
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              After completing the course and demonstrating your skills, TESNIX
              provides dedicated placement support.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
            {placementSupport.map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="text-center p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:shadow-lg hover:border-primary/20 transition-all"
                >
                  <div className="w-12 h-12 mx-auto rounded-xl bg-gradient-to-br from-primary to-primary-light flex items-center justify-center text-white mb-4 shadow-lg shadow-primary/20">
                    <item.icon size={20} />
                  </div>
                  <p className="text-xs font-medium text-gray-700 leading-relaxed">
                    {item.text}
                  </p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="mt-12 text-center">
            <p className="text-gray-500 text-sm italic max-w-xl mx-auto">
              Note: Placement support is provided to students who successfully
              complete the course and actively participate in training and
              projects. Outcomes depend on individual performance and dedication.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Start Your PCB Design{" "}
              <span className="gradient-text">Journey Today</span>
            </h2>
            <p className="mt-4 text-gray-600 text-lg">
              Enroll in our 4-week PCB Designing course and become
              industry-ready.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="px-10 py-4 bg-gradient-to-r from-primary to-accent text-white font-semibold rounded-full hover:shadow-xl hover:shadow-primary/30 transition-all hover:scale-105"
              >
                Enquire Now
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
