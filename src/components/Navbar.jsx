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
//                       <div className="flex divide-x divide-gray-300">
//                         {Object.entries(hoveredMenu.dropdown).map(
//                           ([sectionTitle, items], idx) => (
//                             <div key={idx} className="px-6 py-4">
//                               <p className="mb-4 text-xs font-semibold uppercase text-gray-500 tracking-wider">
//                                 {sectionTitle}
//                               </p>
//                               <div className="flex flex-col gap-2 min-w-[180px]">
//                                 {items
//                                   .filter(
//                                     (item) => pathname !== item.href // hide if already on that page
//                                   )
//                                   .map((item, i) =>
//                                     item.external ? (
//                                       <a
//                                         key={i}
//                                         href={item.href}
//                                         target="_blank"
//                                         rel="noopener noreferrer"
//                                         className="group rounded-sm hover:bg-black/5 py-1 block"
//                                       >
//                                         <p className="text-sm font-semibold text-black">
//                                           {item.label}
//                                         </p>
//                                         <p className="text-xs text-gray-500">
//                                           {item.desc}
//                                         </p>
//                                       </a>
//                                     ) : (
                                      
//                                       <Link
//                                         key={i}
//                                         href={item?.href}
//                                         className="group rounded-sm hover:bg-black/5 py-1 block"
//                                       >
//                                         <p className="text-sm font-semibold text-black">
//                                           {item?.label}
//                                         </p>
//                                         <p className="text-xs text-gray-500">
//                                           {item?.desc}
//                                         </p>
//                                       </Link>
//                                     )
//                                   )}
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
//                                     .filter((item) => pathname !== item.href)
//                                     .map((item, i) =>
//                                       item.external ? (
//                                         <a
//                                           key={i}
//                                           href={item.href}
//                                           target="_blank"
//                                           rel="noopener noreferrer"
//                                           className={`block py-1 ${
//                                             scrolled
//                                               ? "text-black"
//                                               : "text-white/80"
//                                           } font-medium uppercase`}
//                                         >
//                                           {item.label}
//                                         </a>
//                                       ) : (
//                                         <Link
//                                           key={i}
//                                           href={item.href}
//                                           className={`block py-1 ${
//                                             scrolled
//                                               ? "text-black"
//                                               : "text-white/80"
//                                           } font-medium uppercase`}
//                                           onClick={() => setMobileOpen(false)}
//                                         >
//                                           {item.label}
//                                         </Link>
//                                       )
//                                     )}
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


"use client";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function WindsurfNav() {
  const [hoveredMenu, setHoveredMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expandedAccordion, setExpandedAccordion] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    {
      label: "Products",
      dropdown: {
        PRODUCTS: [
          {
            label: "EPFdesk",
            desc: "EPFdesk makes PF easy for you.",
            href: "https://epfdesk.com",
            external: true,
          },
        ],
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
        COMPANY: [
          { label: "About Us", href: "/aboutUs" },
          { label: "Jobs", href: "/jobs" },
        ],
      },
    },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Function to safely render menu items
  const renderMenuItem = (item, i) => {
    if (item.external && item.href) {
      return (
        <a
          key={i}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group rounded-sm hover:bg-black/5 py-1 block"
        >
          <p className="text-sm font-semibold text-black">{item.label}</p>
          <p className="text-xs text-gray-500">{item.desc}</p>
        </a>
      );
    } else if (item.href) {
      return (
        <Link
          key={i}
          href={item.href}
          className="group rounded-sm hover:bg-black/5 py-1 block"
          onClick={() => setMobileOpen(false)}
        >
          <p className="text-sm font-semibold text-black">{item.label}</p>
          <p className="text-xs text-gray-500">{item.desc}</p>
        </Link>
      );
    } else {
      return (
        <span
          key={i}
          className="group rounded-sm hover:bg-black/5 py-1 block cursor-default"
        >
          <p className="text-sm font-semibold text-black">{item.label}</p>
          <p className="text-xs text-gray-500">{item.desc}</p>
        </span>
      );
    }
  };

  return (
    <div
      className={`fixed w-full z-50 transition-colors duration-300 ${
        scrolled ? "bg-[#f9f3e9] text-black" : "bg-transparent text-white"
      }`}
      onMouseLeave={() => setHoveredMenu(null)}
    >
      <nav className="flex items-center justify-between px-6 py-4">
        {/* Logo routes to home */}
        <Link href="/" className="text-xl font-bold">
          WORKFORCE
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex gap-6">
          {navLinks.map((link) => (
            <div key={link.label} className="relative">
              <div
                onMouseEnter={() => link.dropdown && setHoveredMenu(link)}
                onMouseLeave={() => setHoveredMenu(null)}
              >
                <span
                  className={`flex items-center gap-1 px-2 py-1 text-sm font-semibold uppercase cursor-pointer ${
                    scrolled
                      ? "bg-[#f9f3e9] text-black"
                      : "bg-transparent text-white"
                  }`}
                >
                  {link.label}
                  {link.dropdown && (
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.25 10.75L12 14.25L8.75 10.75"
                      />
                    </svg>
                  )}
                </span>

                {/* Dropdown */}
                <AnimatePresence>
                  {hoveredMenu?.label === link.label && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 top-full z-50 mt-2 rounded-md border border-gray-200 bg-[#fef9f3] p-1 shadow-xl"
                    >
                      <div className="flex rounded-md border border-gray-300">
                        {Object.entries(hoveredMenu.dropdown).map(
                          ([sectionTitle, items], idx) => (
                            <div key={idx} className="px-6 py-4">
                              <p className="mb-4 text-xs font-semibold uppercase text-gray-500 tracking-wider">
                                {sectionTitle}
                              </p>
                              <div className="flex flex-col gap-2 min-w-[180px]">
                                {items
                                  .filter(
                                    (item) => pathname !== item.href
                                  )
                                  .map((item, i) => renderMenuItem(item, i))}
                              </div>
                            </div>
                          )
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          ))}
        </div>

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

      {/* Mobile Menu */}
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
                              ([, items], idx) => (
                                <div key={idx}>
                                  {items
                                    .filter(
                                      (item) => pathname !== item.href
                                    )
                                    .map((item, i) => renderMenuItem(item, i))}
                                </div>
                              )
                            )}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <span className="font-semibold uppercase">
                      {link.label}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
