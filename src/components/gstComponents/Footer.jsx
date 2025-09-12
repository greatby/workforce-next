"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

const Footer = () => {
  const [hovered, setHovered] = useState(false);
  return (
    <footer className="bg-wine relative text-white overflow-hidden ">
   
      {/* <div className="relative mx-auto pt-16 py-16 sm:py-0 flex flex-col md:flex-row md:items-start gap-12">
       
        <div className="flex-1 order-2 md:order-1 p-[80px]">
          <h3 className="text-2xl md:text-4xl text-orange-500">
            Transform Your GST Compliance Today
          </h3>
          <p className="mt-4  max-w-2xl text-orange-500">
            Ready to stop fighting with your GST software and start experiencing
            flawless compliance with the ultimate operators?
          </p>
          <div className="flex gap-4 mt-6">
            <Link
              href="/get-started"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black rounded-2xl font-medium hover:bg-[#c7e410] transition"
            >
              Get Started <FiArrowRight size={16} />
            </Link>
            <motion.a
              href="tel:9980511980"
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
              <span
                className={`relative flex items-center justify-between w-full gap-2 text-[${
                  hovered ? "#000" : "#c7e410"
                }] font-medium`}
              >
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
          </div>
        </div>

    
        <div className="relative w-full md:w-1/2 order-1 md:order-2">
          <img
            src="/images/footer-bg.png" 
            alt="Footer visual"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div> */}

      {/* Middle Section (Links + Contact) */}
      <div className="max-w-[90rem] mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-orange-500">
        {/* Column 1 */}
        <div>
          <h4 className="uppercase text-purple text-sm">Solutions</h4>
          <ul className="mt-4 space-y-2 text-sm text-gray-300">
            <li>
              <Link href="/services/ai-data-extraction">
                AI Data Extraction
              </Link>
            </li>
            <li>
              <Link href="/services/ai-assisted-data-processing">
                AI Assisted Data Processing
              </Link>
            </li>
            <li>
              <Link href="/services/ai-ml-optimization">
                AI & ML Optimization
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h4 className="uppercase text-purple text-sm">Resources</h4>
          <ul className="mt-4 space-y-2 text-sm text-gray-300">
            <li>
              <Link href="/cases">Case Studies</Link>
            </li>
            <li>
              <Link href="/startup-support">Business Startup Support</Link>
            </li>
            <li>
              <Link href="/blog">TechSpeed Blog</Link>
            </li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h4 className="uppercase text-purple text-sm">Get In Touch</h4>
          <ul className="mt-4 space-y-2 text-sm text-gray-300">
            <li>
              Headquarters - USA <br />
              <a
                href="https://goo.gl/maps/example"
                target="_blank"
                rel="noreferrer"
              >
                1300 SW 6th Ave, Portland OR 97201
              </a>
            </li>
            <li>
              <a href="tel:503-927-0027">503-927-0027</a>
            </li>
            <li>
              <a href="mailto:info@techspeed.com">info@techspeed.com</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-[90rem] mx-auto px-6 py-8 border-t border-orange-500 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
        <p>© 2023 | All Rights Reserved</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <Link href="/sample-page">Login</Link>
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/disclaimer">Disclaimer</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
