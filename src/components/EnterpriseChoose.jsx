import React from "react";

const EnterpriseChoose = ({ data }) => {
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
          <h4 className="text-[28px] sm:text-[48px] mb-16">{data.title}</h4>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
            {data.gridData.map((item, index) => (
              <div
                key={index}
                className={`flex flex-col gap-4 border-l border-[#0b100f] pl-5 ${
                  index === 0 ? "md:border-none md:pl-0" : ""
                }`}
              >
                <p className="text-[28px] font-medium">{item.title}</p>
                <p className="text-[16px] whitespace-pre-line">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default EnterpriseChoose;
