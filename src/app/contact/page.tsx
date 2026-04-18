"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import {
  HiLocationMarker,
  HiPhone,
  HiMail,
} from "react-icons/hi";
import { FaWhatsapp, FaLinkedin, FaInstagram } from "react-icons/fa";
import AnimatedSection from "@/components/AnimatedSection";

export default function ContactPage() {
  const [enquiryForm, setEnquiryForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [careerForm, setCareerForm] = useState({
    name: "",
    email: "",
    phone: "",
    degree: "",
    role: [] as string[],
    message: "",
  });

  const [activeTab, setActiveTab] = useState<"enquiry" | "career">("enquiry");

  const handleEnquirySubmit = (e: FormEvent) => {
    e.preventDefault();
    // Form submission logic
    alert("Thank you for your enquiry! We will get back to you soon.");
    setEnquiryForm({ name: "", email: "", phone: "", service: "", message: "" });
  };

  const handleCareerSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert("Thank you for your application! We will review and reach out.");
    setCareerForm({ name: "", email: "", phone: "", degree: "", role: [], message: "" });
  };

  const handleRoleToggle = (role: string) => {
    setCareerForm((prev) => ({
      ...prev,
      role: prev.role.includes(role)
        ? prev.role.filter((r) => r !== role)
        : [...prev.role, role],
    }));
  };

  const inputClasses =
    "w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all placeholder:text-gray-400";

  return (
    <>
      {/* Hero Banner */}
      <section className="relative pt-32 pb-20 bg-dark overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <span className="text-primary-light font-semibold text-sm uppercase tracking-wider">
              Get In Touch
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
              Contact <span className="gradient-text">Us</span>
            </h1>
            <p className="mt-6 text-gray-400 text-lg max-w-2xl mx-auto">
              Whether you have a project requirement, a training inquiry, or
              just want to know more — we would love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info + Forms */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <AnimatedSection direction="left" className="lg:col-span-2">
              <div className="sticky top-32 space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    Contact Details
                  </h2>
                  <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent rounded-full" />
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary-light flex items-center justify-center text-white shrink-0">
                      <HiLocationMarker size={22} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm">
                        Location
                      </h4>
                      <p className="text-gray-600 text-sm mt-1">
                        No. 24, Patel Street, Rathinapuri,
                        <br />
                        Coimbatore – 641027,
                        <br />
                        Tamil Nadu, India
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary-light flex items-center justify-center text-white shrink-0">
                      <HiPhone size={22} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm">
                        Phone
                      </h4>
                      <a
                        href="tel:+919344767747"
                        className="text-gray-600 hover:text-primary text-sm mt-1 block transition-colors"
                      >
                        +91 93447 67747
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary-light flex items-center justify-center text-white shrink-0">
                      <HiMail size={22} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm">
                        Email
                      </h4>
                      <a
                        href="mailto:info@tesnix.com"
                        className="text-gray-600 hover:text-primary text-sm mt-1 block transition-colors"
                      >
                        info@tesnix.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm mb-3">
                    Connect With Us
                  </h4>
                  <div className="flex gap-3">
                    <motion.a
                      whileHover={{ scale: 1.1, y: -3 }}
                      href="https://wa.me/919344767747"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-xl bg-green-50 border border-green-200 flex items-center justify-center text-green-600 hover:bg-green-100 transition-colors"
                    >
                      <FaWhatsapp size={22} />
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.1, y: -3 }}
                      href="#"
                      className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 hover:bg-blue-100 transition-colors"
                    >
                      <FaLinkedin size={22} />
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.1, y: -3 }}
                      href="#"
                      className="w-12 h-12 rounded-xl bg-pink-50 border border-pink-200 flex items-center justify-center text-pink-600 hover:bg-pink-100 transition-colors"
                    >
                      <FaInstagram size={22} />
                    </motion.a>
                  </div>
                </div>

                {/* Map Embed */}
                <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.302!2d76.9558!3d11.0168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDAxJzAwLjUiTiA3NsKwNTcnMjAuOSJF!5e0!3m2!1sen!2sin!4v1680000000000"
                    width="100%"
                    height="200"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="TESNIX Location"
                  />
                </div>
              </div>
            </AnimatedSection>

            {/* Forms */}
            <AnimatedSection direction="right" className="lg:col-span-3">
              {/* Tab Switcher */}
              <div className="flex bg-gray-100 rounded-xl p-1 mb-8">
                <button
                  onClick={() => setActiveTab("enquiry")}
                  className={`flex-1 py-3 px-4 rounded-lg text-sm font-semibold transition-all ${
                    activeTab === "enquiry"
                      ? "bg-white text-primary shadow-sm"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  Enquiry Form
                </button>
                <button
                  onClick={() => setActiveTab("career")}
                  className={`flex-1 py-3 px-4 rounded-lg text-sm font-semibold transition-all ${
                    activeTab === "career"
                      ? "bg-white text-primary shadow-sm"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  Careers — Join TESNIX
                </button>
              </div>

              {/* Enquiry Form */}
              {activeTab === "enquiry" && (
                <motion.form
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  onSubmit={handleEnquirySubmit}
                  className="space-y-6 bg-white p-8 rounded-2xl border border-gray-200 shadow-sm"
                >
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      Send Us an Enquiry
                    </h3>
                    <p className="text-gray-500 text-sm">
                      Fill in the form and we will get back to you shortly.
                    </p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={enquiryForm.name}
                        onChange={(e) =>
                          setEnquiryForm({ ...enquiryForm, name: e.target.value })
                        }
                        className={inputClasses}
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={enquiryForm.email}
                        onChange={(e) =>
                          setEnquiryForm({ ...enquiryForm, email: e.target.value })
                        }
                        className={inputClasses}
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={enquiryForm.phone}
                        onChange={(e) =>
                          setEnquiryForm({ ...enquiryForm, phone: e.target.value })
                        }
                        className={inputClasses}
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Course / Service *
                      </label>
                      <select
                        required
                        value={enquiryForm.service}
                        onChange={(e) =>
                          setEnquiryForm({
                            ...enquiryForm,
                            service: e.target.value,
                          })
                        }
                        className={inputClasses}
                      >
                        <option value="">Select an option</option>
                        <option value="pcb-design-services">
                          PCB Design Services
                        </option>
                        <option value="pcb-designing-course">
                          PCB Designing Course
                        </option>
                        <option value="internship">Internship</option>
                        <option value="institutional-training">
                          Institutional Training
                        </option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      value={enquiryForm.message}
                      onChange={(e) =>
                        setEnquiryForm({
                          ...enquiryForm,
                          message: e.target.value,
                        })
                      }
                      className={inputClasses}
                      placeholder="Tell us about your requirements..."
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full py-3.5 bg-gradient-to-r from-primary to-primary-light text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-primary/30 transition-all"
                  >
                    Submit Enquiry
                  </motion.button>
                </motion.form>
              )}

              {/* Career Form */}
              {activeTab === "career" && (
                <motion.form
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  onSubmit={handleCareerSubmit}
                  className="space-y-6 bg-white p-8 rounded-2xl border border-gray-200 shadow-sm"
                >
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      Join TESNIX
                    </h3>
                    <p className="text-gray-500 text-sm">
                      We are always looking for passionate individuals in
                      electronics.
                    </p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={careerForm.name}
                        onChange={(e) =>
                          setCareerForm({ ...careerForm, name: e.target.value })
                        }
                        className={inputClasses}
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={careerForm.email}
                        onChange={(e) =>
                          setCareerForm({ ...careerForm, email: e.target.value })
                        }
                        className={inputClasses}
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={careerForm.phone}
                        onChange={(e) =>
                          setCareerForm({ ...careerForm, phone: e.target.value })
                        }
                        className={inputClasses}
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Degree / Course *
                      </label>
                      <input
                        type="text"
                        required
                        value={careerForm.degree}
                        onChange={(e) =>
                          setCareerForm({ ...careerForm, degree: e.target.value })
                        }
                        className={inputClasses}
                        placeholder="e.g., B.E. ECE"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Role(s) *
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        "PCB Design Engineer",
                        "Electronics Trainer",
                        "Intern",
                        "Other",
                      ].map((role) => (
                        <label
                          key={role}
                          className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-all ${
                            careerForm.role.includes(role)
                              ? "border-primary/30 bg-primary/5"
                              : "border-gray-200 hover:border-primary/20"
                          }`}
                        >
                          <input
                            type="checkbox"
                            checked={careerForm.role.includes(role)}
                            onChange={() => handleRoleToggle(role)}
                            className="w-4 h-4 rounded text-primary focus:ring-primary/30"
                          />
                          <span className="text-sm text-gray-700">{role}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Message
                    </label>
                    <textarea
                      rows={3}
                      value={careerForm.message}
                      onChange={(e) =>
                        setCareerForm({
                          ...careerForm,
                          message: e.target.value,
                        })
                      }
                      className={inputClasses}
                      placeholder="Tell us about yourself and why you want to join TESNIX..."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Resume Upload
                    </label>
                    <div className="flex items-center justify-center w-full">
                      <label className="flex flex-col items-center justify-center w-full h-28 border-2 border-dashed border-gray-300 rounded-xl cursor-pointer hover:border-primary/50 hover:bg-primary/5 transition-all">
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                          <svg
                            className="w-8 h-8 mb-2 text-gray-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                            />
                          </svg>
                          <p className="text-xs text-gray-500">
                            Click to upload your resume (PDF)
                          </p>
                        </div>
                        <input type="file" className="hidden" accept=".pdf,.doc,.docx" />
                      </label>
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full py-3.5 bg-gradient-to-r from-accent to-accent-light text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-accent/30 transition-all"
                  >
                    Submit Application
                  </motion.button>
                </motion.form>
              )}
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
