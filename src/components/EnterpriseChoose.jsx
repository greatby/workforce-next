


// "use client";

// import Image from "next/image";

// const EnterpriseChoose = ({ data }) => {
//   return (
//     <div className="relative flex w-full justify-between h-screen bg-[#f9f3e9] overflow-hidden lg:max-h-[754px]">
//       {/* 🌊 Background Image (Windsurf dashed wave) */}
//       <div className="absolute inset-0 z-0">
//         <Image
//           src="/images/editor_preview_wave_outline.svg"
//           alt="Windsurf preview wave outline"
//           fill
//           className="object-cover object-bottom opacity-70"
//           priority
//         />
//       </div>

//       {/* 🧭 Content Section */}
//       <section
//         className="relative z-10 my-auto flex h-full w-full max-w-7xl flex-col items-center justify-center px-5 py-20 lg:py-0"
//         style={{ marginRight: "max(0px, calc((100vw - 80rem) / 2))" }}
//       >
//         <div className="flex h-fit w-fit flex-col">
//           {/* Title */}
//           <h4 className="text-[28px] sm:text-[48px] mb-16 text-[#0b100f]">
//             {data.title}
//           </h4>

//           {/* Grid */}
//           <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
//             {data.gridData.map((item, index) => (
//               <div
//                 key={index}
//                 className={`flex flex-col gap-4 border-l border-[#0b100f] pl-5 ${
//                   index === 0 ? "md:border-none md:pl-0" : ""
//                 }`}
//               >
//                 <p className="text-[28px] font-medium">{item.title}</p>
//                 <p className="text-[16px] whitespace-pre-line">
//                   {item.description}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default EnterpriseChoose;


import Image from "next/image";

const EnterpriseChoose = ({ data }) => {
  return (
    <div className="relative flex w-full justify-between bg-[#f9f3e9] overflow-hidden">
      {/* 🌊 Background Image (Windsurf dashed wave) */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/editor_preview_wave_outline.svg"
          alt="Windsurf preview wave outline"
          fill
          className="object-cover object-bottom opacity-70"
          priority
        />
      </div>

      {/* 🧭 Content Section */}
      <section
        className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center justify-center px-5 py-20"
        style={{ marginRight: "max(0px, calc((100vw - 80rem) / 2))" }}
      >
        <div className="flex flex-col gap-16 w-full">
          {/* ✅ Title */}
          <h4 className="text-[28px] sm:text-[48px] font-semibold text-[#0b100f] text-center md:text-left">
            {data?.title}
          </h4>

          {/* ✅ Grid */}
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
            {data?.gridData?.map((item, index) => (
              <div
                key={index}
                className={`flex flex-col gap-4 border-l border-[#0b100f] pl-5 ${
                  index === 0 ? "md:border-none md:pl-0" : ""
                }`}
              >
                <p className="text-[24px] font-medium">{item.title}</p>
                <p className="text-[16px] whitespace-pre-line leading-relaxed">
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
