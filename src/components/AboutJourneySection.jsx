import { motion } from "framer-motion";
import { HiClipboardCheck, HiLightningBolt, HiChip } from "react-icons/hi";

const sections = [
  {
    title: "Building on a Legacy of Excellence",
    description:
      "Our story began with a deep commitment to human resources. We understood that a strong foundation in employee management, compliance, and payroll was crucial for any successful enterprise. We meticulously honed our expertise, providing invaluable, reliable support to countless businesses across India, becoming a trusted partner in their growth.",
    icon: HiClipboardCheck,
  },
  {
    title: "Innovating Beyond the Manual",
    description:
      "We quickly recognized the limitations of traditional HR processes. That's why we began to build. We developed sophisticated software and applications designed to automate routine tasks, provide actionable insights, and free HR professionals to focus on strategic initiatives rather than administrative burdens. This was our first significant step towards a technology-driven future.",
    icon: HiLightningBolt,
  },
  {
    title: "Pioneering the Agentic Era",
    description:
      "Today, we're embarking on our most audacious chapter yet: a strategic pivot from traditional HR staffing to the cutting edge of AI agent management. We're not just moving from managing people to creating software; we're moving to creating and managing intelligent AI agents that will revolutionize industries. Imagine a future where intelligent AI agents seamlessly handle tasks, optimize workflows, and drive unprecedented productivity. This is the future we're building.",
    icon: HiChip,
    cta: {
      label: "See Our Vision for the Next 10 Years",
      href: "#vision",
    },
  },
];

export default function AboutJourneySection() {
  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="">
            <h1 className="text-4xl mb-8">Our Foundation & Growth</h1>
        </div>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {sections.map((section, i) => {
            const Icon = section.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-xl shadow-sm p-6 md:p-8 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <Icon className="text-indigo-600 w-8 h-8" />
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
                    {section.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                    {section.description}
                  </p>
                </div>
                {section.cta && (
                  <div className="mt-6">
                    <a
                      href={section.cta.href}
                      className="inline-block text-indigo-600 hover:text-indigo-800 font-medium transition"
                    >
                      {section.cta.label} →
                    </a>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
