import React from "react";

const Delivers = () => {
  return (
    <section className="bg-[#43045e] py-20 md:py-40">
      <div className="mx-auto max-w-7xl px-5">
        <h4 className="text-[28px] sm:text-[48px] mb-16 text-white">What Does Unburdened Growth Feel Like?</h4>
        {/* Desktop Grid */}
        <div className="hidden grid-cols-2 gap-4 md:grid lg:grid-cols-3 lg:gap-8">
          {[
            {
              num: "01",
              title: "Strategic Confidence",
              desc: "Go into due diligence or investor meetings with total confidence. We deliver an airtight, audit-ready compliance posture.",
              img: "images/gradient_0_desktop.svg",
            },
            {
              num: "02",
              title: "Operational Freedom",
              desc: "Make key decisions—from caling to market entry—without the friction of legal uncertainty.",
              img: "images/gradient_1_desktop.svg",
            },
            {
              num: "03",
              title: "Reputational Integrity",
              desc: "Build your brand on a foundation of trust. We ensure your business is not just compliant, but a model of ethical and transparent operations.",
              img: "images/gradient_2_desktop.svg",
            },
            // {
            //   num: "04",
            //   title: "Personalized Suggestions & Results",
            //   desc: "Windsurf leverages your own codebase to provide personalized suggestions that minimize hallucinations and require less edits from the developer.",
            //   img: "images/gradient_3_desktop.svg",
            // },
            // {
            //   num: "05",
            //   title: "Tooling to embed and shift-left best practices",
            //   desc: "Windsurf lets you encode and enforce dev best practices across the SDLC, automatically applied by every developer.",
            //   img: "images/gradient_4_desktop.svg",
            // },
            // {
            //   num: "06",
            //   title: "Purpose built models",
            //   desc: "Windsurf trains and deploys best-in-class models for the code domain.",
            //   img: "images/gradient_5_desktop.svg",
            // },
          ].map((item, i) => (
            <div
              key={i}
              className="relative flex h-full min-h-[300px] flex-col overflow-hidden rounded-md bg-[#f9f3e9] md:min-h-[390px]"
            >
              <div className="flex flex-1 flex-col justify-between gap-10 px-8 pb-[67px] pt-10">
                <div className="flex flex-col">
                  <p className="mb-20 hidden font-dmMono text-[64px] font-light text-[#cba2fa] md:block">
                    {item.num}
                  </p>
                  <p className="text-[24px] sm:text-[32px] mb-6 text-[#43045e] md:!text-[32px]">
                    {item.title}
                  </p>
                  <p className="text-[16px] text-[#43045e]">{item.desc}</p>
                </div>
              </div>
              <img
                src={item.img}
                alt="Enterprise value card gradient wave"
                width={448}
                height={67}
                className="pointer-events-none absolute bottom-0 left-0 w-full select-none"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Delivers;
