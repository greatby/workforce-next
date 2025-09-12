"use client";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX, FiChevronDown, FiChevronUp, FiArrowRight } from "react-icons/fi";

const navItems = [
  {
    name: "Solutions",
    type: "mega",
    columns: [
      {
        title: "AI DRIVEN PROCESSING",
        image: "/images/home-col-1.png",
        links: [
          { label: "AI Data Extraction", href: "/services/ai-data-extraction" },
          { label: "AI Assisted Data Processing", href: "/services/ai-assisted-data-processing" },
          { label: "AI & ML Optimization", href: "/services/ai-ml-optimization" },
        ],
      },
      {
        title: "DATA SERVICES",
        image: "/images/home-col-2.png",
        links: [
          { label: "Data Entry", href: "/services/data-entry" },
          { label: "Data Processing", href: "/services/data-processing" },
          { label: "Data Mining", href: "/services/data-mining" },
        ],
      },
      {
        title: "CUSTOMER EXPERIENCES",
        image: "/images/home-col-3.png",
        links: [
          { label: "Back Office Support", href: "/services/back-office-support" },
          { label: "Service Desk & Chat", href: "/services/service-desk-chat" },
          { label: "Content Moderation", href: "/services/content-moderation" },
        ],
      },
    ],
  },
  {
    name: "Resources",
    type: "list",
    links: [
      { label: "Case Studies", href: "/cases" },
      { label: "Business Startup Support", href: "/startup-support" },
      { label: "Blog", href: "/blog" },
    ],
  },
  {
    name: "About",
    type: "list",
    links: [
      { label: "About", href: "/about" },
      { label: "Pricing", href: "/pricing" },
      { label: "Careers", href: "/careers" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  { name: "Success Stories", type: "link", href: "/success-stories" },
];

export default function Navbar() {
  const [open, setOpen] = useState(null);
  const [hovered, setHovered] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openAccordion, setOpenAccordion] = useState(null);

  return (
    <header className="w-full bg-[#fcfcf6] shadow-sm fixed top-0 z-20">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-12 py-4 relative">
        {/* Left: Logo + Nav */}
        <div className="flex items-center gap-12">
          {/* <Link href="/" className="flex items-center">
            <img src="images/UNIGST.png" alt="Techspeed Logo" className="w-[100px] h-auto" />
          </Link> */}
          <Link href="/">
          <div className="text-xl font-bold">WORKFORCE</div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10 text-sm font-medium text-gray-900 relative">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative group"
                onMouseEnter={() => setOpen(item.name)}
                onMouseLeave={() => setOpen(null)}
              >
                <Link href={item.href || "#"} className="relative">
                  {item.name}
                  <motion.span className="absolute -bottom-1 left-0 h-[2px] w-full bg-[#460021] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                </Link>

                {/* Dropdown */}
                <AnimatePresence>
                  {open === item.name && item.type !== "link" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 bg-white rounded-2xl shadow-lg z-50"
                    >
                      {item.type === "mega" ? (
                        <div className="grid grid-cols-3 gap-8 p-8 w-[60rem]">
                          {item.columns.map((col) => (
                            <div key={col.title} className="border-r last:border-none pr-6">
                              <div className="text-xs font-semibold uppercase mb-4">{col.title}</div>
                              <img src={col.image} alt={col.title} className="h-24 object-contain mb-4" />
                              <ul className="space-y-2">
                                {col.links.map((link) => (
                                  <li key={link.href}>
                                    <Link href={link.href} className="text-sm hover:text-lime-600 transition">
                                      {link.label}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <ul className="p-6 w-64 space-y-3">
                          {item.links.map((link) => (
                            <li key={link.href}>
                              <Link href={link.href} className="text-sm hover:text-lime-600 transition">
                                {link.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>
        </div>

        {/* Right: CTA */}
        <div className="flex items-center gap-6">
          {/* Call link with hover animation */}
          <motion.a
            href="tel:5032910027"
            onHoverStart={() => setHovered(true)}
            onHoverEnd={() => setHovered(false)}
            className="relative hidden md:flex items-center rounded-full overflow-hidden px-4 py-2 cursor-pointer"
          >
            <motion.span
              className="absolute inset-0 bg-[#c7e410]"
              initial={{ x: "100%" }}
              animate={{ x: hovered ? "0%" : "100%" }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            />
            <span className="relative flex items-center justify-between w-full gap-2 text-black font-medium">
              <motion.span
                key={hovered ? "number" : "text"}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                {hovered ? "+919980511980" : "Give us a Call"}
              </motion.span>
              <motion.span
                className="flex items-center justify-center w-6 h-6 rounded-full text-white"
                animate={{ backgroundColor: hovered ? "#460021" : "#c7e410" }}
                transition={{ duration: 0.3 }}
              >
                <FiArrowRight size={16} />
              </motion.span>
            </span>
          </motion.a>

          {/* Get Started */}
          <Link
            href="/get-started"
            className="hidden md:flex items-center gap-2 px-5 py-2 rounded-lg bg-[#460021] text-white text-sm font-semibold hover:bg-[#5d002d] transition"
          >
            <span>Get Started</span>
            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#c7e410] text-black">
              <FiArrowRight />
            </span>
          </Link>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-2xl" onClick={() => setMobileOpen(true)}>
            <FiMenu />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed inset-0 bg-[#4a004a] text-white z-50 flex flex-col"
          >
            {/* Top Row */}
            <div className="flex justify-between items-center px-6 py-4 bg-purple-400">
              <img src="images/UNIGST.png" alt="Techspeed Logo" className="h-auto w-[100px]" />
              <button
                className="text-2xl p-2 rounded-full bg-[#4a004a] text-lime-300"
                onClick={() => setMobileOpen(false)}
              >
                <FiX />
              </button>
            </div>

            {/* Buttons */}
            <div className="flex gap-4 px-6 py-6">
              <Link href="/get-started" className="bg-white text-[#4a004a] px-6 py-2 rounded-xl font-medium flex items-center gap-2">
                Get Started <FiArrowRight />
              </Link>
              <a href="tel:5032910027" className="bg-lime-400 text-[#4a004a] px-6 py-2 rounded-xl font-medium flex items-center gap-2">
                Call Us <FiArrowRight />
              </a>
            </div>

            {/* Accordion Nav */}
            <div className="flex-1 overflow-y-auto px-6 space-y-6">
              {navItems.map((item) =>
                item.type === "mega" || item.type === "list" ? (
                  <div key={item.name} className="border-t border-orange-500 pt-4">
                    <button
                      className="flex items-center justify-between w-full text-lg font-medium"
                      onClick={() => setOpenAccordion(openAccordion === item.name ? null : item.name)}
                    >
                      {item.name}
                      {openAccordion === item.name ? <FiChevronUp /> : <FiChevronDown />}
                    </button>
                    <AnimatePresence>
                      {openAccordion === item.name && (
                        <motion.ul
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mt-2 pl-4 space-y-2"
                        >
                          {(item.type === "mega" ? item.columns.flatMap((c) => c.links) : item.links).map((link) => (
                            <li key={link.href}>
                              <Link href={link.href} className="block text-base text-white">
                                {link.label}
                              </Link>
                            </li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <div key={item.name} className="border-t border-orange-500 pt-4">
                    <Link href={item.href} className="text-lg font-medium block">
                      {item.name}
                    </Link>
                  </div>
                )
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

