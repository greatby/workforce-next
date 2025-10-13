"use client";

export default function AboutHero() {
    const handleScrollToPositions = (e) => {
    e.preventDefault();
    const target = document.getElementById("positions");
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  return (
    <div className="relative z-0 flex flex-col overflow-hidden bg-[#f6eede]">
      {/* Background wave outline */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-1/2 right-0 top-0 z-[11] h-[1330px] w-[1150px] bg-contain !bg-right-top bg-no-repeat sm:-right-48 sm:left-auto sm:top-36 sm:h-[1220px] sm:w-[1055px] md:-right-32 lg:-right-16"
        style={{
          backgroundImage: "url('/images/about_hero_wave_outline.svg')",
        }}
      ></div>

      {/* Hero Section */}
      <div className="relative h-screen overflow-hidden bg-[#011c42] py-48 text-white">
        {/* Gradient wave background */}
        <div
          aria-hidden="true"
          className="pointer-events-none  absolute -left-1/2 right-0 top-0 z-10 h-[1330px] w-[1150px] bg-contain !bg-right-top bg-no-repeat sm:-right-48 sm:left-auto sm:top-36 sm:h-[1220px] sm:w-[1055px] md:-right-32 lg:-right-16"
          style={{
            backgroundImage: "url('/images/about_hero_wave_gradient.svg')",
          }}
        ></div>

        <div className="flex h-full flex-col items-center justify-center gap-16 px-5">
          <h1 className="text-4xl z-20">Our Mission</h1>
          <div className="z-20 flex max-w-xl flex-col gap-8 text-center">
            <p className="text-xl text-pretty">
              Workforce is building the Regulatory Execution Engine — the
              invisible layer that connects law to execution, regulation to
              technology, and governance to growth.
            </p>
            <p className="text-xl text-pretty">
              Every economy runs on rules. But no one ever built the system that
              makes those rules work. We are changing that — by turning every
              Act, license, and workflow into a living, executable system.
            </p>
            <p className="text-xl text-pretty">
              If you’ve ever looked at chaos and thought “this could run better”
              — welcome home.
            </p>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="relative z-20 overflow-hidden pb-20 pt-24 text-sk-black">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-16 px-5">
          <div className="flex max-w-xl flex-col items-center gap-8 text-center">
            <p className="text-xl text-pretty">
              India’s regulatory fabric is one of the most complex in the world.
              36 states, 100+ Acts, 5,000+ departments — and no unified
              execution layer.
            </p>
            <p className="text-xl text-pretty">
              Workforce is mapping, codifying, and operating this infrastructure
              from the ground up. We’re not simplifying compliance — we’re
              engineering governance.
            </p>
            <p className="text-xl text-pretty">
              This is not a corporate job. This is nation-building through
              precision - <span className="font-semibold">Workforce.</span>
            </p>
          </div>

          {/* Join Our Team */}
          {/* <div className="flex w-full flex-col gap-8 rounded-md bg-[#f9f3e9] p-6 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:p-10">
            <div className="flex flex-col gap-1 md:gap-0">
              <div className="subheading2">Join Our Team</div>
              <div className="body1 w-full opacity-60 sm:w-3/4 lg:w-full">
                We're always looking for talented people who share our vision.
              </div>
            </div>
            <a href="">
              <button onClick={handleScrollToPositions} className="cursor-pointer whitespace-nowrap font-medium leading-6 transition-colors inline-flex items-center justify-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-4 disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:size-6 [&_svg]:shrink-0 bg-[#00F5D4] text-sk-black hover:bg-sk-aqua-tint focus-visible:ring-offset-sk-aqua-shade focus-visible:ring-sk-aqua disabled:opacity-30 py-2 px-3 text-base rounded-[2px]">
                View Positions
              </button>
            </a>
          </div> */}
        </div>
      </div>
    </div>
  );
}
