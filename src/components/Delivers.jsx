import React from "react";

const Delivers = () => {
  return (
    <section className="bg-[#43045e] py-20 md:py-40">
      <div className="mx-auto max-w-7xl px-5">
        <h4 className="text-[28px] sm:text-[48px] mb-16 text-white">Turning Regulation into Intelligence—and Intelligence into Scale</h4>
        {/* Desktop Grid */}
        <div className="grid-cols-1 gap-4 sm:gap-4 grid lg:grid-cols-3 lg:gap-8">
          {[
            {
              num: "01",
              title: "From Red Tape to Source Code.",
              desc: "Each filing becomes data. Timelines, rejections, inspection notes, and fees feed the Regulatory Intelligence Graph—making every future execution faster and safer.",
              img: "images/gradient_0_desktop.svg",
            },
            {
              num: "02",
              title: "Nation-Scale on Day One.",
              desc: "36 State/UT badges + 30 Industry badges.",
              img: "images/gradient_1_desktop.svg",
            },
            {
              num: "03",
              title: "What changes when compliance becomes infrastructure.",
              desc: `◾ 0 missed renewals (auto-execute)\n◾ 30–60% faster approvals (sequenced filings)\n◾ 1 pane of glass (all departments, all entities)`,
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
              className="relative flex h-full flex-col overflow-hidden rounded-md bg-[#f9f3e9] md:min-h-[390px]"
            >
              <div className="flex flex-1 flex-col justify-between gap-10 px-8 pb-[67px] pt-10">
                <div className="flex flex-col">
                  <p className="mb-10 md:mb-20 font-dmMono text-[64px] font-light text-[#cba2fa] md:block">
                    {item.num}
                  </p>
                  <p className="text-[24px] sm:text-[32px] mb-6 text-[#43045e] md:!text-[32px]">
                    {item.title}
                  </p>
                  <p className="whitespace-pre-line text-[16px] text-[#43045e]">{item.desc}</p>
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
