// "use client";
// import { useState, useEffect } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import { IoMdMenu, IoMdClose } from "react-icons/io";
// import Link from "next/link";
// import { usePathname } from "next/navigation";

// export default function WindsurfNav() {
//   const [hoveredMenu, setHoveredMenu] = useState(null);
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [expandedAccordion, setExpandedAccordion] = useState(null);
//   const [scrolled, setScrolled] = useState(false);
//   const pathname = usePathname();

//   const navLinks = [
//     {
//       label: "Products",
//       dropdown: {
//         PRODUCTS: [
//           {
//             label: "EPFdesk",
//             desc: "EPFdesk makes PF easy for you.",
//             href: "https://epfdesk.com",
//             external: true,
//           },
//            {
//             label: "ContentOne",
//             href: "/contentOne",
//           },
//            {
//             label: "ContentTwo",
//             href: "/contentTwo",
//           },
//            {
//             label: "ContentThree",
//             href: "/contentThree",
//           },
//            {
//             label: "ContentFour",
//             href: "/contentFour",
//           },
//         ],
//       },
//     },
//     {
//       label: "Enterprise",
//       dropdown: {
//         ENTERPRISE: [
//           { label: "Solutions", desc: "Custom enterprise tools" },
//           { label: "Security", desc: "Secure by default" },
//           { label: "Scale", desc: "Built to scale fast" },
//         ],
//       },
//     },
//     {
//       label: "Company",
//       dropdown: {
//         COMPANY: [
//           { label: "About Us", href: "/aboutUs" },
//           { label: "Jobs", href: "/jobs" },
//         ],
//       },
//     },
//   ];

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 10);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Function to safely render menu items
//   const renderMenuItem = (item, i) => {
//     if (item.external && item.href) {
//       return (
//         <a
//           key={i}
//           href={item.href}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="group rounded-sm hover:bg-black/5 py-1 block"
//         >
//           <p className="text-sm font-semibold text-black">{item.label}</p>
//           <p className="text-xs text-gray-500">{item.desc}</p>
//         </a>
//       );
//     } else if (item.href) {
//       return (
//         <Link
//           key={i}
//           href={item.href}
//           className="group rounded-sm hover:bg-black/5 py-1 block"
//           onClick={() => setMobileOpen(false)}
//         >
//           <p className="text-sm font-semibold text-black">{item.label}</p>
//           <p className="text-xs text-gray-500">{item.desc}</p>
//         </Link>
//       );
//     } else {
//       return (
//         <span
//           key={i}
//           className="group rounded-sm hover:bg-black/5 py-1 block cursor-default"
//         >
//           <p className="text-sm font-semibold text-black">{item.label}</p>
//           <p className="text-xs text-gray-500">{item.desc}</p>
//         </span>
//       );
//     }
//   };

//   return (
//     <div
//       className={`fixed w-full z-50 transition-colors duration-300 ${
//         scrolled ? "bg-[#f9f3e9] text-black" : "bg-transparent text-white"
//       }`}
//       onMouseLeave={() => setHoveredMenu(null)}
//     >
//       <nav className="flex items-center justify-between px-6 py-4">
//         {/* Logo routes to home */}
//         <Link href="/" className="text-xl font-bold">
//           WORKFORCE
//         </Link>

//         {/* Desktop Nav */}
//         <div className="hidden lg:flex gap-6">
//           {navLinks.map((link) => (
//             <div key={link.label} className="relative">
//               <div
//                 onMouseEnter={() => link.dropdown && setHoveredMenu(link)}
//                 onMouseLeave={() => setHoveredMenu(null)}
//               >
//                 <span
//                   className={`flex items-center gap-1 px-2 py-1 text-sm font-semibold uppercase cursor-pointer ${
//                     scrolled
//                       ? "bg-[#f9f3e9] text-black"
//                       : "bg-transparent text-white"
//                   }`}
//                 >
//                   {link.label}
//                   {link.dropdown && (
//                     <svg
//                       className="h-4 w-4"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                       strokeWidth="1.5"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         d="M15.25 10.75L12 14.25L8.75 10.75"
//                       />
//                     </svg>
//                   )}
//                 </span>

//                 {/* Dropdown */}
//                 <AnimatePresence>
//                   {hoveredMenu?.label === link.label && (
//                     <motion.div
//                       initial={{ opacity: 0, y: -10 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       exit={{ opacity: 0, y: -10 }}
//                       transition={{ duration: 0.2 }}
//                       className="absolute left-0 top-full z-50 mt-2 rounded-md border border-gray-200 bg-[#fef9f3] p-1 shadow-xl"
//                     >
//                       <div className="flex rounded-md border border-gray-300">
//                         {Object.entries(hoveredMenu.dropdown).map(
//                           ([sectionTitle, items], idx) => (
//                             <div key={idx} className="px-6 py-4">
//                               <p className="mb-4 text-xs font-semibold uppercase text-gray-500 tracking-wider">
//                                 {sectionTitle}
//                               </p>
//                               <div className="flex flex-col gap-2 min-w-[180px]">
//                                 {items
//                                   .filter(
//                                     (item) => pathname !== item.href
//                                   )
//                                   .map((item, i) => renderMenuItem(item, i))}
//                               </div>
//                             </div>
//                           )
//                         )}
//                       </div>
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </div>
//             </div>
//           ))}
//         </div>

//         <a
//           href="/download"
//           className={`hidden lg:inline-block rounded px-4 py-2 text-sm font-semibold text-[#137A6C]`}
//           style={{ backgroundColor: "transparent" }}
//         ></a>

//         {/* Mobile Toggle */}
//         <button
//           className="lg:hidden text-2xl"
//           onClick={() => setMobileOpen(!mobileOpen)}
//         >
//           {mobileOpen ? <IoMdClose /> : <IoMdMenu />}
//         </button>
//       </nav>

//       {/* Mobile Menu */}
//       <AnimatePresence>
//         {mobileOpen && (
//           <motion.div
//             initial={{ height: 0 }}
//             animate={{ height: "auto" }}
//             exit={{ height: 0 }}
//             className="lg:hidden overflow-hidden px-6 py-4 border-t border-gray-200"
//           >
//             <div className="flex flex-col space-y-4">
//               {navLinks.map((link) => (
//                 <div key={link.label}>
//                   {link.dropdown ? (
//                     <div>
//                       <button
//                         className="w-full flex justify-between items-center text-left font-semibold uppercase text-sm"
//                         onClick={() =>
//                           setExpandedAccordion(
//                             expandedAccordion === link.label ? null : link.label
//                           )
//                         }
//                       >
//                         {link.label}
//                         <span>
//                           {expandedAccordion === link.label ? "-" : "+"}
//                         </span>
//                       </button>
//                       <AnimatePresence>
//                         {expandedAccordion === link.label && (
//                           <motion.div
//                             initial={{ opacity: 0, height: 0 }}
//                             animate={{ opacity: 1, height: "auto" }}
//                             exit={{ opacity: 0, height: 0 }}
//                             className="mt-2 pl-4"
//                           >
//                             {Object.entries(link.dropdown).map(
//                               ([, items], idx) => (
//                                 <div key={idx}>
//                                   {items
//                                     .filter(
//                                       (item) => pathname !== item.href
//                                     )
//                                     .map((item, i) => renderMenuItem(item, i))}
//                                 </div>
//                               )
//                             )}
//                           </motion.div>
//                         )}
//                       </AnimatePresence>
//                     </div>
//                   ) : (
//                     <span className="font-semibold uppercase">
//                       {link.label}
//                     </span>
//                   )}
//                 </div>
//               ))}
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }

// "use client";

// import React, { useEffect, useState } from "react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { AnimatePresence, motion } from "framer-motion";
// import { IoMdMenu, IoMdClose } from "react-icons/io";

// export default function WindsurfNav() {
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const pathname = usePathname();

//   const navLinks = [
//     { label: "About Us", href: "/aboutUs" },
//     { label: "Jobs", href: "/jobs" },
//   ];

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 10);
//     window.addEventListener("scroll", handleScroll, { passive: true });
//     handleScroll();
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <div
//       className={`fixed w-full z-50 transition-colors duration-300 ${
//         scrolled ? "bg-[#f9f3e9] text-black" : "bg-transparent text-white"
//       }`}
//     >
//       <nav className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
//         {/* Logo (left) */}
//         <Link href="/" className="text-lg md:text-xl font-bold">
//           WORKFORCE
//         </Link>

//         {/* Desktop Links (right) */}
//         <div className="hidden lg:flex items-center gap-6">
//           {navLinks.map((link) => {
//             const isActive = pathname === link.href;
//             return (
//               <Link
//                 key={link.href}
//                 href={link.href}
//                 className={`text-sm font-semibold uppercase px-2 py-1 rounded-sm transition-colors ${
//                   isActive
//                     ? scrolled
//                       ? "text-[#137A6C]"
//                       : "underline"
//                     : scrolled
//                     ? "text-black hover:text-[#137A6C]"
//                     : "text-white hover:text-gray-200"
//                 }`}
//               >
//                 {link.label}
//               </Link>
//             );
//           })}
//         </div>

//         {/* Mobile Toggle */}
//         <button
//           className="lg:hidden text-2xl"
//           aria-label={mobileOpen ? "Close menu" : "Open menu"}
//           onClick={() => setMobileOpen((s) => !s)}
//         >
//           {mobileOpen ? <IoMdClose /> : <IoMdMenu />}
//         </button>
//       </nav>

//       {/* Mobile Menu */}
//       <AnimatePresence>
//         {mobileOpen && (
//           <motion.div
//             initial={{ height: 0, opacity: 0 }}
//             animate={{ height: "auto", opacity: 1 }}
//             exit={{ height: 0, opacity: 0 }}
//             transition={{ duration: 0.18 }}
//             className="lg:hidden overflow-hidden border-t border-gray-200 bg-white"
//           >
//             <div className="px-6 py-4 max-w-7xl mx-auto">
//               <div className="flex flex-col gap-3">
//                 {navLinks.map((link) => {
//                   const isActive = pathname === link.href;
//                   return (
//                     <Link
//                       key={link.href}
//                       href={link.href}
//                       onClick={() => setMobileOpen(false)}
//                       className={`block w-full text-left px-3 py-2 rounded-sm font-semibold transition-colors ${
//                         isActive ? "text-[#137A6C]" : "text-black hover:text-[#137A6C]"
//                       }`}
//                     >
//                       {link.label}
//                     </Link>
//                   );
//                 })}
//               </div>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }

"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";

export default function WindsurfNav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { label: "About Us", href: "/aboutUs" },
    { label: "Jobs", href: "/jobs" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed w-full z-50 transition-colors duration-300 ${
        scrolled ? "bg-[#f9f3e9] text-black" : "bg-transparent text-white"
      }`}
    >
      <nav className="flex font-navbar items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        {/* Logo (left) */}
        <Link href="/" className="text-lg md:text-xl font-bold">
          WORKFORCE
        </Link>

        {/* Desktop Links + Icons (right) */}
     
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-semibold uppercase px-2 py-1 rounded-sm transition-colors ${
                  isActive
                    ? scrolled
                      ? "text-[#137A6C]"
                      : "underline text-white"
                    : scrolled
                    ? "text-black hover:text-[#137A6C]"
                    : "text-white hover:text-gray-200"
                }`}
              >
                {link.label}
              </Link>
            );
          })}

          {/* Contact Icons */}
          <div className="flex items-center gap-2 ml-4">
            {/* WhatsApp */}
            <a
              href="https://wa.me/919980511980"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex h-10 w-10 items-center justify-center rounded-full border transition-colors ${
                scrolled
                  ? "border-black bg-white text-black hover:bg-gray-100 hover:border-black hover:text-black"
                  : "border-black hover:border-white bg-white text-black hover:bg-transparent hover:text-white"
              }`}
            >
              <FaWhatsapp className="h-4 w-4" />
            </a>

            {/* Email */}
            <a
              href="mailto:hello@epfdesk.com"
              className={`flex h-10 w-10 items-center justify-center rounded-full border transition-colors ${
                scrolled
                  ? "border-black bg-white text-black hover:bg-gray-100 hover:border-black hover:text-black"
                  : "border-black hover:border-white bg-white text-black hover:bg-transparent hover:text-white"
              }`}
            >
              <MdEmail className="h-4 w-4" />
            </a>

            {/* Phone */}
            <a
              href="tel:+919980511980"
              className={`flex h-10 w-10 items-center justify-center rounded-full border transition-colors ${
                scrolled
                  ? "border-black bg-white text-black hover:bg-gray-100 hover:border-black hover:text-black"
                  : "border-black hover:border-white bg-white text-black hover:bg-transparent hover:text-white"
              }`}
            >
              <FiPhone className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-2xl"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileOpen((s) => !s)}
        >
          {mobileOpen ? <IoMdClose /> : <IoMdMenu />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="lg:hidden overflow-hidden border-t border-gray-200 bg-white"
          >
            <div className="px-6 py-4 max-w-7xl mx-auto flex flex-col gap-4">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`block w-full text-left px-3 py-2 rounded-sm font-semibold transition-colors ${
                      isActive
                        ? "text-[#137A6C]"
                        : "text-black hover:text-[#137A6C]"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}

              {/* Contact Icons */}
              <div className="flex gap-2 mt-2">
                <a
                  href="https://wa.me/919980511980"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-black text-black hover:bg-black hover:text-white transition-colors"
                >
                  <FaWhatsapp className="h-4 w-4" />
                </a>
                <a
                  href="mailto:hello@epfdesk.com"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-black text-black hover:bg-black hover:text-white transition-colors"
                >
                  <MdEmail className="h-4 w-4" />
                </a>
                <a
                  href="tel:+919980511980"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-black text-black hover:bg-black hover:text-white transition-colors"
                >
                  <FiPhone className="h-4 w-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
