import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import "./Timeline.css";

export const Timeline = ({ data }) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setHeight(rect.height);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 90%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div ref={containerRef} className="timeline-wrapper">
      <div ref={ref} className="timeline-container">
        {/* Ligne centrale */}
        <div className="timeline-line">
          <motion.div
            style={{ height: heightTransform, opacity: opacityTransform }}
            className="timeline-line-progress"
          />
        </div>

        {/* Éléments */}
        {data.map((item, index) => {
          const isLeft = index % 2 === 0;
          return (
            <motion.div
              key={index}
              className={`timeline-item ${isLeft ? "left" : "right"}`}
              initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              {isLeft ? (
                <>
                  {/* Texte à gauche, image à droite */}
                  <div className="timeline-content">
                    <h3 className="timeline-year">{item.title}</h3>
                    {item.content}
                  </div>
                  <div className="timeline-image">
                    <img src={item.image} alt={item.title} />
                  </div>
                </>
              ) : (
                <>
                  {/* Image à gauche, texte à droite */}
                  <div className="timeline-image">
                    <img src={item.image} alt={item.title} />
                  </div>
                  <div className="timeline-content">
                    <h3 className="timeline-year">{item.title}</h3>
                    {item.content}
                  </div>
                </>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};










// import { useScroll, useTransform, motion } from "framer-motion";
// import React, { useEffect, useRef, useState } from "react";

// export const Timeline = ({ data }) => {
//   const ref = useRef(null);
//   const containerRef = useRef(null);
//   const [height, setHeight] = useState(0);

//   useEffect(() => {
//     if (!ref.current) return;

//     const element = ref.current;
//     const rect = element.getBoundingClientRect();
//     setHeight(rect.height);
//   }, []);

//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start 10%", "end 50%"],
//   });

//   const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
//   const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

//   return (
//     <div
//       ref={containerRef}
//       className="relative w-full bg-white font-sans md:px-20 bg-gradient-custom pb-[5%]"
//     >
//       <div className="max-w-7xl mx-auto py-10 px-4 md:px-8 lg:px-10">
//         {/* <p className="text-black text-m md:text-base max-w-sm">
//           Here's a timeline of what I experienced through the past 5 years,
//           which have influenced my studies and professional goals.
//         </p> */}
//       </div>

//       <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
//         {data.map((item, index) => (
//           <div key={index} className="flex justify-start pt-10 md:pt-20 md:gap-10">
//             {/* LEFT SIDE - Title */}
//             <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
//               <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full flex items-center justify-center">
//                 {/* points d'étapes*/}
//                 <div className="h-4 w-4 rounded-full bg-neutral border border-none" /> 
//               </div>
//               {/* dates*/}
//               <h3 className="hidden md:block text-xl md:pl-20 md:text-6xl font-bold" style={{ color: "#0e0620" }}>
//                 {item.title}
//               </h3>
//             </div>

//             {/* RIGHT SIDE - Content */}
//             <div className="relative pl-20 pr-4 md:pl-4 w-full text-black">
//               <h3
//                 className="md:hidden block text-4xl mb-4 text-left font-bold"
//                 style={{ color: "#0e0620" }}
//               >
//                 {item.title}
//               </h3>
//               {item.content}
//             </div>
//           </div>
//         ))}

//         {/* Timeline Line */}
//         <div
//           style={{ height: `${height}px` }}
//           className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px]"

//         >
//           <motion.div
//             style={{
//               height: heightTransform,
//               opacity: opacityTransform,
//             }}
//             className="absolute inset-x-0 top-0 w-[2px] h-full
//             bg-gradient-to-b from-[#d7ff88] to-[#5633ff] rounded-full"

//           />
//         </div>
//       </div>
//     </div>
//   );
// };

