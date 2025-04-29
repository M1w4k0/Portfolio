"use client";

import React from "react";
import "./Projects.css";
import { cn } from "../../services/utils"; 
import BentoGridDemo from "../../components/BentoGrid/BentoGridDemo";
import {
  IconBoxAlignRightFilled,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { motion } from "framer-motion";

export function Projects() {
  return (
    <div className="projects-container">
      <h3 className="projects-title">Some projects</h3>
      <BentoGridDemo className="bento-grid">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            className={cn("bento-grid-item", item.className)}
            icon={item.icon}
          />
        ))}
      </BentoGridDemo>
    </div>
  );
}

// Skeletons ici (SkeletonOne, SkeletonTwo, etc.)
const SkeletonOne = () => (
  <motion.div className="skeleton-one">
    <motion.div className="skeleton-one-line" />
    <motion.div className="skeleton-one-line" />
    <motion.div className="skeleton-one-line" />
  </motion.div>
);

const items = [
  {
    title: "AI Content Generation",
    description: <span className="description">Experience the power of AI in generating unique content.</span>,
    header: <SkeletonOne />,
    className: "col-span-1",
    icon: <IconClipboardCopy className="icon" />,
  },
  {
    title: "Automated Proofreading",
    description: <span className="description">Let AI handle the proofreading of your documents.</span>,
    header: <SkeletonOne />,
    className: "col-span-1",
    icon: <IconFileBroken className="icon" />,
  },
];

export default Projects;
