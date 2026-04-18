"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { HiChevronRight, HiShieldCheck } from "react-icons/hi";
import { FaHandshake, FaBullseye, FaEye, FaHeart } from "react-icons/fa";
import AnimatedSection from "@/components/AnimatedSection";

const values = [
  { icon: "🔧", title: "Practical Learning First", desc: "Hands-on, project-based approach to every topic" },
  { icon: "🏭", title: "Industry-Relevant Curriculum", desc: "Training aligned with real industry requirements" },
  { icon: "🎓", title: "Student-Centric Approach", desc: "Personalized attention and dedicated mentorship" },
  { icon: "💡", title: "Continuous Innovation", desc: "Always evolving with the latest in electronics" },
  { icon: "✨", title: "Integrity & Quality", desc: "Committed to excellence in everything we do" },
];

const whyChoose = [
  "Practical, project-based learning",
  "Industry-standard tools — Altium Designer & KiCad",
  "Expert trainers with real-world experience",
  "Placement support for eligible students",
  "Flexible learning — Online & Offline modes",
  "Corporate & institutional training available",
  "ISO 9001 Certified | MSME Registered",
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative pt-32 pb-20 bg-dark overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <span className="text-primary-light font-semibold text-sm uppercase tracking-wider">
              About TESNIX
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
              Who We <span className="gradient-text">Are</span>
            </h1>
            <p className="mt-6 text-gray-400 text-lg max-w-2xl mx-auto">
              A community of engineers, designers, and educators passionate
              about electronics and committed to excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl blur-2xl" />
                <div className="relative bg-gradient-to-br from-dark to-dark-light rounded-3xl p-12 shadow-2xl">
                  <motion.div
                    animate={{ y: [-5, 5, -5] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Image
                      src="/logo.png"
                      alt="TESNIX"
                      width={300}
                      height={300}
                      className="mx-auto object-contain"
                    />
                  </motion.div>
                  <div className="mt-6 flex justify-center gap-4">
                    <span className="px-4 py-2 bg-primary/10 border border-primary/30 text-primary-light text-xs font-semibold rounded-full">
                      ISO 9001 Certified
                    </span>
                    <span className="px-4 py-2 bg-accent/10 border border-accent/30 text-accent text-xs font-semibold rounded-full">
                      MSME Registered
                    </span>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                Building the Future of{" "}
                <span className="gradient-text">Electronics Education</span>
              </h2>
              <p className="mt-6 text-gray-600 leading-relaxed">
                TESNIX, based in Tamil Nadu, India, is an electronics
                organization built on the belief that practical, hands-on
                experience is the cornerstone of real engineering competence.
              </p>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Founded with a vision to make quality electronics education
                accessible and industry-aligned, we work closely with students,
                freshers, and institutions to deliver training that actually
                prepares people for the workplace.
              </p>
              <p className="mt-4 text-gray-600 leading-relaxed font-medium">
                We are not just a training company — we are a community of
                engineers, designers, and educators who are passionate about
                electronics and committed to excellence.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <AnimatedSection direction="left">
              <motion.div
                whileHover={{ y: -5 }}
                className="h-full p-10 rounded-3xl bg-white border border-gray-200 shadow-sm hover:shadow-xl transition-all"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary-light flex items-center justify-center text-white mb-6 shadow-lg shadow-primary/20">
                  <FaBullseye size={28} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Our Mission
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  To nurture independent thinkers and future-ready innovators by
                  bridging the gap between theory and practice. Through
                  technology-driven learning and continuous research, TESNIX is
                  committed to shaping the next generation of excellence in
                  electronics.
                </p>
              </motion.div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <motion.div
                whileHover={{ y: -5 }}
                className="h-full p-10 rounded-3xl bg-white border border-gray-200 shadow-sm hover:shadow-xl transition-all"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-accent-light flex items-center justify-center text-white mb-6 shadow-lg shadow-accent/20">
                  <FaEye size={28} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Our Vision
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  To be the most trusted name in electronics training and PCB
                  design services across India — known for producing skilled,
                  confident, and job-ready professionals.
                </p>
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              What Drives Us
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">
              Our Core <span className="gradient-text">Values</span>
            </h2>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {values.map((value, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="text-center p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:shadow-lg hover:border-primary/20 transition-all"
                >
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h4 className="font-bold text-gray-900 mb-2 text-sm">
                    {value.title}
                  </h4>
                  <p className="text-gray-500 text-xs leading-relaxed">
                    {value.desc}
                  </p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-24 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <span className="text-primary-light font-semibold text-sm uppercase tracking-wider">
              Trust & Recognition
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-white">
              Certifications & <span className="gradient-text">Recognition</span>
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <AnimatedSection direction="left">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="p-8 rounded-2xl glass-card hover:border-primary/30 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-primary-light flex items-center justify-center text-white shrink-0">
                    <HiShieldCheck size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      ISO 9001 Certified
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
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
                className="p-8 rounded-2xl glass-card hover:border-accent/30 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent to-accent-light flex items-center justify-center text-white shrink-0">
                    <FaHandshake size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      MSME Registered
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
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

      {/* Why Choose TESNIX */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <AnimatedSection className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                Why Choose <span className="gradient-text">TESNIX</span>?
              </h2>
            </AnimatedSection>

            <div className="space-y-4">
              {whyChoose.map((item, i) => (
                <AnimatedSection key={i} delay={i * 0.08}>
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 hover:bg-primary/5 border border-transparent hover:border-primary/20 transition-all"
                  >
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent to-accent-light flex items-center justify-center shrink-0">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700 font-medium">{item}</span>
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>

            <AnimatedSection className="text-center mt-12">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-primary to-primary-light text-white font-semibold rounded-full hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 hover:scale-105"
              >
                Get In Touch
                <HiChevronRight />
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
