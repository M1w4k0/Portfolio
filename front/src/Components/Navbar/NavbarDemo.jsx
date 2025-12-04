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
  const navigate = useNavigate();

  return (
    <div
      className={cn(
        "fixed top-10 inset-x-0 max-w-2xl mx-auto z-50",
        className
      )}
    >
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
  );
}

export default NavbarDemo;
