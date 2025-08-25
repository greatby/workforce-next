"use client"
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IoMdMenu, IoMdClose } from "react-icons/io";

export default function WindsurfNav() {
  const [hoveredMenu, setHoveredMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expandedAccordion, setExpandedAccordion] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    {
      label: "Products",
      dropdown: {
        PRODUCTS: [
          {
            label: "EPFdesk",
            desc: "EPFdesk makes PF easy for you.",
            href: "https://epfdesk.com",
          },
          // { label: "Plugins", desc: "AI in your IDE of choice" },
          // { label: "Reviews", desc: "Code reviews with AI" },
        ],
        // "CORE FEATURES": [
        //   { label: "Cascade", desc: "Agentic chat experience" },
        //   { label: "Tab", desc: "More than just autocomplete" },
        //   {
        //     label: "Cascade on JetBrains",
        //     desc: "Cascade in your JetBrains IDE",
        //   },
        // ],
      },
    },
    {
      label: "Enterprise",
      dropdown: {
        ENTERPRISE: [
          { label: "Solutions", desc: "Custom enterprise tools" },
          { label: "Security", desc: "Secure by default" },
          { label: "Scale", desc: "Built to scale fast" },
        ],
      },
    },
    {
      label: "Company",
      dropdown: {
        COMPANY: [{ label: "About Us",href:'https://about-us-flame.vercel.app/' }, 
          { label: "Jobs",href:'https://jobs-zeta-two.vercel.app/' }
        ],
      },
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed w-full z-50 transition-colors duration-300 ${
        scrolled ? "bg-[#f9f3e9] text-black" : "bg-transparent text-white"
      }`}
      onMouseLeave={() => setHoveredMenu(null)}
    >
      <nav className="flex items-center justify-between px-6 py-4">
        <div className="text-xl font-bold">WORKFORCE</div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex gap-6">
          {navLinks.map((link) => (
            <div key={link.label} className="relative">
              <div
                onMouseEnter={() => link.dropdown && setHoveredMenu(link)}
                onMouseLeave={() => setHoveredMenu(null)}
              >
                {/* Nav Item Label */}
                <a
                  href={link.href || "#"}
                  className={`flex items-center gap-1 px-2 py-1 text-sm font-semibold uppercase ${
                    scrolled
                      ? "bg-[#f9f3e9] text-black"
                      : "bg-transparent text-white"
                  }`}
                >
                  {link.label}
                  {link.dropdown && (
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24">
                      <path
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.25 10.75L12 14.25L8.75 10.75"
                      />
                    </svg>
                  )}
                </a>

                <AnimatePresence>
                  {hoveredMenu?.label === link.label && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 top-full z-50 mt-2 rounded-md border border-gray-200 bg-[#fef9f3] p-1 shadow-xl"
                    >
                      <div className="relative inline-flex rounded-sm border border-gray-300 bg-[#fef9f3]">
                        <div className="flex divide-x divide-gray-300">
                          {Object.entries(hoveredMenu.dropdown).map(
                            ([sectionTitle, items], idx) => (
                              <div key={idx} className="px-6 py-4">
                                <p className="mb-4 text-xs font-semibold uppercase text-gray-500 tracking-wider">
                                  {sectionTitle}
                                </p>
                                <div className="flex flex-col gap-2 min-w-[180px]">
                                  {items.map((item, i) => (
                                    <a
                                      key={i}
                                      href={item.href || "#"}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="group rounded-sm transition-colors hover:bg-black/5  py-1 block"
                                    >
                                      <p className="text-sm font-semibold text-black">
                                        {item.label}
                                      </p>
                                      <p className="text-xs text-gray-500">
                                        {item.desc}
                                      </p>
                                    </a>
                                  ))}
                                </div>
                              </div>
                            )
                          )}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          ))}
        </div>

        {/* Download (Desktop only) */}
        <a
          href="/download"
          className={`hidden lg:inline-block rounded px-4 py-2 text-sm font-semibold text-[#137A6C]`}
          style={{ backgroundColor: "transparent" }}
        ></a>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-2xl"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <IoMdClose /> : <IoMdMenu />}
        </button>
      </nav>

      {/* Mobile Panel */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            className="lg:hidden overflow-hidden px-6 py-4 border-t border-gray-200"
          >
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <div key={link.label}>
                  {link.dropdown ? (
                    <div>
                      <button
                        className="w-full flex justify-between items-center text-left font-semibold uppercase text-sm"
                        onClick={() =>
                          setExpandedAccordion(
                            expandedAccordion === link.label ? null : link.label
                          )
                        }
                      >
                        {link.label}
                        <span>
                          {expandedAccordion === link.label ? "-" : "+"}
                        </span>
                      </button>
                      <AnimatePresence>
                        {expandedAccordion === link.label && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="mt-2 pl-4"
                          >
                            {Object.entries(link.dropdown).map(
                              ([title, items], idx) => (
                                <div key={idx} className="">
                                  {/* <p className="text-xs font-semibold uppercase text-gray-500 mb-2">
                                    {title}
                                  </p> */}
                                  {items.map((item, i) => (
                                    <div key={i} className="mb-1">
                                      <a
                                        href={item.href || "#"}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`${
                                          scrolled
                                            ? "bg-[#f9f3e9] text-[#00000091]"
                                            : "bg-transparent text-[#ffffff9e]"
                                        } font-medium uppercase `}
                                      >
                                        {item.label}
                                      </a>
                                      {/* <p className="text-xs text-gray-500">
                                        {item.desc}
                                      </p> */}
                                    </div>
                                  ))}
                                </div>
                              )
                            )}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <a
                      href={item.href || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${
                        scrolled
                          ? "bg-[#f9f3e9] text-black"
                          : "bg-transparent text-white"
                      } font-semibold uppercase`}
                    >
                      {link.label}
                    </a>
                  )}
                </div>
              ))}

              {/* <a
                href="/download"
                className="mt-4 inline-block w-full rounded bg-[#34E8BB] px-4 py-2 text-center text-sm font-medium text-[#137A6C]"
              >
                Download
              </a> */}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
