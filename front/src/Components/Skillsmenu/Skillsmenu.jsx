'use client'

import styles from './Skill.module.css';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const anim = {
  initial: { width: 0 },
  open: {
    width: "auto",
    transition: {
      duration: 0.4,
      ease: [0.23, 1, 0.32, 1]
    }
  },
  closed: { width: 0 }
};

export default function Index({ project }) {

  const [isActive, setIsActive] = useState(false);

  const handleEnter = () => {
    if (window.innerWidth > 768) {
      setIsActive(true);
    }
  };

  const handleLeave = () => {
    if (window.innerWidth > 768) {
      setIsActive(false);
    }
  };

  const {
    title1,
    title2,
    path,
    src
  } = project;

  return (
    <Link
      to={path}
      className={styles.projectLink}
    >
      <div
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
        className={styles.project}
      >
        <p>{title1}</p>

        <motion.div
          variants={anim}
          animate={isActive ? "open" : "closed"}
          className={styles.imgContainer}
        >
          <img
            src={`/medias/${src}`}
            alt={`${title1} ${title2}`}
          />
        </motion.div>

        <p>{title2}</p>
      </div>
    </Link>
  );
}