import './Scrollzoom.css';
import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';


// tes images à afficher :
import img1 from '/assets/titre3.png';
import img6 from '/assets/suit.png';
import img2 from '/assets/book.png';
import img4 from '/assets/cup.png';
import img5 from '/assets/plant.png';
import img3 from '/assets/fusee.png';
import img7 from '/assets/diplo.png';

export default function Scrollzoom() {
  const container = useRef(null);

  // setup du scroll
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  // toutes les images avec leur scale individuel
  const pictures = [
    { src: img1, scale: useTransform(scrollYProgress, [0, 1], [1, 4.1])},
    { src: img2, scale: useTransform(scrollYProgress, [0, 1], [1, 4.5]) },
    { src: img3, scale: useTransform(scrollYProgress, [0, 1], [1, 4.8]) },
    { src: img4, scale: useTransform(scrollYProgress, [0, 1], [1, 4.3]) },
    { src: img5, scale: useTransform(scrollYProgress, [0, 1], [1, 4.6]) },
    { src: img6, scale: useTransform(scrollYProgress, [0, 1], [1, 4.5]) },
    { src: img7, scale: useTransform(scrollYProgress, [0, 1], [1, 4.9]) },
  ];

  return (
  
   <> <div ref={container} className="zoom-section" id="experiences">
          <div className="sticky">
              {pictures.map(({ src, scale, opacity }, index) => (
                  <motion.div key={index} style={{ scale }} className="el">
                      <div className="imageContainer">
                          <img src={src} alt={`Zoom ${index}`} className="image" />
                      </div>
                  </motion.div>
              ))}
          </div>
      </div>
      {/* <div className='backblur'></div></> */}
    </>
  );
}
