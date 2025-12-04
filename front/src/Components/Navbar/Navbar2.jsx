"use client";
import React from "react";
import { motion } from "motion/react";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
  onClick,
  disableHover = false,
  className = "", // ← on récupère className
  ...rest        // ← on récupère toutes les autres props
}) => {
  // détecter si c’est le bouton “Get in touch”
  const isCTA = className.includes("contact-menu-item");

  return (
    <div
      onMouseEnter={disableHover ? undefined : () => setActive(item)}
      className="relative"
      {...rest}
    >
      <motion.button
        type="button"
        onClick={onClick}
        transition={{ duration: 0.3 }}
        className={
          isCTA
            ? // 🌟 STYLE SPÉCIAL POUR GET IN TOUCH
              "bg-[#d7ff88] text-black px-5 py-1.5 rounded-[5px] cursor-pointer border-none"
            : // 🌟 STYLE NORMAL POUR LES AUTRES
              "cursor-pointer bg-transparent border-none hover:text-[#d7ff88] dark:text-white"
        }
      >
        {item}
      </motion.button>

      {/* pas de dropdown si disableHover = true (mobile) */}
      {!disableHover && active === item && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          <div className="absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2 pt-4">
            <motion.div
              transition={transition}
              layoutId="active"
              className="bg-[rgba(14,6,32,0.8)] backdrop-blur-sm rounded-[10px] overflow-hidden border border-black/20 dark:border-white/20 shadow-xl"
            >
              <motion.div layout className="w-max h-full p-4">
                {children}
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({ setActive, children, disableHover = false }) => {
  return (
    <nav
      // reset du state uniquement si hover actif (desktop)
      onMouseLeave={disableHover ? undefined : () => setActive(null)}
      className="relative flex justify-center group"
    >
      {/* Fond qui s'agrandit au hover */}
      <div className="absolute inset-0 flex justify-center pointer-events-none">
        <div
          className="
            bg-[rgba(14,6,32,0.8)]
            rounded-[10px]
            w-[100%]
            mx-auto
            transition-transform
            duration-300
            origin-center
            group-hover:scale-x-110
          "
        />
      </div>

      {/* Contenu (texte, items) qui ne scale pas */}
      <div className="relative flex justify-center items-center space-x-11 px-8 py-3.5">
        {children}
      </div>
    </nav>
  );
};

export const ProductItem = ({ title, description, href, src }) => {
  return (
    <a href={href} className="flex space-x-2">
      <img
        src={src}
        width={140}
        height={70}
        alt={title}
        className="shrink-0 rounded-md shadow-2xl"
      />
      <div>
        <h4 className="text-xl font-bold mb-1 text-black dark:text-white">
          {title}
        </h4>
        <p className="text-neutral-700 text-[15px] max-w-[10rem] dark:text-neutral-300">
          {description}
        </p>
      </div>
    </a>
  );
};

export const HoveredLink = ({ children, ...rest }) => {
  return (
    <a
      {...rest}
      className="text-neutral-700 dark:text-neutral-200 hover:text-[#d7ff88]"
    >
      {children}
    </a>
  );
};
