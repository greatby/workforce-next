"use client";
import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

const faqs = [
  {
    question: "Are you a consultancy or a platform?",
    answer:
      "We’re an execution engine with field ops.",
  },
  {
    question: "Do you cover my state/industry?",
    answer:
      "Yes—36 states & UTs, 30+ industries.",
  },
  {
    question: "Can you handle inspections & physical submissions?",
    answer:
      "Yes—verified liaison network.",
  },
  {
    question: "How do renewals work?",
    answer:
      "Auto-tracked, pre-filed, fee-paid with approvals logged.",
  },
  {
    question: "How is this different from a CA?",
    answer:
      "CAs handle finance & audit; Workforce runs regulatory, licensing, labour, safety, environment.",
  },
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#013B35] text-white py-20 md:py-32">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-medium text-center mb-16">
          Frequently Asked Questions
        </h2>

        <div className="divide-y divide-gray-700">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-700">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center py-6 text-left text-lg font-medium hover:underline transition-all"
              >
                {faq.question}
                {openIndex === index ? (
                  <FiMinus className="text-xl" />
                ) : (
                  <FiPlus className="text-xl" />
                )}
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-gray-300 pb-6">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

