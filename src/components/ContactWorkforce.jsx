"use client";

import React from "react";

const ContactWorkforce = () => {
  return (
    <section className="flex flex-col items-center justify-center bg-[#011c42] border-b-[1px] border-white/40">
      <section className="mx-auto mt-20 flex w-full flex-col items-center justify-center px-3 pb-20">
        {/* Caption */}
        <p className="leading-trim-both caption3 mb-6 font-navbar font-medium uppercase text-[#fb9ce5]">
          [Ready to Remove Compliance from Your Critical Path?]
        </p>

        {/* Heading for Desktop */}
        <h5 className="text-[40px] font-title hidden max-w-[700px] text-center text-white sm:block">
          Whether you're scaling across states, managing monthly compliance, or
          closing a unit—Workforce executes India's employment law so you can
          focus on building.
        </h5>

        {/* Heading for Mobile */}
        <p className="heading3 font-title p-5 text-center text-white sm:hidden">
          Whether you're scaling across states, managing monthly compliance, or
          closing a unit—Workforce executes India's employment law so you can
          focus on building.
        </p>

        {/* Buttons */}
        <div className="flex w-full flex-col items-stretch justify-center gap-4 pb-14 pt-14 sm:flex-row">
          {/* <button className="font-semibold cursor-pointer whitespace-nowrap leading-6 transition-colors inline-flex items-center justify-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-4 disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:size-6 [&_svg]:shrink-0 bg-[#fb9ce5] text-[#5c0047] hover:bg-sk-dusk-tint disabled:bg-sk-dusk/20 focus-visible:ring-offset-sk-dusk focus-visible:ring-sk-dusk-shade w-full md:min-w-[15rem] md:w-fit px-6 py-4 text-base md:text-lg rounded-[2px]">
            Contact Us
          </button> */}
          <a
            href="mailto:hello@epfdesk.com"
            className="font-semibold font-subtitle cursor-pointer whitespace-nowrap leading-6 transition-colors inline-flex items-center justify-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-4 disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:size-6 [&_svg]:shrink-0 bg-[#fb9ce5] text-[#5c0047] hover:bg-sk-dusk-tint disabled:bg-sk-dusk/20 focus-visible:ring-offset-sk-dusk focus-visible:ring-sk-dusk-shade w-full md:min-w-[15rem] md:w-fit px-6 py-4 text-base md:text-lg rounded-[2px]"
          >
            Contact Us
          </a>
        </div>

        {/* Footer link */}
      </section>
    </section>
  );
};

export default ContactWorkforce;
