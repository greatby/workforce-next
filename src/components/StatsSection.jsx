"use client"
export default function WindsurfStatsLayout() {
  const stats = [
    {
      phase: "PHASE ONE: MASTERY",
      quote: '"Learn the old world to build the new one"',
      points: [
        "For our clients: World-class HR services that work flawlessly today",
        "For our team: Deep understanding of what needs to be transformed",
        "For the future: The blueprint for complete automation",
      ],
    },
    {
      phase: "PHASE TWO: CREATION",
      quote: '"Build the intelligence that will replace us"',
      points: [
        "For our clients: Cutting-edge HR software that evolves with your needs",
        "For our team: The thrill of building tomorrow's workforce management",
        "For the future: Intelligent systems that surpass human capability",
      ],
    },
    {
      phase: "PHASE THREE: ORCHESTRATION",
      quote: '"Become the conductors of an AI symphony"',
      points: [
        "For our clients: Competitive advantages that last decades",
        "For our team: Careers that span the greatest transformation in work history",
        "For the future: The foundation of how work gets done for the next century",
      ],
    },
  ];

  return (
    <section className="w-full bg-[#440036] py-[100px] text-white">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-12 text-center">
          The Three Sacred Phases of Transformation
        </h2>

        <div className="flex flex-col gap-16">
          {/* Phase 1 */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-pink-300 mb-2">
              PHASE ONE: MASTERY
            </h3>
            <p className="italic text-white/90 mb-4">
              "Learn the old world to build the new one"
            </p>
            <p className="text-white/80 mb-4">
              We don't just provide HR services. We dissect every process,
              understand every pain point, and map every inefficiency. Because
              you can't revolutionize what you don't master.
            </p>
            <ul className="list-disc list-inside text-white/90 space-y-1">
              <li>
                <strong>For our clients:</strong> World-class HR services that
                work flawlessly today
              </li>
              <li>
                <strong>For our team:</strong> Deep understanding of what needs
                to be transformed
              </li>
              <li>
                <strong>For the future:</strong> The blueprint for complete
                automation
              </li>
            </ul>
          </div>

          {/* Phase 2 */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-pink-300 mb-2">
              PHASE TWO: CREATION
            </h3>
            <p className="italic text-white/90 mb-4">
              "Build the intelligence that will replace us"
            </p>
            <p className="text-white/80 mb-4">
              Every compliance check teaches our AI. Every recruitment decision
              trains our algorithms. Every payroll run feeds our predictive
              models. We're not just working—we're programming the future.
            </p>
            <ul className="list-disc list-inside text-white/90 space-y-1">
              <li>
                <strong>For our clients:</strong> Cutting-edge HR software that
                evolves with your needs
              </li>
              <li>
                <strong>For our team:</strong> The thrill of building tomorrow's
                workforce management
              </li>
              <li>
                <strong>For the future:</strong> Intelligent systems that
                surpass human capability
              </li>
            </ul>
          </div>

          {/* Phase 3 */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-pink-300 mb-2">
              PHASE THREE: ORCHESTRATION
            </h3>
            <p className="italic text-white/90 mb-4">
              "Become the conductors of an AI symphony"
            </p>
            <p className="text-white/80 mb-4">
              The final transformation: From managing people to orchestrating
              intelligence. Our AI agents handle the routine. Our teams focus on
              the revolutionary. This isn't just business evolution—it's human
              evolution.
            </p>
            <ul className="list-disc list-inside text-white/90 space-y-1">
              <li>
                <strong>For our clients:</strong> Competitive advantages that
                last decades
              </li>
              <li>
                <strong>For our team:</strong> Careers that span the greatest
                transformation in work history
              </li>
              <li>
                <strong>For the future:</strong> The foundation of how work gets
                done for the next century
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
