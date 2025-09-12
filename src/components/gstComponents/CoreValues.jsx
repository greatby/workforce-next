"use client";
import React from "react";

const values = [
  {
    title: "Flawless Data Reconciliation & ITC Maximization",
    description:
      "We eliminate the manual reconciliation burden and safeguard every rupee of your eligible Input Tax Credit. Our team cleanses, verifies, and reconciles GST data, follows up with vendors to protect ITC eligibility, and optimizes claims for complex cases—ensuring healthier cash flow and zero reconciliation stress.",
    image: "/images/Layer_1.png", 
  },
  {
    title: "Accurate Return Filing & Audit-Proof Compliance",
    description:
      "Our experts guarantee precise, on-time GST return filing while managing e-invoicing, e-way bills, and error corrections. We prepare and defend your records for audits, ensuring zero late fees, no interest penalties, and full audit readiness.",
    image: "/images/Layer_1-1.png", 
  },
  {
    title: "Human Expertise Beyond Software",
    description:
      "We bring unmatched GST knowledge that no software can replicate. From advanced advisory on complex rules to real-time monitoring of regulatory changes and rapid troubleshooting, our seasoned operators keep your business fully compliant and strategically prepared.",
    image: "/images/Layer_1-2.png", 
  },
];

const CoreValues = () => {
  return (
    <section className="relative flex flex-col items-center text-white max-w-[90rem] mx-auto px-4 py-16">
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-bold text-center max-w-4xl mx-auto">
        Our Core Values
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12 md:gap-x-24 mt-12 md:mt-16 w-full">
        {values.map((value, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center gap-y-6 md:gap-y-8 text-center"
          >
            {/* Icon */}
            <figure className="w-20 md:w-24 h-20 md:h-24">
              <img
                src={value.image}
                alt={value.title}
                className="w-full h-full object-contain"
              />
            </figure>

            {/* Title */}
            <h3 className="text-2xl md:text-3xl font-semibold text-orange-500">
              {value.title}
            </h3>

            {/* Description */}
            <p className="text-sm md:text-base text-gray-300 -mt-2">
              {value.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoreValues;
