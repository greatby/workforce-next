import React from "react";

const EnterpriseChoose = () => {
  return (
    <div className="relative flex w-full justify-between lg:max-h-[754px] bg-[#f9f3e9]">
      <div className="mr-16 hidden h-full lg:block">
        <img
          alt=""
          loading="lazy"
          width="256"
          height="754"
          decoding="async"
          data-nimg="1"
          className="h-full max-w-[256px] bg-[#ecfba9] object-contain object-left"
          src="images/ent_values_side_wave.svg"
        />
      </div>
      <section
        className="my-auto flex h-full w-full max-w-7xl flex-col items-center justify-center px-5 py-20 lg:py-0"
        style={{ marginRight: "max(0px, calc((100vw - 80rem) / 2))" }}
      >
        <div className="flex h-fit w-fit flex-col">
          <h4 className="text-[28px] sm:text-[48px] mb-16">
            Why Workforce Exists?
          </h4>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
            <div className="flex flex-col gap-4 border-l border-[#0b100f] pl-5 md:border-none md:pl-0">
              <p className="text-[28px] font-medium">The Problem</p>
              <p className="text-[16px]">
                The Operating Layer is Broken. Compliance isn’t paperwork—it’s
                the control plane of a nation. 100+ Acts, 5,000+ departments,
                thousands of deadlines, and no system of record.
              </p>
            </div>
            <div className="flex flex-col gap-4 border-l border-[#0b100f] pl-5">
              <p className="text-[28px] font-medium">What Workforce Is?</p>
              <p className="body3">
                A Regulatory Execution Engine : We convert law into
                infrastructure. Workforce maps every requirement, executes
                filings on your behalf, tracks officer-level progress, and
                renews everything automatically.
              </p>
            </div>
            <div className="flex flex-col gap-4 border-l border-[#0b100f] pl-5 ">
              <p className="text-[28px] font-medium">Why workforce?</p>
              <p className="body3">
                Discover — know every compliance you need. <br />
                Execute — registrations, inspections, approvals. <br />
                Track — real-time status, documents, SLAs.
                <br /> Sustain — renewals, amendments, closures
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EnterpriseChoose;
