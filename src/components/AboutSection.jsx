// "use client"
// import { motion } from "framer-motion";
// import {
//   HiMiniCpuChip,
//   HiMiniUserGroup,
//   HiMiniRocketLaunch,
// } from "react-icons/hi2";

// const layers = [
//   {
//     years: "Year 1–3",
//     title: "Layer 1 – Intelligent HR Automation",
//     icon: <HiMiniCpuChip className="w-8 h-8 text-indigo-600" />,
//     description:
//       "We will solidify our position as India’s leading provider of intelligent HR software. With automation and analytics at the core, we’ll offer powerful, product-led human resource management systems.",
//   },
//   {
//     years: "Year 4–7",
//     title: "Layer 2 – Hybrid Human-AI Orchestration",
//     icon: <HiMiniUserGroup className="w-8 h-8 text-indigo-600" />,
//     description:
//       "We’ll launch a hybrid orchestration platform where humans and intelligent agents collaborate, automate complex workflows, and begin shaping the future of HR.",
//   },
//   {
//     years: "Year 8–10",
//     title: "Layer 3 – Unified Agentic AI Platform",
//     icon: <HiMiniRocketLaunch className="w-8 h-8 text-indigo-600" />,
//     description:
//       "By 2035, we’ll be a global leader in AI orchestration — deploying autonomous agents that adapt, learn, and manage entire business functions, starting with HR.",
//   },
// ];

// export default function VisionMissionSection() {
//   return (
//     <section className="relative z-10 bg-[#f8fafc] py-20 px-4 text-gray-800">
     
//       <div className="max-w-6xl mx-auto space-y-12 text-center">
//         {/* Heading */}
//         <div className="max-w-2xl mx-auto space-y-3">
//           <h2 className="text-3xl sm:text-4xl font-bold">
//             Our 10-Year Vision & Mission: Orchestrating the Agentic Era
//           </h2>
//           <p className="text-lg text-gray-600">
//             A bold roadmap to a future powered by intelligent, autonomous AI.
//           </p>
//         </div>

//         {/* Layered Cards */}
//         <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
//           {layers.map((layer, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: i * 0.2, duration: 0.5 }}
//               viewport={{ once: true }}
//               className="bg-white shadow-lg rounded-xl p-6 text-left flex flex-col gap-4"
//             >
//               <div className="flex items-center gap-3">
//                 {layer.icon}
//                 <p className="text-sm font-medium text-indigo-600">
//                   {layer.years}
//                 </p>
//               </div>
//               <h3 className="text-xl font-semibold text-gray-900">
//                 {layer.title}
//               </h3>
//               <p className="text-sm leading-relaxed text-gray-700">
//                 {layer.description}
//               </p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";
import { motion } from "framer-motion";
import {
  HiMiniScale,
  HiMiniCog,
  HiMiniUserGroup,
  HiMiniGlobeAlt,
  HiMiniBolt,
  HiMiniServerStack,
  HiMiniBuildingOffice2,
  HiMiniChartBarSquare,
  HiMiniBanknotes,
  HiMiniShieldCheck,
} from "react-icons/hi2";

const layers = [
  {
    years: "1️⃣",
    title: "The Invisible Layer of Civilization",
    icon: <HiMiniScale className="w-8 h-8 text-indigo-600" />,
    description:
      "Every nation runs on law — but law alone doesn’t work without execution. Workforce exists to rebuild this invisible operating layer of governance, turning ambiguity into predictable trust.",
  },
  {
    years: "2️⃣",
    title: "Regulation Is Not the Problem — Execution Is",
    icon: <HiMiniCog className="w-8 h-8 text-indigo-600" />,
    description:
      "India’s 100+ Acts and 5,000+ departments aren’t the bottleneck — inefficient execution is. Workforce abstracts compliance into systems that convert law into reliable, repeatable code.",
  },
  {
    years: "3️⃣",
    title: "From Consulting to Control Systems",
    icon: <HiMiniUserGroup className="w-8 h-8 text-indigo-600" />,
    description:
      "For decades, compliance meant intermediaries. Workforce changes that by engineering legality itself — codifying Acts, rules, and filings into executable workflows that run like software.",
  },
  {
    years: "4️⃣",
    title: "The Regulatory Graph",
    icon: <HiMiniGlobeAlt className="w-8 h-8 text-indigo-600" />,
    description:
      "We’re building a living map of India’s regulatory framework — every Act, license, and workflow interconnected, traceable, and automated. A digital reflection of governance itself.",
  },
  {
    years: "5️⃣",
    title: "Trust, Automated",
    icon: <HiMiniBolt className="w-8 h-8 text-indigo-600" />,
    description:
      "Trust is the new infrastructure. Workforce timestamps every registration, renewal, and submission — creating a transparent, auditable, and automated compliance environment.",
  },
  {
    years: "6️⃣",
    title: "The First Layer of Sovereign Automation",
    icon: <HiMiniServerStack className="w-8 h-8 text-indigo-600" />,
    description:
      "If electricity powers energy and the internet powers communication, Workforce powers governance — synchronizing State and enterprise through executable, measurable systems.",
  },
  {
    years: "7️⃣",
    title: "Building for Scale, Not Complexity",
    icon: <HiMiniBuildingOffice2 className="w-8 h-8 text-indigo-600" />,
    description:
      "We’ve unified 36 states and union territories into one executable framework. What AWS did for compute, Workforce does for compliance — scaling legality across industries and geographies.",
  },
  {
    years: "8️⃣",
    title: "Why This Matters to Investors",
    icon: <HiMiniChartBarSquare className="w-8 h-8 text-indigo-600" />,
    description:
      "The $2T global regulatory economy lacks a unified platform. Workforce introduces Regulation-as-Execution — digitizing governance where law, code, and capital converge.",
  },
  {
    years: "9️⃣",
    title: "A Nation That Runs on Law, Effortlessly",
    icon: <HiMiniBanknotes className="w-8 h-8 text-indigo-600" />,
    description:
      "When compliance becomes effortless, capital and confidence compound. Workforce’s mission is a frictionless economy — where legality runs cleanly beneath every transaction.",
  },
  {
    years: "🔟",
    title: "Our Promise",
    icon: <HiMiniShieldCheck className="w-8 h-8 text-indigo-600" />,
    description:
      "We don’t optimize for loopholes — we build for legality at scale. Workforce isn’t software; it’s trust, encoded as infrastructure for enduring nations and sustainable capitalism.",
  },
];

export default function VisionMissionSection() {
  return (
    <section className="relative z-10 bg-[#f8fafc] py-20 px-4 text-gray-800">
      <div className="max-w-6xl mx-auto space-y-12 text-center">
        {/* Heading */}
        <div className="max-w-3xl mx-auto space-y-3">
          <h2 className="text-3xl sm:text-4xl font-bold">
            The 10 Layers of the Workforce Vision
          </h2>
          <p className="text-lg text-gray-600">
            From invisible systems to sovereign automation — our manifesto as a roadmap for national-scale execution.
          </p>
        </div>

        {/* Layered Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {layers.map((layer, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white shadow-lg rounded-xl p-6 text-left flex flex-col gap-4 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center gap-3">
                {layer.icon}
                {/* <p className="text-sm font-medium text-indigo-600">
                  {layer.years}
                </p> */}
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                {layer.title}
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                {layer.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
