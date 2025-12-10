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
  className = "",
  ...rest
}) => {
  // détecter si c’est le bouton “Get in touch”
  const isCTA = className.includes("contact-menu-item");

  return (
    <div
      onMouseEnter={disableHover ? undefined : () => setActive && setActive(item)}
      className="relative"
      {...rest}
    >
      <motion.button
        type="button"
        onClick={onClick}
        transition={{ duration: 0.3 }}
        className={
          isCTA
            ? // bouton spécial "Get in touch" (on garde le contraste noir sur vert)
              "bg-[#d7ff88] text-black px-5 py-1.5 rounded-[5px] cursor-pointer border-none"
            : // tous les autres textes en blanc
              "cursor-pointer bg-transparent border-none text-white hover:text-[#d7ff88]"
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
              className="bg-[rgba(14,6,32,0.8)] backdrop-blur-sm rounded-[10px] overflow-hidden border border-white/20 shadow-xl"
            >
              <motion.div layout className="w-max h-full p-4 text-white">
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
      onMouseLeave={disableHover ? undefined : () => setActive && setActive(null)}
      className="relative flex justify-center group text-white"
    >
      {/* Fond */}
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

      {/* Contenu */}
      <div className="relative flex justify-center items-center space-x-11 px-8 py-3.5 text-white">
        {children}
      </div>
    </nav>
  );
};

export const ProductItem = ({ title, description, href, src }) => {
  return (
    <a href={href} className="flex space-x-2 text-white">
      <img
        src={src}
        width={140}
        height={70}
        alt={title}
        className="shrink-0 rounded-md shadow-2xl"
      />
      <div className="text-white">
        <h4 className="text-xl font-bold mb-1 text-white">
          {title}
        </h4>
        <p className="text-[15px] max-w-[10rem] text-white/80">
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
      className="text-white hover:text-[#d7ff88]"
    >
      {children}
    </a>
  );
};
