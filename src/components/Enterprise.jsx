import React from "react";

const Enterprise = () => {
  return (
    <section className="bg-[#f9f3e9] py-20 lg:py-40">
      <div className="mx-auto max-w-7xl px-5">
        <h4 className="text-[28px] sm:text-[48px] mb-16 text-[#5c0047]">
          Real-World Outcomes for Top Enterprises
        </h4>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-5 lg:gap-3">
          <div className="flex flex-col-reverse justify-between gap-6 border-l border-[#5c0047] px-5 py-3 lg:h-[370px] lg:flex-col lg:py-5">
            <p className="text-[16px] text-[#5c0047]">
              Number of enterprises in production with Windsurf
            </p>
            <h2 className="text-[40px] sm:text-[72px] text-[#5c0047]">
              <span>
                4000<span className="text-5xl">+</span>
              </span>
            </h2>
          </div>
          <div className="flex flex-col-reverse justify-between gap-6 border-l border-[#5c0047] px-5 py-3 lg:h-[370px] lg:flex-col lg:py-5">
            <p className="text-[16px] text-[#5c0047]">
              Improve developer velocity across all tasks by
            </p>
            <h2 className="text-[40px] sm:text-[72px] text-[#5c0047]">
              <span>
                50 <span className="text-3xl md:text-5xl">to</span> 200
                <span className="text-5xl">%</span>
              </span>
            </h2>
          </div>
          <div className="flex flex-col-reverse justify-between gap-6 border-l border-[#5c0047] px-5 py-3 lg:h-[370px] lg:flex-col lg:py-5">
            <p className="text-[16px] text-[#5c0047]">
              Return on Investment traditionally of
            </p>
            <h2 className="text-[40px] sm:text-[72px] text-[#5c0047]">
              <span>
                20 <span className="text-3xl md:text-5xl">to</span> 40
                <span className="text-5xl">x</span>
              </span>
            </h2>
          </div>
          <div className="flex flex-col-reverse justify-between gap-6 border-l border-[#5c0047] px-5 py-3 lg:h-[370px] lg:flex-col lg:py-5">
            <p className="text-[16px] text-[#5c0047]">
              Percentage of enterprise code automated by Cascade
            </p>
            <h2 className="text-[40px] sm:text-[72px] text-[#5c0047]">
              <span>
                60 <span className="text-3xl md:text-5xl">to</span> 80
                <span className="text-5xl">%</span>
              </span>
            </h2>
          </div>
          <div className="flex flex-col-reverse justify-between gap-6 border-l border-[#5c0047] px-5 py-3 lg:h-[370px] lg:flex-col lg:py-5">
            <p className="text-[16px] text-[#5c0047]">
              Top 10 Financial Services Company reduced regulatory risk by
            </p>
            <h2 className="text-[40px] sm:text-[72px] text-[#5c0047]">
              <span>$100M </span>
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Enterprise;
