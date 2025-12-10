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
    setMobileOpen(false);
  };

  return (
    <div
      className={cn(
        "fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 px-4",
        className
      )}
    >
      {/* MOBILE NAV */}
      <div className="flex items-center justify-between md:hidden bg-[rgba(14,6,32,0.8)] rounded-[10px] px-4 py-3 text-white">
        <button
          type="button"
          className="text-sm font-medium text-white"
          onClick={() => handleNav("/")}
        >
          MENU
        </button>

        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          className="flex flex-col justify-center items-center space-y-[3px]"
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

      {mobileOpen && (
        <div className="md:hidden mt-2 bg-[rgba(14,6,32,0.9)] rounded-[10px] px-4 py-3 space-y-2 text-white">
          <div className="flex flex-col gap-2">
            <MenuItem
              disableHover
              item="Home"
              className="text-white"
              onClick={() => handleNav("/")}
            />
            <MenuItem
              disableHover
              item="Experience"
              className="text-white"
              onClick={() => handleNav("/experience")}
            />
            <MenuItem
              disableHover
              item="Projects"
              className="text-white"
              onClick={() => handleNav("/projects")}
            />
            <MenuItem
              disableHover
              item="Get in touch"
              className="text-white"
              onClick={() => handleNav("/contact")}
            />
          </div>
        </div>
      )}

      {/* DESKTOP NAV */}
      <div className="hidden md:block text-white">
        <Menu setActive={setActive} className="text-white">
          {/* HOME */}
          <MenuItem
            setActive={setActive}
            active={active}
            item="Home"
            className="text-white"
            onClick={() => navigate("/")}
          >
            <div className="flex flex-col space-y-4 text-[15px] text-white">
              <HoveredLink href="/#whoami">Who am I</HoveredLink>
              <HoveredLink href="/#mygoals">My goals</HoveredLink>
            </div>
          </MenuItem>

          {/* EXPERIENCE */}
          <MenuItem
            setActive={setActive}
            active={active}
            item="Experience"
            className="text-white"
            onClick={() => navigate("/experience")}
          >
            <div className="flex flex-col space-y-4 text-[15px] text-white">
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
            className="text-white"
            onClick={() => navigate("/projects")}
          >
            <div className="text-[15px] text-white grid grid-cols-2 gap-10 p-4">
              <ProductItem
                title="YOWL"
                href="/projects#project-1"
                src="/assets/broxw.png"
                description="UGC review platform"
              />
              <ProductItem
                title="Data / Visualizations"
                href="/projects#project-2"
                src="/assets/ndata.png"
                description="Jupyter data analysis"
              />
              <ProductItem
                title="Myshop website"
                href="/projects#project-3"
                src="/assets/myshop.jpg"
                description="Fullstack & database management"
              />
              <ProductItem
                title="CRM launch project"
                href="/projects#project-4"
                src="./assets/scandinaves.png"
                description="Automation deployment"
              />
            </div>
          </MenuItem>

          {/* CONTACT */}
          <MenuItem
            item="Get in touch"
            className="contact-menu-item"
            onClick={() => navigate("/contact")}
          />
        </Menu>
      </div>
    </div>
  );
}

export default NavbarDemo;
