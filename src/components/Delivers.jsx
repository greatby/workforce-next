import React from "react";

const Delivers = ({data}) => {
  return (
    <section className="bg-[#43045e] py-20 md:py-40">
      <div className="mx-auto max-w-7xl px-5">
        <h4 className="text-[28px] sm:text-[48px] mb-16 text-white">{data.title}</h4>
        {/* Desktop Grid */}
        <div className="grid-cols-1 gap-4 sm:gap-4 grid lg:grid-cols-3 lg:gap-8">
          {data.gridData.map((item, i) => (
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
