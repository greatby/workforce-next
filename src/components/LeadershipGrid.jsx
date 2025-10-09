// import { useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination, Navigation } from "swiper/modules";
// import { motion, AnimatePresence } from "framer-motion";
// import { BiChevronDown, BiChevronUp } from "react-icons/bi";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

// const leaders = [
//   {
//     name: "Sarah Franklin",
//     title: "Chief Executive Officer",
//     img: "/sarah.jpg",
//     color: "bg-pink-100",
//     description: "Sarah leads with a focus on mission, values, and culture.",
//   },
//   {
//     name: "Sophie Hurcombe",
//     title: "VP, People",
//     img: "/sophie.jpg",
//     color: "bg-yellow-100",
//     description: "Sophie held roles at Canva and Workfront. Now heads People at Lattice.",
//   },
//   {
//     name: "Gabe Cortes",
//     title: "Chief Financial Officer",
//     img: "/gabe.jpg",
//     color: "bg-green-100",
//     description: "Gabe manages financial planning and operations.",
//   },
//   {
//     name: "Eric Schuchman",
//     title: "Chief Product Officer",
//     img: "/eric.jpg",
//     color: "bg-green-200",
//     description: "Eric drives product strategy and innovation.",
//   },
//   {
//     name: "Cheryl Sanclemente",
//     title: "Chief Communications Officer",
//     img: "/cheryl.jpg",
//     color: "bg-blue-100",
//     description: "Cheryl oversees brand voice and communications.",
//   },
// ];

// export default function LeadershipSlider() {
//   const [activeIndex, setActiveIndex] = useState(null);

//   return (
//     <section className="py-16 px-4 sm:px-8 lg:px-16 bg-neutral-50">
//       <Swiper
//         modules={[Pagination, Navigation]}
//         spaceBetween={24}
//         slidesPerView={1.2}
//         breakpoints={{
//           640: { slidesPerView: 2 },
//           1024: { slidesPerView: 3 },
//         }}
//         pagination={{ clickable: true }}
//         navigation
//         className="pb-12"
//       >
//         {leaders.map((leader, index) => {
//           const isActive = activeIndex === index;
//           return (
//             <SwiperSlide key={index} className="!h-auto">
//               <div
//                 className={`rounded-xl shadow-md overflow-hidden border bg-white transition-all`}
//               >
//                 <div className={`p-4 flex gap-4 ${leader.color}`}>
//                   <img
//                     src={leader.img}
//                     alt={leader.name}
//                     className="w-24 h-24 rounded-lg object-cover"
//                   />
//                   <div className="flex-1">
//                     <h3 className="font-semibold text-gray-900">
//                       {leader.name}
//                     </h3>
//                     <p className="text-sm text-gray-600 mt-1">
//                       {leader.title}
//                     </p>
//                   </div>
//                   <button
//                     onClick={() =>
//                       setActiveIndex(isActive ? null : index)
//                     }
//                     className="text-gray-500 hover:text-gray-700 self-start mt-2"
//                   >
//                     {isActive ? (
//                       <BiChevronUp size={20} />
//                     ) : (
//                       <BiChevronDown size={20} />
//                     )}
//                   </button>
//                 </div>

//                 <AnimatePresence>
//                   {isActive && (
//                     <motion.div
//                       initial={{ opacity: 0, height: 0 }}
//                       animate={{ opacity: 1, height: "auto" }}
//                       exit={{ opacity: 0, height: 0 }}
//                       transition={{ duration: 0.3 }}
//                       className="p-4 border-t text-sm text-gray-700 overflow-hidden"
//                     >
//                       {leader.description}
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </div>
//             </SwiperSlide>
//           );
//         })}
//       </Swiper>
//     </section>
//   );
// }


import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import { BiChevronDown, BiChevronUp } from 'react-icons/bi'
import 'swiper/css'
import 'swiper/css/pagination'


const leaders = [
  {
    name: "Sarah Franklin",
    title: "Chief Executive Officer",
    img: "/sarah.jpg",
    color: "bg-pink-100",
    description: "Sarah leads with a focus on mission, values, and culture.",
  },
  {
    name: "Sophie Hurcombe",
    title: "VP, People",
    img: "/sophie.jpg",
    color: "bg-yellow-100",
    description: "Sophie held roles at Canva and Workfront. Now heads People at Lattice.",
  },
  {
    name: "Gabe Cortes",
    title: "Chief Financial Officer",
    img: "/gabe.jpg",
    color: "bg-green-100",
    description: "Gabe manages financial planning and operations.",
  },
  {
    name: "Eric Schuchman",
    title: "Chief Product Officer",
    img: "/eric.jpg",
    color: "bg-green-200",
    description: "Eric drives product strategy and innovation.",
  },
  {
    name: "Cheryl Sanclemente",
    title: "Chief Communications Officer",
    img: "/cheryl.jpg",
    color: "bg-blue-100",
    description: "Cheryl oversees brand voice and communications.",
  },
];

const LeadershipSlider = () => {
  const [activeIndex, setActiveIndex] = useState(null)

  return (
    <section className="py-16 px-4 sm:px-8 lg:px-16 bg-white">
      <h2 className="text-3xl font-bold text-center mb-12">Our Leadership</h2>

      <Swiper
        modules={[Pagination]}
        spaceBetween={20}
        pagination={{ clickable: true }}
        breakpoints={{
          0: { slidesPerView: 1.2 },
          640: { slidesPerView: 1.5 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="max-w-7xl mx-auto"
      >
        {leaders?.map((leader, index) => {
          const isActive = activeIndex === index

          return (
            <SwiperSlide key={index}>
              <motion.div
                layout
                className={`bg-white border rounded-xl shadow-sm overflow-hidden transition-all duration-300`}
              >
                <div className="flex p-4 gap-4">
                  <img
                    src={leader.img}
                    alt={leader.name}
                    className="w-20 h-20 rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="text-base font-semibold text-gray-900">
                      {leader.name}
                    </h3>
                    <p className="text-sm text-gray-500">{leader.title}</p>
                  </div>
                  <button
                    className="text-gray-500 hover:text-gray-800 mt-1"
                    onClick={() => setActiveIndex(isActive ? null : index)}
                  >
                    {isActive ? <BiChevronUp size={22} /> : <BiChevronDown size={22} />}
                  </button>
                </div>

                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4 }}
                      className="text-sm text-gray-700 px-4 pb-4"
                    >
                      {leader.description}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </section>
  )
}

export default LeadershipSlider
