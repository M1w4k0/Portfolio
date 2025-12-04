"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./Navbar2";
import { cn } from "../../services/utils";
import { useNavigate } from "react-router-dom";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }) {
  const [active, setActive] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();

  const handleNav = (path) => {
    navigate(path);
    setMobileOpen(false); // referme le menu mobile après clic
  };

  return (
    <div
      className={cn(
        "fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 px-4",
        className
      )}
    >
      {/* --- MOBILE NAVBAR (< md) --- */}
      <div className="flex items-center justify-between md:hidden bg-[rgba(14,6,32,0.8)] rounded-[10px] px-4 py-3">
        {/* Logo / titre simple (tu peux changer le texte) */}
        <button
          type="button"
          className="text-sm font-medium text-white"
          onClick={() => handleNav("/")}
        >
          MENU
        </button>

        {/* Bouton burger */}
        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          className="flex flex-col justify-center items-center space-y-[3px] focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          <span
            className={cn(
              "w-5 h-[2px] bg-white transition-transform",
              mobileOpen ? "translate-y-[5px] rotate-45" : ""
            )}
          />
          <span
            className={cn(
              "w-5 h-[2px] bg-white transition-opacity",
              mobileOpen ? "opacity-0" : "opacity-100"
            )}
          />
          <span
            className={cn(
              "w-5 h-[2px] bg-white transition-transform",
              mobileOpen ? "-translate-y-[5px] -rotate-45" : ""
            )}
          />
        </button>
      </div>

      {/* Menu mobile déroulé */}
      {mobileOpen && (
        <div className="md:hidden mt-2 bg-[rgba(14,6,32,0.9)] rounded-[10px] px-4 py-3 space-y-2">
          {/* ici on désactive complètement les hover/dropdowns avec disableHover */}
          <div className="flex flex-col gap-2">
            {/* HOME */}
            <MenuItem
              setActive={() => {}}
              active={null}
              item="Home"
              onClick={() => handleNav("/")}
              disableHover
            />

            {/* EXPERIENCE */}
            <MenuItem
              setActive={() => {}}
              active={null}
              item="Experience"
              onClick={() => handleNav("/experience")}
              disableHover
            />

            {/* PROJECTS */}
            <MenuItem
              setActive={() => {}}
              active={null}
              item="Projects"
              onClick={() => handleNav("/projects")}
              disableHover
            />

            {/* GET IN TOUCH (CTA) */}
            <MenuItem
              setActive={() => {}}
              active={null}
              item="Get in touch"
              onClick={() => handleNav("/contact")}
              disableHover
              className="contact-menu-item"
            />
          </div>
        </div>
      )}

      {/* --- DESKTOP NAVBAR (md et +) --- */}
      <div className="hidden md:block">
        <Menu setActive={setActive}>
          {/* HOME */}
          <MenuItem
            setActive={setActive}
            active={active}
            item="Home"
            onClick={() => navigate("/")}
          >
            <div className="flex flex-col space-y-4 text-[15px]">
              <HoveredLink href="/#whoami">Who am I</HoveredLink>
              <HoveredLink href="/#mygoals">My goals</HoveredLink>
            </div>
          </MenuItem>

          {/* EXPERIENCE */}
          <MenuItem
            setActive={setActive}
            active={active}
            item="Experience"
            onClick={() => navigate("/experience")}
          >
            <div className="flex flex-col space-y-4 text-[15px]">
              <HoveredLink href="/experience#journey">
                My journey into tech
              </HoveredLink>
              <HoveredLink href="/experience#Jobs">
                Jobs & internships
              </HoveredLink>
            </div>
          </MenuItem>

          {/* PROJECTS */}
          <MenuItem
            setActive={setActive}
            active={active}
            item="Projects"
            onClick={() => navigate("/projects")}
          >
            <div className="text-[15px] grid grid-cols-2 gap-10 p-4">
              <ProductItem
                title="Portfolio"
                href="/projects#portfolio"
                src="https://assets.aceternity.com/demos/algochurn.webp"
                description="My main web projects."
              />
              <ProductItem
                title="Backend"
                href="/projects#backend"
                src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
                description="APIs & data pipelines."
              />
              <ProductItem
                title="Data / Visualizations"
                href="/projects#data"
                src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
                description="Charts & dashboards."
              />
              <ProductItem
                title="Creative / Games"
                href="/projects#creative"
                src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
                description="Unity, sound design, experiments."
              />
            </div>
          </MenuItem>

          {/* CONTACT */}
          <MenuItem
            setActive={setActive}
            active={active}
            item="Get in touch"
            onClick={() => navigate("/contact")}
            className="contact-menu-item"
          >
            <div className="flex flex-col space-y-4 text-[15px]">
              <HoveredLink href="/contact#contact">
                Contact me
              </HoveredLink>
              <HoveredLink href="/contact#CV">
                Download my CV
              </HoveredLink>
            </div>
          </MenuItem>
        </Menu>
      </div>
    </div>
  );
}

export default NavbarDemo;
